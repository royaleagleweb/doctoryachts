import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LuxuryEffects } from "@/components/LuxuryEffects";
import { absoluteUrl, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

/** V1 Luxury Navy — DM Sans body */
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** V1 Luxury Navy — Cormorant Garamond display */
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Boat Repair, Boat Maintenance | Doctor Yachts | Fort Lauderdale & Pompano Beach, FL",
    template: `%s | Doctor Yachts`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Boat Repair & Maintenance | Doctor Yachts | Fort Lauderdale, FL",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={[localBusinessJsonLd(), webSiteJsonLd()]} />
        <LuxuryEffects />
        <Header />
        <main className="flex-1 pt-[4.75rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
