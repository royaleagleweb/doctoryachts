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
    "Book boat repair online in Fort Lauderdale, Pompano Beach & Miami. Tell us what's wrong, where the boat is, and when works. Free estimates. Mobile dockside when available.",
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
      "Yes. Use the free estimate form if you only want pricing guidance first. Booking is better when you already know you want a visit.",
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

      <section className="border-b border-line section-soft">
        <div className="wrap section-pad pb-10">
          <CaseTag>Book online</CaseTag>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-pearl">
            Book boat repair
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            Four quick steps in plain English. Tap what&apos;s wrong, where the boat is, and how to
            reach you — we confirm by phone during shop hours ({site.hours}).
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={site.phoneHref} className="btn">
              Call {site.phone}
            </a>
            <Link href="/free-estimate" className="btn btn-ghost">
              Just want a free estimate?
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          <Suspense
            fallback={
              <div className="panel p-8 text-center text-steel">Loading booking form…</div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="panel p-5">
            <p className="text-sm font-semibold  text-gold">
              4 easy steps
            </p>
            <ol className="mt-3 space-y-3 text-sm text-steel">
              <li className="flex gap-2">
                <span className="font-semibold text-gold">1</span>
                What&apos;s wrong (tap a problem)
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">2</span>
                City, marina, preferred day &amp; time
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">3</span>
                Boat type (and size if you know it)
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-gold">4</span>
                Name, phone &amp; email
              </li>
            </ol>
            <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">
              Submitting is a <strong className="text-pearl">request</strong>, not an instant lock.
              We confirm before arriving.
            </p>
          </div>

          <div className="panel p-5">
            <p className="text-sm font-semibold  text-muted">
              Tips for a faster visit
            </p>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>· Marina name + slip or gate notes</li>
              <li>· What the boat does (or doesn&apos;t do)</li>
              <li>· When you need it back on the water</li>
            </ul>
          </div>

          <div className="panel p-5">
            <p className="text-sm font-semibold  text-muted">
              Need help now?
            </p>
            <p className="mt-2 text-sm text-steel">
              Urgent no-starts and safety issues: call the shop.
            </p>
            <a href={site.phoneHref} className="btn mt-4 w-full">
              {site.phone}
            </a>
            <p className="mt-3 text-xs text-muted">{site.hours}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
