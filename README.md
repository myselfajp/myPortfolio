# Portfolio Project

A Next.js portfolio project with TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

This project follows the shadcn/ui project structure:

- **Components**: `/components/ui` - All shadcn/ui components are stored here
- **Styles**: `/app/globals.css` - Global Tailwind CSS styles and CSS variables
- **Utilities**: `/lib/utils.ts` - Utility functions including the `cn` helper for className merging

## Why `/components/ui` Directory?

The `/components/ui` directory is the standard location for shadcn/ui components. This structure:

1. **Consistency**: Follows shadcn/ui conventions, making it easy to add more components using `npx shadcn@latest add [component]`
2. **Organization**: Separates UI components from feature-specific components
3. **Maintainability**: Makes it easier to find and manage reusable UI components
4. **Compatibility**: Works seamlessly with shadcn CLI tools

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Configuration

### TypeScript

The project is configured with TypeScript. Configuration is in `tsconfig.json` with path aliases set up for `@/*` imports.

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.ts` with:
- Custom color variables for dark mode support
- Animation utilities for spotlight effects
- shadcn/ui theme configuration

### shadcn/ui

The project uses shadcn/ui components. Configuration is in `components.json`. To add more components:

```bash
npx shadcn@latest add [component-name]
```

## Installed Components

- **SplineScene** (`components/ui/splite.tsx`): A wrapper component for Spline 3D scenes with lazy loading
- **SplineSceneBasic** (`components/ui/demo.tsx`): Demo component showcasing the Spline integration
- **Spotlight** (`components/ui/spotlight.tsx`): Aceternity-style spotlight effect component
- **Card** (`components/ui/card.tsx`): shadcn/ui Card component

## Dependencies

### Main Dependencies
- `next`: Next.js framework
- `react` & `react-dom`: React library
- `@splinetool/runtime` & `@splinetool/react-spline`: Spline 3D integration
- `framer-motion`: Animation library (for alternative spotlight component)
- `clsx` & `tailwind-merge`: Utility libraries for className management

### Dev Dependencies
- `typescript`: TypeScript compiler
- `tailwindcss`: Tailwind CSS framework
- `tailwindcss-animate`: Tailwind animation plugin
- `autoprefixer` & `postcss`: CSS processing

## Usage

The demo component is integrated into the main page at `app/page.tsx`. You can import and use the components anywhere in your app:

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
```

## Notes

- The Spline component uses lazy loading for better performance
- The spotlight animation is configured in `tailwind.config.ts` and `app/globals.css`
- All components are client components (marked with `'use client'`) as required by Next.js App Router

