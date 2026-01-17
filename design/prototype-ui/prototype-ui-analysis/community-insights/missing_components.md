# Missing Components for Community Insights Page

## High Priority Components

### 1. HighlightItem / ListItemWithIcon (Molecule)
**Status**: ❌ **MISSING**

**Purpose**: Display list items with icons on the left and text content on the right. Used in both School Highlights and Development Activity sections.

**Required Props:**
```typescript
interface HighlightItemProps {
  icon: React.ReactNode; // Icon from lucide-react (GraduationCap, Tree, Home, Building, TrendingUp, etc.)
  children: React.ReactNode; // Text content - can be string or complex JSX (supports multiple lines)
  className?: string;
}
```

**Visual Requirements:**
- **Layout**: Horizontal flex layout
- **Icon Position**: Left side, fixed width (icon container: 24-32px width)
- **Icon Styling**: 
  - Size: 20-24px (medium icon size)
  - Color: Gray (#4b5563 or #6b7280)
  - Vertical alignment: Top-aligned with text
- **Text Content**: 
  - Flexible width (takes remaining space)
  - Standard paragraph styling
  - Support for multiple lines
  - Support for inline formatting (bold, line breaks)
  - Color: Dark gray (#374151 or #4b5563)
- **Spacing**: 
  - Gap between icon and text: 16px
  - Vertical spacing between items: 16px-20px

**Usage Examples:**
```tsx
// School Highlights - Item 1
<HighlightItem icon={<GraduationCap size={20} />}>
  <strong>Top-rated Schools (8.2/10)</strong>
  <br />
  Xavier High School (7.9/10)
</HighlightItem>

// School Highlights - Item 2
<HighlightItem icon={<Sprout size={20} />}>
  French Immersion, STEM
</HighlightItem>

// School Highlights - Item 3
<HighlightItem icon={<Home size={20} />}>
  Homes near top schools sell 4-7% above neighbourhood
</HighlightItem>

// Development Activity - Item 1
<HighlightItem icon={<Building size={20} />}>
  Mixed-use plaza expansion on Tenth Line
</HighlightItem>

// Development Activity - Item 2
<HighlightItem icon={<TrendingUp size={20} />}>
  Zoning approvals increasing year-year
</HighlightItem>

// Development Activity - Item 3
<HighlightItem icon={<ArrowUp size={20} />}>
  Strong upward pressure expected over the 1-24 months
</HighlightItem>
```

**Styling Details:**
```css
/* Container */
display: flex;
gap: 16px;
align-items: flex-start;

/* Icon Container */
width: 24px; /* or 32px */
flex-shrink: 0;
display: flex;
align-items: flex-start;
justify-content: flex-start;
padding-top: 2px; /* Minor alignment adjustment */

/* Text Container */
flex: 1;
color: #374151;
font-size: 16px;
line-height: 1.5;
```

**Implementation Notes:**
- Should use styled-components (consistent with ui-library)
- Icons come from lucide-react (already used in project)
- Component should be flexible to support various icon sizes if needed
- Text content should support JSX children (bold, breaks, etc.)
- Should handle empty/null icons gracefully

---

### 2. AIInsightCard / InsightSection (Molecule)
**Status**: ❌ **MISSING**

**Purpose**: Display AI insight information with badge, label, text, and photo in a two-column layout with light green background.

**Required Props:**
```typescript
interface AIInsightCardProps {
  insightText: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}
```

**Visual Requirements:**
- **Layout**: Two-column flex layout (left: content, right: image)
- **Background**: Light green (#f0fdf4 or #ecfdf5)
- **Padding**: 24px-32px
- **Border Radius**: 8px-12px
- **Left Column Content**:
  - IconBadge (AI variant, circular) at top
  - "AI Insight" label below badge
  - Insight text content below label
  - Vertical spacing: 12px-16px between elements
- **Right Column**:
  - Photo/image
  - Proper aspect ratio handling
  - Rounded corners (optional)
  - Responsive sizing
- **Responsive Behavior**:
  - Desktop: Two columns side-by-side
  - Mobile: Stack vertically (content on top, image below)
  - Breakpoint: ~768px

**Layout Structure:**
```
┌─────────────────────────────────────────┐
│ [Light Green Background]                │
│                                         │
│ ┌──────────┐      ┌─────────────────┐  │
│ │   [AI]   │      │                 │  │
│ │  Badge   │      │                 │  │
│ │          │      │     Photo       │  │
│ │ AI       │      │                 │  │
│ │ Insight  │      │                 │  │
│ │          │      │                 │  │
│ │ Text     │      │                 │  │
│ │ content  │      │                 │  │
│ └──────────┘      └─────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

**Composition:**
- Uses `Card` atom for base container (or custom styled container)
- Uses `IconBadge` atom with `variant="ai"` and appropriate children ("AI" + house icon)
- Uses `Label` atom for "AI Insight" text
- Uses `next/image` for photo (or future CommunityImage component)

**Styling Details:**
```css
/* Container */
display: flex;
gap: 32px;
padding: 32px;
background-color: #f0fdf4; /* or #ecfdf5 */
border-radius: 12px;

/* Left Column */
flex: 1;
display: flex;
flex-direction: column;
gap: 16px;

/* Right Column */
flex: 1;
max-width: 400px; /* or appropriate max-width */
```

**Responsive Styling:**
```css
@media (max-width: 768px) {
  flex-direction: column;
  gap: 24px;
  
  /* Right column takes full width on mobile */
  right-column: {
    max-width: 100%;
  }
}
```

**Implementation Notes:**
- Should wrap `Card` component or create custom styled container
- IconBadge children should include both "AI" text and a house icon (from lucide-react)
- Image should use `next/image` for optimization
- Background color should match design system or be configurable
- Padding and spacing should be consistent with design tokens

---

## Medium Priority Components

### 3. MetricsSection / StatsWithChart (Molecule) - Optional
**Status**: ⚠️ **PARTIAL** (Can be achieved with CSS Grid/Flexbox at page level)

**Purpose**: Container component for arranging three StatCard components and a TrendCard in a coordinated layout.

**Required Props:**
```typescript
interface MetricsSectionProps {
  stats: Array<{
    value: string | number;
    label: string;
  }>;
  trendTitle: string;
  trendData: TrendDataPoint[];
  trendPeriod?: string;
  className?: string;
}
```

**Visual Requirements:**
- **Layout**: Grid or flex layout
- **Desktop Layout**: 
  - Option 1: 3 StatCards in a row, TrendCard below
  - Option 2: 3 StatCards on left, TrendCard on right
  - Option 3: All 4 items in a grid (2x2 or 4x1)
- **Mobile Layout**: Stack vertically
- **Spacing**: Consistent gaps between items (16px-24px)

**Note**: This component is optional as the layout can be achieved with standard CSS Grid/Flexbox at the page component level. However, it provides consistency and reusability.

**Implementation Notes:**
- Could use CSS Grid for flexible layout
- Should compose `StatCard` and `TrendCard` components
- Provides consistent spacing and responsive behavior
- Can be deferred if page-level layout is preferred

---

## Low Priority Components

### 4. CommunityImage / InsightImage (Molecule) - Optional
**Status**: ⚠️ **PARTIAL** (Can use `next/image` directly)

**Purpose**: Wrapper component for community/insight photos with consistent styling.

**Required Props:**
```typescript
interface CommunityImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}
```

**Features:**
- Wraps `next/image` with consistent styling
- Handles aspect ratio
- Rounded corners (optional)
- Loading states
- Error handling
- Responsive sizing

**Note**: This is optional as `next/image` can be used directly with inline styles. Only needed if consistent image styling is required across multiple pages.

---

## Component Dependencies

### Existing Components to Use:
1. ✅ **Navigation** (organism) - Header with logo and links
2. ✅ **Logo** (atom) - Already in Navigation
3. ✅ **IconBadge** (atom) - AI Insight badge
4. ✅ **Label** (atom) - Section titles and "AI Insight" label
5. ✅ **Card** (atom) - Base container for AIInsightCard
6. ✅ **StatCard** (molecule) - Three stat metrics
7. ✅ **TrendCard** (molecule) - Line graph for trends
8. ✅ **Button** (atom) - CTA button

### Icon Dependencies:
All icons from **lucide-react** (already used in project):
- `GraduationCap` - School Highlights
- `Sprout` or `Tree` - School Highlights (French Immersion, STEM)
- `Home` or `House` - School Highlights
- `Building` - Development Activity
- `TrendingUp` or `LineChart` - Development Activity
- `ArrowUp` - Development Activity
- `Home` (again) - For IconBadge house icon in AI Insight

### New Dependencies:
- None required (all dependencies already exist)

---

## Implementation Notes

### HighlightItem Implementation Strategy:

1. **Component Structure:**
   ```tsx
   export const HighlightItem: React.FC<HighlightItemProps> = ({
     icon,
     children,
     className = '',
   }) => {
     return (
       <Container className={className}>
         <IconWrapper>{icon}</IconWrapper>
         <TextContent>{children}</TextContent>
       </Container>
     );
   };
   ```

2. **Flexible Text Content:**
   - Use `children` prop to allow any React node
   - Support for JSX children (bold, line breaks, spans)
   - Don't restrict to plain strings

3. **Icon Handling:**
   - Accept any React node for icon
   - Typically will be lucide-react icon components
   - Size should be handled by parent or icon component itself
   - IconWrapper provides consistent spacing and alignment

### AIInsightCard Implementation Strategy:

1. **Component Structure:**
   ```tsx
   export const AIInsightCard: React.FC<AIInsightCardProps> = ({
     insightText,
     imageSrc,
     imageAlt,
     className = '',
   }) => {
     return (
       <Card variant="custom" className={className}>
         <ContentWrapper>
           <LeftColumn>
             <IconBadge variant="ai" size="medium">
               AI <Home size={12} />
             </IconBadge>
             <Label>AI Insight</Label>
             <InsightText>{insightText}</InsightText>
           </LeftColumn>
           <RightColumn>
             <Image src={imageSrc} alt={imageAlt} />
           </RightColumn>
         </ContentWrapper>
       </Card>
     );
   };
   ```

2. **IconBadge Children:**
   - Need to combine "AI" text with house icon
   - Can use flex layout within IconBadge or pass as React fragment
   - Icon should be smaller than text

3. **Responsive Design:**
   - Use media queries or styled-components responsive helpers
   - Stack vertically below 768px breakpoint
   - Maintain proper spacing on mobile

---

## Testing Checklist

### HighlightItem:
- [ ] Icon displays correctly on left side
- [ ] Text content displays correctly on right side
- [ ] Multiple lines of text are supported
- [ ] Bold text and other inline formatting works
- [ ] Spacing between icon and text is consistent
- [ ] Vertical alignment is correct (icon top-aligned with text)
- [ ] Component handles empty/null icon gracefully
- [ ] Component handles empty children gracefully
- [ ] Responsive behavior works correctly

### AIInsightCard:
- [ ] Two-column layout displays correctly on desktop
- [ ] Layout stacks vertically on mobile
- [ ] IconBadge displays with AI variant
- [ ] "AI Insight" label displays correctly
- [ ] Insight text displays correctly
- [ ] Image displays with correct aspect ratio
- [ ] Light green background is applied
- [ ] Padding and spacing are consistent
- [ ] Border radius is applied correctly
- [ ] Responsive breakpoint works at 768px

### Page Integration:
- [ ] All sections display in correct order
- [ ] School Highlights section uses HighlightItem correctly
- [ ] Development Activity section uses HighlightItem correctly
- [ ] Three StatCards display correctly
- [ ] TrendCard displays correctly
- [ ] CTA button is properly styled and positioned
- [ ] Overall spacing between sections is consistent
- [ ] Page is responsive on mobile devices

---

## Design Tokens Reference

### Colors:
- **Primary Green**: #1a3d2e
- **Light Green Background**: #f0fdf4 or #ecfdf5
- **Dark Gray**: #111827
- **Medium Gray**: #4b5563
- **Light Gray**: #6b7280
- **Icon Gray**: #4b5563 or #6b7280
- **Text Gray**: #374151 or #4b5563
- **Border Gray**: #e5e7eb

### Typography:
- **Page Title**: Large, bold, dark green (#1a3d2e)
- **Section Titles**: Medium, bold, dark green (#1a3d2e)
- **Insight Text**: Standard paragraph, dark gray
- **List Item Text**: Standard paragraph, dark gray (16px)
- **Stat Values**: Very large, bold (handled by StatCard - 56px)
- **Stat Labels**: Small, gray (handled by StatCard - 14px)

### Spacing:
- **Section Gap**: 48px-64px between major sections
- **Item Gap**: 16px-20px between list items
- **Icon-Text Gap**: 16px
- **Card Padding**: 24px-32px
- **Component Gap**: 16px-24px (for flex/grid layouts)

### Icons:
- **Size**: 20-24px (medium)
- **Color**: #4b5563 or #6b7280
- **Source**: lucide-react

### Breakpoints:
- **Mobile**: < 768px
- **Desktop**: >= 768px
