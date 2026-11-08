# Radio Choice Cards · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build a fieldset of two or three labeled radio cards with title and optional supporting line. Preserve native inputs, one shared group name and standard arrow/Space behavior. Derive border/check indicator from checked state, not a detached class, and show disabled/focus states. Use unique group names when copying instances. Avoid nested interactive content inside labels. This is a card treatment of Radio Group.
Assign a unique density name to each copied group. Native arrow and Space handling; no JavaScript needed.

## Integration
No script lifecycle required. Keep native input/change events. Assign unique IDs and radio group names when copying authored markup.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. Free use/modification; attribution required on republishing; resale prohibited. All sample SVG/media assets are original.

## Production brief
Build Radio Choice Cards as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS; no framework, CDN or build step.

Build a fieldset of two or three labeled radio cards with title and optional supporting line. Preserve native inputs, one shared group name and standard arrow/Space behavior. Derive border/check indicator from checked state, not a detached class, and show disabled/focus states. Use unique group names when copying instances. Avoid nested interactive content inside labels. This is a card treatment of Radio Group.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Preserve native semantics and events; add no unnecessary script.

Deliver index.html, style.css, README.md, LICENSE.txt and component.json in _core/forms/radio-choice-cards/releases/radio-choice-cards-1.0.0.zip. Create a separate _core/forms/radio-choice-cards/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. License: free use; attribution when republishing; no resale.

Inspiration: https://drive.google.com/file/d/1sk_HS5pHtuO4rMowHrqAOBZnx_66hBJF/view?usp=drivesdk
