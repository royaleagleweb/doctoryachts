import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnswerBox } from "@/components/AnswerBox";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { getLocalizedServices } from "@/lib/services-localized";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Doctor Yachts | Mecánico de yates en el sur de la Florida",
  description:
    "Sobre Doctor Yachts—mecánico de yates y botes independiente en Fort Lauderdale, Miami y el sur de la Florida. Reparación móvil y en el muelle, diagnóstico primero. Presupuestos gratis.",
  path: "/es/nosotros",
  locale: "es",
  keywords: ["sobre Doctor Yachts", "mecánico de yates Fort Lauderdale", "mecánico náutico"],
});

const aboutFaqs = [
  {
    question: "¿Doctor Yachts es un yard completo?",
    answer:
      "No. Somos un mecánico náutico independiente enfocado en motores, eléctrico, enfriamiento, sistemas y diagnóstico en el muelle—no pintura, brokerage ni refit completo. Cuando un trabajo pide yard, se lo decimos temprano.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami, el condado de Palm Beach y muelles cercanos del sur de la Florida cuando hay acceso.",
  },
];

export default function SpanishAboutPage() {
  const list = getLocalizedServices("es");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Nosotros", path: "/es/nosotros" },
          ]),
          faqJsonLd(aboutFaqs),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · el sur de la Florida"
        kicker="Mecánico de yates móvil en el sur de la Florida"
        title="Mecánico independiente de botes y yates en el sur de la Florida"
        subhead="Primero diagnosticamos. En el muelle."
        description="Fort Lauderdale, Miami y muelles cercanos. Motores, eléctrico, enfriamiento, diagnóstico, mantenimiento."
        image={images.aboutHero}
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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <AnswerBox
              label="Respuesta rápida"
              question="¿Qué es Doctor Yachts?"
              answer="Doctor Yachts es un mecánico de yates y botes independiente que atiende el sur de la Florida con reparación de motores, eléctrico, enfriamiento, sistemas, diagnóstico y mantenimiento, móvil y en el muelle. Primero diagnosticamos, damos presupuestos gratis y reparamos lo que importa—sin teatro de yard."
            />

            <div>
              <p className="eyebrow">Cómo trabajamos</p>
              <h2 className="font-display mt-3 text-navy">Cómo llevamos un trabajo</h2>
              <p className="mt-4 text-steel">
                Usted llama con un síntoma. Preguntamos dónde vive el bote, qué ya intentó y cuándo
                podemos subir a bordo. En sitio perseguimos la falla—no el número de parte más
                cerca—y le decimos qué es opcional vs urgente.
              </p>
              <p className="mt-4 text-steel">
                No somos brokerage, no somos detailing ni un handyman general. Motores, eléctrico,
                bombas, enfriamiento y la zona gris donde esos sistemas se pelean—ese es el trabajo.
                Presupuesto gratis después del diagnóstico.
              </p>
            </div>

            <div>
              <h2 className="font-display text-navy">Qué atendemos</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-steel">
                {[
                  "Reparación de motores marinos (interno y fuera de borda)",
                  "Reparación de motor fuera de borda",
                  "Reparación eléctrica de barcos y sistemas de carga",
                  "Reparación del sistema de enfriamiento",
                  "Mantenimiento de barcos (incluido servicio 100 horas y 300 horas)",
                  "Plomería, sentina y bombas",
                  "Móvil / en el muelle — vamos al barco",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-navy">Zonas de servicio</h2>
              <p className="mt-3 text-steel">
                Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami / Miami Beach y el
                condado de Palm Beach—en el muelle y móvil cuando hay acceso. Vea{" "}
                <Link href="/es/ubicaciones">todas las zonas</Link>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/es/reservar">Reservar visita</Button>
              <Button href="/es/presupuesto-gratis" variant="ghost">
                Pedir presupuesto gratis
              </Button>
              <Button href="/es/contacto" variant="ghost">
                Contacto
              </Button>
            </div>
          </div>

          <div>
            <div className="shot">
              <div className="shot-img relative aspect-[4/3]">
                <Image
                  src={images.gallery.maintenance.src}
                  alt={images.gallery.maintenance.alt}
                  fill
                  sizes="50vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="border-t border-line px-4 py-3 text-sm text-steel">
                Horario · {site.hoursEs} · {site.phone}
              </div>
            </div>
            <Card className="mt-5 p-5">
              <p className="eyebrow">Servicios núcleo</p>
              <ul className="mt-3 space-y-2">
                {list.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/es/servicios/${s.slug}`}
                      className="text-sm font-medium text-navy no-underline hover:text-gold-deep"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <FaqSection title="Preguntas sobre Doctor Yachts" faqs={aboutFaqs} />

      <RelatedLinks
        title="Explorar"
        links={[
          { href: "/es/servicios", label: "Todos los servicios", note: "Motores, eléctrico, móvil…" },
          { href: "/es/preguntas", label: "Preguntas", note: "Dudas comunes de dueños" },
          { href: "/reviews", label: "Reseñas", note: "Comentarios de dueños" },
        ]}
      />

      <CTA />
    </>
  );
}
