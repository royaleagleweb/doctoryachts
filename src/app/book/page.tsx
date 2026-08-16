import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book Boat Repair Online | Fort Lauderdale & South Florida",
  description:
    "Book boat repair online in Fort Lauderdale and South Florida. Tell us what's wrong, where the boat is, and when works. Free estimates. Mobile dockside when available.",
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
            Four quick steps. We confirm by phone during {site.hours}. Submitting is a request—not
            an instant lock. Prefer to talk first? Call {site.phone}.
          </>
        }
        actions={
          <>
            <Button href={site.phoneHref}>Call {site.phone}</Button>
            <Button href="/free-estimate" variant="ghost">
              Get a free estimate
            </Button>
            <ReviewLinks />
          </>
        }
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <Suspense
              fallback={<Card className="p-8 text-center text-steel">Loading booking form…</Card>}
            >
              <BookingForm />
            </Suspense>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-36 lg:self-start">
            <Card className="p-5">
              <p className="eyebrow">4 easy steps</p>
              <ol className="mt-3 space-y-3 text-sm text-steel">
                <li>
                  <strong className="text-navy">1.</strong> What&apos;s wrong
                </li>
                <li>
                  <strong className="text-navy">2.</strong> City, marina, day &amp; time
                </li>
                <li>
                  <strong className="text-navy">3.</strong> Boat type
                </li>
                <li>
                  <strong className="text-navy">4.</strong> Name, phone &amp; email
                </li>
              </ol>
              <p className="mt-4 border-t border-line pt-3 text-sm leading-relaxed text-steel">
                Submitting is a <strong className="text-navy">request</strong>, not an instant lock.
              </p>
            </Card>

            <Card className="p-5">
              <p className="font-semibold text-navy">Need help now?</p>
              <p className="mt-2 text-sm text-steel">
                Urgent no-starts and safety issues: call the shop.
              </p>
              <Button href={site.phoneHref} className="mt-4 w-full">
                {site.phone}
              </Button>
              <p className="mt-3 text-sm text-steel">{site.hours}</p>
            </Card>
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
