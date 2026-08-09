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
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-gold text-sm font-extrabold text-navy-deep">
              DY
            </span>
            <div>
              <p className="font-display text-xl font-semibold text-pearl">Doctor Yachts</p>
              <p className="text-sm text-steel">The mechanic for boats & yachts</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel">
            Independent marine diagnostics and repair across South Florida. Clear findings, free
            estimates, dockside when access allows.
          </p>
          <a
            href={site.phoneHref}
            className="mt-5 inline-block text-lg font-semibold text-gold no-underline hover:text-gold-light"
          >
            {site.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-bold text-pearl">Services</p>
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
          <p className="text-sm font-bold text-pearl">Areas</p>
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
          <p className="mt-6 text-sm font-bold text-pearl">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-steel no-underline hover:text-gold-light">
                About
              </Link>
            </li>
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
              <Link href="/reviews" className="text-steel no-underline hover:text-gold-light">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-steel no-underline hover:text-gold-light">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-steel no-underline hover:text-gold-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-bold text-pearl">Book service</p>
          <p className="mt-3 text-sm text-steel">
            {site.hours}
            <br />
            {site.address}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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
