import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Boat Mechanic | Fort Lauderdale & South Florida",
  description:
    "Contact Doctor Yachts for boat repair in Fort Lauderdale and South Florida. Call for emergencies or send a message for free estimates and scheduling.",
  path: "/contact",
  keywords: [
    "contact boat mechanic Fort Lauderdale",
    "boat repair phone South Florida",
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

      <PageHero
        eyebrow="Contact"
        title="Contact a boat mechanic in Fort Lauderdale & South Florida"
        description={
          <>
            Urgent safety or no-start? Call now. For free estimates and scheduling, use the form or{" "}
            <Link href="/book">book online</Link>.
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <AnswerBox
              label="Quick answer"
              question="How do I reach Doctor Yachts?"
              answer={`Call ${site.phone} during ${site.hours} for urgent boat repair triage, or send a message for free estimates and scheduling. We serve Fort Lauderdale, Miami, and nearby South Florida docks.`}
            />
            <Card className="card-accent p-6 sm:p-8">
              <p className="eyebrow">Direct lines</p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-steel">Phone</dt>
                  <dd className="mt-1 font-display text-2xl">
                    <a href={site.phoneHref} className="text-navy no-underline hover:text-gold-deep">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-steel">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-navy no-underline hover:text-gold-deep"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-steel">Hours</dt>
                  <dd className="mt-1 text-navy">{site.hours}</dd>
                </div>
                <div>
                  <dt className="text-sm text-steel">Service area</dt>
                  <dd className="mt-1 text-navy">{site.serviceArea}</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-steel">
                Also: <Link href="/free-estimate">free estimate</Link> · <Link href="/faq">FAQ</Link>
              </p>
            </Card>
          </div>
          <Card className="p-6 sm:p-8">
            <h2 className="font-display text-navy">Send a message</h2>
            <p className="mt-2 text-sm text-steel">
              Include city/marina and symptoms for a faster free estimate.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Card>
        </div>
      </Section>

      <CTA />
    </>
  );
}
