import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { locations } from "@/lib/locations";
import { getAllServiceCityPairs } from "@/lib/service-locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/free-estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.55 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${base}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.92,
  }));

  /** Service × city matrix for long-tail local SEO */
  const serviceCityRoutes = getAllServiceCityPairs().map(({ path }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.86,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.updated),
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...serviceCityRoutes,
    ...guideRoutes,
  ];
}
