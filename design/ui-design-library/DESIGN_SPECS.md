# Design Specifications for Dwelltea Web App

## Overview
A modern real estate platform landing page with a warm, welcoming aesthetic focused on property valuations and neighborhood insights.

---

## Visual Assets

### Logo
- **Name**: Dwelltea Logo
- **Style**: House icon + logotype
- **File**: `public/assets/logos/logo.png`
- **Format**: SVG (vector)

### Hero Image
- **Name**: Hero Couple Photo
- **Description**: Professional lifestyle photo of a smiling couple (diverse representation)
- **File**: `public/assets/images/hero-couple.jpg`
- **Usage**: Right side of hero section
- **Dimensions**: ~500px width, full-height container
- **Format**: JPEG (high quality)

---

## Color Palette (5 Colors)

| Color Name | Usage | Hex Code | RGB |
|-----------|-------|----------|-----|
| Cream/Off-White | Primary background | `#F5EFE7` | rgb(245, 239, 231) |
| Dark Teal | Headlines, buttons, primary action | `#1B4D3E` | rgb(27, 77, 62) |
| Warm Brown | Icon accents, secondary elements | `#A67C52` | rgb(166, 124, 82) |
| Black | Body text, navigation | `#000000` | rgb(0, 0, 0) |
| Light Beige | Card backgrounds, hover states | `#F9F6F1` | rgb(249, 246, 241) |

---

## Typography System

### Font Family
**Primary Font**: Modern sans-serif (Geist, Inter, or similar)

### Font Scale

| Element | Font Size | Font Weight | Line Height | Color | Usage |
|---------|-----------|-------------|------------|-------|-------|
| Logo | 24px | 700 Bold | 1.2 | Black | Navigation brand |
| H1 Main Headline | 56px | 700 Bold | 1.2 | Dark Teal | Hero section headline |
| H2 Subheading | 18px | 400 Regular | 1.5 | Black | Descriptive text under headline |
| Body Text | 16px | 400 Regular | 1.6 | Black | Body copy and descriptions |
| Card Title | 18px | 700 Bold | 1.4 | Black | Feature card headings |
| Card Description | 16px | 400 Regular | 1.5 | Black | Feature card body text |
| Navigation Items | 16px | 400 Regular | 1.5 | Black | Menu items |

---

## Layout & Grid System

### Container
- **Max Width**: 1280px
- **Horizontal Margins**: 60px (desktop), 24px (tablet), 16px (mobile)
- **Vertical Section Spacing**: 60-80px
- **Grid System**: 12-column responsive grid
- **Gutter**: 24px

### Breakpoints
- **Mobile**: 375px - 767px (1 column, reduced padding)
- **Tablet**: 768px - 1023px (2 columns, medium padding)
- **Desktop**: 1024px+ (full multi-column layouts, full padding)

---

## Component Specifications

### Navigation Bar
- **Layout**: Horizontal flexbox with space-between
- **Height**: 80px
- **Background**: Cream/Off-White (`#F5EFE7`)
- **Padding**: 0 60px (horizontal)
- **Position**: Fixed top, full-width
- **Left Section**: Logo (24px size)
- **Center Section**: Navigation links (Home, Search, Insights, My Properties, About)
- **Right Section**: Search icon (20px), Profile icon (24px)
- **Link Spacing**: 32px gap between items
- **Z-Index**: 100

### Hero Section
- **Layout**: 2-column grid on desktop, 1-column stack on mobile
- **Height**: Min 600px
- **Background**: Cream/Off-White (`#F5EFE7`)
- **Padding**: 80px 60px (top/bottom and sides)
- **Column Split**: 60% (content) / 40% (image)
- **Gap**: 60px between columns

#### Hero Left Column
- **Content**: Headline, description, search input
- **Spacing**: 24px between elements

#### Hero Right Column
- **Content**: Hero image
- **Image**: Rounded corners 24px
- **Aspect Ratio**: Portrait-leaning (500px × 480px approx)
- **Shadow**: Subtle drop shadow (0 10px 30px rgba(0,0,0,0.1))

### Search Input Component
- **Layout**: Horizontal flex with input + button
- **Height**: 56px
- **Border Radius**: 8px
- **Background Color**: White
- **Border**: 1px solid #E0E0E0
- **Padding**: 16px (internal)
- **Gap**: 0 (button attached to input)

#### Input Field
- **Flex**: 1 (grows to fill available space)
- **Border**: None
- **Placeholder**: "Enter an address to get started"
- **Placeholder Color**: #999999
- **Font Size**: 16px

#### Action Button
- **Width**: 56px (square)
- **Background**: Dark Teal (`#1B4D3E`)
- **Icon**: Right arrow (white, 24px)
- **Border Radius**: 0 8px 8px 0
- **Cursor**: Pointer
- **Hover**: Slightly darker shade

### Feature Cards Container
- **Layout**: 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Padding**: 60px horizontal
- **Gap**: 24px between cards
- **Margin Top**: 40px from above section

### Feature Cards
- **Background**: Light Beige (`#F9F6F1`)
- **Padding**: 32px
- **Border Radius**: 16px
- **Border**: None
- **Shadow**: 0 2px 8px rgba(0,0,0,0.05)
- **Hover Effect**: Shadow increase to 0 8px 20px rgba(0,0,0,0.1)
- **Transition**: 300ms ease

#### Card Icon
- **Size**: 48px
- **Color**: Warm Brown (`#A67C52`)
- **Margin Bottom**: 16px
- **Style**: Outlined/line icons

#### Card Title
- **Font Size**: 18px
- **Font Weight**: 700 Bold
- **Color**: Black
- **Margin Bottom**: 12px

#### Card Description
- **Font Size**: 16px
- **Font Weight**: 400 Regular
- **Color**: Black
- **Line Height**: 1.6

### Icons Reference
1. **Accurate Valuations**: Dollar sign (💲) inside location pin
2. **AI-Powered Insights**: Head profile with circuit/brain pattern
3. **Neighborhood Intelligence**: Location/map pin icon

---

## Spacing & Whitespace System

| Element | Space | Usage |
|---------|-------|-------|
| Section Padding | 60-80px | Between major sections |
| Card Padding | 32px | Inside feature cards |
| Component Gap | 24px | Between flex/grid items |
| Text Margin | 16-24px | Between text elements |
| Icon Spacing | 16px | Below icons in cards |
| Button Height | 56px | Standard interactive elements |
| Border Radius Small | 8px | Input fields, small components |
| Border Radius Medium | 16px | Cards, larger components |
| Border Radius Large | 24px | Images, hero sections |

---

## Interactive Elements

### Buttons
- **Primary Button** (CTA)
  - Background: Dark Teal (`#1B4D3E`)
  - Color: White
  - Padding: 16px 32px
  - Border Radius: 8px
  - Font Weight: 600
  - Hover: +5% darker
  - Active: +10% darker

### Links
- **Navigation Links**
  - Color: Black
  - Text Decoration: None
  - Hover: Underline (1px)
  - Active: Bold weight

### States
- **Hover**: Slight shadow, color shift
- **Active**: Underline or bold
- **Focus**: 2px outline in Dark Teal
- **Disabled**: 50% opacity, no cursor

---

## Responsive Design

### Mobile (375px - 767px)
- Single column layout
- Padding: 16px horizontal
- Font sizes: -2px from desktop
- Hero section stacked vertically
- Image full width below headline
- Cards: 1 per row

### Tablet (768px - 1023px)
- 2-column layouts where applicable
- Padding: 24px horizontal
- Hero: 50/50 split possible
- Cards: 2 per row (last card on new row)

### Desktop (1024px+)
- Full multi-column layouts
- Padding: 60px horizontal
- Hero: 60/40 split as designed
- Cards: 3 per row

---

## Visual Hierarchy & Styling

### Color Usage
- **Dark Teal (`#1B4D3E`)**: Headlines, primary CTAs, accent elements
- **Warm Brown (`#A67C52`)**: Icons, secondary accents
- **Black (`#000000`)**: Body text, navigation
- **Cream/Off-White (`#F5EFE7`)**: Background, breathing room
- **Light Beige (`#F9F6F1`)**: Cards, nested sections

### Typography Hierarchy
1. **H1 Headlines**: 56px, Bold - Immediate attention
2. **H2 Subheadings**: 18px, Regular - Secondary information
3. **Body Text**: 16px, Regular - Main content
4. **Small Text**: 14px, Regular - Captions, metadata

### Visual Characteristics
✓ Warm, inviting color palette  
✓ Professional, lifestyle imagery  
✓ Clean, modern typography  
✓ Rounded corners for friendliness (16-24px)  
✓ Ample whitespace for premium feel  
✓ Icon-driven feature communication  
✓ Subtle shadows for depth  
✓ Smooth transitions (300ms)  

---

## Accessibility Guidelines

- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Focus States**: Clear 2px outline in Dark Teal
- **Alt Text**: All images have descriptive alt text
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3)
- **ARIA Labels**: Icon buttons have aria-label attributes
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Font Sizes**: Minimum 16px for body text

---

## Performance Considerations

- **Image Optimization**: JPEG hero image (compressed, webp fallback)
- **Font Loading**: Use system fonts or optimized Google Fonts
- **CSS**: Utility-first approach (Tailwind CSS recommended)
- **Lazy Loading**: Images below fold
- **Mobile First**: CSS written for mobile, enhanced for desktop

---

## Files to Create/Extract

\`\`\`
public/
├── assets/
│   ├── logos/
│   │   └── logo.png
│   └── images/
│       └── hero-couple.jpg
\`\`\`

---

## Notes for Development

- Use Tailwind CSS for utility-first styling
- Implement CSS Grid for the 3-column feature cards layout
- Use Flexbox for horizontal navigation and alignment
- Set up CSS variables for colors to maintain consistency
- Test responsive behavior at all breakpoints
- Ensure all hover and focus states are implemented
- Optimize images before deployment
- Consider lazy loading for images below the fold
