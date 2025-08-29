# WinFlow Design System

A comprehensive design system built with IBM Plex Sans font, modern color palette, and reusable components.

## 🎨 Design Tokens

### Typography

- **Font Family**: IBM Plex Sans (primary), IBM Plex Mono (monospace)
- **Font Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Font Sizes**: xs (12px) to 6xl (60px)

### Color Palette

- **Primary**: Blue tones (#0ea5e9 to #082f49)
- **Secondary**: Gray tones (#f8fafc to #020617)
- **Accent**: Purple tones (#fdf4ff to #4a044e)
- **Success**: Green tones (#f0fdf4 to #052e16)
- **Warning**: Yellow/Orange tones (#fffbeb to #451a03)
- **Error**: Red tones (#fef2f2 to #450a0a)

### Spacing

- Consistent spacing scale from 1px to 8rem (128px)
- Responsive spacing utilities

### Shadows

- **Soft**: Subtle shadows for cards
- **Medium**: Standard shadows for elevated elements
- **Strong**: Prominent shadows for modals/overlays

## 🧩 Components

### Button

```tsx
import { Button } from "@/components";

<Button variant="primary" size="md" loading={false} fullWidth>
  Click me
</Button>;
```

**Variants**: primary, secondary, outline, ghost, destructive
**Sizes**: sm, md, lg, xl

### Input

```tsx
import { Input } from "@/components";

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
  error="Invalid email"
  helperText="We'll never share your email"
/>;
```

**Variants**: default, filled, flushed
**Sizes**: sm, md, lg

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components";

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Card content goes here</CardContent>
</Card>;
```

**Variants**: default, elevated, outlined
**Padding**: none, sm, md, lg

### Badge

```tsx
import { Badge } from "@/components";

<Badge variant="success" size="md" rounded>
  Success
</Badge>;
```

**Variants**: default, secondary, destructive, outline, success, warning
**Sizes**: sm, md, lg

### Loading Spinner

```tsx
import { LoadingSpinner, LoadingOverlay } from '@/components';

<LoadingSpinner size="lg" variant="primary" />
<LoadingOverlay isLoading={true}>
  <div>Content with loading overlay</div>
</LoadingOverlay>
```

### Toast

```tsx
import { Toast, ToastContainer } from "@/components";

<ToastContainer
  toasts={toasts}
  position="top-right"
  onRemoveToast={handleRemove}
/>;
```

## 🎯 Usage Guidelines

### Color Usage

- Use primary colors for main actions and branding
- Use secondary colors for supporting elements
- Use accent colors sparingly for highlights
- Use semantic colors (success, warning, error) for status indicators

### Typography

- Use consistent font weights and sizes
- Maintain proper line heights for readability
- Use IBM Plex Sans for all text content
- Use IBM Plex Mono for code and technical content

### Spacing

- Use the spacing scale consistently
- Maintain visual rhythm with consistent spacing
- Use responsive spacing for different screen sizes

### Components

- Always use the design system components
- Customize through props, not by overriding styles
- Follow accessibility guidelines
- Test components across different screen sizes

## 🚀 Getting Started

1. Import components from the design system:

```tsx
import { Button, Input, Card } from "@/components";
```

2. Use design tokens for custom styling:

```tsx
import { tokens } from "@/design-system/tokens";
```

3. Follow the established patterns for consistency

## 📱 Responsive Design

The design system is built with mobile-first approach:

- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive typography and spacing
- Touch-friendly component sizes

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🎨 Dark Mode

The design system supports dark mode:

- Automatic theme switching
- Consistent color relationships
- Proper contrast in both themes

## 📦 Installation

Components are already set up in the project. Import them as needed:

```tsx
import {
  Button,
  Input,
  Card,
  Badge,
  LoadingSpinner,
  Toast,
} from "@/components";
```

