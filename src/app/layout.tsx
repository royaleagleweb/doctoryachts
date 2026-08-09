import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LuxuryEffects } from "@/components/LuxuryEffects";
import { absoluteUrl, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

/**
 * V1 Luxury Navy typography (sitewide)
 * Body / UI: DM Sans
 * Headlines: Cormorant Garamond
 */
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={[localBusinessJsonLd(), webSiteJsonLd()]} />
        <LuxuryEffects />
        <Header />
        <main className="flex-1 pt-[4.75rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
