# Accent Color Feature

## Overview

The accent color feature allows users to customize the primary accent color used throughout the application. This is implemented through the `cycle-v1` component with the `accent-color` type.

## Implementation

### 1. Local Storage

The accent color is persisted in localStorage using the key `accentColor`:

```javascript
// Save accent color
localStorage.setItem('accentColor', '--blue');

// Get accent color (defaults to --blue)
const color = localStorage.getItem('accentColor') || '--blue';
```

### 2. Available Colors

The following CSS variables are available as accent colors:

- `--light-green`: #99ff73 (default)
- `--green`: #979441
- `--light-blue`: #ccccff
- `--blue`: #594dff 
- `--pink`: #f5aad1
- `--red`: #ff5f5f
- `--orange`: #fec20d  
- `--yellow`: #ffff00

### 3. Usage in HTML

```html
<!-- Basic usage -->
<cycle-v1 type="accent-color"></cycle-v1>

<!-- With custom styling -->
<div style="display: flex; justify-content: space-between; align-items: center;">
  <span>Accent Color</span>
  <cycle-v1 type="accent-color"></cycle-v1>
</div>
```

### 4. CSS Integration

The accent color is applied through the `--accent-color` CSS variable:

```css
:root {
  --accent-color: var(--blue); /* Default */
}

/* Usage in components */
.button-primary {
  background-color: var(--accent-color);
}
```

### 5. JavaScript Integration

```javascript
// Apply accent color to document
const applyAccentColor = () => {
  const color = localStorage.getItem('accentColor') || '--blue';
  document.documentElement.style.setProperty('--accent-color', `var(${color})`);
};

// Listen for changes
window.addEventListener('accent-color-changed', (e) => {
  console.log('Accent color changed to:', e.detail.color);
  applyAccentColor();
});
```

## Features

- **Visual Preview**: The cycle component shows a color preview circle next to the button
- **Persistent Storage**: Color preference is saved in localStorage
- **Event System**: Dispatches `accent-color-changed` events when color changes
- **Default Fallback**: Uses `--blue` as the default color if none is set
- **Translation Support**: Supports internationalization for labels

## Example Settings Page

```html
<div class="settings-section">
  <h4>Appearance</h4>
  
  <!-- Language Setting -->
  <div class="setting-row">
    <span>Language</span>
    <cycle-v1 type="language"></cycle-v1>
  </div>
  
  <!-- Theme Setting -->
  <div class="setting-row">
    <span>Theme</span>
    <cycle-v1 type="theme"></cycle-v1>
  </div>
  
  <!-- Accent Color Setting -->
  <div class="setting-row">
    <span>Accent Color</span>
    <cycle-v1 type="accent-color"></cycle-v1>
  </div>
</div>
```

## Limitations

- Local storage is browser-specific (no cross-device sync)
- No server-side validation of color values
- Clearing browser data resets color preferences

## Future Enhancements

- Move to user preferences table for cross-device sync
- Add custom color picker for advanced users
- Implement color scheme validation
- Add color accessibility checking 