import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { locations } from "@/lib/locations";
import {
  getAllServiceCityPairs,
  getServiceCityPair,
  isServiceCityIndexable,
  serviceCityContent,
  serviceCityFaqs,
  serviceCityH1,
  serviceCityKeywords,
  serviceCityQuickAnswer,
  serviceCitySeoDescription,
  serviceCitySeoTitle,
  serviceDisplayName,
} from "@/lib/service-locations";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() {
  return getAllServiceCityPairs().map(({ service, location }) => ({
    slug: service.slug,
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const pair = getServiceCityPair(slug, city);
  if (!pair) return {};
  const { service, location, path } = pair;
  return buildMetadata({
    title: serviceCitySeoTitle(service, location),
    description: serviceCitySeoDescription(service, location),
    path,
    keywords: serviceCityKeywords(service, location),
    noIndex: !isServiceCityIndexable(slug, city),
  });
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { slug, city } = await params;
  const pair = getServiceCityPair(slug, city);
  if (!pair) notFound();

  const { service, location, path } = pair;
  const name = serviceDisplayName(service);
  const hero = service.images[0];
  const secondary = service.images[1] ?? service.images[0];
  const content = serviceCityContent(service, location);
  const faqs = serviceCityFaqs(service, location);

  const otherCities = locations
    .filter((l) => l.slug !== location.slug)
    .map((l) => ({
      href: `/services/${service.slug}/${l.slug}`,
      label: `${name} ${l.name}`,
      note: l.region,
    }));

  const otherServicesInCity = services
    .filter((s) => s.id !== service.id)
    .slice(0, 6)
    .map((s) => ({
      href: `/services/${s.slug}/${location.slug}`,
      label: `${serviceDisplayName(s)} in ${location.shortName}`,
      note: s.summary,
    }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: name, path: `/services/${service.slug}` },
            { name: location.name, path },
          ]),
          serviceJsonLd({
            name: `${name} — ${location.name}, FL`,
            description: serviceCitySeoDescription(service, location),
            path,
          }),
          faqJsonLd(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden border-b border-line bg-navy sm:min-h-[440px]">
        <Image
          src={hero.src}
          alt={`${name} in ${location.name}, FL — ${hero.alt}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/30" />

        <div className="wrap relative flex min-h-[380px] flex-col justify-end py-12 sm:min-h-[440px] sm:py-16">
          <p className="text-xs text-steel">
            <Link href="/" className="text-steel no-underline hover:text-gold">
              Home
            </Link>
            {" / "}
            <Link href="/services" className="text-steel no-underline hover:text-gold">
              Services
            </Link>
            {" / "}
            <Link
              href={`/services/${service.slug}`}
              className="text-steel no-underline hover:text-gold"
            >
              {name}
            </Link>
            {" / "}
            <span className="text-paper/80">{location.name}</span>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CaseTag>
              {location.region} · {location.state}
            </CaseTag>
            <CoordStamp label={service.duration} />
          </div>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            {serviceCityH1(service, location)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
            Mobile and dockside {name.toLowerCase()} for boat and yacht owners in{" "}
            {location.name}—diagnose first, free estimates, clear notes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/book?service=${service.id}`} className="btn btn-gold">
              Book in {location.shortName}
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost-light">
              Free estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost-light">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 section-pad lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0 space-y-10">
          <AnswerBox
            label="Quick answer"
            question={`Do you offer ${name.toLowerCase()} in ${location.name}?`}
            answer={serviceCityQuickAnswer(service, location)}
          />

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              {name} for {location.name} boat owners
            </h2>
            {content.map((p) => (
              <p key={p.slice(0, 60)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Common symptoms we handle in {location.shortName}
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.symptoms.map((s) => (
                <li
                  key={s}
                  className="flex gap-2 border border-line bg-white px-3 py-2.5 text-sm text-navy"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">{service.whenToCall}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              What&apos;s typically included
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 border border-line bg-white px-3 py-2.5 text-sm text-navy"
                >
                  
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <div className="shot">
            <div className="shot-img relative aspect-[16/10]">
              <Image
                src={secondary.src}
                alt={`${name} service near ${location.name} — ${secondary.alt}`}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
            {secondary.caption && (
              <div className="border-t border-line px-4 py-3 text-[0.65rem]  text-muted">
                {secondary.caption} · {location.name}
              </div>
            )}
          </div>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Service corridors in {location.name}
            </h2>
            <p className="mt-3 text-muted">
              We routinely plan mobile visits around these {location.shortName} areas when access
              allows:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {location.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="flex gap-2 border border-line px-3 py-2 text-sm text-navy"
                >
                  <span className="text-gold">·</span>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted">{location.marinasNote}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              How a visit works in {location.shortName}
            </h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, i) => (
                <li key={step.title} className="panel flex gap-4 p-4">
                  <span className="font-display text-2xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="panel-navy p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-paper sm:text-2xl">
              Book {name.toLowerCase()} in {location.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              Free estimates. Mobile/dockside when access allows. Call{" "}
              <a href={site.phoneHref} className="text-gold">
                {site.phone}
              </a>{" "}
              or book online with your marina and symptoms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/book?service=${service.id}`} className="btn btn-gold">
                Book {location.shortName}
              </Link>
              <Link href="/free-estimate" className="btn btn-ghost-light">
                Free estimate
              </Link>
              <Link
                href={`/services/${service.slug}`}
                className="btn btn-ghost-light"
              >
                Full {name} page
              </Link>
            </div>
          </section>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="panel p-5">
            <p className="text-xs  text-gold">Book</p>
            <p className="mt-2 text-sm text-muted">
              {location.name}, FL · {service.duration}
            </p>
            <Link href={`/book?service=${service.id}`} className="btn mt-4 w-full">
              Book this service
            </Link>
            <a
              href={site.phoneHref}
              className="mt-3 block text-center text-sm font-semibold text-navy no-underline hover:text-gold"
            >
              {site.phone}
            </a>
          </div>
          <div className="panel p-5">
            <p className="text-xs  text-muted">
              This service · other cities
            </p>
            <ul className="mt-3 space-y-2">
              {otherCities.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-navy no-underline hover:text-gold"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-5">
            <p className="text-xs  text-muted">
              More in {location.shortName}
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={`/locations/${location.slug}`}
                  className="text-sm font-semibold text-navy no-underline hover:text-gold"
                >
                  All boat repair · {location.name}
                </Link>
              </li>
              {otherServicesInCity.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-navy no-underline hover:text-gold"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <FaqSection
        title={`${name} in ${location.shortName} FAQ`}
        faqs={faqs}
      />

      <RelatedLinks title={`${name} in other cities`} links={otherCities} />
      <RelatedLinks
        title={`Other services in ${location.shortName}`}
        links={otherServicesInCity}
      />

      <CTA />
    </>
  );
}
