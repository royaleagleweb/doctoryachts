import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

/**
 * Luxury + service typography
 * Headlines: Playfair Display (classic luxury)
 * Body / UI: Manrope (clean professional service)
 */
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
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
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={[localBusinessJsonLd(), webSiteJsonLd()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
