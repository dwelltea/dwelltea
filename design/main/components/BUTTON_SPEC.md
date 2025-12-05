# Dwelltea Button Specifications

## Overview
This document provides detailed specifications for all button types and interactive elements in the Dwelltea application.

---

## BUTTON HIERARCHY

1. **Primary Buttons**: Main CTAs (Connect to Community, Unlock Report)
2. **Secondary Buttons**: Navigation, alternative actions
3. **Tertiary Buttons**: Sign In, text links
4. **Icon Buttons**: Search submit, utility actions

---

## 1. PRIMARY BUTTON

### Visual Specifications

**Appearance**
- **Background**: Dark green #1a3d2e
- **Text Color**: White #ffffff
- **Border**: None
- **Border Radius**: 8px
- **Shadow**: None or subtle (0 1px 2px rgba(0,0,0,0.05))

**Sizing**
- **Height**: 56px (large), 48px (medium)
- **Padding**: 16px 32px (horizontal)
- **Min Width**: 200px for text buttons
- **Full Width**: Yes, when in mobile or card context

**Typography**
- **Font Size**: 16px
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: 0.02em
- **Text Transform**: None (Sentence case)

### States

**Default**
```css
background: #1a3d2e;
color: #ffffff;
border: none;
```

**Hover**
```css
background: #152f24; /* Slightly darker */
cursor: pointer;
transform: translateY(-1px); /* Optional subtle lift */
```

**Active/Pressed**
```css
background: #0f1f18; /* Even darker */
transform: translateY(0);
```

**Focus**
```css
outline: 2px solid #1a3d2e;
outline-offset: 2px;
```

**Disabled**
```css
background: #d1d5db;
color: #9ca3af;
cursor: not-allowed;
opacity: 0.6;
```

### Usage Examples

**"Connect to the Community"**
- Full width button
- Located at bottom of Community Insights page
- Primary CTA to engage users

**"Unlock Detailed Report"**
- Full width button
- Located at bottom of Property Breakdown page
- Primary CTA to convert users

### React Component Example
```tsx
<Button variant="primary" size="large" fullWidth>
  Connect to the Community
</Button>
```

---

## 2. SECONDARY BUTTON

### Visual Specifications

**Appearance**
- **Background**: White #ffffff or Transparent
- **Text Color**: Dark green #1a3d2e
- **Border**: 1px solid #1a3d2e or #d1d5db
- **Border Radius**: 8px
- **Shadow**: Subtle (0 1px 3px rgba(0,0,0,0.1))

**Sizing**
- **Height**: 48px (medium), 40px (small)
- **Padding**: 12px 24px
- **Min Width**: 120px

**Typography**
- **Font Size**: 15px
- **Font Weight**: 500 (Medium)
- **Letter Spacing**: 0.01em

### States

**Default**
```css
background: #ffffff;
color: #1a3d2e;
border: 1px solid #1a3d2e;
```

**Hover**
```css
background: #f9fafb;
border-color: #152f24;
```

**Active**
```css
background: #f3f4f6;
```

**Focus**
```css
outline: 2px solid #1a3d2e;
outline-offset: 2px;
```

### Usage
- Alternative actions
- Cancel buttons
- Secondary CTAs

---

## 3. TERTIARY BUTTON / TEXT LINK

### Visual Specifications

**Appearance**
- **Background**: Transparent
- **Text Color**: Dark #1f2937 or Dark green #1a3d2e
- **Border**: None
- **Underline**: None (default), appears on hover

**Sizing**
- **Height**: Auto (inline)
- **Padding**: 8px 16px or minimal

**Typography**
- **Font Size**: 15-16px
- **Font Weight**: 500 (Medium) or 400 (Regular)

### States

**Default**
```css
background: transparent;
color: #1f2937;
text-decoration: none;
```

**Hover**
```css
color: #1a3d2e;
text-decoration: underline;
cursor: pointer;
```

**Active**
```css
color: #152f24;
```

**Focus**
```css
outline: 2px solid #1a3d2e;
outline-offset: 2px;
border-radius: 4px;
```

### Usage Examples

**"Sign In"**
- Located in top navigation
- Text-only appearance
- May have subtle border or background

**"Edit address"**
- Located top right on Property Breakdown
- Plain text link style
- Underline on hover

---

## 4. ICON BUTTON

### Visual Specifications

**Search Submit Button (Arrow)**

**Appearance**
- **Background**: Dark green #1a3d2e
- **Icon Color**: White #ffffff
- **Border**: None
- **Border Radius**: 0 6px 6px 0 (right side only, attached to input)
- **Icon**: Right-pointing arrow (→)

**Sizing**
- **Width**: 56px
- **Height**: 56px (matches input height)
- **Icon Size**: 20-24px

**States**

**Default**
```css
background: #1a3d2e;
color: #ffffff;
```

**Hover**
```css
background: #152f24;
cursor: pointer;
```

**Active**
```css
background: #0f1f18;
```

**Focus**
```css
outline: 2px solid #1a3d2e;
outline-offset: -2px;
```

**Navigation Icons (Search, User)**

**Appearance**
- **Background**: Transparent
- **Icon Color**: Dark #1f2937
- **Size**: 40×40px (touch target)
- **Icon Size**: 20-24px
- **Border Radius**: 4px (optional)

**States**
- Hover: Background #f3f4f6
- Active: Background #e5e7eb

---

## 5. BUTTON GROUPS & COMBINATIONS

### Navigation Button Group
```
[Sign In] in top right
Spaced ~16px from other nav elements
```

### Search Input + Button
```
[Text Input Field][→ Icon Button]
Connected, no gap between
Input has left border-radius, button has right
```

---

## 6. RESPONSIVE BEHAVIOR

### Desktop (> 1024px)
- Buttons maintain fixed widths or max-width
- Hover states active
- Side-by-side layouts for button groups

### Tablet (768px - 1024px)
- Buttons may increase in width
- Maintain hover states
- Some buttons go full-width in cards

### Mobile (< 768px)
- Primary buttons: **Full width**
- Height may reduce to 48px minimum
- Touch targets minimum 44×44px
- Remove hover states (use active states on tap)
- Stack button groups vertically

---

## 7. ACCESSIBILITY REQUIREMENTS

### All Buttons Must Include:
- **Sufficient Contrast**: 4.5:1 text, 3:1 for UI components
- **Touch Target Size**: Minimum 44×44px (mobile)
- **Keyboard Access**: Focusable and activatable via Enter/Space
- **Focus Indicator**: Visible 2px outline
- **ARIA Labels**: For icon-only buttons
- **Disabled State**: Clearly visible, `aria-disabled="true"`

### Semantic HTML
```html
<button type="button">Connect to the Community</button>
<button type="submit" aria-label="Search">→</button>
<a href="/sign-in" role="button">Sign In</a>
```

---

## 8. IMPLEMENTATION GUIDE

### CSS Variables
```css
:root {
  --button-primary-bg: #1a3d2e;
  --button-primary-text: #ffffff;
  --button-primary-hover: #152f24;
  --button-primary-active: #0f1f18;
  
  --button-secondary-bg: #ffffff;
  --button-secondary-text: #1a3d2e;
  --button-secondary-border: #1a3d2e;
  
  --button-radius: 8px;
  --button-height-lg: 56px;
  --button-height-md: 48px;
  --button-height-sm: 40px;
}
```

### Base Button Styles
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: var(--button-radius);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.btn:focus-visible {
  outline: 2px solid var(--button-primary-bg);
  outline-offset: 2px;
}
```

### Primary Button
```css
.btn-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  height: var(--button-height-lg);
  padding: 0 32px;
}

.btn-primary:hover:not(:disabled) {
  background: var(--button-primary-hover);
}

.btn-primary:active:not(:disabled) {
  background: var(--button-primary-active);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Full Width Modifier
```css
.btn-full {
  width: 100%;
}
```

### React Component Structure
```tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
```

---

## 9. ANIMATION & TRANSITIONS

### Recommended Transitions
```css
.btn {
  transition: 
    background-color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}
```

### Hover Effects
- Background color change: 0.2s
- Subtle lift (optional): transform: translateY(-1px)
- Shadow increase (optional): box-shadow depth

### Active/Click Effects
- Immediate background change
- Slight push down: transform: translateY(0)
- Optional: brief scale(0.98)

### Loading State (Optional)
- Show spinner icon
- Reduce opacity to 0.7
- Disable interaction
- Text: "Loading..." or keep original text

---

## 10. TESTING CHECKLIST

### Visual Testing
- [ ] All states render correctly (default, hover, active, focus, disabled)
- [ ] Colors meet contrast requirements
- [ ] Buttons align properly in various layouts
- [ ] Text doesn't wrap unexpectedly
- [ ] Icons centered and sized correctly

### Interaction Testing
- [ ] Click/tap triggers correct action
- [ ] Hover states work on desktop
- [ ] Focus states visible when using keyboard
- [ ] Disabled buttons don't respond to clicks
- [ ] Loading state prevents multiple submissions

### Responsive Testing
- [ ] Buttons scale appropriately on mobile
- [ ] Touch targets meet 44×44px minimum
- [ ] Full-width works correctly on small screens
- [ ] Button groups stack properly on mobile

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader announces button label correctly
- [ ] Focus indicators visible
- [ ] Color blind users can distinguish states
- [ ] ARIA attributes present where needed

---

## COMPONENT INVENTORY

### Buttons Found in Dwelltea App:

1. **"Connect to the Community"** - Primary, Full Width, Large
2. **"Unlock Detailed Report"** - Primary, Full Width, Large
3. **"Sign In"** - Tertiary/Link, Medium
4. **Search Submit (→)** - Icon Button, attached to input
5. **"Edit address"** - Tertiary Link, Small

### Future Button Needs:
- Cancel buttons (Secondary)
- Form submit buttons (Primary)
- Navigation buttons (Secondary/Tertiary)
- Close buttons (Icon)
- Filter/Sort buttons (Secondary)
- Download/Export buttons (Secondary)

---

## SUMMARY

The Dwelltea button system uses:
- **Clear hierarchy** with 3 main variants
- **Consistent dark green** for primary actions
- **Generous sizing** for easy interaction
- **Smooth transitions** for professional feel
- **Full accessibility** compliance
- **Responsive behavior** for all devices

This creates a cohesive, user-friendly interface that guides users toward key actions while maintaining visual consistency throughout the application.
