import { Button } from "@/components/Button";
import type { Locale } from "@/lib/i18n";
import { pathFor } from "@/lib/i18n";
import {
  MONTHLY_PACKAGES_ID,
  monthlyPackagesCopy,
} from "@/lib/monthly-packages";
import { site } from "@/lib/site";

export function MonthlyPackages({ locale }: { locale: Locale }) {
  const copy = monthlyPackagesCopy(locale);
  const bookHref = `${pathFor(locale, "/book")}?service=maintenance`;

  return (
    <section
      id={MONTHLY_PACKAGES_ID}
      className="section-dark border-b border-line scroll-mt-28"
      aria-labelledby={`${MONTHLY_PACKAGES_ID}-title`}
    >
      <div className="wrap section-pad">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id={`${MONTHLY_PACKAGES_ID}-title`} className="font-display mt-3 text-paper">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">{copy.lead}</p>

        <div className="package-grid mt-10">
          {copy.packages.map((pkg) => (
            <article
              key={pkg.id}
              className={pkg.featured ? "package-card package-card--featured" : "package-card"}
            >
              {pkg.featured ? (
                <p className="eyebrow">{locale === "es" ? "El más completo" : "Most complete"}</p>
              ) : (
                <p className="eyebrow">{locale === "es" ? "En el muelle" : "Dockside"}</p>
              )}
              <h3 className="font-display mt-2 text-paper">{pkg.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{pkg.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-steel">
                {pkg.includes.map((item) => (
                  <li key={item} className="list-tile">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-steel">{copy.note}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={site.phoneHref}>{copy.pricingLabel}</Button>
          <Button href={bookHref} variant="ghost">
            {copy.bookLabel}
          </Button>
          <Button href={pathFor(locale, "/free-estimate")} variant="ghost">
            {copy.estimateLabel}
          </Button>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="eyebrow">{copy.notIncludedTitle}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-steel">
            {copy.notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
