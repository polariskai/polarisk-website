# Polarisk SEO Improvement — Design Spec

**Date:** 2026-06-05  
**Status:** Approved  
**Approach:** Technical foundation + off-site entity building (Approach 2)  
**Goal:** Rank for brand search ("polarisk") in 4–8 weeks; lay groundwork for category keywords long-term

---

## Context

Polarisk launched `https://polarisk.ai` a few months ago on GitHub Pages (Next.js static export). Searching "polarisk" does not surface the site on page 1. Audit findings:

| Finding | Severity |
|---------|----------|
| `/robots.txt` and `/sitemap.xml` return 404 (404 page includes `noindex`) | Critical |
| No Google Search Console or off-site entity profiles | Critical |
| Homepage H1 is "AI Agents for Financial Crime" — brand name absent from main heading | High |
| No JSON-LD structured data (Organization, WebSite) | High |
| No per-page canonical URLs; subpages share homepage `og:url` | Medium |
| Changelog page has no page-specific metadata | Medium |
| No `og:image` for social previews | Medium |
| ~5 pages, no blog/docs; footer links (Privacy, Terms, Blog) point to `#` | Medium |
| No established backlinks or press coverage | Medium (expected for new site) |

**Constraints (user-confirmed):**

- Minimal on-site content — fix technical SEO on existing pages only; no new routes or blog
- Willing to spend 2–4 hours on off-site setup outside this repository
- Primary outcome: brand search first; category keywords are a longer-term goal

---

## Architecture

### In-repository scope

All code changes stay within the existing Next.js App Router static export setup. No hosting migration. No new pages.

```
app/
  layout.js          ← shared metadata, JSON-LD, og:image
  robots.ts          ← NEW: crawl rules + sitemap reference
  sitemap.ts         ← NEW: auto-generated URL list
  page.js            ← homepage H1 + light copy tuning
  about/page.js      ← metadata + canonical (already has metadata)
  contact/page.js    ← metadata + canonical
  contact/sales/     ← metadata + canonical
  changelog/page.js  ← ADD metadata export
lib/
  seo.js             ← NEW (optional): shared metadata helpers, JSON-LD builder
public/
  og-image.png       ← NEW: default social share image (1200×630)
```

### Out-of-repository scope

Documented in [Off-site action items](#off-site-action-items-outside-this-repository) below. No code changes required for those steps.

---

## In-repository changes

### 1. Crawl infrastructure

**`app/robots.ts`**

- Allow all user-agents on all public paths
- Reference sitemap: `https://polarisk.ai/sitemap.xml`
- Do not block `/_next/` (static assets; blocking is unnecessary for GitHub Pages export)

**`app/sitemap.ts`**

Include all public routes with `lastModified` and `changeFrequency`:

| URL | Priority |
|-----|----------|
| `https://polarisk.ai/` | 1.0 |
| `https://polarisk.ai/about/` | 0.8 |
| `https://polarisk.ai/contact/` | 0.7 |
| `https://polarisk.ai/contact/sales/` | 0.7 |
| `https://polarisk.ai/changelog/` | 0.6 |

Respect `trailingSlash: true` in `next.config.mjs` — all URLs must end with `/`.

### 2. Per-page metadata

Each route gets unique:

- `title`
- `description`
- `openGraph.url` (matching the page's canonical URL)
- `alternates.canonical` (absolute URL with trailing slash)

**Homepage (`app/page.js` or a small server wrapper if needed):**

- Title: `Polarisk | AI Compliance Intelligence for Financial Crime`
- Description: mention brand + category terms naturally (AML, transaction monitoring, financial crime compliance)

**Changelog (`app/changelog/page.js`):**

- Add `export const metadata` — currently inherits root layout defaults

**Root layout (`app/layout.js`):**

- Add default `openGraph.images` pointing to `/og-image.png`
- Add `twitter.card: summary_large_image`
- Keep `metadataBase: https://polarisk.ai`

### 3. Structured data (JSON-LD)

Inject in root layout via `<script type="application/ld+json">`:

**Organization**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Polarisk",
  "url": "https://polarisk.ai",
  "logo": "https://polarisk.ai/polarisk-logo.svg",
  "description": "AI operating system for financial crime compliance.",
  "sameAs": []
}
```

Populate `sameAs` with LinkedIn and Crunchbase URLs once off-site profiles are created (can be a follow-up deploy).

**WebSite**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Polarisk",
  "url": "https://polarisk.ai"
}
```

### 4. Homepage on-page signals

- Update H1 to include brand: e.g. **"Polarisk — AI Agents for Financial Crime"**
- Ensure "Polarisk" appears in the first visible paragraph or hero subtext
- Light copy tuning: weave "financial crime compliance", "AML", "transaction monitoring" into existing sections without keyword stuffing

### 5. About page on-page signals

- Ensure first paragraph leads with "Polarisk"
- No structural changes required

### 6. Social share image

- Add `public/og-image.png` (1200×630px) — logo + tagline on brand background
- Reference in layout `openGraph.images` and `twitter.images`

### 7. Footer placeholder links (optional, low priority)

Footer links for Privacy, Terms, Blog, Docs currently point to `#`. Either:

- Remove links until pages exist, or
- Defer — out of scope for this pass unless quick static pages are added later

---

## Off-site action items (outside this repository)

> **Reference document:** Complete these steps manually. Estimated time: 2–4 hours.  
> Do them in priority order. Check off each item when done.

### Priority 1 — Search engine tooling (do first, ~45 min)

#### 1.1 Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property** → choose **URL prefix**: `https://polarisk.ai`
3. Verify ownership using one of:
   - **DNS TXT record** (recommended — add via your domain registrar where `polarisk.ai` DNS is managed), or
   - **HTML file upload** (upload verification file to `public/` in repo and redeploy)
4. Once verified:
   - Go to **Sitemaps** → submit `https://polarisk.ai/sitemap.xml` (available after in-repo deploy)
   - Go to **URL Inspection** → enter `https://polarisk.ai/` → click **Request indexing**
   - Repeat URL inspection for `/about/`, `/contact/`, `/changelog/`
5. Enable email notifications for coverage issues

**Success check:** GSC → Pages → "Indexed" shows homepage within 1–2 weeks.

#### 1.2 Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site `https://polarisk.ai`
3. Verify via DNS or import from Google Search Console (fastest if GSC is already set up)
4. Submit sitemap: `https://polarisk.ai/sitemap.xml`

**Success check:** Bing → Sitemaps shows "Successfully submitted".

---

### Priority 2 — Entity profiles (~60 min)

Use this **canonical company description** everywhere (adapt length per platform):

> Polarisk is the AI operating system for financial crime compliance. We help financial institutions reduce false positives, accelerate AML and transaction monitoring investigations, and produce regulator-ready outcomes with configurable AI agents.

| Field | Value |
|-------|-------|
| Company name | Polarisk |
| Website | https://polarisk.ai |
| Category | FinTech / RegTech / Financial Crime Compliance |
| Contact email | contact@polarisk.ai |

#### 2.1 LinkedIn Company Page

1. Go to [LinkedIn](https://www.linkedin.com/company/setup/new/) → Create company page
2. Fill in:
   - **Name:** Polarisk
   - **Website:** `https://polarisk.ai`
   - **Industry:** Financial Services or Software Development
   - **Company size:** your actual size
   - **Logo:** use `polarisk-logo.svg` or a PNG export
   - **Tagline:** e.g. "AI Compliance Intelligence for Financial Crime"
   - **Description:** canonical description above
3. Publish the page
4. **Save the LinkedIn URL** — needed for JSON-LD `sameAs` in a follow-up repo deploy

**Success check:** Searching "Polarisk" on LinkedIn returns your company page.

#### 2.2 Crunchbase

1. Go to [Crunchbase](https://www.crunchbase.com) → Add organization (or claim if one exists)
2. Fill in:
   - **Name:** Polarisk
   - **Website:** `https://polarisk.ai`
   - **Categories:** FinTech, Artificial Intelligence, Compliance
   - **Description:** canonical description above
   - **Founded date, location, founders** — as accurate as possible
3. Submit for review
4. **Save the Crunchbase URL** — needed for JSON-LD `sameAs`

**Success check:** Crunchbase profile is live and links to `polarisk.ai`.

---

### Priority 3 — Consistency & monitoring (~30 min)

#### 3.1 Brand consistency audit

After creating profiles, verify these match everywhere:

- [ ] Company name is exactly **Polarisk** (not "Polarisk AI" or "Polarisk Inc" unless that's your legal name)
- [ ] Website URL is exactly `https://polarisk.ai` (no trailing path, no `www`)
- [ ] Logo is the same asset across LinkedIn, Crunchbase, and site favicon
- [ ] Description uses the same core messaging

#### 3.2 Follow-up repo task (after off-site profiles exist)

Once LinkedIn and Crunchbase URLs are known, update `sameAs` in JSON-LD and redeploy:

```json
"sameAs": [
  "https://www.linkedin.com/company/polarisk",
  "https://www.crunchbase.com/organization/polarisk"
]
```

Replace with your actual profile URLs.

#### 3.3 Ongoing monitoring (weekly, 10 min)

- [ ] GSC → Performance → check impressions/clicks for query "polarisk"
- [ ] GSC → Pages → confirm all 5 URLs are indexed
- [ ] GSC → Indexing → fix any "Crawled – currently not indexed" pages
- [ ] Manual Google search: `polarisk` (use incognito or a different device to avoid personalization)

---

### Optional — if time allows

| Action | Why | Effort |
|--------|-----|--------|
| **Product Hunt** — create maker/company profile linking to site | Backlink + discovery | 20 min |
| **Google Business Profile** — only if you have a public office address | Local/brand panel signal | 30 min |
| **G2 / Capterra listing** — when you have a public product offering | Category keyword signal | 1–2 hrs |
| **Press / podcast outreach** — 1 guest appearance or mention | High-value backlink | Variable |
| **X (Twitter) / company handle** — link to site in bio | `sameAs` signal | 15 min |

---

## What we are not doing

- No blog, glossary, case studies, or new landing pages
- No link-building outreach campaign
- No paid SEO tool subscriptions
- No migration off GitHub Pages
- No changes to `app.polarisk.ai` (product app is separate)

Category keywords (e.g. "AML compliance AI", "financial crime compliance software") will remain a **6–12 month** effort and will eventually require content or authoritative backlinks. This plan optimizes for brand search within current constraints.

---

## Success criteria

| Milestone | Target | Verification |
|-----------|--------|--------------|
| `robots.txt` and `sitemap.xml` live | After next deploy | `curl -sI https://polarisk.ai/robots.txt` → 200 |
| GSC property verified | Within 1 day of off-site work | GSC dashboard accessible |
| Sitemap submitted | Same day as GSC setup | GSC → Sitemaps → Success |
| Homepage indexed | 1–2 weeks | GSC → URL Inspection → "URL is on Google" |
| All 5 pages indexed | 2–4 weeks | GSC → Pages |
| "polarisk" on page 1 | 4–8 weeks | Manual search + GSC performance |
| Category query impressions | 6+ months | GSC → Queries (low volume expected) |

---

## Error handling & edge cases

| Scenario | Action |
|----------|--------|
| GSC shows "Discovered – currently not indexed" | Request indexing manually; check robots.txt is not blocking |
| Another site ranks for "polarisk" | Strengthen brand signals (LinkedIn, Crunchbase, `sameAs`); consider trademark if applicable |
| Sitemap 404 after deploy | Confirm `app/sitemap.ts` exists and GitHub Pages workflow completed |
| `www.polarisk.ai` vs `polarisk.ai` | `www` already 301s to apex — set GSC property on `https://polarisk.ai` only |
| Changelog is client component | Metadata export works in a separate `layout.js` for `/changelog` if needed |

---

## Implementation order

1. **In-repo:** robots.ts, sitemap.ts, metadata, JSON-LD, H1, og-image → deploy
2. **Off-site:** GSC + Bing → submit sitemap → request indexing
3. **Off-site:** LinkedIn + Crunchbase profiles
4. **In-repo follow-up:** Add `sameAs` URLs to JSON-LD → deploy
5. **Monitor:** Weekly GSC check for 8 weeks

---

## References

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js robots.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Next.js sitemap.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Organization](https://schema.org/Organization)
