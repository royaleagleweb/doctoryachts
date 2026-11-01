import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryHero, galleryWater, galleryWork } from "@/lib/gallery-photos";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat & Yacht Gallery | Doctor Yachts South Florida",
  description:
    "Reference photos of marine engines, outboards, electrical panels, and Fort Lauderdale marinas. Not Doctor Yachts job photos.",
  path: "/gallery",
  keywords: [
    "Fort Lauderdale Intracoastal photos",
    "boat engine photographs",
    "South Florida marina photos",
    "outboard motor maintenance photos",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      <PageHero
        eyebrow="Gallery"
        title="Marine work and Fort Lauderdale water"
        subhead="Reference photographs. Not Doctor Yachts job photos."
        description="Public-domain and Creative Commons pictures of engines, outboards, electrical panels, and Fort Lauderdale waterways. Each caption says what the photo actually shows."
        image={galleryHero}
      />

      <Section>
        <SectionHeading
          title="Engines, outboards, and electrical gear"
          description="Coast Guard, Navy, and Wikimedia photographs of mechanic work and boat systems. They are examples of the equipment, not pictures from a Doctor Yachts visit."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {galleryWork.map((shot) => (
            <MediaCard
              key={shot.id}
              href={shot.href}
              image={shot}
              kicker={shot.kicker}
              description={shot.caption}
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-steel">
          Looking for service? See <Link href="/services">all boat repair services</Link>,{" "}
          <Link href="/locations">service areas</Link>, or <Link href="/book">book a visit</Link>.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          title="Fort Lauderdale waterways"
          description="Published photographs of the Intracoastal, the New River, and the harbor. They are not pictures from a Doctor Yachts dock call."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {galleryWater.map((shot) => (
            <MediaCard
              key={shot.id}
              href={shot.href}
              image={shot}
              kicker={shot.kicker}
              description={shot.caption}
            />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
