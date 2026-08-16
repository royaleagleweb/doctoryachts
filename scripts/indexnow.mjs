/**
 * Ping IndexNow (Bing → ChatGPT search) after a production deploy.
 *
 *   npm run indexnow
 *
 * Key file must be live at https://doctoryachts.com/<key>.txt
 * Google / Gemini still need a Search Console sitemap submit (outside this script).
 */
const KEY = "29e87e4fd6503544db938f36b649c6d4";
const HOST = "doctoryachts.com";
const PATHS = ["/", "/faq", "/services", "/guides", "/book"];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: PATHS.map((path) => `https://${HOST}${path === "/" ? "/" : path}`),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const body = await res.text();
console.log(JSON.stringify({ status: res.status, ok: res.ok, body, payload }, null, 2));

if (!res.ok && res.status !== 202) {
  process.exitCode = 1;
}
