import {
  serviceHour100Image,
  serviceHour300Image,
  serviceMobileRepairImage,
  serviceOutboardImage,
} from "./service-image-copy";

/**
 * Photographs shown on /gallery.
 * These are reference pictures, not Doctor Yachts job photos.
 * Sources and licenses: docs/IMAGE-CREDITS.md.
 */
export type GalleryShot = {
  id: string;
  src: string;
  alt: string;
  kicker: string;
  caption: string;
  href: string;
};

/** Hero and share-card photo. 1280×720 source; OG crop is 1200×630. */
export const galleryHero = {
  src: "/images/gallery-outboard-overhaul.jpg",
  alt: "International students working on an outboard motor at the Naval Small Craft Instruction and Technical Training School in Mississippi",
  altEs:
    "Estudiantes internacionales trabajando en un motor fuera de borda en la escuela de instrucción de embarcaciones pequeñas de la Armada de EE. UU. en Mississippi",
} as const;

export const galleryWork: GalleryShot[] = [
  {
    id: "cutter-diesel",
    src: serviceHour100Image.src,
    alt: serviceHour100Image.alt,
    kicker: "Diesel",
    caption: serviceHour100Image.alt,
    href: "/services/marine-engine-repair",
  },
  {
    id: "yanmar",
    src: serviceHour300Image.src,
    alt: serviceHour300Image.alt,
    kicker: "Engine bay",
    caption: `${serviceHour300Image.alt}. Photo by DavidPaygate, CC BY-SA 4.0.`,
    href: "/services/marine-engine-repair",
  },
  {
    id: "outboard-carburetor",
    src: serviceOutboardImage.src,
    alt: serviceOutboardImage.alt,
    kicker: "Outboard",
    caption: serviceOutboardImage.alt,
    href: "/services/outboard-motor-repair",
  },
  {
    id: "outboard-stern",
    src: serviceMobileRepairImage.src,
    alt: serviceMobileRepairImage.alt,
    kicker: "On the water",
    caption: serviceMobileRepairImage.alt,
    href: "/services/mobile-boat-repair",
  },
  {
    id: "outboard-overhaul",
    src: galleryHero.src,
    alt: galleryHero.alt,
    kicker: "Overhaul",
    caption:
      "International students working on an outboard motor during an overhaul course at Naval Small Craft Instruction and Technical Training School, Stennis Space Center, Mississippi. U.S. Navy photo.",
    href: "/services/outboard-motor-repair",
  },
  {
    id: "outboard-wiring",
    src: "/images/gallery-outboard-wiring.jpg",
    alt: "Coast Guard machinery technician and Jamaica Defense Force members with an outboard cowling off, wiring exposed, in Port Antonio, Jamaica",
    kicker: "Wiring",
    caption:
      "Machinery Technician 2nd Class Javier Carpio helping Jamaica Defense Force members troubleshoot an outboard with the cowling off, in Port Antonio, Jamaica. U.S. Navy photo.",
    href: "/services/boat-diagnostics",
  },
  {
    id: "electrical-panels",
    src: "/images/gallery-electrical-panels.jpg",
    alt: "Electrical panels, meters, and cable runs in the engine room of the steamship Virginia V",
    kicker: "Electrical",
    caption:
      "Electrical panels, meters, and cable runs in the engine room of the steamship Virginia V at South Lake Union, Seattle. Photo by Joe Mabel, CC BY-SA 4.0.",
    href: "/services/electrical-repairs",
  },
  {
    id: "teak-deck",
    src: "/images/gallery-teak-deck.jpg",
    alt: "Plastimo compass and weathered teak planks on a sailing yacht deck",
    kicker: "Deck",
    caption:
      "A Plastimo compass and weathered teak planks on a sailing yacht deck. Photograph by Stefan Götte, public domain.",
    href: "/services",
  },
];

export const galleryWater: GalleryShot[] = [
  {
    id: "ftl-intracoastal",
    src: "/images/gallery-ftl-intracoastal.jpg",
    alt: "A motor yacht underway on the Intracoastal Waterway in Fort Lauderdale, with waterfront houses behind it",
    kicker: "Intracoastal",
    caption:
      "A motor yacht on the Intracoastal Waterway in Fort Lauderdale, with waterfront houses along the bank. Photo by U+1F360, CC BY-SA 4.0.",
    href: "/locations/fort-lauderdale",
  },
  {
    id: "ftl-new-river",
    src: "/images/gallery-ftl-new-river.jpg",
    alt: "A motor yacht tied to a dock on the New River in downtown Fort Lauderdale",
    kicker: "New River",
    caption:
      "A motor yacht docked on the New River in downtown Fort Lauderdale. Photo by Alistair Cunningham, CC BY 3.0.",
    href: "/locations/fort-lauderdale",
  },
  {
    id: "ftl-marinas",
    src: "/images/gallery-ftl-marinas.jpg",
    alt: "Aerial view of yacht basins along the New River in Fort Lauderdale, with Interstate 95 crossing the river",
    kicker: "Marinas",
    caption:
      "Yacht basins along the New River in Fort Lauderdale, with Interstate 95 crossing the river. Photo by formulanone, CC BY-SA 2.0.",
    href: "/locations/fort-lauderdale",
  },
  {
    id: "ftl-harbor",
    src: "/images/gallery-ftl-harbor.jpg",
    alt: "Yachts and center consoles on the Intracoastal in Fort Lauderdale, seen from the 17th Street Bridge",
    kicker: "Harbor",
    caption:
      "Yachts and small boats on the Intracoastal in Fort Lauderdale, from the 17th Street Bridge toward Harbor Beach. Photo by Kolossos, CC BY-SA 3.0.",
    href: "/locations/fort-lauderdale",
  },
  {
    id: "ftl-stern",
    src: "/images/gallery-ftl-stern.jpg",
    alt: "Stern of the yacht Promise with Fort Lauderdale, FL lettered on the transom",
    kicker: "Stern",
    caption:
      "Stern of the yacht Promise, with Fort Lauderdale, FL lettered on the transom. Photo by Jonathan Palombo, CC BY 2.0.",
    href: "/locations/fort-lauderdale",
  },
];
