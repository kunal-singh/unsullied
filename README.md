# unsullied

A minimal React component library I use as a personal base. No runtime dependencies. Not trying to be a design system — just clean, typed components I can use in my greenfield projects. Inspired by [Kailash Nadh's Oat Library](https://github.com/knadh/oat)

## Stack

- React 19 (peer dependency)
- TypeScript
- Vite in library mode
- CSS Modules per component, shared `global.css` for design tokens
- Storybook for development and docs
- Vitest + Playwright for tests

## Install

```bash
npm install @kunal-singh/unsullied
```

React 19 is a peer dependency — install it separately if you haven't already.

## Usage

```tsx
import { Button } from "@kunal-singh/unsullied";
import "@kunal-singh/unsullied/styles";
```

## Scripts

```bash
pnpm build            # build library to dist/
pnpm storybook        # start Storybook on port 6006
pnpm build-storybook  # build Storybook as static output
pnpm lint             # ESLint
pnpm format           # Prettier
```
