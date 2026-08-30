import { getSitemapEntries, type SitemapEntry } from "@/lib/sitemap-entries";

/**
 * Explicit /sitemap.xml handler.
 *
 * Next.js MetadataRoute sitemap (app/sitemap.ts) is serialized by
 * resolveSitemap(), which calls Date#toISOString(). An Invalid Date — or a
 * string lastModified that some OpenNext/Next versions treat as a Date —
 * throws and the Worker returns HTTP 500. Building the XML here avoids that
 * code path entirely.
 */

export const dynamic = "force-static";

const XML_HEADERS = {
  "content-type": "application/xml; charset=utf-8",
  "cache-control": "public, max-age=0, s-maxage=3600, must-revalidate",
};

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function alternateLinks(entry: SitemapEntry): string {
  if (!entry.alternates) return "";
  return Object.entries(entry.alternates)
    .map(
      ([lang, href]) =>
        `<xhtml:link rel="alternate" hreflang="${xmlEscape(lang)}" href="${xmlEscape(href)}" />`,
    )
    .join("\n");
}

function entryXml(entry: SitemapEntry): string {
  const alts = alternateLinks(entry);
  return [
    "<url>",
    `<loc>${xmlEscape(entry.url)}</loc>`,
    alts,
    `<lastmod>${xmlEscape(entry.lastModified)}</lastmod>`,
    `<changefreq>${xmlEscape(entry.changeFrequency)}</changefreq>`,
    `<priority>${entry.priority}</priority>`,
    "</url>",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildSitemapXml(): string {
  const body = getSitemapEntries().map(entryXml).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

export function GET() {
  return new Response(buildSitemapXml(), { headers: XML_HEADERS });
}

export function HEAD() {
  return new Response(null, { headers: XML_HEADERS });
}
