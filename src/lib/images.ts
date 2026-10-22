import {
  serviceHour100Image,
  serviceHour300Image,
  serviceMobileRepairImage,
  serviceOutboardImage,
} from "./service-image-copy";

/** Brand & page images in /public/images. */

export type BrandImage = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Stable React list key from an image path.
 * Never use `/images/foo.jpg` or `/images/foo.jpg-0` as a `key` — Googlebot
 * reads those strings out of the RSC payload and crawls them as image URLs
 * (Search Console 404s such as `/images/service-engine.jpg-0`).
 */
export function imageListKey(src: string, suffix?: string | number): string {
  const slug = src
    .replace(/^\/images\//, "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return suffix === undefined || suffix === "" ? slug : `${slug}-${suffix}`;
}

/** Premium yacht / marina branding set */
export const yachts = {
  marinaGold: {
    src: "/images/yacht-marina-gold.jpg",
    alt: "Luxury motor yacht at a South Florida marina in golden light",
    caption: "South Florida marina",
  },
  intracoastal: {
    src: "/images/yacht-intracoastal.jpg",
    alt: "Luxury yachts along the Fort Lauderdale Intracoastal at blue hour",
    caption: "Intracoastal waters",
  },
  bow: {
    src: "/images/yacht-bow.jpg",
    alt: "Polished yacht bow and railings over turquoise water",
    caption: "Hull & waterline",
  },
  cruising: {
    src: "/images/yacht-cruising.jpg",
    alt: "Sport yacht cruising South Florida waterways",
    caption: "Underway",
  },
  cockpit: {
    src: "/images/yacht-cockpit.jpg",
    alt: "Yacht cockpit and exterior seating at marina sunset",
    caption: "Aboard",
  },
  night: {
    src: "/images/yacht-night.jpg",
    alt: "Illuminated luxury yachts at a night marina",
    caption: "Marina after dark",
  },
  dockPair: {
    src: "/images/yacht-dockside-pair.jpg",
    alt: "Center console and cabin cruiser docked in South Florida",
    caption: "Boats we service",
  },
  swimPlatform: {
    src: "/images/yacht-swim-platform.jpg",
    alt: "Yacht swim platform meeting turquoise water",
    caption: "Stern detail",
  },
} as const satisfies Record<string, BrandImage>;

/** Ordered strip for homepage / gallery branding */
export const yachtStrip: BrandImage[] = [
  yachts.marinaGold,
  yachts.intracoastal,
  yachts.bow,
  yachts.cruising,
  yachts.cockpit,
  yachts.night,
  yachts.dockPair,
  yachts.swimPlatform,
];

export const images = {
  homeHero: {
    src: "/images/service-engine.jpg",
    alt: "Yacht engine bay — Doctor Yachts mobile boat mechanic in South Florida",
  },
  aboutHero: {
    src: "/images/marine-mechanic.jpg",
    alt: "Marine mechanic working dockside on a boat engine — Doctor Yachts",
  },
  mechanic: {
    src: "/images/marine-mechanic.jpg",
    alt: "Marine mechanic working dockside on a boat engine — Doctor Yachts",
  },
  contactHero: {
    src: "/images/yacht-intracoastal.jpg",
    alt: "Fort Lauderdale Intracoastal yachts — contact Doctor Yachts",
  },
  bookHero: {
    src: "/images/yacht-cruising.jpg",
    alt: "Yacht on South Florida water — book boat repair",
  },
  servicesHero: {
    src: "/images/yacht-dockside-pair.jpg",
    alt: "Boats at dock — marine mechanic services",
  },
  locationsHero: {
    src: "/images/yacht-intracoastal.jpg",
    alt: "Fort Lauderdale Intracoastal lined with luxury yachts and marinas",
  },
  gallery: {
    hull: {
      src: "/images/gallery-hull.jpg",
      alt: "Polished yacht hull gelcoat detail with waterline reflections",
    },
    teak: {
      src: "/images/gallery-teak.jpg",
      alt: "Freshly washed teak yacht deck in coastal light",
    },
    engine: {
      src: "/images/service-engine.jpg",
      alt: "Clean yacht engine bay after professional service",
    },
    electrical: {
      src: "/images/service-electrical.jpg",
      alt: "Marine electrical panel and wiring service work",
    },
    diagnostics: {
      src: "/images/service-diagnostics.jpg",
      alt: "Yacht diagnostics at a modern helm station",
    },
    maintenance: {
      src: "/images/service-maintenance.jpg",
      alt: "Scheduled boat maintenance at a South Florida marina dock",
    },
    systems: {
      src: "/images/service-systems.jpg",
      alt: "Marine bilge pumps and systems compartment",
    },
    dockside: {
      src: serviceMobileRepairImage.src,
      alt: serviceMobileRepairImage.alt,
      altEs: serviceMobileRepairImage.altEs,
    },
    miami: {
      src: "/images/location-miami.jpg",
      alt: "Miami Beach waterfront with luxury yachts and skyline",
    },
    marinaGold: yachts.marinaGold,
    intracoastal: yachts.intracoastal,
    bow: yachts.bow,
    cruising: yachts.cruising,
    cockpit: yachts.cockpit,
    night: yachts.night,
    dockPair: yachts.dockPair,
    swimPlatform: yachts.swimPlatform,
  },
  services: {
    "engine-repair": {
      src: "/images/service-engine.jpg",
      alt: "Marine engine repair — inboard and outboard service",
    },
    electrical: {
      src: "/images/service-electrical.jpg",
      alt: "Boat electrical repairs on charging and power systems",
    },
    cooling: {
      src: "/images/service-cooling.jpg",
      alt: "Boat cooling system and overheating repair",
    },
    diagnostics: {
      src: "/images/service-diagnostics.jpg",
      alt: "Boat diagnostics and multi-system inspection",
    },
    maintenance: {
      src: "/images/service-maintenance.jpg",
      alt: "Boat maintenance at the dock",
    },
    systems: {
      src: "/images/service-systems.jpg",
      alt: "Boat plumbing and bilge system repairs",
    },
    emergency: {
      src: serviceMobileRepairImage.src,
      alt: serviceMobileRepairImage.alt,
    },
    outboard: {
      src: serviceOutboardImage.src,
      alt: serviceOutboardImage.alt,
    },
    "hour-100": {
      src: serviceHour100Image.src,
      alt: serviceHour100Image.alt,
    },
    "hour-300": {
      src: serviceHour300Image.src,
      alt: serviceHour300Image.alt,
    },
    "upholstery-canvas": {
      src: "/images/service-upholstery-canvas.webp",
      alt: "Boat cockpit with white and navy upholstered seats under a canvas bimini top",
    },
    "monthly-maintenance": {
      src: "/images/service-monthly-maintenance.webp",
      alt: "Marine battery bank and charging connections checked during a monthly boat maintenance visit",
    },
  },
  locations: {
    "fort-lauderdale": {
      src: "/images/yacht-intracoastal.jpg",
      alt: "Boat repair Fort Lauderdale FL marinas and Intracoastal",
    },
    "pompano-beach": {
      src: "/images/yacht-dockside-pair.jpg",
      alt: "Mobile boat repair Pompano Beach FL waterfront",
    },
    "dania-beach": {
      src: "/images/marine-marina.jpg",
      alt: "Yachts along a South Florida marina dock under a bright sky",
    },
    "hollywood-fl": {
      src: "/images/yacht-cruising.jpg",
      alt: "Boat repair Hollywood Florida",
    },
    miami: {
      src: "/images/location-miami.jpg",
      alt: "Boat repair Miami and Miami Beach",
    },
    "palm-beach": {
      src: "/images/yacht-night.jpg",
      alt: "Boat mechanic Palm Beach County docks",
    },
  },
} as const;

/**
 * Homepage story photos. Kept off the service-card and location-card sets
 * so those sections do not repeat the same file.
 */
export const homeStory = {
  helm: {
    src: "/images/marine-helm.jpg",
    alt: "Yacht helm instruments and navigation station",
    altEs: "Instrumentos del timón de un yate y estación de navegación",
  },
  bilge: {
    src: "/images/marine-bilge.jpg",
    alt: "Boat bilge pumps and marine plumbing systems",
    altEs: "Bombas de sentina y plomería marina en un bote",
  },
  lines: {
    src: "/images/marine-lines.jpg",
    alt: "Dock lines and yacht hull at the waterline",
    altEs: "Cabos de amarre y casco de un yate en la línea de flotación",
  },
  teak: {
    src: "/images/gallery-teak.jpg",
    alt: "Freshly washed teak yacht deck in coastal light",
    altEs: "Cubierta de teca de un yate recién lavada, con luz costera",
  },
} as const;
