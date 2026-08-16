import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { guides } from "@/lib/guides";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Boat Repair Guides & Checklists | Fort Lauderdale Tips",
  description:
    "Free boat repair guides for South Florida owners: no-start checklist, overheating causes, maintenance schedules, mobile vs shop, and electrical warning signs.",
  path: "/guides",
  keywords: [
    "boat repair guides",
    "boat won't start checklist",
    "boat engine overheating",
    "boat maintenance Florida",
    "mobile boat repair tips",
  ],
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />

      <PageHero
        eyebrow="Guides"
        title="Boat repair guides written for real searches—and AI answers"
        subhead="Direct answers first, then the steps."
        description="Direct answers first, then steps and FAQs. Built so Google, AI overviews, and owners can extract clear guidance about boat repair in Fort Lauderdale and South Florida."
        image={images.gallery.maintenance}
      />

      <Section>
        <p className="max-w-3xl text-steel">
          These guides answer the searches South Florida boat owners actually type—and the
          questions AI overviews summarize. Each article opens with a direct answer, then steps,
          local context for Fort Lauderdale and nearby docks, and FAQs. For hands-on help,{" "}
          <Link href="/free-estimate">request a free estimate</Link> or{" "}
          <Link href="/book">book boat repair</Link>.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Card as="article" className="h-full p-5">
                <p className="eyebrow">
                  {g.category} · {g.readTime}
                </p>
                <h2 className="font-display mt-2 text-navy">
                  <Link
                    href={`/guides/${g.slug}`}
                    className="text-navy no-underline hover:text-gold-deep"
                  >
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{g.quickAnswer}</p>
                <Link
                  href={`/guides/${g.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-navy no-underline hover:text-gold-deep"
                >
                  Read full guide →
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <CTA />
    </>
  );
}
