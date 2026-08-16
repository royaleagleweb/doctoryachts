import { Button } from "@/components/Button";
import { ReviewLinks } from "@/components/ReviewLinks";
import { site } from "@/lib/site";

/** Shared “Next step” band. Use on every content page above the footer. */
export function CTA() {
  return (
    <section className="cta-band">
      <div className="wrap flex flex-col items-start justify-between gap-8 section-pad md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">Next step</p>
          <h2 className="font-display">Book repair or get a free estimate</h2>
          <p className="mt-3">
            {site.hours} ·{" "}
            <a href={site.phoneHref} className="font-semibold">
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm">
            Reviews on <ReviewLinks />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/book">Book a visit</Button>
          <Button href="/free-estimate" variant="ghost">
            Free estimate
          </Button>
        </div>
      </div>
    </section>
  );
}

export { CTA as CtaBand };
