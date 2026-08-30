import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { images } from "@/lib/images";
import { servicePath } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { servicesInHubOrderLocalized } from "@/lib/services-localized";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de reparación de barcos | Fort Lauderdale y el sur de la Florida",
  description:
    "Servicios de reparación de barcos en Fort Lauderdale: motor, fuera de borda, eléctrico, enfriamiento, mantenimiento (incluido servicio 100 horas y 300 horas) y plomería. Presupuestos gratis.",
  path: "/es/servicios",
  locale: "es",
  keywords: [
    "reparación de barcos Fort Lauderdale",
    "mecánico de yates",
    "mantenimiento de yates",
    "servicio 100 horas",
    "servicio 300 horas",
    "servicio de motor fuera de borda",
  ],
});

const hubFaqs = [
  {
    question: "¿Qué servicios de reparación de barcos ofrecen?",
    answer:
      "Seis hubs: reparación de motores marinos, motor fuera de borda, eléctrico, enfriamiento, mantenimiento de barcos (incluido servicio 100 horas y 300 horas en esa página) y plomería. Trabajamos en el muelle en el sur de la Florida.",
  },
  {
    question: "¿Dan presupuestos gratis?",
    answer:
      "Sí. Cuando entendemos síntomas y ubicación, damos presupuesto gratis del trabajo recomendado antes de que autorice piezas y mano de obra mayores.",
  },
  {
    question: "¿Van a la marina o tengo que llevar el bote?",
    answer:
      "Nos especializamos en reparación móvil y en el muelle cuando el acceso lo permite. Muchos no-arranques, eléctrico, enfriamiento y mantenimiento se cierran donde el bote ya está.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach, el condado de Palm Beach y muelles cercanos del sur de la Florida.",
  },
];

const youGet = [
  {
    title: "Primero diagnosticamos",
    body: "Hallazgos antes de piezas. Sabe qué es urgente y qué puede esperar.",
  },
  {
    title: "Presupuestos gratis",
    body: "El trabajo recomendado se cotiza antes de que autorice piezas y mano de obra mayores.",
  },
  {
    title: "En el muelle cuando ayuda",
    body: "Visitas móviles a marinas y muelles privados cuando hay acceso—a menudo sin remolque.",
  },
];

export default function SpanishServicesPage() {
  const hubServices = servicesInHubOrderLocalized("es");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Servicios", path: "/es/servicios" },
          ]),
          faqJsonLd(hubFaqs),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · el sur de la Florida"
        kicker="Mecánico de yates móvil en el sur de la Florida"
        title="Servicios de reparación de barcos en el sur de la Florida"
        subhead="Primero diagnosticamos. En el muelle."
        description="Seis hubs: motor, fuera de borda, eléctrico, enfriamiento, mantenimiento, plomería. Fort Lauderdale y muelles cercanos."
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

      <Section>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Todos los servicios"
            title="Qué reparamos"
            description="Cada tarjeta es una página de servicio real—poca brochura, mucho del trabajo de verdad."
          />
          <div className="flex flex-wrap gap-3">
            <Button href="/es/reservar">Reserve esta semana</Button>
            <Button href="/es/presupuesto-gratis" variant="ghost">
              Pedir presupuesto gratis
            </Button>
          </div>
        </div>
        <div className="shop-grid">
          {hubServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact locale="es" />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Qué recibe" title="Cómo es una visita" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {youGet.map((item) => (
            <Card key={item.title} className="p-6">
              <h2 className="font-display text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-steel">
          ¿No sabe qué servicio? Llame al <a href={site.phoneHref}>{site.phone}</a> o empiece en el{" "}
          <Link href="/es">inicio de mecánico móvil</Link>. El diagnóstico es el método, no una
          página aparte.
        </p>
      </Section>

      <Section>
        <AnswerBox
          label="Respuesta rápida"
          question="¿Qué repara Doctor Yachts?"
          answer="Doctor Yachts repara botes y yates en el sur de la Florida: motores, fuera de borda, eléctrico, enfriamiento, plomería y mantenimiento programado—incluido servicio 100 horas y 300 horas en la página de mantenimiento. Presupuesto gratis después del diagnóstico."
        />
        <div className="mt-10 space-y-4">
          <h2 className="font-display text-navy">Cómo elegir el servicio correcto</h2>
          <p className="text-steel">
            Empiece por el síntoma. No arranca o da arranque flojo suele ser{" "}
            <Link href={servicePath("electrical-repairs", "es")}>eléctrico</Link> o{" "}
            <Link href={servicePath("marine-engine-repair", "es")}>diagnóstico de motor</Link>. Si se
            calienta, es <Link href={servicePath("cooling-system-repairs", "es")}>enfriamiento</Link>.
            Sentina que no para,{" "}
            <Link href={servicePath("plumbing-repairs", "es")}>plomería</Link>. Horas vencidas:{" "}
            <Link href={servicePath("boat-maintenance", "es")}>mantenimiento de barcos</Link> (el
            servicio 100 horas y 300 horas son secciones de esa página). Para una visita en el
            muelle sin remolque, empiece en el <Link href="/es">inicio</Link>.
          </p>
        </div>
        <Card className="mt-10 p-6">
          <h2 className="font-display text-navy">Zonas de servicio</h2>
          <p className="mt-2 text-sm text-steel">
            Fort Lauderdale · Pompano Beach · Miami · Dania Beach · Hollywood · condado de Palm
            Beach. Vea <Link href="/es/ubicaciones">todas las zonas</Link> o llame al{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </Card>
      </Section>

      <CTA />
    </>
  );
}
