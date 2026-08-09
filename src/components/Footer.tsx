import Link from "next/link";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

function shortServiceTitle(title: string) {
  return title
    .replace("Yacht & Boat ", "")
    .replace("Marine ", "")
    .replace(" Fort Lauderdale", "")
    .replace("Boat & Yacht ", "")
    .replace("Boat ", "");
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-navy-deep">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-extrabold tracking-tight text-pearl">
            Doctor Yachts
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
            Independent marine diagnostics and repair. Clear findings, free estimates, dockside
            when access allows.
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-block font-display text-xl font-bold text-gold no-underline hover:text-gold-light"
          >
            {site.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-pearl">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-steel no-underline hover:text-pearl"
                >
                  {shortServiceTitle(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-semibold text-pearl">Areas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-steel no-underline hover:text-pearl"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-pearl">Book</p>
          <p className="mt-3 text-sm text-steel">
            {site.hours}
            <br />
            {site.email}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/book" className="btn">
              Book
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-4 text-sm text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Doctor Yachts</span>
          <span>Diagnose first · free estimates</span>
        </div>
      </div>
    </footer>
  );
}
