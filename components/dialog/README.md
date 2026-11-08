# Dialog · ODD Core 1.0.0

Free foundational component. HTML/CSS/JavaScript; no build step, framework, external font or CDN.

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior and integration
Native dialog.showModal provides modal focus containment and Escape dismissal. Dialog is labeled by its heading; close restores focus to its opener. Browser support requires native dialog. Inside iframe previews the modal is contained by the frame. No backend action.

## Customize
Styles use the shared camelCase .odd* classes in odd-core.css plus a small scoped styles.css, all with hard-coded values and no CSS variables. Override them with your own selectors after loading. Official blue is #086eea.

## Instances and lifecycle
`window.ODDCore["dialog"].init(root)` initializes newly inserted roots; repeated calls return the existing API. Call `api.destroy()` before removing or remounting an instance. Relationship IDs are generated uniquely when absent; preserve author-supplied IDs and guarantee their uniqueness. Listen for odd:ready before initialization; use native input/change events for native controls. Field contract version 1.0.0.

## Accessibility and browser support
Semantic elements, visible keyboard focus, readable labels and reduced-motion support. Modern browsers using CSS custom properties; browser-native controls may differ visually. Chromium interaction/reflow checks are documented at the Core root. Safari, Firefox and screen-reader acceptance remain integration checks; this is not a WCAG certification. The preview is a separate self-contained index.php for marketplace display and is intentionally excluded from the download.

## License
See LICENSE.txt. Free use and modification; attribution required when sharing/republishing; resale prohibited. Assets are original ODD work.
