import type { Metadata } from "next";
import { hreflangLanguages, localeFromPath, servicePath, type Locale } from "./i18n";
import { locations } from "./locations";
import { servicesInHubOrderLocalized } from "./services-localized";
import { services } from "./services";
import { site, seoKeywords } from "./site";

type BuildMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: Locale;
};

/** Default social/share image — keep in sync with LocalBusiness schema + layout OG */
export const defaultOgImage = {
  url: "/images/service-engine.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} — mobile boat mechanic in Fort Lauderdale`,
} as const;

export function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
  locale,
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path);
  const loc = locale ?? localeFromPath(path);
  const allKeywords = [...new Set([...keywords, ...seoKeywords.slice(0, 10)])];
  const languages = hreflangLanguages(path, site.url);

  return {
    title: { absolute: title },
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: loc === "es" ? "es_US" : "en_US",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export function localBusinessJsonLd(locale: Locale = "en") {
  const localized = servicesInHubOrderLocalized(locale);
  const catalogName =
    locale === "es"
      ? "Servicios de mecánico náutico en el sur de la Florida"
      : "South Florida marine mechanic services";
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName:
      locale === "es" ? "Doctor Yachts — mecánicos náuticos" : "Doctor Yachts Marine Mechanics",
    description: locale === "es" ? site.descriptionEs : site.description,
    url: locale === "es" ? `${site.url}/es` : site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    slogan: locale === "es" ? site.taglineEs : site.tagline,
    image: absoluteUrl(defaultOgImage.url),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.addressCountry,
    },
    sameAs: [site.profiles.yelp, site.profiles.google],
    areaServed: locations.map((loc) => ({
      "@type": "City",
      name: loc.name,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    knowsAbout:
      locale === "es"
        ? [
            "Mecánico de botes móvil Fort Lauderdale",
            "Reparación de motores marinos",
            "Reparación de motor fuera de borda",
            "Reparación eléctrica de barcos",
            "Sistema de enfriamiento",
            "Mantenimiento de barcos",
            "Plomería de barcos",
            "Fort Lauderdale",
            "Pompano Beach",
            "el sur de la Florida",
          ]
        : [
            "Mobile boat mechanic Fort Lauderdale",
            "Marine engine repair Fort Lauderdale",
            "Outboard motor repair Fort Lauderdale",
            "Boat electrical repair",
            "Boat cooling system repair",
            "Boat maintenance Fort Lauderdale",
            "Boat plumbing repair",
          ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: catalogName,
      itemListElement: localized.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(servicePath(services.find((s) => s.id === service.id)?.slug ?? service.slug, locale)),
        },
      })),
    },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.streetAddress,
        addressLocality: site.addressLocality,
        addressRegion: site.addressRegion,
        postalCode: site.postalCode,
        addressCountry: site.addressCountry,
      },
    },
    areaServed: locations.map((loc) => loc.name),
    serviceType: input.name,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  dateModified: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    dateModified: input.dateModified,
    datePublished: input.datePublished ?? input.dateModified,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: absoluteUrl(input.path),
    about: [
      "Boat repair",
      "Marine engine repair",
      "Fort Lauderdale",
      "South Florida",
    ],
  };
}

export function howToJsonLd(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}
