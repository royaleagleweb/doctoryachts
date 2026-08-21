import type { Locale } from "./i18n";
import { locations, type Location } from "./locations";

type Overlay = Pick<
  Location,
  "seoTitle" | "seoDescription" | "h1" | "intro" | "content" | "marinasNote" | "keywords" | "faqs"
>;

const es: Record<string, Overlay> = {
  "fort-lauderdale": {
    seoTitle: "Reparación de barcos | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Reparación y mantenimiento de yates móvil en Fort Lauderdale. Motores, eléctrico, plomería y sistema de enfriamiento. Presupuestos gratis — Doctor Yachts.",
    h1: "Reparación de barcos en Fort Lauderdale — en el muelle, diagnóstico primero",
    intro:
      "Doctor Yachts da reparación de barcos y mantenimiento de yates en Fort Lauderdale y Broward—motor, eléctrico y sistemas, móvil y en el muelle.",
    content: [
      "Los dueños en Fort Lauderdale pueden contar con Doctor Yachts para reparaciones móviles y en el muelle. De sportfish y center consoles a cabin cruisers y motor yachts, trabajamos donde vive el bote cuando el acceso lo permite.",
      "Atendemos reparación de motores (interno y fuera de borda), reparación eléctrica de barcos, sistema de enfriamiento, sentina y plomería, y mantenimiento programado—incluido servicio 100 horas y 300 horas.",
      "Si busca un mecánico de yates en Fort Lauderdale por un no-arranque en el slip o un servicio antes de un viaje, primero diagnosticamos y damos presupuesto gratis del trabajo recomendado.",
      "Fort Lauderdale es de los mercados náuticos más densos del país—New River, Intracoastal, marinas cerca de Port Everglades y muelles privados. La reparación móvil aquí a menudo gana a esperar remolque o cupo de yard para no-arranques, carga y sobrecalentamiento.",
    ],
    marinasNote:
      "Trabajamos en el muelle en marinas y muelles privados de Fort Lauderdale y Broward cuando hay acceso—incluido New River, Intracoastal y Port Everglades. Comparta marina, slip y portón al reservar.",
    keywords: [
      "reparación de barcos Fort Lauderdale",
      "mecánico de yates Fort Lauderdale",
      "mecánico náutico Fort Lauderdale",
      "mantenimiento de yates Fort Lauderdale",
    ],
    faqs: [
      {
        question: "¿Dan reparación en el muelle en Fort Lauderdale?",
        answer:
          "Sí. Cuando hay acceso, hacemos servicio en marina y muelle en Fort Lauderdale para motores, eléctrico, diagnóstico y mantenimiento—muchos trabajos no piden haul-out.",
      },
      {
        question: "¿Qué zonas cerca de Fort Lauderdale cubren?",
        answer:
          "Fort Lauderdale y el resto de Broward, incluidos Dania Beach, Hollywood y Hallandale. Pregunte al reservar si no está seguro del acceso.",
      },
      {
        question: "¿Hay presupuesto gratis?",
        answer:
          "Sí. Después de entender síntomas y ubicación, damos presupuesto gratis del trabajo recomendado antes de piezas y mano de obra mayores.",
      },
    ],
  },
  miami: {
    seoTitle: "Reparación de barcos | Doctor Yachts | Miami y Miami Beach, FL",
    seoDescription:
      "Reparación de barcos en Miami y Miami Beach. Motor, eléctrico y mantenimiento móvil. Presupuestos gratis — Doctor Yachts.",
    h1: "Reparación de barcos y servicio náutico móvil en Miami y Miami Beach",
    intro:
      "De Miami Beach a Biscayne Bay, Doctor Yachts da reparación de barcos y mecánico de yates—motores, eléctrico, diagnóstico y mantenimiento, con disciplina de muelle.",
    content: [
      "Los dueños en Miami necesitan reparación náutica competente: sal, uso todo el año y cargas eléctricas complejas. Doctor Yachts es la alternativa de mecánico a las listas de espera y a adivinar piezas.",
      "Quien busca reparación de barcos en Miami, un mecánico náutico o servicio de yates cerca de Miami Beach recibe diagnóstico primero: no-arranque, sobrecalentamiento, carga, generador, sentina y mantenimiento de temporada.",
      "Coordinamos acceso a marinas y muelles privados en Miami-Dade cuando el trabajo lo permite. Prioridad a seguridad y no-arranques según agenda.",
    ],
    marinasNote:
      "El acceso en Miami y Miami Beach varía por propiedad. Incluya marina, slip e instrucciones de seguridad en la reserva.",
    keywords: [
      "mecánico de yates Miami",
      "reparación de barcos Miami",
      "mecánico náutico Miami Beach",
    ],
    faqs: [
      {
        question: "¿Dan reparación móvil en Miami?",
        answer:
          "Sí. Reparación en el muelle y móvil en Miami y Miami Beach cuando el acceso y la agenda lo permiten.",
      },
      {
        question: "¿Atienden Miami Beach?",
        answer:
          "Sí. Miami Beach y Biscayne Bay son parte de la cobertura del sur de la Florida. Comparta la ubicación al reservar.",
      },
    ],
  },
  "palm-beach": {
    seoTitle: "Mecánico de yates Palm Beach FL | Doctor Yachts",
    seoDescription:
      "Mecánico de yates y botes en el condado de Palm Beach—motor, eléctrico, diagnóstico y mantenimiento en el muelle.",
    h1: "Mecánico de yates y botes en el condado de Palm Beach, FL",
    intro:
      "Doctor Yachts atiende Palm Beach, West Palm Beach y el condado con mecánica náutica precisa—motor, mantenimiento de yates, eléctrico y servicio en el muelle.",
    content: [
      "En el condado de Palm Beach se espera un servicio discreto y de buen estándar. Llevamos oficio de mecánico de yates a muelles privados y marinas—de Palm Beach a West Palm Beach.",
      "Nos enfocamos en confiabilidad: diagnóstico y reparación de motor, eléctrico, generador, sentina y mantenimiento programado antes de temporada o un crucero largo.",
      "Comunidades con portón y muelles privados son comunes al norte de Broward. Deje códigos, ubicación del muelle y datos de la embarcación al reservar.",
    ],
    marinasNote:
      "Muelles privados y comunidades con portón son comunes. Dé instrucciones de acceso al reservar.",
    keywords: [
      "mecánico de yates Palm Beach",
      "reparación de barcos West Palm Beach",
      "mecánico náutico condado de Palm Beach",
    ],
    faqs: [
      {
        question: "¿Atienden West Palm Beach y Palm Beach?",
        answer:
          "Sí. El condado de Palm Beach, incluyendo Palm Beach, West Palm Beach y marinas del Intracoastal y muelles privados.",
      },
    ],
  },
  "dania-beach": {
    seoTitle: "Reparación de barcos Dania Beach FL | Doctor Yachts",
    seoDescription:
      "Reparación de barcos en Dania Beach—motor, eléctrico y mantenimiento móvil cerca de Fort Lauderdale. Presupuestos gratis — Doctor Yachts.",
    h1: "Reparación de barcos en Dania Beach, FL",
    intro:
      "Doctor Yachts da reparación de barcos y mecánico móvil para marinas y muelles de Dania Beach—a minutos del corredor de Fort Lauderdale.",
    content: [
      "Dania Beach está en el centro del boating de Broward. Quien busca reparación de barcos en Dania Beach suele necesitar el mismo motor, eléctrico y mantenimiento que hacemos a diario en Fort Lauderdale.",
      "Vamos al muelle cuando hay acceso para no-arranques, sobrecalentamiento, carga y servicio programado. Presupuesto gratis cuando entendemos síntomas y ubicación.",
      "Si el bote está entre Hollywood y Fort Lauderdale, Dania Beach es cobertura núcleo—no una llamada rara.",
    ],
    marinasNote: "Comparta marina y slip al reservar. Dania Beach es cobertura rutinaria de Broward.",
    keywords: ["reparación de barcos Dania Beach", "mecánico náutico Dania Beach"],
    faqs: [
      {
        question: "¿Atienden botes en Dania Beach?",
        answer: "Sí. Muelles y marinas de Dania Beach son parte de la cobertura móvil y de muelle de Broward.",
      },
    ],
  },
  "hollywood-fl": {
    seoTitle: "Reparación de barcos Hollywood FL | Doctor Yachts",
    seoDescription:
      "Reparación de barcos en Hollywood, FL—mecánico móvil para motores, eléctrico y mantenimiento. Presupuestos gratis — Doctor Yachts.",
    h1: "Reparación de barcos en Hollywood, Florida",
    intro:
      "Reparación móvil y mecánico en el muelle para dueños en Hollywood, FL—motores, eléctrico y mantenimiento, sin siempre remolcar primero.",
    content: [
      "Los boteros de Hollywood, FL quedan entre las opciones de Miami-Dade y Fort Lauderdale. Doctor Yachts cubre muelles de Hollywood para reparación móvil, fuera de borda, internos y fallas eléctricas.",
      "Pida presupuesto gratis con marina y síntomas. Confirmamos acceso y si el trabajo se cierra en el muelle o pide otro camino.",
    ],
    marinasNote: "Incluya marina, slip y notas de parqueo para llamadas en Hollywood.",
    keywords: ["reparación de barcos Hollywood FL", "mecánico de botes Hollywood Florida"],
    faqs: [
      {
        question: "¿Van a Hollywood, FL a reparar botes?",
        answer:
          "Sí. Hollywood está en la cobertura móvil de Broward para motor, eléctrico y mantenimiento en el muelle cuando hay acceso.",
      },
    ],
  },
  "pompano-beach": {
    seoTitle: "Reparación móvil de barcos | Doctor Yachts | Pompano Beach, FL",
    seoDescription:
      "Reparación móvil de barcos en Pompano Beach. Motores, eléctrico, mantenimiento y servicio en el muelle. Presupuestos gratis — Doctor Yachts.",
    h1: "Reparación móvil de barcos en Pompano Beach, FL",
    intro:
      "Reparación móvil en Pompano Beach—motor, eléctrico y sistemas en sitio para volver al agua.",
    content: [
      "Cuando el bote necesita reparación para volver al agua, Doctor Yachts atiende Pompano Beach y muelles cercanos de Broward. Reparación móvil significa que vamos a la marina, muelle privado o guarda cuando hay acceso.",
      "Pompano Beach y Lighthouse Point suelen querer lo mismo que Fort Lauderdale: un mecánico que llega preparado, diagnostica antes de las piezas y recupera el viaje del fin de semana.",
    ],
    marinasNote:
      "Comparta marina, slip y acceso al portón. Pompano Beach y Lighthouse Point son cobertura rutinaria.",
    keywords: ["reparación móvil de barcos Pompano Beach", "mecánico de botes Pompano"],
    faqs: [
      {
        question: "¿Dan reparación móvil en Pompano Beach?",
        answer:
          "Sí. Reparación en sitio y en el muelle en Pompano Beach y Broward cercano cuando hay acceso y agenda.",
      },
    ],
  },
};

export function localizeLocation(loc: Location, locale: Locale): Location {
  if (locale !== "es") return loc;
  const overlay = es[loc.slug];
  return overlay ? { ...loc, ...overlay } : loc;
}

export function getLocalizedLocation(slug: string, locale: Locale) {
  const loc = locations.find((l) => l.slug === slug);
  return loc ? localizeLocation(loc, locale) : undefined;
}
