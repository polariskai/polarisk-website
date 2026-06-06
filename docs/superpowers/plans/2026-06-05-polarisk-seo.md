# Polarisk SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix critical on-site SEO gaps (robots, sitemap, metadata, structured data, brand signals) on the existing 5-page Polarisk marketing site.

**Architecture:** Add Next.js App Router metadata files (`robots.ts`, `sitemap.ts`) and a small `lib/seo.js` helper for shared constants and JSON-LD. Update root layout for global metadata + structured data. Add route-level metadata via server `layout.js` files where pages are client components. Tune visible copy on homepage and about page only.

**Tech Stack:** Next.js (App Router, `output: "export"`), JavaScript, GitHub Pages static deploy

**Spec reference:** `docs/superpowers/specs/2026-06-05-polarisk-seo-design.md`  
**Off-site checklist:** Same spec, section "Off-site action items" — do after deploy.

---

## File map

| File | Action | Responsibility |
|------|--------|----------------|
| `lib/seo.js` | Create | `SITE_URL`, metadata builder, JSON-LD builder |
| `app/robots.ts` | Create | Crawl rules + sitemap pointer |
| `app/sitemap.ts` | Create | All 5 public URLs |
| `app/layout.js` | Modify | Global metadata, OG image, JSON-LD script |
| `app/about/page.js` | Modify | Canonical metadata + first-paragraph copy |
| `app/contact/page.js` | Modify | Canonical + OG url metadata |
| `app/contact/sales/layout.js` | Modify | Canonical metadata (consolidate) |
| `app/contact/sales/page.js` | Modify | Remove duplicate metadata export |
| `app/changelog/layout.js` | Create | Metadata for client-only changelog page |
| `app/page.js` | Modify | H1 brand name + hero copy tuning |
| `public/og-image.png` | Create | 1200×630 social share image |

---

### Task 1: Shared SEO helpers

**Files:**
- Create: `lib/seo.js`

- [ ] **Step 1: Create `lib/seo.js`**

```javascript
export const SITE_URL = "https://polarisk.ai";

export const DEFAULT_DESCRIPTION =
  "Polarisk is the AI operating system for financial crime compliance. Reduce AML false positives, accelerate transaction monitoring investigations, and deliver regulator-ready outcomes.";

/** @param {string} path - e.g. "/about/" */
export function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} opts.path - trailing slash, e.g. "/about/"
 */
export function pageMetadata({ title, description, path }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Polarisk",
      type: "website",
    },
  };
}

/** @param {string[]} [sameAs] */
export function buildStructuredData(sameAs = []) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Polarisk",
      url: SITE_URL,
      logo: absoluteUrl("/polarisk-logo.svg"),
      description:
        "AI operating system for financial crime compliance.",
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Polarisk",
      url: SITE_URL,
    },
  ];
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/seo.js
git commit -m "feat(seo): add shared SEO helpers and structured data builder"
```

---

### Task 2: Crawl infrastructure

**Files:**
- Create: `app/robots.ts`
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create `app/robots.ts`**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://polarisk.ai/sitemap.xml",
  };
}
```

- [ ] **Step 2: Create `app/sitemap.ts`**

```typescript
import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact/sales/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/changelog/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
```

- [ ] **Step 3: Build and verify robots + sitemap are generated**

Run: `npm run build`

Expected: `out/robots.txt` and `out/sitemap.xml` exist.

Run: `grep -l "sitemap" out/robots.txt && head -5 out/sitemap.xml`

Expected: robots.txt contains `Sitemap: https://polarisk.ai/sitemap.xml`; sitemap.xml lists 5 `<url>` entries.

- [ ] **Step 4: Commit**

```bash
git add app/robots.ts app/sitemap.ts
git commit -m "feat(seo): add robots.txt and sitemap.xml generation"
```

---

### Task 3: Root layout metadata and JSON-LD

**Files:**
- Modify: `app/layout.js`

- [ ] **Step 1: Update imports and metadata in `app/layout.js`**

Replace the existing `metadata` export and add JSON-LD in the layout body. Full updated file:

```javascript
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { buildStructuredData, DEFAULT_DESCRIPTION, pageMetadata } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  ...pageMetadata({
    title: "Polarisk | AI Compliance Intelligence for Financial Crime",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  metadataBase: new URL("https://polarisk.ai"),
  openGraph: {
    ...pageMetadata({
      title: "Polarisk | AI Compliance Intelligence for Financial Crime",
      description: DEFAULT_DESCRIPTION,
      path: "/",
    }).openGraph,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Polarisk — AI Compliance Intelligence for Financial Crime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polarisk | AI Compliance Intelligence for Financial Crime",
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const structuredData = buildStructuredData();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6FLCJVJE2L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6FLCJVJE2L');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Build and verify homepage meta in static output**

Run: `npm run build && grep -o 'application/ld+json' out/index.html | head -1`

Expected: `application/ld+json` appears in built HTML.

Run: `grep -o 'Polarisk | AI Compliance Intelligence' out/index.html | head -1`

Expected: updated title present.

- [ ] **Step 3: Commit**

```bash
git add app/layout.js
git commit -m "feat(seo): add global metadata, OG image refs, and JSON-LD"
```

---

### Task 4: Social share image

**Files:**
- Create: `public/og-image.png`

- [ ] **Step 1: Create `public/og-image.png`**

Create a 1200×630 PNG with:
- Background: `#080c14` (matches site)
- Centered Polarisk logo (`public/polarisk-logo.svg` exported to PNG or use `polarisk-logo-blue.svg`)
- Tagline below logo: "AI Compliance Intelligence for Financial Crime"

If no design tool is available, generate via script (requires ImageMagick):

```bash
convert -size 1200x630 xc:'#080c14' \
  public/polarisk-logo-blue.svg -gravity center -composite \
  -gravity south -fill white -pointsize 36 -annotate +0+80 \
  'AI Compliance Intelligence for Financial Crime' \
  public/og-image.png
```

If ImageMagick is unavailable, export manually from any editor and save to `public/og-image.png`.

- [ ] **Step 2: Verify file exists**

Run: `file public/og-image.png`

Expected: `PNG image data, 1200 x 630` (dimensions may vary slightly; aim for 1200×630).

- [ ] **Step 3: Commit**

```bash
git add public/og-image.png
git commit -m "feat(seo): add default Open Graph share image"
```

---

### Task 5: Per-page metadata (about, contact, sales, changelog)

**Files:**
- Modify: `app/about/page.js`
- Modify: `app/contact/page.js`
- Modify: `app/contact/sales/layout.js`
- Modify: `app/contact/sales/page.js`
- Create: `app/changelog/layout.js`

- [ ] **Step 1: Update `app/about/page.js` metadata**

Replace the existing `export const metadata` block:

```javascript
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "About | Polarisk",
  description:
    "Polarisk is building the intelligence layer for financial crime compliance — fewer false positives, faster AML investigations, regulator-ready decisions.",
  path: "/about/",
});
```

- [ ] **Step 2: Update `app/contact/page.js` metadata**

Replace the existing `export const metadata` block:

```javascript
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Polarisk",
  description:
    "Get in touch with Polarisk for sales, product demos, support, and general questions about financial crime compliance.",
  path: "/contact/",
});
```

- [ ] **Step 3: Update `app/contact/sales/layout.js`**

Replace entire file:

```javascript
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Contact sales | Polarisk",
  description:
    "Talk to the Polarisk team about pilots, enterprise needs, and product demos for AML and transaction monitoring.",
  path: "/contact/sales/",
});

export default function ContactSalesLayout({ children }) {
  return children;
}
```

- [ ] **Step 4: Remove duplicate metadata from `app/contact/sales/page.js`**

Delete lines 4–8 (`export const metadata = { ... };`) from `app/contact/sales/page.js`. Metadata now lives only in `layout.js`.

- [ ] **Step 5: Create `app/changelog/layout.js`**

```javascript
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Changelog | Polarisk",
  description:
    "Product updates and release notes from Polarisk — AI compliance intelligence for financial crime teams.",
  path: "/changelog/",
});

export default function ChangelogLayout({ children }) {
  return children;
}
```

- [ ] **Step 6: Build and verify per-page canonical URLs**

Run: `npm run build`

Run: `grep -o 'rel="canonical" href="[^"]*"' out/about/index.html out/changelog/index.html`

Expected:
- `out/about/index.html` contains `href="https://polarisk.ai/about/"`
- `out/changelog/index.html` contains `href="https://polarisk.ai/changelog/"`

- [ ] **Step 7: Commit**

```bash
git add app/about/page.js app/contact/page.js app/contact/sales/layout.js app/contact/sales/page.js app/changelog/layout.js
git commit -m "feat(seo): add per-page canonical URLs and unique metadata"
```

---

### Task 6: Homepage on-page brand and category signals

**Files:**
- Modify: `app/page.js` (lines ~644–730)

- [ ] **Step 1: Update homepage H1 to include brand name**

In `app/page.js`, replace the `<h1>` block (lines 644–661) with:

```jsx
        <h1
          className="load-in relative mb-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight"
          style={{ "--enter-delay": "280ms", lineHeight: 1.08 }}
        >
          <span className="text-white">Polarisk — AI Agents for</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Financial Crime
          </span>
        </h1>
```

- [ ] **Step 2: Update hero subtext with category terms**

Replace the paragraph at lines 727–730:

```jsx
          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-white/45">
            Polarisk helps compliance teams detect financial crime risk across
            AML, KYC, and transaction monitoring — work that is{" "}
            <span className="text-white/70">humanly impossible</span> at scale.
          </p>
```

- [ ] **Step 3: Build and verify H1 in static output**

Run: `npm run build && grep -o 'Polarisk — AI Agents for' out/index.html | head -1`

Expected: `Polarisk — AI Agents for`

- [ ] **Step 4: Commit**

```bash
git add app/page.js
git commit -m "feat(seo): add Polarisk brand to homepage H1 and hero copy"
```

---

### Task 7: About page first-paragraph signal

**Files:**
- Modify: `app/about/page.js` (lines ~69–73)

- [ ] **Step 1: Lead first paragraph with Polarisk**

Replace the header paragraph:

```jsx
          <p className="mt-8 max-w-[580px] text-[17px] font-light leading-[1.75] text-white/50">
            Polarisk is building the infrastructure for programmable trust in
            financial crime compliance. Today, that trust is assembled by hand —
            one analyst, one alert, one decision at a time.
          </p>
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.js
git commit -m "feat(seo): lead about page intro with Polarisk brand"
```

---

### Task 8: End-to-end verification

**Files:** None (verification only)

- [ ] **Step 1: Full production build**

Run: `npm run build`

Expected: Exit code 0, no errors.

- [ ] **Step 2: Verify all SEO artifacts in `out/`**

Run:
```bash
test -f out/robots.txt && test -f out/sitemap.xml && echo "OK: crawl files exist"
grep -c "<url>" out/sitemap.xml
grep "Organization" out/index.html
grep 'rel="canonical"' out/about/index.html out/contact/index.html out/changelog/index.html
```

Expected:
- `OK: crawl files exist`
- `5` (five URLs in sitemap)
- Organization JSON-LD in homepage HTML
- Canonical link in each subpage HTML

- [ ] **Step 3: Deploy checklist (manual)**

After pushing to `main` and GitHub Pages deploy completes, run:

```bash
curl -sI https://polarisk.ai/robots.txt | head -1
curl -sI https://polarisk.ai/sitemap.xml | head -1
curl -s https://polarisk.ai/robots.txt
```

Expected: Both return `HTTP/2 200`; robots.txt contains `Sitemap: https://polarisk.ai/sitemap.xml`.

- [ ] **Step 4: Begin off-site checklist**

Open `docs/superpowers/specs/2026-06-05-polarisk-seo-design.md` → section **Off-site action items** and work through Priority 1 (GSC + Bing) immediately after deploy.

---

### Task 9 (follow-up, after off-site profiles exist): `sameAs` URLs

**Files:**
- Modify: `app/layout.js`

> **When:** After LinkedIn and Crunchbase profiles are live. Skip until then.

- [ ] **Step 1: Add profile URLs to JSON-LD**

In `app/layout.js`, replace:

```javascript
const structuredData = buildStructuredData();
```

with (use your actual profile URLs):

```javascript
const structuredData = buildStructuredData([
  "https://www.linkedin.com/company/YOUR-SLUG",
  "https://www.crunchbase.com/organization/YOUR-SLUG",
]);
```

- [ ] **Step 2: Build, deploy, commit**

```bash
npm run build
git add app/layout.js
git commit -m "feat(seo): add LinkedIn and Crunchbase sameAs to structured data"
```

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| `app/robots.ts` | Task 2 |
| `app/sitemap.ts` | Task 2 |
| Per-page metadata + canonical | Task 5 |
| Changelog metadata | Task 5 (layout.js) |
| JSON-LD Organization + WebSite | Task 3 |
| Homepage H1 brand | Task 6 |
| Homepage copy tuning | Task 6 |
| About first paragraph | Task 7 |
| `og:image` | Task 3 + Task 4 |
| `twitter:card` large image | Task 3 |
| `sameAs` follow-up | Task 9 |
| Off-site checklist | Spec doc (not in-repo) |
| Footer `#` links | Out of scope per spec |

---

## What is explicitly out of scope

- New pages, blog, glossary
- Footer link fixes
- Google Search Console / LinkedIn / Crunchbase setup (see spec off-site section)
- Link-building or paid SEO tools
