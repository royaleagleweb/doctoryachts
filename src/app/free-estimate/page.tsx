import type { Metadata } from "next";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Free Boat Repair Estimate | Fort Lauderdale & Pompano Beach",
  description:
    "Request a free boat repair estimate in Fort Lauderdale, Pompano Beach, or Miami. Mobile and dockside marine engine, electrical, and maintenance service.",
  path: "/free-estimate",
  keywords: [
    "free boat repair estimate Fort Lauderdale",
    "boat mechanic free estimate",
    "mobile boat repair quote Pompano Beach",
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

      <section className="border-b border-line bg-paper-deep/50">
        <div className="wrap section-pad">
          <CaseTag>Free estimates</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy">
            Free boat repair estimate — Fort Lauderdale, Pompano Beach & Miami
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Tell us what’s wrong and where the boat is. We’ll reply with next steps and a free
            estimate for recommended work. Prefer to talk? Call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-navy sm:grid-cols-2">
            {[
              "Mobile / dockside when access allows",
              "Marine engine & electrical focus",
              "No pressure parts games",
              "Clear findings before authorization",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">▣</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap grid gap-10 section-pad lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">What to include</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted">
              <li>Vessel type and approximate length</li>
              <li>Marina / city (Fort Lauderdale, Pompano, Miami…)</li>
              <li>Symptoms (won’t start, overheating, dead batteries…)</li>
              <li>When you need it back on the water</li>
            </ol>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              What a free estimate covers
            </h2>
            <p className="mt-3 text-muted">
              After we understand the symptom and location, we outline likely diagnostic steps and a
              free estimate path for recommended repair work—before you authorize major parts and
              labor. Urgent no-starts and safety issues should call{" "}
              <a href={site.phoneHref}>{site.phone}</a> for triage.
            </p>
            <p className="mt-3 text-muted">
              Common requests:{" "}
              <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
              <Link href="/services/electrical-repairs">electrical repairs</Link>,{" "}
              <Link href="/services/mobile-boat-repair">mobile boat repair</Link>, and{" "}
              <Link href="/services/boat-maintenance">boat maintenance</Link> in Fort Lauderdale,
              Pompano Beach, and Miami.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Estimate FAQ</h2>
            <ul className="mt-3 space-y-3">
              {faqs.map((f) => (
                <li key={f.question}>
                  <p className="font-semibold text-navy">{f.question}</p>
                  <p className="mt-1 text-sm text-muted">{f.answer}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-muted">
            Or use the full multi-step flow: <Link href="/book">Book online</Link>.
          </p>
        </div>
        <div className="panel p-6">
          <h2 className="font-display text-xl font-semibold text-navy">Request your free estimate</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
