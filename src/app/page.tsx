import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { images } from "@/lib/images";
import { publicLocations } from "@/lib/locations";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { homeFaqs, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
  description: site.description,
  path: "/",
});

const homeServiceOrder = [
  "engine-repair",
  "outboard",
  "electrical",
  "cooling",
  "diagnostics",
  "maintenance",
  "systems",
  "emergency",
] as const;

const homeServices = homeServiceOrder
  .map((id) => services.find((s) => s.id === id))
  .filter((s): s is (typeof services)[number] => Boolean(s));

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...homeFaqs])} />

      <PageHero
        size="display"
        eyebrow="Doctor Yachts · South Florida"
        kicker="Mobile boat mechanic in South Florida"
        title="The mechanic who comes to the boat."
        subhead="Diagnose first. Dockside."
        description="Fort Lauderdale, Miami, and nearby docks. We confirm by phone during Mon–Sat 7–6."
        image={images.homeHero}
        actions={
          <>
            <Button href="/book">Book a visit</Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </>
        }
      />

      <div className="problem-rail-wrap">
        <nav className="problem-rail" aria-label="Common problems">
          <Link href="/book?service=engine-repair">
            <strong>Won&apos;t start</strong>
          </Link>
          <Link href="/book?service=cooling">
            <strong>Overheating</strong>
          </Link>
          <Link href="/book?service=electrical">
            <strong>Battery / power</strong>
          </Link>
          <Link href="/book?service=maintenance">
            <strong>Service due</strong>
          </Link>
        </nav>
      </div>

      <Section>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="The shop" title="What we repair" />
          <Link href="/services" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
            All services →
          </Link>
        </div>
        <div className="shop-grid">
          {homeServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} compact />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal-in space-y-8">
            <AnswerBox
              label="Quick answer"
              question="Who is Doctor Yachts?"
              answer="Doctor Yachts is an independent boat and yacht mechanic serving Fort Lauderdale, Miami, and South Florida with mobile and dockside marine engine repair, electrical work, cooling service, diagnostics, and maintenance. Free estimates. Diagnose first—fix what matters."
            />
            <div>
              <h2 className="font-display">Boat mechanic service for Fort Lauderdale</h2>
              <p className="mt-4 text-steel">
                <Link href="/locations/fort-lauderdale">Fort Lauderdale boat repair</Link>,{" "}
                <Link href="/services/mobile-boat-repair">mobile mechanic</Link>,{" "}
                <Link href="/services/marine-engine-repair">engines</Link>,{" "}
                <Link href="/services/outboard-motor-repair">outboards</Link>,{" "}
                <Link href="/services/electrical-repairs">electrical</Link>,{" "}
                <Link href="/services/cooling-system-repairs">cooling</Link>,{" "}
                <Link href="/services/boat-maintenance">maintenance</Link>. Call{" "}
                <a href={site.phoneHref}>{site.phone}</a> or <Link href="/book">book a visit</Link>.
              </p>
            </div>
          </div>
          <div className="reveal-in grid gap-3 sm:grid-cols-2 lg:sticky lg:top-36">
            <div className="shot relative aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[26rem]">
              <Image
                src={images.gallery.electrical.src}
                alt={images.gallery.electrical.alt}
                fill
                sizes="40vw"
                className="object-cover object-[center_30%]"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.systems.src}
                alt={images.gallery.systems.alt}
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.dockside.src}
                alt={images.gallery.dockside.alt}
                fill
                sizes="25vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="Call. Diagnose. Repair." />
        <ol className="process-open reveal-in mt-12">
          {[
            { n: "01", t: "Tell us the symptom", d: "What the boat is doing—or not doing." },
            { n: "02", t: "Plan the visit", d: "Marina, slip, access, a time that works." },
            { n: "03", t: "Diagnose on site", d: "Findings before parts or labor." },
            { n: "04", t: "Repair with a plan", d: "Free estimate. Notes you can keep." },
          ].map((step) => (
            <li key={step.n}>
              <span className="n">{step.n}</span>
              <h3 className="font-display">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <div className="shot absolute inset-0">
              <Image
                src={images.gallery.maintenance.src}
                alt={images.gallery.maintenance.alt}
                fill
                sizes="50vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>
          <div className="reveal-in flex flex-col justify-center py-2">
            <SectionHeading
              eyebrow="Why Doctor Yachts"
              title="Diagnose first. Then we repair."
              description="Engines, electrical, cooling, pumps, and wiring treated as one system."
            />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-steel">
              <li>Dockside first when access allows</li>
              <li>Findings before parts</li>
              <li>Notes for the next trip, yard, or survey</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/book">Book a visit</Button>
              <Button href="/about" variant="ghost">
                About the shop
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Service areas" title="Where we work" />
          <Link href="/locations" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
            All areas →
          </Link>
        </div>
        <div className="shop-grid shop-grid--areas">
          {publicLocations.map((loc) => {
            const img = images.locations[loc.slug as keyof typeof images.locations];
            return (
              <MediaCard
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                image={img}
                title={loc.name}
                description={loc.region}
              />
            );
          })}
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="font-display">Read or leave a review</h2>
            <p className="mt-3 text-steel">
              Google and Yelp for Doctor Yachts in Fort Lauderdale. No invented ratings on this
              site.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={site.profiles.google} target="_blank" rel="noopener noreferrer">
              Google
            </Button>
            <Button href={site.profiles.yelp} variant="ghost" target="_blank" rel="noopener noreferrer">
              Yelp
            </Button>
            <Link href="/reviews" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
              Reviews page →
            </Link>
          </div>
        </div>
        <p className="mt-6">
          <ReviewLinks />
        </p>
      </Section>

      <FaqSection title="Common questions" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
