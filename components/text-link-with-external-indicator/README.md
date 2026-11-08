# Text Link with External Indicator · ODD Core 1.0.0

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior
Build inline anchor variants for regular, muted and external destinations. Use real href values, visible underline/focus treatment and an original decorative external-link icon. New-tab links include an accessible opens-in-new-tab cue and rel=noopener when needed; default to same-tab navigation. Preserve browser context menu, modified clicks and visited behavior. Never make disabled-looking links still navigate; render plain text when unavailable.


## Integration
No script lifecycle required. Keep native input/change events. Assign unique IDs and radio group names when copying authored markup.
odd:ready identifies component, version, contractVersion and instanceId. odd:change adds value and source. No global Field runtime required. Set data-odd-name on supported radio pickers to choose a stable submitted name; otherwise generated names keep JS instances independent. Native form controls remain the value source. Host application owns real navigation, uploads, persistence and validation.

## Styling and accessibility
Inherited --odd-* tokens; #086eea accent; neutral surfaces; 4px corners except functional circular forms. Scoped odd-* classes and data-odd-* hooks. Respect visible focus, names, labels and reduced motion. Preserve semantic heading levels when embedding. Modern Chromium checks are recorded in validation.md; Firefox, Safari and screen-reader integration checks remain. No WCAG certification claim.

## Files and license
Customer ZIP includes index.html, style.css, script.js where needed, editable local assets where used, README.md, LICENSE.txt and component.json. preview/index.php embeds all styling, logic and media; exclude it from customer releases. Free use/modification; attribution required on republishing; resale prohibited. All sample SVG/media assets are original.

## Production brief
Build Text Link with External Indicator as standalone ODD Core 1.0.0 using semantic HTML, scoped CSS; no framework, CDN or build step.

Build inline anchor variants for regular, muted and external destinations. Use real href values, visible underline/focus treatment and an original decorative external-link icon. New-tab links include an accessible opens-in-new-tab cue and rel=noopener when needed; default to same-tab navigation. Preserve browser context menu, modified clicks and visited behavior. Never make disabled-looking links still navigate; render plain text when unavailable.

Use odd-* classes, data-odd-* behavior hooks and inherited --odd-* tokens. Keep 90–95% neutral surfaces, 5–10% #086eea emphasis, restrained effects and 4px corners where appropriate. Preserve native semantics and events; add no unnecessary script.

Deliver index.html, style.css, README.md, LICENSE.txt and component.json in _core/navigation/text-link-with-external-indicator/releases/text-link-with-external-indicator-1.0.0.zip. Create a separate _core/navigation/text-link-with-external-indicator/preview/index.php with embedded styling/logic, only essential component labels, and a clean 3-across tile. Verify 240–400px reflow, zoom, keyboard/focus, relevant states, reset, reduced motion and multiple instances. License: free use; attribution when republishing; no resale.

Inspiration: https://drive.google.com/file/d/1M8bTovqof6XIArkFcFpE98l15jUyw7qc/view?usp=drivesdk
