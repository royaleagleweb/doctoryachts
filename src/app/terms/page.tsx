import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms | Doctor Yachts",
  description:
    "Terms for using the Doctor Yachts website and requesting boat repair in Fort Lauderdale, FL. Contact office@doctoryachts.com.",
  path: "/terms",
  keywords: ["Doctor Yachts terms", "boat mechanic terms Fort Lauderdale"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />

      <PageHero
        eyebrow="Terms"
        title="Terms"
        description="Simple terms for using this website and requesting marine mechanic service from Doctor Yachts."
      />

      <section className="wrap section-pad max-w-3xl space-y-8">
        <p className="text-muted">
          Doctor Yachts is an independent mobile and dockside marine mechanic based in Fort
          Lauderdale, FL. These terms cover the website and service requests. They are not a
          substitute for a written work authorization on a specific job.
        </p>

        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Website &amp; estimates</h2>
          <p className="mt-3 text-muted">
            Information on this site is general. A free estimate is based on the symptoms and
            location you share and is not a guarantee of total cost until we diagnose the vessel.
            Online booking is a service request — we confirm access, scope, and availability before
            a visit is locked.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Service</h2>
          <p className="mt-3 text-muted">
            Work proceeds with your approval after diagnosis. Some jobs need haul-out, a yard, or a
            factory dealer. We will say so when that is the honest path. You are responsible for
            marina access, gate codes, and a safe place to work.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-3 text-muted">
            Questions: <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={site.phoneHref}>{site.phone}</a>. Also see{" "}
            <Link href="/privacy">Privacy</Link> and <Link href="/contact">Contact</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
