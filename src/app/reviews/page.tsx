import type { Metadata } from "next";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Mechanic Reviews | Fort Lauderdale Clients",
  description:
    "What boat owners look for in a Fort Lauderdale boat mechanic—and how to leave a review for Doctor Yachts. Free estimates. Call " +
    site.phone +
    ".",
  path: "/reviews",
  keywords: [
    "boat mechanic reviews Fort Lauderdale",
    "Doctor Yachts reviews",
    "boat repair reviews Pompano Beach",
  ],
});

/** Standards we aim for — not presented as live Google reviews */
const standards = [
  {
    title: "Honest diagnosis",
    body: "Clear findings before parts pressure—so you know what is urgent versus what can wait.",
  },
  {
    title: "Dockside when it helps",
    body: "Mobile and marina visits when access allows, so many jobs don’t start with a tow.",
  },
  {
    title: "Plain-language options",
    body: "Free estimates on recommended work and notes you can keep for surveys or the next trip.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep/50">
        <div className="wrap section-pad">
          <CaseTag>Reviews</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy">
            Reviews &amp; reputation
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Google Business Profile reviews will live here when the listing is active. Until then,
            here is what we stand for—and how to reach us after a visit.
          </p>
        </div>
      </section>

      <section className="wrap section-pad space-y-10">
        <div className="grid gap-5 md:grid-cols-3">
          {standards.map((s) => (
            <div key={s.title} className="panel flex h-full flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-gold">Standard</p>
              <h2 className="font-display mt-3 text-xl font-semibold text-navy">{s.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy">
            What boat owners in Fort Lauderdale usually care about
          </h2>
          <p className="mt-3 text-muted">
            A good boat mechanic review usually comes down to three things: honesty about what can
            wait, speed when something is safety-critical, and a diagnosis that sticks. Doctor
            Yachts is built around that standard—engines, electrical, cooling, and dockside service
            across South Florida.
          </p>
          <p className="mt-3 text-muted">
            Worked with us already? Call{" "}
            <a href={site.phoneHref}>{site.phone}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we can point you to the live
            review link once Google Business Profile is connected.
          </p>
          <p className="mt-3 text-muted">
            Exploring service? See{" "}
            <Link href="/services">boat repair services</Link>,{" "}
            <Link href="/locations/fort-lauderdale">Fort Lauderdale coverage</Link>, or our{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </div>

        <p className="text-sm text-muted">
          Ready to book? <Link href="/free-estimate">Request a free estimate</Link> or{" "}
          <Link href="/book">book online</Link>.
        </p>
      </section>

      <CTA />
    </>
  );
}
