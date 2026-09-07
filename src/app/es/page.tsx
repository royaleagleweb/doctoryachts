import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { images } from "@/lib/images";
import { locationPath, servicePath } from "@/lib/i18n";
import { publicLocations } from "@/lib/locations";
import { faqJsonLd, buildMetadata } from "@/lib/seo";
import { servicesInHubOrderLocalized } from "@/lib/services-localized";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mecánico de yates móvil Fort Lauderdale | Doctor Yachts",
  description: site.descriptionEs,
  path: "/es",
  locale: "es",
  keywords: [
    "mecánico de yates Fort Lauderdale",
    "reparación de barcos",
    "mantenimiento de yates",
    "mecánico náutico",
    "el sur de la Florida",
  ],
});

const homeFaqsEs = [
  {
    question: "¿Dónde da servicio de mecánico de yates Doctor Yachts?",
    answer:
      "En el sur de la Florida—Fort Lauderdale, Miami / Miami Beach y el condado de Palm Beach—con servicio móvil y en el muelle cuando el acceso lo permite.",
  },
  {
    question: "¿Qué hace un mecánico náutico?",
    answer:
      "Diagnostica y repara motores marinos, sistemas eléctricos, enfriamiento, bombas y sistemas relacionados. Doctor Yachts diagnostica primero para que entienda la falla antes de cambiar piezas.",
  },
  {
    question: "¿Ofrecen reparación móvil de barcos en Fort Lauderdale y el sur de la Florida?",
    answer:
      "Sí. La reparación móvil y en el muelle es un servicio núcleo para no-arranques, eléctrico, enfriamiento y mucho mantenimiento cuando la marina o el muelle privado son accesibles.",
  },
  {
    question: "¿Dan presupuestos gratis?",
    answer:
      "Sí. Cuando entendemos el síntoma y la ubicación, damos presupuesto gratis del trabajo recomendado para que decida antes de autorizar piezas y mano de obra.",
  },
  {
    question: "¿Reparán botes y yates?",
    answer:
      "Sí. Atendemos botes de recreo y yates—center consoles, cabin cruisers, sport yachts, motor yachts y más—según los sistemas y el acceso.",
  },
  {
    question: "¿Cómo reservo una reparación?",
    answer:
      "Reserve en línea (servicio, embarcación, horario, contacto) o llame al taller. Incluya marina, slip y síntomas para confirmar la visita y llevar las herramientas correctas.",
  },
];

export default function SpanishHomePage() {
  const homeServices = servicesInHubOrderLocalized("es");
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqsEs)} />

      <PageHero
        size="display"
        water
        eyebrow="Doctor Yachts · el sur de la Florida"
        kicker="Mecánico de yates móvil en el sur de la Florida"
        title="El mecánico que va al barco."
        subhead="Primero diagnosticamos. En el muelle."
        description="Fort Lauderdale, Miami y muelles cercanos. Confirmamos por teléfono de lun a sáb, 7–6."
        image={images.homeHero}
        actions={
          <>
            <Button href="/es/reservar">Reservar visita</Button>
            <Button href={site.phoneHref} variant="ghost">
              Llamar {site.phone}
            </Button>
          </>
        }
      />

      <div className="problem-rail-wrap">
        <nav className="problem-rail" aria-label="Problemas comunes">
          <Link href="/es/reservar?service=engine-repair">
            <strong>No arranca</strong>
          </Link>
          <Link href="/es/reservar?service=cooling">
            <strong>Se sobrecalienta</strong>
          </Link>
          <Link href="/es/reservar?service=electrical">
            <strong>Batería / corriente</strong>
          </Link>
          <Link href="/es/reservar?service=hour-100">
            <strong>Servicio 100 horas</strong>
          </Link>
        </nav>
      </div>

      <Section>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="El taller" title="Qué reparamos" />
          <Link href="/es/servicios" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
            Todos los servicios →
          </Link>
        </div>
        <div className="shop-grid">
          {homeServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} compact locale="es" />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal-in space-y-8">
            <AnswerBox
              label="Respuesta rápida"
              question="¿Quién es Doctor Yachts?"
              answer="Doctor Yachts es un mecánico de yates y botes independiente que atiende Fort Lauderdale, Miami y el sur de la Florida con reparación de motores marinos, eléctrico, enfriamiento, diagnóstico y mantenimiento de yates, móvil y en el muelle. Presupuestos gratis. Primero diagnosticamos—reparamos lo que importa."
            />
            <div>
              <h2 className="font-display">Mecánico náutico para Fort Lauderdale</h2>
              <p className="mt-4 text-steel">
                <Link href={locationPath("fort-lauderdale", "es")}>Reparación de barcos en Fort Lauderdale</Link>,{" "}
                <Link href={servicePath("mobile-boat-repair", "es")}>mecánico móvil</Link>,{" "}
                <Link href={servicePath("marine-engine-repair", "es")}>motores</Link>,{" "}
                <Link href={servicePath("outboard-motor-repair", "es")}>fuera de borda</Link>,{" "}
                <Link href={servicePath("electrical-repairs", "es")}>eléctrico</Link>,{" "}
                <Link href={servicePath("cooling-system-repairs", "es")}>enfriamiento</Link>,{" "}
                <Link href={servicePath("100-hour-service", "es")}>servicio 100 horas</Link>,{" "}
                <Link href={servicePath("300-hour-service", "es")}>servicio 300 horas</Link>,{" "}
                <Link href={servicePath("boat-maintenance", "es")}>mantenimiento de yates</Link>. Llame al{" "}
                <a href={site.phoneHref}>{site.phone}</a> o <Link href="/es/reservar">reserve una visita</Link>.
              </p>
            </div>
          </div>
          <div className="reveal-in grid gap-3 sm:grid-cols-2 lg:sticky lg:top-36">
            <div className="shot relative aspect-[4/5] sm:row-span-2 sm:aspect-auto sm:min-h-[26rem]">
              <Image
                src={images.gallery.electrical.src}
                alt={images.gallery.electrical.alt}
                fill
                sizes="40vw"
                className="object-cover object-[center_30%]"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.systems.src}
                alt={images.gallery.systems.alt}
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="shot relative aspect-[4/3]">
              <Image
                src={images.gallery.dockside.src}
                alt={images.gallery.dockside.alt}
                fill
                sizes="25vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Cómo funciona" title="Llame. Diagnosticamos. Reparamos." />
        <ol className="process-open reveal-in mt-12">
          {[
            { n: "01", t: "Cuéntenos el síntoma", d: "Qué está haciendo el bote—o qué dejó de hacer." },
            { n: "02", t: "Planeamos la visita", d: "Marina, slip, acceso, un horario que sirva." },
            { n: "03", t: "Diagnosticamos en sitio", d: "Hallazgos antes de piezas o mano de obra." },
            { n: "04", t: "Reparamos con un plan", d: "Presupuesto gratis. Notas que puede guardar." },
          ].map((step) => (
            <li key={step.n}>
              <span className="n">{step.n}</span>
              <h3 className="font-display">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
            <div className="shot absolute inset-0">
              <Image
                src={images.gallery.maintenance.src}
                alt={images.gallery.maintenance.alt}
                fill
                sizes="50vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>
          <div className="reveal-in flex flex-col justify-center py-2">
            <SectionHeading
              eyebrow="Por qué Doctor Yachts"
              title="Primero diagnosticamos. Después reparamos."
              description="Motores, eléctrico, enfriamiento, bombas y cableado tratados como un solo sistema."
            />
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-steel">
              <li>Primero en el muelle cuando el acceso lo permite</li>
              <li>Hallazgos antes de piezas</li>
              <li>Notas para el próximo viaje, yard o survey</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/es/reservar">Reservar visita</Button>
              <Button href="/es/nosotros" variant="ghost">
                Sobre el taller
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Zonas de servicio" title="Dónde trabajamos" />
          <Link href="/es/ubicaciones" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
            Todas las zonas →
          </Link>
        </div>
        <div className="shop-grid shop-grid--areas">
          {publicLocations.map((loc) => {
            const img = images.locations[loc.slug as keyof typeof images.locations];
            return (
              <MediaCard
                key={loc.slug}
                href={locationPath(loc.slug, "es")}
                image={img}
                title={loc.name}
                description={loc.region}
              />
            );
          })}
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Reseñas</p>
            <h2 className="font-display">Lea o deje una reseña</h2>
            <p className="mt-3 text-steel">
              Google y Yelp de Doctor Yachts en Fort Lauderdale. Sin ratings inventados en este sitio.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={site.profiles.google} target="_blank" rel="noopener noreferrer">
              Google
            </Button>
            <Button href={site.profiles.yelp} variant="ghost" target="_blank" rel="noopener noreferrer">
              Yelp
            </Button>
            <Link href="/reviews" className="text-sm font-semibold text-gold no-underline hover:text-gold-light">
              Página de reseñas →
            </Link>
          </div>
        </div>
        <p className="mt-6">
          <ReviewLinks />
        </p>
      </Section>

      <FaqSection title="Preguntas frecuentes" faqs={homeFaqsEs} />
      <CTA water />
    </>
  );
}
