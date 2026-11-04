# Shared stylesheet provenance

odd-core.css is the exact user-supplied stylesheet odd-core(8).css, received November 4, 2026. Its internal version is 1.0.1.

SHA-256: 332cb3bbf7c88d3db38e9a1aa46f80a7bc2bbb648a0ddce2d6ed58da9cba292a

The import preserves all 910 lines without modification, including document defaults and existing storefront styles. It uses camelCase .odd* classes, hard-coded values, and transparent preview bodies. Load it before component-specific styles. Do not assume the legacy standalone kebab-case style.css is equivalent.

Builds should pin this repository commit and verify the checksum. Generated self-contained previews may embed the stylesheet; canonical source is maintained only at the root of this repository.
