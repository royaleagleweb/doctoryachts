import { normalizePath, SERVICE_SLUG_EN, type Locale } from "./i18n";
import { getLocationBySlug } from "./locations";
import { getServiceBySlug } from "./services";

/** Facebook / WhatsApp / LinkedIn large-card size. Files in /public/images/og match this. */
export const SHARE_WIDTH = 1200;
export const SHARE_HEIGHT = 630;

type SharePhoto = {
  src: string;
  alt: string;
  altEs: string;
};

/**
 * Branded crop of the homepage marina photo (public/images/yacht-marina-gold.jpg).
 * Used for the homepage and for any page that does not show its own photo.
 */
export const defaultSharePhoto = {
  src: "/images/og/default.jpg",
  alt: "Luxury motor yacht at a South Florida marina — Doctor Yachts, mobile boat mechanic in Fort Lauderdale",
  altEs:
    "Yate a motor de lujo en una marina del sur de la Florida — Doctor Yachts, mecánico de botes móvil en Fort Lauderdale",
} as const satisfies SharePhoto;

const engine: SharePhoto = {
  src: "/images/og/service-engine.jpg",
  alt: "Marine engine bay during professional boat engine repair",
  altEs: "Sala de máquinas durante una reparación profesional de motor de bote",
};

const electrical: SharePhoto = {
  src: "/images/og/service-electrical.jpg",
  alt: "Marine electrical panel and boat wiring service",
  altEs: "Tablero eléctrico marino y servicio de cableado del bote",
};

const cooling: SharePhoto = {
  src: "/images/og/service-cooling.jpg",
  alt: "Boat cooling system and raw-water plumbing service",
  altEs: "Sistema de enfriamiento del bote y servicio de la plomería de agua cruda",
};

const diagnostics: SharePhoto = {
  src: "/images/og/service-diagnostics.jpg",
  alt: "Boat diagnostics at helm and systems inspection",
  altEs: "Diagnóstico del bote en el timón e inspección de sistemas",
};

const maintenance: SharePhoto = {
  src: "/images/og/service-maintenance.jpg",
  alt: "Scheduled boat maintenance at a South Florida marina dock",
  altEs: "Mantenimiento programado de un bote en el muelle de una marina del sur de la Florida",
};

const systems: SharePhoto = {
  src: "/images/og/service-systems.jpg",
  alt: "Marine bilge pumps and boat systems compartment",
  altEs: "Bombas de sentina y compartimento de sistemas del bote",
};

const outboard: SharePhoto = {
  src: "/images/og/service-outboard.jpg",
  alt: "Mechanic adjusting the carburetor on a small Johnson outboard from a boat on the water",
  altEs:
    "Mecánico ajustando el carburador de un motor fuera de borda Johnson pequeño, desde un bote en el agua",
};

const mobileRepair: SharePhoto = {
  src: "/images/og/service-mobile-repair.jpg",
  alt: "Two U.S. Coast Guard machinery technicians working on an outboard motor at the stern of a boat on the water",
  altEs:
    "Dos técnicos de maquinaria de la Guardia Costera de EE. UU. trabajando en un motor fuera de borda en la popa de un bote en el agua",
};

const upholstery: SharePhoto = {
  src: "/images/og/service-upholstery.jpg",
  alt: "Boat cockpit with white and navy upholstered seats under a canvas bimini top",
  altEs: "Cabina de un bote con asientos tapizados en blanco y azul marino bajo un bimini de lona",
};

const monthly: SharePhoto = {
  src: "/images/og/service-monthly.jpg",
  alt: "Marine battery bank and charging connections checked during a monthly boat maintenance visit",
  altEs:
    "Banco de baterías marinas y conexiones de carga revisados durante una visita de mantenimiento mensual",
};

const about: SharePhoto = {
  src: "/images/og/about.jpg",
  alt: "Marine mechanic working dockside on a boat engine — Doctor Yachts",
  altEs: "Mecánico náutico trabajando en el muelle en el motor de un bote — Doctor Yachts",
};

/** Hero photo for each service id. Spanish pages reuse the file with altEs. */
const SERVICE_PHOTOS: Record<string, SharePhoto> = {
  "engine-repair": engine,
  electrical,
  cooling,
  diagnostics,
  maintenance,
  "hour-100": outboard,
  "hour-300": {
    src: engine.src,
    alt: "300-hour marine service inspection in an engine bay",
    altEs: "Inspección de servicio de 300 horas en la sala de máquinas",
  },
  systems,
  emergency: mobileRepair,
  outboard,
  "upholstery-canvas": upholstery,
  "monthly-maintenance": monthly,
};

const LOCATION_PHOTOS: Record<string, SharePhoto> = {
  "fort-lauderdale": {
    src: "/images/og/location-fort-lauderdale.jpg",
    alt: "Boat repair Fort Lauderdale FL marinas and Intracoastal",
    altEs: "Reparación de barcos en las marinas y el Intracoastal de Fort Lauderdale, FL",
  },
  "pompano-beach": {
    src: "/images/og/location-pompano-beach.jpg",
    alt: "Mobile boat repair Pompano Beach FL waterfront",
    altEs: "Reparación móvil de barcos en la costa de Pompano Beach, FL",
  },
  "dania-beach": {
    src: "/images/og/location-dania-beach.jpg",
    alt: "Boat repair Dania Beach FL",
    altEs: "Reparación de barcos en Dania Beach, FL",
  },
  "hollywood-fl": {
    src: "/images/og/location-hollywood-fl.jpg",
    alt: "Boat repair Hollywood Florida",
    altEs: "Reparación de barcos en Hollywood, Florida",
  },
  miami: {
    src: "/images/og/location-miami.jpg",
    alt: "Boat repair Miami and Miami Beach",
    altEs: "Reparación de barcos en Miami y Miami Beach",
  },
  "palm-beach": {
    src: "/images/og/location-palm-beach.jpg",
    alt: "Boat mechanic Palm Beach County docks",
    altEs: "Mecánico de barcos en los muelles del condado de Palm Beach",
  },
};

/**
 * Pages whose hero is a specific photo. Guide articles, booking, contact,
 * FAQ, estimates, and legal pages are omitted — they have no hero photo and
 * fall back to {@link defaultSharePhoto}.
 */
const PAGE_PHOTOS: Record<string, SharePhoto> = {
  "/services": {
    src: engine.src,
    alt: "Yacht engine bay — Doctor Yachts mobile boat mechanic in South Florida",
    altEs: "Sala de máquinas de un yate — mecánico de botes móvil Doctor Yachts en el sur de la Florida",
  },
  "/es/servicios": {
    src: engine.src,
    alt: "Yacht engine bay — Doctor Yachts mobile boat mechanic in South Florida",
    altEs: "Sala de máquinas de un yate — mecánico de botes móvil Doctor Yachts en el sur de la Florida",
  },
  "/locations": mobileRepair,
  "/es/ubicaciones": mobileRepair,
  "/about": about,
  "/es/nosotros": about,
  "/guides": maintenance,
  "/gallery": {
    src: systems.src,
    alt: "Marine bilge pumps and systems compartment",
    altEs: "Bombas de sentina y compartimento de sistemas",
  },
  "/reviews": {
    src: diagnostics.src,
    alt: "Yacht diagnostics at a modern helm station",
    altEs: "Diagnóstico de un yate en un timón moderno",
  },
};

function localized(photo: SharePhoto, locale: Locale) {
  return { src: photo.src, alt: locale === "es" ? photo.altEs : photo.alt };
}

function serviceShare(enSlug: string, locale: Locale) {
  const service = getServiceBySlug(enSlug);
  const photo = service ? SERVICE_PHOTOS[service.id] : undefined;
  return photo ? localized(photo, locale) : null;
}

function locationShare(slug: string, locale: Locale) {
  if (!getLocationBySlug(slug)) return null;
  const photo = LOCATION_PHOTOS[slug];
  return photo ? localized(photo, locale) : null;
}

/** Relative image path + alt for a public page. Locale selects the alt text. */
export function shareImageForPath(path: string, locale: Locale) {
  const pathname = normalizePath(path);

  const exact = PAGE_PHOTOS[pathname];
  if (exact) return localized(exact, locale);

  const city = pathname.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (city) {
    const photo = serviceShare(city[1], locale);
    if (photo && getLocationBySlug(city[2])) return photo;
  }

  const serviceEn = pathname.match(/^\/services\/([^/]+)$/);
  if (serviceEn) {
    const photo = serviceShare(serviceEn[1], locale);
    if (photo) return photo;
  }

  const serviceEs = pathname.match(/^\/es\/servicios\/([^/]+)$/);
  if (serviceEs) {
    const enSlug = SERVICE_SLUG_EN[serviceEs[1]];
    if (enSlug) {
      const photo = serviceShare(enSlug, locale);
      if (photo) return photo;
    }
  }

  const locationEn = pathname.match(/^\/locations\/([^/]+)$/);
  if (locationEn) {
    const photo = locationShare(locationEn[1], locale);
    if (photo) return photo;
  }

  const locationEs = pathname.match(/^\/es\/ubicaciones\/([^/]+)$/);
  if (locationEs) {
    const photo = locationShare(locationEs[1], locale);
    if (photo) return photo;
  }

  return localized(defaultSharePhoto, locale);
}
