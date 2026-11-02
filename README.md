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
| Google Analytics 4 measurement ID | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| Brand colors | `src/app/globals.css` |
| Gallery photos | Add images under `public/gallery/` and update `src/app/gallery/page.tsx` |

## Analytics

Google Analytics 4 stays off until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set to a measurement ID such as `G-XXXXXXXX`. With the variable unset, pages render no analytics tag.

Set it as a **build** variable on Cloudflare (Workers & Pages → the `doctoryachts` project → Settings → Variables and Secrets, same place as `NEXT_PUBLIC_SITE_URL`), then redeploy. Next.js inlines `NEXT_PUBLIC_*` at build time, so a runtime-only Worker secret will not turn the tag on.

In the GA4 web stream, turn off Enhanced measurement → **Page changes based on browser history events**. The site already sends a page view on each client-side route change.

## Booking & contact

`POST /api/book` and `POST /api/contact` email **roy@royaleagleweb.com** and **info@doctoryachts.com** via Resend. The API returns `ok: true` only when at least one inbox is accepted. If delivery fails, the forms show an error and ask the customer to call **(954) 770-1910**.

Set the Cloudflare Worker secret `RESEND_API_KEY` and verify `doctoryachts.com` in Resend. See `docs/cloudflare-deploy.md`.

## Deploy

Deploy easily on [Vercel](https://vercel.com) from the GitHub repo:

`https://github.com/royaleagleweb/doctoryachts`

## Stack

- Next.js App Router
- React 19
- Tailwind CSS 4
- TypeScript
