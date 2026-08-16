import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getGuideBySlug, guides } from "@/lib/guides";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo";
import { getServiceById } from "@/lib/services";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = guide.relatedServices
    .map((id) => getServiceById(id))
    .filter(Boolean);

  const schema: object[] = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.title, path: `/guides/${guide.slug}` },
    ]),
    articleJsonLd({
      title: guide.title,
      description: guide.seoDescription,
      path: `/guides/${guide.slug}`,
      dateModified: guide.updated,
    }),
    faqJsonLd(guide.faqs),
  ];
  if (guide.howTo) schema.push(howToJsonLd(guide.howTo));

  return (
    <>
      <JsonLd data={schema} />

      <article>
        <PageHero
          eyebrow={guide.category}
          title={guide.h1}
          description={`Updated ${guide.updated} · ${guide.readTime} read`}
          meta={
            <p className="page-hero__crumb">
              <Link href="/">Home</Link>
              {" / "}
              <Link href="/guides">Guides</Link>
              {" / "}
              {guide.title}
            </p>
          }
        />

        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div className="space-y-10">
              <AnswerBox question={guide.h1} answer={guide.quickAnswer} label="Direct answer" />

              {guide.howTo && (
                <section>
                  <h2 className="font-display text-navy">{guide.howTo.name}</h2>
                  <ol className="mt-5 space-y-4">
                    {guide.howTo.steps.map((step, i) => (
                      <li key={step.name}>
                        <Card className="flex gap-4 p-4">
                          <span className="font-display text-2xl font-semibold text-gold-deep">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="font-semibold text-navy">{step.name}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-steel">{step.text}</p>
                          </div>
                        </Card>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display text-navy">{section.heading}</h2>
                  {section.body.map((p) => (
                    <p key={p.slice(0, 48)} className="mt-3 text-steel">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-navy">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <Card className="card-accent p-6">
                <h2 className="font-display text-navy">Need this fixed in South Florida?</h2>
                <p className="mt-2 text-sm text-steel">
                  Book a visit—we confirm by phone during {site.hours}. Free estimates. Mobile and
                  dockside when access allows. Call{" "}
                  <a href={site.phoneHref}>{site.phone}</a>.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button href="/book">Book a visit</Button>
                  <Button href="/free-estimate" variant="ghost">
                    Get a free estimate
                  </Button>
                </div>
              </Card>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <Card className="p-5">
                <p className="eyebrow">Related services</p>
                <ul className="mt-3 space-y-2">
                  {related.map((s) =>
                    s ? (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm font-medium text-navy no-underline hover:text-gold-deep"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </Card>
              <Card className="p-5">
                <p className="eyebrow">More guides</p>
                <ul className="mt-3 space-y-2">
                  {guides
                    .filter((g) => g.slug !== guide.slug)
                    .slice(0, 4)
                    .map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/guides/${g.slug}`}
                          className="text-sm text-navy no-underline hover:text-gold-deep"
                        >
                          {g.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Card>
            </aside>
          </div>
        </Section>

        {guide.faqs.length > 0 && (
          <FaqSection title="Questions this guide answers" faqs={guide.faqs} />
        )}
      </article>

      <CTA />
    </>
  );
}
