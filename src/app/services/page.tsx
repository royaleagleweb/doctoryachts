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
    "Boat repair services in Fort Lauderdale and South Florida: marine engine repair, outboard service, 100-hour and 300-hour service, electrical, cooling, mobile dockside repair, and maintenance. Free estimates.",
  path: "/services",
  keywords: [
    "boat repair services Fort Lauderdale",
    "marine engine repair",
    "mobile boat repair",
    "outboard motor repair Fort Lauderdale",
    "100 hour boat service",
    "300 hour boat service",
    "boat electrical repairs",
  ],
});

const hubFaqs = [
  {
    question: "What boat repair services do you offer?",
    answer:
      "Marine engine repair, outboard motor repair, 100-hour and 300-hour interval service, boat electrical repairs, cooling system repairs, boat diagnostics, maintenance, plumbing/systems, and mobile dockside boat repair across South Florida.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. After we understand symptoms and location, we provide free estimates for recommended work before you authorize major parts and labor.",
  },
  {
    question: "Do you come to the marina or do I bring the boat in?",
    answer:
      "We specialize in mobile and dockside boat repair when access allows. Many no-starts, electrical, cooling, and maintenance jobs are completed where the boat already sits.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "Fort Lauderdale, Dania Beach, Hollywood, Miami / Miami Beach, Palm Beach County, and nearby South Florida docks. See our locations pages for local details.",
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
        description="Engine, outboard, 100-hour and 300-hour service, electrical, cooling, diagnostics, maintenance, plumbing, mobile. Fort Lauderdale and nearby docks."
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
            eyebrow="All services"
            title="What we repair"
            description="Every card is a real service page—short on brochure, long on the actual job."
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
          Not sure which service? Call <a href={site.phoneHref}>{site.phone}</a> or start with{" "}
          <Link href="/services/boat-diagnostics">diagnostics</Link> /{" "}
          <Link href="/services/mobile-boat-repair">mobile boat repair</Link>.
        </p>
      </Section>

      <Section>
        <AnswerBox
          label="Quick answer"
          question="What does Doctor Yachts repair?"
          answer="Doctor Yachts repairs boats and yachts across South Florida: marine engines (inboard/outboard), 100-hour and 300-hour interval service, electrical systems, cooling, bilge/plumbing, diagnostics, and scheduled maintenance—often mobile at Fort Lauderdale and nearby docks. Free estimates after diagnosis."
        />
        <div className="mt-10 space-y-4">
          <h2 className="font-display text-navy">How to choose the right service</h2>
          <p className="text-steel">
            Start with the symptom. Won&apos;t start or weak cranking often points to{" "}
            <Link href="/services/electrical-repairs">electrical</Link> or{" "}
            <Link href="/services/marine-engine-repair">engine diagnosis</Link>. Overheating is{" "}
            <Link href="/services/cooling-system-repairs">cooling</Link>. Constant bilge running is
            usually <Link href="/services/plumbing-repairs">plumbing/systems</Link>. Intermittent
            multi-system issues may need <Link href="/services/boat-diagnostics">diagnostics</Link>.
            Overdue hours? Start with{" "}
            <Link href="/services/100-hour-service">100-hour service</Link> or the heavier{" "}
            <Link href="/services/300-hour-service">300-hour service</Link>. For a dockside visit
            without a tow, start with{" "}
            <Link href="/services/mobile-boat-repair">mobile boat repair</Link>.
          </p>
        </div>
        <Card className="mt-10 p-6">
          <h2 className="font-display text-navy">Service areas</h2>
          <p className="mt-2 text-sm text-steel">
            Fort Lauderdale · Miami · Dania Beach · Hollywood · Palm Beach County · South Florida
            docks. See <Link href="/locations">all locations</Link> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </Card>
      </Section>

      <CTA />
    </>
  );
}
