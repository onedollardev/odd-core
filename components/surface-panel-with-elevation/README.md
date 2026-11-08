# Surface Panel with Elevation · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then styles.css. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build a div/section surface primitive with flat, outlined and low-elevation modifiers using shared border/background/shadow tokens. Keep content semantics host-selected; do not impose article/card headers or actions. Provide tokenized padding and nested surface examples without excessive shadow stacking. Show two compact panels in the preview. Test light/dark scope overrides, text contrast and focus outlines inside surfaces. This is a container foundation, distinct from Card.


## Integration
No script lifecycle required. Keep native input/change events. Assign unique IDs and radio group names when copying authored markup.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. MIT licensed; see LICENSE.txt. All sample SVG/media assets are original.

## Production brief
Build Surface Panel with Elevation as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS; no framework, CDN or build step.

Build a div/section surface primitive with flat, outlined and low-elevation modifiers using shared border/background/shadow tokens. Keep content semantics host-selected; do not impose article/card headers or actions. Provide tokenized padding and nested surface examples without excessive shadow stacking. Show two compact panels in the preview. Test light/dark scope overrides, text contrast and focus outlines inside surfaces. This is a container foundation, distinct from Card.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Preserve native semantics and events; add no unnecessary script.

Deliver index.html, style.css, README.md, LICENSE.txt and component.json in _core/layout/surface-panel-with-elevation/releases/surface-panel-with-elevation-1.0.0.zip. Create a separate _core/layout/surface-panel-with-elevation/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. MIT licensed; see LICENSE.txt.

Inspiration: https://drive.google.com/file/d/13UQ7zkOUVOoZhqBnMpO4yupsPUPrvGaO/view?usp=drivesdk
