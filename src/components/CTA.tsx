"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { ReviewLinks } from "@/components/ReviewLinks";
import { t } from "@/lib/copy";
import { localeFromPath, pathFor } from "@/lib/i18n";
import { site } from "@/lib/site";

/** Shared shop-voice actions. Compact for FAQ groups; buttons for heroes and page bottoms. */
export function ShopActions({
  compact = false,
  bookLabel,
  estimateLabel,
  showPhone = true,
}: {
  compact?: boolean;
  bookLabel?: string;
  estimateLabel?: string;
  showPhone?: boolean;
}) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const copy = t(locale);
  const book = bookLabel ?? copy.cta.book;
  const estimate = estimateLabel ?? copy.cta.estimate;
  const bookHref = pathFor(locale, "/book");
  const estimateHref = pathFor(locale, "/free-estimate");

  if (compact) {
    return (
      <p className="faq-group-path">
        <Link href={bookHref}>{book}</Link>
        <span aria-hidden> · </span>
        <Link href={estimateHref}>{estimate}</Link>
        {showPhone && (
          <>
            <span aria-hidden> · </span>
            <a href={site.phoneHref}>{copy.cta.call}</a>
          </>
        )}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href={bookHref}>{book}</Button>
      <Button href={estimateHref} variant="ghost">
        {estimate}
      </Button>
      {showPhone && (
        <Button href={site.phoneHref} variant="ghost">
          {copy.cta.call}
        </Button>
      )}
    </div>
  );
}

/** Shared page-bottom band. Shop voice: what happens next, no fake scarcity. */
export function CTA() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const copy = t(locale);

  return (
    <section className="cta-band">
      <div className="wrap flex flex-col items-start justify-between gap-8 section-pad md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">{copy.cta.eyebrow}</p>
          <h2 className="font-display text-white">{copy.cta.title}</h2>
          <p className="mt-3 max-w-lg leading-relaxed">{copy.cta.body}</p>
          <p className="mt-3 text-sm">
            {copy.cta.reviews} <ReviewLinks />
          </p>
        </div>
        <ShopActions />
      </div>
    </section>
  );
}

export { CTA as CtaBand };
