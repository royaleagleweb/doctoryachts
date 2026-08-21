import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Reservar reparación de barcos en línea | Fort Lauderdale y el sur de la Florida",
  description:
    "Reserve reparación de barcos en Fort Lauderdale y el sur de la Florida. Cuéntenos qué pasa, dónde está el bote y cuándo le sirve. Presupuestos gratis. Móvil en el muelle cuando hay cupo.",
  path: "/es/reservar",
  locale: "es",
  keywords: ["reservar mecánico de yates", "agendar reparación de barcos Fort Lauderdale"],
});

const faqs = [
  {
    question: "¿La reserva en línea es una cita confirmada?",
    answer:
      "Es una solicitud. Confirmamos disponibilidad, acceso a la marina y alcance—después cerramos la visita. Le respondemos en horario del taller por teléfono o correo.",
  },
  {
    question: "¿Puedo pedir presupuesto gratis antes de reservar?",
    answer:
      "Sí. Use el formulario de presupuesto si solo quiere una guía de costo primero. Reservar es mejor cuando ya sabe que quiere la visita.",
  },
  {
    question: "¿Y si el bote no arranca y necesito ayuda hoy?",
    answer: `Llame al ${site.phone} para el triaje más rápido. Marque “urgente” en el formulario también—el mismo día depende de agenda y acceso.`,
  },
];

export default function SpanishBookPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Reservar", path: "/es/reservar" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="Reserve en línea"
        title="Reserve reparación de barcos"
        description={
          <>
            Cuatro pasos rápidos. Confirmamos por teléfono en horario {site.hoursEs}. Enviar es una
            solicitud—no un candado instantáneo. ¿Prefiere hablar primero? Llame al {site.phone}.
          </>
        }
        actions={
          <>
            <Button href={site.phoneHref}>Llamar {site.phone}</Button>
            <Button href="/es/presupuesto-gratis" variant="ghost">
              Pedir presupuesto gratis
            </Button>
            <ReviewLinks />
          </>
        }
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <Suspense
              fallback={<Card className="p-8 text-center text-steel">Cargando el formulario…</Card>}
            >
              <BookingForm />
            </Suspense>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-36 lg:self-start">
            <Card className="p-5">
              <p className="eyebrow">4 pasos fáciles</p>
              <ol className="mt-3 space-y-3 text-sm text-steel">
                <li>
                  <strong className="text-navy">1.</strong> Qué pasa
                </li>
                <li>
                  <strong className="text-navy">2.</strong> Ciudad, marina, día y hora
                </li>
                <li>
                  <strong className="text-navy">3.</strong> Tipo de bote
                </li>
                <li>
                  <strong className="text-navy">4.</strong> Nombre, teléfono y correo
                </li>
              </ol>
              <p className="mt-4 border-t border-line pt-3 text-sm leading-relaxed text-steel">
                Enviar es una <strong className="text-navy">solicitud</strong>, no una cita fija.
              </p>
            </Card>

            <Card className="p-5">
              <p className="font-semibold text-navy">¿Necesita ayuda ahora?</p>
              <p className="mt-2 text-sm text-steel">
                No-arranques urgentes y temas de seguridad: llame al taller.
              </p>
              <Button href={site.phoneHref} className="mt-4 w-full">
                {site.phone}
              </Button>
              <p className="mt-3 text-sm text-steel">{site.hoursEs}</p>
            </Card>
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
