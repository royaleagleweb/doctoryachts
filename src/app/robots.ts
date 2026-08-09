import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/versions/", "/versions"],
      },
      // Helpful for AI crawlers that honor robots (AEO / GEO)
      {
        userAgent: "GPTBot",
        allow: ["/", "/guides/", "/services/", "/locations/", "/faq", "/free-estimate"],
        disallow: ["/api/", "/versions/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
