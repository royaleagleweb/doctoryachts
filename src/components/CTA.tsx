import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-chart-line bg-ink text-chart">
      <div className="wrap relative grid gap-8 py-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <CaseTag>Ready to book</CaseTag>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Need boat repairs in Fort Lauderdale or Pompano Beach?
            <span className="mt-1 block text-steel">
              Free estimates. Mobile dockside when we can.
            </span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
            Book online or call the shop. Engines, electrical, cooling, plumbing systems, and
            dockside mobile repair across South Florida.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <Link href="/book" className="btn btn-gold">
            Book repair
          </Link>
          <Link href="/free-estimate" className="btn btn-ghost-light">
            Free estimate
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost-light">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
