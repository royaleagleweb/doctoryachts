import type { Service, ServiceImage } from "./services";

/** Shared marine atmosphere images for service landing pages */
export const marineMedia = {
  marina: {
    src: "/images/marine-marina.jpg",
    alt: "South Florida marina with yachts at golden hour",
    caption: "South Florida marina waters",
  },
  lines: {
    src: "/images/marine-lines.jpg",
    alt: "Dock lines and yacht hull at the waterline",
    caption: "Dockside detail",
  },
  wake: {
    src: "/images/marine-wake.jpg",
    alt: "Turquoise ocean wake off the Florida coast",
    caption: "Back on the water",
  },
  helm: {
    src: "/images/marine-helm.jpg",
    alt: "Yacht helm instruments and navigation station",
    caption: "Helm & systems",
  },
  mechanic: {
    src: "/images/marine-mechanic.jpg",
    alt: "Marine mechanic working dockside on a boat engine",
    caption: "Dockside diagnosis",
  },
  bilge: {
    src: "/images/marine-bilge.jpg",
    alt: "Boat bilge pumps and marine plumbing systems",
    caption: "Below-deck systems",
  },
  engine: {
    src: "/images/service-engine.jpg",
    alt: "Marine engine bay service",
    caption: "Engine bay",
  },
  electrical: {
    src: "/images/service-electrical.jpg",
    alt: "Marine electrical panel and wiring",
    caption: "Electrical systems",
  },
  electricalDetail: {
    src: "/images/service-electrical-detail.jpg",
    alt: "Marine battery bank and charging path",
    caption: "Batteries & charging",
  },
  cooling: {
    src: "/images/service-cooling.jpg",
    alt: "Boat cooling system and raw-water plumbing",
    caption: "Cooling systems",
  },
  outboard: {
    src: "/images/service-outboard.jpg",
    alt: "Outboard motors at a Florida marina dock",
    caption: "Outboard power",
  },
  dockside: {
    src: "/images/service-dockside.jpg",
    alt: "Mobile dockside boat repair at the marina",
    caption: "Mobile / dockside",
  },
  maintenance: {
    src: "/images/service-maintenance.jpg",
    alt: "Boat maintenance at a South Florida dock",
    caption: "Maintenance at the dock",
  },
  diagnostics: {
    src: "/images/service-diagnostics.jpg",
    alt: "Boat diagnostics at the helm",
    caption: "Diagnostics",
  },
  systems: {
    src: "/images/service-systems.jpg",
    alt: "Marine systems and pump compartment",
    caption: "Plumbing & systems",
  },
  ftl: {
    src: "/images/location-fort-lauderdale.jpg",
    alt: "Fort Lauderdale Intracoastal marinas and yachts",
    caption: "Fort Lauderdale waters",
  },
  miami: {
    src: "/images/location-miami.jpg",
    alt: "Miami waterfront yachts and skyline",
    caption: "Miami boating waters",
  },
  palm: {
    src: "/images/location-palm-beach.jpg",
    alt: "Palm Beach County docks and waterfront",
    caption: "Palm Beach County",
  },
  hull: {
    src: "/images/gallery-hull.jpg",
    alt: "Yacht hull gelcoat at the waterline",
    caption: "Hull & waterline",
  },
  teak: {
    src: "/images/gallery-teak.jpg",
    alt: "Yacht teak deck in coastal light",
    caption: "On deck",
  },
  yachtMarina: {
    src: "/images/yacht-marina-gold.jpg",
    alt: "Luxury yacht at South Florida marina",
    caption: "Marina",
  },
  yachtIntracoastal: {
    src: "/images/yacht-intracoastal.jpg",
    alt: "Yachts on the Intracoastal",
    caption: "Intracoastal",
  },
  yachtBow: {
    src: "/images/yacht-bow.jpg",
    alt: "Yacht bow detail",
    caption: "Bow detail",
  },
  yachtCruising: {
    src: "/images/yacht-cruising.jpg",
    alt: "Yacht cruising South Florida waters",
    caption: "Underway",
  },
  yachtCockpit: {
    src: "/images/yacht-cockpit.jpg",
    alt: "Yacht cockpit at sunset",
    caption: "Cockpit",
  },
  yachtNight: {
    src: "/images/yacht-night.jpg",
    alt: "Yachts at night marina",
    caption: "Night marina",
  },
} as const satisfies Record<string, ServiceImage>;

const pool: ServiceImage[] = [
  marineMedia.marina,
  marineMedia.lines,
  marineMedia.wake,
  marineMedia.helm,
  marineMedia.mechanic,
  marineMedia.bilge,
  marineMedia.engine,
  marineMedia.electrical,
  marineMedia.cooling,
  marineMedia.outboard,
  marineMedia.dockside,
  marineMedia.maintenance,
  marineMedia.diagnostics,
  marineMedia.systems,
  marineMedia.ftl,
  marineMedia.miami,
  marineMedia.hull,
  marineMedia.teak,
  marineMedia.yachtMarina,
  marineMedia.yachtIntracoastal,
  marineMedia.yachtBow,
  marineMedia.yachtCruising,
  marineMedia.yachtCockpit,
  marineMedia.yachtNight,
];

/** Service-specific preferred marine media order */
const servicePools: Record<string, ServiceImage[]> = {
  "engine-repair": [
    marineMedia.engine,
    marineMedia.mechanic,
    marineMedia.dockside,
    marineMedia.cooling,
    marineMedia.outboard,
    marineMedia.helm,
    marineMedia.marina,
    marineMedia.wake,
  ],
  electrical: [
    marineMedia.electrical,
    marineMedia.electricalDetail,
    marineMedia.helm,
    marineMedia.diagnostics,
    marineMedia.dockside,
    marineMedia.mechanic,
    marineMedia.marina,
    marineMedia.lines,
  ],
  cooling: [
    marineMedia.cooling,
    marineMedia.engine,
    marineMedia.outboard,
    marineMedia.mechanic,
    marineMedia.wake,
    marineMedia.dockside,
    marineMedia.marina,
    marineMedia.bilge,
  ],
  diagnostics: [
    marineMedia.diagnostics,
    marineMedia.helm,
    marineMedia.engine,
    marineMedia.electrical,
    marineMedia.mechanic,
    marineMedia.marina,
    marineMedia.wake,
    marineMedia.dockside,
  ],
  maintenance: [
    marineMedia.maintenance,
    marineMedia.dockside,
    marineMedia.outboard,
    marineMedia.engine,
    marineMedia.marina,
    marineMedia.wake,
    marineMedia.mechanic,
    marineMedia.lines,
  ],
  systems: [
    marineMedia.bilge,
    marineMedia.systems,
    marineMedia.electrical,
    marineMedia.dockside,
    marineMedia.mechanic,
    marineMedia.hull,
    marineMedia.marina,
    marineMedia.lines,
  ],
  emergency: [
    marineMedia.dockside,
    marineMedia.mechanic,
    marineMedia.ftl,
    marineMedia.marina,
    marineMedia.engine,
    marineMedia.wake,
    marineMedia.helm,
    marineMedia.lines,
  ],
  outboard: [
    marineMedia.outboard,
    marineMedia.cooling,
    marineMedia.wake,
    marineMedia.mechanic,
    marineMedia.dockside,
    marineMedia.engine,
    marineMedia.marina,
    marineMedia.maintenance,
  ],
  "hour-100": [
    marineMedia.maintenance,
    marineMedia.outboard,
    marineMedia.dockside,
    marineMedia.engine,
    marineMedia.marina,
    marineMedia.mechanic,
    marineMedia.wake,
    marineMedia.cooling,
  ],
  "hour-300": [
    marineMedia.engine,
    marineMedia.cooling,
    marineMedia.maintenance,
    marineMedia.electrical,
    marineMedia.mechanic,
    marineMedia.dockside,
    marineMedia.helm,
    marineMedia.wake,
  ],
};

function pick(service: Service, i: number): ServiceImage {
  const preferred = servicePools[service.id] ?? [
    ...service.images,
    ...pool,
  ];
  const list = preferred.length ? preferred : pool;
  return list[i % list.length];
}

export type ServicePageMedia = {
  hero: ServiceImage;
  about: ServiceImage;
  symptoms: ServiceImage;
  included: ServiceImage;
  sections: ServiceImage[];
  checks: ServiceImage;
  process: ServiceImage;
  local: ServiceImage;
  audience: ServiceImage;
  diagnose: ServiceImage;
  gallery: ServiceImage[];
};

/** Resolve a unique-feeling image for every content block on a service page */
export function getServicePageMedia(service: Service): ServicePageMedia {
  const hero = service.images[0] ?? pick(service, 0);
  const about = service.images[1] ?? pick(service, 1);
  const symptoms = pick(service, 2);
  const included = pick(service, 3);
  const sections = service.sections.map((_, i) => {
    // Prefer service gallery images, then themed pool
    if (service.images[i + 1]) return service.images[(i + 1) % service.images.length];
    return pick(service, 4 + i);
  });
  const checks = pick(service, 8);
  const process = pick(service, 9);
  const local = service.id === "outboard" ? marineMedia.ftl : pick(service, 10);
  const audience = marineMedia.wake;
  const diagnose = marineMedia.mechanic;
  const gallery = [
    hero,
    about,
    symptoms,
    included,
    ...sections.slice(0, 2),
    checks,
    process,
    local,
  ].filter((img, idx, arr) => arr.findIndex((x) => x.src === img.src) === idx);

  return {
    hero,
    about,
    symptoms,
    included,
    sections,
    checks,
    process,
    local,
    audience,
    diagnose,
    gallery: gallery.slice(0, 6),
  };
}
