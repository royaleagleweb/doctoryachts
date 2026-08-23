import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { MediaCard } from "@/components/MediaCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { locationPath } from "@/lib/i18n";
import { publicLocations } from "@/lib/locations";
import { localizeLocation } from "@/lib/locations-localized";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Reparación de barcos cerca de mí | Fort Lauderdale y el sur de la Florida",
  description:
    "Zonas de reparación de barcos: Fort Lauderdale, Dania Beach, Hollywood, Miami y Palm Beach. Mecánico móvil en el muelle. Presupuestos gratis — Doctor Yachts.",
  path: "/es/ubicaciones",
  locale: "es",
  keywords: [
    "reparación de barcos cerca de mí Fort Lauderdale",
    "mecánico náutico sur de la Florida",
    "reparación móvil Broward",
  ],
});

const hubFaqs = [
  {
    question: "¿Dónde dan reparación de barcos?",
    answer:
      "Doctor Yachts atiende Fort Lauderdale, Dania Beach, Hollywood, Miami, el condado de Palm Beach y muelles cercanos del sur de la Florida, móvil y en el muelle cuando hay acceso.",
  },
  {
    question: "¿Hay reparación cerca de mí en Broward?",
    answer:
      "Sí. Broward incluye Fort Lauderdale, Dania Beach y Hollywood. Comparta marina y slip al reservar para confirmar el acceso.",
  },
  {
    question: "¿El servicio móvil está en todas las ciudades?",
    answer:
      "El trabajo móvil y en el muelle está disponible en nuestras zonas cuando el acceso lo permite. Algunos trabajos siguen pidiendo yard o haul-out—se lo decimos temprano.",
  },
];

export default function SpanishLocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Zonas", path: "/es/ubicaciones" },
          ]),
          faqJsonLd(hubFaqs),
        ]}
      />

      <PageHero
        eyebrow="Zonas de servicio"
        title="Zonas de reparación de barcos en el sur de la Florida"
        description="Cobertura de mecánico móvil y en el muelle en Broward, Miami-Dade y el condado de Palm Beach. Reserve—confirmamos por teléfono de lun a sáb, 7–6."
        image={images.gallery.dockside}
        actions={
          <>
            <Button href="/es/reservar">Reservar visita</Button>
            <Button href="/es/presupuesto-gratis" variant="ghost">
              Pedir presupuesto gratis
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              Llamar {site.phone}
            </Button>
          </>
        }
      />

      <Section>
        <div className="space-y-10">
          <AnswerBox
            label="Respuesta rápida"
            question="¿Dan reparación de barcos cerca de Fort Lauderdale?"
            answer={`Sí. Doctor Yachts da reparación de barcos y mecánico móvil en Fort Lauderdale y ciudades cercanas del sur de la Florida, incluidas Dania Beach, Hollywood, Miami y el condado de Palm Beach. Presupuestos gratis. Llame al ${site.phone} o reserve en línea.`}
          />

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {publicLocations.map((raw) => {
              const loc = localizeLocation(raw, "es");
              const img = images.locations[loc.slug as keyof typeof images.locations];
              return (
                <MediaCard
                  key={loc.slug}
                  href={locationPath(loc.slug, "es")}
                  image={img}
                  kicker={loc.region}
                  title={`Reparación de barcos ${loc.name}`}
                  description={loc.intro}
                  footer={
                    <p className="mt-3 text-sm font-semibold text-gold-deep">
                      Página de {loc.shortName} →
                    </p>
                  }
                />
              );
            })}
          </div>

          <section className="space-y-4">
            <h2 className="font-display text-navy">Reparación móvil en el sur de la Florida</h2>
            <p className="text-steel">
              Si buscó “reparación de barcos cerca de mí” en Fort Lauderdale o necesita un mecánico
              de yates en el condado de Palm Beach, el proceso es el mismo: describa el síntoma,
              comparta el acceso al muelle y primero diagnosticamos. Presupuesto gratis del trabajo
              recomendado. Llame al <a href={site.phoneHref}>{site.phone}</a> o{" "}
              <Link href="/es/reservar">reserve una visita</Link>.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {hubFaqs.map((faq) => (
                <Card key={faq.question} className="p-5">
                  <p className="text-sm font-semibold text-navy">{faq.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </Section>

      <CTA />
    </>
  );
}
