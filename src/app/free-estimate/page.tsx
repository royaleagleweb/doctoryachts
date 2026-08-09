import type { Metadata } from "next";
import Link from "next/link";
import { CaseTag } from "@/components/ChartDecor";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Free Boat Repair Estimate | Fort Lauderdale & Pompano Beach",
  description:
    "Request a free boat repair estimate in Fort Lauderdale, Pompano Beach, or Miami. Tell us what's wrong and where the boat is — mobile and dockside marine service.",
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

      <section className="border-b border-line section-soft">
        <div className="wrap section-pad pb-10">
          <CaseTag>Free estimates</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-pearl">
            Free boat repair estimate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">
            Answer a few practical questions — what&apos;s wrong, where the boat is, and how to
            reach you. No long essays. Prefer to talk? Call{" "}
            <a href={site.phoneHref} className="text-gold">
              {site.phone}
            </a>
            .
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-pearl sm:grid-cols-2">
            {[
              "Takes about 1–2 minutes",
              "Tap what's wrong — no jargon required",
              "Mobile / dockside when access allows",
              "Clear next steps before you authorize work",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gold">▣</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap grid gap-10 section-pad lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
        <div className="panel p-5 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-pearl sm:text-2xl">
            Request your free estimate
          </h2>
          <p className="mt-2 text-sm text-steel">
            Fields marked * are required. Everything else is optional but helps us quote faster.
          </p>
          <div className="mt-6">
            <EstimateForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-5">
            <h2 className="font-display text-xl font-semibold text-pearl">
              What we need from you
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-steel">
              <li className="flex gap-3">
                <span className="font-semibold text-gold">1</span>
                <span>
                  <strong className="text-pearl">What&apos;s wrong</strong> — won&apos;t start,
                  overheating, batteries, pumps, etc.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gold">2</span>
                <span>
                  <strong className="text-pearl">Where the boat is</strong> — city + marina or dock
                  if you know it
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gold">3</span>
                <span>
                  <strong className="text-pearl">Phone &amp; email</strong> — so we can reply with
                  next steps
                </span>
              </li>
            </ol>
          </div>

          <div className="panel p-5">
            <h2 className="font-display text-xl font-semibold text-pearl">
              What a free estimate covers
            </h2>
            <p className="mt-3 text-sm text-steel">
              After we understand the symptom and location, we outline likely diagnostic steps and a
              free estimate path for recommended repair work—before you authorize major parts and
              labor.
            </p>
            <p className="mt-3 text-sm text-steel">
              Common requests:{" "}
              <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
              <Link href="/services/electrical-repairs">electrical repairs</Link>,{" "}
              <Link href="/services/mobile-boat-repair">mobile boat repair</Link>, and{" "}
              <Link href="/services/boat-maintenance">boat maintenance</Link>.
            </p>
          </div>

          <div className="panel p-5">
            <h2 className="font-display text-lg font-semibold text-pearl">Estimate FAQ</h2>
            <ul className="mt-3 space-y-3">
              {faqs.map((f) => (
                <li key={f.question}>
                  <p className="font-semibold text-pearl">{f.question}</p>
                  <p className="mt-1 text-sm text-steel">{f.answer}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-steel">
            Already know you want a visit?{" "}
            <Link href="/book" className="font-semibold text-gold">
              Book online
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
