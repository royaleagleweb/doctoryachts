import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { locations } from "@/lib/locations";
import { getAllServiceCityPairs, isServiceCityIndexable } from "@/lib/service-locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/** Content lastmod dates — not build time. Update when the page copy actually changes. */
const LASTMOD = {
  home: "2026-08-16",
  services: "2026-08-06",
  locations: "2026-08-16",
  guides: "2026-08-06",
  faq: "2026-08-06",
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

function lastmod(iso: string) {
  return new Date(`${iso}T12:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: lastmod(LASTMOD.home), changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/services`,
      lastModified: lastmod(LASTMOD.services),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/locations`,
      lastModified: lastmod(LASTMOD.locations),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/guides`,
      lastModified: lastmod(LASTMOD.guides),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${base}/faq`, lastModified: lastmod(LASTMOD.faq), changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/free-estimate`,
      lastModified: lastmod(LASTMOD.freeEstimate),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    { url: `${base}/book`, lastModified: lastmod(LASTMOD.book), changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${base}/reviews`,
      lastModified: lastmod(LASTMOD.reviews),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    { url: `${base}/about`, lastModified: lastmod(LASTMOD.about), changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${base}/gallery`,
      lastModified: lastmod(LASTMOD.gallery),
      changeFrequency: "monthly",
      priority: 0.55,
    },
    {
      url: `${base}/contact`,
      lastModified: lastmod(LASTMOD.contact),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/privacy`,
      lastModified: lastmod(LASTMOD.privacy),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/terms`,
      lastModified: lastmod(LASTMOD.terms),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: lastmod(LASTMOD.service),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${base}/locations/${loc.slug}`,
    lastModified: lastmod(LASTMOD.location),
    changeFrequency: "monthly" as const,
    priority: 0.92,
  }));

  const indexableServiceCityRoutes = getAllServiceCityPairs()
    .filter(({ service, location }) => isServiceCityIndexable(service.slug, location.slug))
    .map(({ path }) => ({
      url: `${base}${path}`,
      lastModified: lastmod(LASTMOD.service),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const guideRoutes = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: lastmod(g.updated),
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...indexableServiceCityRoutes,
    ...guideRoutes,
  ];
}
