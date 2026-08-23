"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/copy";
import { localeFromPath, pathFor } from "@/lib/i18n";
import { site } from "@/lib/site";

/** Sticky mobile conversion bar — hidden on book/estimate to avoid double CTAs */
export function MobileCta() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const copy = t(locale);
  const book = pathFor(locale, "/book");
  const estimate = pathFor(locale, "/free-estimate");
  if (pathname === book || pathname === estimate) return null;

  return (
    <div className="mobile-cta lg:hidden">
      <a href={site.phoneHref} className="btn btn-ghost" aria-label={`${copy.mobileCta.call} ${site.phone}`}>
        {copy.mobileCta.call}
      </a>
      <Link href={estimate} className="btn btn-ghost">
        {copy.mobileCta.estimate}
      </Link>
      <Link href={book} className="btn">
        {copy.mobileCta.book}
      </Link>
    </div>
  );
}
