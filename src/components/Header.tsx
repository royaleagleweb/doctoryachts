"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { t } from "@/lib/copy";
import { localeFromPath, pathFor } from "@/lib/i18n";
import { navLinks, site } from "@/lib/site";

const chromeHrefs = ["/services", "/locations", "/faq"] as const;

export function Header() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const copy = t(locale);
  const [open, setOpen] = useState(false);
  const chromeLinks = navLinks.filter((l) =>
    (chromeHrefs as readonly string[]).includes(l.href),
  );
  const menuLinks = navLinks.filter((l) => l.href !== "/book");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const homeHref = pathFor(locale, "/");
  const bookHref = pathFor(locale, "/book");

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href={homeHref} className="brand-wordmark no-underline" onClick={() => setOpen(false)}>
          <span className="brand-wordmark__doctor">Doctor</span>
          <span className="brand-wordmark__yachts">Yachts</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.nav.mainNav}>
          {chromeLinks.map((link) => {
            const href = locale === "es" ? link.esHref : link.href;
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={link.href}
                href={href}
                className={`site-header__link ${active ? "is-active" : ""}`}
              >
                {locale === "es" ? link.labelEs : link.label}
              </Link>
            );
          })}
          <LanguageSwitch locale={locale} />
          <Link href={bookHref} className="btn btn-nav-book">
            {copy.nav.book}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch locale={locale} />
          <a href={site.phoneHref} className="btn btn-ghost !min-h-11 px-3.5 text-sm">
            {copy.nav.call}
          </a>
          <button
            type="button"
            className="btn btn-ghost !min-h-11 px-3.5 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? copy.nav.close : copy.nav.menu}
          >
            {open ? copy.nav.close : copy.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="site-header__menu lg:hidden">
          <nav className="wrap flex flex-col py-2" aria-label={copy.nav.mobileNav}>
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={locale === "es" ? link.esHref : link.href}
                onClick={() => setOpen(false)}
                className="site-header__item flex min-h-12 items-center no-underline"
              >
                {locale === "es" ? link.labelEs : link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <LanguageSwitch locale={locale} compact />
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                {site.phone}
              </a>
              <Link href={bookHref} onClick={() => setOpen(false)} className="btn w-full">
                {copy.nav.bookVisit}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
