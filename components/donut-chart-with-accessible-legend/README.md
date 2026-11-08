# Donut Chart with Accessible Legend · ODD Core 1.0.0

## Start
Open index.html locally; no build step, framework or CDN. Load style.css before script.js when supplied. Copy component markup and relevant CSS into your app under one odd-scope wrapper. odd-demo and odd-demo__canvas are presentation only.

## Behavior
Render original SVG segments from configurable nonnegative numeric values; compute proportions and handle zero total without division errors. Pair the chart with a visible legend and accessible table/list containing exact names and values. Use labels and distinct patterns as well as restrained color. Add a local dataset toggle for the preview, emitting odd:change. Do not rely on hover for essential data or invent analytics.


## Integration
window.ODDCore["donut-chart-with-accessible-legend"].init(root) initializes a new root and returns an idempotent API. Call api.destroy() before removing/remounting. Public extra API: setData,.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. This development version is licensed under the MIT License; retain the copyright and permission notices as required by LICENSE.txt. All sample SVG/media assets are original.

## Production brief
Build Donut Chart with Accessible Legend as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS and vanilla JavaScript; no framework, CDN or build step.

Render original SVG segments from configurable nonnegative numeric values; compute proportions and handle zero total without division errors. Pair the chart with a visible legend and accessible table/list containing exact names and values. Use labels and distinct patterns as well as restrained color. Add a local dataset toggle for the preview, emitting odd:change. Do not rely on hover for essential data or invent analytics.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Expose window.ODDCore["donut-chart-with-accessible-legend"].init(root); support idempotent initialization, independent instances and destroy() cleanup. Document event payloads and use unique relationship IDs.

Deliver index.html, style.css, script.js, README.md, LICENSE.txt and component.json in _core/charts/donut-chart-with-accessible-legend/releases/donut-chart-with-accessible-legend-1.0.0.zip. Create a separate _core/charts/donut-chart-with-accessible-legend/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. Historical brief specified an attribution/no-resale license. The current development version uses MIT; the original archive retains its historical license.

Inspiration: https://drive.google.com/file/d/13nm57TQxT3J63pN2btkWp8iwKxSi_WEd/view?usp=drivesdk
