import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag } from "@/components/ChartDecor";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Boat Mechanic | Fort Lauderdale & Pompano Beach",
  description:
    "Contact Doctor Yachts for boat repair in Fort Lauderdale, Pompano Beach & Miami. Call for emergencies or send a message for free estimates and scheduling.",
  path: "/contact",
  keywords: [
    "contact boat mechanic Fort Lauderdale",
    "boat repair phone Pompano Beach",
    "schedule boat repair South Florida",
  ],
});

const faqs = [
  {
    question: "Should I call or use the form?",
    answer:
      "Call for urgent no-starts, overheating, flooding risk, or same-day needs. Use the form for non-urgent questions, free estimate requests, and scheduling details.",
  },
  {
    question: "What information should I include?",
    answer:
      "Vessel type/length, marina or city, symptoms, and when you need the boat back. Photos help for electrical and leak issues.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="border-b border-line bg-paper-deep/50">
        <div className="wrap section-pad">
          <CaseTag>Contact</CaseTag>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-navy">
            Contact a boat mechanic in Fort Lauderdale &amp; South Florida
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Urgent safety or no-start? Call now. For free estimates and non-urgent scheduling, use
            the form or <Link href="/book">book online</Link>.
          </p>
        </div>
      </section>

      <section className="wrap grid gap-10 section-pad lg:grid-cols-2">
        <div className="space-y-6">
          <AnswerBox
            label="Quick answer"
            question="How do I reach Doctor Yachts?"
            answer={`Call ${site.phone} during ${site.hours} for urgent boat repair triage, or send a message for free estimates and scheduling. We serve Fort Lauderdale, Pompano Beach, Miami, and nearby South Florida docks.`}
          />
          <div className="panel-navy p-6 sm:p-8">
            <p className="text-xs  text-steel">Direct lines</p>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-[0.65rem]  text-steel">
                  Phone
                </dt>
                <dd className="mt-1 font-display text-2xl">
                  <a href={site.phoneHref} className="text-paper no-underline hover:text-gold">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem]  text-steel">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-paper no-underline hover:text-gold"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem]  text-steel">
                  Hours
                </dt>
                <dd className="mt-1 text-paper/90">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem]  text-steel">
                  Service area
                </dt>
                <dd className="mt-1 text-paper/90">{site.serviceArea}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-steel">
              Also: <Link href="/free-estimate" className="text-gold">free estimate page</Link> ·{" "}
              <Link href="/faq" className="text-gold">
                FAQ
              </Link>
            </p>
          </div>
        </div>
        <div className="panel p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-navy">Send a message</h2>
          <p className="mt-2 text-sm text-muted">
            Include city/marina and symptoms for a faster free estimate.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
