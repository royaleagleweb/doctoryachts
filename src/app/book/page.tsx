import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
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

      <PageHero
        eyebrow="Book online"
        title="Book boat repair"
        description={
          <>
            Four quick steps. We confirm by phone or email during shop hours ({site.hours}).
          </>
        }
        actions={
          <>
            <a href={site.phoneHref} className="btn">
              Call {site.phone}
            </a>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate first?
            </Link>
          </>
        }
      />

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

        <aside className="space-y-4 lg:sticky lg:top-36 lg:self-start">
          <div className="panel p-5">
            <p className="text-sm font-bold text-gold">4 easy steps</p>
            <ol className="mt-3 space-y-3 text-sm text-steel">
              <li>
                <strong className="text-pearl">1.</strong> What&apos;s wrong
              </li>
              <li>
                <strong className="text-pearl">2.</strong> City, marina, day &amp; time
              </li>
              <li>
                <strong className="text-pearl">3.</strong> Boat type
              </li>
              <li>
                <strong className="text-pearl">4.</strong> Name, phone &amp; email
              </li>
            </ol>
            <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">
              Submitting is a <strong className="text-pearl">request</strong>, not an instant lock.
            </p>
          </div>

          <div className="panel p-5">
            <p className="text-sm font-bold text-pearl">Need help now?</p>
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
