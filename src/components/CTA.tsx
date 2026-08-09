import Link from "next/link";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="border-t border-line bg-navy text-pearl">
      <div className="wrap grid gap-8 py-14 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Need boat repairs in Fort Lauderdale or Pompano Beach?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
            Free estimates. Mobile dockside when we can. Engines, electrical, cooling, plumbing, and
            maintenance across South Florida.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <Link href="/book" className="btn">
            Book repair
          </Link>
          <Link href="/free-estimate" className="btn btn-ghost">
            Free estimate
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
