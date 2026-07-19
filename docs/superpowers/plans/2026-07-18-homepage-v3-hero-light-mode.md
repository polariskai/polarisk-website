# Homepage V3 Hero + Light Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge the V3 canvas intro + light hero into `/`, keep the existing body sections in light mode, archive `/v3` and `/changelog`, and convert About/Contact/legal pages to light mode with no changelog links.

**Architecture:** Extract `HeroIntro` (client component + scoped CSS) from `app/v3`. Rebuild `app/page.js` as a thin client shell that syncs `SiteHeader` tone with intro light state, then renders the existing marketing sections with a light Tailwind palette. Move v3/changelog source under `archive/` so they are not Next.js routes.

**Tech Stack:** Next.js (App Router), React client components, Tailwind CSS v4, `next/font` (Space Grotesk, JetBrains Mono), existing Lucide icons / FunnelAnimation.

**Spec:** `docs/superpowers/specs/2026-07-18-homepage-v3-hero-light-mode-design.md`

## Global Constraints

- Intro must be a faithful port of V3 timing/handoff (network → sanctions → converge into star → wordmark → light → copy + Replay).
- No stats strip, no V3 ticker, no Journey / Agents / Why it matters on `/`.
- Book a demo → `/contact`; Watch an investigation → `#how-it-works`.
- No changelog links anywhere on the live site; keep archive files for later.
- Product mock panels on the homepage restyle to light UI; FunnelAnimation may sit in a dark panel wrapper for contrast.
- Privacy and Terms also go light (match header/footer).
- Work in `polarisk-website/` git root (`website-vision-3` branch).
- No automated test suite — verify with `npm run build`, `rg`, and manual visual checks.

---

## File map

| Path | Responsibility |
| --- | --- |
| `components/HeroIntro.js` | Client: canvas intro, lockup, hero copy, CTAs, Replay, `onLightChange` |
| `components/HeroIntro.css` | Scoped `.hero-intro` styles (hero-only subset of v3.css) |
| `components/HomePage.js` | Client shell: header tone sync + HeroIntro + light body sections |
| `app/page.js` | Re-export `HomePage` (or thin wrapper) |
| `components/SiteHeader.js` | Light theme + optional dark-intro tone; remove Changelog |
| `components/SiteFooter.js` | Light theme; remove Changelog |
| `app/globals.css` | Default light page background / color-scheme |
| `app/about/page.js`, `app/contact/page.js`, `app/contact/sales/page.js`, `app/privacy/page.js`, `app/terms/page.js` | Light restyle; Contact drops Changelog card |
| `app/sitemap.js` | Drop `/changelog/` |
| `archive/v3/*` | Former `app/v3` (not routed) |
| `archive/changelog/*` | Former `app/changelog` (not routed) |

---

### Task 1: Archive v3 and changelog routes

**Files:**
- Move: `app/v3/` → `archive/v3/`
- Move: `app/changelog/` → `archive/changelog/`
- Modify: `app/sitemap.js`
- Create: `archive/README.md` (one-paragraph restore note)

**Interfaces:**
- Consumes: existing `app/v3/*`, `app/changelog/*`
- Produces: non-routed archive trees; sitemap without changelog

- [ ] **Step 1: Create archive dirs and move routes**

```bash
cd /Users/neelam.gulrajani/Documents/testprojects/polariskai-org/polarisk-website
mkdir -p archive
git mv app/changelog archive/changelog 2>/dev/null || mv app/changelog archive/changelog
# v3 may be untracked — use mv if git mv fails
git mv app/v3 archive/v3 2>/dev/null || mv app/v3 archive/v3
```

- [ ] **Step 2: Add archive README**

Create `archive/README.md`:

```markdown
# Archived site routes

`v3/` and `changelog/` were moved out of `app/` so they are not public Next.js routes.
To restore later, move a folder back under `app/` (e.g. `app/changelog`) and re-add nav/sitemap links.
```

- [ ] **Step 3: Remove changelog from sitemap**

In `app/sitemap.js`, delete this entry:

```js
{ url: `${SITE_URL}/changelog/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
```

- [ ] **Step 4: Verify routes are gone**

```bash
test ! -d app/v3 && test ! -d app/changelog && test -d archive/v3 && test -d archive/changelog && echo OK
rg -n "changelog" app/sitemap.js || echo "no changelog in sitemap"
```

Expected: `OK` and no changelog line in sitemap.

- [ ] **Step 5: Commit**

```bash
git add archive app/sitemap.js
git status
git commit -m "$(cat <<'EOF'
Archive v3 and changelog routes out of the App Router.

EOF
)"
```

---

### Task 2: Extract `HeroIntro` component (faithful V3 intro)

**Files:**
- Create: `components/HeroIntro.js`
- Create: `components/HeroIntro.css`
- Reference (archived): `archive/v3/page.js`, `archive/v3/v3.css`, `archive/v3/layout.js`

**Interfaces:**
- Consumes: archived V3 hero markup + canvas `useEffect` + hero CSS tokens
- Produces:
  - `export default function HeroIntro({ onLightChange })`
  - `onLightChange?: (isLight: boolean) => void` — called with `true` when root gets `.light`, `false` on Replay reset
  - Root element classes: `hero-intro` (+ `light` when lit)
  - Font CSS variables: `--font-grotesk`, `--font-jbmono` on the root wrapper

- [ ] **Step 1: Create scoped CSS from v3 hero subset**

Copy from `archive/v3/v3.css` into `components/HeroIntro.css`, then:

1. Rename every `.v3` selector to `.hero-intro` (including `.hero-intro.light`).
2. Keep: tokens, keyframes (`v3StarBreathe` can stay named), hero, lockup/wordmark/star, hero-copy, buttons, replay.
3. Delete: nav, ticker, journey, agents, numbers, closing CTA, section layout rules, funnel-panel rules that are not needed for the hero.
4. Keep root transitions:

```css
.hero-intro {
  --blue: #3d5bff;
  --blue-soft: #6e85ff;
  --danger: #e0654f;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --bg: #05070e;
  --panel: #0b1120;
  --line: rgba(150, 175, 220, 0.12);
  --text: #edf1f8;
  --dim: #8391a8;
  --accent: var(--blue-soft);
  background: var(--bg);
  color: var(--text);
  transition: background-color 1.4s ease, color 1.4s ease;
}
.hero-intro.light {
  --bg: #f6f7fa;
  --panel: #ffffff;
  --line: rgba(13, 19, 38, 0.1);
  --text: #0d1326;
  --dim: #5c6884;
  --accent: var(--blue);
}
```

- [ ] **Step 2: Create `HeroIntro.js`**

Port hero-only pieces from `archive/v3/page.js`:

- Keep helpers: `GlyphA`, `Star`, `PlayIcon`, `STAR_PATH`, `A_PATH`, `TXN_LABELS`.
- Drop: `NavMark`, `TICKER_ITEMS`, `AGENTS`, nav JSX, ticker, journey, agents, numbers, funnel section, closing CTA.
- Load fonts inside the component:

```js
"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./HeroIntro.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});
```

- Props:

```js
export default function HeroIntro({ onLightChange }) {
  // refs: rootRef, heroRef, canvasRef, copyRef, wordmarkRef, starRef
}
```

- In the animation `useEffect`, when adding/removing `.light`, also notify:

```js
root.classList.add("light");
onLightChange?.(true);
// on Replay start():
root.classList.remove("light");
onLightChange?.(false);
```

Include `onLightChange` in the effect dependency array, or store it in a ref to avoid restarting the animation on parent re-renders:

```js
const onLightChangeRef = useRef(onLightChange);
onLightChangeRef.current = onLightChange;
// call onLightChangeRef.current?.(true/false)
```

- Fix ticker font dependency (ticker will not exist). Replace:

```js
monoFont = `11px ${getComputedStyle(root.querySelector(".ticker")).fontFamily}`;
```

with:

```js
monoFont = `11px ${getComputedStyle(root).getPropertyValue("--font-jbmono").trim() || "monospace"}, monospace`;
```

Or simpler hardcode matching V3 intent:

```js
monoFont = "11px var(--font-jbmono), ui-monospace, monospace";
```

Canvas `fillText` may not resolve CSS `var()` — prefer:

```js
const monoFamily =
  getComputedStyle(root).fontFamily ||
  "ui-monospace, SFMono-Regular, Menlo, monospace";
monoFont = `11px ${monoFamily}`;
```

And set on the root: `style={{ fontFamily: "var(--font-jbmono), monospace" }}` only for measurement, or query a hidden `.monoProbe` span inside the hero.

Recommended approach — add inside hero JSX:

```jsx
<span
  ref={monoProbeRef}
  className="mono"
  style={{ position: "absolute", visibility: "hidden" }}
  aria-hidden="true"
>
  .
</span>
```

```js
monoFont = `11px ${getComputedStyle(monoProbeRef.current).fontFamily}`;
```

- CTA hrefs in JSX:

```jsx
<a className="btn btn-primary" href="/contact">
  <Star className="bstar" fill="#fff" />
  Book a demo
</a>
<a className="btn btn-ghost" href="#how-it-works">
  <PlayIcon />
  Watch an investigation
</a>
```

- Root JSX shape:

```jsx
return (
  <div
    className={`hero-intro ${grotesk.variable} ${jbmono.variable}`}
    ref={rootRef}
  >
    <header className="hero" ref={heroRef}>
      <canvas className="net" ref={canvasRef} />
      <div className="hero-veil" />
      {/* lockup + wordmark + star — same as V3 */}
      {/* hero-copy — same as V3 */}
      <button className="replay" type="button">↻ REPLAY</button>
    </header>
  </div>
);
```

Do **not** put `id="main-content"` on HeroIntro if the homepage shell owns skip-link targeting; put `id="main-content"` on the page shell main wrapper instead.

- [ ] **Step 3: Smoke-check component mounts in isolation**

Temporarily in `app/page.js` (will be replaced in Task 4):

```js
"use client";
import HeroIntro from "../components/HeroIntro";
export default function Page() {
  return <HeroIntro />;
}
```

Run:

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: dark starry network intro → star + POLARISK → light → copy/CTAs/Replay; Replay restarts dark. Reduced-motion users skip to light.

- [ ] **Step 4: Commit**

```bash
git add components/HeroIntro.js components/HeroIntro.css app/page.js
git commit -m "$(cat <<'EOF'
Extract V3 canvas hero into HeroIntro component.

EOF
)"
```

---

### Task 3: Light `SiteHeader` / `SiteFooter` + remove changelog links

**Files:**
- Modify: `components/SiteHeader.js`
- Modify: `components/SiteFooter.js`
- Modify: `app/contact/page.js` (remove Changelog channel only in this task)

**Interfaces:**
- Consumes: none from HeroIntro yet
- Produces:
  - `SiteHeader({ solid = false, tone = "light" })` where `tone` is `"light" | "dark"`
  - `tone="dark"`: white logo/text, transparent until scroll then dark translucent bar (for intro)
  - `tone="light"`: black/blue logo, dark text, light translucent bar when solid/scrolled
  - Footer always light styles after this task
  - No Changelog entries in header, footer, or Contact channels

- [ ] **Step 1: Update `SiteHeader` nav links and tone API**

Replace `NAV_LINKS` with:

```js
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
```

Add prop `tone = "light"`. Use logo:

```js
const logoSrc =
  tone === "dark" ? "/polarisk-logo-white.svg" : "/polarisk-logo-black.svg";
```

Class mapping examples:

```js
const showBg = solid || scrolled || menuOpen;

const headerBg =
  tone === "dark"
    ? showBg
      ? "border-b border-white/[0.06] bg-[#05070e]/90 backdrop-blur-xl"
      : ""
    : showBg
      ? "border-b border-black/[0.06] bg-[#f6f7fa]/90 backdrop-blur-xl"
      : "";

const wordmarkClass =
  tone === "dark"
    ? "text-[15px] font-semibold tracking-tight text-white"
    : "text-[15px] font-semibold tracking-tight text-[#0d1326]";

const linkClass =
  tone === "dark"
    ? "text-[13px] text-white/50 transition-colors hover:text-white/90"
    : "text-[13px] text-[#5c6884] transition-colors hover:text-[#0d1326]";

const ctaClass =
  tone === "dark"
    ? "hidden items-center gap-1.5 rounded-md border border-white/[0.12] px-4 py-1.5 text-[13px] text-white/60 transition-all hover:border-white/25 hover:text-white/90 md:flex"
    : "hidden items-center gap-1.5 rounded-md border border-[#0d1326]/12 px-4 py-1.5 text-[13px] text-[#5c6884] transition-all hover:border-[#3d5bff]/40 hover:text-[#0d1326] md:flex";
```

Apply the same tone split to the mobile menu panel backgrounds/text.

- [ ] **Step 2: Update `SiteFooter` to light + drop Changelog**

```js
const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
```

```jsx
<footer className="border-t border-black/[0.06] bg-[#f6f7fa] px-6 py-10">
  {/* logo: /polarisk-logo-black.svg or /polarisk-logo.svg */}
  {/* text: text-[#5c6884] / hover:text-[#0d1326] */}
</footer>
```

- [ ] **Step 3: Remove Changelog channel from Contact**

In `app/contact/page.js`, delete the object:

```js
{
  title: "Changelog",
  description: "See what we have shipped recently and what is coming next.",
  href: "/changelog",
  icon: BookOpen,
  cta: "View changelog",
  external: false,
},
```

Remove unused `BookOpen` import if nothing else uses it.

- [ ] **Step 4: Verify no live changelog links remain in chrome**

```bash
rg -n "changelog|Changelog" components/SiteHeader.js components/SiteFooter.js app/contact/page.js app/sitemap.js
```

Expected: no matches (or only comments/archive mentions — should be none).

- [ ] **Step 5: Commit**

```bash
git add components/SiteHeader.js components/SiteFooter.js app/contact/page.js
git commit -m "$(cat <<'EOF'
Restyle site chrome for light mode and remove changelog links.

EOF
)"
```

---

### Task 4: Compose homepage shell with HeroIntro + light body sections

**Files:**
- Create: `components/HomePage.js`
- Modify: `app/page.js`
- Modify: `app/globals.css`
- Modify: `components/FunnelAnimation.js` only if required for contrast; prefer wrapper in HomePage

**Interfaces:**
- Consumes: `HeroIntro({ onLightChange })`, `SiteHeader({ tone, solid })`, `SiteFooter`
- Produces: full `/` experience per spec composition

- [ ] **Step 1: Set global light defaults**

In `app/globals.css`:

```css
:root {
  color-scheme: light;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: var(--font-inter), Inter, system-ui, -apple-system, Segoe UI,
    Roboto, sans-serif;
  background: #f6f7fa;
  color: #0d1326;
}
```

Keep existing animation utilities (`.load-in`, `.scroll-reveal`, etc.).

- [ ] **Step 2: Create `components/HomePage.js` shell**

```js
"use client";

import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import HeroIntro from "./HeroIntro";
import FunnelAnimation from "./FunnelAnimation";
// ... other imports currently used by app/page.js body sections
```

```js
export default function HomePage() {
  const [introLight, setIntroLight] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fa] font-sans text-[#0d1326]">
      <SiteHeader tone={introLight ? "light" : "dark"} />
      <main id="main-content">
        <HeroIntro onLightChange={setIntroLight} />

        <section id="how-it-works" className="border-t border-black/[0.06] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            {/* eyebrow / heading / lede — light text classes */}
            <div className="overflow-hidden rounded-xl border border-black/[0.08] bg-[#0b1120] p-4 md:p-6">
              <FunnelAnimation />
            </div>
          </div>
        </section>

        {/* Platform, Alert Analysis, Capabilities, AI Copilot, Stop drowning — light restyles */}
      </main>
      <SiteFooter />
    </div>
  );
}
```

`app/page.js` becomes:

```js
import HomePage from "../components/HomePage";

export default function Page() {
  return <HomePage />;
}
```

- [ ] **Step 3: Port body sections with light class map**

Move the body sections from current `app/page.js` (How it works through footer CTA), **excluding**: old hero, stats strip, grid/glow backgrounds.

Apply this substitution table consistently:

| Dark (old) | Light (new) |
| --- | --- |
| `bg-[#080c14]` page | `bg-[#f6f7fa]` |
| `text-white` headings | `text-[#0d1326]` |
| `text-white/55`, `/70`, `/45` | `text-[#5c6884]` / `text-[#0d1326]/70` |
| `text-blue-400/70` eyebrows | `text-[#3d5bff]` |
| `border-white/[0.04]` section borders | `border-black/[0.06]` |
| `border-white/[0.08]` cards | `border-black/[0.08]` |
| Mock panel `bg-[#0d1422]` / `#0b1019` | `bg-white` / `bg-[#f3f5f9]` |
| Mock text `text-white/80` | `text-[#0d1326]` |
| Mock muted `text-white/45` | `text-[#5c6884]` |
| CTA `bg-white text-[#080c14]` | `bg-[#3d5bff] text-white` (or keep high-contrast dark button on light: `bg-[#0d1326] text-white`) |
| Glow `boxShadow: ... rgba(37,99,235,...)` | softer `0 12px 40px rgba(13,19,38,0.08)` |

Capabilities cards: use `bg-white` + border, not `bg-[#080c14]`.

Stop drowning section: light background, dark headline, primary CTA button.

Drop unused imports that only served the old hero (`STATS` / `AnimatedCounter` if unused, feature icons only used in old hero cards, etc.).

- [ ] **Step 4: Manual visual checklist**

Run `npm run dev` and verify:

1. Dark intro plays with starry network → star → light hero.
2. Header is dark/transparent during intro; becomes light chrome after light lands.
3. Replay returns to dark intro and dark header tone.
4. No stats / ticker between hero and How it works.
5. `#how-it-works` scroll target works from “Watch an investigation”.
6. Body sections + mockups read as light UI; funnel sits in dark panel.
7. Footer is light and has no Changelog.

- [ ] **Step 5: Commit**

```bash
git add app/page.js components/HomePage.js app/globals.css components/FunnelAnimation.js
git commit -m "$(cat <<'EOF'
Compose light homepage around V3 HeroIntro and retained sections.

EOF
)"
```

---

### Task 5: Light-mode About, Contact, and legal pages

**Files:**
- Modify: `app/about/page.js`
- Modify: `app/contact/page.js`
- Modify: `app/contact/sales/page.js`
- Modify: `app/privacy/page.js`
- Modify: `app/terms/page.js`
- Modify: `app/about/reveal.js` only if reveal styles assume dark backgrounds

**Interfaces:**
- Consumes: light `SiteHeader` / `SiteFooter` (default `tone="light"`)
- Produces: light secondary pages with same content

- [ ] **Step 1: Convert page shells**

For each page, replace the dark main shell:

```jsx
<SiteHeader solid />
<main id="main-content" className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-24 pt-14 text-white">
  {/* remove animated-orb + white grid overlays */}
```

with:

```jsx
<SiteHeader solid tone="light" />
<main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]">
```

Text mapping:

- `text-white/50` → `text-[#5c6884]`
- `text-white/90` → `text-[#0d1326]`
- `border-white/[0.08]` → `border-black/[0.08]`
- Card/surfaces on Contact: `bg-white` + `border-black/[0.08]`

- [ ] **Step 2: Confirm Contact has no Changelog card** (already removed in Task 3)

```bash
rg -n "Changelog|/changelog" app/contact app/about app/privacy app/terms
```

Expected: no matches.

- [ ] **Step 3: Spot-check pages in browser**

Visit `/about`, `/contact`, `/contact/sales`, `/privacy`, `/terms`. Expected: light backgrounds, readable dark text, light header/footer, no changelog entry points.

- [ ] **Step 4: Commit**

```bash
git add app/about app/contact app/privacy app/terms
git commit -m "$(cat <<'EOF'
Convert About, Contact, and legal pages to light mode.

EOF
)"
```

---

### Task 6: Full-site verification and cleanup

**Files:**
- Potentially fix any leftovers from Tasks 1–5
- Do not reintroduce `/v3` or `/changelog` routes

- [ ] **Step 1: Grep for leftover changelog / dark homepage hero**

```bash
rg -n "Changelog|/changelog" --glob '!archive/**' --glob '!.next/**' --glob '!out/**' --glob '!docs/**'
rg -n "bg-\\[#080c14\\]" app/page.js components/HomePage.js components/SiteHeader.js components/SiteFooter.js app/about app/contact app/privacy app/terms || true
test ! -d app/v3 && test ! -d app/changelog && echo "routes archived"
```

Expected: no changelog links outside archive/docs; homepage/chrome not on `#080c14` page shells; routes archived.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: build succeeds; no pages for `/v3` or `/changelog` in the build route list.

- [ ] **Step 3: Final manual pass**

- `/` intro fidelity vs archived V3 feel
- CTAs + Replay
- Section order per spec
- About + Contact light
- Header does not flash white on dark intro

- [ ] **Step 4: Commit any fixes** (skip if clean)

```bash
git add -A
git status
# only commit if there are real fix files
git commit -m "$(cat <<'EOF'
Fix light-mode merge verification leftovers.

EOF
)"
```

---

## Spec coverage checklist

| Spec requirement | Task |
| --- | --- |
| Faithful V3 dark canvas → star → light hero | Task 2 |
| Hero CTAs + Replay | Task 2 |
| No Journey / Agents / Why it matters / ticker / stats | Tasks 2, 4 |
| Keep How it works → Platform → Alert Analysis → Capabilities → AI Copilot → Stop drowning → Footer | Task 4 |
| Light SiteHeader/Footer, no Changelog | Task 3 |
| Light mockups; funnel contrast via dark wrapper | Task 4 |
| Archive v3 + changelog | Task 1 |
| About/Contact (+ Privacy/Terms) light | Task 5 |
| Sitemap / link cleanup | Tasks 1, 3, 6 |
| Header sync with intro light state | Task 4 |

## Self-review notes

- No TBD/placeholder steps.
- `onLightChange` / `tone` naming is consistent across Tasks 2–4.
- Ticker font dependency explicitly fixed in Task 2 (V3 referenced `.ticker`).
- Funnel kept visually dark via wrapper (matches approved “keep FunnelAnimation behavior” note while body mocks go light).
