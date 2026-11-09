# Responsive Image with Aspect Ratio · ODD Core 1.0.1

This current source restores Core SKU `ODD-CORE-000046` from the existing ODD Core 1.0.0 source under `products-live/cards/responsive-image-with-aspect-ratio/releases/`. The historical `source_dir` attribution is retained in `component.json`. Current source and future packages use MIT; the historical 1.0.0 release and its ZIP retain their original license and bytes.

## Start

Open `index.html` locally. Load `odd-core.css`, then `styles.css`, then `script.js`. No build step, framework, CDN or remote image is required. The sample landscape SVG is the original local demo asset.

## Behavior

The native radio controls select 1:1, 4:3 or 16:9 framing and `cover` or `contain` object fit. The frame reserves its selected aspect ratio before the image loads. The image includes intrinsic `width` and `height`; lazy loading is enabled in the demo. A failed image is replaced with a neutral fallback whose accessible name preserves the image description. The component does not retry failed image requests.

Use the browser-native `srcset` and `sizes` attributes for responsive sources, for example:

```html
<img
  src="photo-640.jpg"
  srcset="photo-640.jpg 640w, photo-1280.jpg 1280w"
  sizes="(max-width: 600px) 100vw, 34rem"
  width="1280"
  height="960"
  loading="lazy"
  alt="Describe the image's meaningful content">
```

Provide matching intrinsic dimensions for the selected source set to reduce layout shift. Keep meaningful `alt` text even when decorative captions are omitted.

## Integration and lifecycle

`window.ODDCore["responsive-image-with-aspect-ratio"].init(root)` initializes a matching root, returns the same API on repeated initialization and returns an API with `destroy()` to remove its listeners before a root is removed. Independent instances receive independent native radio-group names; set `data-odd-name` to choose their stable base.

The component emits bubbling `odd:ready` and `odd:change` events. `odd:change` has `detail` fields `component`, `version`, `contractVersion`, `instanceId`, `value` and `source`. `value` contains the selected `aspectRatio`, `objectFit` and image `available` state (`null` until load/error). `source` is `user`, `reset`, `init`, `image-load` or `image-error`. Host code owns persistence and image URLs.

## Styling and accessibility

Component selectors are scoped to this component's classes/data hooks and inherit the repository's `oddScope` presentation. Use native fieldsets, legends and radios; keyboard operation and focus behavior are supplied by the browser and shared Core stylesheet. The frame supports reflow from 240px and uses a CSS aspect ratio to reserve space. No WCAG certification claim is made.

## Files and license

Future package contents are listed in `component.json`; the marketplace `preview/index.php` is intentionally not part of this source restore. Current source and future packages are MIT licensed; retain the copyright and permission notice in `LICENSE.txt`. This new MIT license does not relicense the historical 1.0.0 release or ZIP.

## Source brief

The original ODD Core brief calls for a semantic figure with optional caption, 1:1/4:3/16:9 aspect options, width/height, object-fit and `srcset`/`sizes` support, an original local image, a labeled failure fallback, lazy loading, responsive layout, visible focus, and independent initialization with `destroy()`. This version restores the archived source and implements those current-source behaviors without changing the historical release.
