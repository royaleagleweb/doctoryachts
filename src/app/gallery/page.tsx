import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
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
  { ...images.gallery.engine, tag: "Engine", href: "/services/marine-engine-repair" },
  { ...images.gallery.electrical, tag: "Electrical", href: "/services/electrical-repairs" },
  { ...images.gallery.diagnostics, tag: "Diagnostics", href: "/services/boat-diagnostics" },
  { ...images.gallery.maintenance, tag: "Maintenance", href: "/services/boat-maintenance" },
  { ...images.gallery.systems, tag: "Systems", href: "/services/plumbing-repairs" },
  { ...images.gallery.dockside, tag: "Mobile", href: "/services/mobile-boat-repair" },
  { ...images.gallery.hull, tag: "Hull", href: "/services" },
  { ...images.gallery.teak, tag: "Deck", href: "/about" },
];

const yachtShots = yachtStrip.map((img) => ({
  ...img,
  tag: "Yacht",
  href: "/locations",
}));

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />

      {/* Hero */}
      <section className="relative min-h-[320px] overflow-hidden border-b border-chart-line sm:min-h-[400px]">
        <Image
          src={images.gallery.intracoastal.src}
          alt={images.gallery.intracoastal.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="wrap relative flex min-h-[320px] flex-col justify-end py-12 sm:min-h-[400px]">
          <CaseTag>Gallery</CaseTag>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-chart sm:text-5xl">
            Yachts, marinas &amp; marine service
          </h1>
          <p className="mt-4 max-w-xl text-steel">
            Branding and field visuals for Doctor Yachts—South Florida waters, dockside life, and
            the systems we repair. Replace with your own job photos anytime.
          </p>
        </div>
      </section>

      <section className="wrap section-pad">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Yacht &amp; marina branding
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Premium waterside imagery for Fort Lauderdale, Pompano Beach, and nearby South Florida.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {yachtShots.map((shot) => (
            <figure key={shot.src} className="shot m-0">
              <div className="shot-img relative aspect-[4/3]">
                <Image src={shot.src} alt={shot.alt} fill sizes="25vw" className="object-cover" />
                <span className="absolute left-2 top-2 bg-ink/85 px-2 py-0.5 font-mono text-[0.6rem] text-chart">
                  {shot.tag}
                </span>
              </div>
              <figcaption className="border-t border-chart-line px-3 py-2">
                <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                  {shot.caption ?? shot.alt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-chart-line bg-chart-deep/30">
        <div className="wrap section-pad">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Systems &amp; service work
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Engines, electrical, diagnostics, maintenance, and dockside repair contexts.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workShots.map((shot) => (
              <figure key={shot.src + shot.tag} className="shot m-0">
                <div className="shot-img relative aspect-[4/3]">
                  <Image src={shot.src} alt={shot.alt} fill sizes="25vw" className="object-cover" />
                  <span className="absolute left-2 top-2 bg-ink/85 px-2 py-0.5 font-mono text-[0.6rem] text-chart">
                    {shot.tag}
                  </span>
                </div>
                <figcaption className="border-t border-chart-line px-3 py-3">
                  <p className="font-mono text-[0.62rem] text-muted">{shot.alt}</p>
                  <Link
                    href={shot.href}
                    className="mt-1 inline-block text-xs font-semibold text-teal no-underline hover:text-coral"
                  >
                    Related page →
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Looking for service? See <Link href="/services">all boat repair services</Link>,{" "}
            <Link href="/locations">service areas</Link>, or <Link href="/book">book a visit</Link>.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
