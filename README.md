# ODD Core

Free building blocks for One Dollar Dev: one shared stylesheet plus 66 HTML/CSS/JS components.

- **Browse:** https://onedollardev.github.io/odd-core/
- **Shared stylesheet:** `odd-core.css` at the repository root (version 1.1.0; provenance and checksums in [docs/SHARED-STYLES.md](docs/SHARED-STYLES.md)). Load it before any component styles.
- **Components:** `components/<slug>/`, each with `index.html`, source files, `README.md` and `LICENSE.txt`. Pages load the shared `../../odd-core.css`.
- **Original 1.0.0 archives:** `archive/original-1.0.0-zips/` (byte-for-byte, for provenance).

## Licensing

Everything in this repository is MIT licensed: the shared stylesheet, tooling and every component. Each component carries a copy of the MIT license in its `LICENSE.txt`. The original 1.0.0 ZIPs in `archive/` are historical copies and keep the licenses they were issued with.

## Status

Components are unreleased candidates; no release packages are published. Premium components belong in the private odd-products repository. See [import requirements](docs/IMPORT-GATE.md).

Default branch: main. Product releases use X.Y.Z; tooling starts at 0.1.0. No production deployment is enabled.
