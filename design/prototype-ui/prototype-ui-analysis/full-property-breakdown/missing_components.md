# Missing Components for Full Property Breakdown Page

## High Priority Components

### 1. PropertyCard Modifications (Molecule)
**Status**: ⚠️ **EXISTS BUT NEEDS MODIFICATIONS**

**Current Implementation:**
- Located at: `client/src/ui-library/molecules/PropertyCard/PropertyCard.tsx`
- Has: image, address, beds, baths, year, similarityScore

**Required Changes:**

#### A. Add Value Display Support
```typescript
interface PropertyCardProps {
  // Existing props...
  value?: number;        // Optional monetary value
  showValue?: boolean;   // Flag to show value instead of address
  isPrimary?: boolean;   // Alternative flag for primary comparable
}
```

**Visual Requirements:**
- When `value` is provided: Display large value (e.g., "$950,000") prominently
- Value should be in large, bold font (similar to ValueDisplay component)
- Replace address position with value display
- Maintain consistent card structure

#### B. Update Score Badge Styling
**Current Styling:**
```css
background-color: #fce7f3; /* Pink */
padding: 8px 16px;
border-radius: 9999px;
```

**Required Styling:**
```css
background-color: #f5f5dc; /* Light beige/tan - approximate */
border: 1px solid #4b5563; /* Dark gray border */
border-radius: 50%; /* Circular */
width: [appropriate size];
height: [appropriate size];
display: flex;
align-items: center;
justify-content: center;
```

**Badge Content:**
- Number only (e.g., "86", "88", "82")
- Dark gray text (#111827 or #4b5563)
- Centered in circular badge

#### C. Layout Variations
- **Primary Card (with value):**
  - Image
  - "Similarity Score" label
  - Large value display ($950,000)
  - Property details (beds, baths, year)
  - Score badge
  
- **Secondary Cards (with address):**
  - Image
  - "Similarity Score" label
  - Address
  - Property details (beds, baths, year)
  - Score badge

#### D. Typography Updates
- **Value Display**: Large, bold (similar to ValueDisplay component size)
- **Address**: Medium weight, dark gray
- **Details**: Small, gray text
- **Score Badge**: Medium weight, dark gray

---

## Medium Priority Components

### 2. TextLink (Atom) - Optional
**Status**: ❌ **MISSING** (Can use Button variant="tertiary" as alternative)

**Purpose**: Styled text link for "Edit address" in header

**Props:**
```typescript
interface TextLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
```

**Styling:**
- Dark gray text (#4b5563 or #6b7280)
- Hover state: Dark green (#1a3d2e)
- No background, no border
- Underline on hover (optional)

**Alternative**: Use `Button` with `variant="tertiary"` and minimal styling

---

## Low Priority Components

### 3. PropertyImage (Molecule) - Optional
**Status**: ❌ **MISSING** (Can use next/image directly)

**Purpose**: Consistent wrapper for property images

**Props:**
```typescript
interface PropertyImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '3/2';
  className?: string;
}
```

**Features:**
- Wraps `next/image` with consistent styling
- Handles aspect ratio
- Rounded corners
- Loading states
- Error handling

**Note**: This is optional as `next/image` can be used directly with inline styles

---

## Component Dependencies

### Existing Components to Use:
1. ✅ **Logo** - Header logo
2. ✅ **Button** - "Unlock Detailed Report" CTA
3. ✅ **Card** - Already used in PropertyCard
4. ✅ **Label** - Section titles
5. ✅ **ValueDisplay** - Can be integrated into PropertyCard for value display

### New Dependencies:
- None required (all modifications to existing components)

---

## Implementation Notes

### PropertyCard Modification Strategy:

1. **Add conditional rendering:**
   ```typescript
   {showValue && value ? (
     <ValueDisplay value={value} size="large" />
   ) : (
     <Address>{address}</Address>
   )}
   ```

2. **Update badge styling:**
   - Change background color to light beige/tan
   - Add dark gray border
   - Ensure circular shape
   - Adjust size to match image proportions

3. **Maintain backward compatibility:**
   - All existing props should remain optional
   - Default behavior should match current implementation
   - New props should be additive, not breaking

4. **Responsive considerations:**
   - Grid layout: 3 columns on desktop, 1 column on mobile
   - Card spacing: Consistent gap between cards
   - Image aspect ratio: Maintain 16:9 or appropriate ratio

---

## Testing Checklist

### PropertyCard Modifications:
- [ ] Value display shows correctly when `value` and `showValue` are provided
- [ ] Address displays correctly when `value` is not provided
- [ ] Score badge has correct styling (light beige/tan, dark gray border)
- [ ] Badge is circular and properly positioned
- [ ] Card layout maintains consistency across variations
- [ ] Responsive behavior works on mobile
- [ ] Backward compatibility maintained (existing usage still works)

### Page Integration:
- [ ] Grid layout displays 3 cards correctly
- [ ] Primary card shows value instead of address
- [ ] Secondary cards show addresses
- [ ] All cards have consistent styling
- [ ] CTA button is properly styled and positioned
- [ ] Footer text displays correctly

---

## Design Tokens Reference

### Colors:
- **Primary Green**: #1a3d2e
- **Dark Gray**: #111827
- **Medium Gray**: #4b5563
- **Light Gray**: #6b7280
- **Border Gray**: #e5e7eb
- **Badge Background**: #f5f5dc (light beige/tan - approximate)
- **Badge Border**: #4b5563 (dark gray)

### Typography:
- **Page Title**: Large, bold, dark green
- **Value Display**: Large, bold, dark gray
- **Address**: Medium weight, dark gray
- **Details**: Small, gray
- **Labels**: Small, uppercase, gray

### Spacing:
- **Card Gap**: 16px-24px (grid gap)
- **Card Padding**: 16px
- **Section Spacing**: 32px-48px

