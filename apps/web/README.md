# AuroraStream Web

AuroraStream Web is a Next.js 13 application implemented with the App Router and Tailwind CSS. It showcases the design
language and information architecture for the HD video platform.

## Getting Started

```bash
npm install
npm run dev:web
```

The site will be available on `http://localhost:3000`.

## Scripts
- `npm run dev:web` – start the development server through Turborepo
- `npm run build --workspace web` – build the production bundle
- `npm run lint --workspace web` – run ESLint checks

## Directory Layout
- `app/` – App Router routes, layouts, and shared UI primitives
- `public/` – Static assets (favicons, manifests)
- `styles/` – Tailwind or global CSS overrides

## Next Steps
- Integrate design tokens from a shared `packages/ui` library
- Add Storybook for component-driven development
- Wire player and chat components to real services once available
