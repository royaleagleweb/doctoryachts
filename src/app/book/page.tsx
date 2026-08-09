import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag } from "@/components/ChartDecor";
import { BookingForm } from "@/components/BookingForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book Boat Repair Online | Fort Lauderdale & Pompano Beach",
  description:
    "Book boat repair online in Fort Lauderdale, Pompano Beach & Miami. Choose service, vessel, schedule, and location. Free estimates. Mobile dockside when available.",
  path: "/book",
  keywords: [
    "book boat repair Fort Lauderdale",
    "schedule boat mechanic online",
    "mobile boat repair booking",
  ],
});

const faqs = [
  {
    question: "Is online booking a confirmed appointment?",
    answer:
      "It’s a service request. We confirm availability, access, and scope—then lock the visit. You’ll hear back during shop hours.",
  },
  {
    question: "Can I get a free estimate before booking?",
    answer:
      "Yes. Use /free-estimate or describe symptoms in the booking notes. We provide free estimates for recommended work.",
  },
];

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Book", path: "/book" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="border-b border-chart-line bg-chart-deep/50">
        <div className="wrap section-pad">
          <CaseTag>Book online</CaseTag>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink">
            Book boat repair in Fort Lauderdale &amp; South Florida
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Choose a service, tell us about the vessel, pick a preferred time, and share marina
            access. Prefer a human? Call <a href={site.phoneHref}>{site.phone}</a> or use{" "}
            <Link href="/free-estimate">free estimate</Link>.
          </p>
        </div>
      </section>

      <section className="wrap max-w-[760px] space-y-8 py-10">
        <AnswerBox
          label="Quick answer"
          question="How do I schedule boat repair?"
          answer="Book online in four steps—service, vessel, schedule/location, and contact—or call the shop for urgent triage. Include marina, slip, and symptoms for the fastest confirmation. Free estimates available on recommended work."
        />
        <Suspense fallback={<p className="text-muted">Loading booking form…</p>}>
          <BookingForm />
        </Suspense>
        <div className="panel p-5">
          <h2 className="font-display text-xl font-semibold text-ink">Before you book</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Have marina name, slip, and gate/parking notes ready</li>
            <li>Describe symptoms (won&apos;t start, overheating, dead batteries…)</li>
            <li>Note vessel type/length and preferred time window</li>
            <li>
              For a quote-only request, use{" "}
              <Link href="/free-estimate">free estimate</Link> instead
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Serving Fort Lauderdale, Pompano Beach, Miami, and nearby South Florida docks.{" "}
            <Link href="/locations">See all areas</Link> · <Link href="/faq">FAQ</Link>
          </p>
        </div>
      </section>
    </>
  );
}
