import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="wrap section-pad">
      <p className="eyebrow">Page not found</p>
      <h1 className="font-display text-4xl font-semibold text-pearl sm:text-5xl">
        That page isn&apos;t here
      </h1>
      <p className="mt-4 max-w-lg text-steel">
        The link may be old or mistyped. Head home, browse services, or call the shop for help.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn">
          Home
        </Link>
        <Link href="/services" className="btn btn-ghost">
          Services
        </Link>
        <Link href="/book" className="btn btn-ghost">
          Book repair
        </Link>
        <a href={site.phoneHref} className="btn btn-ghost">
          {site.phone}
        </a>
      </div>
    </section>
  );
}
