#!/usr/bin/env python3
"""Build a static gallery of every Core component for GitHub Pages."""
import html
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"


def main():
    if SITE.exists():
        shutil.rmtree(SITE)
    SITE.mkdir()
    shutil.copy(ROOT / "odd-core.css", SITE / "odd-core.css")

    cards = []
    for meta_path in sorted((ROOT / "components").glob("*/product.json")):
        folder = meta_path.parent
        if not (folder / "index.html").exists():
            continue
        meta = json.loads(meta_path.read_text())
        shutil.copytree(folder, SITE / "components" / folder.name)
        name = html.escape(meta.get("name", folder.name))
        version = html.escape(str(meta.get("version", "")))
        href = f"components/{html.escape(folder.name)}/index.html"
        cards.append(
            f'<section class="card"><header><h2>{name}</h2><span>v{version}</span>'
            f'<a href="{href}">Open</a></header>'
            f'<iframe src="{href}" title="{name} preview" loading="lazy"></iframe></section>'
        )

    page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ODD Core · Component gallery</title>
<style>
body{{margin:0;padding:16px;font:16px/1.4 system-ui,sans-serif;background:#f5f5f5;color:#111}}
h1{{font-size:1.25rem;margin:0 0 16px}}
.grid{{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}}
.card{{background:#fff;border:1px solid #ddd;border-radius:8px;overflow:hidden}}
.card header{{display:flex;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid #eee}}
.card h2{{font-size:1rem;margin:0;flex:1}}
.card span{{color:#666;font-size:.8rem}}
.card a{{font-size:.9rem}}
iframe{{width:100%;height:220px;border:0;display:block}}
</style>
</head>
<body>
<h1>ODD Core component gallery</h1>
<div class="grid">
{chr(10).join(cards)}
</div>
</body>
</html>
"""
    (SITE / "index.html").write_text(page)
    print(f"Built gallery with {len(cards)} component(s)")


if __name__ == "__main__":
    main()
