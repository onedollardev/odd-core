# Textarea with Character Counter · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Extend Textarea with configurable maxlength, a visible current/maximum counter and helper text. Use the native value and maxlength behavior; update on input and form reset, including paste and composition. Document that JavaScript/native maxlength count UTF-16 units unless a grapheme implementation is deliberately added. Associate helper/counter accessibly; announce limit warnings politely rather than every keystroke. Include disabled and initial-value examples.
Counts UTF-16 code units, matching native maxlength. Set disabled on the textarea for unavailable state.

## Integration
window.ODDCore["textarea-with-character-counter"].init(root) initializes a new root and returns an idempotent API. Call api.destroy() before removing/remounting. Public extra API: native controls and odd:change events.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. MIT licensed; see LICENSE.txt. All sample SVG/media assets are original.

## Production brief
Build Textarea with Character Counter as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS and vanilla JavaScript; no framework, CDN or build step.

Extend Textarea with configurable maxlength, a visible current/maximum counter and helper text. Use the native value and maxlength behavior; update on input and form reset, including paste and composition. Document that JavaScript/native maxlength count UTF-16 units unless a grapheme implementation is deliberately added. Associate helper/counter accessibly; announce limit warnings politely rather than every keystroke. Include disabled and initial-value examples.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Expose window.ODDCore["textarea-with-character-counter"].init(root); support idempotent initialization, independent instances and destroy() cleanup. Document event payloads and use unique relationship IDs.

Deliver index.html, style.css, script.js, README.md, LICENSE.txt and component.json in _core/forms/textarea-with-character-counter/releases/textarea-with-character-counter-1.0.0.zip. Create a separate _core/forms/textarea-with-character-counter/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. MIT licensed; see LICENSE.txt.

Inspiration: https://drive.google.com/file/d/1HLX7nDvWo6ONx8fOzMhyJlCPzBVdgJ_M/view?usp=drivesdk
