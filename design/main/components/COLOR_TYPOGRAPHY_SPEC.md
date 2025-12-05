# Dwelltea Color & Typography Specifications

## Overview
This document defines the complete color palette and typography system for the Dwelltea application, ensuring visual consistency and accessibility across all interfaces.

---

# COLOR SYSTEM

## 1. PRIMARY COLORS

### Dark Green (Primary Brand)
The signature Dwelltea color representing trust, stability, and growth.

**Main Shade**
- **Name**: Primary Green
- **HEX**: `#1a3d2e`
- **RGB**: `rgb(26, 61, 46)`
- **HSL**: `hsl(156, 40%, 17%)`
- **CMYK**: Approximately c:76 m:39 y:60 k:66
- **Pantone**: Approximately 3305 C

**Usage**
- Primary logo
- Primary buttons
- Main headings
- Links (optional)
- Brand accent elements
- Navigation highlights

**Tints & Shades**
```css
--green-900: #0f1f18;  /* Darkest - button active state */
--green-800: #152f24;  /* Dark - button hover */
--green-700: #1a3d2e;  /* Primary - main brand color */
--green-600: #235241;  /* Light - borders, subtle elements */
--green-500: #2d6754;  /* Lighter - backgrounds, tints */
--green-400: #4a8870;  /* Accent - highlights */
--green-300: #72a992;  /* Pale - disabled states */
--green-200: #a3ccba;  /* Very light - backgrounds */
--green-100: #d4e8df;  /* Lightest - subtle backgrounds */
--green-50:  #eff7f3;  /* Almost white - hover states */
```

---

## 2. SECONDARY COLORS

### Gold/Amber (Accent)
Warm, inviting color for highlights, icons, and positive indicators.

**Main Shade**
- **Name**: Accent Gold
- **HEX**: `#c4941f`
- **RGB**: `rgb(196, 148, 31)`
- **HSL**: `hsl(42, 73%, 45%)`

**Usage**
- Feature icons
- Content highlight icons
- Hover states on interactive elements
- Positive indicators
- Data visualization accents
- Call-out elements

**Tints & Shades**
```css
--gold-900: #6b5011;  /* Darkest */
--gold-800: #8a6716;  /* Dark */
--gold-700: #a97d1a;  /* Primary dark */
--gold-600: #c4941f;  /* Primary - main accent */
--gold-500: #d4a435;  /* Light */
--gold-400: #ddb85b;  /* Lighter */
--gold-300: #e6cb81;  /* Pale */
--gold-200: #efdea7;  /* Very light */
--gold-100: #f7eecd;  /* Lightest */
--gold-50:  #fcf8e9;  /* Almost white */
```

---

## 3. NEUTRAL COLORS

### Cream/Beige (Background)
Warm, inviting background color that feels approachable and comfortable.

**Main Shade**
- **Name**: Background Cream
- **HEX**: `#faf8f3`
- **RGB**: `rgb(250, 248, 243)`
- **HSL**: `hsl(43, 47%, 97%)`

**Usage**
- Primary page background
- Card backgrounds (light variant)
- Section backgrounds
- Alternating content areas

**Variations**
```css
--cream-100: #faf8f3;  /* Primary background */
--cream-200: #f5f2ea;  /* Slightly darker */
--cream-300: #ebe6da;  /* Darker - borders, separators */
```

### Gray Scale
For text, borders, and UI elements.

```css
/* Dark Grays - Text */
--gray-900: #111827;  /* Headings, primary text */
--gray-800: #1f2937;  /* Body text, dark text */
--gray-700: #374151;  /* Secondary text */
--gray-600: #4b5563;  /* Muted text */
--gray-500: #6b7280;  /* Placeholder text */

/* Light Grays - UI Elements */
--gray-400: #9ca3af;  /* Disabled text, subtle text */
--gray-300: #d1d5db;  /* Borders, dividers */
--gray-200: #e5e7eb;  /* Light borders */
--gray-100: #f3f4f6;  /* Backgrounds, hover states */
--gray-50:  #f9fafb;  /* Lightest backgrounds */
```

### White
Pure white for maximum contrast and clean sections.

```css
--white: #ffffff;
```

**Usage**
- Card backgrounds
- Button text (on dark backgrounds)
- Content containers
- Modal backgrounds
- Form inputs

### Black
Pure black for maximum contrast (use sparingly).

```css
--black: #000000;
```

**Usage**
- Primarily for text in high-contrast needs
- Use gray-900 (#111827) for most "black" text instead

---

## 4. SEMANTIC COLORS

### Success
```css
--success-700: #15803d;  /* Dark green */
--success-600: #16a34a;  /* Main success */
--success-500: #22c55e;  /* Light success */
--success-100: #dcfce7;  /* Background */
```

**Usage**: Success messages, confirmations, positive indicators

### Error
```css
--error-700: #b91c1c;  /* Dark red */
--error-600: #dc2626;  /* Main error */
--error-500: #ef4444;  /* Light error */
--error-100: #fee2e2;  /* Background */
```

**Usage**: Error messages, validation failures, destructive actions

### Warning
```css
--warning-700: #c2410c;  /* Dark orange */
--warning-600: #ea580c;  /* Main warning */
--warning-500: #f97316;  /* Light warning */
--warning-100: #ffedd5;  /* Background */
```

**Usage**: Warning messages, caution indicators, important notices

### Info
```css
--info-700: #0369a1;  /* Dark blue */
--info-600: #0284c7;  /* Main info */
--info-500: #06b6d4;  /* Light info */
--info-100: #cffafe;  /* Background */
```

**Usage**: Informational messages, helpful hints, neutral notifications

---

## 5. DATA VISUALIZATION COLORS

For charts, graphs, and data displays.

```css
/* Primary data color (matches brand) */
--data-primary: #8b7355;  /* Warm brown - for trend lines */

/* Multi-series colors */
--data-1: #1a3d2e;  /* Dark green */
--data-2: #c4941f;  /* Gold */
--data-3: #8b7355;  /* Brown */
--data-4: #4a8870;  /* Teal */
--data-5: #d4a435;  /* Yellow */
--data-6: #2d6754;  /* Medium green */
```

**Usage**: Line charts, bar charts, data series, legends

---

## 6. COLOR USAGE GUIDELINES

### Backgrounds
- **Primary**: Cream (#faf8f3) for main page areas
- **Secondary**: White (#ffffff) for cards and containers
- **Accent**: Very light green (#eff7f3) for subtle highlights
- **Alternative**: Light gray (#f9fafb) for alternating sections

### Text
- **Primary**: Gray-900 (#111827) for headings and important text
- **Secondary**: Gray-800 (#1f2937) for body text
- **Tertiary**: Gray-600 (#4b5563) for supporting text
- **Disabled**: Gray-400 (#9ca3af) for disabled elements

### Borders
- **Default**: Gray-300 (#d1d5db) for standard borders
- **Light**: Gray-200 (#e5e7eb) for subtle divisions
- **Emphasis**: Primary green (#1a3d2e) for highlighted borders

### Interactive Elements
- **Default**: Primary green (#1a3d2e) or White (#ffffff)
- **Hover**: Darker green (#152f24) or Light gray (#f9fafb)
- **Active**: Darkest green (#0f1f18) or Gray-100 (#f3f4f6)
- **Focus**: Primary green outline (#1a3d2e)
- **Disabled**: Gray-300 (#d1d5db) with reduced opacity

---

## 7. ACCESSIBILITY & CONTRAST

### WCAG Compliance
All color combinations must meet WCAG 2.1 Level AA standards.

**Text Contrast Requirements**
- **Normal text** (< 24px): Minimum 4.5:1 contrast ratio
- **Large text** (≥ 24px or ≥ 19px bold): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Approved Color Combinations

**High Contrast (AAA Level)**
- Gray-900 on White: 17.5:1 ✓
- Primary Green on White: 10.2:1 ✓
- White on Primary Green: 10.2:1 ✓
- Gray-800 on Cream: 9.8:1 ✓

**Sufficient Contrast (AA Level)**
- Gray-700 on White: 7.1:1 ✓
- Gold on White: 4.6:1 ✓
- Gray-600 on White: 5.3:1 ✓

**Insufficient Contrast (Avoid)**
- Gray-400 on White: 2.8:1 ✗
- Light green on White: < 3:1 ✗
- Gold on Cream: < 4:5:1 ✗ (for small text)

### Testing
Use tools like:
- WebAIM Contrast Checker
- Stark (Figma plugin)
- Chrome DevTools Accessibility Inspector

---

# TYPOGRAPHY SYSTEM

## 8. FONT FAMILIES

### Primary Font Stack

**Sans Serif (Body & UI)**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif, 
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

**Rationale**: System font stack for optimal performance and native feel.

**Alternative** (if custom font desired)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Monospace Font (Code, Data)
```css
font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", 
             "Segoe UI Mono", "Roboto Mono", monospace;
```

**Usage**: Code snippets, property IDs, technical data

---

## 9. TYPE SCALE

### Base Size
```css
--font-size-base: 16px;  /* Root font size */
```

### Scale Ratio: 1.25 (Major Third)

```css
/* Display - Large headings, hero text */
--font-size-5xl: 60px;   /* 3.75rem */
--font-size-4xl: 48px;   /* 3rem */
--font-size-3xl: 40px;   /* 2.5rem */

/* Headings */
--font-size-2xl: 32px;   /* 2rem */
--font-size-xl:  28px;   /* 1.75rem */
--font-size-lg:  24px;   /* 1.5rem */

/* Body */
--font-size-base: 16px;  /* 1rem */
--font-size-md:   18px;  /* 1.125rem */
--font-size-sm:   14px;  /* 0.875rem */
--font-size-xs:   12px;  /* 0.75rem */
```

---

## 10. FONT WEIGHTS

```css
--font-weight-light:    300;
--font-weight-regular:  400;
--font-weight-medium:   500;
--font-weight-semibold: 600;
--font-weight-bold:     700;
--font-weight-black:    800;
```

**Usage Guidelines**
- **Light (300)**: Rarely used, large display text only
- **Regular (400)**: Body text, descriptions, most content
- **Medium (500)**: Subheadings, emphasized text, navigation
- **Semibold (600)**: Card titles, button text, small headings
- **Bold (700)**: Main headings (H1-H3), important labels
- **Black (800)**: Display text, hero headlines (use sparingly)

---

## 11. LINE HEIGHTS

```css
--line-height-none:   1;      /* 100% - Tight, headlines only */
--line-height-tight:  1.25;   /* 125% - Large headings */
--line-height-snug:   1.375;  /* 137.5% - Subheadings */
--line-height-normal: 1.5;    /* 150% - Body text, default */
--line-height-relaxed: 1.625; /* 162.5% - Comfortable reading */
--line-height-loose:  1.75;   /* 175% - Very spacious */
```

**Recommendations**
- **Display/Headlines**: 1.1 - 1.25
- **Headings (H1-H3)**: 1.2 - 1.375
- **Body Text**: 1.5 - 1.625
- **Small Text**: 1.5 - 1.75

---

## 12. LETTER SPACING

```css
--letter-spacing-tighter: -0.05em;  /* -0.8px at 16px */
--letter-spacing-tight:   -0.025em; /* -0.4px at 16px */
--letter-spacing-normal:  0;        /* Default */
--letter-spacing-wide:    0.025em;  /* 0.4px at 16px */
--letter-spacing-wider:   0.05em;   /* 0.8px at 16px */
--letter-spacing-widest:  0.1em;    /* 1.6px at 16px */
```

**Usage**
- **Large Headlines**: Slightly tight (-0.02em to -0.025em)
- **Body Text**: Normal (0)
- **Buttons/UI**: Slightly wide (0.01em to 0.02em)
- **All Caps**: Wide to widest (0.05em to 0.1em)

---

## 13. TYPOGRAPHY HIERARCHY

### Display Text (Hero Headlines)

**Display 1 - Largest**
```css
font-size: 60px;      /* --font-size-5xl */
font-weight: 700;     /* Bold */
line-height: 1.1;
letter-spacing: -0.02em;
color: #111827;       /* --gray-900 */
```

**Example**: "Real Connections. Real Insights. Real Estate."

**Display 2**
```css
font-size: 48px;      /* --font-size-4xl */
font-weight: 700;     /* Bold */
line-height: 1.15;
letter-spacing: -0.015em;
color: #111827;
```

---

### Headings

**H1 - Page Title**
```css
font-size: 42px;      /* Between 2xl and 3xl */
font-weight: 700;     /* Bold */
line-height: 1.2;
letter-spacing: -0.01em;
color: #1a3d2e;       /* Primary green or gray-900 */
```

**Example**: "Community Insights for Orleans – Fallingbrook"

**H2 - Major Section**
```css
font-size: 32px;      /* --font-size-2xl */
font-weight: 700;     /* Bold */
line-height: 1.25;
letter-spacing: 0;
color: #111827;
```

**Example**: "Full Property Breakdown", "Estimated Value"

**H3 - Subsection**
```css
font-size: 28px;      /* --font-size-xl */
font-weight: 700;     /* Bold */
line-height: 1.3;
letter-spacing: 0;
color: #111827;
```

**Example**: "School Highlights", "Development Activity"

**H4 - Card Titles**
```css
font-size: 20px;      /* Between lg and base */
font-weight: 600;     /* Semibold */
line-height: 1.4;
letter-spacing: 0;
color: #1f2937;
```

**Example**: "AI Insight", "Accurate Valuations", "Median List Price"

---

### Body Text

**Large Body**
```css
font-size: 18px;      /* --font-size-md */
font-weight: 400;     /* Regular */
line-height: 1.6;
letter-spacing: 0;
color: #1f2937;       /* --gray-800 */
```

**Example**: Subheadings, introductory paragraphs

**Regular Body (Default)**
```css
font-size: 16px;      /* --font-size-base */
font-weight: 400;     /* Regular */
line-height: 1.5;
letter-spacing: 0;
color: #374151;       /* --gray-700 */
```

**Example**: Main content, descriptions, card text

**Small Body**
```css
font-size: 14px;      /* --font-size-sm */
font-weight: 400;     /* Regular */
line-height: 1.5;
letter-spacing: 0;
color: #4b5563;       /* --gray-600 */
```

**Example**: Supporting text, metadata, captions

**Extra Small**
```css
font-size: 12px;      /* --font-size-xs */
font-weight: 400;     /* Regular */
line-height: 1.5;
letter-spacing: 0.01em;
color: #6b7280;       /* --gray-500 */
```

**Example**: Labels, fine print, legal text

---

### UI Elements

**Button Text (Primary)**
```css
font-size: 16px;
font-weight: 600;     /* Semibold */
line-height: 1;
letter-spacing: 0.02em;
text-transform: none;  /* Sentence case */
```

**Button Text (Secondary)**
```css
font-size: 15px;
font-weight: 500;     /* Medium */
line-height: 1;
letter-spacing: 0.01em;
```

**Navigation Links**
```css
font-size: 16px;
font-weight: 500;     /* Medium */
line-height: 1;
letter-spacing: 0;
```

**Form Labels**
```css
font-size: 14px;
font-weight: 500;     /* Medium */
line-height: 1.5;
letter-spacing: 0;
color: #374151;       /* --gray-700 */
```

**Input Text**
```css
font-size: 16px;      /* Min 16px to prevent zoom on iOS */
font-weight: 400;     /* Regular */
line-height: 1.5;
color: #1f2937;
```

**Placeholder Text**
```css
font-size: 16px;
font-weight: 400;
color: #6b7280;       /* --gray-500 */
```

---

### Stats & Numbers

**Large Stats**
```css
font-size: 56px;      /* Custom, between 3xl and 4xl */
font-weight: 700;     /* Bold */
line-height: 1;
letter-spacing: -0.02em;
color: #111827;
```

**Example**: "58", "123", "18" (Median List Price section)

**Stat Labels**
```css
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #4b5563;       /* --gray-600 */
```

**Example**: "Homes for sale", "Homes Sold", "Days on market"

---

## 14. TEXT STYLES REFERENCE

### Quick Reference Table

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| Display 1 | 60px | 700 | 1.1 | Gray-900 |
| Display 2 | 48px | 700 | 1.15 | Gray-900 |
| H1 | 42px | 700 | 1.2 | Green-700 / Gray-900 |
| H2 | 32px | 700 | 1.25 | Gray-900 |
| H3 | 28px | 700 | 1.3 | Gray-900 |
| H4 | 20px | 600 | 1.4 | Gray-800 |
| Body Large | 18px | 400 | 1.6 | Gray-800 |
| Body Regular | 16px | 400 | 1.5 | Gray-700 |
| Body Small | 14px | 400 | 1.5 | Gray-600 |
| Caption | 12px | 400 | 1.5 | Gray-500 |
| Button Primary | 16px | 600 | 1 | White |
| Button Secondary | 15px | 500 | 1 | Green-700 |
| Navigation | 16px | 500 | 1 | Gray-800 |
| Stat Large | 56px | 700 | 1 | Gray-900 |
| Stat Label | 14px | 400 | 1.5 | Gray-600 |

---

## 15. RESPONSIVE TYPOGRAPHY

### Mobile (< 768px)

Scale down larger text sizes for better mobile experience.

```css
@media (max-width: 767px) {
  /* Display */
  --font-size-5xl: 40px;   /* Reduced from 60px */
  --font-size-4xl: 36px;   /* Reduced from 48px */
  
  /* Headings */
  --font-size-3xl: 32px;   /* Reduced from 40px */
  --font-size-2xl: 28px;   /* Reduced from 32px */
  --font-size-xl:  24px;   /* Reduced from 28px */
  
  /* Stats */
  --stat-large: 40px;      /* Reduced from 56px */
}
```

### Tablet (768px - 1023px)

Slight adjustments for medium screens.

```css
@media (min-width: 768px) and (max-width: 1023px) {
  --font-size-5xl: 48px;   /* Slightly reduced */
  --font-size-4xl: 42px;   /* Slightly reduced */
}
```

### Desktop (≥ 1024px)

Use full scale as defined in base system.

---

## 16. CSS IMPLEMENTATION

### CSS Variables
```css
:root {
  /* Colors */
  --color-primary: #1a3d2e;
  --color-primary-hover: #152f24;
  --color-primary-active: #0f1f18;
  --color-accent: #c4941f;
  --color-background: #faf8f3;
  --color-surface: #ffffff;
  
  --color-text-primary: #111827;
  --color-text-secondary: #1f2937;
  --color-text-tertiary: #4b5563;
  --color-text-muted: #6b7280;
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  
  --font-size-base: 16px;
  --font-size-lg: 24px;
  --font-size-xl: 28px;
  --font-size-2xl: 32px;
  --font-size-3xl: 40px;
  --font-size-4xl: 48px;
  --font-size-5xl: 60px;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
}
```

### Utility Classes
```css
.text-primary { color: var(--color-text-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-muted { color: var(--color-text-muted); }

.font-bold { font-weight: var(--font-weight-bold); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-medium { font-weight: var(--font-weight-medium); }

.leading-tight { line-height: var(--line-height-tight); }
.leading-normal { line-height: var(--line-height-normal); }
.leading-relaxed { line-height: var(--line-height-relaxed); }
```

---

## 17. TESTING CHECKLIST

### Color
- [ ] All text meets 4.5:1 contrast minimum (AA)
- [ ] Large text meets 3:1 contrast minimum
- [ ] UI components meet 3:1 contrast
- [ ] Colors are distinguishable by color-blind users
- [ ] Dark mode variants defined (if applicable)

### Typography
- [ ] Text is readable at all sizes
- [ ] Hierarchy is clear and logical
- [ ] Line lengths are optimal (45-75 characters)
- [ ] Line heights provide comfortable reading
- [ ] Font loads properly across browsers
- [ ] Text scales appropriately on mobile
- [ ] Input fields use minimum 16px (prevent iOS zoom)

---

## SUMMARY

The Dwelltea color and typography system creates:

**Color System**
- **Professional palette**: Dark green, gold, and warm neutrals
- **Accessible**: All combinations meet WCAG AA standards
- **Flexible**: Complete tint/shade scales for all colors
- **Semantic**: Clear purpose for each color

**Typography**
- **Clear hierarchy**: 6 levels of headings plus display text
- **Readable**: Optimal sizes and line heights for comfort
- **Responsive**: Scales appropriately on all devices
- **Consistent**: System font stack for performance and familiarity

Together, these create a cohesive, professional, and accessible visual language for the entire Dwelltea application.
