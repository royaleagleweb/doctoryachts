import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { servicesInHubOrder } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Repair Services | Fort Lauderdale & South Florida",
  description:
    "Boat repair services in Fort Lauderdale: marine engine repair, outboard motor repair, electrical, cooling, maintenance (including 100-hour and 300-hour service), and plumbing. Free estimates.",
  path: "/services",
  keywords: [
    "boat repair services Fort Lauderdale",
    "marine engine repair",
    "outboard motor repair Fort Lauderdale",
    "boat electrical repair",
    "boat maintenance Fort Lauderdale",
  ],
});

const hubFaqs = [
  {
    question: "What boat repair services do you offer?",
    answer:
      "Six hubs: marine engine repair, outboard motor repair, boat electrical repair, boat cooling system repair, boat maintenance (including 100-hour and 300-hour service on that page), and boat plumbing repair. We work dockside across South Florida.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. After we understand symptoms and location, we provide free estimates for recommended work before you authorize major parts and labor.",
  },
  {
    question: "Do you come to the marina or do I bring the boat in?",
    answer:
      "We come to the boat when access allows. Many no-starts, electrical, cooling, and maintenance jobs are completed where the boat already sits.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach, Palm Beach County, and nearby South Florida docks.",
  },
];

const youGet = [
  {
    title: "Diagnose first",
    body: "Findings before parts. You know what’s urgent versus what can wait.",
  },
  {
    title: "Free estimates",
    body: "Recommended work is estimated before you authorize major parts and labor.",
  },
  {
    title: "Dockside when it helps",
    body: "Mobile marina and private-dock visits when access allows—often without a tow.",
  },
];

const hubServices = servicesInHubOrder();

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqJsonLd(hubFaqs),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · South Florida"
        kicker="Mobile boat mechanic in South Florida"
        title="Boat repair services in South Florida"
        subhead="Diagnose first. Dockside."
        description="Six hubs: engine, outboard, electrical, cooling, maintenance, plumbing. Fort Lauderdale and nearby docks."
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

      <Section>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Service hubs"
            title="What we repair"
            description="Index of the six hubs. Home is the mobile boat mechanic page."
          />
          <div className="flex flex-wrap gap-3">
            <Button href="/book">Book this week</Button>
            <Button href="/free-estimate" variant="ghost">
              Get a free estimate
            </Button>
          </div>
        </div>
        <div className="shop-grid">
          {hubServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
        <p className="mt-8 text-steel">
          <Link href="/">Mobile boat mechanic (home)</Link>
          {" · "}
          <Link href="/services/marine-engine-repair">Marine engine repair</Link>
          {" · "}
          <Link href="/services/outboard-motor-repair">Outboard motor repair</Link>
          {" · "}
          <Link href="/services/electrical-repairs">Boat electrical repair</Link>
          {" · "}
          <Link href="/services/cooling-system-repairs">Boat cooling system repair</Link>
          {" · "}
          <Link href="/services/boat-maintenance">Boat maintenance</Link>
          {" · "}
          <Link href="/services/plumbing-repairs">Boat plumbing repair</Link>
          .
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="What you get" title="How a visit works" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {youGet.map((item) => (
            <Card key={item.title} className="p-6">
              <h2 className="font-display text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-steel">
          Not sure which service? Call <a href={site.phoneHref}>{site.phone}</a> or start on the{" "}
          <Link href="/">mobile boat mechanic homepage</Link>. Diagnostics is the method, not a
          separate page.
        </p>
      </Section>

      <Section>
        <AnswerBox
          label="Quick answer"
          question="What does Doctor Yachts repair?"
          answer="Doctor Yachts repairs boats and yachts across South Florida: marine engines, outboards, electrical systems, cooling, plumbing, and scheduled maintenance—including 100-hour and 300-hour service on the maintenance page. Free estimates after diagnosis."
        />
        <div className="mt-10 space-y-4">
          <h2 className="font-display text-navy">How to choose the right service</h2>
          <p className="text-steel">
            Start with the symptom. Won&apos;t start or weak cranking often points to{" "}
            <Link href="/services/electrical-repairs">electrical</Link> or{" "}
            <Link href="/services/marine-engine-repair">engine diagnosis</Link>. Overheating is{" "}
            <Link href="/services/cooling-system-repairs">cooling</Link>. Constant bilge running is
            usually <Link href="/services/plumbing-repairs">plumbing</Link>. Overdue hours? Start
            with <Link href="/services/boat-maintenance">boat maintenance</Link> (100-hour and
            300-hour service are sections on that page). For a dockside visit without a tow, start
            on the <Link href="/">homepage</Link>.
          </p>
        </div>
        <Card className="mt-10 p-6">
          <h2 className="font-display text-navy">Service areas</h2>
          <p className="mt-2 text-sm text-steel">
            Fort Lauderdale · Pompano Beach · Miami · Dania Beach · Hollywood · Palm Beach County.
            See <Link href="/locations">all locations</Link> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </Card>
      </Section>

      <CTA />
    </>
  );
}
