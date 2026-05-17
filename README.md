# Metamorphosis MV — Website

**Live site:** [mv.metamorphosis.com.bd](https://mv.metamorphosis.com.bd)  
**GitHub:** [github.com/Alimuzzamannayan/MM_Maldive](https://github.com/Alimuzzamannayan/MM_Maldive)  
**Deployed on:** Vercel (auto-deploy on push to `main`)

Multi-service business website for Metamorphosis MV — a Maldives-based company offering Odoo ERP implementation, MIRA-compliant accounting, expat/visa services, app development, and business consulting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | JavaScript (no TypeScript) |
| Styling | Plain CSS (`styles/globals.css`) + inline styles |
| Fonts | `next/font/google` — Montserrat, Open Sans, JetBrains Mono |
| Blog | Markdown (`.md`) + `gray-matter` + `remark` |
| Email | Nodemailer via Zoho SMTP |
| Analytics | Vercel Analytics |
| Ad Tracking | GTM + Meta Pixel + Microsoft Clarity + Microsoft UET (env vars) |
| Deployment | Vercel (GitHub integration) |
| SEO | JSON-LD schema, sitemap.xml, robots.txt, llms.txt |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Alimuzzamannayan/MM_Maldive.git
cd MM_Maldive
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Where to get it |
|---|---|---|
| `SMTP_HOST` | Zoho SMTP host | Zoho Mail settings |
| `SMTP_PORT` | SMTP port (587) | Zoho Mail settings |
| `SMTP_USER` | Zoho email address | Zoho Mail settings |
| `SMTP_PASS` | Zoho app password | Zoho Mail → App Passwords |
| `SMTP_TO` | Recipient email for contact form | Your choice |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | [tagmanager.google.com](https://tagmanager.google.com) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID | [Meta Events Manager](https://business.facebook.com/events-manager) |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID | [clarity.microsoft.com](https://clarity.microsoft.com) |
| `NEXT_PUBLIC_MICROSOFT_UET_ID` | Microsoft Advertising UET tag ID | [ads.microsoft.com](https://ads.microsoft.com) |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | Google Ads conversion label | Google Ads → Conversions |

Tracking tags are **zero-impact when env vars are absent** — the site builds and runs without them.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

Always run `npm run build` locally before pushing — this catches Vercel build failures before they happen.

---

## Project Structure

```
mm-maldive-next/
├── app/                          # Next.js App Router pages
│   ├── layout.jsx                # Root layout — fonts, metadata, GTM/pixel tags
│   ├── page.jsx                  # Homepage
│   ├── about/                    # About page
│   ├── contact/                  # Contact page (with ContactForm)
│   ├── services/                 # Service overview + 5 service detail pages
│   │   ├── odoo-erp/
│   │   ├── accounting-mira/
│   │   ├── business-consulting/
│   │   ├── app-development/
│   │   └── expat-visa/
│   ├── blog/                     # Blog index + [slug] dynamic route
│   ├── industries/[slug]/        # 5 industry landing pages (programmatic SEO)
│   ├── compare/[slug]/           # 4 comparison pages (programmatic SEO)
│   ├── maldives/[slug]/          # 3 location pages (programmatic SEO)
│   ├── case-studies/             # Client case studies index
│   ├── success-stories/          # Individual success story pages
│   │   ├── grameen-danone/
│   │   └── idiya/
│   ├── team/                     # Full team page (27 members, 7 sections)
│   ├── odoo-certified-consultants/  # 7 certified Odoo consultants
│   ├── ads/                      # Generic ad landing page (noindex)
│   ├── ads-google/               # Google Ads landing page (noindex)
│   ├── ads-meta/                 # Meta/Facebook Ads landing page (noindex)
│   ├── ads-microsoft/            # Microsoft Ads landing page (noindex)
│   ├── seo-audit/                # Free SEO audit lead magnet
│   ├── thank-you/                # Post-conversion page (fires all pixel events)
│   ├── privacy-policy/
│   ├── not-found.jsx             # Custom 404
│   ├── sitemap.js                # Dynamic sitemap (auto-includes all routes)
│   ├── robots.js
│   └── api/contact/              # Contact form API route (Nodemailer/Zoho)
│
├── components/
│   ├── ads/
│   │   └── AdLandingLayout.jsx   # Shared ad landing component (no nav distraction)
│   ├── blog/
│   │   ├── PostCard.jsx
│   │   └── PostLayout.jsx
│   ├── contact/
│   │   ├── ContactForm.jsx       # Main contact form (fires conversion events)
│   │   ├── ContactHero.jsx
│   │   └── ContactLocations.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── OdooStrip.jsx
│   │   ├── Why.jsx
│   │   ├── FAQ.jsx
│   │   ├── ERPRescue.jsx
│   │   ├── CTA.jsx
│   │   └── TrustedBy.jsx         # Scrolling client logo marquee + media badges
│   ├── layout/
│   │   ├── Nav.jsx               # Sticky nav with mobile hamburger
│   │   ├── Footer.jsx
│   │   ├── WhatsAppFAB.jsx       # Floating WhatsApp + Viber buttons (sitewide)
│   │   └── TrackingScripts.jsx   # GTM, Meta Pixel, Clarity, UET + fireLeadEvent()
│   ├── programmatic/
│   │   └── LandingPage.jsx       # Shared template for programmatic SEO pages
│   ├── providers/
│   │   └── AppProvider.jsx       # React context (cursor hover state)
│   └── ui/                       # Reusable UI primitives
│       ├── Aurora.jsx
│       ├── MagneticButton.jsx
│       ├── CountUp.jsx
│       ├── WaterText.jsx
│       ├── LivePill.jsx
│       ├── PartnerBadges.jsx
│       ├── ServiceExplorer.jsx
│       ├── Reveal.jsx
│       ├── Tag.jsx
│       └── CursorHalo.jsx
│
├── lib/
│   ├── schema.js         # JSON-LD schema builders (7 types)
│   ├── tokens.js         # Design tokens (colours) + SERVICES config
│   ├── faq-data.js       # Homepage FAQ data (shared with FAQPage schema)
│   ├── pages-config.js   # Config for all programmatic SEO pages
│   └── blog.js           # Blog helpers — gray-matter + remark
│
├── content/
│   └── blog/             # Markdown blog posts
│       ├── gst-filing-maldives-guide.md
│       ├── odoo-erp-for-maldives-resorts.md
│       ├── dvr-work-permit-maldives-guide.md
│       ├── best-accounting-software-maldives.md
│       ├── company-registration-maldives.md
│       ├── odoo-vs-quickbooks-maldives.md
│       ├── guesthouse-management-maldives.md
│       └── mira-income-tax-maldives.md
│
├── public/
│   ├── assets/
│   │   ├── logo-full.png
│   │   ├── logo-full-light.png
│   │   ├── logo-mark.png
│   │   ├── odoo-silver-partner.png
│   │   ├── odoo-app-1.webp … odoo-app-6.webp
│   │   ├── clients/              # 50 client logo images
│   │   ├── media/                # 14 press/media badge images
│   │   └── team/                 # 30 team member photos
│   └── llms.txt                  # AI crawler description file
│
├── styles/
│   └── globals.css       # All CSS — design system, components, animations
│
├── .env.example          # Template for required environment variables
├── next.config.mjs
└── package.json
```

---

## Key Patterns

### Adding a New Page

Create `app/your-page/page.jsx`. Export `metadata` for SEO:

```jsx
export const metadata = {
  title: 'Page Title | Metamorphosis MV',
  description: 'Page description.',
  alternates: { canonical: 'https://mv.metamorphosis.com.bd/your-page' },
};

export default function YourPage() {
  return <main>...</main>;
}
```

### Adding a Blog Post

Create `content/blog/your-slug.md` with frontmatter:

```markdown
---
title: "Post Title"
excerpt: "One sentence summary shown on the blog index card."
date: "2026-05-17"
category: "Tax & Compliance"
---

## Your content here
```

The post automatically appears at `/blog/your-slug` and in the sitemap. No code changes needed.

### Adding a Programmatic SEO Page

Open `lib/pages-config.js` and add an object to `INDUSTRY_PAGES`, `COMPARE_PAGES`, or `LOCATION_PAGES`. The dynamic route and sitemap pick it up automatically — no other files need touching.

### JSON-LD Schema Markup

Use helpers from `lib/schema.js`:

```jsx
import { serviceSchema, breadcrumbSchema, jsonLd } from '../../lib/schema';

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: jsonLd(serviceSchema({ name, description, url, serviceType }))
  }}
/>
```

Available builders: `localBusinessSchema`, `organizationSchema`, `websiteSchema`, `serviceSchema`, `faqSchema`, `breadcrumbSchema`, `blogPostSchema`.

### Conversion Tracking

`fireLeadEvent` fires GTM dataLayer + Meta Pixel + Microsoft UET simultaneously:

```js
import { fireLeadEvent } from '../layout/TrackingScripts';

fireLeadEvent({ content_name: 'Contact Form', value: 0, currency: 'USD' });
```

Call this immediately before redirecting to `/thank-you`.

### Design Tokens

All brand colours are in `lib/tokens.js`:

```js
import { TOKENS } from '../../lib/tokens';
// TOKENS.navy   → #06102B
// TOKENS.teal   → #00E5C0
// TOKENS.body   → #495057
```

### Client Components

Any component using `useState`, `useEffect`, `onClick`, `onMouseEnter`, or other browser APIs **must** have `'use client';` as the first line. Server components cannot have event handlers. This is the most common build error — check this first when a Vercel build fails while local build passes.

---

## Deployment

Vercel auto-deploys on every push to `main`. No manual steps required.

**Manual push:**

```bash
git add .
git commit -m "your message"
git push origin main
```

**Set environment variables in Vercel:**  
Vercel Dashboard → Project → Settings → Environment Variables  
Add all variables from `.env.example`.

**Sitemap:** `https://mv.metamorphosis.com.bd/sitemap.xml`  
Submit to Google Search Console and Bing Webmaster Tools after major content changes.

---

## SEO Architecture

| Feature | Implementation |
|---|---|
| Schema markup | LocalBusiness, Organization, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting |
| Canonical URLs | Every page via `metadata.alternates.canonical` |
| hreflang | `en` declared in root layout `<head>` |
| OG / Twitter cards | Root layout + per-page overrides |
| Dynamic sitemap | `app/sitemap.js` — auto-includes all routes and blog posts |
| AI crawler file | `public/llms.txt` |
| Programmatic SEO | 12 pages across 3 dynamic route groups |
| Blog | 8 long-form posts targeting Maldives-specific keywords |

---

## Ad Landing Pages

All `/ads-*` pages are `robots: noindex`. Use them as destination URLs in paid campaigns only — never link to them from the main site navigation.

| URL | Campaign Type |
|---|---|
| `/ads-google` | Google Search Ads — ERP keyword targeting |
| `/ads-meta` | Facebook / Instagram Ads — pain-point copy |
| `/ads-microsoft` | Microsoft / Bing Ads — enterprise tone |
| `/ads` | Generic fallback for any campaign |
| `/seo-audit` | Lead magnet — free audit offer |

All share `AdLandingLayout`: logo-only header (no nav links), urgency bar, hero + inline form, stats strip, testimonials, minimal footer.

---

## Common Issues

| Problem | Cause | Fix |
|---|---|---|
| Vercel build fails, local passes | Missing `'use client'` on a component with event handlers | Add `'use client';` as the first line |
| ESLint blocks build | ESLint 9 incompatibility with eslint-config-next | Already bypassed via `eslint: { ignoreDuringBuilds: true }` in `next.config.mjs` |
| Contact form not sending | Missing SMTP env vars in Vercel | Add `SMTP_*` variables in Vercel dashboard |
| Tracking pixels not firing | Missing `NEXT_PUBLIC_*` env vars | Add pixel IDs in Vercel dashboard, redeploy |
| Images missing on deployed site | Image file not committed to git | Run `git add public/assets/...` and push |

---

## Contact & Ownership

**Company:** Metamorphosis MV  
**Location:** Malé, Maldives  
**Email:** marketing@metamorphosis.com.bd  
**Phone:** +960 741 7734  
**Global site:** [metamorphosis.com.bd](https://metamorphosis.com.bd)
