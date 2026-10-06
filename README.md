# Bhojanwala

Website for Bhojanwala, a food-ordering brand offering Biryani & Rolls, Indian Cuisines and Desserts.

Built with React and Tailwind CSS and served and built by Vite (multi-page build).

## Pages

Each page is a small HTML shell (theme script, `<div id="root">`, module script) that loads its own React entry.

| Page                    | HTML shell           | Entry                           | Page component                |
| ----------------------- | -------------------- | ------------------------------- | ----------------------------- |
| Home                    | `index.html`         | `src/entries/home.tsx`          | `src/pages/home.tsx`          |
| About Us                | `about.html`         | `src/entries/about.tsx`         | `src/pages/about.tsx`         |
| Contact Us              | `contactus.html`     | `src/entries/contact.tsx`       | `src/pages/contact.tsx`       |
| Biryani & Rolls         | `item1.html`         | `src/entries/item1.tsx`         | `src/pages/item1.tsx`         |
| Indian Cuisines         | `item2.html`         | `src/entries/item2.tsx`         | `src/pages/item2.tsx`         |
| Desserts                | `item3.html`         | `src/entries/item3.tsx`         | `src/pages/item3.tsx`         |
| Design system reference | `design-system.html` | `src/entries/design-system.tsx` | `src/pages/design-system.tsx` |

## Tech stack

- Vite 8, React 19, TypeScript 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- shadcn/ui (new-york style) on Radix UI
- lucide-react icons (social icons are inline SVGs in `src/components/icons/social-icon.tsx`)
- Montserrat Variable, self-hosted through Fontsource
- ESLint with `typescript-eslint`

## Getting started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173). Pages are available at their file names, for example `/about.html`.

| Command           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start the development server                                   |
| `npm run build`   | Type-check (`tsc -b`) and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally                             |
| `npm run lint`    | Run ESLint                                                     |

## Project structure

```
.
├── *.html                HTML shells, one per page (Vite multi-page inputs)
├── _unused/              Files nothing references (see Open items)
├── vite.config.ts        Multi-page inputs and the "@" alias (points to src/)
└── src/
    ├── index.css         Design tokens and base styles
    ├── assets/
    │   ├── images/       Images, one folder per page (home, about, contact, biryani, indian, desserts)
    │   └── video/        Home hero video
    ├── entries/          Mount point for each page
    ├── pages/            Page components
    ├── features/         Page-specific components (home, about, contact, listings)
    ├── components/
    │   ├── layout/       PageShell, SiteHeader, SiteNav, MobileNav, SiteFooter,
    │   │                 SiteWordmark, Container, PageBreadcrumbs, ThemeToggle
    │   ├── icons/        SocialIcon
    │   └── ui/           shadcn/ui primitives
    ├── data/             Site and page content
    ├── hooks/            useTheme, useIsActiveHref
    └── lib/utils.ts      `cn` class-name helper
```

## Design

- Tokens live in `src/index.css` (oklch CSS variables exposed through `@theme inline`): colours, radius, shadows, type scale. Use token utilities such as `bg-primary` or `text-muted-foreground` rather than hard-coded colours. See `/design-system.html`.
- The brand name is set as text (`SiteWordmark`, Montserrat extra-bold) in the header and footer.
- The footer is a dark surface in both themes: wordmark, links, copyright and social icons, all from `src/data/site.ts`.
- Dark mode is class-based (`.dark` on `<html>`). The choice is stored in `localStorage` under `bhojanwala-theme`, falls back to the system preference, and is applied before first paint by a script in each HTML shell.
- Motion is CSS-only and disabled under `prefers-reduced-motion: reduce`.

## Editing content

- Navigation, footer and social links: `src/data/site.ts`
- Home: `src/data/home.ts`
- About, Contact and listing pages: `src/data/about.ts`, `contact.ts`, `item1.ts`, `item2.ts`, `item3.ts`
- Colours, radius, shadows, fonts: `src/index.css`

## Adding a page

1. Create the page component in `src/pages/` and wrap it in `PageShell`.
2. Create a mount file in `src/entries/` (like `about.tsx`) that imports `@/index.css` and renders the page.
3. Copy an existing HTML shell, change the title, and point its module script to the new mount file.
4. List the page in `build.rollupOptions.input` in `vite.config.ts`.

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

The CLI currently writes `import { cn } from "cn"` and adds a `cn` package. After each add:

```bash
sed -i '' 's#from "cn"#from "@/lib/utils"#' src/components/ui/*.tsx   # macOS; use `sed -i` on Linux
npm rm cn
```

## Open items

- Social links point to `#` until real destinations are provided.
- "Order Now" links on the three listing pages point to `#`.
- The hero video is about 14 MB and has no poster image. Several images are much larger than their displayed size.
- `_unused/` holds files nothing references: `naan.cms` (a WebP image), `ab.jpg`, `bhojan.jpg`, `dal.jpg`, `des.jpg`, `pexels-s-migaj-746386.jpg`. Delete the folder if they are not needed.
- No meta description or favicon.
- `npm run lint` reports 2 expected `react-refresh/only-export-components` warnings (`button.tsx`, `badge.tsx`).
