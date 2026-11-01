import type { Locale } from "./i18n";
import data from "./google-reviews.json";

/**
 * Verbatim Google Business Profile reviews captured 2026-11-01.
 * Texts, names, star counts, and dates are copied exactly.
 * Do not edit, translate, paraphrase, or add reviews.
 */
export type GoogleReview = {
  id: string;
  name: string;
  /** Set when the reviewer name is not English. Review text stays English. */
  nameLang?: string;
  stars: number;
  /** Calendar date the review was posted (YYYY-MM-DD). */
  posted: string;
  text: string;
};

export const googleReviewSummary = {
  ratingLabel: data.ratingLabel,
  rating: data.rating,
  count: data.count,
  /** Public Google reviews list for this place. Not the “leave a review” share link. */
  readAllUrl: data.readAllUrl,
} as const;

export const googleReviews: readonly GoogleReview[] = data.reviews;

const MONTHS: Record<Locale, readonly string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

/** Month and year only — “Aug 2026”, never a relative date. */
export function formatReviewMonth(isoDate: string, locale: Locale = "en"): string {
  const match = /^(\d{4})-(\d{2})-\d{2}$/.exec(isoDate);
  if (!match) return isoDate;
  const month = MONTHS[locale][Number(match[2]) - 1];
  if (!month) return isoDate;
  return `${month} ${match[1]}`;
}

/** Newest posted date first. The same date keeps capture order. */
export function googleReviewsNewestFirst(): GoogleReview[] {
  return googleReviews
    .map((review, index) => ({ review, index }))
    .sort((a, b) => {
      if (a.review.posted === b.review.posted) return a.index - b.index;
      return a.review.posted < b.review.posted ? 1 : -1;
    })
    .map(({ review }) => review);
}
