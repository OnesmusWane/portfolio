# Onesmus Wane — Portfolio Ledger

Personal portfolio of **Onesmus Wane**, Senior Full-Stack & Agentic AI Engineer based in Nairobi, Kenya. Built with Nuxt 4, Vue 3, and Tailwind CSS v4.

Live: [onesmuswane.netlify.app](https://onesmuswane.netlify.app) _(update when domain is confirmed)_

---

## Stack

| Layer     | Technology                                                                         |
| --------- | ---------------------------------------------------------------------------------- |
| Framework | Nuxt 4 (`app/` directory structure)                                                |
| UI        | Vue 3 Composition API (`<script setup lang="ts">`)                                 |
| Styling   | Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first `@theme {}` config)             |
| Language  | TypeScript throughout                                                              |
| Rendering | SSR — server-side rendered                                                         |
| Animation | CSS keyframes + Vue `<Transition>` + `IntersectionObserver` — no animation library |

---

## Project Structure

```
portfolio/
├── app/
│   ├── assets/css/
│   │   └── main.css               # Tailwind entry, @theme colour tokens, custom keyframes
│   ├── components/
│   │   ├── AppAnimatedBar.vue     # Reusable animated progress bar (0 → value on mount)
│   │   ├── TheNav.vue             # Sticky nav with anchor links + GitHub/LinkedIn icons
│   │   ├── TheHero.vue            # Hero with stat grid, fade-in on mount
│   │   ├── TheNowStatus.vue       # Live "what I'm working on" status bar
│   │   ├── TheMetricTicker.vue    # Key metrics strip
│   │   ├── TheCaseStudies.vue     # 5-project grid (external links + detail modals)
│   │   ├── TheCaseStudyModal.vue  # Teleport modal for private/admin projects
│   │   ├── TheEngineeringLog.vue  # 7 Architecture Decision Records (ADRs)
│   │   ├── TheADRModal.vue        # Teleport modal for ADR detail view
│   │   ├── TheQuarterlyTargets.vue # 3-level accordion: Year → Quarter → Targets
│   │   ├── TheParallelSystems.vue  # Off-screen ops: apiculture, poultry, horticulture
│   │   ├── TheStackTerminal.vue   # Terminal-style full tech stack display
│   │   └── TheFooter.vue          # Contact links
│   ├── composables/
│   │   └── useInView.ts           # IntersectionObserver composable for scroll animations
│   ├── pages/
│   │   └── index.vue              # Root page — SEO, JSON-LD schemas, component assembly
│   └── types/
│       └── adr.ts                 # TypeScript interfaces for ADR data
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.png               # Add 1200×630px image for social sharing previews
├── app.config.ts                  # Single source of truth: GitHub/LinkedIn URLs, site title
└── nuxt.config.ts                 # Global head, Tailwind vite plugin, SSR config
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server at `http://localhost:3000`:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Key Patterns

### Animated progress bars

`AppAnimatedBar.vue` transitions from `width: 0%` to its target on `onMounted` + `nextTick`. Because it fires on mount, bars re-animate every time an accordion panel expands and re-mounts the component.

### Scroll-triggered animations

`useInView.ts` wraps `IntersectionObserver` and flips an `isInView` ref the first time the element enters the viewport, then disconnects the observer. Used for section-level animations.

### Accordion with unknown height

`TheQuarterlyTargets.vue` uses Vue `<Transition>` JS hooks (`onBeforeEnter`, `onEnter`, `onAfterEnter`, `onLeave`) with `scrollHeight` measurement for smooth expand/collapse on content with no fixed height.

### Modals

`TheCaseStudyModal.vue` and `TheADRModal.vue` use `<Teleport to="body">` with body scroll lock (`document.body.style.overflow`) and Escape-key close, both gated with `import.meta.client`.

### Single source of truth for links

`app.config.ts` holds the GitHub and LinkedIn URLs. All components read from `useAppConfig()` — update once, reflects everywhere including the nav and footer.

---

## Sections

| Section           | Component             | Notes                                                             |
| ----------------- | --------------------- | ----------------------------------------------------------------- |
| Navigation        | `TheNav`              | Sticky, anchor-linked, GitHub + LinkedIn icon links               |
| Hero              | `TheHero`             | Fade-in on mount, LOCATION / ROLE / STACK / STATUS grid           |
| Now Status        | `TheNowStatus`        | Current work-in-progress with pulsing live indicator              |
| Metric Ticker     | `TheMetricTicker`     | Experience · Industries · Specialisms                             |
| Case Studies      | `TheCaseStudies`      | My 1Health, IMS, Premax Autocare, Tej Printbrands, Farm Ecosystem |
| Engineering Log   | `TheEngineeringLog`   | 7 real ADRs with full context and modal detail view               |
| Quarterly Targets | `TheQuarterlyTargets` | 3-level accordion, 2025–2026, colour-coded by performance band    |
| Parallel Systems  | `TheParallelSystems`  | Apiculture (8→14 hives), poultry + rabbitry, horticulture         |
| Stack Terminal    | `TheStackTerminal`    | Terminal-style display of full tech stack with blinking cursor    |
| Footer            | `TheFooter`           | Email, GitHub, LinkedIn contact links                             |

---

## SEO

- `useSeoMeta` — optimised title, description, Open Graph (with `og:image`), Twitter Card
- Three JSON-LD schemas: `Person`, `WebSite`, `ProfilePage`
- Canonical URL, keyword meta, `robots: index, follow, max-image-preview:large`
- `robots.txt` and `sitemap.xml` served from `/public`

**When your domain is confirmed:** find-and-replace `onesmuswane.netlify.app` across the project — it appears in `index.vue`, `sitemap.xml`, and `robots.txt` only.

---

## Deployment

The build output is a standard Node.js SSR server:

```bash
npm run build
node .output/server/index.mjs
```

Compatible with any Node.js host — Railway, Render, Coolify, VPS with Nginx/PM2, etc.

For fully static hosting (Netlify, Vercel static, GitHub Pages):

```bash
npm run generate
```

**Pre-launch checklist:**

- [ ] Add `public/og-image.png` at 1200×630px for social sharing previews
- [ ] Replace `onesmuswane.netlify.app` with the real domain
- [ ] Submit `https://yourdomain.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Verify JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Contact

- Email: [onesmuswane@my1health.com](mailto:onesmuswane@my1health.com)
- GitHub: [github.com/OnesmusWane](https://github.com/OnesmusWane)
- LinkedIn: [linkedin.com/in/onesmus-wane-9a19a61a0](https://www.linkedin.com/in/onesmus-wane-9a19a61a0)
