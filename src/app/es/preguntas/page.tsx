import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CTA, ShopActions } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { images } from "@/lib/images";
import { servicePath } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { getLocalizedServices } from "@/lib/services-localized";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Preguntas de mantenimiento de yates | El sur de la Florida",
  description:
    "Preguntas de mantenimiento de yates y reparación de barcos en el sur de la Florida: intervalos, no-arranques, sobrecalentamiento, baterías, zincs, servicio 100 horas y 300 horas. Respuestas de Doctor Yachts en Fort Lauderdale.",
  path: "/es/preguntas",
  locale: "es",
  keywords: [
    "preguntas mantenimiento de yates",
    "FAQ mecánico náutico",
    "servicio 100 horas",
    "servicio 300 horas",
  ],
});

const groups = [
  {
    id: "plan",
    title: "Planificación y dueño",
    intro: "Cada cuánto dar servicio, costos y por qué las notas importan en la reventa.",
    faqs: [
      {
        question: "¿Cada cuánto debo darle servicio a mi yate?",
        answer:
          "En el sur de la Florida, las horas del fabricante son el piso, no el techo. La sal, el calor y el crecimiento todo el año envejecen enfriamiento, conexiones y ánodos más rápido que un plan del norte de una vez por temporada. La mayoría necesita un chequeo anual más aceite y filtros en el intervalo—a menudo cada 50–100 horas. Estar parado igual envejece combustible, baterías e impulsores.",
      },
      {
        question: "¿Cuánto cuesta el mantenimiento de yates al año?",
        answer:
          "No hay un número honesto fijo. El costo sigue el tamaño, las horas, sistemas como generador y aire, y si el bote vive en sal todo el año. Lo preventivo—aceite, filtros, impulsores, zincs, baterías—suele costar menos que un sobrecalentamiento o una falla eléctrica. Doctor Yachts no publica listas inventadas. Primero diagnosticamos y damos presupuesto gratis.",
      },
      {
        question: "¿Qué es el servicio 100 horas y el servicio 300 horas?",
        answer:
          "El servicio 100 horas es el intervalo regular o anual de agua salada: aceite, filtros, gear lube, impulsor, zincs, baterías y bitácora. El servicio 300 horas es el pase más profundo que muchos manuales ponen entre 250 y 300 horas. Hallazgos antes de piezas. Presupuesto gratis de extras.",
      },
    ],
  },
  {
    id: "reservar",
    title: "Reservar un mecánico móvil",
    intro: "Cómo pedir una visita en el muelle, presupuestos gratis y tiempo de respuesta.",
    faqs: [
      {
        question: "¿Cómo reservo un mecánico de yates móvil en el sur de la Florida?",
        answer: `Reserve en línea o llame al ${site.phone}. Cuente el síntoma, tipo de bote, marina o muelle privado, slip y acceso. Confirmamos por teléfono de lunes a sábado, 7:00 a. m.–6:00 p. m. El mismo día depende de la agenda real y el acceso—no de un countdown falso.`,
      },
      {
        question: "¿Dan presupuestos gratis?",
        answer:
          "Sí. Cuando entendemos síntomas y ubicación—y completamos el diagnóstico si hay que ver el bote—damos presupuesto gratis del trabajo recomendado antes de autorizar piezas y mano de obra mayores.",
      },
    ],
  },
  {
    id: "motores",
    title: "Motores, aceite, combustible e impulsores",
    intro: "No-arranques, sobrecalentamiento, intervalos de aceite e interno vs fuera de borda.",
    faqs: [
      {
        question: "¿Por qué no arranca mi bote?",
        answer:
          "Empiece por carga y conexiones de batería, el kill switch o lanyard, y lo básico de combustible. Arranque flojo o silencio suele ser eléctrico. Arranque fuerte sin fuego apunta a combustible, sensores o interlocks. El calor del sur de la Florida y estar parado entre fines de semana hacen fallar primero baterías y conexiones. Si los chequeos simples fallan, deje de cambiar piezas y reserve un diagnóstico móvil.",
      },
      {
        question: "¿Por qué se sobrecalienta el motor?",
        answer:
          "La mayoría es flujo de agua cruda restringido: impulsor fallado, strainer tapado, toma bloqueada, termostato pegado o intercambiador sucio. Baje carga y apague si la temperatura sigue subiendo. Un chorrito débil en el fuera de borda es pista de flujo, no razón para seguir corriendo.",
      },
    ],
  },
  {
    id: "electrico",
    title: "Eléctrico y baterías",
    intro: "Bancos muertos, shore power y carga en marcha.",
    faqs: [
      {
        question: "¿Por qué se me mueren las baterías del bote?",
        answer:
          "Consumos parásitos, cargador o alternador que falla, celdas malas, malas conexiones o perfil de carga incorrecto. Probamos el camino completo—no solo la batería. En el sur de la Florida la sal y el calor aceleran esas fallas.",
      },
    ],
  },
  {
    id: "florida",
    title: "El sur de la Florida y el muelle",
    intro: "Por qué aquí el mantenimiento no es el del norte.",
    faqs: [
      {
        question: "¿El mantenimiento en Florida es distinto?",
        answer:
          "Sí. Uso todo el año, sal, calor y hierba. El calendario anual importa tanto como las horas. Un bote parado en Fort Lauderdale igual envejece combustible, baterías e impulsores. El servicio 100 horas / anual es la base; el de 300 horas es el pase más profundo.",
      },
    ],
  },
];

const servicesEs = getLocalizedServices("es");
const uniqueServiceFaqs = servicesEs.flatMap((s) =>
  s.faqs.slice(0, 3).map((f) => ({ ...f, source: s.title, href: `/es/servicios/${s.slug}` })),
);

const faqSchemaItems = [
  ...groups.flatMap((g) => g.faqs),
  ...uniqueServiceFaqs.map(({ question, answer }) => ({ question, answer })),
];

export default function SpanishFaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/es" },
            { name: "Preguntas", path: "/es/preguntas" },
          ]),
          faqJsonLd(faqSchemaItems),
        ]}
      />

      <PageHero
        eyebrow="Doctor Yachts · el sur de la Florida"
        kicker="Mecánico de yates móvil en el sur de la Florida"
        title="Preguntas de mantenimiento de yates en el sur de la Florida"
        subhead="Primero diagnosticamos. En el muelle."
        description={
          <>
            Respuestas de diagnóstico primero—intervalos, no-arranques, enfriamiento, eléctrico,
            servicio 100 horas y 300 horas. Confirmamos en horario {site.hoursEs}.
          </>
        }
        image={images.mechanic}
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
        <nav className="faq-jump" aria-label="Temas">
          {groups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <h2 className="font-display text-navy">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-steel">{group.intro}</p>
              <ShopActions compact />
              <div className="faq-list mt-6">
                {group.faqs.map((f) => (
                  <details key={f.question} className="faq-item group">
                    <summary className="faq-item__q">
                      <span>{f.question}</span>
                      <span className="faq-item__icon" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="faq-item__a">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-navy">Más preguntas por servicio</h2>
        <p className="mt-2 max-w-2xl text-steel">
          Respuestas extra de las páginas de servicio, incluido servicio 100 horas y 300 horas.
        </p>
        <div className="mt-6 space-y-4">
          {servicesEs.map((s) => (
            <Card key={s.id} className="p-5">
              <h3 className="font-display text-navy">
                <Link
                  href={`/es/servicios/${s.slug}`}
                  className="text-navy no-underline hover:text-gold-deep"
                >
                  {s.title}
                </Link>
              </h3>
              <ul className="mt-4 space-y-4">
                {s.faqs.slice(0, 3).map((f) => (
                  <li key={f.question}>
                    <p className="font-semibold text-navy">{f.question}</p>
                    <p className="mt-1 text-sm text-steel">{f.answer}</p>
                  </li>
                ))}
              </ul>
              <ShopActions compact />
            </Card>
          ))}
        </div>

        <p className="mt-10 text-steel">
          Guías en inglés: vea <Link href="/guides">repair guides</Link>. Servicio 100 horas y 300
          horas: <Link href={servicePath("boat-maintenance", "es")}>mantenimiento de barcos</Link>.
        </p>
      </Section>

      <CTA />
    </>
  );
}
