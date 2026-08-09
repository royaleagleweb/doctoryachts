import type { Metadata } from "next";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/lib/guides";
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

      <section className="border-b border-chart-line bg-chart-deep/50">
        <div className="wrap section-pad">
          <CaseTag>AEO guides</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink">
            Boat repair guides written for real searches—and AI answers
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Direct answers first, then steps and FAQs. Built so Google, AI overviews, and owners can
            extract clear guidance about boat repair in Fort Lauderdale and South Florida.
          </p>
        </div>
      </section>

      <section className="wrap section-pad space-y-10">
        <p className="max-w-3xl text-muted">
          These guides answer the searches South Florida boat owners actually type—and the
          questions AI overviews summarize. Each article opens with a direct answer, then steps,
          local context for Fort Lauderdale and nearby docks, and FAQs. For hands-on help,{" "}
          <Link href="/free-estimate">request a free estimate</Link> or{" "}
          <Link href="/book">book boat repair</Link>.
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <article className="panel h-full p-5 transition hover:border-ink/25">
                <p className="font-mono text-[0.62rem] uppercase tracking-wider text-coral">
                  {g.category} · {g.readTime}
                </p>
                <h2 className="font-display mt-2 text-xl font-semibold text-ink">
                  <Link
                    href={`/guides/${g.slug}`}
                    className="text-ink no-underline hover:text-coral"
                  >
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.quickAnswer}</p>
                <Link
                  href={`/guides/${g.slug}`}
                  className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-teal no-underline hover:text-coral"
                >
                  Read full guide →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
