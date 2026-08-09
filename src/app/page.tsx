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

      {/* Split hero — luxury service layout */}
      <section className="border-b border-line">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-navy px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <p className="eyebrow">South Florida boat & yacht mechanic</p>
              <h1 className="font-display text-[2.35rem] font-semibold leading-[1.1] text-pearl sm:text-5xl">
                Boat repair &amp; maintenance in{" "}
                <span className="text-gold">Fort Lauderdale</span> &amp; Pompano Beach
              </h1>
              <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
                Independent marine mechanic for engines, electrical, cooling, and dockside service.
                Free estimates. We diagnose first—then fix what matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn">
                  Book repair
                </Link>
                <Link href="/free-estimate" className="btn btn-ghost">
                  Free estimate
                </Link>
              </div>
              <p className="mt-6 text-sm text-steel">
                Call{" "}
                <a href={site.phoneHref} className="font-semibold text-gold">
                  {site.phone}
                </a>{" "}
                · {site.hours}
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src={images.homeHero.src}
              alt={images.homeHero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/20 lg:bg-transparent" />
          </div>
        </div>
      </section>

      {/* Trust / proof strip */}
      <section className="border-b border-line bg-navy-deep">
        <div className="wrap grid gap-6 py-8 sm:grid-cols-3">
          {[
            { t: "Diagnose first", d: "Findings before parts—so you know what you’re paying for." },
            { t: "Mobile dockside", d: "We come to the marina when access allows." },
            { t: "Free estimates", d: "Clear next steps before you authorize repair work." },
          ].map((item) => (
            <div key={item.t} className="border-l-2 border-gold pl-4">
              <p className="font-display text-lg font-semibold text-pearl">{item.t}</p>
              <p className="mt-1 text-sm text-steel">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO intro */}
      <section className="section-soft">
        <div className="wrap section-pad">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
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
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="shot relative aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]">
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
      <section className="border-y border-line bg-navy">
        <div className="wrap section-pad">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="font-display text-3xl font-semibold text-pearl sm:text-4xl">
                What we repair on board
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-gold no-underline hover:text-gold-light"
            >
              View all services →
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
                  className="flex items-center justify-between rounded-lg border border-line bg-navy-deep px-4 py-4 no-underline transition hover:border-gold/40"
                >
                  <span className="font-semibold text-pearl">
                    {s.title.replace(" Fort Lauderdale", "")}
                  </span>
                  <span className="text-gold">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="section-soft">
        <div className="wrap section-pad">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="font-display text-3xl font-semibold text-pearl">
              From your call to back on the water
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <li key={step.n} className="rounded-lg border border-line bg-navy p-5">
                <p className="text-sm font-bold text-gold">{step.n}</p>
                <h3 className="font-display mt-3 text-xl font-semibold text-pearl">{step.t}</h3>
                <p className="mt-2 text-sm text-steel">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us + photo */}
      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[440px]">
            <Image
              src={yachts.cockpit.src}
              alt={yachts.cockpit.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-navy px-6 py-12 sm:px-10 lg:px-12">
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
            <Link href="/about" className="btn mt-8 w-fit">
              About the shop
            </Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-soft">
        <div className="wrap section-pad">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const img = images.locations[loc.slug as keyof typeof images.locations];
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group overflow-hidden rounded-lg border border-line bg-navy no-underline transition hover:border-gold/40"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <p className="font-display text-lg font-semibold text-pearl group-hover:text-gold-light">
                        {loc.name}
                      </p>
                      <p className="text-xs text-muted">{loc.region}</p>
                    </div>
                    <span className="text-gold">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="border-y border-line bg-navy">
        <div className="wrap section-pad">
          <div className="mb-6 flex items-end justify-between gap-3">
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
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {yachtStrip.slice(0, 4).map((img) => (
              <div key={img.src} className="shot relative aspect-[4/3]">
                <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-soft">
        <div className="wrap max-w-3xl py-14 text-center">
          <blockquote className="font-display text-2xl font-medium leading-snug text-pearl sm:text-3xl">
            “Clear diagnosis. Honest options. Dockside when it makes sense—not a mystery invoice.”
          </blockquote>
          <p className="mt-5 text-sm text-steel">
            <Link href="/reviews">Reviews</Link> · <Link href="/free-estimate">Free estimate</Link>
          </p>
        </div>
      </section>

      <FaqSection title="Common questions" faqs={homeFaqs} />
      <CTA />
    </>
  );
}
