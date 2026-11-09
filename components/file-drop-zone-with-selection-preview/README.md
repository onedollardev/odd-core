# File Drop Zone with Selection Preview · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build a drop zone backed by a visible or accessibly triggered native file input. Support keyboard browsing, dragover/drop and local selection display. Validate PDF MIME/extension and a configurable 10MB maximum; clear invalid selection and announce errors. Render filenames as text, support Remove and reset, and emit selected file metadata. Never claim upload completion; server validation/upload belongs to the host. This extends File Input.


## Integration
window.ODDCore["file-drop-zone-with-selection-preview"].init(root) initializes a new root and returns an idempotent API. Call api.destroy() before removing/remounting. Public extra API: getFile(), clear().
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime is required. Native controls remain the value source where present. The host application owns persistence and any network, upload or navigation effects.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. A Chromium smoke-check was performed for launch-candidate review; Firefox, Safari and screen-reader integration remain unverified. This is not a WCAG certification claim.

## Files and license
The current preview is index.html and loads the shared ../../odd-core.css; see this directory for the component source files. No customer release ZIP or preview/index.php exists here yet, so package verification remains pending. MIT licensed; see LICENSE.txt.

## Production brief
Build File Drop Zone with Selection Preview as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS and vanilla JavaScript; no framework, CDN or build step.

Build a drop zone backed by a visible or accessibly triggered native file input. Support keyboard browsing, dragover/drop and local selection display. Validate PDF MIME/extension and a configurable 10MB maximum; clear invalid selection and announce errors. Render filenames as text, support Remove and reset, and emit selected file metadata. Never claim upload completion; server validation/upload belongs to the host. This extends File Input.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Expose window.ODDCore["file-drop-zone-with-selection-preview"].init(root); support idempotent initialization, independent instances and destroy() cleanup. Document event payloads and use unique relationship IDs.

Deliver index.html, style.css, script.js, README.md, LICENSE.txt and component.json in _core/forms/file-drop-zone-with-selection-preview/releases/file-drop-zone-with-selection-preview-1.0.0.zip. Create a separate _core/forms/file-drop-zone-with-selection-preview/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. MIT licensed; see LICENSE.txt.

Inspiration: https://drive.google.com/file/d/1w6-Ob_MnawunWzQ8OQBAFBEclG2Ny5QU/view?usp=drivesdk
