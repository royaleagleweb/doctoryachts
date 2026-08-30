# Doctor Yachts

High-end website for **Doctor Yachts** — the mechanic for boats and yachts.

Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

- Luxury marketing site: Home, Services, About, Gallery, Contact
- Multi-step **online booking** (`/book`) with priority/emergency option
- Contact form + booking APIs (log to server console in v1)
- Mobile-responsive navigation and premium navy / brass brand system

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## SEO (organic search)

The site is optimized for high-intent marine keywords:

| Target keywords (from Drew's Marine SEO map) | Landing page |
|----------------------------------------------|--------------|
| boat repair, boat maintenance + FTL/Pompano | `/` |
| marine engine repair, inboard/outboard | `/services/marine-engine-repair` |
| boat electrical repairs | `/services/electrical-repairs` |
| cooling system repairs | `/services/cooling-system-repairs` |
| boat diagnostics | `/services/boat-diagnostics` |
| boat maintenance | `/services/boat-maintenance` |
| boat plumbing repairs | `/services/plumbing-repairs` |
| mobile / dockside boat repair | `/services/mobile-boat-repair` |
| Fort Lauderdale boat repair | `/locations/fort-lauderdale` |
| Pompano Beach mobile boat repair | `/locations/pompano-beach` |

Competitor SEO notes: `docs/seo-drews-marine.md`

Also included:

- Keyword-rich titles, metas, H1s, and internal links
- `sitemap.xml` + `robots.txt`
- JSON-LD: LocalBusiness-style, Service, FAQ, Breadcrumb
- FAQ blocks for featured-snippet potential

### Local SEO (South Florida multi-city)

| City | URL |
|------|-----|
| Hub | `/locations` |
| Fort Lauderdale | `/locations/fort-lauderdale` |
| Miami / Miami Beach | `/locations/miami` |
| Palm Beach County | `/locations/palm-beach` |

**After deploy:**

1. Set `NEXT_PUBLIC_SITE_URL` to your real domain (see `.env.example`)
2. Update phone, email in `src/lib/site.ts`
3. Submit sitemap in [Google Search Console](https://search.google.com/search-console): `https://yourdomain.com/sitemap.xml`
4. Request indexing for `/`, each `/services/*`, and each `/locations/*` page
5. Create a **Google Business Profile** for Fort Lauderdale (primary) and mention service areas Miami + Palm Beach

## Customize

| What | Where |
|------|--------|
| Business name, phone, email, hours, **city/service area** | `src/lib/site.ts` |
| Services + SEO copy/keywords | `src/lib/services.ts` |
| Site URL for canonicals/sitemap | `NEXT_PUBLIC_SITE_URL` |
| Brand colors | `src/app/globals.css` |
| Gallery photos | Add images under `public/gallery/` and update `src/app/gallery/page.tsx` |

## Booking & contact (next step)

API routes currently validate input and log requests:

- `POST /api/book` — service booking
- `POST /api/contact` — contact messages

To go live with real notifications, connect these routes to email (e.g. Resend), a CRM, or Google Calendar.

## Deploy

Deploy easily on [Vercel](https://vercel.com) from the GitHub repo:

`https://github.com/royaleagleweb/doctoryachts`

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4
- TypeScript
