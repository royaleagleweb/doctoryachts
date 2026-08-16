import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { images, yachtStrip } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat & Yacht Gallery | Doctor Yachts South Florida",
  description:
    "Gallery of South Florida yachts, marinas, and marine mechanic work—engines, electrical, dockside service. Doctor Yachts Fort Lauderdale.",
  path: "/gallery",
  keywords: [
    "yacht gallery Fort Lauderdale",
    "boat repair gallery",
    "South Florida marina photos",
    "marine mechanic work photos",
  ],
});

const workShots = [
  { ...images.gallery.engine, kicker: "Engine", href: "/services/marine-engine-repair" },
  { ...images.gallery.electrical, kicker: "Electrical", href: "/services/electrical-repairs" },
  { ...images.gallery.diagnostics, kicker: "Diagnostics", href: "/services/boat-diagnostics" },
  { ...images.gallery.maintenance, kicker: "Maintenance", href: "/services/boat-maintenance" },
  { ...images.gallery.systems, kicker: "Systems", href: "/services/plumbing-repairs" },
  { ...images.gallery.dockside, kicker: "Mobile", href: "/services/mobile-boat-repair" },
  { ...images.gallery.hull, kicker: "Hull", href: "/services" },
  { ...images.gallery.teak, kicker: "Deck", href: "/about" },
];

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
        title="Yachts, marinas & marine service"
        description="South Florida waters, dockside life, and the systems we repair—engines, electrical, and mobile marina work."
        image={images.gallery.intracoastal}
      />

      <Section>
        <SectionHeading
          title="Yacht & marina branding"
          description="Waterside imagery for Fort Lauderdale, Pompano Beach, and nearby South Florida. Captions describe the photo, not a specific job."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {yachtStrip.map((shot) => (
            <MediaCard
              key={shot.src}
              href="/locations"
              image={shot}
              kicker={shot.caption}
              description={shot.alt}
            />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          title="Systems & service work"
          description="Service-category photos for engines, electrical, diagnostics, maintenance, and dockside repair. These are context shots, not claimed job photos."
        />
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {workShots.map((shot) => (
            <MediaCard
              key={shot.src + shot.kicker}
              href={shot.href}
              image={shot}
              kicker={shot.kicker}
              description={shot.alt}
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-steel">
          Looking for service? See <Link href="/services">all boat repair services</Link>,{" "}
          <Link href="/locations">service areas</Link>, or <Link href="/book">book a visit</Link>.
        </p>
      </Section>

      <CTA />
    </>
  );
}
