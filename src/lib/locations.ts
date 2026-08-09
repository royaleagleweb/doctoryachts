export type Location = {
  slug: string;
  name: string;
  shortName: string;
  state: string;
  region: string;
  /** Primary SEO title (without brand) */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  content: string[];
  neighborhoods: string[];
  marinasNote: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

/** South Florida markets for local organic SEO. */
export const locations: Location[] = [
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    shortName: "Fort Lauderdale",
    state: "FL",
    region: "Broward County",
    seoTitle: "Boat Repair | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Get expert mobile boat repair & maintenance in Fort Lauderdale, FL. Engines, electrical, plumbing & cooling system repairs. Free estimates — Doctor Yachts.",
    h1: "Don't wait to get boat repairs in the Fort Lauderdale, FL area",
    intro:
      "Doctor Yachts provides boat repair and boat maintenance for Fort Lauderdale and Broward—mobile and dockside marine engine repair, electrical, and systems service.",
    content: [
      "Boat owners throughout the Fort Lauderdale, FL area can depend on Doctor Yachts for quality mobile and dockside repairs. From sportfish and center consoles to cabin cruisers and motor yachts, we work where the boat lives whenever access allows.",
      "We handle marine engine repair (inboard and outboard), boat electrical repairs, cooling system issues, bilge and plumbing systems, and scheduled boat maintenance.",
      "If you need a trusted boat mechanic in Fort Lauderdale for a no-start at the slip or planned service before a trip, we diagnose first and give free estimates on recommended work.",
      "Fort Lauderdale is one of the densest boating markets in the U.S.—New River, Intracoastal, Port Everglades–adjacent marinas, and private docks all demand different access logistics. Mobile boat repair here often beats waiting on a tow or yard slot for no-starts, charging faults, and overheating.",
      "Searchers looking for boat repair Fort Lauderdale, outboard motor repair, or a mobile boat mechanic near Las Olas and East Fort Lauderdale get a diagnose-first independent mechanic—not a brokerage or detailing package upsell.",
    ],
    neighborhoods: [
      "Las Olas / New River",
      "Intracoastal waterways",
      "Port Everglades area",
      "East Fort Lauderdale docks",
      "Harbor Beach",
      "Rio Vista",
      "Dania Beach marinas",
      "Hollywood / Hallandale docks",
    ],
    marinasNote:
      "We routinely work dockside at Fort Lauderdale and Broward marinas and private docks when access allows—including New River, Intracoastal, and Port Everglades–adjacent marinas. Share your marina, slip, and gate details when you book.",
    keywords: [
      "boat repair Fort Lauderdale",
      "boat mechanic Fort Lauderdale",
      "mobile boat mechanic Fort Lauderdale",
      "yacht repair Fort Lauderdale",
      "outboard motor repair Fort Lauderdale",
      "marine engine repair Fort Lauderdale",
      "dockside boat repair Fort Lauderdale",
      "emergency boat repair Fort Lauderdale",
      "boat maintenance Fort Lauderdale",
      "boat repair near me Fort Lauderdale",
    ],
    faqs: [
      {
        question: "Do you provide dockside boat repair in Fort Lauderdale?",
        answer:
          "Yes. When access allows, we perform Fort Lauderdale dockside and marina service for engines, electrical, diagnostics, and maintenance—so many jobs don’t require a haul-out.",
      },
      {
        question: "What areas near Fort Lauderdale do you cover?",
        answer:
          "We serve Fort Lauderdale and greater Broward, including nearby marina corridors such as Dania Beach, Hollywood, and Hallandale. Ask when booking if you’re unsure about access.",
      },
      {
        question: "Do you offer free estimates for Fort Lauderdale boat repair?",
        answer:
          "Yes. After we understand symptoms and location, we provide free estimates for recommended work before you authorize major parts and labor.",
      },
      {
        question: "Can you do emergency boat repair in Fort Lauderdale?",
        answer:
          "We triage urgent no-starts, overheating, and safety-critical issues when capacity allows. Call for the fastest response; book online for planned work.",
      },
    ],
  },
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    shortName: "Pompano Beach",
    state: "FL",
    region: "Broward County",
    seoTitle: "Mobile Boat Repair | Doctor Yachts | Pompano Beach, FL",
    seoDescription:
      "Get reliable mobile boat repair services in Pompano Beach, FL. Engines, electrical, maintenance & dockside service. Free estimates — Doctor Yachts.",
    h1: "Mobile boat repair in Pompano Beach, FL",
    intro:
      "We offer mobile boat repairs and more in Pompano Beach, FL—on-site engine, electrical, and systems service so you can get back on the water.",
    content: [
      "When your boat needs repairs so you can enjoy the water again, Doctor Yachts is ready to help in Pompano Beach and nearby Broward docks. Mobile boat repair means we come to the marina, private dock, or storage when access allows.",
      "We can lend a hand with marine engine repair, boat electrical repairs, cooling system service, boat plumbing and bilge issues, and routine boat maintenance.",
      "Call for a free estimate or book online. Whether the vessel is at home or the dock, reliable boat services for a thriving coastal community are what we do.",
      "Pompano Beach and Lighthouse Point owners often want the same outcome as Fort Lauderdale searchers: a mobile boat mechanic who shows up prepared, diagnoses before parts, and gets the weekend trip back on track. Hillsboro Inlet–area docks and Intracoastal slips are routine coverage.",
    ],
    neighborhoods: [
      "Hillsboro Inlet area",
      "Intracoastal Pompano",
      "Lighthouse Point docks",
      "Deerfield Beach waterways",
      "Local marinas & private docks",
    ],
    marinasNote:
      "Share marina name, slip, and gate access when you book. Pompano Beach and Lighthouse Point docks are routine coverage for mobile work.",
    keywords: [
      "mobile boat repair Pompano Beach",
      "boat repair Pompano Beach FL",
      "boat mechanic Pompano Beach",
      "dockside boat repair Pompano",
      "marine engine repair Pompano Beach",
    ],
    faqs: [
      {
        question: "Do you offer mobile boat repair in Pompano Beach?",
        answer:
          "Yes. We provide on-site and dockside boat repair in Pompano Beach and nearby Broward locations when access and scheduling allow.",
      },
      {
        question: "Do you cover Lighthouse Point?",
        answer:
          "Yes. Lighthouse Point and nearby Intracoastal docks are part of our Broward mobile coverage. Confirm access details when you book.",
      },
      {
        question: "What boat problems do you fix in Pompano Beach?",
        answer:
          "No-starts, electrical and charging faults, overheating/cooling issues, bilge and pumps, outboard and inboard engine repair, and scheduled boat maintenance—dockside when access allows.",
      },
    ],
  },
  {
    slug: "miami",
    name: "Miami",
    shortName: "Miami",
    state: "FL",
    region: "Miami-Dade County",
    seoTitle: "Boat Repair | Doctor Yachts | Miami & Miami Beach, FL",
    seoDescription:
      "Get expert boat repair in Miami & Miami Beach, FL. Mobile engine, electrical & maintenance service. Free estimates — Doctor Yachts.",
    h1: "Boat repair and mobile marine service in Miami & Miami Beach",
    intro:
      "From Miami Beach to Biscayne Bay and Miami marinas, Doctor Yachts delivers specialist boat repair and yacht mechanic service—engines, electrical systems, diagnostics, and maintenance with dockside discipline.",
    content: [
      "Miami boat owners need fast, competent marine repair: salt exposure, year-round use, and complex electrical loads on modern center consoles and yachts. Doctor Yachts is the mechanic-focused alternative to waitlists and guesswork.",
      "Searchers looking for boat repair Miami, a Miami boat mechanic, or yacht service near Miami Beach get diagnostic-first work: no-start diagnosis, overheating, charging faults, generator issues, bilge reliability, and seasonal maintenance.",
      "We coordinate marina and private dock access across Miami-Dade when the job allows. Priority response is available for safety-critical and no-start situations subject to schedule.",
      "From Biscayne Bay to Miami Beach and north toward Aventura, access rules vary by property. Include marina name, slip, parking, and security notes when you book so mobile service can confirm the visit without delay.",
    ],
    neighborhoods: [
      "Miami Beach",
      "Biscayne Bay",
      "Coconut Grove",
      "Key Biscayne",
      "Aventura / North Miami docks",
      "Downtown / Brickell marina access",
      "Coral Gables waterways",
    ],
    marinasNote:
      "Miami and Miami Beach marina access varies by property. Include marina name, slip, and any security instructions in your booking notes.",
    keywords: [
      "boat mechanic Miami",
      "yacht mechanic Miami",
      "boat repair Miami",
      "boat repair Miami Beach",
      "yacht repair Miami FL",
      "mobile boat mechanic Miami",
      "marine electrical Miami",
    ],
    faqs: [
      {
        question: "Do you offer mobile boat repair in Miami?",
        answer:
          "Yes. We provide dockside and mobile-ready boat repair across Miami and Miami Beach when access and scheduling allow—ideal for no-start, electrical, and many maintenance jobs.",
      },
      {
        question: "Can you service boats in Miami Beach?",
        answer:
          "Yes. Miami Beach and nearby Biscayne Bay docks are part of our South Florida coverage. Share location details when you book for the fastest confirmation.",
      },
      {
        question: "Do you repair both boats and yachts in Miami?",
        answer:
          "Yes. We service recreational boats and yachts—center consoles through motor yachts—matched to systems complexity and dock access.",
      },
    ],
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    shortName: "Palm Beach",
    state: "FL",
    region: "Palm Beach County",
    seoTitle: "Yacht & Boat Mechanic Palm Beach FL",
    seoDescription:
      "Yacht and boat mechanic service in Palm Beach County—engine repair, marine electrical, diagnostics, and dockside maintenance for West Palm Beach, Palm Beach, and nearby marinas.",
    h1: "Yacht & boat mechanic in Palm Beach County, FL",
    intro:
      "Doctor Yachts serves Palm Beach, West Palm Beach, and Palm Beach County with precision marine mechanics—yacht engine repair, boat maintenance, electrical systems, and dockside service.",
    content: [
      "Palm Beach County owners expect discreet, high-standard service. Doctor Yachts brings specialist yacht mechanic skill to private docks and marinas—from Palm Beach to West Palm Beach and surrounding waterways.",
      "We focus on reliability: engine diagnostics and repair, marine electrical troubleshooting, generator service, bilge and systems care, and scheduled boat maintenance before season or extended cruising.",
      "If you’re searching for a Palm Beach boat mechanic or yacht repair near West Palm Beach, you’ll get clear findings, professional dockside manners, and a plan that prioritizes what actually needs fixing.",
      "Gated communities and private docks are common north of Broward. Provide gate codes, dock location, and vessel details when booking so service arrives prepared and on time.",
    ],
    neighborhoods: [
      "Palm Beach",
      "West Palm Beach",
      "Lake Worth / Lantana docks",
      "Jupiter / northern Palm Beach County",
      "Boynton Beach waterways",
      "Intracoastal Palm Beach County",
    ],
    marinasNote:
      "Private docks and gated communities are common in Palm Beach County. Provide access instructions when booking so service arrives prepared.",
    keywords: [
      "yacht mechanic Palm Beach",
      "boat mechanic Palm Beach",
      "yacht repair West Palm Beach",
      "boat repair Palm Beach County",
      "marine mechanic West Palm Beach",
      "dockside boat service Palm Beach",
    ],
    faqs: [
      {
        question: "Do you service West Palm Beach and Palm Beach?",
        answer:
          "Yes. We serve Palm Beach County including Palm Beach, West Palm Beach, and nearby Intracoastal marinas and private docks.",
      },
      {
        question: "Can you work at a private dock in Palm Beach?",
        answer:
          "Yes, when access is arranged. Share gate codes, dock location, and vessel details in your booking so we can plan the visit correctly.",
      },
    ],
  },
  {
    slug: "dania-beach",
    name: "Dania Beach",
    shortName: "Dania Beach",
    state: "FL",
    region: "Broward County",
    seoTitle: "Boat Repair Dania Beach FL | Doctor Yachts",
    seoDescription:
      "Boat repair in Dania Beach, FL—mobile and dockside marine engine, electrical, and maintenance near Fort Lauderdale. Free estimates — Doctor Yachts.",
    h1: "Boat repair in Dania Beach, FL",
    intro:
      "Doctor Yachts provides boat repair and mobile mechanic service for Dania Beach marinas and docks—minutes from Fort Lauderdale’s service corridor.",
    content: [
      "Dania Beach sits in the middle of Broward boating. Owners searching for boat repair Dania Beach often need the same mobile engine, electrical, and maintenance work we do daily in Fort Lauderdale.",
      "We come dockside when access allows for no-starts, overheating, charging issues, and scheduled service. Free estimates after we understand symptoms and location.",
      "If your boat is between Hollywood and Fort Lauderdale, Dania Beach is core coverage—not a stretch call.",
      "Many Dania Beach owners compare Fort Lauderdale yards with mobile service. For intermittent electrical faults, outboard no-starts, and impeller/cooling jobs, dockside diagnosis is often the faster path—especially when the boat is already in a working slip.",
      "We treat Dania Beach as part of the same Broward coverage as Fort Lauderdale: diagnose first, free estimates on recommended work, and honest guidance when a job needs haul-out instead of mobile repair.",
    ],
    neighborhoods: [
      "Dania Beach marinas",
      "Intracoastal Dania",
      "Near Fort Lauderdale border docks",
    ],
    marinasNote: "Share marina name and slip when booking. Dania Beach is routine Broward coverage.",
    keywords: [
      "boat repair Dania Beach",
      "boat mechanic Dania Beach FL",
      "mobile boat repair Dania Beach",
      "marine service Dania Beach",
    ],
    faqs: [
      {
        question: "Do you service boats in Dania Beach?",
        answer:
          "Yes. Dania Beach docks and marinas are part of our Broward mobile and dockside coverage.",
      },
      {
        question: "What services are available in Dania Beach?",
        answer:
          "Marine engine and outboard repair, boat electrical repairs, cooling system service, bilge/plumbing, diagnostics, maintenance, and mobile dockside visits when access allows.",
      },
      {
        question: "Is Dania Beach covered the same as Fort Lauderdale?",
        answer:
          "Yes. Dania Beach is core Broward coverage—not a rare stretch call. Share marina and symptoms when you book for the fastest confirmation.",
      },
    ],
  },
  {
    slug: "hollywood-fl",
    name: "Hollywood",
    shortName: "Hollywood",
    state: "FL",
    region: "Broward County",
    seoTitle: "Boat Repair Hollywood FL | Doctor Yachts",
    seoDescription:
      "Boat repair in Hollywood, FL—mobile dockside mechanic for engines, electrical, and maintenance. Free estimates — Doctor Yachts.",
    h1: "Boat repair in Hollywood, Florida",
    intro:
      "Mobile boat repair and dockside mechanic service for Hollywood, FL owners—engines, electrical, and maintenance without always towing first.",
    content: [
      "Hollywood, FL boaters sit between Miami-Dade and Fort Lauderdale service options. Doctor Yachts covers Hollywood docks for mobile boat repair, outboard and inboard issues, and electrical faults.",
      "Book a free estimate with your marina and symptoms. We’ll confirm access and whether the job is a dockside fix or needs a different path.",
      "Owners searching for boat repair Hollywood FL or a boat mechanic near Hallandale often need weekend reliability: no-starts, weak charging, overheating, and bilge pump failures. We diagnose at the dock when access allows so you are not always towing first.",
      "Hollywood Intracoastal and nearby private docks are within routine Broward coverage. Include marina name, slip, parking, and gate details when you book so mobile service can plan the visit correctly.",
      "Free estimates after we understand the symptom and location. Same diagnose-first standard as our Fort Lauderdale and Pompano Beach work.",
    ],
    neighborhoods: [
      "Hollywood Intracoastal",
      "North / South Hollywood docks",
      "Near Hallandale border",
    ],
    marinasNote: "Include marina, slip, and parking notes for Hollywood service calls.",
    keywords: [
      "boat repair Hollywood FL",
      "boat mechanic Hollywood Florida",
      "mobile boat repair Hollywood FL",
      "boat repair Hallandale",
      "dockside boat mechanic Hollywood",
    ],
    faqs: [
      {
        question: "Do you come to Hollywood, FL for boat repair?",
        answer:
          "Yes. Hollywood is within our Broward mobile coverage for dockside engine, electrical, and maintenance work when access allows.",
      },
      {
        question: "Do you cover Hallandale area docks?",
        answer:
          "Yes. Hallandale-border docks near Hollywood are typically within coverage. Confirm access details when you book.",
      },
      {
        question: "What boat problems do you fix in Hollywood?",
        answer:
          "No-starts, electrical and charging issues, overheating/cooling, outboard and inboard engine repair, bilge/pumps, diagnostics, and scheduled maintenance.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export const primaryMarket = "South Florida";
export const cityList = locations.map((l) => l.name);
export const cityListText =
  "Fort Lauderdale, Pompano Beach, Dania Beach, Hollywood, Miami, and Palm Beach";
