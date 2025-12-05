# Full Property Breakdown Page UI Library Analysis

## Image Component Mapping

### 1. HEADER SECTION
**Elements:**
- **Logo (left side)**: ✅ **EXISTS** - `Logo` atom component
- **Edit Address Link (right side)**: ⚠️ **PARTIAL** - Can use `Button` with `variant="tertiary"` or create a `TextLink` atom component for text-only links

### 2. MAIN CONTENT SECTION
**Elements:**
- **Page Title "Full Property Breakdown"**: ✅ **EXISTS** - Can use standard typography with `Label` or heading styles
- **Property Address "3927 Maple Ave"**: ✅ **EXISTS** - Standard typography
- **Large Property Image (right side)**: ⚠️ **PARTIAL** - Can use `next/image` directly, but might benefit from a `PropertyImage` molecule component for consistent styling

### 3. ESTIMATED VALUE SECTION
**Elements:**
- **Section Title "Estimated Value"**: ✅ **EXISTS** - Can use `Label` atom or standard typography
- **Description Text**: ✅ **EXISTS** - Standard typography ("Valuation is based on the following comparable properties in your area.")

### 4. COMPARABLE PROPERTIES GRID
**Elements:**
- **Three Property Cards in Grid Layout**: ⚠️ **PARTIAL** - `PropertyCard` molecule exists but needs modifications:
  - Current `PropertyCard` has: image, address, beds, baths, year, similarityScore
  - **Required modifications:**
    - **Value Display**: First card shows "$950,000" prominently - needs `ValueDisplay` integration or large value styling
    - **Score Badge Styling**: Current badge is pink (`#fce7f3`), image shows light beige/tan badge with dark gray border - needs styling update
    - **Badge Position**: Image shows badge positioned differently (circular, top-right or integrated differently)
    - **Layout Variations**: First card shows value instead of address, other cards show address - needs conditional rendering support
    - **Title Consistency**: Cards show "Similarity Score" label (with typos in image) - current component has this

**Card Structure Analysis:**
- **Card 1 (Left):**
  - Property image
  - "Similarity Score" label
  - **Large value "$950,000"** (instead of address)
  - "4 bd, 3a" and "2008"
  - Circular badge with "86"
  
- **Card 2 (Middle):**
  - Property image
  - "Similarity Score" label
  - Address "472 Cedar Ln"
  - "4 bd, 3a" and "2013"
  - Circular badge with "88"
  
- **Card 3 (Right):**
  - Property image
  - "Similarity Score" label
  - Address "483 Pine St"
  - "3 bd, 2a" and "2004"
  - Circular badge with "82"

### 5. CALL TO ACTION
**Elements:**
- **"Unlock Detailed Report" Button**: ✅ **EXISTS** - `Button` atom with `variant="primary"` and `fullWidth` prop

### 6. FOOTER/DISCLAIMER
**Elements:**
- **Footer Text**: ✅ **EXISTS** - Standard typography ("Learn how these and other factors influence your property's value.")

---

## Summary: Missing Components & Required Modifications

### Atoms Needed:
1. **TextLink** (optional) - For "Edit address" link styling (can use Button with variant="tertiary" as alternative)
2. **PropertyImage** (optional) - Molecule wrapper for consistent property image styling

### Molecules Needed:
1. **PropertyCard Modifications** - Update existing `PropertyCard` to support:
   - **Value Display Mode**: Show large value ($950,000) instead of address for primary comparable
   - **Badge Styling**: Update score badge to match image (light beige/tan background, dark gray border, circular)
   - **Badge Position**: Ensure badge is properly positioned (circular, integrated with card design)
   - **Conditional Layout**: Support both "value-first" and "address-first" card layouts

### Existing Components That Can Be Used:
- ✅ `Logo` - Header logo
- ✅ `Button` - CTA button ("Unlock Detailed Report")
- ✅ `Card` - Container for property cards (already used in PropertyCard)
- ✅ `Label` - Section titles
- ✅ `PropertyCard` - Base component (needs modifications)
- ✅ `ValueDisplay` - Can be integrated into PropertyCard for value display
- ✅ `IconBadge` - Could potentially be adapted for score badge, but PropertyCard has its own badge

---

## Component Priority (Suggested Build Order)

1. **PropertyCard Modifications** (molecule) - **HIGH PRIORITY**
   - Add value display mode (show $950,000 instead of address)
   - Update score badge styling (light beige/tan with dark gray border)
   - Ensure badge is circular and properly positioned
   - Add conditional rendering for value vs address display

2. **TextLink** (atom) - **LOW PRIORITY** - Optional, can use Button variant="tertiary"
   - For "Edit address" link styling

3. **PropertyImage** (molecule) - **LOW PRIORITY** - Optional
   - Wrapper for consistent property image styling (can use next/image directly)

---

## Detailed PropertyCard Modification Requirements

### Current PropertyCard Structure:
```typescript
interface PropertyCardProps {
  image: string;
  address: string;
  beds: number;
  baths: number;
  year: number;
  similarityScore: number;
  className?: string;
}
```

### Required Modifications:

1. **Add Value Display Support:**
   ```typescript
   interface PropertyCardProps {
     // ... existing props
     value?: number; // Optional value to display instead of address
     showValue?: boolean; // Flag to show value prominently
   }
   ```

2. **Update Score Badge Styling:**
   - Current: Pink background (`#fce7f3`)
   - Required: Light beige/tan background with dark gray border
   - Shape: Circular (already circular, but ensure proper styling)
   - Size: Match image proportions

3. **Layout Variations:**
   - When `value` is provided and `showValue={true}`: Display large value instead of address
   - When `address` is provided: Display address as normal
   - Ensure both layouts maintain consistent spacing and hierarchy

4. **Badge Positioning:**
   - Ensure badge is properly integrated into card layout
   - Maintain visual hierarchy (badge should be prominent but not overwhelming)

---

## Page Layout Structure

### Grid Layout:
- **Comparable Properties**: 3-column grid on desktop, responsive on mobile
- **Card Spacing**: Consistent gap between cards
- **Overall Layout**: White background, clean spacing

### Typography Hierarchy:
- **Page Title**: Large, bold, dark green (#1a3d2e)
- **Property Address**: Medium, dark green
- **Section Titles**: Medium, bold, dark green
- **Card Content**: Standard gray text (#4b5563, #6b7280)
- **Value Display**: Large, bold, dark gray (#111827)

### Color Scheme:
- **Primary Text**: Dark green (#1a3d2e)
- **Secondary Text**: Dark gray (#111827, #4b5563, #6b7280)
- **Score Badge**: Light beige/tan background, dark gray border
- **Button**: Dark green background (#1a3d2e), white text
- **Card Borders**: Light gray (#e5e7eb)

---

## Notes

1. **PropertyCard Component**: The existing `PropertyCard` is close but needs styling updates and value display support
2. **Badge Styling**: The score badge needs to match the image's light beige/tan aesthetic rather than the current pink
3. **Layout Flexibility**: The component should support both "value-first" (primary comparable) and "address-first" (other comparables) layouts
4. **Image Quality**: Property images should maintain aspect ratio and use proper `next/image` optimization
5. **Responsive Design**: Grid should collapse to single column on mobile devices

