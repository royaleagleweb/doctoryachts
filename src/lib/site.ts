import { cityListText, primaryMarket } from "./locations";

export const site = {
  name: "Doctor Yachts",
  tagline: "The Mechanic for Boats & Yachts",
  /** Primary domain for sitemap, canonicals, and structured data. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://doctoryachts.com",
  description:
    "Boat repair & boat maintenance in Fort Lauderdale, Pompano Beach & Miami, FL. Mobile/dockside marine engine repair, electrical, and maintenance. Free estimates — Doctor Yachts.",
  email: "office@doctoryachts.com",
  phone: "(347) 951-5710",
  phoneHref: "tel:+13479515710",
  address: "Serving marinas & private docks across South Florida",
  serviceArea: `${primaryMarket} — ${cityListText}`,
  region: primaryMarket,
  hours: "Mon–Sat · 7:00 AM – 6:00 PM",
  hoursSchema: ["Mo-Sa 07:00-18:00"],
  freeEstimates: true,
  /** Set real profile URLs when ready; empty = hidden in UI */
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

/** Primary + secondary keywords (aligned to Drew's Marine keyword bank + yacht mechanic). */
export const seoKeywords = [
  "boat repair Fort Lauderdale",
  "boat repair Pompano Beach",
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
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Areas" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
] as const;

/** Sitewide FAQ corpus for AEO (visible on /faq + schema). Keep answers ~40–80 words. */
export const homeFaqs = [
  {
    question: "Where does Doctor Yachts provide boat mechanic service?",
    answer:
      "We serve South Florida—including Fort Lauderdale, Pompano Beach, Miami / Miami Beach, and Palm Beach County—with mobile and dockside service when access allows.",
  },
  {
    question: "What does a boat mechanic do?",
    answer:
      "A boat mechanic diagnoses and repairs marine engines, electrical systems, cooling, pumps, and related systems. Doctor Yachts uses a diagnose-first process so you understand the fault before parts are replaced.",
  },
  {
    question: "Do you offer mobile boat repair in Fort Lauderdale and Pompano Beach?",
    answer:
      "Yes. Mobile and dockside boat repair is a core service for no-starts, electrical issues, cooling problems, and many maintenance jobs when the marina or private dock is accessible.",
  },
  {
    question: "Do you give free estimates?",
    answer:
      "Yes. After we understand the symptoms and location, we provide free estimates for recommended repair work so you can decide before authorizing parts and labor.",
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
