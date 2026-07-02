# Velvet — Premium Adult Entertainment Platform

A modern, premium adult entertainment platform built with Next.js 14, TypeScript, and Tailwind CSS. Features a polished dark design system with gradient accents, video grid, categories, and premium subscription tiers.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css        # Design tokens, theme, animations
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   └── page.tsx           # Home page composition
├── components/
│   ├── sections/          # Page sections (hero, trending, categories, etc.)
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── trending.tsx
│   │   ├── categories.tsx
│   │   ├── new-releases.tsx
│   │   ├── premium-cta.tsx
│   │   ├── video-card.tsx
│   │   └── footer.tsx
│   └── ui/                # Reusable UI primitives
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
└── lib/
    └── utils.ts           # cn() utility
```

## Design System

- **Dark theme** with custom HSL tokens
- **Accent:** Purple-to-pink gradient (`#8B5CF6` → `#D946EF`)
- **Components:** Rounded-lg, glow effects, glassmorphism
- **Typography:** Inter font, generous spacing

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Goatkenziee/velvet-premium)

---

**18+ Only** — This project contains age-restricted material.
