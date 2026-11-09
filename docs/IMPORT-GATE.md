# Core import and licensing requirements

Only verified free original ODD components belong in this public repository. Premium source must remain private.

Current component sources and future packages in this repository use the MIT License. Each component's `product.json` and any `component.json` must declare `"license": "MIT"`; each `components/<slug>/LICENSE.txt` must match the root `LICENSE`. Run `python3 scripts/check_licenses.py` to validate all current components. Candidate package builds must include the MIT notice and preserve the matching MIT metadata.

Historical release archives retain the license terms under which they were issued. Do not edit, replace, or infer relicensing of historical ZIPs or sold releases from the current MIT license. In particular, historical licenses that require attribution or prohibit resale remain attached to those original versions; use and redistribution must follow their original terms. A future MIT release does not relicense an older archive.

Place components directly in `components/<slug>/` and maintain a single authoritative root `odd-core.css`. Pin shared stylesheet revisions for reproducible builds. Validate standalone source, interactive preview, keyboard behavior, mobile reflow and reduced motion before publishing releases.
