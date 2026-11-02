"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackEvent, trackPageView } from "@/lib/analytics";
import { localeFromPath } from "@/lib/i18n";

/**
 * GA4 via next/script (afterInteractive): the tag loads after hydration
 * so it does not block first paint. Route changes send page_view because
 * the App Router updates the URL with history.pushState and the default
 * gtag pageview would only see the first document.
 *
 * send_page_view is false so the config hit is not counted twice.
 * In the GA4 stream, turn off Enhanced measurement →
 * "Page changes based on browser history events", or client navigations
 * are counted again by gtag.js itself.
 */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  if (!GA_MEASUREMENT_ID || measurementId !== GA_MEASUREMENT_ID) return null;

  const config = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${measurementId}', { send_page_view: false });
`.trim();

  return (
    <>
      <Script id="ga4-config" strategy="afterInteractive">
        {config}
      </Script>
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <GaContactClicks />
    </>
  );
}

/** Wrapped in <Suspense> by the root layout — useSearchParams requires it. */
export function GaPageViews() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    trackPageView(query ? `${pathname}?${query}` : pathname);
  }, [pathname, query]);

  return null;
}

function GaContactClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const pageLanguage = localeFromPath(window.location.pathname);
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_language: pageLanguage });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href, page_language: pageLanguage });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
