# Bhojanwala

Bhojanwala, a food ordering brand. It has a home page, About and Contact pages, and one page each for Biryani & Rolls, Indian Cuisines and Desserts.

## Pages

Every page has a small HTML file in the root that loads its own entry file from `src/entries/`.

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
- Tailwind CSS 4
- shadcn/ui (new-york style) on Radix UI
- lucide-react for icons (the social icons are inline SVGs in `src/components/icons/social-icon.tsx`, since lucide has no brand icons)
- Montserrat, self-hosted through Fontsource
- ESLint with `typescript-eslint`

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173). Each page lives at its file name, e.g. `/about.html`.

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
├── _unused/              Files nothing references (see To do)
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

- Colours, radius, shadows and the type scale are CSS variables in `src/index.css`. Use the token classes (`bg-primary`, `text-muted-foreground`) instead of hard-coded colours. `/design-system.html` shows them all.
- The brand name is plain text (`SiteWordmark`, Montserrat extra-bold), not an image.
- The footer is dark in both themes. Its links and social icons come from `src/data/site.ts`.
- Dark mode is class-based (`.dark` on `<html>`). The choice is saved in `localStorage` as `bhojanwala-theme`, defaults to the system setting, and is applied by a small script in each HTML file before the page paints, so there's no flash.
- Animations are CSS-only and switch off when the user prefers reduced motion.

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

## To do

- The social links in the footer still point to `#`.
- So do the "Order Now" buttons on the three listing pages.
- The hero video is about 14 MB and has no poster image, and several images are bigger than they need to be.
- `_unused/` has files nothing references (`naan.cms`, which is really a WebP image, plus `ab.jpg`, `bhojan.jpg`, `dal.jpg`, `des.jpg` and `pexels-s-migaj-746386.jpg`). Delete the folder if you don't need them.
- No meta description or favicon yet.
- `npm run lint` shows 2 `react-refresh/only-export-components` warnings (`button.tsx`, `badge.tsx`). They come with the shadcn/ui components and are fine.
