# Quick Publish Guide

## Ready to Publish! ✅

Your DS one package is fully configured and ready to publish to NPM.

## Package Details

- **Name**: ds-one
- **Version**: 0.1.0-beta
- **Size**: 78.4 KB (147 KB unpacked)
- **Files**: 76 files included
- **License**: MIT

## Quick Start: Publish to NPM

### 1. Login to NPM (one-time setup)

```bash
npm login
```

### 2. Publish as Beta (Recommended)

```bash
npm publish --tag beta
```

### 3. Install in Another Project

```bash
cd /path/to/your-project
bun add ds-one@beta
```

## Usage in Your Project

### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="node_modules/ds-one/DS/1 Root/screen.css" />
    <script type="module">
      import "ds-one";
    </script>
  </head>
  <body>
    <button-v1 variant="primary" key="myButton">Get Started</button-v1>
    <text-v1 variant="heading" key="myHeading">Welcome to DS one</text-v1>
  </body>
</html>
```

### JavaScript

```javascript
import "ds-one";
import "ds-one/styles";

// All components are auto-registered
document.body.innerHTML = `
  <app-v1 type="default">
    <button-v1 variant="primary">Click me</button-v1>
  </app-v1>
`;
```

## Test Before Publishing

```bash
# See what will be published
npm pack --dry-run

# Create actual package file for inspection
npm pack
tar -xvzf ds-one-0.1.0-beta.tgz
ls -la package/
```

## After Publishing

Your package will be available at:

- NPM: https://www.npmjs.com/package/ds-one
- jsDelivr CDN: https://cdn.jsdelivr.net/npm/ds-one@0.1.0-beta
- unpkg CDN: https://unpkg.com/ds-one@0.1.0-beta

## Full Documentation

See `docs/npm-publishing.md` for comprehensive publishing guide including:

- Version management
- Troubleshooting
- Best practices
- Unpublishing (if needed)

## What's Included

✅ All DS components (2 Core, 3 Unit, 4 Page)
✅ Styles and fonts
✅ SVG icon library
✅ TypeScript types (via dist/index.d.ts)
✅ README and LICENSE
✅ ESM and CommonJS entry points

## Ready? Let's Publish!

```bash
npm publish --tag beta
```

🎉 That's it! Your design system is now available on NPM!
