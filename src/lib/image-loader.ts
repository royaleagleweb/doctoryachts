"use client";

import type { ImageLoaderProps } from "next/image";
import variants from "./image-variants.json";

const WIDTHS = [...variants.widths].sort((a, b) => a - b);

/**
 * Maps a next/image request onto a file written by scripts/optimize-images.mjs.
 * OpenNext on Workers serves these as static assets. /_next/image is not used:
 * without an IMAGES binding it returns the original bytes for every width.
 */
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  if (!src.startsWith("/images/") || src.startsWith("/images/opt/")) {
    return src;
  }

  const snapped = WIDTHS.find((candidate) => candidate >= width) ?? WIDTHS[WIDTHS.length - 1];
  const base = src.slice("/images/".length).replace(/\.[a-z0-9]+$/i, "");
  return `/images/opt/${base}-${snapped}.webp`;
}
