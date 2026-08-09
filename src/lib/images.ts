/** Brand & page images in /public/images. */

export type BrandImage = {
  src: string;
  alt: string;
  caption?: string;
};

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
    src: "/images/home-hero.jpg",
    alt: "Luxury motor yacht docked at a Fort Lauderdale marina at golden hour — Doctor Yachts boat repair",
  },
  aboutHero: {
    src: "/images/yacht-cockpit.jpg",
    alt: "Yacht cockpit overlooking the marina — Doctor Yachts",
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
      src: "/images/service-dockside.jpg",
      alt: "Dockside mobile boat repair service at the marina",
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
      src: "/images/service-dockside.jpg",
      alt: "Mobile and dockside boat repair",
    },
    outboard: {
      src: "/images/service-outboard.jpg",
      alt: "Outboard motor repair Fort Lauderdale",
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
      src: "/images/yacht-marina-gold.jpg",
      alt: "Boat repair Dania Beach FL",
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
