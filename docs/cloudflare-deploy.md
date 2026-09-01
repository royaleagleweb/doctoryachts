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

5. **Build variables and secrets**:

| Name | Value | Where |
|------|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://doctoryachts.com` | Build + Worker var |
| `RESEND_API_KEY` | Resend API key (`re_…`) | **Worker secret (required for lead email)** |
| `RESEND_FROM` | `Doctor Yachts <info@doctoryachts.com>` | Worker var (already in `wrangler.jsonc`) |

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

## D. Lead email (Resend) — required or forms will show an error

Booking, contact, and free-estimate posts call Resend from the Worker. FormSubmit from Workers was returning `delivered: 0` while the API still said `ok: true`. That is no longer allowed: if mail fails, the API returns **502** and the form tells the customer to call **(954) 770-1910**.

### 1. Resend account + domain

1. Create an account at [resend.com](https://resend.com).
2. **Domains → Add `doctoryachts.com`** and add the DNS records Resend shows (SPF, DKIM, optionally DMARC).
3. Wait until the domain is **Verified**.
4. API Keys → create a key with sending permission.

Until the domain verifies you can temporarily send from Resend’s onboarding address by changing the Worker var:

```
RESEND_FROM=Doctor Yachts <beth.t@example.com>
```

Production should stay `Doctor Yachts <info@doctoryachts.com>` so replies look like the shop. Recipients are hard-coded: **roy@royaleagleweb.com** and **info@doctoryachts.com** (not office@).

### 2. Put the secret on the Worker (runtime, not just build)

Git deploys do **not** pick up a laptop `.env`. Add the secret on the live Worker:

**Dashboard (Workers Builds / Git):**

1. Cloudflare → **Workers & Pages** → `doctoryachts`
2. **Settings → Variables and Secrets**
3. **Add** → type **Secret** → name `RESEND_API_KEY` → paste `re_…` → Save
4. Redeploy so the new secret is bound

**CLI (same Worker secrets):**

```powershell
npx wrangler secret put RESEND_API_KEY
```

Optional from-address override (not a secret):

```powershell
npx wrangler secret put RESEND_FROM
```

or edit `vars.RESEND_FROM` in `wrangler.jsonc`.

### 3. Confirm delivery

```powershell
curl -s -X POST https://doctoryachts.com/api/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"Test Roy","email":"you@example.com","message":"Resend smoke test"}'
```

Expect `{ "ok": true, "notify": { "delivered": 2, "failed": 0, "deliveredAll": true } }` and mail in both inboxes. If the secret is missing or Resend rejects the from-domain, expect **HTTP 502** and `ok: false` — that is intentional.

If email on Hostinger breaks after moving DNS to Cloudflare, restore **MX** records (see option 1 above). Resend only sends; it does not replace inbox MX.

## E. After go-live

1. Set `NEXT_PUBLIC_SITE_URL=https://doctoryachts.com` and redeploy.
2. Google Search Console → submit `https://doctoryachts.com/sitemap.xml` (Google / Gemini).
3. Ping IndexNow so Bing (and ChatGPT search) see key URLs:
   `npm run indexnow`
   Key file: `https://doctoryachts.com/29e87e4fd6503544db938f36b649c6d4.txt`
4. Cloudflare **AI Crawl Control** currently injects `Disallow: /` for GPTBot and Google-Extended *above* the app `robots.txt`. Flip those to allow in the dashboard or ChatGPT/Gemini cannot read the site even though the app robots allow them.
5. Test: home, `/faq`, `/services`, `/book`, phone links.

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
| Workers Builds: “Could not find compiled Open Next config” | Dashboard **Build command** is empty and **Deploy command** is `npx wrangler deploy`. Wrangler 4 delegates to `opennextjs-cloudflare deploy` without compiling. Prefer Build command `npx opennextjs-cloudflare build`. The repo also wraps `npx wrangler` (postinstall) so deploy builds first. |
| Old site on domain | DNS still on Hostinger parking — switch NS or A/CNAME |
| Email breaks (inbox MX) | Restore Hostinger MX in Cloudflare DNS |
| Forms say success but no email | Old bug. Current code must return 502 if Resend/FormSubmit fails. Set Worker secret `RESEND_API_KEY` and verify `doctoryachts.com` in Resend. |
| Forms show an error + call the shop | Intended when mail is not delivered. Check Worker logs for `[notifyShop]` and the Resend domain status. |
