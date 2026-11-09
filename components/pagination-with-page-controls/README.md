# Pagination with Page Controls · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build a labeled navigation region with Previous, numbered pages and Next controls. Mark the current page with aria-current=page and disable impossible directions. Compute a compact window and noninteractive ellipses from total pages; clamp invalid current values. Use buttons for local data paging and document anchors for actual URLs. Emit odd:change with page number and update a small local sample list without claiming network results.


## Integration
window.ODDCore["pagination-with-page-controls"].init(root) initializes a new root and returns an idempotent API. Call api.destroy() before removing/remounting. Public extra API: setPage(page).
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime is required. Native controls remain the value source where present. The host application owns persistence and any network, upload or navigation effects.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. A Chromium smoke-check was performed for launch-candidate review; Firefox, Safari and screen-reader integration remain unverified. This is not a WCAG certification claim.

## Files and license
The current preview is index.html and loads the shared ../../odd-core.css; see this directory for the component source files. No customer release ZIP or preview/index.php exists here yet, so package verification remains pending. MIT licensed; see LICENSE.txt.

## Production brief
Build Pagination with Page Controls as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS and vanilla JavaScript; no framework, CDN or build step.

Build a labeled navigation region with Previous, numbered pages and Next controls. Mark the current page with aria-current=page and disable impossible directions. Compute a compact window and noninteractive ellipses from total pages; clamp invalid current values. Use buttons for local data paging and document anchors for actual URLs. Emit odd:change with page number and update a small local sample list without claiming network results.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Expose window.ODDCore["pagination-with-page-controls"].init(root); support idempotent initialization, independent instances and destroy() cleanup. Document event payloads and use unique relationship IDs.

Deliver index.html, style.css, script.js, README.md, LICENSE.txt and component.json in _core/navigation/pagination-with-page-controls/releases/pagination-with-page-controls-1.0.0.zip. Create a separate _core/navigation/pagination-with-page-controls/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. MIT licensed; see LICENSE.txt.

Inspiration: https://drive.google.com/file/d/1-WDZbXIdVG1QzgKF1LumUYkzdxLFGh6D/view?usp=drivesdk
