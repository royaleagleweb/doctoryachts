import type { MetadataRoute } from "next";
import { indexableServiceCityPaths } from "@/lib/service-city-indexable";

/**
 * Sitemap must stay a thin Worker handler.
 * Do not import guides/services/locations/site here — those modules pull the
 * full page-copy graph. Next.js resolveSitemap also calls Date#toISOString();
 * an Invalid Date throws and OpenNext surfaces that as HTTP 500.
 *
 * Slugs below match src/lib/services.ts, locations.ts, and guides.ts.
 */

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://doctoryachts.com").replace(
  /\/$/,
  "",
);

/** Content lastmod dates — not build time. Update when the page copy actually changes. */
const LASTMOD = {
  home: "2026-08-16",
  services: "2026-08-06",
  locations: "2026-08-16",
  guides: "2026-08-06",
  faq: "2026-08-16",
  freeEstimate: "2026-08-06",
  book: "2026-08-06",
  reviews: "2026-08-16",
  about: "2026-08-16",
  gallery: "2026-08-16",
  contact: "2026-08-06",
  privacy: "2026-08-16",
  terms: "2026-08-16",
  service: "2026-08-06",
  location: "2026-08-16",
} as const;

const SERVICE_SLUGS = [
  "marine-engine-repair",
  "electrical-repairs",
  "cooling-system-repairs",
  "boat-diagnostics",
  "boat-maintenance",
  "plumbing-repairs",
  "mobile-boat-repair",
  "outboard-motor-repair",
] as const;

const LOCATION_SLUGS = [
  "fort-lauderdale",
  "pompano-beach",
  "miami",
  "palm-beach",
  "dania-beach",
  "hollywood-fl",
] as const;

const GUIDES = [
  { slug: "boat-wont-start-checklist", updated: "2026-08-06" },
  { slug: "why-is-my-boat-engine-overheating", updated: "2026-08-06" },
  { slug: "how-often-to-service-a-boat-in-florida", updated: "2026-08-06" },
  { slug: "mobile-boat-repair-vs-shop", updated: "2026-08-06" },
  { slug: "signs-you-need-marine-electrical-repair", updated: "2026-08-06" },
  { slug: "emergency-boat-repair-fort-lauderdale", updated: "2026-08-06" },
  { slug: "what-does-a-boat-mechanic-do", updated: "2026-08-06" },
] as const;

/** W3C lastmod string. Never return a Date — toISOString() throws on Invalid Date. */
function lastmod(iso: string): string {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? `${iso}T12:00:00.000Z` : "2026-08-06T12:00:00.000Z";
}

function entry(
  path: string,
  iso: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: path ? `${BASE}${path}` : BASE,
    lastModified: lastmod(iso),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("", LASTMOD.home, "weekly", 1),
    entry("/services", LASTMOD.services, "weekly", 0.95),
    entry("/locations", LASTMOD.locations, "weekly", 0.95),
    entry("/guides", LASTMOD.guides, "weekly", 0.95),
    entry("/faq", LASTMOD.faq, "weekly", 0.95),
    entry("/free-estimate", LASTMOD.freeEstimate, "monthly", 0.92),
    entry("/book", LASTMOD.book, "monthly", 0.9),
    entry("/reviews", LASTMOD.reviews, "monthly", 0.75),
    entry("/about", LASTMOD.about, "monthly", 0.7),
    entry("/gallery", LASTMOD.gallery, "monthly", 0.55),
    entry("/contact", LASTMOD.contact, "monthly", 0.8),
    entry("/privacy", LASTMOD.privacy, "yearly", 0.2),
    entry("/terms", LASTMOD.terms, "yearly", 0.2),
  ];

  const serviceRoutes = SERVICE_SLUGS.map((slug) =>
    entry(`/services/${slug}`, LASTMOD.service, "monthly", 0.9),
  );

  const locationRoutes = LOCATION_SLUGS.map((slug) =>
    entry(`/locations/${slug}`, LASTMOD.location, "monthly", 0.92),
  );

  const indexableServiceCityRoutes = indexableServiceCityPaths().map((path) =>
    entry(path, LASTMOD.service, "monthly", 0.7),
  );

  const guideRoutes = GUIDES.map((g) => entry(`/guides/${g.slug}`, g.updated, "monthly", 0.88));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...indexableServiceCityRoutes,
    ...guideRoutes,
  ];
}
