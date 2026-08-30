import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Doctor Yachts | Boat & Yacht Mechanic South Florida",
  description:
    "About Doctor Yachts—independent boat and yacht mechanic in Fort Lauderdale, Miami & South Florida. Diagnose-first mobile and dockside marine repair. Free estimates.",
  path: "/about",
  keywords: [
    "about Doctor Yachts",
    "boat mechanic Fort Lauderdale",
    "yacht mechanic South Florida",
    "mobile boat mechanic Broward",
  ],
});

const aboutFaqs = [
  {
    question: "Is Doctor Yachts a full-service boat yard?",
    answer:
      "No. We are an independent marine mechanic focused on engines, electrical, cooling, systems, and dockside diagnostics—not paint, brokerage, or full refit yard work. When a job needs a yard, we say so early.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami, Palm Beach County, and nearby South Florida docks when access allows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          faqJsonLd(aboutFaqs),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · South Florida"
        kicker="Mobile boat mechanic in South Florida"
        title="Independent boat & yacht mechanic for South Florida"
        subhead="Diagnose first. Dockside."
        description="Fort Lauderdale, Miami, and nearby docks. Engines, electrical, cooling, diagnostics, maintenance."
        image={images.aboutHero}
        actions={
          <>
            <Button href="/book">Book a visit</Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </>
        }
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <AnswerBox
              label="Quick answer"
              question="What is Doctor Yachts?"
              answer="Doctor Yachts is an independent boat and yacht mechanic serving South Florida with mobile and dockside marine engine repair, electrical work, cooling and systems service, diagnostics, and maintenance. We diagnose first, give free estimates, and fix what matters—without yard upsell theater."
            />

            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="font-display mt-3 text-navy">How we work a job</h2>
              <p className="mt-4 text-steel">
                You call with a symptom. We ask where the boat lives, what you’ve already tried, and
                when we can get aboard. On site we chase the fault—not the nearest part number—and we
                tell you what’s optional versus urgent.
              </p>
              <p className="mt-4 text-steel">
                We’re not a brokerage, not a detailing crew, and not a general handyman. Engines,
                electrical, pumps, cooling, and the gray area where those systems fight each
                other—that’s the work. Free estimates after diagnosis for recommended repairs.
              </p>
            </div>

            <div>
              <h2 className="font-display text-navy">What we service</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-steel">
                {[
                  "Marine engine repair (inboard & outboard)",
                  "Outboard motor repair",
                  "Boat electrical repair & charging systems",
                  "Boat cooling system repair",
                  "Boat maintenance (including 100-hour and 300-hour service)",
                  "Boat plumbing, bilge & pumps",
                  "Mobile / dockside — we come to the boat",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-navy">Service areas</h2>
              <p className="mt-3 text-steel">
                Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach, and Palm
                Beach County—dockside and mobile when access allows. See{" "}
                <Link href="/locations">all service areas</Link>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-navy">What we are not</h2>
              <p className="mt-3 text-steel">
                We are not a brokerage, not a detailing crew, and not a full paint-and-refit yard. When
                a job needs haul-out, heavy structural work, or factory warranty dealer service, we say
                so early and help you plan the right path. That honesty is part of the “doctor”
                method—and better for owners than forcing every problem into a mobile visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-navy">Free estimates &amp; how to start</h2>
              <p className="mt-3 text-steel">
                Request a <Link href="/free-estimate">free estimate</Link>,{" "}
                <Link href="/book">book online</Link>, or call{" "}
                <a href={site.phoneHref}>{site.phone}</a>. Include city/marina and symptoms for the
                fastest response. Read common questions on our <Link href="/faq">FAQ</Link> and owner{" "}
                <Link href="/guides">guides</Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/book">Book a visit</Button>
              <Button href="/free-estimate" variant="ghost">
                Get a free estimate
              </Button>
              <Button href="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>

          <div>
            <div className="shot">
              <div className="shot-img relative aspect-[4/3]">
                <Image
                  src={images.gallery.maintenance.src}
                  alt={images.gallery.maintenance.alt}
                  fill
                  sizes="50vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="border-t border-line px-4 py-3 text-sm text-steel">
                Shop hours · {site.hours} · {site.phone}
              </div>
            </div>
            <Card className="mt-5 p-5">
              <p className="eyebrow">Core services</p>
              <ul className="mt-3 space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm font-medium text-navy no-underline hover:text-gold-deep"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <FaqSection title="About Doctor Yachts FAQ" faqs={aboutFaqs} />

      <RelatedLinks
        title="Explore"
        links={[
          { href: "/services", label: "All services", note: "Engines, electrical, mobile…" },
          { href: "/guides", label: "Repair guides", note: "Repair checklists" },
          { href: "/faq", label: "Full FAQ", note: "Common owner questions" },
          { href: "/reviews", label: "Reviews", note: "Owner feedback" },
        ]}
      />

      <CTA />
    </>
  );
}
