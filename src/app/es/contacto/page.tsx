import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
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
  title: "Contactar mecánico de yates | Fort Lauderdale y el sur de la Florida",
  description:
    "Contacte a Doctor Yachts para reparación de barcos en Fort Lauderdale y el sur de la Florida. Llame en emergencias o envíe un mensaje para presupuestos y agenda.",
  path: "/es/contacto",
  locale: "es",
  keywords: ["contacto mecánico de yates", "teléfono reparación de barcos"],
});

const faqs = [
  {
    question: "¿Llamo o uso el formulario?",
    answer:
      "Llame para no-arranques urgentes, sobrecalentamiento, riesgo de inundación o necesidad del mismo día. Use el formulario para preguntas, presupuestos y detalles de agenda.",
  },
  {
    question: "¿Qué información debo incluir?",
    answer:
      "Tipo/eslora, marina o ciudad, síntomas y para cuándo necesita el bote. Las fotos ayudan en eléctrico y fugas.",
  },
];

export default function SpanishContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Contacto", path: "/es/contacto" },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow="Contacto"
        title="Contacte al mecánico"
        description={
          <>
            Llame al <a href={site.phoneHref}>{site.phone}</a> o envíe un mensaje. Horario{" "}
            {site.hoursEs}. Correo: {site.email}. Sur de la Florida—no Pompano Beach como mercado
            principal.
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
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="p-5 sm:p-7">
            <h2 className="font-display text-navy">Enviar un mensaje</h2>
            <p className="mt-2 text-sm text-steel">
              Respondemos en horario del taller. Las notificaciones llegan a {site.email} y al
              escritorio del taller.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="font-display text-navy">Taller</h2>
            <p className="mt-3 text-steel">{site.hoursEs}</p>
            <p className="mt-2 text-steel">{site.addressEs}</p>
            <p className="mt-4 text-steel">
              <a href={site.phoneHref} className="font-semibold text-navy">
                {site.phone}
              </a>
              <br />
              {site.email}
            </p>
          </Card>
        </div>
      </Section>

      <CTA />
    </>
  );
}
