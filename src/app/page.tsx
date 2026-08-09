import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { guides } from "@/lib/guides";
import { images, yachtStrip, yachts } from "@/lib/images";
import { locations } from "@/lib/locations";
import { faqJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import { homeFaqs, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...homeFaqs])} />

      {/* Open full-bleed hero */}
      <section className="hero-edge">
        <div className="hero-edge__media">
          <Image
            src={images.homeHero.src}
            alt={images.homeHero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
        <div className="hero-edge__copy">
          <div className="hero-edge__copy-inner">
            <p className="hero-edge__kicker">Fort Lauderdale · Pompano · Miami</p>
            <h1 className="font-display text-pearl">
              Marine repair.
              <br />
              <span className="text-gold">No guessing.</span>
            </h1>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-steel">
              Independent boat &amp; yacht mechanic. Engines, electrical, cooling, dockside
              service. Free estimates.
            </p>
            <div className="hero-edge__actions">
              <Link href="/book" className="btn">
                Book a visit
              </Link>
              <Link href="/free-estimate" className="btn btn-ghost">
                Free estimate
              </Link>
            </div>
            <div className="hero-edge__meta">
              <span>
                <b>Call</b>{" "}
                <a href={site.phoneHref} className="text-pearl no-underline hover:text-gold">
                  {site.phone}
                </a>
              </span>
              <span>
                <b>Hours</b> {site.hours}
              </span>
              <span>
                <b>Mobile</b> when access allows
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Soft problem chips */}
      <div className="problem-rail-wrap">
        <nav className="problem-rail" aria-label="Common problems">
          <Link href="/book?service=engine-repair">
            <strong>Won&apos;t start</strong>
            <span>No crank · click · dead quiet</span>
          </Link>
          <Link href="/book?service=cooling">
            <strong>Overheating</strong>
            <span>Hot · weak telltale · shut-down</span>
          </Link>
          <Link href="/book?service=electrical">
            <strong>Battery / power</strong>
            <span>Charging · shore power · trips</span>
          </Link>
          <Link href="/book?service=maintenance">
            <strong>Service</strong>
            <span>Oil · impeller · check-up</span>
          </Link>
        </nav>
      </div>

      {/* SEO intro */}
      <section className="section-soft">
        <div className="wrap section-pad">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-8">
              <AnswerBox
                label="Quick answer"
                question="Who is Doctor Yachts?"
                answer="Doctor Yachts is an independent boat and yacht mechanic serving Fort Lauderdale, Pompano Beach, Miami, and South Florida with mobile and dockside marine engine repair, electrical work, cooling service, diagnostics, and maintenance. Free estimates. Diagnose first—fix what matters."
              />
              <div>
                <h2 className="font-display text-3xl font-semibold text-pearl">
                  Boat mechanic service for Fort Lauderdale &amp; Pompano Beach
                </h2>
                <p className="mt-4 text-steel">
                  Looking for{" "}
                  <Link href="/locations/fort-lauderdale">boat repair in Fort Lauderdale</Link> or a{" "}
                  <Link href="/services/mobile-boat-repair">mobile boat mechanic</Link>? We handle{" "}
                  <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
                  <Link href="/services/outboard-motor-repair">outboard motor repair</Link>,{" "}
                  <Link href="/services/electrical-repairs">boat electrical repairs</Link>,{" "}
                  <Link href="/services/cooling-system-repairs">cooling system repairs</Link>, and{" "}
                  <Link href="/services/boat-maintenance">boat maintenance</Link> across Broward and
                  nearby South Florida waters.
                </p>
                <p className="mt-3 text-steel">
                  Free estimates on recommended work. Many no-starts, charging faults, and
                  overheating jobs never need a tow first. Call{" "}
                  <a href={site.phoneHref}>{site.phone}</a> or <Link href="/book">book online</Link>.
                </p>
                <h3 className="font-display mt-8 text-xl font-semibold text-pearl">
                  What we fix most often
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-steel">
                  <li>Boat won&apos;t start / weak cranking</li>
                  <li>Overheating (impellers, strainers, heat exchangers)</li>
                  <li>Dead batteries and shore power trips</li>
                  <li>Bilge pumps, plumbing, and safety systems</li>
                  <li>Pre-season and interval maintenance</li>
                </ul>
                <p className="mt-4 text-sm text-steel">
                  Guides:{" "}
                  {guides.slice(0, 3).map((g, i) => (
                    <span key={g.slug}>
                      {i > 0 && " · "}
                      <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                    </span>
                  ))}
                  . See all <Link href="/guides">guides</Link> and <Link href="/faq">FAQ</Link>.
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:sticky lg:top-36">
              <div className="shot relative aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[26rem]">
                <Image
                  src={yachts.bow.src}
                  alt={yachts.bow.alt}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
              <div className="shot relative aspect-[4/3]">
                <Image
                  src={yachts.dockPair.src}
                  alt={yachts.dockPair.alt}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="shot relative aspect-[4/3]">
                <Image
                  src={yachts.swimPlatform.src}
                  alt={yachts.swimPlatform.alt}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="wrap section-pad">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="font-display text-3xl font-semibold text-pearl sm:text-4xl">
                What we repair on board
              </h2>
              <p className="mt-2 max-w-xl text-sm text-steel">
                Engines, electrical, cooling, diagnostics, maintenance, plumbing, and mobile
                dockside repair.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-gold no-underline hover:text-gold-light"
            >
              View all services →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          {services.length > 6 && (
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {services.slice(6).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="text-pearl no-underline hover:text-gold"
                >
                  {s.title.replace(" Fort Lauderdale", "")} →
                </Link>
              ))}
            </div>
          )}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/book" className="btn">
              Book repair
            </Link>
            <Link href="/free-estimate" className="btn btn-ghost">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="wrap section-pad">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="font-display text-3xl font-semibold text-pearl">
              From your call to back on the water
            </h2>
          </div>
          <ol className="process-open mt-12">
            {[
              {
                n: "01",
                t: "Tell us the symptom",
                d: "What the boat is doing—or not doing. No jargon required.",
              },
              {
                n: "02",
                t: "Plan the visit",
                d: "Marina, slip, access, and a time that works for you.",
              },
              {
                n: "03",
                t: "Diagnose on site",
                d: "We find the fault before recommending parts or labor.",
              },
              {
                n: "04",
                t: "Repair with a plan",
                d: "Free estimate path, clear options, notes you can keep.",
              },
            ].map((step) => (
              <li key={step.n}>
                <span className="n">{step.n}</span>
                <h3 className="font-display text-xl font-semibold text-pearl">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section>
        <div className="wrap grid items-center gap-10 section-pad lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] lg:min-h-[420px]">
            <Image
              src={yachts.cockpit.src}
              alt={yachts.cockpit.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-2">
            <p className="eyebrow">Why Doctor Yachts</p>
            <h2 className="font-display text-3xl font-semibold text-pearl sm:text-4xl">
              A shop that listens—not a sales yard
            </h2>
            <p className="mt-4 text-steel">
              We treat vessels like systems: power, propulsion, pumps, wiring. That means fewer
              wild guesses and fewer surprise invoices.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-pearl/90">
              <li>Dockside first when access allows</li>
              <li>Findings before parts</li>
              <li>Notes for the next trip, yard, or survey</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn">
                About the shop
              </Link>
              <Link href="/book" className="btn btn-ghost">
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section>
        <div className="wrap section-pad">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Service areas</p>
              <h2 className="font-display text-3xl font-semibold text-pearl">
                South Florida waters we work
              </h2>
            </div>
            <Link
              href="/locations"
              className="text-sm font-semibold text-gold no-underline hover:text-gold-light"
            >
              All areas →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const img = images.locations[loc.slug as keyof typeof images.locations];
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group no-underline"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <div>
                      <p className="font-display text-lg font-semibold text-pearl group-hover:text-gold-light">
                        {loc.name}
                      </p>
                      <p className="text-sm text-muted">{loc.region}</p>
                    </div>
                    <span className="text-gold">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="wrap section-pad">
          <div className="mb-8 flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-pearl sm:text-3xl">
              On the water
            </h2>
            <Link
              href="/gallery"
              className="text-sm font-semibold text-gold no-underline hover:text-gold-light"
            >
              Gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {yachtStrip.slice(0, 4).map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section>
        <div className="wrap max-w-3xl py-16 text-center sm:py-20">
          <blockquote className="font-display text-2xl font-medium leading-snug text-pearl sm:text-3xl">
            “Clear diagnosis. Honest options. Dockside when it makes sense—not a mystery invoice.”
          </blockquote>
          <p className="mt-6 text-sm text-steel">
            <Link href="/reviews">Reviews</Link>
            <span className="mx-2 text-muted">·</span>
            <Link href="/free-estimate">Free estimate</Link>
            <span className="mx-2 text-muted">·</span>
            <Link href="/book">Book repair</Link>
          </p>
        </div>
      </section>

      <FaqSection title="Common questions" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
