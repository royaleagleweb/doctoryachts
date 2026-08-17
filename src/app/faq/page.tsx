import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA, ShopActions } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { guides } from "@/lib/guides";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  isUniqueServiceFaq,
  yachtFaqGroups,
  yachtMaintenanceFaqs,
} from "@/lib/yacht-maintenance-faqs";

export const metadata: Metadata = buildMetadata({
  title: "Yacht Maintenance FAQ | Boat Maintenance Questions South Florida",
  description:
    "40 yacht and boat maintenance questions for South Florida: service intervals, no-starts, overheating, batteries, zincs, generators, and when to book a mobile mechanic. Diagnose-first answers from Doctor Yachts in Fort Lauderdale.",
  path: "/faq",
  keywords: [
    "yacht maintenance FAQ",
    "boat maintenance questions South Florida",
    "yacht maintenance questions",
    "boat repair FAQ Fort Lauderdale",
    "mobile yacht mechanic FAQ",
    "free estimate boat repair",
  ],
});

const uniqueServiceFaqs = services.flatMap((s) =>
  s.faqs
    .filter((f) => isUniqueServiceFaq(f.question))
    .map((f) => ({
      ...f,
      source: s.title,
      href: `/services/${s.slug}`,
    })),
);

const faqSchemaItems = [
  ...yachtMaintenanceFaqs.map(({ question, answer }) => ({ question, answer })),
  ...uniqueServiceFaqs.map(({ question, answer }) => ({ question, answer })),
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
          faqJsonLd(faqSchemaItems),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · South Florida"
        kicker="Mobile boat mechanic in South Florida"
        title="Yacht maintenance FAQ for South Florida boats"
        subhead="Diagnose first. Dockside."
        description={
          <>
            Forty diagnose-first answers—service intervals, no-starts, cooling, electrical,
            generators. We confirm during {site.hours}.
          </>
        }
        image={images.mechanic}
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
        <nav className="faq-jump" aria-label="FAQ topics">
          {yachtFaqGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-14">
          {yachtFaqGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <h2 className="font-display text-navy">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-steel">{group.intro}</p>
              <ShopActions compact />
              <div className="faq-list mt-6">
                {group.faqs.map((f) => (
                  <details key={f.question} className="faq-item group">
                    <summary className="faq-item__q">
                      <span>{f.question}</span>
                      <span className="faq-item__icon" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="faq-item__a">{f.answer}</p>
                    <p className="faq-item__next">
                      <Link href={f.next.href}>{f.next.label}</Link>
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-navy">More service questions</h2>
        <p className="mt-2 max-w-2xl text-steel">
          Extra answers from the service pages that do not repeat the 40 above.
        </p>
        <div className="mt-6 space-y-4">
          {services.map((s) => {
            const extras = s.faqs.filter((f) => isUniqueServiceFaq(f.question));
            if (extras.length === 0) return null;
            return (
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
                  {extras.map((f) => (
                    <li key={f.question}>
                      <p className="font-semibold text-navy">{f.question}</p>
                      <p className="mt-1 text-sm text-steel">{f.answer}</p>
                    </li>
                  ))}
                </ul>
                <ShopActions compact />
              </Card>
            );
          })}
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
