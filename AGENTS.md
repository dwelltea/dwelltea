# AGENTS.md - Dwelltea

## Project Overview

Dwelltea is a modern real estate platform providing property valuations, AI-powered insights, and neighborhood intelligence. The platform features a warm, welcoming aesthetic with a focus on property search and community connections.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| UI | MUI v7, styled-components, Lucide React icons |
| Backend | Express, Node.js, TypeScript |
| Database | MongoDB with Mongoose |
| Testing | Jest (backend) |

## Directory Structure

```
dwelltea/
├── client/              # Next.js frontend application
│   └── src/
│       ├── app/         # App Router pages & layouts
│       └── ui-kit/      # Reusable UI components
├── web-server/          # Express API server
│   └── src/
│       └── server/      # Server entry point & routes
├── design/              # Design system & specifications
│   └── ui-design-library/  # Color palette, typography, component specs
└── ai-enabler/          # AI integration (reserved)
```

## Development Commands

**Frontend (`client/`):**
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Backend (`web-server/`):**
```bash
npm run dev      # Start with nodemon + ts-node
npm run build    # Compile TypeScript
npm run start    # Run compiled server
npm run seed     # Seed database
npm run test     # Run Jest tests
```

## Coding Conventions

### Frontend
- Use App Router conventions (server components by default)
- Prefer server actions over API routes
- No class components
- Avoid client components unless necessary
- Keep components under ~300 lines
- Use MUI components and styled-components for styling
- Components must be accessible (ARIA when needed)

### Backend
- Prefer clear domain logic over framework magic
- Validate inputs at boundaries (Joi)
- Handle errors explicitly; no silent failures
- Avoid tight coupling between services
- MongoDB schemas must be explicit and documented
- Add `console.log` logs for server-side code

### API & Data
- APIs must be versionable and backward-safe
- Avoid breaking changes
- Be explicit about contracts and return shapes
- Prefer pagination and limits by default

### General
- No unrelated file changes
- No unused exports or dead code
- Prefer named exports
- Add tests for non-trivial logic

## Design System

**Color Palette:**
| Color | Hex | Usage |
|-------|-----|-------|
| Cream/Off-White | `#F5EFE7` | Primary background |
| Dark Teal | `#1B4D3E` | Headlines, buttons, primary actions |
| Warm Brown | `#A67C52` | Icon accents, secondary elements |
| Black | `#000000` | Body text, navigation |
| Light Beige | `#F9F6F1` | Card backgrounds, hover states |

**Typography:** Geist/Inter sans-serif family
- H1: 56px Bold (hero headlines)
- H2: 18px Regular (subheadings)
- Body: 16px Regular
- Card titles: 18px Bold

Full design specs: `design/ui-design-library/DESIGN_SPECS.md`

## Testing

- **Backend**: Jest for unit and integration tests
- **Frontend**: Unit test critical logic
- Every positive assertion should be paired with a corresponding negative assertion
- Don't use specific values when describing tests; explain the general goal
- Test edge cases, failure paths, and invalid inputs

## AI Agent Guidelines

1. **Read before writing**: Understand existing code patterns and conventions before making changes
2. **Small, focused changes**: Keep modifications scoped and purposeful
3. **Verify your work**: Run lint, typecheck, and relevant tests after changes
4. **Ask when uncertain**: Clarify ambiguous requirements rather than making assumptions
5. **Follow existing patterns**: Match code style, naming conventions, and architecture of surrounding code
6. **No secrets**: Never commit credentials, API keys, or sensitive data
