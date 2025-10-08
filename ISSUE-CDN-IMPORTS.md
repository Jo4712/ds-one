# Bug Report: CDN Example - Components Not Rendering

## Issue Summary

Components (button-v1, text-v1, app-v1) do not render when DS one is loaded from CDN using the dist/index.esm.js entry point.

## Environment

- **Version**: 0.1.0-beta
- **Package**: ds-one
- **CDN**: jsDelivr
- **Browser**: All browsers
- **Example File**: `examples/cdn.html`

## Steps to Reproduce

1. Open `examples/cdn.html` in a browser
2. Observe that the page is blank
3. Check browser console for errors

## Expected Behavior

The page should display:

- Heading: "DS one from CDN"
- Body text: "This example loads DS one directly from jsDelivr CDN"
- Primary button: "No npm install needed!"

## Actual Behavior

- Page renders blank
- Components are not registered
- Browser console shows module resolution errors

## Root Cause

The `dist/index.esm.js` file uses relative imports that don't work when loaded from CDN:

```javascript
// Current (broken) imports in dist/index.esm.js
export { App } from "../DS/2 Core/app-v1.js";
export { Button } from "../DS/2 Core/button-v1.js";
import "../DS/2 Core/app-v1.js";
import "../DS/2 Core/button-v1.js";
```

When loaded from CDN like:

```javascript
import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/dist/index.esm.js";
```

The relative paths `../DS/2 Core/` resolve incorrectly, causing module not found errors.

## Proposed Solutions

### Solution 1: Use Absolute CDN Paths in dist/index.esm.js

```javascript
// For CDN usage
export { App } from "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/app-v1.js";
export { Button } from "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/button-v1.js";
```

**Cons**: Hardcodes CDN URL, version-specific

### Solution 2: Create Separate CDN Build

Create `dist/index.cdn.js` with proper import maps:

```javascript
// dist/index.cdn.js
const baseUrl = new URL('.', import.meta.url).href.replace('/dist/', '/');
export { App } from `${baseUrl}DS/2 Core/app-v1.js`;
```

### Solution 3: Use Import Maps (Recommended)

Update CDN example to use import maps:

```html
<script type="importmap">
  {
    "imports": {
      "ds-one/": "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/"
    }
  }
</script>
<script type="module">
  // Then components can use clean imports
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/app-v1.js";
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/button-v1.js";
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/text-v1.js";
</script>
```

### Solution 4: Direct Component Imports (Quick Fix)

Update `examples/cdn.html` to import components directly:

```html
<script type="module">
  // Import components directly from CDN
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/app-v1.ts";
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/button-v1.ts";
  import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/text-v1.ts";
</script>
```

## Workaround

For now, users should import components directly instead of using the bundle:

```html
<!doctype html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/1%20Root/screen.css"
    />
    <script type="module">
      import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/app-v1.ts";
      import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/button-v1.ts";
      import "https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta/DS/2 Core/text-v1.ts";
    </script>
  </head>
  <body>
    <app-v1 type="default">
      <text-v1 variant="heading">Hello from CDN</text-v1>
      <button-v1 variant="primary">Click me</button-v1>
    </app-v1>
  </body>
</html>
```

## Impact

- **Severity**: High
- **Affected Users**: Anyone using CDN installation method
- **Workaround Available**: Yes (direct imports)

## Related Files

- `dist/index.esm.js` - Entry point with broken imports
- `examples/cdn.html` - Example demonstrating the bug
- `dist/index.js` - CommonJS entry (also affected)

## Action Items

- [ ] Decide on solution approach
- [ ] Update dist/index.esm.js build process
- [ ] Create proper CDN bundle or update example
- [ ] Test CDN loading in multiple browsers
- [ ] Update documentation
- [ ] Publish fixed version (0.1.1-beta)

## Labels

- bug
- high-priority
- cdn
- build-system

---

**Reported**: 2025-10-08
**Version**: 0.1.0-beta
**Reported by**: Jo4712
