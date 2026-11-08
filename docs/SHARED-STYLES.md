# Shared stylesheet provenance

odd-core.css is the exact user-supplied stylesheet odd-core(8).css, received November 4, 2026. Its internal version was 1.0.1.

## Version 1.1.0 (current)

Additive release. Lines 1-910 of 1.0.1 are unchanged apart from the version header and table of contents. Section 13 "Component Patterns" promotes the scoped rules from the Core components' `styles.css` files (tabs, vertical tabs, breadcrumb, pagination, accordion, dialog, menu, popover, progress, steps, sidebar, app bar, grid, stack, surface, scroll panel, prose, dividers, text link) and one `.oddErrorSummary .oddLink:visited` guard. Per-component width rules stay in each component.

SHA-256 (1.1.0, 1064 lines): 92bd1b1fb8c0dad65b36de0e5bc4234fb983dfa3666700e3484fb64d0f4d0c9d

All 63 quarantined Core components pass their Playwright checks (360px and 1280px, reduced motion, behaviour) with 1.1.0.

## Version 1.0.1 (previous)

SHA-256: 332cb3bbf7c88d3db38e9a1aa46f80a7bc2bbb648a0ddce2d6ed58da9cba292a

The import preserves all 910 lines without modification, including document defaults and existing storefront styles. It uses camelCase .odd* classes, hard-coded values, and transparent preview bodies. Load it before component-specific styles. Do not assume the legacy standalone kebab-case style.css is equivalent.

Builds should pin this repository commit and verify the checksum. Generated self-contained previews may embed the stylesheet; canonical source is maintained only at the root of this repository.
