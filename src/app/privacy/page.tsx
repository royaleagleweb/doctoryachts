import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy | Doctor Yachts",
  description:
    `How Doctor Yachts handles contact, estimate, and booking information. Fort Lauderdale, FL. Questions: ${site.email}.`,
  path: "/privacy",
  keywords: ["Doctor Yachts privacy", "boat mechanic privacy Fort Lauderdale"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />

      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        description="How Doctor Yachts uses the information you send when you call, email, or use a form on this site."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          <p className="text-steel">
            Doctor Yachts is an independent mobile and dockside marine mechanic serving South Florida
            from Fort Lauderdale, FL. This page describes the information we collect to respond to
            service requests. It is not legal advice.
          </p>

          <div>
            <h2 className="font-display text-navy">What we collect</h2>
            <p className="mt-3 text-steel">
              Contact, free-estimate, and booking forms may include your name, email, phone, vessel
              details, marina or city, symptoms, preferred schedule, and message. Phone calls and
              emails to <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={site.phoneHref}>{site.phone}</a> include whatever you choose to share.
            </p>
          </div>

          <div>
            <h2 className="font-display text-navy">How we use it</h2>
            <p className="mt-3 text-steel">
              We use that information to reply, schedule visits, give free estimates, and perform
              requested marine repair work. Form submissions are delivered to the shop inbox so we can
              follow up. We do not sell your contact details.
            </p>
          </div>

          <div>
            <h2 className="font-display text-navy">Questions</h2>
            <p className="mt-3 text-steel">
              Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phoneHref}>{site.phone}</a> if you want a copy of what you sent, or want
              us to delete a request we no longer need for the job. See also{" "}
              <Link href="/terms">Terms</Link> and <Link href="/contact">Contact</Link>.
            </p>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
