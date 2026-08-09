import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { CaseTag, CoordStamp } from "@/components/ChartDecor";
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

      {/* Hero — V1 cinematic luxury + full SEO H1 */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.homeHero.src}
            alt={images.homeHero.alt}
            fill
            priority
            sizes="100vw"
            className="hero-ken object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-transparent to-navy-deep/25" />
        </div>

        <div className="wrap relative z-[2] w-full">
          <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.85fr]">
            <div>
              <p className="case-tag reveal">South Florida · White-glove marine care</p>
              <h1 className="font-display reveal reveal-delay-1 mt-5 text-[2.4rem] font-semibold leading-[1.05] tracking-tight text-pearl sm:text-5xl lg:text-[3.5rem]">
                Boat repair &amp; maintenance in{" "}
                <em className="not-italic text-gold">Fort Lauderdale</em>
                <span className="text-gold-light"> &amp; </span>
                Pompano Beach, FL
              </h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-md text-base leading-relaxed text-steel sm:text-lg">
                Doctor Yachts is your independent boat mechanic for inboard and outboard engine
                repair, electrical systems, cooling, and mobile dockside service. Free estimates.
                Diagnose first—fix what matters.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn">
                  Reserve a visit
                </Link>
                <Link href="/free-estimate" className="btn btn-ghost">
                  Free estimate
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  Explore services
                </Link>
              </div>
            </div>

            <aside className="status-card reveal reveal-delay-4">
              <p className="case-tag">Concierge desk</p>
              <p className="font-display mt-3 text-2xl font-semibold text-pearl">
                Accepting private bookings
              </p>
              <dl className="mt-5 space-y-3">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">Hours</dt>
                  <dd className="mt-0.5 text-sm text-pearl">{site.hours}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    Coverage
                  </dt>
                  <dd className="mt-0.5 text-sm text-pearl">
                    Fort Lauderdale · Pompano · Miami
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">Line</dt>
                  <dd className="mt-0.5 text-sm">
                    <a href={site.phoneHref} className="font-semibold text-gold no-underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    Promise
                  </dt>
                  <dd className="mt-0.5 text-sm text-pearl">Diagnose first · Free estimates</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>
            <em>Marine engine repair</em> · Inboard &amp; outboard · Mobile dockside · Electrical
            systems · Cooling · Maintenance · Fort Lauderdale · Pompano Beach · Miami ·
          </span>
          <span>
            <em>Marine engine repair</em> · Inboard &amp; outboard · Mobile dockside · Electrical
            systems · Cooling · Maintenance · Fort Lauderdale · Pompano Beach · Miami ·
          </span>
        </div>
      </div>

      {/* Principle strip */}
      <section className="border-b border-line section-dark">
        <div className="wrap grid gap-6 py-10 md:grid-cols-12 md:items-center">
          <p className="font-display reveal text-xl leading-snug text-pearl md:col-span-8 md:text-2xl">
            “Most boats don’t need a miracle—they need someone who actually{" "}
            <em className="not-italic text-gold">finds the fault</em> before swapping parts.”
          </p>
          <div className="md:col-span-4 md:text-right">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-steel">
              How we work · Doctor Yachts
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed yacht branding banner */}
      <section className="relative min-h-[280px] overflow-hidden border-b border-line sm:min-h-[360px]">
        <Image
          src={yachts.intracoastal.src}
          alt={yachts.intracoastal.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/45 to-transparent" />
        <div className="wrap relative flex min-h-[280px] items-end py-10 sm:min-h-[360px]">
          <div className="reveal">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
              Fort Lauderdale · Intracoastal
            </p>
            <p className="font-display mt-2 max-w-lg text-2xl font-semibold text-pearl sm:text-3xl">
              Dockside mechanic service where the boats already live
            </p>
          </div>
        </div>
      </section>

      {/* SEO + intro — all original content preserved */}
      <section className="border-b border-line section-soft">
        <div className="wrap section-pad space-y-10">
          <div className="reveal">
            <AnswerBox
              label="Quick answer"
              question="Who is Doctor Yachts?"
              answer="Doctor Yachts is an independent boat and yacht mechanic serving Fort Lauderdale, Pompano Beach, Miami, and South Florida with mobile and dockside marine engine repair, electrical work, cooling service, diagnostics, and maintenance. Free estimates. Diagnose first—fix what matters."
            />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="font-display text-2xl font-semibold text-pearl sm:text-3xl">
                Boat mechanic service for Fort Lauderdale &amp; Pompano Beach
              </h2>
              <p className="mt-4 text-steel">
                Looking for{" "}
                <Link href="/locations/fort-lauderdale">boat repair in Fort Lauderdale</Link> or a{" "}
                <Link href="/services/mobile-boat-repair">mobile boat mechanic</Link> who comes to
                the marina? Doctor Yachts is built for owners who want clear diagnosis—not a parts
                catalog with a dock. We handle{" "}
                <Link href="/services/marine-engine-repair">marine engine repair</Link>,{" "}
                <Link href="/services/outboard-motor-repair">outboard motor repair</Link>,{" "}
                <Link href="/services/electrical-repairs">boat electrical repairs</Link>,{" "}
                <Link href="/services/cooling-system-repairs">cooling system repairs</Link>, and{" "}
                <Link href="/services/boat-maintenance">boat maintenance</Link> across Broward and
                nearby South Florida waters.
              </p>
              <p className="mt-3 text-steel">
                Free estimates on recommended work. Mobile and dockside when access allows—so many
                no-starts, charging faults, and overheating jobs never need a tow first. Call{" "}
                <a href={site.phoneHref}>{site.phone}</a> or <Link href="/book">book online</Link>.
              </p>
              <h3 className="font-display mt-8 text-xl font-semibold text-pearl">
                What we fix most often
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-steel">
                <li className="flex gap-2">
                  <span className="text-gold">▣</span>
                  Boat won&apos;t start / weak cranking (battery, charging, safety circuits)
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">▣</span>
                  Overheating (impellers, strainers, heat exchangers)
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">▣</span>
                  Dead batteries and shore power trips
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">▣</span>
                  Bilge pumps, plumbing, and safety systems
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">▣</span>
                  Pre-season and interval boat maintenance
                </li>
              </ul>
              <p className="mt-4 text-sm text-steel">
                Helpful guides:{" "}
                {guides.slice(0, 3).map((g, i) => (
                  <span key={g.slug}>
                    {i > 0 && " · "}
                    <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                  </span>
                ))}
                . Full list on our <Link href="/guides">guides</Link> and{" "}
                <Link href="/faq">FAQ</Link> pages.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="shot relative aspect-[3/4] sm:row-span-2 sm:aspect-auto sm:min-h-full">
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

      {/* How we work — process */}
      <section className="section-pad section-dark">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <CaseTag>How we work</CaseTag>
              <h2 className="font-display mt-4 max-w-md text-3xl font-semibold tracking-tight text-pearl sm:text-4xl">
                From your call to back on the water
              </h2>
            </div>
            <p className="max-w-xs text-sm text-steel md:text-right">
              No mystery process. Four clear steps—diagnosis before parts.
            </p>
          </div>

          <ol className="mt-12 grid overflow-hidden rounded-[1.15rem] border border-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Symptoms",
                d: "You tell us what the boat is doing—or not doing. No jargon required.",
              },
              {
                n: "02",
                t: "Plan the visit",
                d: "Location, access, vessel type. We arrive prepared—not guessing on the dock.",
              },
              {
                n: "03",
                t: "Diagnosis",
                d: "We find the fault before we sell the fix. Options in plain language.",
              },
              {
                n: "04",
                t: "Repair & notes",
                d: "Fix what matters, free estimate path, and notes you can keep for next time.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="reveal border-line border-b bg-white/[0.02] p-6 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <span className="font-display text-3xl font-semibold text-gold">{step.n}</span>
                <h3 className="font-display mt-4 text-xl font-semibold text-pearl">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Yacht strip */}
      <section className="border-y border-line bg-navy">
        <div className="wrap py-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                On the water
              </p>
              <p className="font-display mt-1 text-xl text-pearl sm:text-2xl">
                Yachts &amp; boats we keep running
              </p>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-semibold uppercase tracking-wider text-steel no-underline hover:text-gold"
            >
              Full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {yachtStrip.slice(0, 4).map((img) => (
              <div key={img.src} className="shot relative aspect-[4/3] border-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3 pt-10">
                  <p className="text-[0.6rem] uppercase tracking-wider text-steel">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — SEO intact */}
      <section className="border-y border-line section-soft section-pad">
        <div className="wrap">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <CaseTag>Signature services</CaseTag>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-pearl sm:text-4xl">
                What we repair on board
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.12em] text-gold no-underline hover:text-gold-light"
            >
              All services →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {services.length > 6 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.slice(6).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="panel group flex items-center justify-between px-4 py-4 no-underline transition hover:border-gold/40"
                >
                  <span>
                    <span className="text-[0.65rem] uppercase tracking-wider text-gold">
                      Also available
                    </span>
                    <span className="mt-1 block font-semibold text-pearl group-hover:text-gold-light">
                      {s.title.replace(" Fort Lauderdale", "")}
                    </span>
                  </span>
                  <span className="text-gold">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Doctor Yachts */}
      <section className="bg-navy text-pearl">
        <div className="wrap grid lg:grid-cols-2">
          <div className="shot relative min-h-[300px] border-0 shadow-none lg:min-h-[460px]">
            <Image
              src={yachts.cockpit.src}
              alt={yachts.cockpit.alt}
              fill
              sizes="50vw"
              className="object-cover opacity-95"
            />
          </div>
          <div className="flex flex-col justify-center px-0 py-12 lg:px-12 lg:py-16">
            <CaseTag>Why “Doctor”</CaseTag>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Not a sales yard.
              <br />
              <span className="text-gold">A shop that listens.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel">
              The name is the method. We treat vessels like systems—power, propulsion, pumps,
              wiring—not a parts catalog with a dock. That means fewer wild guesses and fewer
              surprise invoices.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Dockside first when access allows",
                "Findings before parts",
                "Notes you can keep for the next yard or survey",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-white/10 pb-3 text-pearl/90"
                >
                  <span className="text-gold">▣</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn mt-8 w-fit">
              About Doctor Yachts
            </Link>
          </div>
        </div>
      </section>

      {/* Cruising banner */}
      <section className="relative min-h-[240px] overflow-hidden border-b border-line sm:min-h-[300px]">
        <Image
          src={yachts.cruising.src}
          alt={yachts.cruising.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="wrap relative flex min-h-[240px] flex-col items-start justify-center py-12 sm:min-h-[300px]">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">The goal</p>
          <p className="font-display mt-2 max-w-xl text-2xl font-semibold text-pearl sm:text-3xl">
            Get you back on the water—reliably
          </p>
          <Link href="/book" className="btn mt-6">
            Book repair
          </Link>
        </div>
      </section>

      {/* Brand gallery mosaic */}
      <section className="border-b border-line section-soft">
        <div className="wrap section-pad">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <CaseTag>Brand gallery</CaseTag>
              <h2 className="font-display mt-3 text-2xl font-semibold text-pearl sm:text-3xl">
                South Florida yachts &amp; waters
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-semibold uppercase tracking-wider text-gold no-underline hover:text-gold-light"
            >
              View all photos →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {yachtStrip.slice(4).map((img) => (
              <figure key={img.src} className="shot m-0">
                <div className="shot-img relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-line px-2 py-2 text-[0.6rem] uppercase tracking-wider text-muted">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-pad section-dark">
        <div className="wrap">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <CaseTag>Service areas</CaseTag>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-pearl">
                South Florida waters we work
              </h2>
            </div>
            <CoordStamp label="Broward · Miami-Dade · Palm Beach" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const img = images.locations[loc.slug as keyof typeof images.locations];
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group block no-underline"
                >
                  <div className="shot transition duration-500 group-hover:-translate-y-1">
                    <div className="shot-img relative aspect-[5/4]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex items-center justify-between border-t border-line px-3 py-3">
                      <div>
                        <p className="font-display text-lg font-semibold text-pearl group-hover:text-gold-light">
                          {loc.name}
                        </p>
                        <p className="text-[0.62rem] uppercase tracking-wider text-muted">
                          {loc.region}
                        </p>
                      </div>
                      <span className="text-xs text-gold">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust quote */}
      <section className="border-y border-line section-soft">
        <div className="wrap max-w-3xl py-16 text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
            Private client note
          </p>
          <blockquote className="font-display mt-4 text-2xl font-medium leading-snug text-pearl sm:text-3xl">
            “Clear diagnosis. Honest options. Dockside when it makes sense—not a mystery invoice.”
          </blockquote>
          <p className="mt-5 text-sm text-steel">
            That&apos;s the standard we hold ourselves to.{" "}
            <Link href="/reviews">See reviews</Link> ·{" "}
            <Link href="/free-estimate">Request a free estimate</Link>
          </p>
        </div>
      </section>

      <FaqSection title="Things people ask before booking" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
