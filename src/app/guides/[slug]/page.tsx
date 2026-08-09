import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
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
        <header className="border-b border-chart-line bg-chart-deep/40">
          <div className="wrap section-pad">
            <p className="font-mono text-xs text-muted">
              <Link href="/" className="no-underline hover:text-coral">
                Home
              </Link>
              {" / "}
              <Link href="/guides" className="no-underline hover:text-coral">
                Guides
              </Link>
              {" / "}
              {guide.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <CaseTag>{guide.category}</CaseTag>
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                Updated {guide.updated} · {guide.readTime} read
              </span>
            </div>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink">
              {guide.h1}
            </h1>
          </div>
        </header>

        <div className="wrap grid gap-10 section-pad lg:grid-cols-[1fr_280px]">
          <div className="space-y-10">
            <AnswerBox question={guide.h1} answer={guide.quickAnswer} label="Direct answer" />

            {guide.howTo && (
              <section>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {guide.howTo.name}
                </h2>
                <ol className="mt-5 space-y-4">
                  {guide.howTo.steps.map((step, i) => (
                    <li key={step.name} className="panel flex gap-4 p-4">
                      <span className="font-display text-2xl font-semibold text-coral">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-semibold text-ink">{step.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-3 text-muted">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="panel-ink p-6">
              <h2 className="font-display text-xl font-semibold text-chart">
                Need this fixed in South Florida?
              </h2>
              <p className="mt-2 text-sm text-steel">
                Free estimates. Mobile and dockside when access allows. Book online or call{" "}
                <a href={site.phoneHref} className="text-coral no-underline hover:underline">
                  {site.phone}
                </a>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/book" className="btn">
                  Book repair
                </Link>
                <Link href="/free-estimate" className="btn btn-ghost-light">
                  Free estimate
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="panel p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-coral">
                Related services
              </p>
              <ul className="mt-3 space-y-2">
                {related.map((s) =>
                  s ? (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-medium text-ink no-underline hover:text-coral"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
            <div className="panel p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">More guides</p>
              <ul className="mt-3 space-y-2">
                {guides
                  .filter((g) => g.slug !== guide.slug)
                  .slice(0, 4)
                  .map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="text-sm text-ink no-underline hover:text-teal"
                      >
                        {g.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>

        {guide.faqs.length > 0 && (
          <FaqSection title="Questions this guide answers" faqs={guide.faqs} />
        )}
      </article>

      <CTA />
    </>
  );
}
