import type { Locale } from "./i18n";
import { site } from "./site";

export const MONTHLY_PACKAGES_ID = "monthly-packages";

export type MonthlyPackage = {
  id: "essential" | "systems" | "full";
  name: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export type MonthlyPackagesCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  note: string;
  pricingLabel: string;
  bookLabel: string;
  estimateLabel: string;
  notIncludedTitle: string;
  notIncluded: string[];
  packages: MonthlyPackage[];
};

const en: MonthlyPackagesCopy = {
  eyebrow: "Monthly care",
  title: "Monthly maintenance packages",
  lead: "Three dockside plans for Fort Lauderdale and South Florida boats. A scheduled walkthrough, systems checks, and a report you can keep—not a marina membership and not a haul-out club.",
  note: `Call ${site.phone} for package pricing. Recommended repair work still follows the shop path: diagnose first, then a free estimate before major parts. Book the visit when you want us at the slip; use a free estimate if you only want guidance first.`,
  pricingLabel: "Call for package pricing",
  bookLabel: "Book a visit",
  estimateLabel: "Get a free estimate",
  notIncludedTitle: "What these are not",
  notIncluded: [
    "Haul-outs, bottom paint, or travel-lift work",
    "A marina membership or unlimited emergency callouts",
    "A substitute for 100-hour or 300-hour interval service",
  ],
  packages: [
    {
      id: "essential",
      name: "Essential Monthly",
      summary:
        "A dockside walkthrough so you know the boat is trip-ready—or you know what isn’t.",
      includes: [
        "Bilge and pumps glance",
        "Battery and charging check",
        "Visual zincs / anodes note",
        "Fluid levels",
        "Basic systems look",
        "Short written report",
      ],
    },
    {
      id: "systems",
      name: "Systems Plus",
      summary:
        "Essential Monthly plus the systems that strand South Florida boats most: electrical, cooling, and plumbing.",
      includes: [
        "Everything in Essential Monthly",
        "Electrical panel and grounds spot-check",
        "Cooling / raw-water health check",
        "Plumbing, heads, and freshwater quick check",
        "Outboard or engine run-up when the boat is accessible and safe to run",
      ],
    },
    {
      id: "full",
      name: "Full Care",
      featured: true,
      summary:
        "Systems Plus with priority scheduling, Florida season notes, and a written monthly log toward the next interval visit.",
      includes: [
        "Everything in Systems Plus",
        "Priority scheduling when the calendar allows",
        "Seasonal Florida prep notes — heat, salt, sitting weekends",
        "Coordination toward 100-hour and 300-hour service windows",
        "Written monthly log for the owner",
      ],
    },
  ],
};

const es: MonthlyPackagesCopy = {
  eyebrow: "Cuidado mensual",
  title: "Paquetes de mantenimiento mensual",
  lead: "Tres planes en el muelle para botes en Fort Lauderdale y el sur de la Florida. Un recorrido programado, chequeos de sistemas y un informe que puede guardar—no es membresía de marina ni un club de haul-out.",
  note: `Llame al ${site.phone} para el precio del paquete. El trabajo de reparación recomendado sigue el camino del taller: primero diagnosticamos, luego presupuesto gratis antes de piezas mayores. Reserve la visita cuando nos quiera en el slip; pida presupuesto gratis si solo quiere orientación primero.`,
  pricingLabel: "Llame para el precio del paquete",
  bookLabel: "Reservar visita",
  estimateLabel: "Pedir presupuesto gratis",
  notIncludedTitle: "Qué no son",
  notIncluded: [
    "Haul-outs, pintura de fondo ni travel-lift",
    "Membresía de marina ni emergencias ilimitadas",
    "Un sustituto del servicio 100 horas o 300 horas",
  ],
  packages: [
    {
      id: "essential",
      name: "Mensual esencial",
      summary:
        "Un recorrido en el muelle para saber si el bote está listo para salir—o qué no lo está.",
      includes: [
        "Mirada a sentina y bombas",
        "Chequeo de batería y carga",
        "Nota visual de zincs / ánodos",
        "Niveles de fluidos",
        "Mirada básica a los sistemas",
        "Informe corto por escrito",
      ],
    },
    {
      id: "systems",
      name: "Sistemas plus",
      summary:
        "Mensual esencial más los sistemas que más dejan varados a los botes del sur de la Florida: eléctrico, enfriamiento y plomería.",
      includes: [
        "Todo lo de Mensual esencial",
        "Chequeo puntual de tablero eléctrico y tierras",
        "Chequeo de enfriamiento / agua cruda",
        "Plomería, heads y agua dulce — revisión rápida",
        "Arranque de fuera de borda o motor cuando el bote es accesible y seguro de correr",
      ],
    },
    {
      id: "full",
      name: "Cuidado completo",
      featured: true,
      summary:
        "Sistemas plus con prioridad en la agenda, notas de temporada en Florida y una bitácora mensual hacia la próxima visita de intervalo.",
      includes: [
        "Todo lo de Sistemas plus",
        "Prioridad en la agenda cuando el calendario lo permite",
        "Notas de temporada en Florida — calor, sal, fines de semana parado",
        "Coordinación hacia las ventanas de servicio 100 horas y 300 horas",
        "Bitácora mensual escrita para el dueño",
      ],
    },
  ],
};

export function monthlyPackagesCopy(locale: Locale): MonthlyPackagesCopy {
  return locale === "es" ? es : en;
}
