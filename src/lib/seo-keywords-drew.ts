/**
 * Keyword bank adapted from Drew's Marine Service SEO patterns
 * (Fort Lauderdale / South Florida mobile boat repair competitor).
 * Use for titles, metas, and page copy—do not copy their brand language.
 */
export const drewStyleKeywords = {
  head: [
    "boat repair",
    "boat maintenance",
    "boat mechanic",
    "marine engine repair",
    "mobile boat repair",
    "dockside boat repair",
    "on-site boat repair",
  ],
  engine: [
    "inboard engine repair",
    "outboard engine repair",
    "outboard engine maintenance",
    "cooling system repairs",
    "drive system repair",
  ],
  systems: [
    "boat electrical repairs",
    "marine electronics",
    "marine GPS systems",
    "boat plumbing repairs",
  ],
  local: [
    "Fort Lauderdale, FL",
    "South Florida, FL",
    "Miami, FL",
    "Palm Beach, FL",
    "South Florida",
    "Broward County",
  ],
} as const;

/** Title formula from Drew: Keyword | Brand | City A & City B, FL */
export function titleWithGeo(primary: string, secondary?: string) {
  const left = secondary ? `${primary}, ${secondary}` : primary;
  return `${left} | Doctor Yachts | Fort Lauderdale & Miami, FL`;
}

/** Meta formula from Drew: Get expert X in City. Handle A, B & C. Free estimate. */
export function metaWithCta(service: string, extras: string) {
  return `Get expert ${service} in Fort Lauderdale & South Florida, FL. ${extras} Free estimates. Book Doctor Yachts or call.`;
}
