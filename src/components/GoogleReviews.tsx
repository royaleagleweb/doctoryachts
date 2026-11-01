import Link from "next/link";
import {
  formatReviewMonth,
  googleReviewSummary,
  googleReviews,
  googleReviewsNewestFirst,
} from "@/lib/google-reviews";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type GoogleReviewsProps = {
  locale?: Locale;
  /** How many verbatim reviews to show. Omit to show every captured review. */
  limit?: number;
  /** On-site page that lists the captured reviews, when this view is a subset. */
  moreHref?: string;
  /** “5.0 ★ …” as the section heading, or as a paragraph under an existing heading. */
  summaryAs?: "h2" | "p";
  /** Profile links for leaving a review. Off when the surrounding section already has them. */
  showLeaveLinks?: boolean;
};

const copy = {
  en: {
    summary: `${googleReviewSummary.ratingLabel} ★ from ${googleReviewSummary.count} Google reviews`,
    summarySr: `${googleReviewSummary.ratingLabel} out of 5 stars from ${googleReviewSummary.count} Google reviews`,
    readAll: "Read all reviews on Google",
    note: `${googleReviews.length} reviews are shown here in the reviewers' own words. The rest are on Google.`,
    leaveBefore: "Leave a review on",
    leaveOr: "or",
    more: "Reviews page",
    listLabel: "Google reviews",
    source: "Google review",
    stars: (n: number) => `${n} out of 5 stars`,
  },
  es: {
    summary: `${googleReviewSummary.ratingLabel} ★ de ${googleReviewSummary.count} reseñas de Google`,
    summarySr: `${googleReviewSummary.ratingLabel} de 5 estrellas, de ${googleReviewSummary.count} reseñas de Google`,
    readAll: "Leer todas las reseñas en Google",
    note: `${googleReviews.length} reseñas aparecen aquí con el texto original. El resto está en Google.`,
    leaveBefore: "Deje una reseña en",
    leaveOr: "o",
    more: "Página de reseñas",
    listLabel: "Reseñas de Google",
    source: "Reseña de Google",
    stars: (n: number) => `${n} de 5 estrellas`,
  },
} as const;

function SummaryLine({ text }: { text: string }) {
  const [before, after] = text.split("★");
  return (
    <span aria-hidden="true">
      {before}
      <span className="google-reviews__star">★</span>
      {after}
    </span>
  );
}

function ReviewText({ text }: { text: string }) {
  const paragraphs = text.split(/\n{2,}/);
  return (
    <blockquote className="google-review__quote" lang="en">
      {paragraphs.map((paragraph, i) => {
        const lines = paragraph.split("\n");
        return (
          <p key={i}>
            {lines.map((line, j) => (
              <span key={j}>
                {j > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        );
      })}
    </blockquote>
  );
}

/** Static Google reviews. No third-party widget. Review text is not rewritten. */
export function GoogleReviews({
  locale = "en",
  limit,
  moreHref,
  summaryAs = "p",
  showLeaveLinks = false,
}: GoogleReviewsProps) {
  const t = copy[locale];
  const all = googleReviewsNewestFirst();
  const shown = typeof limit === "number" ? all.slice(0, limit) : all;
  const SummaryTag = summaryAs;
  const showNote = shown.length === googleReviews.length;

  return (
    <div className="google-reviews">
      <SummaryTag className={summaryAs === "h2" ? "google-reviews__score font-display" : "google-reviews__score"}>
        <SummaryLine text={t.summary} />
        <span className="sr-only">{t.summarySr}</span>
      </SummaryTag>

      <p className="google-reviews__actions">
        <a href={googleReviewSummary.readAllUrl} target="_blank" rel="noopener noreferrer">
          {t.readAll}
        </a>
      </p>

      {showNote ? <p className="google-reviews__note">{t.note}</p> : null}

      <ul className="google-reviews__list" aria-label={t.listLabel}>
        {shown.map((review) => (
          <li key={review.id}>
            <article className="google-review">
              <p className="sr-only">{t.source}</p>
              <header>
                <h3 className="google-review__name">
                  <span dir="auto" lang={review.nameLang}>
                    {review.name}
                  </span>
                </h3>
                <p className="google-review__meta">
                  <span className="google-review__stars">
                    <span aria-hidden="true">{"★".repeat(review.stars)}</span>
                    <span className="sr-only">{t.stars(review.stars)}</span>
                  </span>
                  <time dateTime={review.posted}>{formatReviewMonth(review.posted, locale)}</time>
                </p>
              </header>
              <ReviewText text={review.text} />
            </article>
          </li>
        ))}
      </ul>

      {moreHref && shown.length < googleReviews.length ? (
        <p className="google-reviews__actions">
          <Link href={moreHref} className="no-underline hover:text-gold">
            {t.more} →
          </Link>
        </p>
      ) : null}

      {showLeaveLinks ? (
        <p className="google-reviews__leave">
          {t.leaveBefore}{" "}
          <a href={site.profiles.google} target="_blank" rel="noopener noreferrer">
            Google
          </a>{" "}
          {t.leaveOr}{" "}
          <a href={site.profiles.yelp} target="_blank" rel="noopener noreferrer">
            Yelp
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
