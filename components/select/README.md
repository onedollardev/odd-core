# Select · ODD Core 1.0.0

Free foundational component. HTML/CSS; no build step, framework, external font or CDN.

## Start
Open index.html locally. Copy the component markup into your page and load odd-core.css first. The oddScope and oddDemo classes are preview layout only; keep a single oddScope wrapper around related ODD components when embedding.

## Behavior and integration
Styled native select preserves browser keyboard and mobile picker behavior. Native change provides selected value. For a custom combobox, create a separate component with a complete interaction pattern.

## Customize
Styles use the shared camelCase .odd* classes in odd-core.css with hard-coded values and no CSS variables. Override them with your own selectors after loading odd-core.css. Official blue is #086eea.

## Instances and lifecycle
Use native controls and events. When copying radio groups or authored relationship IDs, assign unique names/IDs. No script lifecycle is required.

## Accessibility and browser support
Semantic elements, visible keyboard focus, readable labels and reduced-motion support. Modern browsers using CSS custom properties; browser-native controls may differ visually. Chromium interaction/reflow checks are documented at the Core root. Safari, Firefox and screen-reader acceptance remain integration checks; this is not a WCAG certification. The preview is a separate self-contained index.php for marketplace display and is intentionally excluded from the download.

## License
See LICENSE.txt. Free use and modification; attribution required when sharing/republishing; resale prohibited. Assets are original ODD work.
