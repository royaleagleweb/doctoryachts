import type { Locale } from "./i18n";

/**
 * Card photos whose English alt is stored on the file record.
 * Spanish pages swap alt/caption by src.
 */
export const serviceOutboardImage = {
  src: "/images/service-outboard.jpg",
  alt: "Mechanic adjusting the carburetor on a small Johnson outboard from a boat on the water",
  altEs:
    "Mecánico ajustando el carburador de un motor fuera de borda Johnson pequeño, desde un bote en el agua",
  caption: "Outboard motor service on the water",
  captionEs: "Servicio de motor fuera de borda en el agua",
} as const;

export const serviceMobileRepairImage = {
  src: "/images/service-mobile-repair.webp",
  alt: "Two U.S. Coast Guard machinery technicians working on an outboard motor at the stern of a boat on the water",
  altEs:
    "Dos técnicos de maquinaria de la Guardia Costera de EE. UU. trabajando en un motor fuera de borda en la popa de un bote en el agua",
  caption: "On-the-water outboard work at the stern",
  captionEs: "Trabajo de fuera de borda en la popa, en el agua",
} as const;

/** Coast Guard cutter diesel. See docs/IMAGE-CREDITS.md. Not a Doctor Yachts dock photo. */
export const serviceHour100Image = {
  src: "/images/marine-mechanic.jpg",
  alt: "U.S. Coast Guard machinery technician using a wrench on the main diesel engine aboard the cutter Eagle",
  altEs:
    "Técnico de maquinaria de la Guardia Costera de EE. UU. usando una llave en el motor diésel principal a bordo del cúter Eagle",
  caption: "Wrench work on a cutter's main diesel",
  captionEs: "Trabajo con llave en el diésel principal de un cúter",
} as const;

/** Yanmar 6LPA in a Corvette 320 engine bay. See docs/IMAGE-CREDITS.md. */
export const serviceHour300Image = {
  src: "/images/service-hour-300.jpg",
  alt: "Yanmar 6LPA marine diesel with hoses, belts, and filters in a motor yacht engine bay",
  altEs:
    "Diésel marino Yanmar 6LPA con mangueras, correas y filtros en el compartimento de motor de un yate",
  caption: "Engine bay with hoses, belts, and filters",
  captionEs: "Compartimento de motor con mangueras, correas y filtros",
} as const;

const bySrc = {
  [serviceOutboardImage.src]: serviceOutboardImage,
  [serviceMobileRepairImage.src]: serviceMobileRepairImage,
  [serviceHour100Image.src]: serviceHour100Image,
  [serviceHour300Image.src]: serviceHour300Image,
} as const;

export function serviceImageFields(image: (typeof bySrc)[keyof typeof bySrc]): {
  src: string;
  alt: string;
  caption: string;
} {
  return { src: image.src, alt: image.alt, caption: image.caption };
}

export function localizeServiceImage<T extends { src: string; alt: string; caption?: string }>(
  image: T,
  locale: Locale,
): T {
  const known = bySrc[image.src as keyof typeof bySrc];
  if (!known || locale !== "es") return image;
  return {
    ...image,
    alt: known.altEs,
    ...(image.caption !== undefined ? { caption: known.captionEs } : {}),
  };
}

export function localizeServiceImages<T extends { src: string; alt: string; caption?: string }>(
  images: readonly T[],
  locale: Locale,
): T[] {
  return images.map((image) => localizeServiceImage(image, locale));
}
