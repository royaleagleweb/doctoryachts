import { getLocationBySlug, locations, type Location } from "./locations";
import { getServiceBySlug, services, type Service } from "./services";
import { site } from "./site";

export type ServiceCityPair = {
  service: Service;
  location: Location;
  path: string;
};

/**
 * Combo URLs with unique marina-level copy may be indexed.
 * The current pages are templated service + city mix-ins — none qualify.
 */
const INDEXABLE_SERVICE_CITY = new Set<string>([
  // e.g. "marine-engine-repair/fort-lauderdale" when unique marina copy exists
]);

export function isServiceCityIndexable(serviceSlug: string, citySlug: string) {
  return INDEXABLE_SERVICE_CITY.has(`${serviceSlug}/${citySlug}`);
}

/** All service × city combinations for static generation */
export function getAllServiceCityPairs(): ServiceCityPair[] {
  const pairs: ServiceCityPair[] = [];
  for (const service of services) {
    for (const location of locations) {
      pairs.push({
        service,
        location,
        path: `/services/${service.slug}/${location.slug}`,
      });
    }
  }
  return pairs;
}

export function getServiceCityPair(
  serviceSlug: string,
  citySlug: string,
): ServiceCityPair | undefined {
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(citySlug);
  if (!service || !location) return undefined;
  return {
    service,
    location,
    path: `/services/${service.slug}/${location.slug}`,
  };
}

/** Clean service name for titles (drop trailing city words if any) */
export function serviceDisplayName(service: Service) {
  return service.title.replace(/\s+Fort Lauderdale$/i, "").trim();
}

export function serviceCitySeoTitle(service: Service, location: Location) {
  const name = serviceDisplayName(service);
  return `${name} ${location.name}, FL | Doctor Yachts`;
}

export function serviceCitySeoDescription(service: Service, location: Location) {
  const name = serviceDisplayName(service);
  return `${name} in ${location.name}, ${location.state}. Mobile/dockside boat mechanic service by Doctor Yachts. Free estimates. Call ${site.phone}.`;
}

export function serviceCityH1(service: Service, location: Location) {
  const name = serviceDisplayName(service);
  return `${name} in ${location.name}, ${location.state}`;
}

export function serviceCityQuickAnswer(service: Service, location: Location) {
  const name = serviceDisplayName(service).toLowerCase();
  return `Doctor Yachts provides ${name} in ${location.name}, ${location.state}—mobile and dockside when access allows. We diagnose first, explain options in plain language, and give free estimates on recommended work. Call ${site.phone} or book online for marina and private-dock visits across ${location.region}.`;
}

export function serviceCityKeywords(service: Service, location: Location) {
  const name = serviceDisplayName(service).toLowerCase();
  const city = location.name;
  return [
    `${name} ${city}`,
    `${name} ${city} FL`,
    `boat mechanic ${city}`,
    `mobile boat repair ${city}`,
    `boat repair ${city}`,
    ...service.keywords.slice(0, 4),
    ...location.keywords.slice(0, 3),
  ];
}

export function serviceCityFaqs(service: Service, location: Location) {
  const name = serviceDisplayName(service);
  const city = location.name;
  return [
    {
      question: `Do you offer ${name.toLowerCase()} in ${city}?`,
      answer: `Yes. Doctor Yachts provides ${name.toLowerCase()} in ${city} and nearby ${location.region} docks—mobile and dockside when access allows. Free estimates after we understand symptoms and location.`,
    },
    {
      question: `Can you come to my marina in ${city}?`,
      answer: `Yes, when marina rules and access allow. Share marina name, slip, gate codes, and parking notes when you book so we can plan the visit. ${location.marinasNote}`,
    },
    {
      question: `How do I book ${name.toLowerCase()} in ${city}?`,
      answer: `Book online, request a free estimate, or call ${site.phone}. Include vessel type, symptoms, and your ${city} location for the fastest confirmation.`,
    },
    ...(service.faqs.slice(0, 2) as { question: string; answer: string }[]),
  ];
}

/** Unique intro paragraphs mixing service + city entity signals */
export function serviceCityContent(service: Service, location: Location): string[] {
  const name = serviceDisplayName(service);
  const city = location.name;
  const neighborhoods = location.neighborhoods.slice(0, 4).join(", ");

  return [
    `Looking for ${name.toLowerCase()} in ${city}, ${location.state}? Doctor Yachts is an independent boat and yacht mechanic serving ${location.region} with mobile and dockside service when access allows—so many jobs start at your marina or private dock instead of a tow.`,
    `${service.quickAnswer}`,
    `In ${city}, owners often need help across corridors like ${neighborhoods}. ${location.marinasNote}`,
    `We diagnose first, then recommend repairs with free estimates before major parts and labor. Whether your vessel is a center console, cabin cruiser, or motor yacht, ${name.toLowerCase()} in ${city} follows the same standard: clear findings, plain-language options, and notes you can keep for surveys or the next trip.`,
    `Also serving nearby South Florida markets when scheduled. Call ${site.phone}, request a free estimate, or book ${name.toLowerCase()} online for ${city}.`,
  ];
}
