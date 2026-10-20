/** Google truncates titles around 60 characters and snippets around 160. */
export const TITLE_MAX = 60;
export const DESC_MIN = 120;
export const DESC_MAX = 160;

/** Matches `site.name`. Inlined so this helper stays free of the page-copy graph. */
const BRAND = "Doctor Yachts";

/**
 * Primary keyword first, then location if it fits, then the brand only when
 * the full string stays within {@link TITLE_MAX}. New pages should build
 * titles here instead of hand-appending "| Doctor Yachts | Fort Lauderdale".
 */
export function composePageTitle(input: {
  keyword: string;
  location?: string;
  brand?: string;
}): string {
  const keyword = input.keyword.replace(/\s+/g, " ").trim();
  const location = input.location?.replace(/\s+/g, " ").trim() ?? "";
  const brand = (input.brand ?? BRAND).trim();
  const candidates = [
    location && brand ? `${keyword} ${location} | ${brand}` : "",
    location ? `${keyword} | ${location}` : "",
    brand ? `${keyword} | ${brand}` : "",
    location ? `${keyword} ${location}` : "",
    keyword,
  ].filter((candidate) => candidate.length > 0);

  for (const candidate of candidates) {
    if (candidate.length <= TITLE_MAX) return candidate;
  }
  return truncateAtWord(keyword, TITLE_MAX);
}

const CITY_SUFFIX =
  /\s+(?:fort lauderdale|miami y miami beach|miami(?:\s*&\s*miami beach)?|pompano beach|palm beach(?:\s+county)?|dania beach|hollywood)(?:\s*,?\s*fl)?$/i;

function stripTrailingLocation(keyword: string): string {
  return keyword.replace(CITY_SUFFIX, "").replace(/[,\s]+$/g, "").trim();
}

/** Short place name we can afford inside a 60-character title. */
function shortLocation(text: string): string {
  const t = text.toLowerCase();
  if (/miami y miami beach|miami & miami beach/.test(t)) return "Miami y Miami Beach";
  if (/\bmiami\b/.test(t)) return "Miami";
  if (/pompano/.test(t)) return "Pompano Beach";
  if (/dania/.test(t)) return "Dania Beach";
  if (/hollywood/.test(t)) return "Hollywood";
  if (/palm beach/.test(t)) return "Palm Beach";
  if (/fort lauderdale|south florida|sur de la florida/.test(t)) return "Fort Lauderdale";
  return "";
}

function mentionsLocation(title: string, location: string): boolean {
  return title.toLowerCase().includes(location.toLowerCase());
}

/**
 * Keep a title that already fits. When it is too long — usually
 * "Keyword | Doctor Yachts | Fort Lauderdale & South Florida" — rebuild it
 * so the primary keyword stays first and location wins over the brand.
 */
export function fitPageTitle(title: string): string {
  const clean = title.replace(/\s+/g, " ").trim();
  if (clean.length <= TITLE_MAX) return clean;

  const parts = clean.split(/\s+\|\s+/);
  const rest = parts.slice(1).join(" | ");
  const location = shortLocation(rest) || shortLocation(parts[0]) || "Fort Lauderdale";
  const keyword = stripTrailingLocation(parts[0]);
  const brand = /doctor yachts/i.test(keyword) ? "" : BRAND;
  const result = composePageTitle({ keyword, location, brand });

  if (!mentionsLocation(result, location)) {
    const shorter = keyword.split(",")[0].split(/\s+&\s+/)[0].trim();
    if (shorter.length >= 12 && shorter.length < keyword.length) {
      const retry = composePageTitle({ keyword: shorter, location, brand });
      if (mentionsLocation(retry, location)) return retry;
    }
  }
  return result;
}

/** Cap an over-long meta description without padding a short one. */
export function fitMetaDescription(description: string): string {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length <= DESC_MAX) return clean;

  let sentenceEnd = -1;
  const limit = Math.min(DESC_MAX, clean.length);
  for (let i = DESC_MIN; i <= limit; i++) {
    const prev = clean[i - 1];
    if (
      (prev === "." || prev === "!" || prev === "?") &&
      (i === clean.length || clean[i] === " ")
    ) {
      sentenceEnd = i;
    }
  }
  if (sentenceEnd >= DESC_MIN) return clean.slice(0, sentenceEnd).trim();

  const slice = clean.slice(0, DESC_MAX);
  const word = slice.lastIndexOf(" ");
  if (word >= DESC_MIN) {
    return slice.slice(0, word).replace(/[,:;—–-]\s*$/g, "").trim();
  }
  return slice.trim();
}

/**
 * Homepage snippets. Kept off `site.description` so LocalBusiness schema
 * copy stays as written.
 */
export const homeMetaDescription =
  "Boat repair and maintenance in Fort Lauderdale and South Florida. Mobile dockside engine, electrical, and service. Free estimates — call Doctor Yachts.";

export const homeMetaDescriptionEs =
  "Reparación de barcos y mantenimiento de yates en Fort Lauderdale y el sur de la Florida. Mecánico móvil en el muelle. Pida un presupuesto gratis.";

/**
 * Meta descriptions that must differ from the schema `description` field.
 * JSON-LD keeps the existing seoDescription; only the meta tag uses these.
 */
const META_DESCRIPTION_OVERRIDES: Record<string, string> = {
  "/services/100-hour-service":
    "100-hour boat and yacht service in Fort Lauderdale and South Florida. Oil, filters, impeller, zincs, and batteries. Dockside. Request a free estimate.",
  "/services/monthly-boat-maintenance":
    "Monthly boat maintenance in Fort Lauderdale, Miami, and South Florida: engine checks, washdown, and battery and bilge checks. Contact us for a quote.",
  "/es/servicios/reparacion-de-motores-marinos":
    "Reparación de motores internos y fuera de borda en Fort Lauderdale y el sur de la Florida. Diagnóstico primero, en el muelle. Pida presupuesto gratis.",
  "/es/servicios/sistema-de-enfriamiento":
    "Reparación del sistema de enfriamiento en Fort Lauderdale. Sobrecalentamiento, impulsores y strainers. Servicio en el muelle. Pida un presupuesto gratis.",
  "/es/servicios/servicio-100-horas":
    "Servicio 100 horas de botes y yates en Fort Lauderdale: aceite, filtros, impulsor, zincs y baterías. En el muelle. Pida un presupuesto gratis.",
  "/es/servicios/servicio-300-horas":
    "Servicio 300 horas de botes y yates en Fort Lauderdale. Enfriamiento, eléctrico y combustible más a fondo, en el muelle. Pida presupuesto gratis.",
  "/es/servicios/servicio-de-motor-fuera-de-borda":
    "Servicio de motor fuera de borda en Fort Lauderdale: no-arranques, sobrecalentamiento y servicio 100 horas. Diagnóstico primero. Pida presupuesto gratis.",
  "/guides/why-is-my-boat-engine-overheating":
    "Boat engine overheating? Impellers, clogged strainers, and heat exchangers are common causes. Stop running and call for cooling repair in Fort Lauderdale.",
  "/guides/how-often-to-service-a-boat-in-florida":
    "How often to service a boat in Florida: saltwater intervals for oil, impellers, zincs, and batteries. Local Fort Lauderdale advice. Book a dockside visit.",
  "/locations/palm-beach":
    "Yacht and boat mechanic in Palm Beach County: engine repair, marine electrical, diagnostics, and dockside maintenance. Free estimates from Doctor Yachts.",
  "/es/ubicaciones/palm-beach":
    "Mecánico de yates y botes en el condado de Palm Beach: motor, eléctrico, diagnóstico y mantenimiento en el muelle. Pida un presupuesto gratis.",
};

export function metaDescriptionFor(path: string, fallback: string): string {
  return META_DESCRIPTION_OVERRIDES[path] ?? fallback;
}

function truncateAtWord(value: string, max: number): string {
  if (value.length <= max) return value;
  const slice = value.slice(0, max);
  const word = slice.lastIndexOf(" ");
  const cut = word >= 24 ? slice.slice(0, word) : slice;
  return cut.replace(/[|,;:–—\s-]+$/g, "").trim();
}
