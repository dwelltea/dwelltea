# Dwelltea Logo Specifications

## Logo Overview
The Dwelltea brand identity centers around a distinctive house icon paired with custom typography that conveys trust, stability, and modern real estate technology.

---

## 1. PRIMARY LOGO

### Composition
- **Icon**: Stylized house symbol
- **Wordmark**: "Dwelltea" custom typeface
- **Layout**: Icon left, wordmark right (horizontal lockup)

### Icon Details
- **Shape**: Simple house outline with pitched roof
- **Style**: Minimalist, geometric
- **Elements**: 
  - Triangular roof
  - Rectangular base
  - May include door detail
- **Stroke Weight**: Medium (consistent throughout)
- **Fill**: Solid dark green

### Wordmark Details
- **Typeface**: Sans-serif (possibly custom or modified)
- **Case**: Title case - "Dwelltea"
- **Weight**: Bold (700)
- **Kerning**: Slightly tight
- **Distinctive Features**: 
  - Modern, clean letterforms
  - Slightly condensed proportions

### Color
- **Primary Color**: Dark green #1a3d2e (approximate)
  - Use for standard light backgrounds
- **Reverse Color**: White #ffffff
  - Use for dark backgrounds or photos
- **Monochrome**: Black #000000
  - Use when color is not available

### Spacing
- **Icon-to-wordmark gap**: ~8-12px
- **Clear space**: Minimum 50% of icon height around entire logo
- **Vertical alignment**: Icon and wordmark centered on shared baseline

---

## 2. LOGO VARIATIONS

### Horizontal Logo (Primary)
- **Usage**: Main navigation, headers, default
- **Minimum Width**: 120px
- **Recommended Width**: 160-200px

### Icon Only (Secondary)
- **Usage**: Favicon, app icon, small spaces, social media profile
- **Minimum Size**: 24×24px
- **Recommended Size**: 32×32px or 48×48px

### Stacked Logo (Alternative)
- **Usage**: Vertical layouts, square formats
- **Layout**: Icon centered above wordmark
- **Minimum Width**: 100px

---

## 3. USAGE GUIDELINES

### DO:
✓ Maintain aspect ratio at all times
✓ Preserve minimum clear space
✓ Use approved color variations
✓ Ensure logo is clearly visible against background
✓ Use high-resolution files for all applications
✓ Center align logo in navigation header

### DON'T:
✗ Stretch, skew, or distort the logo
✗ Rotate the logo
✗ Change the colors outside approved palette
✗ Add effects (shadows, gradients, outlines)
✗ Separate icon from wordmark in primary usage
✗ Place on busy backgrounds without proper contrast
✗ Recreate or modify the logo

---

## 4. MINIMUM SIZES

### Digital Applications
- **Website Header**: 140px width minimum
- **Mobile Header**: 120px width minimum
- **Email**: 160px width recommended
- **Favicon**: 32×32px (icon only)

### Print Applications
- **Business Cards**: 1.5" width minimum
- **Letterhead**: 2" width recommended
- **Signage**: Scale appropriately while maintaining proportions

---

## 5. COLOR SPECIFICATIONS

### Primary Green
- **HEX**: #1a3d2e (approximate - adjust to exact brand color)
- **RGB**: rgb(26, 61, 46)
- **CMYK**: c:76 m:39 y:60 k:66 (approximate)
- **Pantone**: 3305 C (approximate match)

### White (Reverse)
- **HEX**: #ffffff
- **RGB**: rgb(255, 255, 255)
- **CMYK**: c:0 m:0 y:0 k:0

### Black (Monochrome)
- **HEX**: #000000
- **RGB**: rgb(0, 0, 0)
- **CMYK**: c:0 m:0 y:0 k:100

---

## 6. FILE FORMATS & DELIVERY

### Required Formats
- **SVG**: Scalable vector - primary web use
- **PNG**: Transparent background - web and presentations
  - @1x, @2x, @3x resolutions
- **AI/EPS**: Vector source files - print production
- **PDF**: Vector PDF - universal compatibility

### File Naming Convention
- `Dwelltea-logo-horizontal-green.svg`
- `Dwelltea-logo-horizontal-white.svg`
- `Dwelltea-logo-icon-green.svg`
- `Dwelltea-icon-32x32.png`
- `Dwelltea-icon-48x48.png`

---

## 7. BACKGROUND USAGE

### Light Backgrounds
- Use **primary green** logo
- Ensure sufficient contrast (4.5:1 minimum)
- Works on: white, cream (#faf8f3), light gray

### Dark Backgrounds
- Use **white reverse** logo
- Ensure sufficient contrast
- Works on: dark green, dark gray, black, dark photos

### Photographic Backgrounds
- Add subtle background shape/overlay for legibility
- Use white logo on dark photos
- Use dark green logo on light photos
- Ensure logo is always clearly readable

---

## 8. DIGITAL IMPLEMENTATION

### HTML/React Component Structure
```jsx
<div className="logo">
  <svg className="logo-icon">
    {/* House icon SVG */}
  </svg>
  <span className="logo-wordmark">Dwelltea</span>
</div>
```

### Recommended CSS
```css
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
}

.logo-wordmark {
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.02em;
}
```

---

## 9. ACCESSIBILITY

- Logo must meet WCAG AA contrast requirements (4.5:1 for text)
- Provide alt text: "Dwelltea - Real Estate Insights"
- Ensure logo is keyboard accessible when used as link
- Maintain minimum touch target size (44×44px) for mobile

---

## 10. BRAND CONSISTENCY

The logo should appear consistently across:
- Website header (all pages)
- Email communications
- Marketing materials
- Social media profiles
- Mobile app
- Print collateral
- Presentations
- Document templates

### Position
- **Web**: Top left corner of navigation
- **Print**: Top left or center based on layout
- **Social**: Profile image (icon only) and cover images (full logo)

---

## IMPLEMENTATION CHECKLIST

- [ ] SVG logo files created and optimized
- [ ] PNG exports at multiple resolutions
- [ ] Favicon generated (16×16, 32×32, 180×180)
- [ ] Logo component created in React
- [ ] CSS styling defined
- [ ] Dark mode variant tested
- [ ] Responsive behavior verified
- [ ] Accessibility attributes added
- [ ] Brand guidelines distributed to team
