import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { images, yachts } from "@/lib/images";
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

      <section className="relative min-h-[300px] overflow-hidden border-b border-line sm:min-h-[360px]">
        <Image
          src={yachts.intracoastal.src}
          alt={yachts.intracoastal.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
        <div className="wrap relative flex min-h-[300px] flex-col justify-end py-12 sm:min-h-[360px]">
          <CaseTag>Service areas</CaseTag>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Boat repair service areas in South Florida
          </h1>
          <p className="mt-4 max-w-2xl text-steel">
            Mobile and dockside boat mechanic coverage across Broward, Miami-Dade, and Palm Beach
            County. Pick a city for local keywords, neighborhoods, and booking.
          </p>
          <div className="mt-4">
            <CoordStamp label="Broward · Miami-Dade · Palm Beach" />
          </div>
        </div>
      </section>

      <section className="wrap section-pad space-y-10">
        <AnswerBox
          label="Quick answer"
          question="Do you offer boat repair near Fort Lauderdale?"
          answer={`Yes. Doctor Yachts provides boat repair and mobile dockside mechanic service in Fort Lauderdale and nearby cities including Pompano Beach, Dania Beach, Hollywood, Miami, and Palm Beach County. Free estimates. Call ${site.phone} or book online.`}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => {
            const img = images.locations[loc.slug as keyof typeof images.locations];
            return (
              <article key={loc.slug} className="shot">
                <div className="shot-img relative aspect-[16/10]">
                  <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" />
                </div>
                <div className="border-t border-line p-5">
                  <p className="text-xs  text-gold">
                    {loc.region}
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-semibold text-navy">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="text-navy no-underline hover:text-gold"
                    >
                      Boat repair {loc.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted">{loc.intro}</p>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="mt-4 inline-block text-xs font-semibold  text-gold no-underline"
                  >
                    {loc.shortName} page →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Mobile boat repair across South Florida
          </h2>
          <p className="text-muted">
            Whether you searched “boat repair near me” in Fort Lauderdale or need a yacht mechanic
            in Palm Beach County, the process is the same: describe the symptom, share dock access,
            and we diagnose first. Free estimates on recommended work. Call{" "}
            <a href={site.phoneHref}>{site.phone}</a> or{" "}
            <Link href="/book">book a visit</Link>.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {hubFaqs.map((f) => (
              <div key={f.question} className="panel p-4">
                <p className="text-sm font-semibold text-navy">{f.question}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <CTA />
    </>
  );
}
