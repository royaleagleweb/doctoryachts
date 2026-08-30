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
import { images } from "@/lib/images";
import { locations } from "@/lib/locations";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { servicesInHubOrder } from "@/lib/services";
import { homeFaqs, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Boat Mechanic Fort Lauderdale | Doctor Yachts",
  description: site.description,
  path: "/",
});

const homeServices = servicesInHubOrder();

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...homeFaqs])} />

      <PageHero
        size="display"
        eyebrow="Doctor Yachts · South Florida"
        kicker="We come to the boat"
        title="Mobile Boat Mechanic in Fort Lauderdale"
        subhead="Diagnose first. Dockside. Findings before parts."
        description={`Mon–Sat 7:00 AM–6:00 PM. Free estimates. Call ${site.phone}.`}
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
          <SectionHeading
            eyebrow="The shop"
            title="What we repair"
            description="Diagnostics is how we work a visit—not a separate page. 100-hour and 300-hour service live on boat maintenance."
          />
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
              answer="Doctor Yachts is a mobile boat mechanic in Fort Lauderdale. We come to the boat at marinas and private docks when access allows. Diagnose first, findings before parts, free estimates. Hours Mon–Sat 7:00 AM–6:00 PM. Call (954) 770-1910."
            />
            <div>
              <h2 className="font-display">Dockside first</h2>
              <p className="mt-4 text-steel">
                A mobile boat mechanic in Fort Lauderdale starts where the boat already lives. Many
                no-starts, electrical faults, cooling jobs, and maintenance visits never need a tow.
                We confirm marina access, review the symptom before arrival, and explain findings
                before you authorize parts. If the job needs a yard, we say so early.
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
        <ol className="process-open reveal-in mt-10">
          {[
            { n: "01", t: "Call or book", d: "Tell us the symptom. Call (954) 770-1910 or book online." },
            { n: "02", t: "Plan the visit", d: "Marina, slip, access, a time that works. Mon–Sat 7–6." },
            { n: "03", t: "Diagnose on site", d: "Findings before parts or labor. Diagnostics is the method." },
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
          <div className="shot relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <Image
              src={images.gallery.maintenance.src}
              alt={images.gallery.maintenance.alt}
              fill
              sizes="50vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          <div className="reveal-in flex flex-col justify-center py-2">
            <SectionHeading
              eyebrow="Why Doctor Yachts"
              title="Diagnose first. Then we repair."
              description="Engines, outboards, electrical, cooling, maintenance, and plumbing treated as one system."
            />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-steel">
              <li>We come to the boat when access allows</li>
              <li>Findings before parts</li>
              <li>Free estimates on recommended work</li>
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
        <p className="mb-8 text-steel">
          Fort Lauderdale, Miami, Palm Beach County, Dania Beach, Hollywood, and Pompano Beach.
        </p>
        <div className="shop-grid shop-grid--areas">
          {locations.map((loc) => {
            const img = images.locations[loc.slug as keyof typeof images.locations];
            return (
              <MediaCard
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                image={img}
                title={loc.name}
                description={loc.region}
                cta="Service area →"
              />
            );
          })}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Visit & contact" title="Shop details" />
        <div className="contact-card reveal-in mt-8">
          <div>
            <h3 className="contact-card__title">{site.name}</h3>
            <address>
              <strong>{site.streetAddress}</strong>
              <br />
              {site.addressLocality}, {site.addressRegion} {site.postalCode}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Contact</Button>
              <Button href="/book" variant="ghost">
                Book a visit
              </Button>
            </div>
          </div>
          <aside className="contact-card__aside">
            <div>
              <p className="eyebrow">Call the shop</p>
              <a href={site.phoneHref} className="contact-card__phone">
                {site.phone}
              </a>
              <p className="contact-card__hours">{site.hours}</p>
            </div>
            <p className="text-sm leading-relaxed text-steel-light">
              Free estimates. Mobile and dockside when access allows across South Florida.
            </p>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="reviews-card reveal-in">
          <div className="max-w-xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="font-display">Read or leave a review</h2>
            <p className="mt-3 text-steel">
              See what boat owners say on Google and Yelp. We do not invent ratings or testimonials
              on this site.
            </p>
          </div>
          <div className="reviews-card__actions">
            <Button href={site.profiles.google} target="_blank" rel="noopener noreferrer">
              Google reviews
            </Button>
            <Button href={site.profiles.yelp} variant="ghost" target="_blank" rel="noopener noreferrer">
              Yelp
            </Button>
            <Link href="/reviews" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
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
