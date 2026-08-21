import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewLinks } from "@/components/ReviewLinks";
import { Section } from "@/components/Section";
import { servicePath } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Presupuesto gratis de reparación de barcos | Fort Lauderdale",
  description:
    "Pida un presupuesto gratis de reparación de barcos en Fort Lauderdale o el sur de la Florida. Cuéntenos qué pasa y dónde está el bote — servicio náutico móvil y en el muelle.",
  path: "/es/presupuesto-gratis",
  locale: "es",
  keywords: ["presupuesto gratis reparación de barcos", "cotización mecánico náutico"],
});

const faqs = [
  {
    question: "¿El presupuesto es de verdad gratis?",
    answer:
      "Sí. Cuando entendemos síntomas y ubicación, damos presupuesto gratis del trabajo recomendado antes de que autorice reparaciones de pago.",
  },
  {
    question: "¿Qué tan rápido responden?",
    answer:
      "Respondemos en horario del taller—casi siempre el mismo día hábil. Un no-arranque urgente debe llamar para triaje de cupos prioritarios.",
  },
  {
    question: "¿Qué debo escribir en el formulario?",
    answer:
      "Qué está haciendo el bote (no arranca, se calienta, baterías muertas…), dónde está (ciudad + marina si la sabe) y para cuándo lo necesita. Una frase corta basta.",
  },
];

export default function SpanishEstimatePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Presupuesto gratis", path: "/es/presupuesto-gratis" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="Presupuestos gratis"
        title="Presupuesto gratis de reparación de barcos"
        description={
          <>
            Responda unas preguntas prácticas—qué pasa, dónde está el bote y cómo localizarlo.
            Respondemos en horario {site.hoursEs}. ¿Prefiere hablar? Llame al{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </>
        }
        actions={
          <>
            <Button href={site.phoneHref}>Llamar {site.phone}</Button>
            <Button href="/es/reservar" variant="ghost">
              Reservar visita
            </Button>
            <ReviewLinks />
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_0.9fr]">
          <Card className="p-5 sm:p-7">
            <h2 className="font-display text-navy">Pida su presupuesto gratis</h2>
            <p className="mt-2 text-sm text-steel">
              Los campos con * son obligatorios. Lo demás es opcional pero nos ayuda a cotizar más
              rápido.
            </p>
            <div className="mt-6">
              <EstimateForm />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-5">
              <h2 className="font-display text-navy">Qué necesitamos</h2>
              <ol className="mt-4 space-y-3 text-sm text-steel">
                <li>
                  <strong className="text-navy">1. Qué pasa</strong> — no arranca, se calienta,
                  baterías, bombas, servicio 100 o 300 horas, etc.
                </li>
                <li>
                  <strong className="text-navy">2. Dónde está el bote</strong> — ciudad + marina o
                  muelle
                </li>
                <li>
                  <strong className="text-navy">3. Teléfono y correo</strong> — para responderle
                </li>
              </ol>
            </Card>

            <Card className="p-5">
              <h2 className="font-display text-navy">Qué recibe</h2>
              <p className="mt-3 text-sm text-steel">
                Cuando entendemos el síntoma y la ubicación, armamos los pasos de diagnóstico
                probables y un camino de presupuesto gratis del trabajo recomendado—antes de que
                autorice piezas y mano de obra mayores.
              </p>
              <p className="mt-3 text-sm text-steel">
                Pedidos comunes:{" "}
                <Link href={servicePath("marine-engine-repair", "es")}>reparación de motores</Link>,{" "}
                <Link href={servicePath("100-hour-service", "es")}>servicio 100 horas</Link>,{" "}
                <Link href={servicePath("300-hour-service", "es")}>servicio 300 horas</Link>,{" "}
                <Link href={servicePath("electrical-repairs", "es")}>eléctrico</Link>,{" "}
                <Link href={servicePath("mobile-boat-repair", "es")}>reparación móvil</Link>.
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="font-display text-navy">Preguntas del presupuesto</h2>
              <ul className="mt-3 space-y-3">
                {faqs.map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-navy">{f.question}</p>
                    <p className="mt-1 text-sm text-steel">{f.answer}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
