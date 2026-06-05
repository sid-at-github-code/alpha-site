# AlphaFirms — Components Map

> Reference for AI models. Covers every route, component, asset, CSS token, and inter-component dependency.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start (SSR React, file-based routing) |
| Build | Vite 7 |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v4 + CSS variables (`styles.css`) |
| Animation | framer-motion |
| 3D | Three.js (SSR-guarded via `ClientOnly` + `React.lazy`) |
| Icons | lucide-react |
| Font | Poppins (300–800) via Google Fonts |

---

## Routes

| Route | File | Description |
|---|---|---|
| `/` | `src/routes/index.tsx` | Main landing page — assembles all homepage sections |
| `/homeowners` | `src/routes/homeowners.tsx` | For Homeowners page — hero with theme-aware image, fears, timeline, form |
| `/designers` | `src/routes/designers.tsx` | For Designers page — hero with interior.jpg image, contrast cards, timeline, form |
| `/suppliers` | `src/routes/suppliers.tsx` | For Suppliers page — hero with suppliers.jpg image, problem list, timeline, form |
| `/signup` | `src/routes/signup.tsx` | Sign-up page — split card (signuploop.mp4 left, form right) |
| `__root` | `src/routes/__root.tsx` | Shell: injects CSS, favicon, dark-mode flash prevention script, QueryClientProvider, PageLoader |

### Route tree
Generated automatically at `src/routeTree.gen.ts` — do not edit manually.

---

## Components

### Page-level (used in `src/routes/index.tsx`)

| Component | File | Purpose |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Fixed top nav, `h-11` height, glassmorphism, dark toggle, mobile hamburger. Links: Log In (href="#"), Register → `/signup`, Get Started → `/homeowners` |
| `HeroSearch` | `src/components/HeroSearch.tsx` | Main hero section. Left: eyebrow + H1 + search bar + popular tags. Right: `HeroVideo` (70% wide, absolute positioned). Light bg `#f9fbfe`, dark bg `#192127` |
| `Hero` | `src/components/Hero.tsx` | 3-column "For Homeowners / For Designers / For Material Suppliers" section. Eyebrow + H3 + bullet features + CTA per column. No body paragraph. |
| `FeaturedCategories` | `src/components/FeaturedCategories.tsx` | Two-column: LEFT = 4 cards orbiting in a circle (RAF loop, pause on hover, 3D tilt on mousemove). RIGHT = stacked category labels with orange underline on hover |
| `FeaturedAds` | `src/components/FeaturedAds.tsx` | Featured listings/ads grid section |
| `ScrollScene` | `src/components/three/ScrollScene.tsx` | Scroll-driven 3D room assembly. 34 Three.js pieces fly in from random positions. Dark cinematic background (`#0d1b2a`), fog, 5 lights, DOM progress bar, AnimatePresence phase text. **SSR-guarded** |
| `EcosystemDiagram` | `src/components/EcosystemDiagram.tsx` | Animated ecosystem diagram (uses `EcosystemCanvas`) |
| `HowItWorks` | `src/components/HowItWorks.tsx` | Step-by-step how-it-works section |
| `WhyAlphaFirms` | `src/components/WhyAlphaFirms.tsx` | Value proposition section |
| `PlatformValue` | `src/components/PlatformValue.tsx` | Platform value/features section |
| `Stats` | `src/components/Stats.tsx` | Animated number stats bar |
| `Testimonials` | `src/components/Testimonials.tsx` | Customer testimonial cards |
| `BlogNews` | `src/components/BlogNews.tsx` | Blog/news preview cards |
| `Newsletter` | `src/components/Newsletter.tsx` | Email newsletter signup bar |
| `CTA` | `src/components/CTA.tsx` | Final call-to-action section |
| `Footer` | `src/components/Footer.tsx` | Site footer with links |

### Shared / Utility Components

| Component | File | Purpose |
|---|---|---|
| `ClientOnly` | `src/components/ClientOnly.tsx` | Renders children only after mount — prevents SSR hydration errors for Three.js / browser APIs |
| `PageLoader` | `src/components/PageLoader.tsx` | Full-screen loader shown during route transitions. Uses `.logo-spin` CSS animation |
| `TrustBar` | `src/components/TrustBar.tsx` | Trust/social proof bar (not currently rendered on homepage) |
| `TopBar` | `src/components/TopBar.tsx` | Old social-media top bar — **removed from all routes**, file kept |
| `CategoryStrip` | `src/components/CategoryStrip.tsx` | Old orbiting category section — **removed from all routes**, file kept |
| `EcosystemCanvas` | `src/components/three/EcosystemCanvas.tsx` | Three.js canvas used inside `EcosystemDiagram` |

### Shared Sub-components (`src/components/shared/`)

| Component | File | Used By |
|---|---|---|
| `SectionHeading` | `shared/SectionHeading.tsx` | homeowners, designers, suppliers — eyebrow + title + subtitle heading block |
| `Timeline` | `shared/Timeline.tsx` | homeowners, designers, suppliers — numbered step list |
| `TestimonialCard` | `shared/TestimonialCard.tsx` | homeowners, designers — quote + name + meta card |
| `FormField` | `shared/FormField.tsx` | homeowners, designers, suppliers — labeled text/email/tel/url input |
| `SelectField` | `shared/FormField.tsx` | homeowners, designers, suppliers — labeled `<select>` (exported from same file as FormField) |
| `TextAreaField` | `shared/FormField.tsx` | homeowners, designers, suppliers — labeled `<textarea>` |
| `BronzeButton` | `shared/BronzeButton.tsx` | homeowners, designers, suppliers — styled submit button |

### shadcn/ui Components (`src/components/ui/`)

Full shadcn/ui library installed. Not currently used directly by custom components but available. Includes: `accordion`, `alert`, `avatar`, `badge`, `button`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `dialog`, `drawer`, `dropdown-menu`, `form`, `input`, `label`, `pagination`, `popover`, `progress`, `radio-group`, `select`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`, `toggle`, `tooltip`.

---

## Assets (`src/assets/`)

### Videos

| File | Used In | Notes |
|---|---|---|
| `main-light.webm` | `HeroSearch.tsx` | Hero video — light mode. Imported with `?url` suffix |
| `main-dark.webm` | `HeroSearch.tsx` | Hero video — dark mode. Imported with `?url` suffix |
| `signuploop.mp4` | `signup.tsx` | Signup page left-panel video, loops. Imported with `?url` suffix |
| `video_1780486626 (online-video-cutter.com).mp4` | Unused | — |

### Images — Active

| File | Used In | Notes |
|---|---|---|
| `Alphafirms-logo-modified.png` | `Navbar.tsx`, `signup.tsx`, `__root.tsx` | Brand logo |
| `furniture.jpg` | `FeaturedCategories.tsx` | Orbit card — Furnitures |
| `interior.jpg` | `FeaturedCategories.tsx`, `designers.tsx` | Orbit card — Interior; designers hero image |
| `home-decor.jpg` | `FeaturedCategories.tsx` | Orbit card — Home Decor |
| `lights.jpg` | `FeaturedCategories.tsx` | Orbit card — Lighting |
| `home-owners.jpg` | `homeowners.tsx` | Homeowners hero — **light mode** |
| `hoome-owners-dark .png` | `homeowners.tsx` | Homeowners hero — **dark mode** (note: typo + space in filename, loaded via `new URL(...)`) |
| `suppliers.jpg` | `suppliers.tsx` | Suppliers hero image |

### Images — Unused / Spare

| File | Notes |
|---|---|
| `desk-white.jpg` | Available, not currently placed |
| `download.jpg` | Available, not currently placed |
| `whitebg.jpg` | Available, not currently placed |
| `legoimge.jpg` | Available, not currently placed |
| `interors.jpg` | Available (alt interior shot), not placed |
| `home0wners-light.png` | Superseded by `home-owners.jpg` for light mode |
| `3d Living Room _ Living Room.jpg` | Available, long filename |
| `Minimal Cozy Living Room Design with Soft Neutrals & Natural Light.jpg` | Available, long filename |
| `Design d'un salon _ Des idées tendances pour faire le plein d'inspiration_.jpg` | Available, long filename |
| `interior.com_tv-showcase-designs-perfect-for-ev___` | No extension — load via `new URL(...)` if needed |
| `some_furniture.glb` | 3D model file, not currently used in ScrollScene |

---

## Theme System (`src/styles.css`)

### CSS Variables

| Token | Light | Dark |
|---|---|---|
| `--background` | `#F8FAFD` | `#0F1823` |
| `--surface` | `#F8F9FC` | `#182130` |
| `--surface-raised` | `#FFFFFF` | `#22303F` |
| `--foreground` | `#405364` | `#F8FAFD` |
| `--muted-foreground` | `#6B8095` | `#8FA8BC` |
| `--border` | `rgba(64,83,100,0.12)` | `rgba(248,250,253,0.09)` |
| `--accent` | `#F87B54` | `#F87B54` (same) |
| `--accent-light` | `rgba(248,123,84,0.10)` | `rgba(248,123,84,0.12)` |
| `--accent-glow` | `rgba(248,123,84,0.28)` | `rgba(248,123,84,0.25)` |
| `--radius` | `8px` | `8px` |

### Dark Mode Mechanics
- Dark class applied to `<html>` element (`document.documentElement`)
- Toggle stored in `localStorage` key `"theme"`
- Flash prevention: inline `<script>` in `__root.tsx` reads localStorage before first paint
- Tailwind dark variant: `@custom-variant dark (&:is(.dark *))` — use `dark:` prefix in className
- Components that need to react to theme changes at runtime use `MutationObserver` on `document.documentElement` watching the `class` attribute

### Key CSS Utility Classes

| Class | Effect |
|---|---|
| `.btn-primary` | Coral pill button with shadow |
| `.btn-secondary` | Coral outline pill button |
| `.eyebrow` | 11px uppercase coral label |
| `.nav-glass` | Frosted glass navbar background |
| `.card-hover` | Border + shadow + lift on hover |
| `.text-gradient` | Foreground→accent gradient text |
| `.ambient-top/center/bottom` | Coral radial glow overlays |
| `.float-bob` | Vertical float bob keyframe animation |
| `.logo-spin` | 360° spin used by PageLoader |
| `.dot-grid` | Coral dot grid background pattern |
| `.glow-sm/md/btn` | Box-shadow accent glow helpers |

---

## Motion / Animation (`src/lib/motionVariants.ts`)

| Export | Type | Behavior |
|---|---|---|
| `fadeUp` | `Variants` | `opacity 0→1`, `y 20→0`, duration 0.6s |
| `stagger` | `Variants` | Staggers children by 0.08s with 0.05s initial delay |
| `viewportOnce` | object | `{ once: true, amount: 0.3 }` — pass to `viewport` prop |
| `ease` | array | `[0.25, 0.1, 0.25, 1]` — standard easing curve |

**Pattern:** Wrap parent in `<motion.div variants={stagger} initial="hidden" animate="show">`, children use `<motion.X variants={fadeUp}>`. For scroll-triggered: use `whileInView="show"` + `viewport={viewportOnce}` instead of `animate`.

---

## Inter-Component Dependencies

```
__root.tsx
  └── PageLoader
  └── <Outlet /> → routes

index.tsx
  ├── Navbar
  │     └── DarkToggle (inline component)
  ├── HeroSearch
  │     └── HeroVideo (inline — MutationObserver dark mode)
  ├── Hero
  ├── FeaturedCategories
  │     └── CategoryLabel (inline component)
  ├── FeaturedAds
  ├── ClientOnly → Suspense → ScrollScene (lazy)
  │     └── Three.js scene (34 mesh pieces)
  ├── EcosystemDiagram
  │     └── EcosystemCanvas (Three.js)
  ├── HowItWorks
  ├── WhyAlphaFirms
  ├── PlatformValue
  ├── Stats
  ├── Testimonials
  ├── BlogNews
  ├── Newsletter
  ├── CTA
  └── Footer

homeowners.tsx
  ├── Navbar
  ├── HomeownerHeroImage (inline — MutationObserver, switches home-owners.jpg ↔ hoome-owners-dark .png)
  ├── SectionHeading (×3)
  ├── Timeline
  ├── TestimonialCard (×3)
  ├── FormField / SelectField / TextAreaField
  ├── BronzeButton
  └── Footer

designers.tsx
  ├── Navbar
  ├── Hero image: interior.jpg (static, 2° tilt card)
  ├── SectionHeading (×3)
  ├── Timeline
  ├── TestimonialCard (×4)
  ├── FormField / SelectField / TextAreaField
  ├── BronzeButton
  └── Footer

suppliers.tsx
  ├── Navbar
  ├── Hero image: suppliers.jpg (static, −2° tilt card)
  ├── SectionHeading (×3)
  ├── Timeline
  ├── FormField / SelectField / TextAreaField
  ├── BronzeButton
  └── Footer

signup.tsx
  ├── SignupVideo (inline — plays signuploop.mp4, loops)
  ├── InputField (inline reusable field component)
  └── (no Navbar or Footer — standalone full-page card)
```

---

## SSR Patterns

| Pattern | Where | Why |
|---|---|---|
| `ClientOnly` wrapper | `index.tsx` around `ScrollScene` | Three.js uses `window`/`document` — crashes SSR |
| `React.lazy` + `Suspense` | `index.tsx` | Code-splits ScrollScene out of main bundle |
| `import asset from "@/assets/file?url"` | `HeroSearch.tsx`, `signup.tsx` | Vite `?url` suffix gives correct URL in SSR context |
| `new URL("../assets/file", import.meta.url).href` | `homeowners.tsx` | For filenames with spaces/no extension that TypeScript can't import directly |
| `MutationObserver` on `<html>` | `HeroSearch.tsx`, `homeowners.tsx` | Detects dark-mode class change at runtime to swap assets |
| `useEffect` for `isDark` init | Same components | `document` not available during SSR — state init deferred to client |

---

## Lib / Utilities

| File | Purpose |
|---|---|
| `src/lib/motionVariants.ts` | Shared framer-motion variants |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `src/lib/config.server.ts` | Server-side config |
| `src/lib/error-capture.ts` | Error capture utility |
| `src/lib/error-page.ts` | Error page helpers |
| `src/lib/lovable-error-reporting.ts` | Lovable platform error reporting |
| `src/lib/api/example.functions.ts` | Example server function |
| `src/hooks/use-mobile.tsx` | `useIsMobile()` hook (breakpoint 768px) |
| `src/router.tsx` | TanStack Router setup with QueryClient |
| `src/server.ts` | Server entry point |
| `src/start.ts` | App start entry |
