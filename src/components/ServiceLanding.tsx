import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { t } from "@/lib/copy";
import { guides } from "@/lib/guides";
import type { Locale } from "@/lib/i18n";
import { locationPath, pathFor, servicePath } from "@/lib/i18n";
import { locations } from "@/lib/locations";
import { getServicePageMedia, type ServicePageMedia } from "@/lib/marine-media";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import type { Service, ServiceImage } from "@/lib/services";
import { services } from "@/lib/services";
import { getLocalizedServices } from "@/lib/services-localized";
import { site } from "@/lib/site";

const RELATED_HUBS: Record<string, string[]> = {
  "engine-repair": ["outboard", "electrical", "cooling", "maintenance"],
  outboard: ["engine-repair", "cooling", "electrical", "maintenance"],
  electrical: ["engine-repair", "systems", "maintenance"],
  cooling: ["engine-repair", "outboard", "maintenance"],
  maintenance: ["engine-repair", "outboard", "electrical", "cooling"],
  systems: ["electrical", "cooling", "maintenance"],
};

function relatedServices(all: Service[], currentId: string): Service[] {
  const preferred = RELATED_HUBS[currentId] ?? [];
  const pick = (ids: string[]) =>
    ids.map((id) => all.find((s) => s.id === id)).filter((s): s is Service => Boolean(s));
  const chosen = pick(preferred);
  if (chosen.length >= 3) return chosen;
  const extras = all.filter((s) => s.id !== currentId && !chosen.some((c) => c.id === s.id));
  return [...chosen, ...extras].slice(0, 4);
}

function MediaBand({
  image,
  reverse = false,
  eyebrow,
  title,
  fallbackCaption,
  children,
}: {
  image: ServiceImage;
  reverse?: boolean;
  eyebrow?: string;
  title: string;
  fallbackCaption: string;
  children: ReactNode;
}) {
  return (
    <section className="section-floor border-b border-line">
      <div className="wrap grid items-stretch gap-0 lg:grid-cols-2">
        <div className={`relative min-h-[260px] lg:min-h-[420px] ${reverse ? "lg:order-2" : ""}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/50 via-navy/12 to-transparent p-4 pt-16">
            <p className="text-xs text-white/85">{image.caption ?? fallbackCaption}</p>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center px-0 py-10 lg:py-14 ${
            reverse ? "lg:order-1 lg:pr-12" : "lg:pl-12"
          }`}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="font-display mt-3 text-navy">{title}</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-steel">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function ServiceLanding({ service, locale }: { service: Service; locale: Locale }) {
  const copy = t(locale);
  const sp = copy.servicePage;
  const media: ServicePageMedia = getServicePageMedia(service);
  const all = getLocalizedServices(locale);
  const related = relatedServices(all, service.id);
  const relatedGuides = guides.filter((g) => g.relatedServices.includes(service.id)).slice(0, 4);
  const enSlug = services.find((s) => s.id === service.id)?.slug ?? service.slug;
  const pagePath = servicePath(enSlug, locale);
  const hours = locale === "es" ? site.hoursEs : site.hours;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: sp.crumbHome, path: pathFor(locale, "/") },
            { name: sp.crumbServices, path: pathFor(locale, "/services") },
            { name: service.title, path: pagePath },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.seoDescription,
            path: pagePath,
          }),
          faqJsonLd(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={sp.eyebrow(service.duration)}
        title={service.title}
        description={
          <>
            {service.description}
            <span className="mt-3 block text-sm">{sp.areaLine}</span>
          </>
        }
        image={media.hero}
        actions={
          <>
            <Button href={`${pathFor(locale, "/book")}?service=${service.id}`}>{sp.book}</Button>
            <Button href={pathFor(locale, "/free-estimate")} variant="ghost">
              {sp.estimate}
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              {sp.call}
            </Button>
          </>
        }
        meta={
          <p className="page-hero__crumb">
            <Link href={pathFor(locale, "/")}>{sp.crumbHome}</Link>
            {" / "}
            <Link href={pathFor(locale, "/services")}>{sp.crumbServices}</Link>
            {" / "}
            {service.title}
          </p>
        }
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="wrap py-10">
          <AnswerBox
            label={sp.quickLabel}
            question={sp.quickQuestion(service.title)}
            answer={service.quickAnswer}
          />
        </div>
      </section>

      <MediaBand
        image={media.about}
        eyebrow={sp.aboutEyebrow}
        title={sp.aboutTitle(service.title)}
        fallbackCaption={sp.mediaCaption}
      >
        {service.content.map((p) => (
          <p key={p.slice(0, 56)}>{p}</p>
        ))}
      </MediaBand>

      <MediaBand
        image={media.symptoms}
        reverse
        eyebrow={sp.symptomsEyebrow}
        title={sp.symptomsTitle}
        fallbackCaption={sp.mediaCaption}
      >
        <p>{sp.symptomsLead}</p>
        <ul className="mt-2 grid gap-2 sm:grid-cols-1">
          {service.symptoms.map((s) => (
            <li key={s} className="list-tile">
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-medium text-navy">{service.whenToCall}</p>
      </MediaBand>

      <MediaBand
        image={media.included}
        eyebrow={sp.scopeEyebrow}
        title={sp.scopeTitle}
        fallbackCaption={sp.mediaCaption}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-steel">
          {service.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </MediaBand>

      {service.sections.map((section, sectionIdx) => (
        <MediaBand
          key={section.heading}
          image={media.sections[sectionIdx] ?? media.about}
          reverse={sectionIdx % 2 === 1}
          eyebrow={sp.detailsEyebrow}
          title={section.heading}
          fallbackCaption={sp.mediaCaption}
        >
          {section.body.map((p) => (
            <p key={p.slice(0, 56)}>{p}</p>
          ))}
          {section.list && (
            <ul className="list-disc space-y-2 pl-5 marker:text-gold">
              {section.list.map((item) => (
                <li key={item}>
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </MediaBand>
      ))}

      <MediaBand
        image={media.checks}
        reverse={service.sections.length % 2 === 0}
        eyebrow={sp.inspectEyebrow}
        title={sp.inspectTitle}
        fallbackCaption={sp.mediaCaption}
      >
        <p>{sp.inspectLead(service.title)}</p>
        <ol className="mt-2 grid gap-2">
          {service.whatWeCheck.map((item, i) => (
            <li key={item} className="list-tile flex gap-3">
              <span className="text-xs font-semibold text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </MediaBand>

      <section className="border-b border-line bg-navy text-paper">
        <div className="wrap grid items-stretch gap-0 lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            <Image
              src={media.process.src}
              alt={media.process.alt}
              fill
              sizes="50vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-white/85">{media.process.caption ?? sp.processCaption}</p>
              <p className="font-display mt-1 text-xl text-paper">{sp.processOverlay}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-0 py-12 lg:px-12">
            <p className="eyebrow">{sp.processEyebrow}</p>
            <h2 className="font-display mt-3">{sp.processTitle(service.title)}</h2>
            <ol className="mt-8 space-y-5">
              {service.process.map((step, i) => (
                <li key={step.title} className="flex gap-4 border-b border-white/10 pb-5">
                  <span className="font-display text-2xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-pearl">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-steel">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <MediaBand
        image={media.local}
        reverse
        eyebrow={sp.areaEyebrow}
        title={sp.areaTitle(service.title)}
        fallbackCaption={sp.mediaCaption}
      >
        <p>{sp.areaP1(service.title)}</p>
        <p>
          {sp.areaP2a}{" "}
          <Link href={locationPath("fort-lauderdale", locale)}>{sp.areaP2ftl}</Link>,{" "}
          <Link href={locationPath("miami", locale)}>Miami</Link>,{" "}
          <Link href={locationPath("dania-beach", locale)}>Dania Beach</Link>,{" "}
          <Link href={locationPath("hollywood-fl", locale)}>Hollywood</Link>, {locale === "es" ? "y" : "and"}{" "}
          <Link href={pathFor(locale, "/locations")}>{sp.areaP2all}</Link>.
        </p>
        <p>
          {sp.areaP3a} <a href={site.phoneHref}>{site.phone}</a>,{" "}
          <Link href={pathFor(locale, "/free-estimate")}>{sp.areaP3b}</Link>, {locale === "es" ? "o" : "or"}{" "}
          <Link href={`${pathFor(locale, "/book")}?service=${service.id}`}>{sp.areaP3c}</Link>. {sp.areaP3d}{" "}
          {hours}.
        </p>
      </MediaBand>

      <MediaBand
        image={media.audience}
        eyebrow={sp.whoEyebrow}
        title={sp.whoTitle}
        fallbackCaption={sp.mediaCaption}
      >
        <ul className="list-disc space-y-2 pl-5 marker:text-gold">
          {sp.who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MediaBand>

      <section className="border-b border-line bg-navy-deep">
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
          <div className="bg-navy px-6 py-12 text-paper sm:px-12 lg:min-h-[400px] lg:py-16">
            <p className="eyebrow">{sp.diagnoseEyebrow}</p>
            <h2 className="font-display mt-4">{sp.diagnoseTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel">{sp.diagnoseP1}</p>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              {sp.diagnoseP2}{" "}
              <Link href="/guides/boat-wont-start-checklist" className="text-gold">
                {sp.diagnoseStart}
              </Link>
              ,{" "}
              <Link href="/guides/why-is-my-boat-engine-overheating" className="text-gold">
                {sp.diagnoseHeat}
              </Link>
              ,{" "}
              <Link href="/guides/mobile-boat-repair-vs-shop" className="text-gold">
                {sp.diagnoseMobile}
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`${pathFor(locale, "/book")}?service=${service.id}`}>{sp.book}</Button>
              <Button href={pathFor(locale, "/free-estimate")} variant="ghost">
                {sp.estimate}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-deep">
        <div className="wrap section-pad">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{sp.galleryEyebrow}</p>
              <h2 className="font-display mt-3 text-navy">{sp.galleryTitle(service.title)}</h2>
              <p className="mt-2 max-w-2xl text-sm text-steel">{sp.galleryBody}</p>
            </div>
            <p className="text-sm text-steel">{sp.galleryMeta}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.gallery.map((img, i) => (
              <figure key={`${img.src}-${i}`} className="shot m-0">
                <div className="shot-img relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover" />
                </div>
                <figcaption className="border-t border-line px-3 py-2 text-xs text-steel">
                  {img.caption ?? img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-floor border-b border-line">
        <div className="wrap grid gap-6 section-pad lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 sm:p-8">
            <p className="eyebrow">{sp.bookEyebrow}</p>
            <h2 className="font-display mt-2 text-navy">{sp.bookTitle(service.title)}</h2>
            <p className="mt-3 text-steel">{sp.bookBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`${pathFor(locale, "/book")}?service=${service.id}`}>{sp.book}</Button>
              <Button href={pathFor(locale, "/free-estimate")} variant="ghost">
                {sp.estimate}
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                {sp.call}
              </Button>
            </div>
          </Card>
          <aside className="space-y-4">
            <Card className="p-5">
              <p className="eyebrow">{sp.byCity}</p>
              <ul className="mt-3 space-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={
                        locale === "es"
                          ? locationPath(loc.slug, "es")
                          : `/services/${enSlug}/${loc.slug}`
                      }
                      className="text-sm text-navy no-underline hover:text-gold"
                    >
                      {service.title.replace(/\s+Fort Lauderdale$/i, "")} · {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={pathFor(locale, "/locations")}
                className="mt-3 block text-sm font-semibold text-navy no-underline hover:text-gold-deep"
              >
                {sp.allAreas}
              </Link>
            </Card>
            {relatedGuides.length > 0 && (
              <Card className="p-5">
                <p className="eyebrow">{sp.relatedGuides}</p>
                <ul className="mt-3 space-y-2">
                  {relatedGuides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="text-sm text-navy no-underline hover:text-gold"
                      >
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </aside>
        </div>
      </section>

      {service.faqs.length > 0 && <FaqSection title={sp.faqTitle(service.title)} faqs={service.faqs} />}

      <RelatedLinks
        title={sp.relatedTitle}
        links={related.map((s) => ({
          href: servicePath(services.find((x) => x.id === s.id)?.slug ?? s.slug, locale),
          label: s.title,
          note: s.summary,
        }))}
      />

      <CTA />
    </>
  );
}
