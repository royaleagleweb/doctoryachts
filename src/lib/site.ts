import { cityListText, primaryMarket } from "./locations";

export const site = {
  name: "Doctor Yachts",
  tagline: "The mechanic who comes to the boat.",
  taglineEs: "El mecánico que va al barco.",
  /** Primary domain for sitemap, canonicals, and structured data. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://doctoryachts.com",
  description:
    "Boat repair & boat maintenance in Fort Lauderdale and South Florida. Mobile/dockside marine engine repair, electrical, and maintenance. Free estimate when you book — Doctor Yachts.",
  descriptionEs:
    "Reparación de barcos y mantenimiento de yates en Fort Lauderdale y el sur de la Florida. Mecánico náutico móvil/en el muelle: motor, eléctrico y servicio. Presupuesto gratis al reservar — Doctor Yachts.",
  email: "info@doctoryachts.com",
  phone: "(954) 770-1910",
  phoneHref: "tel:+19547701910",
  address: "Serving marinas & private docks across South Florida",
  addressEs: "Marinas y muelles privados en el sur de la Florida",
  streetAddress: "2029 SW 20th St",
  addressLocality: "Fort Lauderdale",
  addressRegion: "FL",
  postalCode: "33315",
  addressCountry: "US",
  serviceArea: `${primaryMarket} — ${cityListText}`,
  region: primaryMarket,
  hours: "Mon–Sat · 7:00 AM – 6:00 PM",
  hoursEs: "Lun–Sáb · 7:00 a. m. – 6:00 p. m.",
  hoursSchema: ["Mo-Sa 07:00-18:00"],
  /** Estimate is free only when the customer books the job. Estimate-only visits are $75, credited if we do the work. */
  estimateFeeUsd: 75,
  /** Set real profile URLs when ready; empty = hidden in UI */
  social: {
    instagram: "",
    facebook: "",
  },
  /** Public profiles used for sameAs + reviews links (do not invent extras) */
  profiles: {
    yelp: "https://www.yelp.com/biz/doctor-yachts-fort-lauderdale",
    google: "https://share.google/5bc4JtNqYSnIQCtRW",
  },
} as const;

/** Primary + secondary keywords (aligned to Drew's Marine keyword bank + yacht mechanic). */
export const seoKeywords = [
  "boat repair Fort Lauderdale",
  "boat repair South Florida",
  "boat maintenance Fort Lauderdale",
  "boat mechanic Fort Lauderdale",
  "mobile boat repair Fort Lauderdale",
  "dockside boat repair",
  "marine engine repair",
  "inboard engine repair",
  "outboard engine repair",
  "boat electrical repairs",
  "marine electronics installation",
  "yacht mechanic South Florida",
  "yacht repair Fort Lauderdale",
  "boat repair Miami",
  "boat mechanic Miami",
  "outboard engine maintenance",
  "cooling system repairs boat",
  "Doctor Yachts",
] as const;

export const navLinks = [
  { href: "/", label: "Home", labelEs: "Inicio", esHref: "/es" },
  { href: "/services", label: "Services", labelEs: "Servicios", esHref: "/es/servicios" },
  { href: "/locations", label: "Areas", labelEs: "Zonas", esHref: "/es/ubicaciones" },
  { href: "/guides", label: "Guides", labelEs: "Guías", esHref: "/guides" },
  { href: "/faq", label: "FAQ", labelEs: "Preguntas", esHref: "/es/preguntas" },
  { href: "/about", label: "About", labelEs: "Nosotros", esHref: "/es/nosotros" },
  { href: "/contact", label: "Contact", labelEs: "Contacto", esHref: "/es/contacto" },
  { href: "/book", label: "Book", labelEs: "Reservar", esHref: "/es/reservar" },
] as const;

/** Sitewide FAQ corpus for AEO (visible on /faq + schema). Keep answers ~40–80 words. */
export const homeFaqs = [
  {
    question: "Where does Doctor Yachts provide boat mechanic service?",
    answer:
      "We serve South Florida—including Fort Lauderdale, Miami / Miami Beach, and Palm Beach County—with mobile and dockside service when access allows.",
  },
  {
    question: "What does a boat mechanic do?",
    answer:
      "A boat mechanic diagnoses and repairs marine engines, electrical systems, cooling, pumps, and related systems. Doctor Yachts uses a diagnose-first process so you understand the fault before parts are replaced.",
  },
  {
    question: "Do you offer mobile boat repair in Fort Lauderdale and South Florida?",
    answer:
      "Yes. Mobile and dockside boat repair is a core service for no-starts, electrical issues, cooling problems, and many maintenance jobs when the marina or private dock is accessible.",
  },
  {
    question: "Do you give free estimates?",
    answer:
      "The estimate is free when you book the job with us. If you only want an estimate and do not proceed, there is a $75 fee. That $75 is credited toward the repair if we do the work.",
  },
  {
    question: "Do you repair both boats and yachts?",
    answer:
      "Yes. We service recreational boats and yachts—center consoles, cabin cruisers, sport yachts, motor yachts, and more—matched to vessel systems and access.",
  },
  {
    question: "How do I book boat repair?",
    answer:
      "Book online (service, vessel, schedule, contact) or call the shop. Include marina, slip, and symptoms so we can confirm the visit and bring the right tools.",
  },
  {
    question: "What should I do if my boat won’t start?",
    answer:
      "Check battery connections, kill switch, and fuel basics first. If it still won’t start, stop guessing parts and book mobile diagnostics—especially for weak cranking or intermittent electrical faults.",
  },
  {
    question: "Why is my boat engine overheating?",
    answer:
      "Most overheating is restricted raw-water flow: impeller, strainer, intake, thermostat, or heat exchanger issues. Reduce load and shut down if temperatures keep rising, then schedule cooling system repair.",
  },
] as const;

/** Customer-facing estimate policy (EN + ES). Use these instead of inventing “free estimate” language. */
export const estimatePolicy = {
  feeUsd: 75,
  en: {
    short: "Free estimate when you book the job with us.",
    line: "Free estimate when you book the job with us. Estimate-only visits are $75, credited toward your repair if we do the work.",
    meta: "Free estimate when you book the job. Estimate-only visits $75, credited if we do the work.",
    seoTail: "Estimate free when you book — Doctor Yachts.",
    cta: "Request an estimate",
    ctaInstead: "Request an estimate instead",
    tag: "Diagnose first · estimate free when you book",
    faqQ: "Do you give free estimates?",
    faqA:
      "The estimate is free when you book the job with us. If you only want an estimate and do not proceed, there is a $75 fee. That $75 is credited toward the repair if we do the work.",
  },
  es: {
    short: "Presupuesto gratis cuando reserva el trabajo con nosotros.",
    line: "Presupuesto gratis cuando reserva el trabajo con nosotros. Si solo quiere el presupuesto y no sigue con nosotros, hay un cargo de $75, que se descuenta de la reparación si hacemos el trabajo.",
    meta: "Presupuesto gratis al reservar el trabajo. Solo presupuesto: $75, acreditado si hacemos el trabajo.",
    seoTail: "Presupuesto gratis al reservar — Doctor Yachts.",
    cta: "Pedir presupuesto",
    ctaInstead: "Pedir presupuesto",
    tag: "Primero diagnosticamos · presupuesto gratis al reservar",
    faqQ: "¿Dan presupuestos gratis?",
    faqA:
      "El presupuesto es gratis cuando reserva el trabajo con nosotros. Si solo quiere el presupuesto y no sigue, hay un cargo de $75. Ese $75 se descuenta de la reparación si hacemos el trabajo.",
  },
} as const;
