# Missing UI Library Components for Valuation Page

## Detailed Component Inventory

### ✅ EXISTING COMPONENTS (Can Use As-Is)

1. **Logo** (atom) - Header logo on left
2. **Button** (atom) - "View Full Breakdown" CTA button
3. **Card** (atom) - Container for all card sections
4. **Label** (atom) - Section titles ("Estimated Value", "AI Insight")
5. **Badge** (atom) - Base badge component (may need extension)
6. **StatCard** (molecule) - Similarity Score card (may need slight customization)

---

## ❌ MISSING COMPONENTS (Need to Build)

### ATOMS (6 components)

#### 1. **ValueDisplay** / **LargeNumber**
- **Purpose**: Display large monetary values prominently
- **Example**: "$950,000"
- **Props Needed**:
  - `value: string | number`
  - `currency?: string` (default: "$")
  - `size?: 'large' | 'xlarge' | 'xxlarge'`
  - `className?: string`
- **Styling**: Very large, bold font (similar to StatCard value but larger)

#### 2. **IconBadge** / **AIBadge**
- **Purpose**: Circular badge with icon or text
- **Example**: Orange circle with "AI" text
- **Props Needed**:
  - `children: React.ReactNode` (icon or text)
  - `variant?: 'ai' | 'default' | 'custom'`
  - `size?: 'small' | 'medium' | 'large'`
  - `color?: string` (for custom variants)
  - `className?: string`
- **Styling**: Circular, colored background, white text/icon

#### 3. **StatusBadge** / **TemperatureBadge**
- **Purpose**: Display market status/temperature
- **Example**: "Hot" in orange
- **Props Needed**:
  - `status: 'hot' | 'warm' | 'cold' | 'neutral'`
  - `label?: string` (optional custom label)
  - `size?: 'small' | 'medium' | 'large'`
  - `className?: string`
- **Styling**: Colored text (orange for "Hot", yellow for "Warm", blue for "Cold")

#### 4. **Link** / **TextLink** (Optional)
- **Purpose**: Text link for navigation
- **Example**: "Edit address" link
- **Props Needed**:
  - `href: string`
  - `children: React.ReactNode`
  - `icon?: React.ReactNode`
  - `variant?: 'default' | 'subtle'`
  - `className?: string`
- **Note**: Could also use Button with `variant="tertiary"` and icon

#### 5. **ProgressSegment** / **ConfidenceSegment** (Internal)
- **Purpose**: Individual segment in confidence bar
- **Props Needed**:
  - `label: string`
  - `active: boolean`
  - `highlighted: boolean`
  - `width: string` (percentage)

#### 6. **Typography** / **Heading** (Optional Enhancement)
- **Purpose**: Consistent heading styles
- **Note**: Currently using standard HTML tags, but could benefit from styled components

---

### MOLECULES (3 components)

#### 1. **ConfidenceBar** / **SegmentedProgressBar**
- **Purpose**: Multi-segment progress bar showing confidence levels
- **Example**: Low/Medium/High segments with Medium and High highlighted
- **Props Needed**:
  - `segments: Array<{ label: string; width: number; active: boolean; highlighted: boolean }>`
  - `className?: string`
- **Composition**: Uses ProgressSegment atoms internally
- **Styling**: Horizontal bar with segments, different colors for active/highlighted states

#### 2. **TrendCard** / **ChartCard**
- **Purpose**: Card displaying a mini line chart for trends
- **Example**: "Valuation Trend (3 yrs)" with upward trending line graph
- **Props Needed**:
  - `title: string`
  - `data: Array<{ x: number | string; y: number }>` (chart data points)
  - `trend?: 'up' | 'down' | 'neutral'`
  - `period?: string` (e.g., "3 yrs")
  - `className?: string`
- **Composition**: Uses Card atom + custom chart visualization
- **Note**: May need a simple chart library or SVG-based mini chart

#### 3. **PropertyImage**
- **Purpose**: Wrapper for property images with consistent styling
- **Example**: Large property photo
- **Props Needed**:
  - `src: string`
  - `alt: string`
  - `width?: number`
  - `height?: number`
  - `priority?: boolean`
  - `className?: string`
- **Composition**: Wraps next/image with consistent styling
- **Note**: Lower priority - can use next/image directly initially

---

### ORGANISMS (1 component - Optional)

#### 1. **ValuationMetrics** / **MetricsGrid**
- **Purpose**: Container for the three metric cards
- **Composition**: Uses TrendCard, StatCard, and StatusBadge
- **Note**: Could be built as part of the page component rather than a reusable organism

---

## Component Dependencies

```
ValuationPage
├── Header
│   ├── Logo (atom) ✅
│   └── Link/Button (atom) ⚠️/✅
├── PropertyImage (molecule) ❌
├── EstimatedValueSection
│   ├── Label (atom) ✅
│   ├── ValueDisplay (atom) ❌
│   ├── ConfidenceRange (text) ✅
│   └── ConfidenceBar (molecule) ❌
├── AIInsightSection
│   ├── IconBadge (atom) ❌
│   ├── Label (atom) ✅
│   └── InsightText (text) ✅
└── MetricsSection
    ├── TrendCard (molecule) ❌
    ├── StatCard (molecule) ⚠️ (may need customization)
    └── StatusBadge (atom) ❌
└── CTAButton
    └── Button (atom) ✅
```

---

## Priority Ranking

### High Priority (Build First)
1. **ValueDisplay** (atom) - Prominently displayed, core feature
2. **ConfidenceBar** (molecule) - Key visual element, unique component

### Medium Priority
3. **IconBadge** (atom) - Used in AI Insight section
4. **StatusBadge** (atom) - Used in Market Temperature card
5. **TrendCard** (molecule) - Used in Valuation Trend card

### Low Priority (Can Defer)
6. **PropertyImage** (molecule) - Can use next/image directly
7. **Link** (atom) - Can use Button with tertiary variant

---

## Estimated Build Complexity

- **ValueDisplay**: ⭐ Simple (styled typography)
- **IconBadge**: ⭐ Simple (circular badge variant)
- **StatusBadge**: ⭐ Simple (text with color variants)
- **ConfidenceBar**: ⭐⭐ Medium (multi-segment layout)
- **TrendCard**: ⭐⭐⭐ Complex (requires chart visualization)
- **PropertyImage**: ⭐ Simple (wrapper component)

