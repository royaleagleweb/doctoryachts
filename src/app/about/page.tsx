import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Doctor Yachts | Boat & Yacht Mechanic South Florida",
  description:
    "About Doctor Yachts—independent boat and yacht mechanic in Fort Lauderdale, Pompano Beach & Miami. Diagnose-first mobile and dockside marine repair. Free estimates.",
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

      <section className="relative min-h-[300px] overflow-hidden border-b border-line sm:min-h-[380px]">
        <Image
          src={images.aboutHero.src}
          alt={images.aboutHero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/25" />
        <div className="wrap relative flex min-h-[300px] flex-col justify-end py-12 sm:min-h-[380px]">
          <CaseTag>About</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Independent boat &amp; yacht mechanic for South Florida
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            Doctor Yachts is a diagnose-first marine mechanic shop—engines, electrical, cooling,
            and dockside service for owners in Fort Lauderdale, Pompano Beach, Miami, and beyond.
          </p>
        </div>
      </section>

      <section className="wrap grid items-start gap-12 section-pad lg:grid-cols-2">
        <div className="space-y-8">
          <AnswerBox
            label="Quick answer"
            question="What is Doctor Yachts?"
            answer="Doctor Yachts is an independent boat and yacht mechanic serving South Florida with mobile and dockside marine engine repair, electrical work, cooling and systems service, diagnostics, and maintenance. We diagnose first, give free estimates, and fix what matters—without yard upsell theater."
          />

          <div>
            <CoordStamp label="Method · DY-CORE" />
            <h2 className="font-display mt-3 text-2xl font-semibold text-navy">
              How we work a job
            </h2>
            <p className="mt-4 text-muted">
              You call with a symptom. We ask where the boat lives, what you’ve already tried, and
              when we can get aboard. On site we chase the fault—not the nearest part number—and we
              tell you what’s optional versus urgent.
            </p>
            <p className="mt-4 text-muted">
              We’re not a brokerage, not a detailing crew, and not a general handyman. Engines,
              electrical, pumps, cooling, and the gray area where those systems fight each
              other—that’s the work. Free estimates after diagnosis for recommended repairs.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">What we service</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Marine engine repair (inboard & outboard)",
                "Outboard motor repair & maintenance",
                "Boat electrical repairs & charging systems",
                "Cooling system repairs",
                "Boat plumbing, bilge & pumps",
                "Mobile / dockside boat repair",
                "Seasonal boat maintenance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-line pb-3 text-navy"
                >
                  <span className="text-gold">▣</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Service areas
            </h2>
            <p className="mt-3 text-muted">
              Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach, and Palm
              Beach County—dockside and mobile when access allows. See{" "}
              <Link href="/locations">all service areas</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              What we are not
            </h2>
            <p className="mt-3 text-muted">
              We are not a brokerage, not a detailing crew, and not a full paint-and-refit yard. When
              a job needs haul-out, heavy structural work, or factory warranty dealer service, we say
              so early and help you plan the right path. That honesty is part of the “doctor”
              method—and better for owners than forcing every problem into a mobile visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Free estimates &amp; how to start
            </h2>
            <p className="mt-3 text-muted">
              Request a <Link href="/free-estimate">free estimate</Link>,{" "}
              <Link href="/book">book online</Link>, or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>. Include city/marina and symptoms for the
              fastest response. Read common questions on our <Link href="/faq">FAQ</Link> and owner{" "}
              <Link href="/guides">guides</Link>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/book" className="btn">
              Book service
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="shot">
            <div className="shot-img relative aspect-[4/3]">
              <Image
                src={images.aboutHero.src}
                alt={images.aboutHero.alt}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="border-t border-line px-4 py-3 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
              Shop hours · {site.hours} · {site.phone}
            </div>
          </div>
          <div className="panel mt-5 p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-gold">Core services</p>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-medium text-navy no-underline hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection title="About Doctor Yachts FAQ" faqs={aboutFaqs} />

      <RelatedLinks
        title="Explore"
        links={[
          { href: "/services", label: "All services", note: "Engines, electrical, mobile…" },
          { href: "/guides", label: "Repair guides", note: "Checklists & AEO articles" },
          { href: "/faq", label: "Full FAQ", note: "Common owner questions" },
          { href: "/reviews", label: "Reviews", note: "Owner feedback" },
        ]}
      />

      <CTA />
    </>
  );
}
