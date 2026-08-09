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

      <section className="border-b border-line bg-paper-deep/50">
        <div className="wrap section-pad">
          <CaseTag>FAQ</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy">
            Boat repair questions we answer every week
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Short, direct answers for boat owners deciding whether to book
            mobile service in Fort Lauderdale or Pompano Beach. Free estimates:{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </section>

      <section className="wrap section-pad">
        <h2 className="font-display text-2xl font-semibold text-navy">General</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {homeFaqs.map((f) => (
            <details key={f.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-pearl">
                <span>{f.question}</span>
                <span className="text-gold transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel">{f.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-semibold text-navy">By service</h2>
        <div className="mt-6 space-y-8">
          {services.map((s) => (
            <div key={s.id} className="panel p-5">
              <h3 className="font-display text-xl font-semibold">
                <Link href={`/services/${s.slug}`} className="text-navy no-underline hover:text-gold">
                  {s.title}
                </Link>
              </h3>
              <ul className="mt-4 space-y-4">
                {s.faqs.map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-navy">{f.question}</p>
                    <p className="mt-1 text-sm text-muted">{f.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-14 text-2xl font-semibold text-navy">
          Deep-dive guides
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="panel block p-4 text-sm font-medium text-navy no-underline hover:border-gold/40"
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
