"""Build upload-ready Core release ZIPs and previews for selected SKUs. Never deploys.

Output layout (matches the server's core/<category>/<slug>/ layout):
  <out>/core/<category>/<slug>/releases/<slug>-<version>.zip
  <out>/core/<category>/<slug>/preview/{index.php,script.js,styles.css,README.md}
  <out>/MANIFEST.csv
"""
import argparse
import csv
import hashlib
import json
import pathlib
import re
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parents[1]
ZIP_ALLOWLIST = {"LICENSE.txt", "README.md", "component.json", "index.html", "script.js", "style.css"}
SKU_RE = re.compile(r"ODD-CORE-\d{6}")
LINK_RE = re.compile(r'<link rel="stylesheet" href="[^"]*">')
SHARED_LINK = '<link rel="stylesheet" href="../../odd-core.css">'


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def find_component(sku):
    for product_path in sorted((ROOT / "components").glob("*/product.json")):
        product = json.loads(product_path.read_text(encoding="utf-8"))
        if product["sku"] == sku:
            return product_path.parent, product
    raise SystemExit(f"{sku}: no current component source")


def package_readme(text, slug):
    start = re.sub(r"load odd-core\.css first, (then styles\.css, )?then script\.js", "load style.css first, then script.js", text)
    start = re.sub(r"Load style\.css before script\.js when supplied\.", "Load style.css before script.js.", start)
    start = re.sub(r"(## Files and license\n).*?(\n\n## |\Z)",
                   r"\1This package contains index.html, style.css, script.js, README.md, LICENSE.txt and component.json. "
                   r"A separate marketplace preview is not included. MIT licensed; see LICENSE.txt.\2",
                   start, flags=re.S)
    start = re.sub(r"\n## Production brief\n.*\Z", "\n", start, flags=re.S)
    if "odd-core.css" in start or "styles.css" in start or "index.php" in start:
        raise ValueError(f"{slug}: package README still references an unpackaged file")
    return start.rstrip() + "\n"


def build_one(sku, out, root_license, existing):
    source, product = find_component(sku)
    slug, category, version = product["slug"], product["category"], product["version"]
    if product["license"] != "MIT" or version != "1.0.0" or product["price"] != 0:
        raise ValueError(f"{sku}: unexpected license, version or price")
    target = out / "core" / category / slug
    rel = f"core/{category}/{slug}"
    if any(path.startswith(rel + "/") for path in existing) or target.exists():
        raise FileExistsError(f"{sku}: folder collision at {rel}")

    html = (source / "index.html").read_text(encoding="utf-8")
    if "<?" in html or re.search(r"https?://(?!www\.w3\.org/)", html):
        raise ValueError(f"{sku}: PHP or external reference in index.html")
    links = LINK_RE.findall(html)
    if not links:
        raise ValueError(f"{sku}: no stylesheet link")
    if (source / "style.css").is_file():
        css = (source / "style.css").read_bytes()
    else:
        if links[0] != SHARED_LINK:
            raise ValueError(f"{sku}: unexpected stylesheet links {links}")
        css = (ROOT / "odd-core.css").read_bytes()
        if (source / "styles.css").is_file():
            css += b"\n" + (source / "styles.css").read_bytes()
    script = (source / "script.js").read_bytes()
    license_text = (source / "LICENSE.txt").read_bytes()
    if license_text != root_license:
        raise ValueError(f"{sku}: LICENSE.txt differs from root MIT license")

    def with_css(name):
        first = True

        def replace(_match):
            nonlocal first
            if first:
                first = False
                return f'<link rel="stylesheet" href="{name}">'
            return ""
        return LINK_RE.sub(replace, html)

    manifest = json.loads((source / "component.json").read_text(encoding="utf-8"))
    manifest["files"] = ["index.html", "script.js", "component.json", "README.md", "LICENSE.txt", "style.css"]
    manifest_bytes = (json.dumps(manifest, indent=2) + "\n").encode()
    entries = {
        "LICENSE.txt": license_text,
        "README.md": package_readme((source / "README.md").read_text(encoding="utf-8"), slug).encode(),
        "component.json": manifest_bytes,
        "index.html": with_css("style.css").encode(),
        "script.js": script,
        "style.css": css,
    }
    if set(entries) - ZIP_ALLOWLIST:
        raise ValueError(f"{sku}: non-allowlisted package file")

    (target / "releases").mkdir(parents=True)
    (target / "preview").mkdir()
    zip_path = target / "releases" / f"{slug}-{version}.zip"
    with zip_path.open("xb") as stream:
        with zipfile.ZipFile(stream, "w", zipfile.ZIP_DEFLATED) as archive:
            for name in sorted(entries):
                info = zipfile.ZipInfo(name, (1980, 1, 1, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                archive.writestr(info, entries[name])

    preview = {
        "index.php": with_css("styles.css").encode(),
        "script.js": script,
        "styles.css": css,
        "README.md": (f"# {product['name']} preview\n\nMarketplace preview for {sku}. It is a self-contained "
                      "display page (index.php, script.js, styles.css) and is not part of the customer ZIP. "
                      "Current source is MIT licensed.\n").encode(),
    }
    for name, data in preview.items():
        (target / "preview" / name).write_bytes(data)
    return category, slug, sku, zip_path


def validate(out, rows):
    problems = []
    for category, slug, sku, zip_path in rows:
        with zipfile.ZipFile(zip_path) as archive:
            names = archive.namelist()
            if archive.testzip() is not None:
                problems.append(f"{sku}: corrupt ZIP")
            if set(names) != ZIP_ALLOWLIST or len(names) != len(set(names)):
                problems.append(f"{sku}: ZIP names {sorted(names)} do not match the allowlist")
            manifest = json.loads(archive.read("component.json"))
            if manifest["license"] != "MIT" or manifest["sku"] != sku or sorted(manifest["files"]) != sorted(names):
                problems.append(f"{sku}: component.json mismatch")
            if archive.read("LICENSE.txt") != (ROOT / "LICENSE").read_bytes():
                problems.append(f"{sku}: LICENSE.txt is not the MIT license")
            if re.search(rb"https?://(?!www\.w3\.org/)", archive.read("index.html") + archive.read("style.css") + archive.read("script.js")):
                problems.append(f"{sku}: external URL in package")
    for path in out.rglob("*"):
        if path.name in {".DS_Store", "preview.png"} or path.suffix == ".png":
            problems.append(f"forbidden file {path}")
    return problems


def write_manifest(out, rows):
    with (out / "MANIFEST.csv").open("w", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(["category", "slug", "sku", "kind", "path", "size", "sha256"])
        for category, slug, sku, zip_path in sorted(rows):
            base = out / "core" / category / slug
            for path in sorted(p for p in base.rglob("*") if p.is_file()):
                data = path.read_bytes()
                writer.writerow([category, slug, sku, "file", path.relative_to(out).as_posix(), len(data), sha256(data)])
                if path == zip_path:
                    with zipfile.ZipFile(path) as archive:
                        for info in sorted(archive.infolist(), key=lambda i: i.filename):
                            member = archive.read(info)
                            writer.writerow([category, slug, sku, "zip-member",
                                             f"{path.relative_to(out).as_posix()}::{info.filename}", len(member), sha256(member)])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", type=pathlib.Path, required=True)
    parser.add_argument("--sku", action="append", required=True, help="Core SKU; repeat for each product")
    parser.add_argument("--existing-paths", type=pathlib.Path,
                        help="Read-only listing of existing server files, one core-relative path per line")
    args = parser.parse_args()
    for sku in args.sku:
        if not SKU_RE.fullmatch(sku):
            raise SystemExit(f"invalid SKU {sku}")
    existing = set()
    if args.existing_paths:
        existing = {line.strip().lstrip("./") for line in args.existing_paths.read_text().splitlines() if line.strip()}
        existing = {p if p.startswith("core/") else "core/" + p for p in existing}
    root_license = (ROOT / "LICENSE").read_bytes()
    rows, collisions = [], []
    for sku in args.sku:
        try:
            rows.append(build_one(sku, args.out, root_license, existing))
        except FileExistsError as error:
            collisions.append(str(error))
    problems = validate(args.out, rows)
    write_manifest(args.out, rows)
    print(json.dumps({"built": len(rows), "collisions": collisions, "problems": problems}))
    sys.exit(1 if collisions or problems else 0)


if __name__ == "__main__":
    main()
