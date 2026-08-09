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
    <footer className="mt-auto border-t border-line bg-navy-deep text-steel">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-xl font-semibold text-pearl">Doctor Yachts</p>
          <p className="mt-1 text-sm text-gold">Boat & yacht mechanic · South Florida</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            Independent marine diagnostics and repair. We find the fault, explain the options, and
            get the vessel ready for the water again.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-pearl">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-steel no-underline hover:text-gold-light"
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
                  className="text-steel no-underline hover:text-gold-light"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-pearl">More</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/guides" className="text-steel no-underline hover:text-gold-light">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-steel no-underline hover:text-gold-light">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-steel no-underline hover:text-gold-light">
                About
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-steel no-underline hover:text-gold-light">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-steel no-underline hover:text-gold-light">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-pearl">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-steel">
            <li>
              <a href={site.phoneHref} className="text-gold no-underline hover:text-gold-light">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="no-underline hover:text-gold-light">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li className="text-muted">{site.address}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/book" className="btn">
              Book repair
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate
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
