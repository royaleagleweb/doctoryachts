import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { locations } from "@/lib/locations";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Repair Near Me | Fort Lauderdale, Pompano, Miami Service Areas",
  description:
    "Boat repair service areas: Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami & Palm Beach. Mobile dockside mechanic. Free estimates — Doctor Yachts.",
  path: "/locations",
  keywords: [
    "boat repair near me Fort Lauderdale",
    "boat mechanic service areas South Florida",
    "mobile boat repair Broward",
    "Pompano Beach boat repair",
  ],
});

const hubFaqs = [
  {
    question: "Where do you provide boat repair?",
    answer:
      "Doctor Yachts serves Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami, Palm Beach County, and nearby South Florida docks with mobile and dockside service when access allows.",
  },
  {
    question: "Do you offer boat repair near me in Broward?",
    answer:
      "Yes. Broward coverage includes Fort Lauderdale, Pompano Beach, Dania Beach, and Hollywood. Share your marina and slip when booking so we can confirm access.",
  },
  {
    question: "Is mobile service available in every city?",
    answer:
      "Mobile and dockside work is available across our service areas when marina or private-dock access allows. Some jobs still need a yard or haul-out—we’ll say so early.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ]),
          faqJsonLd(hubFaqs),
        ]}
      />

      <PageHero
        eyebrow="Service areas"
        title="Boat repair service areas in South Florida"
        description="Mobile and dockside boat mechanic coverage across Broward, Miami-Dade, and Palm Beach County. Pick a city for local keywords, neighborhoods, and booking."
        image={images.gallery.dockside}
      />

      <Section>
        <div className="space-y-10">
          <AnswerBox
            label="Quick answer"
            question="Do you offer boat repair near Fort Lauderdale?"
            answer={`Yes. Doctor Yachts provides boat repair and mobile dockside mechanic service in Fort Lauderdale and nearby cities including Pompano Beach, Dania Beach, Hollywood, Miami, and Palm Beach County. Free estimates. Call ${site.phone} or book online.`}
          />

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const img = images.locations[loc.slug as keyof typeof images.locations];
              return (
                <MediaCard
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  image={img}
                  kicker={loc.region}
                  title={`Boat repair ${loc.name}`}
                  description={loc.intro}
                  footer={
                    <p className="mt-3 text-sm font-semibold text-gold-deep">{loc.shortName} page →</p>
                  }
                />
              );
            })}
          </div>

          <section className="space-y-4">
            <h2 className="font-display text-navy">Mobile boat repair across South Florida</h2>
            <p className="text-steel">
              Whether you searched “boat repair near me” in Fort Lauderdale or need a yacht mechanic
              in Palm Beach County, the process is the same: describe the symptom, share dock access,
              and we diagnose first. Free estimates on recommended work. Call{" "}
              <a href={site.phoneHref}>{site.phone}</a> or <Link href="/book">book a visit</Link>.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {hubFaqs.map((f) => (
                <Card key={f.question} className="p-5">
                  <p className="text-sm font-semibold text-navy">{f.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{f.answer}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </Section>

      <CTA />
    </>
  );
}
