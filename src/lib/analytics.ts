/**
 * GA4 is off unless NEXT_PUBLIC_GA_MEASUREMENT_ID is a measurement ID.
 * Next.js inlines NEXT_PUBLIC_* at build time. Unset, these helpers
 * no-op and the layout renders no tag.
 */

const MEASUREMENT_ID = /^G-[A-Z0-9]+$/;

export const GA_MEASUREMENT_ID = readGaMeasurementId(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

function readGaMeasurementId(raw: string | undefined): string | undefined {
  const value = raw?.trim() ?? "";
  return MEASUREMENT_ID.test(value) ? value : undefined;
}

type EventParams = Record<string, string>;

type GtagCommand = "js" | "config" | "event";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, ...args: unknown[]) => void;
  }
}

function ensureGtag(): Window["gtag"] | undefined {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return undefined;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    // Queue until gtag.js loads. gtag.js indexes this like the official snippet.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }
  return window.gtag;
}

/** No-op when the measurement ID is unset or before the browser exists. */
export function trackEvent(name: string, params?: EventParams) {
  const gtag = ensureGtag();
  if (!gtag) return;
  gtag("event", name, params);
}

export function trackPageView(pagePath: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
  const path = pagePath.split("?")[0] || "/";
  const pageLanguage = path === "/es" || path.startsWith("/es/") ? "es" : "en";
  trackEvent("page_view", {
    page_path: pagePath || "/",
    page_location: window.location.href,
    page_title: document.title,
    page_language: pageLanguage,
  });
}

/** Successful lead form only. Call after the API accepts the submission. */
export function trackLead(formName: "booking" | "free-estimate" | "contact", pageLanguage: "en" | "es") {
  trackEvent("generate_lead", {
    form_name: formName,
    page_language: pageLanguage,
  });
}
