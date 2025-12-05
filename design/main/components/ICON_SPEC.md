# Dwelltea Icon Specifications

## Overview
This document catalogs all icons used in the Dwelltea application, their specifications, usage contexts, and implementation guidelines.

---

## ICON CATEGORIES

1. **Brand Icons** - Logo and identity
2. **Navigation Icons** - Header and menu
3. **Feature Icons** - Large icons for features/benefits
4. **Content Icons** - Medium icons for highlights and data points
5. **UI Icons** - Small icons for actions and indicators

---

## 1. BRAND ICONS

### House Logo Icon

**Purpose**: Primary brand identifier, part of Dwelltea logo

**Visual Description**
- Simple house shape with pitched roof
- Geometric, minimalist style
- Clean lines, modern appearance
- May include door or window detail

**Specifications**
- **Style**: Outline or filled
- **Color**: Dark green #1a3d2e (primary), White #ffffff (reverse)
- **Size**: 32×32px (standard), 24×24px (small), 48×48px (large)
- **Stroke Width**: 2px (if outline)
- **Format**: SVG (scalable)
- **File**: `house-icon.svg`

**Usage Contexts**
- Primary logo (always visible)
- Favicon (16×16, 32×32, 180×180)
- App icon
- Social media profile image

**Implementation**
```tsx
<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
  <path d="M16 2L4 12v16h8v-10h8v10h8V12L16 2z" />
</svg>
```

---

## 2. NAVIGATION ICONS

### Search Icon

**Purpose**: Indicate search functionality

**Visual Description**
- Magnifying glass symbol
- Circle with diagonal handle

**Specifications**
- **Style**: Outline (2px stroke)
- **Color**: Dark #1f2937
- **Size**: 20×20px (icon), 40×40px (touch target)
- **Stroke Width**: 2px
- **Format**: SVG
- **Library**: lucide-react or custom

**Usage**
- Top navigation bar (right side)
- May be accompanied by "Search" text on larger screens

**Implementation**
```tsx
import { Search } from 'lucide-react';

<Search size={20} className="text-gray-800" />
```

### User/Account Icon

**Purpose**: Access user account, profile, or sign in

**Visual Description**
- Simple person silhouette or circle with person

**Specifications**
- **Style**: Outline or filled circle with person
- **Color**: Dark #1f2937
- **Size**: 20×20px (icon), 40×40px (touch target)
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- Top navigation bar (far right)
- May change when user is logged in

**Implementation**
```tsx
import { User } from 'lucide-react';

<User size={20} className="text-gray-800" />
```

### Arrow Right Icon

**Purpose**: Submit search, navigate forward

**Visual Description**
- Right-pointing arrow
- Simple, clean line

**Specifications**
- **Style**: Filled or outlined arrow
- **Color**: White #ffffff (on dark green button)
- **Size**: 20×20px
- **Stroke Width**: 2px (if outline)
- **Format**: SVG

**Usage**
- Search submit button
- Navigation/pagination
- CTA indicators

**Implementation**
```tsx
import { ArrowRight } from 'lucide-react';

<ArrowRight size={20} className="text-white" />
```

---

## 3. FEATURE ICONS (LARGE)

These icons represent main features or value propositions of the application.

### AI/Shield Icon

**Purpose**: Represent AI-powered insights

**Visual Description**
- Shield shape with AI symbol, brain, or circuit pattern
- Or: lightbulb with sparkles/stars

**Specifications**
- **Style**: Filled or duotone
- **Primary Color**: Dark green #1a3d2e or White #ffffff
- **Background**: Circular dark green background (~48px circle)
- **Icon Size**: 24-28px within circle
- **Total Size**: 48×48px
- **Format**: SVG

**Usage**
- "AI Insight" card header
- Features section highlighting AI capabilities

**Implementation**
```tsx
import { Shield, Brain, Sparkles } from 'lucide-react';

<div className="icon-container">
  <Shield size={28} className="text-white" />
</div>
```

### Valuation/Dollar Icon

**Purpose**: Represent accurate property valuations

**Visual Description**
- Dollar sign in location pin
- Or: Dollar sign in circle
- Or: Coins/money symbol

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 40-48px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Accurate Valuations" feature card
- Pricing/value related sections

**Implementation**
```tsx
import { DollarSign, MapPin } from 'lucide-react';

<div className="feature-icon">
  <DollarSign size={40} className="text-amber-600" />
</div>
```

### Brain/AI Insights Icon

**Purpose**: Represent AI-powered insights and intelligence

**Visual Description**
- Human head profile with brain
- Or: Lightbulb
- Or: Sparkles/stars

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 40-48px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "AI-Powered Insights" feature card
- Intelligence/analysis features

**Implementation**
```tsx
import { Brain, Lightbulb } from 'lucide-react';

<Brain size={40} className="text-amber-600" />
```

### Location/Map Pin Icon

**Purpose**: Represent neighborhood intelligence and location data

**Visual Description**
- Standard map marker/pin
- May include dot or circle inside

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 40-48px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Neighbourhood Intelligence" feature card
- Location-based features

**Implementation**
```tsx
import { MapPin } from 'lucide-react';

<MapPin size={40} className="text-amber-600" />
```

---

## 4. CONTENT ICONS (MEDIUM)

These icons accompany specific data points and highlights.

### Graduation Cap Icon

**Purpose**: Indicate school-related information

**Visual Description**
- Classic graduation cap (mortarboard)
- Tilted at typical angle

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Top-rated Schools" highlight
- Education-related content

**Implementation**
```tsx
import { GraduationCap } from 'lucide-react';

<GraduationCap size={32} className="text-amber-600" />
```

### Book/Language Icon

**Purpose**: Represent educational programs (French Immersion, STEM)

**Visual Description**
- Open book
- Or: Language/globe symbol
- Or: Beaker for STEM

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "French Immersion, STEM" highlight
- Educational program indicators

**Implementation**
```tsx
import { Book, Globe, FlaskConical } from 'lucide-react';

<Book size={32} className="text-amber-600" />
```

### House/Home Icon

**Purpose**: Represent homes and housing data

**Visual Description**
- Simple house outline
- Different from logo (simpler/generic)

**Specifications**
- **Style**: Outlined
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Homes near top schools" highlight
- Housing-related statistics

**Implementation**
```tsx
import { Home } from 'lucide-react';

<Home size={32} className="text-amber-600" />
```

### Building Icon

**Purpose**: Represent commercial development and real estate projects

**Visual Description**
- Multi-story building outline
- Or: Construction/crane symbol

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Mixed-use plaza expansion" highlight
- Development activity section

**Implementation**
```tsx
import { Building, Building2 } from 'lucide-react';

<Building2 size={32} className="text-amber-600" />
```

### Trending Up/Chart Icon

**Purpose**: Represent growth, trends, and market activity

**Visual Description**
- Line chart trending upward
- Or: Bar chart
- Or: Area chart

**Specifications**
- **Style**: Outlined
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Zoning approvals increasing" highlight
- Market trend indicators

**Implementation**
```tsx
import { TrendingUp, BarChart3 } from 'lucide-react';

<TrendingUp size={32} className="text-amber-600" />
```

### Arrow Up Icon

**Purpose**: Represent upward pressure, increases, growth

**Visual Description**
- Arrow pointing up and to the right
- Or: Simple upward arrow

**Specifications**
- **Style**: Outlined or filled
- **Color**: Gold/amber #c4941f
- **Size**: 32-36px
- **Stroke Width**: 2px
- **Format**: SVG

**Usage**
- "Strong upward pressure" highlight
- Price increases, market heat

**Implementation**
```tsx
import { ArrowUpRight } from 'lucide-react';

<ArrowUpRight size={32} className="text-amber-600" />
```

---

## 5. UI ICONS (SMALL)

### Checkmark Icon

**Purpose**: Indicate completion, success, confirmation

**Specifications**
- **Size**: 16-20px
- **Color**: Green or context-appropriate
- **Style**: Simple checkmark

**Usage**
- Form validation
- Success messages
- List indicators

### Close/X Icon

**Purpose**: Close modals, dismiss notifications

**Specifications**
- **Size**: 20-24px
- **Color**: Dark gray or context
- **Style**: Simple X or cross

**Usage**
- Modal close buttons
- Dismiss alerts
- Remove items

### Info Icon

**Purpose**: Provide additional information or help

**Specifications**
- **Size**: 16-20px
- **Color**: Blue or gray
- **Style**: Circle with lowercase i

**Usage**
- Tooltips
- Help text indicators
- Information callouts

---

## 6. ICON SYSTEM GUIDELINES

### Style Consistency
- **Primary Style**: Outlined (2px stroke) for most icons
- **Secondary Style**: Filled for emphasis or brand icons
- **Consistency**: Use same library (lucide-react recommended)
- **Weight**: Medium weight (2px stroke)
- **Corners**: Rounded corners (stroke-linecap: round)

### Color Usage

**Dark Green (#1a3d2e)**
- Brand/logo icons
- Primary interactive elements
- Headers and emphasis

**Gold/Amber (#c4941f)**
- Feature icons
- Content highlight icons
- Positive indicators

**Dark Gray (#1f2937)**
- Navigation icons
- Neutral UI icons
- Default state

**White (#ffffff)**
- Icons on dark backgrounds
- Reverse/negative space

### Sizing Scale
```
- Extra Small: 16×16px (inline, list items)
- Small: 20×20px (navigation, small buttons)
- Medium: 24-28px (default buttons, cards)
- Large: 32-36px (content highlights)
- Extra Large: 40-48px (feature cards, hero sections)
```

### Spacing
- **Icon + Text**: 8px gap minimum
- **Icon Padding**: At least 8px around icon for touch targets
- **Alignment**: Center-align icons with adjacent text

---

## 7. IMPLEMENTATION

### Using Lucide React
```tsx
import { 
  Home, 
  Search, 
  User, 
  MapPin, 
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowRight 
} from 'lucide-react';

// Basic usage
<Search size={20} />

// With styling
<MapPin size={32} className="text-amber-600" />

// With stroke width
<Home size={24} strokeWidth={2} />

// Inline with text
<div className="flex items-center gap-2">
  <GraduationCap size={24} />
  <span>Top-rated Schools</span>
</div>
```

### Custom Icon Component
```tsx
interface IconProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const iconSizes = {
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48
};

export function Icon({ icon, size = 'md', color, className }: IconProps) {
  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ color }}
    >
      {React.cloneElement(icon as React.ReactElement, { 
        size: iconSizes[size] 
      })}
    </span>
  );
}
```

### Icon with Background Circle
```tsx
function IconCircle({ icon, bgColor = '#1a3d2e', iconColor = '#ffffff' }) {
  return (
    <div 
      className="inline-flex items-center justify-center rounded-full"
      style={{ 
        width: 48, 
        height: 48, 
        backgroundColor: bgColor 
      }}
    >
      {React.cloneElement(icon, { 
        size: 24, 
        color: iconColor 
      })}
    </div>
  );
}

// Usage
<IconCircle icon={<Shield />} />
```

---

## 8. ACCESSIBILITY

### Best Practices
- **Decorative Icons**: Use `aria-hidden="true"` if icon is purely decorative
- **Meaningful Icons**: Include descriptive text or `aria-label`
- **Icon Buttons**: Always include accessible label
- **Color**: Don't rely on color alone (include text/shape)
- **Size**: Ensure icons in touch targets are large enough (44×44px minimum)

### Examples
```tsx
// Decorative icon (has adjacent text)
<div>
  <Home size={20} aria-hidden="true" />
  <span>Home</span>
</div>

// Icon button (icon only)
<button aria-label="Search">
  <Search size={20} />
</button>

// Icon with title for tooltip
<MapPin size={24} aria-label="Location" role="img" />
```

---

## 9. ICON INVENTORY

### Complete Icon List

| Icon | Name | Size | Color | Usage | Library |
|------|------|------|-------|-------|---------|
| House | Logo | 32px | Dark Green | Brand identity | Custom |
| Search | Magnifier | 20px | Dark Gray | Navigation | lucide-react |
| User | Person | 20px | Dark Gray | Account | lucide-react |
| Arrow Right | → | 20px | White | Search submit | lucide-react |
| Shield/AI | Shield | 28px | White/Green | AI feature | lucide-react |
| Dollar | $ | 40px | Amber | Valuations | lucide-react |
| Brain | Brain | 40px | Amber | AI insights | lucide-react |
| Map Pin | Location | 40px | Amber | Neighbourhood | lucide-react |
| Graduation Cap | School | 32px | Amber | Education | lucide-react |
| Book | Education | 32px | Amber | Programs | lucide-react |
| Home | House | 32px | Amber | Housing | lucide-react |
| Building | Building | 32px | Amber | Development | lucide-react |
| Trending Up | Chart | 32px | Amber | Growth | lucide-react |
| Arrow Up | ↗ | 32px | Amber | Increase | lucide-react |

---

## 10. PERFORMANCE

### Optimization
- **SVG Format**: Use inline SVG or SVG sprites
- **No Icon Fonts**: Avoid icon fonts (use SVG for accessibility and performance)
- **Tree Shaking**: Import only needed icons from lucide-react
- **Caching**: SVGs are cached efficiently by browsers
- **Size**: Keep SVG file sizes minimal (< 1KB per icon)

### Loading Strategy
```tsx
// Import only what you need
import { Home, Search } from 'lucide-react';

// NOT this (imports entire library)
import * as Icons from 'lucide-react';
```

---

## 11. CUSTOMIZATION

### Creating Custom Icons

**When to Create Custom Icons**
- Brand-specific symbols not in libraries
- Unique product features
- Specialized data visualizations

**Design Guidelines**
- Match stroke width of existing icons (2px)
- Use same corner radius (rounded)
- Follow same visual weight
- Keep simple and recognizable at small sizes
- Export as optimized SVG

**Export Settings**
- Remove unnecessary attributes
- Use viewBox="0 0 24 24" or similar
- Set fill="currentColor" for color flexibility
- Minimize decimal points
- Remove transforms when possible

---

## 12. RESPONSIVE BEHAVIOR

### Mobile Considerations
- Increase touch target sizes (44×44px minimum)
- May slightly increase icon sizes for better visibility
- Ensure sufficient spacing around icons
- Test icon legibility on small screens

### Dark Mode (Future)
- Define dark mode color variants
- Ensure sufficient contrast in both modes
- May need to adjust icon colors/opacity

---

## 13. TESTING CHECKLIST

- [ ] All icons render correctly
- [ ] Icons scale properly at different sizes
- [ ] Colors meet contrast requirements (3:1 for UI components)
- [ ] Icons are accessible (labels, aria attributes)
- [ ] Icons align properly with text
- [ ] Touch targets meet 44×44px minimum
- [ ] Icons load quickly (SVG optimization)
- [ ] Icons display consistently across browsers
- [ ] Responsive behavior works on mobile
- [ ] Icon meanings are clear and intuitive

---

## SUMMARY

The Dwelltea icon system provides:
- **Consistent visual language** using lucide-react library
- **Two-color palette**: Dark green (brand) and Gold/amber (highlights)
- **Clear hierarchy**: Sized from 16px (UI) to 48px (features)
- **Accessible implementation** with proper labeling
- **Optimized performance** using SVG format
- **Scalable system** easy to extend and maintain

This creates a cohesive, professional interface with clear visual communication throughout the application.
