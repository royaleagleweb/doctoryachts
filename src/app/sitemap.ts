import type { MetadataRoute } from "next";
import { indexableServiceCityPaths } from "@/lib/service-city-indexable";

/**
 * Sitemap must stay a thin Worker handler.
 * Do not import guides/services/locations/site here — those modules pull the
 * full page-copy graph. Next.js resolveSitemap also calls Date#toISOString();
 * an Invalid Date throws and OpenNext surfaces that as HTTP 500.
 *
 * Slugs below match src/lib/services.ts, locations.ts, guides.ts, and i18n.ts.
 */

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://doctoryachts.com").replace(
  /\/$/,
  "",
);

/** Content lastmod dates — not build time. Update when the page copy actually changes. */
const LASTMOD = {
  home: "2026-08-21",
  services: "2026-08-21",
  locations: "2026-08-21",
  guides: "2026-08-06",
  faq: "2026-08-21",
  freeEstimate: "2026-08-21",
  book: "2026-08-21",
  reviews: "2026-08-16",
  about: "2026-08-21",
  gallery: "2026-08-16",
  contact: "2026-08-21",
  privacy: "2026-08-16",
  terms: "2026-08-16",
  service: "2026-08-21",
  location: "2026-08-21",
} as const;

const SERVICE_PAIRS = [
  ["marine-engine-repair", "reparacion-de-motores-marinos"],
  ["electrical-repairs", "reparacion-electrica-de-barcos"],
  ["cooling-system-repairs", "sistema-de-enfriamiento"],
  ["boat-diagnostics", "diagnostico-de-yates"],
  ["boat-maintenance", "mantenimiento-de-yates"],
  ["plumbing-repairs", "plomeria-de-barcos"],
  ["mobile-boat-repair", "reparacion-movil-de-barcos"],
  ["outboard-motor-repair", "servicio-de-motor-fuera-de-borda"],
  ["100-hour-service", "servicio-100-horas"],
  ["300-hour-service", "servicio-300-horas"],
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

const STATIC_PAIRS = [
  { en: "", es: "/es", iso: LASTMOD.home, freq: "weekly" as const, priority: 1 },
  { en: "/services", es: "/es/servicios", iso: LASTMOD.services, freq: "weekly" as const, priority: 0.95 },
  { en: "/locations", es: "/es/ubicaciones", iso: LASTMOD.locations, freq: "weekly" as const, priority: 0.95 },
  { en: "/faq", es: "/es/preguntas", iso: LASTMOD.faq, freq: "weekly" as const, priority: 0.95 },
  { en: "/free-estimate", es: "/es/presupuesto-gratis", iso: LASTMOD.freeEstimate, freq: "monthly" as const, priority: 0.92 },
  { en: "/book", es: "/es/reservar", iso: LASTMOD.book, freq: "monthly" as const, priority: 0.9 },
  { en: "/about", es: "/es/nosotros", iso: LASTMOD.about, freq: "monthly" as const, priority: 0.7 },
  { en: "/contact", es: "/es/contacto", iso: LASTMOD.contact, freq: "monthly" as const, priority: 0.8 },
] as const;

const EN_ONLY = [
  { path: "/guides", iso: LASTMOD.guides, freq: "weekly" as const, priority: 0.95 },
  { path: "/reviews", iso: LASTMOD.reviews, freq: "monthly" as const, priority: 0.75 },
  { path: "/gallery", iso: LASTMOD.gallery, freq: "monthly" as const, priority: 0.55 },
  { path: "/privacy", iso: LASTMOD.privacy, freq: "yearly" as const, priority: 0.2 },
  { path: "/terms", iso: LASTMOD.terms, freq: "yearly" as const, priority: 0.2 },
] as const;

function lastmod(iso: string): string {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? `${iso}T12:00:00.000Z` : "2026-08-06T12:00:00.000Z";
}

function abs(path: string): string {
  return path ? `${BASE}${path}` : BASE;
}

function pair(
  enPath: string,
  esPath: string,
  iso: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = { en: abs(enPath), es: abs(esPath), "x-default": abs(enPath) };
  return [
    {
      url: abs(enPath),
      lastModified: lastmod(iso),
      changeFrequency,
      priority,
      alternates: { languages },
    },
    {
      url: abs(esPath),
      lastModified: lastmod(iso),
      changeFrequency,
      priority,
      alternates: { languages },
    },
  ];
}

function solo(
  path: string,
  iso: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: abs(path),
    lastModified: lastmod(iso),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_PAIRS.flatMap((r) =>
    pair(r.en, r.es, r.iso, r.freq, r.priority),
  );

  const enOnly = EN_ONLY.map((r) => solo(r.path, r.iso, r.freq, r.priority));

  const serviceRoutes = SERVICE_PAIRS.flatMap(([en, es]) =>
    pair(`/services/${en}`, `/es/servicios/${es}`, LASTMOD.service, "monthly", 0.9),
  );

  const locationRoutes = LOCATION_SLUGS.flatMap((slug) =>
    pair(`/locations/${slug}`, `/es/ubicaciones/${slug}`, LASTMOD.location, "monthly", 0.92),
  );

  const indexableServiceCityRoutes = indexableServiceCityPaths().map((path) =>
    solo(path, LASTMOD.service, "monthly", 0.7),
  );

  const guideRoutes = GUIDES.map((g) => solo(`/guides/${g.slug}`, g.updated, "monthly", 0.88));

  return [
    ...staticRoutes,
    ...enOnly,
    ...serviceRoutes,
    ...locationRoutes,
    ...indexableServiceCityRoutes,
    ...guideRoutes,
  ];
}
