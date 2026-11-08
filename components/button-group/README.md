# Button Group · ODD Core 1.0.0

Free foundational component. HTML/CSS/JavaScript; no build step, framework, external font or CDN.

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first, then script.js. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior and integration
An exclusive view-mode button group. One selected item remains active; use toggle-button for reversible independent selections. Tab visits each native button. odd:change emits {value}.

## Customize
Styles use the shared camelCase .odd* classes in odd-core.css with hard-coded values and no CSS variables. Override them with your own selectors after loading odd-core.css. Official blue is #086eea.

## Instances and lifecycle
`window.ODDCore["button-group"].init(root)` initializes newly inserted roots; repeated calls return the existing API. Call `api.destroy()` before removing or remounting an instance. Relationship IDs are generated uniquely when absent; preserve author-supplied IDs and guarantee their uniqueness. Listen for odd:ready before initialization; use native input/change events for native controls. Field contract version 1.0.0.

## Accessibility and browser support
Semantic elements, visible keyboard focus, readable labels and reduced-motion support. Modern browsers using CSS custom properties; browser-native controls may differ visually. Chromium interaction/reflow checks are documented at the Core root. Safari, Firefox and screen-reader acceptance remain integration checks; this is not a WCAG certification. The preview is a separate self-contained index.php for marketplace display and is intentionally excluded from the download.

## License
MIT. See LICENSE.txt; retain the copyright and permission notices. Assets are original ODD work.
