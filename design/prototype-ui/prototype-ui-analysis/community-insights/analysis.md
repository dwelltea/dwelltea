# Community Insights Page UI Library Analysis

## Image Component Mapping

### 1. HEADER SECTION
**Elements:**
- **Logo (left side)**: ✅ **EXISTS** - `Logo` atom component (already used in `Navigation` organism)
- **Navigation Links**: ✅ **EXISTS** - `Navigation` organism component (Features, About, Contact, Sign In)

### 2. PAGE TITLE SECTION
**Elements:**
- **Page Title "Community Insights for Orleans - Fallingbrook"**: ✅ **EXISTS** - Can use standard typography with heading styles or `Label` atom

### 3. AI INSIGHT SECTION
**Elements:**
- **AI Insight Badge/Icon**: ✅ **EXISTS** - `IconBadge` atom with `variant="ai"` (circular badge with "AI" text and house symbol)
- **"AI Insight" Label**: ✅ **EXISTS** - Can use `Label` atom
- **Insight Text Content**: ✅ **EXISTS** - Standard typography ("Fallingbrook continues to show moderate growth...")
- **Background Section with Light Green**: ⚠️ **PARTIAL** - Can use `Card` with custom styling for light green background (`#f0fdf4` or similar)
- **Photo/Image (right side)**: ⚠️ **PARTIAL** - Can use `next/image` directly, but might benefit from a `CommunityImage` or `InsightImage` wrapper component
- **Layout (two-column with badge, text on left; photo on right)**: ❌ **MISSING** - Needs `AIInsightCard` or `InsightSection` molecule component for the two-column layout

**Section Structure Analysis:**
- Left side: IconBadge + "AI Insight" label + text content
- Right side: Photo of people (community representation)
- Background: Light green (#f0fdf4 or similar)
- Overall: Card-like container with two-column flex layout

### 4. SCHOOL HIGHLIGHTS SECTION
**Elements:**
- **Section Title "School Highlights"**: ✅ **EXISTS** - Can use `Label` atom or standard typography
- **Three Highlight Items** (list format):
  - **Item 1**: Graduation cap icon + "Top-rated Schools (8.2/10)" + "Xavier High School (7.9/10)"
  - **Item 2**: Tree icon + "French Immersion, STEM"
  - **Item 3**: House icon + "Homes near top schools sell 4-7% above neighbourhood"
  
**Component Mapping:**
- **Icons (graduation cap, tree, house)**: ⚠️ **PARTIAL** - Icons available via lucide-react, but need a `HighlightItem` or `FeatureListItem` molecule component for the icon + text layout
- **Item Layout**: ❌ **MISSING** - Needs `HighlightItem` or `ListItemWithIcon` molecule component
  - Icon (left)
  - Text content (right, can have multiple lines)
  - Consistent spacing and styling

**Current Alternatives:**
- Could potentially use `FeatureCard` but it's designed for cards, not list items
- Need a simpler list item component with icon + text

### 5. DEVELOPMENT ACTIVITY SECTION
**Elements:**
- **Section Title "Development Activity"**: ✅ **EXISTS** - Can use `Label` atom or standard typography
- **Three Activity Items** (list format):
  - **Item 1**: Building icon + "Mixed-use plaza expansion on Tenth Line"
  - **Item 2**: Line graph icon + "Zoning approvals increasing year-year"
  - **Item 3**: Upward arrow icon + "Strong upward pressure expected over the 1-24 months"

**Component Mapping:**
- **Icons (building, line graph, upward arrow)**: ⚠️ **PARTIAL** - Icons available via lucide-react, but need a `HighlightItem` or `ActivityListItem` molecule component
- **Item Layout**: ❌ **MISSING** - Same as School Highlights, needs `HighlightItem` or `ListItemWithIcon` molecule component

**Note**: This section uses the same component pattern as School Highlights, so one reusable component can serve both.

### 6. MEDIAN LIST PRICE SECTION
**Elements:**
- **Section Title "Median List Price (3 yrs)"**: ✅ **EXISTS** - Can use `Label` atom or standard typography
- **Three Stat Metrics**:
  - **"58"** with label **"Homes for sale"** below
  - **"123"** with label **"Homes Sold"** below
  - **"18"** with label **"Days on market"** below
- **Line Graph/Chart (right side)**: ✅ **EXISTS** - `TrendCard` molecule component can be used, but may need layout modification

**Component Mapping:**
- **Stat Metrics**: ✅ **EXISTS** - `StatCard` molecule component (perfect match: large number + label)
- **Line Graph**: ✅ **EXISTS** - `TrendCard` molecule component (displays trend data with mini line chart)
- **Layout (three StatCards + TrendCard side-by-side)**: ⚠️ **PARTIAL** - Can be achieved with CSS Grid/Flexbox, but might benefit from a `MetricsSection` or `StatsWithChart` molecule component

**Current Usage:**
- Three `StatCard` components in a row
- One `TrendCard` component positioned beside or integrated into the section
- Overall container for spacing and layout

### 7. CALL TO ACTION
**Elements:**
- **"Connect to the Community" Button**: ✅ **EXISTS** - `Button` atom with `variant="primary"` and `fullWidth` prop

---

## Summary: Missing Components & Required Modifications

### Atoms Needed:
1. None (all required atoms exist)

### Molecules Needed:
1. **AIInsightCard** / **InsightSection** - ❌ **MISSING**
   - Two-column layout (left: badge + label + text, right: photo)
   - Light green background
   - Proper spacing and responsive behavior

2. **HighlightItem** / **ListItemWithIcon** / **FeatureListItem** - ❌ **MISSING**
   - Icon + text content layout
   - Used for School Highlights and Development Activity sections
   - Horizontal layout with icon on left, text on right
   - Support for multi-line text content

3. **CommunityImage** / **InsightImage** (optional) - ⚠️ **PARTIAL**
   - Wrapper for community/insight photos
   - Consistent styling and aspect ratio handling
   - Can use `next/image` directly initially

4. **MetricsSection** / **StatsWithChart** (optional) - ⚠️ **PARTIAL**
   - Container for three StatCards + TrendCard layout
   - Grid/flex layout management
   - Can be achieved with standard CSS, but component provides consistency

### Existing Components That Can Be Used:
- ✅ `Navigation` - Header with logo and navigation links
- ✅ `Logo` - Logo in navigation (already in Navigation component)
- ✅ `IconBadge` - AI Insight badge (circular with "AI" text)
- ✅ `Label` - Section titles
- ✅ `Card` - Base card component (for AI Insight section background)
- ✅ `StatCard` - Three stat metrics (Homes for sale, Homes Sold, Days on market)
- ✅ `TrendCard` - Line graph for median list price trend
- ✅ `Button` - CTA button ("Connect to the Community")
- ✅ `Badge` - Could potentially be used for other badges if needed

---

## Component Priority (Suggested Build Order)

1. **HighlightItem** / **ListItemWithIcon** (molecule) - **HIGH PRIORITY**
   - Used in both School Highlights and Development Activity sections
   - Reusable across multiple sections
   - Simple component structure (icon + text)

2. **AIInsightCard** / **InsightSection** (molecule) - **HIGH PRIORITY**
   - Prominent section at top of page
   - Unique layout requirement (two-column with photo)
   - Key visual element

3. **MetricsSection** / **StatsWithChart** (molecule) - **LOW PRIORITY**
   - Can be achieved with CSS Grid/Flexbox
   - Provides consistency but not essential
   - Could be handled at page level

4. **CommunityImage** / **InsightImage** (molecule) - **LOW PRIORITY**
   - Can use `next/image` directly
   - Optional for consistency

---

## Detailed Component Requirements

### AIInsightCard / InsightSection

**Purpose**: Display AI insight with badge, label, text, and photo in a two-column layout with light green background.

**Props:**
```typescript
interface AIInsightCardProps {
  insightText: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}
```

**Layout:**
- Two-column flex layout (left: content, right: image)
- Light green background (#f0fdf4 or similar)
- IconBadge with "AI" variant on left
- "AI Insight" label below badge
- Insight text content
- Photo/image on right side
- Responsive: stacks vertically on mobile

**Composition:**
- Uses `Card` for container
- Uses `IconBadge` atom
- Uses `Label` atom
- Uses `next/image` or CommunityImage for photo

---

### HighlightItem / ListItemWithIcon

**Purpose**: Display a list item with an icon on the left and text content on the right.

**Props:**
```typescript
interface HighlightItemProps {
  icon: React.ReactNode; // Icon from lucide-react
  children: React.ReactNode; // Text content (can include multiple lines, spans, etc.)
  className?: string;
}
```

**Layout:**
- Horizontal flex layout
- Icon on left (fixed width, aligned top)
- Text content on right (flexible width)
- Consistent spacing (gap: 16px)
- Vertical alignment: icon and text aligned to top

**Styling:**
- Icon: Medium size (20-24px), default color (#4b5563 or #6b7280)
- Text: Standard paragraph styling, can support multiple lines
- Spacing: Consistent gap between icon and text

**Usage Examples:**
```tsx
// School Highlights
<HighlightItem icon={<GraduationCap />}>
  <strong>Top-rated Schools (8.2/10)</strong>
  <br />
  Xavier High School (7.9/10)
</HighlightItem>

// Development Activity
<HighlightItem icon={<Building />}>
  Mixed-use plaza expansion on Tenth Line
</HighlightItem>
```

---

## Page Layout Structure

### Section Order:
1. Header (Navigation)
2. Page Title
3. AI Insight Section (full width, light green background)
4. School Highlights Section
5. Development Activity Section
6. Median List Price Section (stats + chart)
7. Call to Action Button

### Layout Patterns:
- **Sections**: Vertical stack with consistent spacing (48px-64px between sections)
- **AI Insight**: Full-width card with two-column layout
- **Highlights Lists**: Vertical list of HighlightItem components
- **Stats Section**: Grid layout (3 StatCards + 1 TrendCard or similar arrangement)
- **Overall**: White background, clean spacing, max-width container

### Typography Hierarchy:
- **Page Title**: Large, bold, dark green (#1a3d2e)
- **Section Titles**: Medium, bold, dark green (#1a3d2e)
- **Insight Text**: Standard paragraph, dark gray
- **List Items**: Standard paragraph, dark gray, can include bold text
- **Stat Values**: Very large, bold (handled by StatCard)
- **Stat Labels**: Small, gray (handled by StatCard)

### Color Scheme:
- **Primary Text**: Dark green (#1a3d2e)
- **Secondary Text**: Dark gray (#111827, #4b5563, #6b7280)
- **AI Insight Background**: Light green (#f0fdf4 or #ecfdf5)
- **Button**: Dark green background (#1a3d2e), white text
- **Card Borders**: Light gray (#e5e7eb) or none for AI Insight section
- **Icon Colors**: Gray (#4b5563 or #6b7280)

---

## Notes

1. **IconBadge**: The existing `IconBadge` with `variant="ai"` matches the orange circular badge in the image. The "AI" text and house symbol should be passed as children.

2. **HighlightItem Component**: This is a critical missing component used in both School Highlights and Development Activity sections. It's a simple but essential molecule for consistent list item styling.

3. **AIInsightCard**: This component provides a unique layout that's specific to the AI Insight section. It combines existing atoms (IconBadge, Label, Card) into a cohesive molecule.

4. **StatCard and TrendCard**: Both components exist and can be used directly. The layout just needs proper CSS Grid/Flexbox arrangement.

5. **Icons**: All icons mentioned (graduation cap, tree, house, building, line graph, upward arrow) are available in lucide-react, which is already used in the project (Navigation component uses Search and User icons).

6. **Responsive Design**: All components should be responsive. The AI Insight section should stack vertically on mobile, and the stats section should adjust grid layout for mobile.

7. **Image Handling**: The community photo can use `next/image` directly with proper sizing and aspect ratio. A wrapper component is optional for consistency.
