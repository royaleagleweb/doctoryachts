# Deploy Doctor Yachts on Cloudflare Workers & Pages

This project is configured for **@opennextjs/cloudflare** (not static HTML).

## A. Deploy from your PC (fastest first launch)

```powershell
cd C:\Users\rbach\doctoryachts
npx wrangler login
npm run deploy
```

- Browser opens → log into Cloudflare → approve Wrangler.
- After deploy you get a URL like `https://doctoryachts.<account>.workers.dev`.

## B. Connect GitHub in Cloudflare dashboard (auto-deploy)

1. Push this repo to GitHub (`main`).
2. Cloudflare dashboard → **Workers & Pages**.
3. Open your project (or **Create** → **Import a repository** → `doctoryachts`).
4. **Build settings** (critical — use these, not default “Next.js static”):

| Setting | Value |
|--------|--------|
| **Build command** | `npx opennextjs-cloudflare build` |
| **Deploy command** | `npx wrangler deploy` |
| **Root directory** | `/` (project root) |
| **Node version** | `20` or `22` |

5. **Build variables and secrets** (optional but recommended):

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://doctoryachts.com` (or workers.dev URL until domain is live) |

6. Save → **Deploy**.

If the wizard only shows “Pages” static build and the site fails, create/use a **Worker** project with Git integration (Workers Builds), not a static-only Pages static export.

## C. Attach Hostinger domain

### Option 1 — Cloudflare nameservers (best)

1. Cloudflare → **Websites** → add `doctoryachts.com` if needed.
2. Copy the 2 Cloudflare nameservers.
3. Hostinger → **Domains** → **Nameservers** → custom → paste Cloudflare NS.
4. Wait until domain is **Active** in Cloudflare.
5. Workers project → **Settings → Domains & Routes** → **Add** `doctoryachts.com` and `www.doctoryachts.com`.
6. If email is on Hostinger, re-add **MX** records in Cloudflare DNS from Hostinger’s email settings.

### Option 2 — Keep Hostinger nameservers

In Hostinger DNS, add records Cloudflare shows for the Worker custom domain (often CNAME to `*.workers.dev` or similar). Prefer Option 1.

## D. After go-live

1. Set `NEXT_PUBLIC_SITE_URL=https://doctoryachts.com` and redeploy.
2. Google Search Console → submit `https://doctoryachts.com/sitemap.xml`.
3. Test: home, `/services`, `/book`, phone links.

## Local commands

| Command | What it does |
|---------|----------------|
| `npm run dev` | Normal Next.js dev |
| `npm run preview` | Build + run in Workers runtime locally |
| `npm run deploy` | Build + deploy to Cloudflare |

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build fails on `next/image` | Ensure Node 20+; rebuild |
| “nodejs_compat” error | Keep `compatibility_flags` in `wrangler.jsonc` |
| Static site with blank/errors | Wrong build command — use OpenNext, not `next export` |
| Old site on domain | DNS still on Hostinger parking — switch NS or A/CNAME |
| Email breaks | Restore Hostinger MX in Cloudflare DNS |
