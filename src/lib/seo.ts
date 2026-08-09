import type { Metadata } from "next";
import { locations } from "./locations";
import { site, seoKeywords } from "./site";

type BuildMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

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
}: BuildMetaInput): Metadata {
  const url = absoluteUrl(path);
  const allKeywords = [...new Set([...keywords, ...seoKeywords.slice(0, 10)])];

  // Use absolute titles so layout template does not append "| Doctor Yachts" twice
  // when page titles already include the brand (Drew-style SEO titles).
  return {
    title: { absolute: title },
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: "Doctor Yachts Marine Mechanics",
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    slogan: site.tagline,
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
    knowsAbout: [
      "Yacht repair Fort Lauderdale",
      "Boat repair Miami",
      "Yacht mechanic Palm Beach",
      "Marine engine repair",
      "Marine electrical systems",
      "Dockside boat repair South Florida",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "South Florida marine mechanic services",
      itemListElement: [
        "Yacht engine repair",
        "Boat engine repair",
        "Marine electrical repair",
        "Boat maintenance",
        "Yacht diagnostics",
        "Dockside boat repair",
      ],
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
      "@type": "AutoRepair",
      name: site.name,
      url: site.url,
      telephone: site.phone,
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/guides?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
