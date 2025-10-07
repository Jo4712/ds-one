# DS one

A modern, component-based design system built with TypeScript and LitElement. This design system provides a comprehensive set of reusable UI components with built-in theming, internationalization, and accessibility features.

## 🎨 Features

- **Component-based architecture** using LitElement
- **TypeScript support** with full type definitions
- **Customizable theming** with accent color support
- **Internationalization** ready with Notion CMS integration
- **Responsive design** with mobile-first approach
- **Accessibility** built-in with proper ARIA support
- **Modern CSS** with CSS custom properties and view transitions

## 📁 Project Structure

```
DS one/
├── 0 Face/           # Device and language detection
├── 1 Root/           # Core styles and fonts
├── 2 Core/           # Core components (buttons, text, etc.)
├── 3 Unit/           # Composite components
├── 4 Page/           # Page-level components
└── x Icon/           # SVG icon library
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager)
- Modern browser with Web Components support

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "DS one"
```

2. Install dependencies:
```bash
bun install
```

3. Import components in your HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="1 Root/screen.css">
  <script type="module" src="2 Core/button-v1.ts"></script>
</head>
<body>
  <button-v1 variant="primary">Click me</button-v1>
</body>
</html>
```

## 🧩 Core Components

### Button (`button-v1`)
A versatile button component with multiple variants and internationalization support.

```html
<!-- Basic usage -->
<button-v1 variant="primary">Primary Button</button-v1>
<button-v1 variant="secondary">Secondary Button</button-v1>

<!-- With Notion CMS integration -->
<button-v1 notion-key="button-text" fallback="Default Text"></button-v1>

<!-- With navigation -->
<button-v1 href="/path" variant="primary">Navigate</button-v1>
```

### App Container (`app-v1`)
Main application container with layout support.

```html
<app-v1 type="default">
  <!-- Your content here -->
</app-v1>

<app-v1 type="board">
  <!-- Board layout content -->
</app-v1>
```

### Text (`text-v1`)
Typography component with consistent styling.

```html
<text-v1 variant="heading">Main Heading</text-v1>
<text-v1 variant="body">Body text content</text-v1>
```

## 🎨 Theming

The design system supports customizable theming through CSS custom properties:

```css
:root {
  --accent-color: var(--blue);        /* Primary accent color */
  --black: #2a2a2a;                   /* Text color */
  --white: rgb(255 255 255);          /* Background color */
  --slate-light: #e6e6e6;             /* Light gray */
  --scaling-factor: 1;                /* Responsive scaling */
}
```

### Available Accent Colors

- `--light-green` (default)
- `--green`
- `--light-blue`
- `--blue`
- `--pink`
- `--red`
- `--orange`
- `--yellow`

## 🌍 Internationalization

Components support internationalization through Notion CMS integration:

```html
<!-- Using Notion keys -->
<button-v1 key="button.save" fallback="Save"></button-v1>

<!-- Using legacy notion-key -->
<button-v1 notion-key="button-text" language="en" fallback="Default"></button-v1>
```

## 📱 Responsive Design

The design system is built mobile-first with responsive scaling:

```css
/* Mobile scaling */
--scaling-factor-mobile: 1.2;

/* Desktop scaling */
--scaling-factor: 1;
```

## 🎯 Usage Examples

### Basic App Structure
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="1 Root/screen.css">
  <script type="module" src="2 Core/app-v1.ts"></script>
  <script type="module" src="2 Core/button-v1.ts"></script>
  <script type="module" src="2 Core/text-v1.ts"></script>
</head>
<body>
  <app-v1 type="default">
    <text-v1 variant="heading">Welcome to DS one</text-v1>
    <button-v1 variant="primary">Get Started</button-v1>
  </app-v1>
</body>
</html>
```

### Settings Page
```html
<div class="settings-section">
  <h4>Appearance</h4>
  
  <div class="setting-row">
    <span>Language</span>
    <cycle-v1 type="language"></cycle-v1>
  </div>
  
  <div class="setting-row">
    <span>Accent Color</span>
    <cycle-v1 type="accent-color"></cycle-v1>
  </div>
</div>
```

## 🛠 Development

### Building Components

Components are built using LitElement and TypeScript. Each component:

1. Extends `LitElement`
2. Defines properties and styles
3. Implements render method
4. Registers as custom element

### Adding New Components

1. Create component file in appropriate directory
2. Follow naming convention: `component-name-v1.ts`
3. Export class and register custom element
4. Add TypeScript declarations
5. Update documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions and support, please open an issue in the repository.
