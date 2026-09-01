import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
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

      <PageHero
        eyebrow={`${location.region} · ${location.state}${service.duration ? ` · ${service.duration}` : ""}`}
        title={serviceCityH1(service, location)}
        description={`Mobile and dockside ${name.toLowerCase()} for boat and yacht owners in ${location.name}—diagnose first, free estimates, clear notes.`}
        image={{ src: hero.src, alt: `${name} in ${location.name}, FL — ${hero.alt}` }}
        actions={
          <>
            <Button href={`/book?service=${service.id}`}>Book in {location.shortName}</Button>
            <Button href="/free-estimate" variant="ghost">
              Get a free estimate
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </Button>
          </>
        }
        meta={
          <p className="page-hero__crumb">
            <Link href="/">Home</Link>
            {" / "}
            <Link href="/services">Services</Link>
            {" / "}
            <Link href={`/services/${service.slug}`}>{name}</Link>
            {" / "}
            {location.name}
          </p>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
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
              <p key={p.slice(0, 60)} className="mt-4 leading-relaxed text-steel">
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
                <li key={s} className="list-tile">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-steel">{service.whenToCall}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              What&apos;s typically included
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="list-tile">
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
              <div className="border-t border-line px-4 py-3 text-[0.65rem] text-steel">
                {secondary.caption} · {location.name}
              </div>
            )}
          </div>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Service corridors in {location.name}
            </h2>
            <p className="mt-3 text-steel">
              We routinely plan mobile visits around these {location.shortName} areas when access
              allows:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {location.neighborhoods.map((n) => (
                <li key={n} className="list-tile flex gap-2">
                  <span className="text-gold">·</span>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-steel">{location.marinasNote}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              How a visit works in {location.shortName}
            </h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((step, i) => (
                <li key={step.title}>
                  <Card className="flex gap-4 p-4">
                    <span className="font-display text-2xl font-semibold text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-steel">{step.detail}</p>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </section>

          <Card className="card-accent p-6 sm:p-8">
            <h2 className="font-display text-navy">
              Book {name.toLowerCase()} in {location.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              Free estimates. Mobile/dockside when access allows. Call{" "}
              <a href={site.phoneHref}>{site.phone}</a> or book online with your marina and
              symptoms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/book?service=${service.id}`}>Book a visit</Button>
              <Button href="/free-estimate" variant="ghost">
                Get a free estimate
              </Button>
              <Button href={`/services/${service.slug}`} variant="ghost">
                Full {name} page
              </Button>
            </div>
          </Card>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <Card className="p-5">
            <p className="eyebrow">Book</p>
            <p className="mt-2 text-sm text-steel">
              {location.name}, FL · {service.duration}
            </p>
            <Button href={`/book?service=${service.id}`} className="mt-4 w-full">
              Book this service
            </Button>
            <a
              href={site.phoneHref}
              className="mt-3 block text-center text-sm font-semibold text-navy no-underline hover:text-gold-deep"
            >
              {site.phone}
            </a>
          </Card>
          <Card className="p-5">
            <p className="eyebrow">This service · other cities</p>
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
          </Card>
          <Card className="p-5">
            <p className="eyebrow">More in {location.shortName}</p>
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
          </Card>
        </aside>
        </div>
      </Section>

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
