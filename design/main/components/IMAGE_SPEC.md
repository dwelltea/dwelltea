# Dwelltea Image Specifications

## Overview
This document catalogs all images used in the Dwelltea application, their purposes, technical specifications, and usage guidelines.

---

## IMAGE CATEGORIES

1. **Hero Images** - Lifestyle photography
2. **Property Images** - Real estate photography
3. **Comparable Property Images** - Thumbnail real estate photos
4. **Background Images** - Decorative or contextual backgrounds

---

## 1. HERO LIFESTYLE IMAGES

### Purpose
Create emotional connection with users by showing relatable, aspirational people in the context of home ownership and community.

### Image 1: Community Insights Hero
- **Location**: Community Insights page, right side of AI Insight card
- **Subject**: Couple (outdoor setting)
- **Style**: Warm, natural lighting, outdoor/park setting
- **Emotion**: Happy, connected, confident
- **Composition**: Two people, close portrait, smiling at camera
- **Color Palette**: Earth tones (greens, browns, naturals)

**Technical Specs**
- **Aspect Ratio**: ~4:3 or 5:4
- **Dimensions**: 290px × 220px (display)
- **Source Resolution**: Minimum 580px × 440px (@2x)
- **Format**: JPG or WebP
- **Optimization**: 80-85% quality
- **File Size**: < 100KB
- **Border Radius**: 12px
- **Object Fit**: cover
- **Object Position**: center

**Implementation**
```tsx
<img 
  src="figma:asset/79041125617d1bc41146ee8a73b0736a9170d127.png"
  alt="Happy couple in outdoor setting representing community connection"
  className="hero-image"
  width={290}
  height={220}
/>
```

### Image 2: Homepage Hero
- **Location**: Homepage, right side of hero section
- **Subject**: Couple (indoor setting)
- **Style**: Warm, natural lighting, home interior
- **Emotion**: Happy, trusting, welcoming
- **Composition**: Two people, close portrait, smiling
- **Color Palette**: Warm neutrals (tans, beiges, golds)

**Technical Specs**
- **Aspect Ratio**: ~4:3
- **Dimensions**: 370px × 360px (display)
- **Source Resolution**: Minimum 740px × 720px (@2x)
- **Format**: JPG or WebP
- **Optimization**: 80-85% quality
- **File Size**: < 150KB
- **Border Radius**: 16px
- **Object Fit**: cover
- **Object Position**: center

**Implementation**
```tsx
<img 
  src="figma:asset/4ca744cccf0efa217cae460be07c4c8f3a7c932f.png"
  alt="Welcoming couple in home setting"
  className="hero-image-large"
  width={370}
  height={360}
/>
```

### Photography Guidelines for Hero Images

**Subject**
- Diverse, relatable people
- Ages 25-45 (primary demographic)
- Casual, approachable styling
- Genuine smiles and expressions
- 1-2 people maximum per image

**Setting**
- Clean, uncluttered backgrounds
- Natural environments or modern homes
- Good depth of field (slight background blur)
- Aspirational but realistic

**Lighting**
- Natural or natural-looking light
- Warm color temperature
- Soft shadows
- Avoid harsh flash or overhead lighting

**Mood**
- Positive and optimistic
- Confident but approachable
- Connected and community-focused
- Professional but friendly

**Technical**
- High resolution (minimum 2x display size)
- Sharp focus on subjects
- Professional photography or high-quality stock
- Consistent style across all hero images

---

## 2. PROPERTY IMAGES

### Main Property Photo

**Purpose**
Display the subject property for which the user is viewing detailed information.

**Location**: Property Breakdown page, top right beside address

**Technical Specs**
- **Aspect Ratio**: 16:9
- **Dimensions**: 295px × 165px (display)
- **Source Resolution**: Minimum 590px × 330px (@2x)
- **Format**: JPG or WebP
- **Optimization**: 85% quality
- **File Size**: < 120KB
- **Border Radius**: 12px
- **Object Fit**: cover

**Photography Style**
- Professional real estate exterior photography
- Daytime, well-lit
- Full front view or attractive angle
- Clear view of main features
- Blue sky preferred
- Well-maintained property
- No cars or distractions in foreground

**Implementation**
```tsx
<img 
  src="figma:asset/67b5a5f3564b3885fbce7a538ee48b439b4e88c7.png"
  alt="3927 Maple Ave - Property exterior"
  className="property-image"
  width={295}
  height={165}
/>
```

---

## 3. COMPARABLE PROPERTY IMAGES

### Purpose
Show similar properties for comparison, helping users understand market context and valuation.

### Thumbnail Specifications

**Technical Specs**
- **Aspect Ratio**: 16:9
- **Dimensions**: 185px × 104px (display, within card)
- **Source Resolution**: Minimum 370px × 208px (@2x)
- **Format**: JPG or WebP
- **Optimization**: 80% quality
- **File Size**: < 60KB each
- **Border Radius**: 8px (top corners only)
- **Object Fit**: cover

**Photography Style**
- Same as main property photo
- Consistent lighting and style
- Exterior shots
- Professional quality
- Clear view of property features

**Quantity**
- Multiple properties shown (typically 3-6)
- All should be similar architectural style
- Geographic proximity implied

**Card Layout**
```
┌─────────────────┐
│   [Image]       │ ← 185px × 104px
├─────────────────┤
│ Similarity Score│
│ 472 Cedar Ln    │
│ 4 bd, 3a        │
│ 2013         88 │
└─────────────────┘
```

**Implementation**
```tsx
{comparableProperties.map((property) => (
  <div key={property.id} className="comparable-card">
    <img 
      src={property.imageUrl}
      alt={`${property.address} - Comparable property`}
      className="comparable-image"
      width={185}
      height={104}
    />
    {/* Property details */}
  </div>
))}
```

---

## 4. IMAGE SOURCING STRATEGY

### Preferred Sources

**Lifestyle Photography**
- Professional photography (preferred)
- High-quality stock: Unsplash, Pexels (free)
- Licensed stock: Adobe Stock, Getty Images, Shutterstock (paid)

**Property Photography**
- Real MLS listings (if available)
- Professional real estate photography services
- Stock real estate images (as placeholder)

### Stock Photo Search Terms

**For Hero Images:**
- "happy couple home"
- "diverse couple smiling"
- "young professionals portrait"
- "homeowners happy"
- "couple natural outdoor"
- "real estate clients happy"

**For Property Images:**
- "suburban house exterior"
- "modern home exterior daytime"
- "residential property front view"
- "family home exterior"
- "craftsman house"
- "colonial house exterior"

---

## 5. RESPONSIVE IMAGE STRATEGY

### Responsive Sizes
Serve different image sizes based on viewport and pixel density.

**Hero Images**
```html
<img 
  src="hero-image-medium.jpg"
  srcset="
    hero-image-small.jpg 480w,
    hero-image-medium.jpg 800w,
    hero-image-large.jpg 1200w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    40vw
  "
  alt="..."
/>
```

**Property Thumbnails**
```html
<img 
  src="property-thumb.jpg"
  srcset="
    property-thumb.jpg 1x,
    property-thumb@2x.jpg 2x
  "
  alt="..."
/>
```

### WebP with Fallback
```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="..." />
</picture>
```

---

## 6. LAZY LOADING

### Strategy
Load images as they approach viewport to improve initial page load.

**Implementation**
```tsx
<img 
  src="image.jpg"
  alt="..."
  loading="lazy"
  decoding="async"
/>
```

**Priority Images** (Don't Lazy Load)
- Hero images above fold
- Logo
- Main property image on detail page

**Lazy Load**
- Comparable property images
- Images below fold
- Gallery images

---

## 7. ACCESSIBILITY

### Alt Text Guidelines

**Hero Images**
- Describe what's shown and the emotion/purpose
- Example: "Happy couple smiling outdoors, representing community connection"
- Keep under 125 characters

**Property Images**
- Include address and description
- Example: "3927 Maple Ave - Two-story craftsman style home with front porch"

**Decorative Images**
- Use empty alt: `alt=""`
- Only if image is purely decorative and adds no information

### Other Accessibility Considerations
- Don't rely on images alone to convey information
- Ensure sufficient contrast for text overlays
- Provide text alternatives for all image-based content

---

## 8. PERFORMANCE OPTIMIZATION

### File Size Targets
- **Hero images**: < 150KB
- **Main property photo**: < 120KB
- **Comparable thumbnails**: < 60KB each
- **Total page weight**: < 2MB including all images

### Optimization Techniques
1. **Compression**: 80-85% JPEG quality, WebP when supported
2. **Resize**: Generate exact sizes needed, not larger
3. **Format**: WebP for modern browsers, JPEG fallback
4. **Lazy Loading**: Load off-screen images on demand
5. **CDN**: Serve from CDN for faster delivery
6. **Caching**: Set long cache headers (1 year for immutable images)

### Tools
- ImageOptim, TinyPNG (compression)
- Sharp, ImageMagick (resizing/format conversion)
- Cloudflare, Cloudinary, Imgix (CDN + transforms)

---

## 9. IMAGE PROCESSING PIPELINE

### Upload Flow
1. User/admin uploads original high-res image
2. Server validates file type and size
3. Generate multiple sizes:
   - Thumbnail: 300px wide
   - Small: 600px wide
   - Medium: 1000px wide
   - Large: 1600px wide
4. Create WebP versions of each size
5. Upload to CDN/storage
6. Store URLs in database
7. Serve appropriate size based on context

### Naming Convention
```
property-{id}-{size}.{ext}
property-123-thumb.jpg
property-123-thumb.webp
property-123-medium.jpg
property-123-medium.webp

hero-{name}-{size}.{ext}
hero-couple-outdoor-large.jpg
hero-couple-outdoor-large.webp
```

---

## 10. CONTENT GUIDELINES

### Do's
✓ Use professional, high-quality images
✓ Maintain consistent lighting and style
✓ Show diverse, relatable people in hero shots
✓ Use authentic, not overly staged photos
✓ Ensure images support the content context
✓ Optimize for fast loading
✓ Provide descriptive alt text

### Don'ts
✗ Use obviously stock or cheesy photos
✗ Show luxury properties that alienate average buyers
✗ Use images with watermarks or branding
✗ Include recognizable people without model releases
✗ Use low-resolution or blurry images
✗ Overuse filters or heavy editing
✗ Display properties with visible flaws

---

## 11. IMAGE INVENTORY

### Current Images in App

| Image | Location | Type | Purpose | Alt Text |
|-------|----------|------|---------|----------|
| Couple Outdoor | Community Insights | Hero | Emotional connection | "Happy couple outdoors representing community" |
| Couple Indoor | Homepage | Hero | Emotional connection | "Welcoming couple in home setting" |
| Main Property | Property Detail | Property | Subject property display | "3927 Maple Ave - Property exterior" |
| Comparable 1 | Property Detail | Thumbnail | Comparison property | "950000 - Comparable property" |
| Comparable 2 | Property Detail | Thumbnail | Comparison property | "472 Cedar Ln - Comparable property" |
| Comparable 3 | Property Detail | Thumbnail | Comparison property | "483 Pine St - Comparable property" |

---

## 12. FUTURE IMAGE NEEDS

### Potential Additional Images
- Property interior photos
- Neighborhood/community photos
- Amenity photos (schools, parks, shops)
- Team/agent photos
- Testimonial photos
- Blog post featured images
- Default/placeholder images
- Error state images
- Empty state illustrations

### Image Placeholders
Use when real images unavailable:
- Blurhash or LQIP (Low Quality Image Placeholder)
- Solid color matching brand palette
- SVG placeholder with icon
- Loading skeleton

---

## 13. IMPLEMENTATION CHECKLIST

- [ ] Source high-quality hero images
- [ ] Source property photography
- [ ] Create image processing pipeline
- [ ] Generate responsive image sizes
- [ ] Implement lazy loading
- [ ] Add descriptive alt text
- [ ] Optimize all images (WebP + JPEG)
- [ ] Set up CDN for image delivery
- [ ] Configure caching headers
- [ ] Test on various devices and connections
- [ ] Monitor Core Web Vitals (LCP for images)

---

## SUMMARY

The Dwelltea image strategy focuses on:
- **Professional quality** across all images
- **Emotional connection** through lifestyle photography
- **Consistent style** with warm, natural tones
- **Optimized performance** with compression and lazy loading
- **Accessibility** with descriptive alt text
- **Responsive delivery** for all devices and screen densities

This creates a visually appealing, fast-loading application that connects with users while showcasing real estate effectively.
