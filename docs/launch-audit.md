# Core launch reconciliation and QA

**Audit date:** 2026-11-09

**Work ID:** `CORE-LAUNCH-WAVE-1-QA`

**Owner:** Copilot project session `102f27da-4955-4fc6-a5f0-e725371c5d15`, branch `onedollardev-bot-core-launch-catalog`

This is a planning and QA record only. It does not publish or deactivate products, change availability, update `products-live`, or touch server, Stripe, or MySQL data.

## Reconciliation with odd-products PR #145

PR [#145](https://github.com/onedollardev/odd-products/pull/145) is open on `planning/launch-100-release-queue`. Its queue has 464 rows: 434 paid and 30 Core. The current `odd-core` worktree contains 66 distinct Core records in `components/*/product.json`.

| Reconciliation | Count |
|---|---:|
| Current Core records | 67 |
| Core rows in the PR queue | 30 |
| Current Core SKUs matching a queued SKU | 26 |
| Current Core SKUs absent from the queue | 41 |
| Queued Core SKUs with no matching component directory in this worktree | 4 |

The PR README's claim that 36 Core records are not inventoried cannot be reproduced from the current SKU-level evidence: 26 of the 30 queue SKUs match current component records, while four queue rows have no component directory here. Consequently, 67 current records minus 26 matches equals 41 unqueued records, not 36. No aliases or substitute SKU mappings were invented.

**The 26 current Core records already represented in the queue:** `ODD-CORE-000001`–`000018`, `ODD-CORE-000027`, `ODD-CORE-000031`, `ODD-CORE-000033`, `ODD-CORE-000034`, `ODD-CORE-000046`, `ODD-CORE-000048`, `ODD-CORE-000050`, and `ODD-CORE-000068`.

**Queue rows with no matching component directory in this worktree:**

| SKU | Queue name | Reconciliation note |
|---|---|---|
| `ODD-CORE-000028` | Avatar Group with Overflow Count | Historical queue record; source directory absent |
| `ODD-CORE-000029` | Profile Identity Row | Historical queue record; source directory absent |
| `ODD-CORE-000030` | Avatar with Initials Fallback | Historical queue record; source directory absent |
| `ODD-CORE-000051` | Native Media Player | Historical queue record; source directory absent |

`ODD-CORE-000046` Responsive Image with Aspect Ratio now has current source in `components/responsive-image-with-aspect-ratio/`, restored from its existing historical Core 1.0.0 source and identified as an unreleased 1.0.1 candidate. The original Core SKU and `source_dir` attribution are retained. The similarly named paid `ODD-000446` remains a separate SKU; no alias, availability, production listing, or `products-live` entry was changed. Current source uses MIT; the historical 1.0.0 license and ZIP are unchanged.

**The 41 current Core records absent from PR #145's queue:**

| SKU | Product |
|---|---|
| `ODD-CORE-000019` | Progress |
| `ODD-CORE-000020` | Spinner |
| `ODD-CORE-000021` | Accordion |
| `ODD-CORE-000022` | Divider |
| `ODD-CORE-000023` | Tabs |
| `ODD-CORE-000024` | Dialog |
| `ODD-CORE-000025` | Interface Icons |
| `ODD-CORE-000026` | Accordion Group with Exclusive Expansion |
| `ODD-CORE-000032` | Breadcrumb Navigation |
| `ODD-CORE-000035` | Calendar Date Picker |
| `ODD-CORE-000036` | Donut Chart with Accessible Legend |
| `ODD-CORE-000037` | Checkbox Group with Select All |
| `ODD-CORE-000038` | Dismissible Filter Chips |
| `ODD-CORE-000039` | Color Swatch Picker |
| `ODD-CORE-000040` | Labeled Section Divider |
| `ODD-CORE-000041` | Dropdown Action Menu |
| `ODD-CORE-000042` | Form Field with Helper and Error Text |
| `ODD-CORE-000043` | File Drop Zone with Selection Preview |
| `ODD-CORE-000044` | Responsive CSS Grid |
| `ODD-CORE-000045` | Solid Interface Icon Set |
| `ODD-CORE-000047` | Text Input with Prefix and Suffix |
| `ODD-CORE-000049` | Text Link with External Indicator |
| `ODD-CORE-000052` | Confirmation Dialog with Cancel and Confirm |
| `ODD-CORE-000053` | Multi-Select with Removable Choices |
| `ODD-CORE-000054` | Pagination with Page Controls |
| `ODD-CORE-000055` | Surface Panel with Elevation |
| `ODD-CORE-000056` | Radio Choice Cards |
| `ODD-CORE-000057` | Dual Range Slider |
| `ODD-CORE-000058` | Star Rating with Half-Star Values |
| `ODD-CORE-000059` | Scrollable Panel with Styled Native Scrollbar |
| `ODD-CORE-000060` | Segmented Radio Control |
| `ODD-CORE-000061` | Searchable Single Select |
| `ODD-CORE-000062` | Collapsible Sidebar Navigation |
| `ODD-CORE-000063` | Stack Layout with Spacing Tokens |
| `ODD-CORE-000064` | Step Progress Indicator |
| `ODD-CORE-000065` | Compact Switch with Inline State Label |
| `ODD-CORE-000066` | Vertical Tabs |
| `ODD-CORE-000067` | Textarea with Character Counter |
| `ODD-CORE-000069` | Help Popover with Interactive Content |
| `ODD-CORE-000070` | Responsive App Top Bar |
| `ODD-CORE-000071` | Prose Typography Block |

The five queue-only records are not treated as missing current source candidates or silently replaced by other products. Preserve any historical sold ZIPs and source files at their existing durable location; this worktree has no ZIP binaries in `archive/`.

## Catalog presence and launch count

**Owner-confirmed storefront/catalog status:** 70 products are live in the current catalog. The owner reports that about nine products do not have files on the server, but their exact identities have not been verified. Do not attribute this gap to specific SKUs based only on the current evidence. Server file availability and delivery for the other catalog entries are also unverified; do not infer that the remaining 61 are deliverable.

Additional user-provided evidence is the four-page PDF **“One Dollar Dev _ Web Development Components for $1.pdf”**, identified by the owner as the live site. Its first page shows the storefront title and “70 products”; page four shows “24 of 70 components loaded” and “Load more”. Thus the PDF supports the 70-item storefront listing count and shows at least 24 product cards rendered, not that all 70 cards were individually inspected. Card titles visible in the supplied evidence allow the following name-level reconciliation:

| Visible card title in supplied PDF | Core SKU/name match | Evidence status |
|---|---|---|
| Avatar Group with Overflow Count | `ODD-CORE-000028` | Exact title match; current catalog SKU is not shown |
| Profile Identity Row | `ODD-CORE-000029` | Exact title match; current catalog SKU is not shown |
| Avatar with Initials Fallback | `ODD-CORE-000030` | Exact title match; current catalog SKU is not shown |
| Responsive Image with Aspect Ratio | `ODD-CORE-000046` | Title match only; identity remains ambiguous because the read-only scrape reports a same-name/slug paid listing as `ODD-000446` |
| Native Media Player | `ODD-CORE-000051` | Exact title match; current catalog SKU is not shown |
| Empty State with Optional Action | `ODD-CORE-000050` | Exact title match |
| Keyboard Shortcut Hint Tooltip | `ODD-CORE-000048` | Name is included in visible title; exact SKU not shown |
| Alert Notification Count Badge | `ODD-CORE-000031` | Possible name match only; exact SKU not shown |
| Inline Form Error Alert | `ODD-CORE-000027` | Exact title match |

These are storefront title matches, not confirmation of current SKU identity, server files, or downloads. In particular, do not treat the `ODD-CORE-000046` title card as proof that the Core SKU is the paid `ODD-000446` product. The paid-catalog session's read-only scrape of `/results` and its two `/fetch/products.php` pages on 2026-11-09 returned 70 unique product cards and previously matched 29 of 30 historical Core rows by name/slug; restoring current Core source does not resolve that storefront identity conflict or identify which approximately nine live catalog entries lack server files, or verify delivery for the rest. The historical queue's `live_snapshot_unverified` labels were not changed in this repository; owner confirmation of the 70-item catalog state is recorded separately from SKU-level and delivery verification.

For the provisional 100-item catalog target, the paid-catalog session is selecting 20 paid additions. This work recommends the ten Core candidates below, yielding a provisional 30 additions to the 70 owner-confirmed catalog-live entries. The arithmetic describes catalog selection only; it does not mean the existing 70 are all downloadable or that the new candidates are live. Identify the approximately nine products missing server files and verify delivery for each catalog entry before claiming release readiness. Do not change availability or combine Core `000046` with paid `000446`.

## Recommended Core candidates

All ten are currently in the unqueued Core set. They are **recommendations, not confirmed live products**. No SKU or catalog status was changed.

| SKU | Candidate | Category | Why it is a useful launch addition | Chris design review |
|---|---|---|---|---|
| `ODD-CORE-000035` | Calendar Date Picker | forms | Useful date control with bounds, date navigation, and a native submitted value | Yes — review compact calendar density and state styling |
| `ODD-CORE-000036` | Donut Chart with Accessible Legend | charts | Adds a charting use case and a text legend/table with exact values | Yes — review segment distinction; README's pattern requirement was not present in the SVG output |
| `ODD-CORE-000043` | File Drop Zone with Selection Preview | forms | Useful local file-selection flow with type/size checks and removal | Yes — review drag/drop and error-state presentation |
| `ODD-CORE-000052` | Confirmation Dialog with Cancel and Confirm | overlays | Common confirmation pattern with native modal behavior and focus restoration | No specific design blocker found; visual sign-off remains outstanding |
| `ODD-CORE-000053` | Multi-Select with Removable Choices | forms | Covers search, multiple native selections, removable chips, and clear/reset | No specific design blocker found; visual sign-off remains outstanding |
| `ODD-CORE-000054` | Pagination with Page Controls | navigation | Covers bounded page selection and accessible current/disabled states | No specific design blocker found; visual sign-off remains outstanding |
| `ODD-CORE-000061` | Searchable Single Select | forms | Adds a keyboard-operable searchable combobox and stable submitted value | No specific design blocker found; visual sign-off remains outstanding |
| `ODD-CORE-000066` | Vertical Tabs | navigation | Adds a distinct vertical navigation pattern with associated panels | Yes — review navigation hierarchy and narrow layout |
| `ODD-CORE-000067` | Textarea with Character Counter | forms | Practical form field with native max length, accessible description, and reset | No specific design blocker found; visual sign-off remains outstanding |
| `ODD-CORE-000070` | Responsive App Top Bar | navigation | Useful app-shell pattern with a narrow-screen navigation disclosure | Yes — review app-shell visual hierarchy and responsive disclosure |

## Product-specific QA evidence

Checked the source preview in Chromium at a 1280px host viewport and a 360px same-origin iframe viewport. Each of the ten had no document-level horizontal overflow at either width. Keyboard handler paths were exercised with DOM keyboard events; this does not emulate assistive technology or all trusted OS keyboard activation. The 360px iframe check validates layout at that width, not every intermediate width.

| SKU | Interaction, keyboard, and preview checks |
|---|---|
| `ODD-CORE-000035` | ArrowRight moved calendar focus by one day; selecting the focused day updated the local date value, selected cell, and status. At 360px the component remained within the viewport. |
| `ODD-CORE-000036` | Dataset toggle changed legend values and emitted `odd:change`; all-zero/negative input rendered “No data” without division errors. Text legend/table remained present. At 360px no overflow. |
| `ODD-CORE-000043` | Synthetic PDF selection was accepted and exposed filename/size; a text file was rejected, selection cleared, and error announced. No actual file-picker dialog, server upload, or network transfer was tested. At 360px no overflow. |
| `ODD-CORE-000052` | Native `showModal()` opened; Cancel received initial focus; close restored trigger focus, reset `aria-expanded`, and emitted `{confirmed:false}`. No destructive operation is performed. At 360px no overflow. |
| `ODD-CORE-000053` | Checkbox selection produced a selected chip; removing the chip cleared its checkbox and restored trigger focus; Escape closed the choices and returned focus. At 360px no overflow. |
| `ODD-CORE-000054` | Page 2 selection updated `aria-current` and sample text; an out-of-range request clamped to page 8 and disabled Next. At 360px no overflow. |
| `ODD-CORE-000061` | Filtering to “Form”, ArrowDown and Enter selected Forms and synchronized the hidden value; empty results and Escape preserved the committed selection. At 360px no overflow. |
| `ODD-CORE-000066` | ArrowDown and End moved selected/focused tab; only one panel remained visible and tab/panel references resolved. At 360px no overflow. |
| `ODD-CORE-000067` | Input updated the counter and `odd:change`; native form reset restored sample text and count. At 360px no overflow. |
| `ODD-CORE-000070` | At 360px the toggle opened the disclosure and synchronized `aria-expanded`; Escape closed it and restored toggle focus. `aria-controls` resolved. At 1280px the navigation rendered without overflow. |

**README, license, and package checks:** all ten contain `README.md`, `LICENSE.txt`, `product.json`, `component.json`, `index.html`, and `script.js`. Product/component SKUs, names, versions, categories, licenses, and existing `source_dir` attribution were checked and left unchanged. All ten `LICENSE.txt` files have the same SHA-256 as the repository MIT license (`36d63852c7cd4d28f359313a1c27a114edb4a74500123fd97e0328e6584aa324`). Previews use local Core sources and the shared stylesheet; no third-party runtime/CDN dependency was found.

No customer ZIP exists for these candidates in this checkout. `scripts/build_candidate.py` is explicitly Button-only, and the archive directory contains only its README (the `.gitignore` excludes `*.zip`). Therefore package contents, release ZIP integrity, delivery links, and actual purchase/free-download flows remain unverified; no package was generated and no historical ZIP was touched.

## Held for backlog

`ODD-CORE-000062` Collapsible Sidebar Navigation was reviewed as a possible candidate but not selected. At 360px its nav remained visible after the compact toggle and after Escape, rather than acting as the documented narrow-screen disclosure/drawer. Leave it in backlog for a dedicated behavior/design pass; no fix was made because it is not in this selected slate.

The other 30 current unqueued Core records not in the ten-item slate remain backlog candidates: `ODD-CORE-000019`–`000026`, `000032`, `000037`–`000042`, `000044`–`000045`, `000047`, `000049`, `000055`–`000060`, `000063`–`000065`, `000069`, and `000071`. The source and release queue were not changed to mark these or the recommended ten as draft/live.

## Ownership and limitations

Work ID `CORE-LAUNCH-WAVE-1-QA` reserves the ten recommendation SKUs above to the owner/session shown at the top of this document. The sidebar (`000062`) was also checked and held with its finding recorded. Another agent should select different products or first coordinate before repeating these checks.

No Firefox, Safari, screen-reader, reduced-motion preference emulation, real file picker, release ZIP, download/checkout, or production-write test was performed. No product code or product availability was changed. Existing source attribution and licenses were retained. No historical archive or sold ZIP was present in the worktree or modified.

## Current license verification

The current-source licensing audit covered all 67 `components/*/product.json` records: each declares MIT, all 67 component `LICENSE.txt` files byte-match the root MIT `LICENSE`, and all 66 present `component.json` manifests declare MIT. `scripts/check_licenses.py` now enforces these checks and runs in the candidate workflow. The Button-only candidate package build was also run locally; its ZIP includes the root MIT notice and `product.json` declares MIT. The restored Responsive Image candidate's local source package was separately checked to contain its MIT license and manifests. This applies to current sources and future packages only; historical release ZIPs and sold archives retain their original terms.

## ODD-CORE-000046 source restore evidence

`components/responsive-image-with-aspect-ratio/` was restored from the original Core 1.0.0 source in `odd-products` (`products-live/.../releases/responsive-image-with-aspect-ratio-1.0.0/`), read-only. The demo SVG is byte-identical to the original apart from a trailing newline. Current source is an unreleased MIT 1.0.1 candidate; the historical 1.0.0 source, ZIP, preview, and "ODD Core Free License" were not modified or copied into this repository. The paid `ODD-000446` listing is a distinct SKU and was not aliased.

Chromium-class browser-canvas checks: 4:3 → 1:1 → 16:9 changed the frame ratio (1.333/1/1.778); Contain changed object-fit; reset restored 4:3/cover; `odd:change` events and status text fired; initialization is idempotent; a missing image switched to the labeled fallback without retry; no horizontal overflow at 240px, 360px and 1280px. Not tested: real keyboard arrow navigation (native radio behavior only), Firefox/Safari, screen readers, multiple-instance mounting, `srcset` examples, release ZIP, preview/index.php, delivery.

## Update: Core-46 reclassified, Stripe IDs recorded

Owner direction: `ODD-CORE-000046` Responsive Image with Aspect Ratio is a paid product, `ODD-000446` (it was miscategorized as Core). Its current Core source directory was removed from this repository, so current Core records are now 66; the earlier "67" and restore sections above are historical. Historical odd-products release files and the old ZIP are untouched. The ten Core launch additions (`000035`, `036`, `043`, `052`, `053`, `054`, `061`, `066`, `067`, `070`) now carry their live Stripe product/price IDs, download path and source directory in `product.json` (recorded from owner-supplied values; not verified against Stripe from here).
