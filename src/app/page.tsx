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
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { guides } from "@/lib/guides";
import { images, yachtStrip } from "@/lib/images";
import { locations } from "@/lib/locations";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { homeFaqs, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...homeFaqs])} />

      <PageHero
        eyebrow="Fort Lauderdale · Pompano · Miami"
        title="Mobile boat mechanic in Fort Lauderdale & Pompano Beach"
        subhead="Marine repair. No guessing."
        description="Independent boat & yacht mechanic. Engines, electrical, cooling, dockside service. Free estimates."
        image={images.gallery.engine}
        actions={
          <>
            <Button href="/book">Book a visit</Button>
            <Button href="/free-estimate" variant="ghost">
              Free estimate
            </Button>
          </>
        }
        meta={
          <p className="page-hero__crumb">
            <b>Call</b> <a href={site.phoneHref}>{site.phone}</a>
            <span className="mx-2 text-muted">·</span>
            {site.hours}
            <span className="mx-2 text-muted">·</span>
            Mobile when access allows
          </p>
        }
      />

      <div className="problem-rail-wrap">
        <nav className="problem-rail" aria-label="Common problems">
          <Link href="/book?service=engine-repair">
            <strong>Won&apos;t start</strong>
            <span>No crank · click · dead quiet</span>
          </Link>
          <Link href="/book?service=cooling">
            <strong>Overheating</strong>
            <span>Hot · weak telltale · shut-down</span>
          </Link>
          <Link href="/book?service=electrical">
            <strong>Battery / power</strong>
            <span>Charging · shore power · trips</span>
          </Link>
          <Link href="/book?service=maintenance">
            <strong>Service</strong>
            <span>Oil · impeller · check-up</span>
          </Link>
        </nav>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="reveal-in space-y-8">
            <AnswerBox
              label="Quick answer"
              question="Who is Doctor Yachts?"
              answer="Doctor Yachts is an independent boat and yacht mechanic serving Fort Lauderdale, Pompano Beach, Miami, and South Florida with mobile and dockside marine engine repair, electrical work, cooling service, diagnostics, and maintenance. Free estimates. Diagnose first—fix what matters."
            />
            <div>
              <h2 className="font-display text-navy">
                Boat mechanic service for Fort Lauderdale &amp; Pompano Beach
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
              <h3 className="font-display mt-8 text-navy">What we fix most often</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-steel">
                <li>Boat won&apos;t start / weak cranking</li>
                <li>Overheating (impellers, strainers, heat exchangers)</li>
                <li>Dead batteries and shore power trips</li>
                <li>Bilge pumps, plumbing, and safety systems</li>
                <li>Pre-season and interval maintenance</li>
              </ul>
              <p className="mt-4 text-sm text-steel">
                Guides:{" "}
                {guides.slice(0, 3).map((g, i) => (
                  <span key={g.slug}>
                    {i > 0 && " · "}
                    <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                  </span>
                ))}
                . See all <Link href="/guides">guides</Link> and <Link href="/faq">FAQ</Link>.
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
                className="object-cover"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.systems.src}
                alt={images.gallery.systems.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.dockside.src}
                alt={images.gallery.dockside.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="reveal-in mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What we repair on board"
            description="Engines, electrical, cooling, diagnostics, maintenance, plumbing, and mobile dockside repair."
          />
          <Link
            href="/services"
            className="text-sm font-semibold text-navy no-underline hover:text-gold-deep"
          >
            View all services →
          </Link>
        </div>
        <div className="reveal-in grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
        {services.length > 6 && (
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {services.slice(6).map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="text-navy no-underline hover:text-gold-deep"
              >
                {s.title.replace(" Fort Lauderdale", "")} →
              </Link>
            ))}
          </div>
        )}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="/book">Book repair</Button>
          <Button href="/free-estimate" variant="ghost">
            Free estimate
          </Button>
        </div>
      </Section>

      <Section tone="soft">
        <div className="reveal-in">
          <SectionHeading eyebrow="How it works" title="From your call to back on the water" />
        </div>
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
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal-in flex flex-col justify-center py-2">
            <SectionHeading
              eyebrow="Why Doctor Yachts"
              title="A shop that listens—not a sales yard"
              description="We treat vessels like systems: power, propulsion, pumps, wiring. That means fewer wild guesses and fewer surprise invoices."
            />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-navy/80">
              <li>Dockside first when access allows</li>
              <li>Findings before parts</li>
              <li>Notes for the next trip, yard, or survey</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">About the shop</Button>
              <Button href="/book" variant="ghost">
                Book a visit
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="reveal-in mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Service areas" title="South Florida waters we work" />
          <Link
            href="/locations"
            className="text-sm font-semibold text-navy no-underline hover:text-gold-deep"
          >
            All areas →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => {
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

      <Section>
        <div className="mb-8 flex items-end justify-between gap-3">
          <SectionHeading eyebrow="Gallery" title="On the water" />
          <Link
            href="/gallery"
            className="text-sm font-semibold text-navy no-underline hover:text-gold-deep"
          >
            Gallery →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {yachtStrip.slice(0, 4).map((img) => (
            <MediaCard key={img.src} image={img} kicker={img.caption} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
            “Clear diagnosis. Honest options. Dockside when it makes sense—not a mystery invoice.”
          </blockquote>
          <p className="mt-6 text-sm text-steel">
            <Link href="/reviews">Reviews</Link>
            <span className="mx-2 text-muted">·</span>
            <Link href="/free-estimate">Free estimate</Link>
            <span className="mx-2 text-muted">·</span>
            <Link href="/book">Book repair</Link>
          </p>
        </div>
      </Section>

      <FaqSection title="Common questions" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
