import Link from "next/link";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="border-t border-line bg-navy">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-end md:py-16">
        <div className="max-w-xl">
          <p className="eyebrow">Next step</p>
          <h2 className="font-display text-3xl font-extrabold text-pearl sm:text-4xl">
            Book repair or get a free estimate
          </h2>
          <p className="mt-3 text-steel">
            {site.hours} ·{" "}
            <a href={site.phoneHref} className="font-semibold text-pearl">
              {site.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/book" className="btn">
            Book a visit
          </Link>
          <Link href="/free-estimate" className="btn btn-ghost">
            Free estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
