# Black Potion Sedona

Production-ready React + Vite application for Black Potion Sedona, prepared for deployment to GitHub Pages and custom domain `blackpotionsedona.com`.

## Overview
This repository contains a TypeScript + React SPA using Tailwind CSS and shadcn UI components. Routing leverages `HashRouter` for GitHub Pages compatibility. Email contact uses EmailJS (keys preserved exactly as provided in source).

## Tech Stack
- React 18 + TypeScript
- Vite (SWC React plugin)
- Tailwind CSS + shadcn/ui components
- Framer Motion (animations)
- React Query (data layer)
- EmailJS (contact form)

## Local Development
```sh
git clone https://github.com/blackpotionsedona/new.git
cd new
npm install
npm run dev
```
Open http://localhost:8080 (or the port Vite reports) to view the app.

## Scripts
- `npm run dev` – Start development server
- `npm run build` – Production build (outputs to `dist/`)
- `npm run preview` – Preview production build locally
- `npm run deploy` – Deploy `dist/` to `gh-pages` branch

## Deployment
The site is configured with `base: "/new/"` and `homepage` for GitHub Pages. After building:
```sh
npm run deploy
```
GitHub Pages will serve at: https://blackpotionsedona.github.io/new/

Custom domain `blackpotionsedona.com` is mapped via `public/CNAME`.

## EmailJS
EmailJS integration lives in `src/pages/ContactForm.tsx`. Keys are intentionally hard-coded per project requirements and must not be altered. The form performs validation, sends the message, and provides user feedback via toast notifications.

## Accessibility & Performance
Semantic HTML, labeled form controls, focus styles, and lightweight animations are preserved. Further optimizations (code splitting, image compression) can be added as needed.

## License
Internal/private usage for Black Potion Sedona. All rights reserved.

