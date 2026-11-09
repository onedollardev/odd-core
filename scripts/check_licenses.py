"""Verify current Core component license metadata and notices."""
import hashlib
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
COMPONENTS = ROOT / "components"
EXPECTED_LICENSE = b"MIT"


def main():
    root_license = ROOT / "LICENSE"
    if not root_license.is_file():
        raise FileNotFoundError(f"Missing repository license: {root_license}")
    license_bytes = root_license.read_bytes()
    if not license_bytes.startswith(b"MIT License\n"):
        raise ValueError("Repository LICENSE must contain the MIT License")

    products = sorted(COMPONENTS.glob("*/product.json"))
    if not products:
        raise ValueError(f"No component product metadata found under {COMPONENTS}")

    for product_path in products:
        component_dir = product_path.parent
        product = json.loads(product_path.read_text(encoding="utf-8"))
        sku = product.get("sku", product_path)
        if product.get("license") != EXPECTED_LICENSE.decode("ascii"):
            raise ValueError(f"{sku}: product.json license must be MIT")

        license_path = component_dir / "LICENSE.txt"
        if not license_path.is_file():
            raise FileNotFoundError(f"{sku}: missing {license_path}")
        component_license = license_path.read_bytes()
        if component_license != license_bytes:
            digest = hashlib.sha256(component_license).hexdigest()
            raise ValueError(f"{sku}: LICENSE.txt differs from root LICENSE (sha256 {digest})")

        component_path = component_dir / "component.json"
        if component_path.is_file():
            component = json.loads(component_path.read_text(encoding="utf-8"))
            if component.get("license") != EXPECTED_LICENSE.decode("ascii"):
                raise ValueError(f"{sku}: component.json license must be MIT")

    print(f"Validated MIT metadata and license notices for {len(products)} current Core components.")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(f"License check failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
