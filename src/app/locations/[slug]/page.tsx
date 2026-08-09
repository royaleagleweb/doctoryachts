import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp } from "@/components/ChartDecor";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { guides } from "@/lib/guides";
import { images } from "@/lib/images";
import { getLocationBySlug, locations } from "@/lib/locations";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return buildMetadata({
    title: loc.seoTitle,
    description: loc.seoDescription,
    path: `/locations/${loc.slug}`,
    keywords: loc.keywords,
  });
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();
  const img = images.locations[loc.slug as keyof typeof images.locations];
  const others = locations.filter((l) => l.slug !== loc.slug);

  const quickAnswer = `Doctor Yachts provides boat repair and mobile dockside mechanic service in ${loc.name}, ${loc.state}—marine engines, electrical, cooling, maintenance, and diagnostics. Free estimates. Call ${site.phone} or book online for marina and private-dock visits when access allows.`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: loc.name, path: `/locations/${loc.slug}` },
          ]),
          serviceJsonLd({
            name: `Boat repair & marine mechanic — ${loc.name}, FL`,
            description: loc.seoDescription,
            path: `/locations/${loc.slug}`,
          }),
          faqJsonLd(loc.faqs),
        ]}
      />

      <section className="border-b border-line bg-paper-deep/40">
        <div className="wrap section-pad">
          <CaseTag>{loc.region}</CaseTag>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy">
            {loc.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{loc.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book" className="btn">
              Book in {loc.shortName}
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 section-pad lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          <AnswerBox
            label="Quick answer"
            question={`Do you offer boat repair in ${loc.name}?`}
            answer={quickAnswer}
          />

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Boat mechanic service in {loc.name}, {loc.state}
            </h2>
            {loc.content.map((p) => (
              <p key={p.slice(0, 40)} className="mt-3 text-muted">
                {p}
              </p>
            ))}
            <p className="mt-3 text-muted">{loc.marinasNote}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Popular boat repair services in {loc.shortName}
            </h2>
            <p className="mt-3 text-muted">
              These are the searches and jobs we see most in {loc.name} and nearby marinas:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}/${loc.slug}`}
                  className="panel block p-4 no-underline transition hover:border-gold/40"
                >
                  <span className="font-semibold text-navy">
                    {s.title.replace(/\s+Fort Lauderdale$/i, "")} in {loc.shortName}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{s.summary}</span>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Prefer the full service overview? See{" "}
              <Link href="/services">all boat repair services</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Why owners in {loc.shortName} call Doctor Yachts
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="flex gap-2">
                <span className="text-gold">▣</span>
                Diagnose first—clear findings before parts pressure
              </li>
              <li className="flex gap-2">
                <span className="text-gold">▣</span>
                Mobile and dockside when access allows (save the tow when possible)
              </li>
              <li className="flex gap-2">
                <span className="text-gold">▣</span>
                Free estimates on recommended work
              </li>
              <li className="flex gap-2">
                <span className="text-gold">▣</span>
                Engines, electrical, cooling, plumbing systems, and maintenance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              How boat repair works in {loc.shortName}
            </h2>
            <ol className="mt-4 space-y-3">
              {[
                `Tell us the symptom and where the boat is in ${loc.name} (marina, slip, private dock).`,
                "We confirm access, schedule, and whether the job is a strong dockside candidate.",
                "On site we diagnose engines, electrical, cooling, or systems as needed—before parts pressure.",
                "You get a free estimate path for recommended work and clear notes for the next trip or survey.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 text-muted">
                  <span className="font-mono text-sm font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-muted">
              Prefer a quick quote first? Use our{" "}
              <Link href="/free-estimate">free boat repair estimate</Link> form or call{" "}
              <a href={site.phoneHref}>{site.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Helpful guides for {loc.shortName} boaters
            </h2>
            <ul className="mt-4 space-y-2">
              {guides.slice(0, 5).map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="font-medium">
                    {g.title}
                  </Link>
                  <span className="text-muted"> — {g.quickAnswer.slice(0, 90)}…</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="shot">
            <div className="shot-img relative aspect-[16/10]">
              <Image src={img.src} alt={img.alt} fill sizes="300px" className="object-cover" />
            </div>
          </div>
          <div className="panel p-5">
            <CoordStamp label="Local corridors" />
            <ul className="mt-4 space-y-2">
              {loc.neighborhoods.map((n) => (
                <li key={n} className="flex gap-2 border-b border-line pb-2 text-sm text-navy">
                  <span className="text-gold">·</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-gold">Contact</p>
            <p className="mt-2 text-sm text-muted">{site.hours}</p>
            <a href={site.phoneHref} className="mt-2 block font-semibold text-navy">
              {site.phone}
            </a>
            <Link href="/book" className="btn mt-4 w-full">
              Book in {loc.shortName}
            </Link>
          </div>
        </aside>
      </section>

      {loc.faqs.length > 0 && (
        <FaqSection title={`${loc.shortName} boat repair FAQ`} faqs={loc.faqs} />
      )}

      <RelatedLinks
        title="Other service areas"
        links={others.map((l) => ({
          href: `/locations/${l.slug}`,
          label: `Boat repair ${l.name}`,
          note: l.region,
        }))}
      />

      <CTA />
    </>
  );
}
