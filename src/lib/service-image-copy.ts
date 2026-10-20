import type { Locale } from "./i18n";

/**
 * Replacement photos for the outboard and mobile-repair cards.
 * English copy is what the files store; Spanish pages swap alt/caption by src.
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

const bySrc = {
  [serviceOutboardImage.src]: serviceOutboardImage,
  [serviceMobileRepairImage.src]: serviceMobileRepairImage,
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
