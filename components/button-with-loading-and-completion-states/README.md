# Button with Loading and Completion States · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build a native action button that starts an explicitly simulated local task. Set aria-busy during work and block repeated activation while retaining an understandable label. Show a reduced-motion-compatible spinner, then success text and a Reset control returning to default. Include a deterministic error/retry demo path. Cancel timers on destroy. Do not claim real saving or submit to a server. This extends the base Button with asynchronous states.


## Integration
window.ODDCore["button-with-loading-and-completion-states"].init(root) initializes a new root and returns an idempotent API. Call api.destroy() before removing/remounting. Public extra API: setState,.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. MIT licensed; see LICENSE.txt. All sample SVG/media assets are original.

## Production brief
Build Button with Loading and Completion States as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS and vanilla JavaScript; no framework, CDN or build step.

Build a native action button that starts an explicitly simulated local task. Set aria-busy during work and block repeated activation while retaining an understandable label. Show a reduced-motion-compatible spinner, then success text and a Reset control returning to default. Include a deterministic error/retry demo path. Cancel timers on destroy. Do not claim real saving or submit to a server. This extends the base Button with asynchronous states.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Expose window.ODDCore["button-with-loading-and-completion-states"].init(root); support idempotent initialization, independent instances and destroy() cleanup. Document event payloads and use unique relationship IDs.

Deliver index.html, style.css, script.js, README.md, LICENSE.txt and component.json in _core/buttons/button-with-loading-and-completion-states/releases/button-with-loading-and-completion-states-1.0.0.zip. Create a separate _core/buttons/button-with-loading-and-completion-states/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. MIT licensed; see LICENSE.txt.

Inspiration: https://drive.google.com/file/d/18l8JGAk7zuD6m2HSUUFqkbM3_MFFxsWs/view?usp=drivesdk
