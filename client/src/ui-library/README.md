# Dwelltea UI Library

A comprehensive UI component library built with React, TypeScript, Material-UI, and Styled Components following the Atomic Design methodology.

## Structure

The UI library is organized using Atomic Design principles:

```
ui-library/
├── atoms/          # Basic building blocks (Button, Logo, Input, etc.)
├── molecules/      # Simple component combinations (FeatureCard, PropertyCard, etc.)
├── organisms/      # Complex components (to be added)
└── theme/         # Design system theme configuration
```

## Components

### Atoms

- **Button** - Primary, secondary, and tertiary button variants
- **Logo** - Dwelltea logo in horizontal and icon-only variants
- **Card** - Base card component with default and cream variants
- **Input** - Text input field with error states
- **Label** - Form label with optional required indicator
- **Badge** - Status badges with multiple variants

### Molecules

- **FeatureCard** - Card displaying a feature with icon, title, and description
- **PropertyCard** - Property listing card with image, details, and similarity score
- **StatCard** - Statistical display card with value and label

## Usage

```tsx
import { Button, Logo, Card, FeatureCard } from '@/ui-library';

function MyComponent() {
  return (
    <Card>
      <Logo variant="horizontal" size="medium" />
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </Card>
  );
}
```

## Development

### Building Components

All components are built with:
- **TypeScript** for type safety
- **Styled Components** for styling
- **Material-UI** theme integration
- **Design System** colors and typography from `design/main/`

## Design System

The UI library follows the Dwelltea design system specifications:
- Colors: Primary green (#1a3d2e), Gold accent (#c4941f), Cream background (#faf8f3)
- Typography: System font stack with defined scale
- Spacing: Consistent padding and margins
- Accessibility: WCAG AA compliant contrast ratios

## Adding New Components

1. Create component in appropriate folder (`atoms/`, `molecules/`, or `organisms/`)
2. Create component file: `ComponentName.tsx`
3. Create index file: `index.ts`
4. Export from main `ui-library/index.ts`

