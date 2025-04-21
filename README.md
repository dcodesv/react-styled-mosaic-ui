
# Modern React UI Components Library

A customizable, themeable React component library built with TailwindCSS v4, TypeScript, and inspired by shadcn/ui design principles.

## Features

- **Multiple Style Variants**: Choose from minimalist, outline, shadow, and filled styles for all components
- **Theming Support**: Built-in theming capabilities with light and dark mode support
- **Type Safety**: Fully typed with TypeScript
- **Modern Stack**: Built with TailwindCSS v4, React 18+
- **Flexible & Extensible**: Easy to customize and extend

## Components

- Button
- Input
- Card
- Select
- Modal
- Tabs
- Toggle

## Installation

```bash
# npm
npm install @your-org/react-ui-components

# yarn
yarn add @your-org/react-ui-components

# pnpm
pnpm add @your-org/react-ui-components
```

## Usage

1. Wrap your application with the `ThemeProvider`:

```jsx
import { ThemeProvider } from '@your-org/react-ui-components';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" defaultVariant="outline">
      <YourApp />
    </ThemeProvider>
  );
};
```

2. Import and use components:

```jsx
import { Button, Card, CardContent } from '@your-org/react-ui-components';

const MyComponent = () => {
  return (
    <Card>
      <CardContent>
        <h2>Hello World</h2>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
};
```

3. Use the `useTheme` hook to change themes or variants:

```jsx
import { useTheme, Button } from '@your-org/react-ui-components';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </Button>
  );
};
```

## Style Variants

All components support four style variants:

- **minimalist**: Clean, minimal styling with reduced visual elements
- **outline**: Components with borders and transparent backgrounds
- **shadow**: Components with subtle shadows for depth
- **filled**: Components with solid background colors

## Customization

You can customize the theme colors by modifying your TailwindCSS configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // Add your custom colors here
      },
    },
  },
};
```

## License

MIT
