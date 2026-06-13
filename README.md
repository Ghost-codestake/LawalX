# Nebufy — Software Development Agency

A premium, multi-page software agency website built with a production-grade
React architecture.

## Tech stack

- **React 18** + **Vite**
- **React Router DOM v6** (route-based code splitting via `React.lazy`)
- **Tailwind CSS** (custom brand design tokens, no blue)
- **Framer Motion** (reusable variants in `src/utils/animations.js`)
- **Lucide React** icons
- **Context API** theme management with `localStorage` persistence

Primary brand color: `#68e5e0` (defined as `brand-400` in `tailwind.config.js`).

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
```

> Requires Node 18+.

## Routes

| Path             | Page            |
| ---------------- | --------------- |
| `/`              | Home            |
| `/about`         | About           |
| `/services`      | Services        |
| `/projects`      | Projects        |
| `/projects/:id`  | Project Details |
| `/team`          | Team            |
| `/careers`       | Careers         |
| `/contact`       | Contact         |
| `*`              | 404 Not Found   |

## Architecture

```
src/
├── assets/          # images, icons, fonts
├── components/
│   ├── common/      # Button, Container, SectionHeading, ThemeToggle, etc.
│   ├── layout/      # Navbar, Footer, MobileMenu, MainLayout
│   ├── home/        # Hero, ServicesPreview, ProjectsPreview, Testimonials, CTA...
│   ├── services/    # ServiceCard, TechStack
│   ├── projects/    # ProjectCard, ProjectFilter, ProjectGrid
│   ├── team/        # TeamCard, TeamGrid
│   ├── about/       # ValuesGrid, StatsBand
│   └── contact/     # ContactForm, ContactInfo, FAQ
├── context/         # ThemeContext (light/dark + persistence)
├── data/            # services, projects, team, testimonials
├── hooks/           # useTheme, useScrollAnimation, useWindowSize
├── pages/           # one component per route (lazy-loaded)
├── routes/          # AppRoutes — router + code splitting
├── utils/           # constants, animations (Framer variants), helpers
└── styles/          # globals.css
```

### Notes

- **Theme**: `ThemeProvider` toggles the `dark` class on `<html>` and persists
  the choice to `localStorage`. Consume it anywhere via the `useTheme()` hook.
- **Animations**: import shared variants (`fadeUp`, `staggerContainer`,
  `pageTransition`, …) from `utils/animations.js` instead of re-declaring them.
- **No stock imagery**: project thumbnails and team avatars are rendered from
  on-brand CSS gradients, keeping the bundle light and the look distinctive.
- **Performance**: pages are code-split with `React.lazy` + `Suspense`;
  expensive lists use `useMemo`; the layout shell never remounts between routes.
