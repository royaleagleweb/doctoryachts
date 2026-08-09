import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp, DepthTicks } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { guides } from "@/lib/guides";
import { getServicePageMedia, type ServicePageMedia } from "@/lib/marine-media";
import { locations } from "@/lib/locations";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { getServiceBySlug, services, type ServiceImage } from "@/lib/services";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

function MediaBand({
  image,
  reverse = false,
  eyebrow,
  title,
  children,
}: {
  image: ServiceImage;
  reverse?: boolean;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-chart-line">
      <div className="wrap grid items-stretch gap-0 lg:grid-cols-2">
        <div className={`relative min-h-[260px] lg:min-h-[420px] ${reverse ? "lg:order-2" : ""}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent p-4 pt-16">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
              {image.caption ?? "Marine service"}
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center px-0 py-10 lg:py-14 ${
            reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"
          }`}
        >
          {eyebrow && <CaseTag>{eyebrow}</CaseTag>}
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const idx = services.findIndex((s) => s.id === service.id);
  const media: ServicePageMedia = getServicePageMedia(service);
  const related = services.filter((s) => s.id !== service.id).slice(0, 4);
  const relatedGuides = guides
    .filter((g) => g.relatedServices.includes(service.id))
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.seoDescription,
            path: `/services/${service.slug}`,
          }),
          faqJsonLd(service.faqs),
        ]}
      />

      {/* Full-bleed marine hero */}
      <section className="relative min-h-[420px] overflow-hidden border-b border-chart-line bg-ink sm:min-h-[480px]">
        <Image
          src={media.hero.src}
          alt={media.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />

        <div className="wrap relative flex min-h-[420px] flex-col justify-end py-12 sm:min-h-[480px] sm:py-16">
          <p className="font-mono text-xs text-steel">
            <Link href="/" className="text-steel no-underline hover:text-coral">
              Home
            </Link>
            {" / "}
            <Link href="/services" className="text-steel no-underline hover:text-coral">
              Services
            </Link>
            {" / "}
            <span className="text-chart/80">{service.title}</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CaseTag>Service · {String(idx + 1).padStart(2, "0")}</CaseTag>
            <CoordStamp label={service.duration} />
          </div>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-chart sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/book?service=${service.id}`} className="btn">
              Book this service
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost-light">
              Free estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost-light">
              {site.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
            <DepthTicks />
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
              Fort Lauderdale · Pompano Beach · Miami · Dockside first
            </p>
          </div>
        </div>
      </section>

      {/* Quick answer */}
      <section className="border-b border-chart-line bg-chart-deep/40">
        <div className="wrap py-10">
          <AnswerBox
            label="Quick answer · on the water"
            question={`What is ${service.title.toLowerCase()}?`}
            answer={service.quickAnswer}
          />
        </div>
      </section>

      {/* About + image */}
      <MediaBand
        image={media.about}
        eyebrow="On the dock"
        title={`About ${service.title.toLowerCase()} at Doctor Yachts`}
      >
        {service.content.map((p) => (
          <p key={p.slice(0, 56)}>{p}</p>
        ))}
      </MediaBand>

      {/* Symptoms + image */}
      <MediaBand
        image={media.symptoms}
        reverse
        eyebrow="Symptoms"
        title="Common symptoms we see"
      >
        <p>If any of these sound familiar, this service is usually the right place to start:</p>
        <ul className="mt-2 grid gap-2 sm:grid-cols-1">
          {service.symptoms.map((s) => (
            <li
              key={s}
              className="flex gap-2 border border-chart-line bg-foam px-3 py-2.5 text-sm text-ink"
            >
              <span className="text-teal">·</span>
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-medium text-ink">{service.whenToCall}</p>
      </MediaBand>

      {/* Included + image */}
      <MediaBand
        image={media.included}
        eyebrow="Scope"
        title="What's typically included"
      >
        <ul className="grid gap-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex gap-2 border border-chart-line bg-foam px-3 py-2.5 text-sm text-ink"
            >
              <span className="text-coral">▣</span>
              {f}
            </li>
          ))}
        </ul>
      </MediaBand>

      {/* Deep sections — each with its own image */}
      {service.sections.map((section, sectionIdx) => (
        <MediaBand
          key={section.heading}
          image={media.sections[sectionIdx] ?? media.about}
          reverse={sectionIdx % 2 === 1}
          eyebrow={`Section ${String(sectionIdx + 1).padStart(2, "0")}`}
          title={section.heading}
        >
          {section.body.map((p) => (
            <p key={p.slice(0, 56)}>{p}</p>
          ))}
          {section.list && (
            <ul className="list-disc space-y-2 pl-5 marker:text-coral">
              {section.list.map((item) => (
                <li key={item}>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </MediaBand>
      ))}

      {/* What we check + image */}
      <MediaBand
        image={media.checks}
        reverse={service.sections.length % 2 === 0}
        eyebrow="Inspection"
        title="What we check on a visit"
      >
        <p>
          Scope always follows your symptom and vessel, but a typical{" "}
          {service.title.toLowerCase()} visit may include:
        </p>
        <ol className="mt-2 grid gap-2">
          {service.whatWeCheck.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 border border-chart-line px-3 py-2.5 text-sm text-ink"
            >
              <span className="font-mono text-xs font-semibold text-coral">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </MediaBand>

      {/* Process + image */}
      <section className="border-b border-chart-line bg-ink text-chart">
        <div className="wrap grid items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image
              src={media.process.src}
              alt={media.process.alt}
              fill
              sizes="50vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
                {media.process.caption ?? "Dockside process"}
              </p>
              <p className="font-display mt-1 text-xl text-chart">
                How a visit moves from symptom to discharge
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-0 py-12 lg:px-12">
            <CaseTag>How we work</CaseTag>
            <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">
              How a {service.title.toLowerCase()} visit works
            </h2>
            <ol className="mt-8 space-y-5">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4 border-b border-white/10 pb-5">
                  <span className="font-display text-2xl font-semibold text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-chart">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Local SEO + image */}
      <MediaBand
        image={media.local}
        reverse
        eyebrow="Service area"
        title={`${service.title} in Fort Lauderdale, Pompano Beach & Miami, FL`}
      >
        <p>
          Owners searching for {service.title.toLowerCase()} near Fort Lauderdale, Pompano Beach,
          Dania Beach, Hollywood, Miami, and Palm Beach County book Doctor Yachts for
          diagnostic-first mobile and dockside work. We confirm marina access, review symptoms
          before arrival, and give free estimates before authorizing major parts.
        </p>
        <p>
          Local pages:{" "}
          <Link href="/locations/fort-lauderdale">Fort Lauderdale boat repair</Link>,{" "}
          <Link href="/locations/pompano-beach">Pompano Beach</Link>,{" "}
          <Link href="/locations/miami">Miami</Link>,{" "}
          <Link href="/locations/dania-beach">Dania Beach</Link>,{" "}
          <Link href="/locations/hollywood-fl">Hollywood</Link>, and{" "}
          <Link href="/locations">all service areas</Link>.
        </p>
        <p>
          Call <a href={site.phoneHref}>{site.phone}</a>,{" "}
          <Link href="/free-estimate">request a free estimate</Link>, or{" "}
          <Link href={`/book?service=${service.id}`}>book online</Link>. Hours: {site.hours}.
        </p>
      </MediaBand>

      {/* Who + wake image */}
      <MediaBand
        image={media.audience}
        eyebrow="Owners & captains"
        title="Who this service is for"
      >
        <ul className="list-disc space-y-2 pl-5 marker:text-coral">
          <li>Recreational boat and yacht owners in South Florida</li>
          <li>Captains needing dockside diagnosis without a tow first</li>
          <li>Owners tired of parts-swapping without a clear root cause</li>
          <li>Anyone planning seasonal maintenance or a trip checklist</li>
          <li>Buyers and owners who want findings documented in plain language</li>
        </ul>
      </MediaBand>

      {/* Diagnose first + mechanic image */}
      <section className="border-b border-chart-line">
        <div className="wrap grid items-center gap-0 lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[400px]">
            <Image
              src={media.diagnose.src}
              alt={media.diagnose.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-ink px-6 py-12 text-chart sm:px-12 lg:min-h-[400px] lg:py-16">
            <CoordStamp label="How we work" />
            <h2 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">
              Why diagnose first?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              Guessing parts on marine systems is expensive—especially batteries, impellers,
              sensors, and chargers that get replaced without fixing the real fault. Doctor Yachts
              charts the symptom, tests the system, and only then recommends repairs. Free
              estimates keep you in control of cost and timing.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              Read owner guides:{" "}
              <Link href="/guides/boat-wont-start-checklist" className="text-coral">
                boat won&apos;t start
              </Link>
              ,{" "}
              <Link href="/guides/why-is-my-boat-engine-overheating" className="text-coral">
                overheating
              </Link>
              ,{" "}
              <Link href="/guides/mobile-boat-repair-vs-shop" className="text-coral">
                mobile vs shop
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/book?service=${service.id}`} className="btn">
                Book {service.title.split(" ")[0]}
              </Link>
              <Link href="/free-estimate" className="btn btn-ghost-light">
                Free estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full marine gallery — every image for this service page */}
      <section className="border-b border-chart-line bg-chart-deep/40">
        <div className="wrap section-pad">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <CaseTag>Marine gallery</CaseTag>
              <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                {service.title} — waterside notes
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                Visual atmosphere for this service: engines, docks, systems, and South Florida
                water. Swap in real job photos anytime for stronger local proof.
              </p>
            </div>
            <CoordStamp label="South Florida · salt water" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.gallery.map((img, i) => (
              <figure key={`${img.src}-${i}`} className="shot m-0">
                <div className="shot-img relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-chart-line px-3 py-2 font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                  {img.caption ?? img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky-style booking strip with marina image */}
      <section className="border-b border-chart-line">
        <div className="wrap grid gap-6 section-pad lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-coral">
              Ready to get back on the water?
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-ink">
              Book {service.title.toLowerCase()} · free estimates
            </h2>
            <p className="mt-3 text-muted">
              Mobile and dockside when access allows across Fort Lauderdale, Pompano Beach, and
              nearby South Florida. Share marina, slip, and symptoms for the fastest confirmation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/book?service=${service.id}`} className="btn">
                Book online
              </Link>
              <Link href="/free-estimate" className="btn btn-ghost">
                Free estimate
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost">
                {site.phone}
              </a>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="panel p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                This service by city
              </p>
              <ul className="mt-3 space-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/services/${service.slug}/${loc.slug}`}
                      className="text-sm text-ink no-underline hover:text-coral"
                    >
                      {service.title.replace(/\s+Fort Lauderdale$/i, "")} · {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations"
                className="mt-3 block text-xs font-semibold text-teal no-underline hover:text-coral"
              >
                All service areas →
              </Link>
            </div>
            {relatedGuides.length > 0 && (
              <div className="panel p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Related guides
                </p>
                <ul className="mt-3 space-y-2">
                  {relatedGuides.map((g) => (
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
            )}
          </aside>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <FaqSection title={`${service.title} FAQ`} faqs={service.faqs} />
      )}

      <RelatedLinks
        title="Related marine services"
        links={related.map((s) => ({
          href: `/services/${s.slug}`,
          label: s.title,
          note: s.summary,
        }))}
      />

      <CTA />
    </>
  );
}
