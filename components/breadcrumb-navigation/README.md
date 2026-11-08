# Breadcrumb Navigation · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build nav labeled Breadcrumb containing an ordered list of real ancestor anchors and a nonlinked current page marked aria-current=page. Hide separator artwork from assistive technology. Permit wrapping at narrow widths; provide an optional scrollable treatment for long trails without hiding the current location. Include a three-level local demo with meaningful targets. Never replace anchors with click-only spans.


## Integration
No script lifecycle required. Keep native input/change events. Assign unique IDs and radio group names when copying authored markup.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. Free use/modification; attribution required on republishing; resale prohibited. All sample SVG/media assets are original.

## Production brief
Build Breadcrumb Navigation as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS; no framework, CDN or build step.

Build nav labeled Breadcrumb containing an ordered list of real ancestor anchors and a nonlinked current page marked aria-current=page. Hide separator artwork from assistive technology. Permit wrapping at narrow widths; provide an optional scrollable treatment for long trails without hiding the current location. Include a three-level local demo with meaningful targets. Never replace anchors with click-only spans.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Preserve native semantics and events; add no unnecessary script.

Deliver index.html, style.css, README.md, LICENSE.txt and component.json in _core/navigation/breadcrumb-navigation/releases/breadcrumb-navigation-1.0.0.zip. Create a separate _core/navigation/breadcrumb-navigation/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. License: free use; attribution when republishing; no resale.

Inspiration: https://drive.google.com/file/d/1EyXxkaIIYeIfXPG4IYhhW3Zw_Cf4U5tq/view?usp=drivesdk
