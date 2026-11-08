# Solid Interface Icon Set · ODD Core 1.0.0

## Start
Open index.html locally; no build step, framework or CDN. Load style.css before script.js when supplied. Copy component markup and relevant CSS into your app under one odd-scope wrapper. odd-demo and odd-demo__canvas are presentation only.

## Behavior
Create ten original solid SVGs matching the existing plus, upload, settings, bookmark, heart, bell, edit, check, close and info vocabulary. Use a consistent 24px viewBox and currentColor fill, preserving optical weight and legibility at 16–32px. Include editable assets and a simple grid. Hide decorative artwork; meaningful standalone icons need names. This is a filled variation, not a copy of the existing outline assets.


## Integration
No script lifecycle required. Keep native input/change events. Assign unique IDs and radio group names when copying authored markup.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. This development version uses MIT; retain the copyright and permission notices in LICENSE.txt. All sample SVG/media assets are original.

## Production brief
Build Solid Interface Icon Set as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS; no framework, CDN or build step.

Create ten original solid SVGs matching the existing plus, upload, settings, bookmark, heart, bell, edit, check, close and info vocabulary. Use a consistent 24px viewBox and currentColor fill, preserving optical weight and legibility at 16–32px. Include editable assets and a simple grid. Hide decorative artwork; meaningful standalone icons need names. This is a filled variation, not a copy of the existing outline assets.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Preserve native semantics and events; add no unnecessary script.

Deliver index.html, style.css, assets/*.svg, README.md, LICENSE.txt and component.json in _core/icons/solid-interface-icon-set/releases/solid-interface-icon-set-1.0.0.zip. Create a separate _core/icons/solid-interface-icon-set/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. The historical brief specified no resale; the development version uses MIT.

Inspiration: https://drive.google.com/file/d/1hf9FldTMUJw1TWw2XFlhwKOCJOwUx4RU/view?usp=drivesdk
