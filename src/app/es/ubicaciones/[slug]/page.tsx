import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { locationPath } from "@/lib/i18n";
import { locations } from "@/lib/locations";
import { getLocalizedLocation, localizeLocation } from "@/lib/locations-localized";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { servicesInHubOrderLocalized } from "@/lib/services-localized";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocalizedLocation(slug, "es");
  if (!loc) return {};
  return buildMetadata({
    title: loc.seoTitle,
    description: loc.seoDescription,
    path: `/es/ubicaciones/${loc.slug}`,
    keywords: loc.keywords,
    locale: "es",
  });
}

export default async function SpanishLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const loc = getLocalizedLocation(slug, "es");
  if (!loc) notFound();
  const img = images.locations[loc.slug as keyof typeof images.locations];
  const others = locations.filter((l) => l.slug !== loc.slug).map((l) => localizeLocation(l, "es"));
  const hub = servicesInHubOrderLocalized("es");
  const quickAnswer = `Doctor Yachts da reparación de barcos y mecánico móvil en ${loc.name}, ${loc.state}—motores, eléctrico, enfriamiento, mantenimiento de yates y diagnóstico. Presupuestos gratis. Llame al ${site.phone} o reserve en línea para visitas a marina y muelle privado cuando hay acceso.`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Zonas", path: "/es/ubicaciones" },
            { name: loc.name, path: `/es/ubicaciones/${loc.slug}` },
          ]),
          serviceJsonLd({
            name: `Reparación de barcos y mecánico náutico — ${loc.name}, FL`,
            description: loc.seoDescription,
            path: `/es/ubicaciones/${loc.slug}`,
          }),
          faqJsonLd(loc.faqs),
        ]}
      />

      <PageHero
        eyebrow={loc.region}
        title={loc.h1}
        description={loc.intro}
        actions={
          <>
            <Button href="/es/reservar">Reservar en {loc.shortName}</Button>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            <AnswerBox
              label="Respuesta rápida"
              question={`¿Dan reparación de barcos en ${loc.name}?`}
              answer={quickAnswer}
            />

            <section>
              <h2 className="font-display text-navy">
                Mecánico náutico en {loc.name}, {loc.state}
              </h2>
              {loc.content.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-steel">
                  {p}
                </p>
              ))}
              <p className="mt-3 text-steel">{loc.marinasNote}</p>
            </section>

            <section>
              <h2 className="font-display text-navy">
                Servicios de reparación de barcos en {loc.shortName}
              </h2>
              <p className="mt-3 text-steel">
                Estas son las búsquedas y trabajos que más vemos en {loc.name} y marinas cercanas:
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {hub.map((s) => (
                  <Card key={s.id}>
                    <Link href={`/es/servicios/${s.slug}`} className="block p-4 no-underline">
                      <span className="font-semibold text-navy">
                        {s.title.replace(/\s+Fort Lauderdale$/i, "")} en {loc.shortName}
                      </span>
                      <span className="mt-1 block text-sm text-steel">{s.summary}</span>
                    </Link>
                  </Card>
                ))}
              </div>
              <p className="mt-4 text-sm text-steel">
                ¿Prefiere el panorama? Vea <Link href="/es/servicios">todos los servicios</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-navy">
                Por qué los dueños en {loc.shortName} llaman a Doctor Yachts
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-steel">
                <li>Primero diagnosticamos—hallazgos claros antes de la presión de piezas</li>
                <li>Móvil y en el muelle cuando hay acceso (se ahorra el remolque cuando se puede)</li>
                <li>Presupuesto gratis del trabajo recomendado</li>
                <li>Motores, eléctrico, enfriamiento, plomería y mantenimiento—incluido 100 y 300 horas</li>
              </ul>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            {img && (
              <div className="shot">
                <div className="shot-img relative aspect-[16/10]">
                  <Image src={img.src} alt={img.alt} fill sizes="300px" className="object-cover" />
                </div>
              </div>
            )}
            <Card className="p-5">
              <p className="eyebrow">Corredores locales</p>
              <ul className="mt-4 space-y-2">
                {loc.neighborhoods.map((n) => (
                  <li key={n} className="flex gap-2 border-b border-line pb-2 text-sm text-navy">
                    <span className="text-gold">·</span>
                    {n}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <p className="eyebrow">Contacto</p>
              <p className="mt-2 text-sm text-steel">{site.hoursEs}</p>
              <a href={site.phoneHref} className="mt-2 block font-semibold text-navy">
                {site.phone}
              </a>
              <Button href="/es/reservar" className="mt-4 w-full">
                Reservar en {loc.shortName}
              </Button>
            </Card>
          </aside>
        </div>
      </Section>

      {loc.faqs.length > 0 && (
        <FaqSection title={`Preguntas de reparación en ${loc.shortName}`} faqs={loc.faqs} />
      )}

      <RelatedLinks
        title="Otras zonas"
        links={others.map((l) => ({
          href: locationPath(l.slug, "es"),
          label: `Reparación de barcos ${l.name}`,
          note: l.region,
        }))}
      />

      <CTA />
    </>
  );
}
