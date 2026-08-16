import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
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

      <PageHero
        eyebrow="FAQ"
        title="Boat repair questions we answer every week"
        description={
          <>
            Short, direct answers for boat owners in Fort Lauderdale and Pompano Beach. Free
            estimates: <a href={site.phoneHref}>{site.phone}</a>.
          </>
        }
      />

      <Section>
        <h2 className="font-display text-navy">General</h2>
        <div className="faq-list mt-6">
          {homeFaqs.map((f) => (
            <details key={f.question} className="faq-item group">
              <summary className="faq-item__q">
                <span>{f.question}</span>
                <span className="faq-item__icon" aria-hidden>
                  +
                </span>
              </summary>
              <p className="faq-item__a">{f.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="font-display mt-14 text-navy">By service</h2>
        <div className="mt-6 space-y-4">
          {services.map((s) => (
            <Card key={s.id} className="p-5">
              <h3 className="font-display text-navy">
                <Link
                  href={`/services/${s.slug}`}
                  className="text-navy no-underline hover:text-gold-deep"
                >
                  {s.title}
                </Link>
              </h3>
              <ul className="mt-4 space-y-4">
                {s.faqs.map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-navy">{f.question}</p>
                    <p className="mt-1 text-sm text-steel">{f.answer}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <h2 className="font-display mt-14 text-navy">Deep-dive guides</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Card>
                <Link
                  href={`/guides/${g.slug}`}
                  className="block p-4 text-sm font-medium text-navy no-underline hover:text-gold-deep"
                >
                  {g.title}
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
