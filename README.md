# Array Access

Logo and assets for Array Access, hosted on GitHub Pages.

## Usage

Reference the logo from any website:

```html
<img src="https://philippfromme.github.io/arrayaccess/logo.svg" alt="Array Access">
```

As a favicon:

```html
<link rel="icon" type="image/svg+xml" href="https://philippfromme.github.io/arrayaccess/logo.svg">
```

## Files

- `logo.svg` — Square logo (7×7 viewBox)
- `logo-{32,64,128,256,512}.png` — Generated PNG versions (transparent)
- `logo-{32,64,128,256,512}-white.png` — Generated PNG versions (white background)
- `index.html` — Showcase page with usage documentation

## Build

Generate PNG versions from the SVG:

```sh
npm install
npm run build
```

This produces `logo-32.png` through `logo-512.png`.

## Hosting

This repo is deployed via GitHub Pages. Enable it in Settings → Pages → Source: `main` branch, root `/`.

The page is available at: https://philippfromme.github.io/arrayaccess/
