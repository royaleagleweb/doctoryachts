import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { AmbientMotes } from "@/components/AmbientMotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCta } from "@/components/MobileCta";
import { PointerTrail } from "@/components/PointerTrail";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollReveal } from "@/components/ScrollReveal";
import { absoluteUrl, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

/**
 * Cutting-edge, less template:
 * Syne — geometric display (not soft serif luxury cliché)
 * IBM Plex Sans — technical, human, service-real
 */
const plex = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
    images: [{ url: "/images/home-hero-v2.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boat Repair & Maintenance | Doctor Yachts",
    description: site.description,
    images: ["/images/home-hero-v2.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plex.variable} ${syne.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans">
        <JsonLd data={[localBusinessJsonLd(), webSiteJsonLd()]} />
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
