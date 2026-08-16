import Link from "next/link";
import { Button } from "@/components/Button";
import { ReviewLinks } from "@/components/ReviewLinks";
import { site } from "@/lib/site";

/** Shared shop-voice actions. Compact for FAQ groups; buttons for heroes and page bottoms. */
export function ShopActions({
  compact = false,
  bookLabel = "Book a visit",
  estimateLabel = "Get a free estimate",
  showPhone = true,
}: {
  compact?: boolean;
  bookLabel?: string;
  estimateLabel?: string;
  showPhone?: boolean;
}) {
  if (compact) {
    return (
      <p className="faq-group-path">
        <Link href="/book">{bookLabel}</Link>
        <span aria-hidden> · </span>
        <Link href="/free-estimate">{estimateLabel}</Link>
        {showPhone && (
          <>
            <span aria-hidden> · </span>
            <a href={site.phoneHref}>Call {site.phone}</a>
          </>
        )}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button href="/book">{bookLabel}</Button>
      <Button href="/free-estimate" variant="ghost">
        {estimateLabel}
      </Button>
      {showPhone && (
        <Button href={site.phoneHref} variant="ghost">
          Call {site.phone}
        </Button>
      )}
    </div>
  );
}

/** Shared page-bottom band. Shop voice: what happens next, no fake scarcity. */
export function CTA() {
  return (
    <section className="cta-band">
      <div className="wrap flex flex-col items-start justify-between gap-8 section-pad md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">Book this week</p>
          <h2 className="font-display">Book a visit — we confirm by phone</h2>
          <p className="mt-3">
            Submit a request or call{" "}
            <a href={site.phoneHref} className="font-semibold">
              {site.phone}
            </a>
            . We confirm during {site.hours}. Diagnose first. Free estimates on recommended work.
          </p>
          <p className="mt-2 text-sm">
            Reviews on <ReviewLinks />
          </p>
        </div>
        <ShopActions />
      </div>
    </section>
  );
}

export { CTA as CtaBand };
