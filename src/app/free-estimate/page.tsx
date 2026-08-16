import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Free Boat Repair Estimate | Fort Lauderdale & South Florida",
  description:
    "Request a free boat repair estimate in Fort Lauderdale or South Florida. Tell us what's wrong and where the boat is — mobile and dockside marine service.",
  path: "/free-estimate",
  keywords: [
    "free boat repair estimate Fort Lauderdale",
    "boat mechanic free estimate",
    "mobile boat repair quote South Florida",
  ],
});

const faqs = [
  {
    question: "Is the estimate really free?",
    answer:
      "Yes. After we understand symptoms and location, we provide free estimates for recommended work before you authorize paid repairs.",
  },
  {
    question: "How fast will you respond?",
    answer:
      "We reply during shop hours—usually the same business day. Urgent no-starts should call so we can triage priority slots.",
  },
  {
    question: "What should I write in the form?",
    answer:
      "What the boat is doing (won’t start, overheating, dead batteries…), where it is (city + marina if you know it), and how soon you need it. A short sentence is enough.",
  },
];

export default function FreeEstimatePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Free estimate", path: "/free-estimate" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free estimates"
        title="Free boat repair estimate"
        description={
          <>
            Answer a few practical questions—what&apos;s wrong, where the boat is, and how to reach
            you. We reply during {site.hours}. Prefer to talk? Call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </>
        }
        actions={
          <>
            <Button href={site.phoneHref}>Call {site.phone}</Button>
            <Button href="/book" variant="ghost">
              Book a visit
            </Button>
            <ReviewLinks />
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
          <Card className="p-5 sm:p-7">
            <h2 className="font-display text-navy">Request your free estimate</h2>
            <p className="mt-2 text-sm text-steel">
              Fields marked * are required. Everything else is optional but helps us quote faster.
            </p>
            <div className="mt-6">
              <EstimateForm />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-5">
              <h2 className="font-display text-navy">What we need</h2>
              <ol className="mt-4 space-y-3 text-sm text-steel">
                <li>
                  <strong className="text-navy">1. What&apos;s wrong</strong> — won&apos;t start,
                  overheating, batteries, pumps, etc.
                </li>
                <li>
                  <strong className="text-navy">2. Where the boat is</strong> — city + marina or dock
                </li>
                <li>
                  <strong className="text-navy">3. Phone &amp; email</strong> — so we can reply
                </li>
              </ol>
            </Card>

            <Card className="p-5">
              <h2 className="font-display text-navy">What you get</h2>
              <p className="mt-3 text-sm text-steel">
                After we understand the symptom and location, we outline likely diagnostic steps and a
                free estimate path for recommended repair work—before you authorize major parts and
                labor.
              </p>
              <p className="mt-3 text-sm text-steel">
                Common requests:{" "}
                <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
                <Link href="/services/electrical-repairs">electrical</Link>,{" "}
                <Link href="/services/mobile-boat-repair">mobile boat repair</Link>,{" "}
                <Link href="/services/boat-maintenance">maintenance</Link>.
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="font-display text-navy">Estimate FAQ</h2>
              <ul className="mt-3 space-y-3">
                {faqs.map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-navy">{f.question}</p>
                    <p className="mt-1 text-sm text-steel">{f.answer}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <p className="text-sm text-steel">
              Ready to schedule?{" "}
              <Link href="/book" className="font-semibold">
                Book online
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
