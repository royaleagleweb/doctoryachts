import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { yachts } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Boat Repair Services | Fort Lauderdale & Pompano Beach, FL",
  description:
    "Boat repair services in Fort Lauderdale & Pompano Beach: marine engine repair, outboard service, electrical, cooling, mobile dockside repair, and maintenance. Free estimates.",
  path: "/services",
  keywords: [
    "boat repair services Fort Lauderdale",
    "marine engine repair",
    "mobile boat repair",
    "outboard motor repair Fort Lauderdale",
    "boat electrical repairs",
  ],
});

const hubFaqs = [
  {
    question: "What boat repair services do you offer?",
    answer:
      "Marine engine repair, outboard motor repair, boat electrical repairs, cooling system repairs, boat diagnostics, maintenance, plumbing/systems, and mobile dockside boat repair across South Florida.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. After we understand symptoms and location, we provide free estimates for recommended work before you authorize major parts and labor.",
  },
  {
    question: "Do you come to the marina or do I bring the boat in?",
    answer:
      "We specialize in mobile and dockside boat repair when access allows. Many no-starts, electrical, cooling, and maintenance jobs are completed where the boat already sits.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach, Palm Beach County, and nearby South Florida docks. See our locations pages for local details.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqJsonLd(hubFaqs),
        ]}
      />

      <section className="relative min-h-[300px] overflow-hidden border-b border-line sm:min-h-[360px]">
        <Image
          src={yachts.dockPair.src}
          alt={yachts.dockPair.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/30" />
        <div className="wrap relative flex min-h-[300px] flex-col justify-end py-12 sm:min-h-[360px]">
          <CaseTag>Services</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            Boat repair services in Fort Lauderdale, Pompano Beach &amp; South Florida
          </h1>
          <p className="mt-4 max-w-2xl text-steel">
            Full marine mechanic services—engines, electrical, cooling, diagnostics, maintenance,
            plumbing systems, and mobile dockside repair. Pick a service for details, free
            estimates, and booking.
          </p>
        </div>
      </section>

      <section className="wrap section-pad space-y-10">
        <AnswerBox
          label="Quick answer"
          question="What does Doctor Yachts repair?"
          answer="Doctor Yachts repairs boats and yachts across South Florida: marine engines (inboard/outboard), electrical systems, cooling, bilge/plumbing, diagnostics, and scheduled maintenance—often mobile at Fort Lauderdale and Pompano Beach docks. Free estimates after diagnosis."
        />

        <div className="space-y-8">
          {services.map((service, index) => {
            const img = service.images[0];
            return (
              <article
                key={service.id}
                id={service.id}
                className="panel grid overflow-hidden md:grid-cols-[280px_1fr]"
              >
                <div className="shot-img relative min-h-[200px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 bg-navy/90 px-2 py-1 text-[0.65rem] text-paper">
                    DX-{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-semibold text-navy">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-navy no-underline hover:text-gold"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xs text-muted">{service.duration}</p>
                  <p className="mt-4 text-muted">{service.description}</p>
                  <p className="mt-3 text-sm text-muted">{service.quickAnswer}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 border border-line bg-white px-3 py-2 text-sm text-navy"
                      >
                        <span className="text-gold">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/book?service=${service.id}`} className="btn">
                      Book
                    </Link>
                    <Link href={`/services/${service.slug}`} className="btn btn-ghost">
                      Full service page
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-navy">
            How to choose the right boat repair service
          </h2>
          <p className="text-muted">
            Start with the symptom, not the part. Won&apos;t start or weak cranking often points to{" "}
            <Link href="/services/electrical-repairs">electrical</Link> or{" "}
            <Link href="/services/marine-engine-repair">engine diagnosis</Link>. Overheating is{" "}
            <Link href="/services/cooling-system-repairs">cooling system repairs</Link>. Constant
            bilge running is usually <Link href="/services/plumbing-repairs">plumbing/systems</Link>
            . Intermittent multi-system issues may need{" "}
            <Link href="/services/boat-diagnostics">full diagnostics</Link>. For dockside visits
            without a tow, start with{" "}
            <Link href="/services/mobile-boat-repair">mobile boat repair</Link>.
          </p>
          <p className="text-muted">
            Not sure? Call <a href={site.phoneHref}>{site.phone}</a>, request a{" "}
            <Link href="/free-estimate">free estimate</Link>, or browse our{" "}
            <Link href="/faq">FAQ</Link> and <Link href="/guides">repair guides</Link>.
          </p>
        </section>

        <section className="panel p-6">
          <h2 className="font-display text-xl font-semibold text-navy">
            Service areas for these repairs
          </h2>
          <p className="mt-2 text-sm text-muted">
            Fort Lauderdale · Pompano Beach · Dania Beach · Hollywood · Miami · Palm Beach County.
            See <Link href="/locations">all locations</Link> or call {site.phone}.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {hubFaqs.map((f) => (
              <li key={f.question} className="border border-line bg-white p-3">
                <p className="text-sm font-semibold text-navy">{f.question}</p>
                <p className="mt-1 text-xs text-muted">{f.answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <CTA />
    </>
  );
}
