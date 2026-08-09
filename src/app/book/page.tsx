import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
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
      "It’s a service request. We confirm availability, marina access, and scope—then lock the visit. You’ll hear back during shop hours by phone or email.",
  },
  {
    question: "Can I get a free estimate before booking?",
    answer:
      "Yes. Use the free estimate form or describe symptoms in the booking notes. We provide free estimates for recommended work after we understand the job.",
  },
  {
    question: "What if my boat won’t start and I need help today?",
    answer: `Call ${site.phone} for the fastest triage. Mark “urgent” on the form too—same-day depends on schedule and access.`,
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
            Book boat repair
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Four short steps. We’ll confirm by phone or email during shop hours (
            {site.hours}).
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={site.phoneHref} className="btn">
              Call {site.phone}
            </a>
            <Link href="/free-estimate" className="btn btn-ghost">
              Prefer a free estimate first?
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          <Suspense
            fallback={
              <div className="panel p-8 text-center text-muted">Loading booking form…</div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="panel p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-coral">
              How it works
            </p>
            <ol className="mt-3 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="font-mono font-semibold text-coral">1</span>
                Choose the service that fits
              </li>
              <li className="flex gap-2">
                <span className="font-mono font-semibold text-coral">2</span>
                Tell us about the boat
              </li>
              <li className="flex gap-2">
                <span className="font-mono font-semibold text-coral">3</span>
                Preferred date, time & marina
              </li>
              <li className="flex gap-2">
                <span className="font-mono font-semibold text-coral">4</span>
                Your contact + short description
              </li>
            </ol>
            <p className="mt-4 border-t border-chart-line pt-3 text-xs leading-relaxed text-muted">
              Submitting is a <strong className="text-ink">request</strong>, not an instant
              lock. We confirm before arriving.
            </p>
          </div>

          <div className="panel p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
              Have ready
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-muted">
              <li>Marina name, slip, gate/parking notes</li>
              <li>Symptoms (won&apos;t start, overheating…)</li>
              <li>Vessel type & approximate length</li>
              <li>Preferred day/time window</li>
            </ul>
          </div>

          <div className="panel p-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
              Need help now?
            </p>
            <p className="mt-2 text-sm text-muted">
              Urgent no-starts and safety issues: call the shop.
            </p>
            <a href={site.phoneHref} className="btn mt-4 w-full">
              {site.phone}
            </a>
            <p className="mt-3 text-xs text-muted">{site.hours}</p>
            <p className="mt-3 text-xs text-muted">
              <Link href="/locations">Service areas</Link>
              {" · "}
              <Link href="/faq">FAQ</Link>
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
