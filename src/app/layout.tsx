import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { AmbientMotes } from "@/components/AmbientMotes";
import { DocumentLang } from "@/components/DocumentLang";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCta } from "@/components/MobileCta";
import { PointerTrail } from "@/components/PointerTrail";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ICON_CACHE } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteUrl, defaultOgImage, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

/** One family sitewide — IBM Plex Sans. No display / brochure face. */
const plex = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const iconV = `?v=${ICON_CACHE}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
    template: `%s | Doctor Yachts`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  icons: {
    icon: [
      { url: `/favicon.ico${iconV}`, sizes: "48x48", type: "image/x-icon" },
      { url: `/icon.png${iconV}`, sizes: "32x32", type: "image/png" },
      { url: `/icon-512.png${iconV}`, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: `/apple-icon.png${iconV}`, sizes: "180x180", type: "image/png" }],
    shortcut: `/favicon.ico${iconV}`,
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      en: absoluteUrl("/"),
      es: absoluteUrl("/es"),
      "x-default": absoluteUrl("/"),
    },
  },
  openGraph: {
    title: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
    description: site.description,
    images: [defaultOgImage.url],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getRequestLocale();
  return (
    <html lang={locale} className={`${plex.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans">
        <DocumentLang />
        <JsonLd data={[localBusinessJsonLd(locale), webSiteJsonLd()]} />
        <ScrollProgress />
        <AmbientMotes />
        <PointerTrail />
        <ScrollReveal />
        <Header />
        <main className="relative z-[2] flex-1">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
