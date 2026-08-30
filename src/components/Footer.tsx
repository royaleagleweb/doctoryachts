"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReviewLinks } from "@/components/ReviewLinks";
import { t } from "@/lib/copy";
import { localeFromPath, locationPath, pathFor, servicePath } from "@/lib/i18n";
import { publicLocations } from "@/lib/locations";
import { servicesInHubOrderLocalized } from "@/lib/services-localized";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

function shortServiceTitle(title: string) {
  return title
    .replace("Yacht & Boat ", "")
    .replace("Marine ", "")
    .replace(" in Fort Lauderdale", "")
    .replace(" Fort Lauderdale", "")
    .replace(" en Fort Lauderdale", "")
    .replace("Boat & Yacht ", "")
    .replace("Boat ", "")
    .replace("Reparación de ", "")
    .replace("Servicio de ", "");
}

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const copy = t(locale);
  const list = servicesInHubOrderLocalized(locale);

  return (
    <footer className="site-footer mt-auto">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="brand-wordmark text-2xl tracking-tight">
            <span className="brand-wordmark__doctor">Doctor</span>
            <span className="brand-wordmark__yachts">Yachts</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{copy.footer.blurb}</p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-block font-display text-xl font-bold text-gold"
          >
            {site.phone}
          </a>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            <span className="block text-pearl">{site.name}</span>
            <span className="block">{site.owner}</span>
            <span className="mt-2 block">
              {site.streetAddress}
              <br />
              {site.addressLocality}, {site.addressRegion} {site.postalCode}
            </span>
            <a href={`mailto:${site.email}`} className="mt-2 inline-block hover:text-white">
              {site.email}
            </a>
          </address>
        </div>

        <div className="md:col-span-3">
          <p className="site-footer__label">{copy.footer.services}</p>
          <ul className="site-footer__list text-sm">
            {list.map((s) => {
              const en = services.find((x) => x.id === s.id);
              return (
                <li key={s.id}>
                  <Link href={servicePath(en?.slug ?? s.slug, locale)}>
                    {shortServiceTitle(s.title)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="site-footer__label">{copy.footer.areas}</p>
          <ul className="site-footer__list text-sm">
            {publicLocations.map((loc) => (
              <li key={loc.slug}>
                <Link href={locationPath(loc.slug, locale)}>{loc.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="site-footer__label">{copy.footer.book}</p>
          <p className="mt-3 text-sm leading-relaxed">
            {locale === "es" ? site.hoursEs : site.hours}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={pathFor(locale, "/book")} className="btn">
              {copy.footer.bookVisit}
            </Link>
            <Link href={pathFor(locale, "/free-estimate")} className="btn btn-ghost">
              {copy.footer.estimate}
            </Link>
          </div>
          <p className="mt-4 text-sm">
            {copy.footer.reviews}: <ReviewLinks />
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="wrap flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Doctor Yachts</span>
          <span className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy">{copy.footer.privacy}</Link>
            <Link href="/terms">{copy.footer.terms}</Link>
            <Link href="/reviews">{copy.footer.reviews}</Link>
            <span className="text-steel-light/80">{copy.footer.tag}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
