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
        eyebrow="Engine · Outboard · Electrical · Cooling · Mobile"
        title="Mobile boat mechanic in South Florida"
        subhead="Eight repair services. Diagnose first."
        description="Marine engine, outboard, electrical, cooling, diagnostics, maintenance, plumbing, and dockside mobile repair. Free estimates."
        image={images.gallery.engine}
        actions={
          <>
            <Button href="/book">Book a visit</Button>
            <Button href="/free-estimate" variant="ghost">
              Free estimate
            </Button>
            <ReviewLinks />
          </>
        }
        meta={
          <p className="page-hero__crumb">
            <b>Call</b> <a href={site.phoneHref}>{site.phone}</a>
            <span className="mx-2">·</span>
            {site.hours}
          </p>
        }
      />

      <Section>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What we repair"
            description="Every card is a real service page—engines through dockside mobile work."
          />
          <Link
            href="/services"
            className="text-sm font-semibold text-navy no-underline hover:text-gold-deep"
          >
            All service details →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/book">Book repair</Button>
          <Button href="/free-estimate" variant="ghost">
            Free estimate
          </Button>
        </div>
      </Section>

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
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="reveal-in space-y-8">
            <AnswerBox
              label="Quick answer"
              question="Who is Doctor Yachts?"
              answer="Doctor Yachts is an independent boat and yacht mechanic serving Fort Lauderdale, Miami, and South Florida with mobile and dockside marine engine repair, electrical work, cooling service, diagnostics, and maintenance. Free estimates. Diagnose first—fix what matters."
            />
            <div>
              <h2 className="font-display text-navy">
                Boat mechanic service for Fort Lauderdale &amp; South Florida
              </h2>
              <p className="mt-4 text-steel">
                Looking for{" "}
                <Link href="/locations/fort-lauderdale">boat repair in Fort Lauderdale</Link> or a{" "}
                <Link href="/services/mobile-boat-repair">mobile boat mechanic</Link>? We handle{" "}
                <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
                <Link href="/services/outboard-motor-repair">outboard motor repair</Link>,{" "}
                <Link href="/services/electrical-repairs">boat electrical repairs</Link>,{" "}
                <Link href="/services/cooling-system-repairs">cooling system repairs</Link>, and{" "}
                <Link href="/services/boat-maintenance">boat maintenance</Link> across Broward and
                nearby South Florida waters.
              </p>
              <p className="mt-3 text-steel">
                Free estimates on recommended work. Many no-starts, charging faults, and
                overheating jobs never need a tow first. Call{" "}
                <a href={site.phoneHref}>{site.phone}</a> or <Link href="/book">book online</Link>.
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

      <Section tone="soft">
        <SectionHeading eyebrow="How it works" title="From your call to back on the water" />
        <ol className="process-open reveal-in mt-12">
          {[
            {
              n: "1",
              t: "Tell us the symptom",
              d: "What the boat is doing—or not doing. No jargon required.",
            },
            {
              n: "2",
              t: "Plan the visit",
              d: "Marina, slip, access, and a time that works for you.",
            },
            {
              n: "3",
              t: "Diagnose on site",
              d: "We find the fault before recommending parts or labor.",
            },
            {
              n: "4",
              t: "Repair with a plan",
              d: "Free estimate path, clear options, notes you can keep.",
            },
          ].map((step) => (
            <li key={step.n}>
              <span className="n">{step.n}</span>
              <h3 className="font-display text-navy">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
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
              description="Engines, electrical, cooling, pumps, and wiring treated as one system—so you get findings before parts, not a parts list before a diagnosis."
            />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-navy/80">
              <li>Dockside first when access allows</li>
              <li>Findings before parts</li>
              <li>Notes for the next trip, yard, or survey</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/about">About the shop</Button>
              <Button href="/book" variant="ghost">
                Book a visit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Service areas" title="Where we work" />
          <Link
            href="/locations"
            className="text-sm font-semibold text-navy no-underline hover:text-gold-deep"
          >
            All areas →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="font-display text-navy">Read or leave a review</h2>
            <p className="mt-3 text-steel">
              Google and Yelp for Doctor Yachts in Fort Lauderdale. No invented ratings on this
              site—go to the real listings.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={site.profiles.google} target="_blank" rel="noopener noreferrer">
              Google
            </Button>
            <Button href={site.profiles.yelp} variant="ghost" target="_blank" rel="noopener noreferrer">
              Yelp
            </Button>
            <Link href="/reviews" className="text-sm font-semibold text-navy">
              Reviews page →
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection title="Common questions" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
