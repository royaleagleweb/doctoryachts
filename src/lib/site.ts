import { cityListText, primaryMarket } from "./locations";

export const site = {
  name: "Doctor Yachts",
  tagline: "The mechanic who comes to the boat.",
  taglineEs: "El mecánico que va al barco.",
  owner: "Roy Bachar",
  /** Primary domain for sitemap, canonicals, and structured data. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://doctoryachts.com",
  description:
    "Mobile boat mechanic in Fort Lauderdale and South Florida. We come to the boat—engines, outboards, electrical, cooling, maintenance, and plumbing. Diagnose first. Free estimates. Call (954) 770-1910.",
  descriptionEs:
    "Mecánico de botes móvil en Fort Lauderdale y el sur de la Florida. Vamos al barco: motores, fuera de borda, eléctrico, enfriamiento, mantenimiento y plomería. Primero diagnosticamos. Presupuestos gratis. Llame al (954) 770-1910.",
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
  freeEstimates: true,
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
  "boat plumbing repair Fort Lauderdale",
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

/** Homepage hire-intent FAQs (also used in FAQPage schema). */
export const homeFaqs = [
  {
    question: "Where does Doctor Yachts work?",
    answer:
      "Fort Lauderdale, Miami, Palm Beach County, Dania Beach, Hollywood, and Pompano Beach—plus nearby South Florida docks—with mobile and dockside service when access allows.",
  },
  {
    question: "Do you offer mobile boat repair in Fort Lauderdale?",
    answer:
      "Yes. We come to the boat at Fort Lauderdale marinas and private docks when access allows. Diagnostics is how we work a visit, not a separate page. Many no-starts, electrical, cooling, and maintenance jobs never need a tow first.",
  },
  {
    question: "Do you give free estimates?",
    answer:
      "Yes. After we understand the symptoms and location, we provide free estimates for recommended repair work so you can decide before authorizing parts and labor.",
  },
  {
    question: "What should I do if my boat won’t start?",
    answer:
      "Check battery connections, kill switch, and fuel basics first. If it still won’t start, stop guessing parts and book a visit—especially for weak cranking or intermittent electrical faults. Call (954) 770-1910.",
  },
  {
    question: "Why is my boat engine overheating?",
    answer:
      "Most overheating is restricted raw-water flow: impeller, strainer, intake, thermostat, or heat exchanger issues. Reduce load and shut down if temperatures keep rising, then schedule cooling system repair.",
  },
  {
    question: "Do you repair both boats and yachts?",
    answer:
      "Yes. We service recreational boats and yachts—center consoles, cabin cruisers, sport yachts, motor yachts, and more—matched to vessel systems and access.",
  },
] as const;
