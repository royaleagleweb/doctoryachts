/**
 * Lightweight locale helpers for EN (default URLs) + ES (/es prefix).
 * Keep this module tiny — sitemap and middleware must not import page-copy graphs.
 */

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "dy_locale";
export const ICON_CACHE = "20260821";

/** Bots must never be cookie-redirected. */
export const BOT_UA =
  /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|slackbot|applebot|semrush|ahrefs|mj12bot|dotbot|gptbot|chatgpt|claudebot|perplexity|amazonbot|bytespider|ccbot/i;

export const SERVICE_SLUG_ES: Record<string, string> = {
  "marine-engine-repair": "reparacion-de-motores-marinos",
  "electrical-repairs": "reparacion-electrica-de-barcos",
  "cooling-system-repairs": "sistema-de-enfriamiento",
  "boat-diagnostics": "diagnostico-de-yates",
  "boat-maintenance": "mantenimiento-de-yates",
  "plumbing-repairs": "plomeria-de-barcos",
  "mobile-boat-repair": "reparacion-movil-de-barcos",
  "outboard-motor-repair": "servicio-de-motor-fuera-de-borda",
  "100-hour-service": "servicio-100-horas",
  "300-hour-service": "servicio-300-horas",
};

export const SERVICE_SLUG_EN: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_SLUG_ES).map(([en, es]) => [es, en]),
);

/** Static page pairs — English stays at current URLs. */
export const PAGE_PAIRS: { en: string; es: string }[] = [
  { en: "/", es: "/es" },
  { en: "/services", es: "/es/servicios" },
  { en: "/locations", es: "/es/ubicaciones" },
  { en: "/faq", es: "/es/preguntas" },
  { en: "/book", es: "/es/reservar" },
  { en: "/free-estimate", es: "/es/presupuesto-gratis" },
  { en: "/about", es: "/es/nosotros" },
  { en: "/contact", es: "/es/contacto" },
];

const STATIC_EN_TO_ES = new Map(PAGE_PAIRS.map((p) => [p.en, p.es]));
const STATIC_ES_TO_EN = new Map(PAGE_PAIRS.map((p) => [p.es, p.en]));

export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  const noQuery = pathname.split("?")[0] ?? pathname;
  if (noQuery.length > 1 && noQuery.endsWith("/")) return noQuery.slice(0, -1);
  return noQuery || "/";
}

export function localeFromPath(pathname: string): Locale {
  const path = normalizePath(pathname);
  return path === "/es" || path.startsWith("/es/") ? "es" : "en";
}

export function isBotUserAgent(ua: string | null | undefined): boolean {
  return Boolean(ua && BOT_UA.test(ua));
}

export function servicePath(enSlug: string, locale: Locale = "en"): string {
  if (locale === "es") {
    const esSlug = SERVICE_SLUG_ES[enSlug] ?? enSlug;
    return `/es/servicios/${esSlug}`;
  }
  return `/services/${enSlug}`;
}

export function locationPath(slug: string, locale: Locale = "en"): string {
  return locale === "es" ? `/es/ubicaciones/${slug}` : `/locations/${slug}`;
}

export function enSlugFromServicePath(pathname: string): string | null {
  const path = normalizePath(pathname);
  const en = path.match(/^\/services\/([^/]+)$/);
  if (en?.[1]) return en[1];
  const es = path.match(/^\/es\/servicios\/([^/]+)$/);
  if (es?.[1]) return SERVICE_SLUG_EN[es[1]] ?? null;
  return null;
}

/**
 * Locale pair for a public URL, or null when that page has no translation.
 * Middleware uses this so a Spanish cookie never yanks someone off /guides.
 * The header switcher still falls back to home via switchPath().
 */
export function switchPathOrNull(pathname: string, target: Locale): string | null {
  const path = normalizePath(pathname);
  const current = localeFromPath(path);
  if (current === target) return path;

  const serviceEn = enSlugFromServicePath(path);
  if (serviceEn) return servicePath(serviceEn, target);

  const locEn = path.match(/^\/locations\/([^/]+)$/);
  if (locEn?.[1]) return locationPath(locEn[1], target);
  const locEs = path.match(/^\/es\/ubicaciones\/([^/]+)$/);
  if (locEs?.[1]) return locationPath(locEs[1], target);

  if (target === "es") return STATIC_EN_TO_ES.get(path) ?? null;
  return STATIC_ES_TO_EN.get(path) ?? null;
}

/** Map a public URL to the other locale. Unpaired pages fall back to home. */
export function switchPath(pathname: string, target: Locale): string {
  return switchPathOrNull(pathname, target) ?? (target === "es" ? "/es" : "/");
}

export function pathFor(locale: Locale, enPath: string): string {
  return switchPath(enPath, locale);
}

export function hreflangLanguages(pathname: string, baseUrl: string): Record<string, string> {
  const path = normalizePath(pathname);
  const base = baseUrl.replace(/\/$/, "");
  const enPath = localeFromPath(path) === "es" ? switchPath(path, "en") : path;
  const esPath = switchPath(enPath, "es");
  const abs = (p: string) => (p === "/" ? base : `${base}${p}`);
  return {
    en: abs(enPath),
    es: abs(esPath),
    "x-default": abs(enPath),
  };
}

export function setLocaleCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function readLocaleCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=(en|es)(?:;|$)`));
  return match?.[1] === "es" || match?.[1] === "en" ? match[1] : null;
}
