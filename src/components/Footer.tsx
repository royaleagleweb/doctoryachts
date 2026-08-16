import Link from "next/link";
import { ReviewLinks } from "@/components/ReviewLinks";
import { publicLocations } from "@/lib/locations";
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
    <footer className="site-footer mt-auto bg-navy-deep text-[#a3b4c2]">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-semibold tracking-tight text-white">
            Doctor Yachts
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
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
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="no-underline hover:text-white"
                >
                  {shortServiceTitle(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-sm font-semibold text-white">Areas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {publicLocations.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`} className="no-underline hover:text-white">
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-white">Book</p>
          <p className="mt-3 text-sm">
            {site.hours}
            <br />
            {site.email}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/book" className="btn">
              Book a visit
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Get a free estimate
            </Link>
          </div>
          <p className="mt-4 text-sm">
            Reviews: <ReviewLinks />
          </p>
        </div>
      </div>

      <div>
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-[#7a8c9c] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Doctor Yachts</span>
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="no-underline hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="no-underline hover:text-white">
              Terms
            </Link>
            <Link href="/reviews" className="no-underline hover:text-white">
              Reviews
            </Link>
            <span>Diagnose first · free estimates</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
