import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { DepthTicks } from "@/components/ChartDecor";
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
    <footer className="mt-auto border-t-2 border-ink bg-ink text-chart">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <BrandMark size={36} className="text-chart" />
            <div>
              <p className="font-display text-xl font-semibold">Doctor Yachts</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
                The mechanic for boats & yachts
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel">
            Independent marine diagnostics and repair across South Florida. We find the fault,
            explain the options, and get the vessel ready for the water again.
          </p>
          <div className="mt-6">
            <DepthTicks />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-chart/85 no-underline hover:text-coral"
                >
                  {shortServiceTitle(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel">
            Areas
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-chart/85 no-underline hover:text-coral"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel">
            More
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/guides" className="text-chart/85 no-underline hover:text-coral">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-chart/85 no-underline hover:text-coral">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-chart/85 no-underline hover:text-coral">
                About
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-chart/85 no-underline hover:text-coral">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-chart/85 no-underline hover:text-coral">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-chart/85">
            <li>
              <a href={site.phoneHref} className="no-underline hover:text-coral">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="no-underline hover:text-coral">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li className="text-steel">{site.address}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/book" className="btn">
              Book repair
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost-light">
              Free estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-steel sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Doctor Yachts · South Florida</span>
          <span>Diagnose first · free estimates</span>
        </div>
      </div>
    </footer>
  );
}
