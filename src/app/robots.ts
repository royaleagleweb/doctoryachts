import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** AI/search crawlers that should be allowed to read the public site. */
const SEARCH_AND_AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  const disallow = ["/api/", "/versions/", "/versions"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      ...SEARCH_AND_AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/versions/"],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
