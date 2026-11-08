# Checkbox · ODD Core 1.0.0

Free foundational component. HTML/CSS; no build step, framework, external font or CDN.

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior and integration
Independent native choices; checked is the source of truth. Space toggles; disabled items cannot activate. Use a fieldset and legend when grouping related form choices.

## Customize
Styles use the shared camelCase .odd* classes in odd-core.css with hard-coded values and no CSS variables. Override them with your own selectors after loading odd-core.css. Official blue is #086eea.

## Instances and lifecycle
Use native controls and events. When copying radio groups or authored relationship IDs, assign unique names/IDs. No script lifecycle is required.

## Accessibility and browser support
Semantic elements, visible keyboard focus, readable labels and reduced-motion support. Modern browsers using CSS custom properties; browser-native controls may differ visually. Chromium interaction/reflow checks are documented at the Core root. Safari, Firefox and screen-reader acceptance remain integration checks; this is not a WCAG certification. The preview is a separate self-contained index.php for marketplace display and is intentionally excluded from the download.

## License
MIT. See LICENSE.txt; retain the copyright and permission notices. Assets are original ODD work.
