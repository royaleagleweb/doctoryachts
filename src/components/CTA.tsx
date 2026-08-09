import Link from "next/link";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="border-t border-line bg-gradient-to-br from-navy via-navy to-navy-mid">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-16">
        <div className="max-w-xl">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="font-display text-3xl font-semibold text-pearl sm:text-4xl">
            Book boat repair or request a free estimate
          </h2>
          <p className="mt-3 text-steel">
            Fort Lauderdale, Pompano Beach, Miami, and nearby docks. Mobile when access allows.
            Call{" "}
            <a href={site.phoneHref} className="font-semibold text-gold">
              {site.phone}
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/book" className="btn">
            Book repair
          </Link>
          <Link href="/free-estimate" className="btn btn-ghost">
            Free estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
