
# Contributing to React UI Components

Thank you for your interest in contributing to our React UI components library! This guide will help you get started with the development process.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-ui-components.git
cd react-ui-components
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

- `/src/library` - The component library source code
  - `/components` - Individual components organized by type
  - `/theme` - Theme context and related utilities
  - `/styles` - Shared styles and variant definitions
  - `/utils` - Utility functions
  
## Component Structure

When creating a new component:

1. Create a new folder in the `/src/library/components` directory
2. Include the component file, for example `Button.tsx`
3. Export the component in `src/library/index.ts`

## Component Guidelines

- Use TypeScript for all components
- All components should support the theming system via `useTheme` hook
- Implement all four style variants: minimalist, outline, shadow, and filled
- Use proper naming conventions:
  - Component names should be PascalCase
  - Prop interfaces should be named `ComponentNameProps`
- Include appropriate documentation

## Pull Request Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Testing

Test your components thoroughly:

```bash
# Run tests
npm test

# Check TypeScript types
npm run typecheck
```

## Building for Production

```bash
npm run build
```

## Code Style

- Follow the project's eslint and prettier configurations
- Write clean, readable code
- Comment complex logic
- Use meaningful variable and function names

Thank you for contributing!
