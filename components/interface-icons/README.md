# Interface Icons · ODD Core 1.0.0

Free foundational component. HTML/CSS; no build step, framework, external font or CDN.

## Start
Open index.html locally. Copy the component markup and its relevant CSS into your page. The `.odd-demo` and `.odd-demo__canvas` rules are presentation only; remove them when embedding in your application. Keep a single `.odd-scope` wrapper around related ODD components so tokens inherit consistently. Load style.css before script.js where present.

## Behavior and integration
Ten original SVG assets: plus, upload, settings, bookmark, heart, bell, edit, check, close, info. 24px viewBox; currentColor; 1.5px strokes. Icons are decorative inside a named control. For standalone meaningful images supply an accessible name. assets/ contains editable SVG files.

## Customize
Change `--odd-*` variables on the inherited scope. Official blue is #086eea. Radius defaults to 4px; functional round controls retain their form. Base controls have 44px minimum height. All styles are ODD-namespaced. Colors, spacing, font stack and motion are embedded so the download works independently. No global Field runtime is required.

## Instances and lifecycle
Use native controls and events. When copying radio groups or authored relationship IDs, assign unique names/IDs. No script lifecycle is required.

## Accessibility and browser support
Semantic elements, visible keyboard focus, readable labels and reduced-motion support. Modern browsers using CSS custom properties; browser-native controls may differ visually. Chromium interaction/reflow checks are documented at the Core root. Safari, Firefox and screen-reader acceptance remain integration checks; this is not a WCAG certification. The preview is a separate self-contained index.php for marketplace display and is intentionally excluded from the download.

## License
MIT. See LICENSE.txt; retain the copyright and permission notices. Assets are original ODD work.
