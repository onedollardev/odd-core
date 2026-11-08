# ODD Core

Free MIT-licensed building blocks for One Dollar Dev.

This repository contains shared styles, infrastructure and the first Core migration candidate. The 63 Core component candidates (Button plus the former odd-products quarantine set) are under components/, each loading the shared ../../odd-core.css, using the supplied odd-core.css 1.0.1 (shared styles are now at 1.1.0; see docs/SHARED-STYLES.md). Historical archives remain preserved separately. No component releases are published yet.

Components will live directly beneath `components/<slug>/`, with one authoritative `odd-core.css` at the repository root. See [import requirements](docs/IMPORT-GATE.md). Premium components belong in the private odd-products repository.

Default branch: main. Product releases use X.Y.Z; tooling starts at 0.1.0. No production deployment is enabled.
