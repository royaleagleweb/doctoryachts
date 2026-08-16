/**
 * Combo URLs with unique marina-level copy may be indexed.
 * The current pages are templated service + city mix-ins — none qualify.
 *
 * Kept in its own module so sitemap.xml does not import the full
 * services/locations/site content graph.
 */
const INDEXABLE_SERVICE_CITY = new Set<string>([
  // e.g. "marine-engine-repair/fort-lauderdale" when unique marina copy exists
]);

export function isServiceCityIndexable(serviceSlug: string, citySlug: string) {
  return INDEXABLE_SERVICE_CITY.has(`${serviceSlug}/${citySlug}`);
}

/** Paths like `/services/marine-engine-repair/fort-lauderdale` that may be indexed. */
export function indexableServiceCityPaths() {
  return Array.from(INDEXABLE_SERVICE_CITY, (key) => `/services/${key}`);
}
