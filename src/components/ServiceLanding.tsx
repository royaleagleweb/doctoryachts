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
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { getLocalizedServices } from "@/lib/services-localized";
import { site } from "@/lib/site";

function relatedServices(all: Service[], currentId: string): Service[] {
  const others = all.filter((s) => s.id !== currentId);
  const pick = (ids: string[]) => ids.map((id) => others.find((s) => s.id === id)).filter((s): s is Service => Boolean(s));
  if (currentId === "maintenance") {
    return [...pick(["hour-100", "hour-300"]), ...others.filter((s) => s.id !== "hour-100" && s.id !== "hour-300")].slice(0, 4);
  }
  if (currentId === "hour-100") {
    return [...pick(["hour-300", "maintenance"]), ...others.filter((s) => s.id !== "hour-300" && s.id !== "maintenance")].slice(0, 4);
  }
  if (currentId === "hour-300") {
    return [...pick(["hour-100", "maintenance"]), ...others.filter((s) => s.id !== "hour-100" && s.id !== "maintenance")].slice(0, 4);
  }
  return others.slice(0, 4);
}

function TextBand({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-floor border-b border-line">
      <div className="wrap max-w-3xl py-10 lg:py-14">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="font-display mt-3 text-navy">{title}</h2>
        <div className="mt-4 space-y-3 text-base leading-relaxed text-steel">{children}</div>
      </div>
    </section>
  );
}

export function ServiceLanding({ service, locale }: { service: Service; locale: Locale }) {
  const copy = t(locale);
  const sp = copy.servicePage;
  const all = getLocalizedServices(locale);
  const related = relatedServices(all, service.id);
  const relatedGuides = guides.filter((g) => g.relatedServices.includes(service.id)).slice(0, 4);
  const enSlug = services.find((s) => s.id === service.id)?.slug ?? service.slug;
  const pagePath = servicePath(enSlug, locale);
  const hours = locale === "es" ? site.hoursEs : site.hours;
  const extraLinks =
    service.id === "maintenance"
      ? locale === "es"
        ? [
            { href: servicePath("100-hour-service", locale), label: "servicio 100 horas" },
            { href: servicePath("300-hour-service", locale), label: "servicio 300 horas" },
          ]
        : [
            { href: servicePath("100-hour-service", locale), label: "100-hour service" },
            { href: servicePath("300-hour-service", locale), label: "300-hour service" },
          ]
      : [];

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

      <TextBand
        eyebrow={sp.aboutEyebrow}
        title={sp.aboutTitle(service.title)}
      >
        {service.content.map((p) => (
          <p key={p.slice(0, 56)}>{p}</p>
        ))}
        {extraLinks.length > 0 && (
          <p>
            {extraLinks.map((l, i) => (
              <span key={l.href}>
                {i > 0 ? " · " : ""}
                <Link href={l.href}>{l.label}</Link>
              </span>
            ))}
          </p>
        )}
      </TextBand>

      <TextBand
        eyebrow={sp.symptomsEyebrow}
        title={sp.symptomsTitle}
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
      </TextBand>

      <TextBand
        eyebrow={sp.scopeEyebrow}
        title={sp.scopeTitle}
      >
        <ul className="list-disc space-y-2 pl-5 text-sm text-steel">
          {service.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </TextBand>

      {service.sections.map((section) => (
        <TextBand
          key={section.heading}
          eyebrow={sp.detailsEyebrow}
          title={section.heading}
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
        </TextBand>
      ))}

      <TextBand
        eyebrow={sp.inspectEyebrow}
        title={sp.inspectTitle}
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
      </TextBand>

      <section className="border-b border-line bg-navy text-paper">
        <div className="wrap max-w-3xl py-12">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">{sp.processEyebrow}</p>
            <h2 className="font-display mt-3">{sp.processTitle(service.title)}</h2>
            <p className="mt-3 text-xs text-white/85">{sp.processCaption}</p>
            <p className="font-display mt-1 text-xl text-paper">{sp.processOverlay}</p>
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

      <TextBand
        eyebrow={sp.areaEyebrow}
        title={sp.areaTitle(service.title)}
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
      </TextBand>

      <TextBand
        eyebrow={sp.whoEyebrow}
        title={sp.whoTitle}
      >
        <ul className="list-disc space-y-2 pl-5 marker:text-gold">
          {sp.who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </TextBand>

      <section className="border-b border-line bg-navy-deep">
        <div className="wrap">
          <div className="bg-navy px-6 py-12 text-paper sm:px-12 lg:py-16">
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
