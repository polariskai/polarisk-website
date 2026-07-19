# Homepage V3 Hero + Light Mode Merge

**Date:** 2026-07-18  
**Status:** Approved for planning  
**Scope:** `polarisk-website`

## Goal

Replace the current dark homepage hero with the V3 canvas intro and light hero, keep the existing marketing body sections in light mode, archive the standalone V3 and changelog routes, and convert About/Contact (and related legal pages) to light mode. No changelog links anywhere on the live site.

## Decisions (locked)

| Topic | Choice |
| --- | --- |
| Architecture | Extract shared `HeroIntro` component + scoped CSS |
| Post-hero content | Neither stats strip nor V3 ticker — jump to How it works |
| Navigation | Existing `SiteHeader` / `SiteFooter`, restyled for light; Changelog removed |
| Product mockups | Restyle to light UI (not dark product windows) |
| Hero CTAs | Book a demo → `/contact`; Watch an investigation → `#how-it-works` |
| Archive | Move both `app/v3` and `app/changelog` under `archive/` so neither is a public route |
| Intro fidelity | Faithful port of V3 dark canvas sequence (network → sanctions → converge into star → wordmark → light → copy + replay) |

## Page composition (`/`)

1. `SiteHeader` (light) — About, Contact, Contact us; no Changelog  
2. `HeroIntro` — V3 intro + hero lockup/copy/CTAs/Replay  
3. How it works (`id="how-it-works"`) + `FunnelAnimation`  
4. Platform  
5. Alert Analysis  
6. Capabilities  
7. AI Copilot  
8. Stop drowning in alerts  
9. `SiteFooter` (light) — no Changelog  

**Removed from home:** current dark hero, square grid / radial glow background, stats strip, V3 Journey, Agents, Why it matters, ticker.

## Component design

### `components/HeroIntro.js` + `components/HeroIntro.css`

- Port from `app/v3/page.js` / `v3.css`: canvas animation, star/wordmark lockup, hero copy, actions, replay, reduced-motion skip-to-light.
- Preserve V3 timing and handoff (`star` → `wordmark` → `.light` → copy).
- Scope all styles under a root class (e.g. `.hero-intro`) so they do not leak into body sections.
- Load Space Grotesk + JetBrains Mono for the hero (same as current V3 layout).
- After light lands, page background uses V3 light tokens (`#f6f7fa` / dark text).

### Header / intro coordination

- During the dark intro, header must not flash an opaque light bar over the canvas.
- Prefer syncing header appearance with intro light state (transparent/dark-friendly until light, then light chrome), or an equivalent that avoids a white flash on dark.

### Body sections

- Keep existing copy and layout from `app/page.js`.
- Flip Tailwind palette to light: dark text, soft borders, white/off-white panels.
- Restyle Platform, Alert Analysis, Capabilities, and AI Copilot mock panels to light UI.
- Keep `FunnelAnimation` behavior; adjust only parent/container contrast if needed so it remains readable on the light page.

### Secondary pages

- About, Contact, Contact/sales, Privacy, Terms: light backgrounds and text; light header/footer; remove decorative dark grid/orbs where they fight the light theme.
- Contact: remove the Changelog channel card.

## Archive layout

```
polarisk-website/archive/
  v3/          # former app/v3 (page, css, layout)
  changelog/   # former app/changelog (page, layout, assets if any)
```

- Outside `app/`, so Next.js does not register routes.
- Files kept for later restoration; no live links.

## Link / SEO cleanup

- Remove Changelog from `SiteHeader`, `SiteFooter`, Contact channels.
- Remove `/changelog/` from `sitemap.js`.
- No new changelog UI in this work.

## Out of scope

- Redesigning body section copy or funnel internals beyond light-mode readability.
- Rebuilding changelog content.
- Shipping a public `/v3` preview after archive.

## Success criteria

- Visiting `/` plays the V3-quality dark intro and lands on the light hero with logo, kicker, two headline lines, two CTAs, and Replay.
- Scrolling continues through the listed body sections in light mode with light mockups.
- About and Contact (and Privacy/Terms) render in light mode with no changelog links.
- `/v3` and `/changelog` are not public routes; source lives under `archive/`.
