import type { Metadata } from "next";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { homeFaqs, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Repair FAQ | Fort Lauderdale & Pompano Beach",
  description:
    "FAQ for boat repair, mobile service, free estimates, overheating, no-starts, and maintenance in Fort Lauderdale, Pompano Beach, and Miami, FL.",
  path: "/faq",
  keywords: [
    "boat repair FAQ",
    "mobile boat repair questions",
    "boat mechanic Fort Lauderdale FAQ",
    "free estimate boat repair",
  ],
});

const serviceFaqs = services.flatMap((s) =>
  s.faqs.map((f) => ({
    ...f,
    source: s.title,
    href: `/services/${s.slug}`,
  })),
);

const allFaqs = [
  ...homeFaqs.map((f) => ({ ...f, source: "General", href: "/faq" })),
  ...serviceFaqs,
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqJsonLd(allFaqs.map(({ question, answer }) => ({ question, answer }))),
        ]}
      />

      <section className="border-b border-chart-line bg-chart-deep/50">
        <div className="wrap section-pad">
          <CaseTag>FAQ · AEO</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink">
            Boat repair questions we answer every week
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Short, direct answers for search and AI engines—and for owners deciding whether to book
            mobile service in Fort Lauderdale or Pompano Beach. Free estimates:{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </section>

      <section className="wrap section-pad">
        <h2 className="font-display text-2xl font-semibold text-ink">General</h2>
        <div className="mt-6 divide-y divide-chart-line border-y border-chart-line">
          {homeFaqs.map((f, i) => (
            <details key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink">
                <span className="flex gap-3">
                  <span className="font-mono text-xs text-coral pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.question}
                </span>
                <span className="font-mono text-teal group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pl-9 text-sm leading-relaxed text-muted">{f.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-semibold text-ink">By service</h2>
        <div className="mt-6 space-y-8">
          {services.map((s) => (
            <div key={s.id} className="panel p-5">
              <h3 className="font-display text-xl font-semibold">
                <Link href={`/services/${s.slug}`} className="text-ink no-underline hover:text-coral">
                  {s.title}
                </Link>
              </h3>
              <ul className="mt-4 space-y-4">
                {s.faqs.map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-ink">{f.question}</p>
                    <p className="mt-1 text-sm text-muted">{f.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-semibold text-ink">
          Deep-dive guides
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="panel block p-4 text-sm font-medium text-ink no-underline hover:border-coral/40"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
