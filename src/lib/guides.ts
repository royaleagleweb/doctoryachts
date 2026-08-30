export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  /** Direct answer for AEO / featured snippets (~40–60 words) */
  quickAnswer: string;
  h1: string;
  category: "engine" | "electrical" | "maintenance" | "mobile" | "general";
  keywords: string[];
  readTime: string;
  updated: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // service ids
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
};

/**
 * Full indexable guides optimized for SEO + AEO (Answer Engine Optimization).
 * Structure: quick answer first, then H2s as questions, lists, FAQs, schema-ready.
 */
export const guides: Guide[] = [
  {
    slug: "boat-wont-start-checklist",
    title: "Boat Won’t Start? A Practical Checklist",
    seoTitle: "Boat Won’t Start Checklist | Fort Lauderdale Boat Mechanic Tips",
    seoDescription:
      "Boat won’t start? Follow this free checklist for battery, fuel, safety cutoffs, and when to call a mobile boat mechanic in Fort Lauderdale or South Florida.",
    quickAnswer:
      "If your boat won’t start, check the battery charge and connections first, then kill switches and safety lanyards, fuel supply, and any engine alarms. If cranking is weak or silent, it’s often electrical. If it cranks strong but won’t fire, suspect fuel or sensors. Call a mobile boat mechanic when basic checks fail.",
    h1: "Boat won’t start? Free checklist before you call a mechanic",
    category: "engine",
    keywords: [
      "boat won't start",
      "boat won't start battery",
      "boat no start Fort Lauderdale",
      "mobile boat mechanic no start",
    ],
    readTime: "6 min",
    updated: "2026-08-06",
    relatedServices: ["engine-repair", "electrical"],
    howTo: {
      name: "What to check when a boat won’t start",
      description:
        "A practical on-the-dock checklist for boat owners before calling mobile boat repair.",
      steps: [
        {
          name: "Check battery voltage and connections",
          text: "Look for corrosion, loose terminals, and a battery that won’t hold charge. Weak cranking almost always points here first.",
        },
        {
          name: "Verify kill switch and safety lanyard",
          text: "Confirm the emergency stop is in the run position and the lanyard switch isn’t open.",
        },
        {
          name: "Confirm fuel supply",
          text: "Check fuel level, primer bulb firmness (outboards), fuel valve position, and any water in separators.",
        },
        {
          name: "Note alarms, codes, and last use",
          text: "Write down warning lights, beeps, recent work, and whether the boat sat for days or weeks.",
        },
        {
          name: "Call a mechanic if it still won’t start",
          text: "If basic checks fail, book mobile boat repair so diagnostics happen at the dock without a tow when possible.",
        },
      ],
    },
    sections: [
      {
        heading: "Why boats fail to start in South Florida",
        body: [
          "Heat, humidity, and salt accelerate battery and connection failures. Boats that sit between weekends often show parasitic draws, sulfated batteries, or sticky fuel issues—especially in Fort Lauderdale and South Florida marinas.",
          "A clean diagnosis separates “weak battery” from “starter,” “no fuel,” and “safety interlock.” Guessing parts costs more than a proper mobile diagnostic.",
        ],
      },
      {
        heading: "What a boat mechanic checks on a no-start call",
        body: [
          "Doctor Yachts typically verifies battery health under load, charging behavior, safety circuits, fuel delivery, and engine control signals. On modern outboards, scan tools and manufacturer procedures matter.",
        ],
        list: [
          "Battery load test and voltage drop",
          "Starter current draw (when relevant)",
          "Kill switch / neutral safety circuits",
          "Fuel pressure or primer circuit",
          "Codes / service history if available",
        ],
      },
      {
        heading: "When to book mobile boat repair vs haul-out",
        body: [
          "Most no-start jobs can start dockside. Haul-out is rarely the first step unless the boat is sinking, has a major leak, or the fault requires out-of-water access. If you’re in Fort Lauderdale or South Florida, mobile boat repair often gets you running faster.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a boat not start because of a bad battery even if lights turn on?",
        answer:
          "Yes. Lights can work while the battery still can’t deliver enough current to crank. That’s why a load test beats a simple dashboard glance.",
      },
      {
        question: "Should I jump-start my boat?",
        answer:
          "Jump-starting can get you home, but it can also hide a charging problem. If you jump-start, have the charging system tested soon so you’re not stranded again.",
      },
    ],
  },
  {
    slug: "why-is-my-boat-engine-overheating",
    title: "Why Is My Boat Engine Overheating?",
    seoTitle: "Boat Engine Overheating Causes & Fixes | South Florida",
    seoDescription:
      "Boat engine overheating? Common causes include impellers, clogged strainers, and heat exchangers. When to stop running and call cooling system repair in Fort Lauderdale.",
    quickAnswer:
      "Boat engines usually overheat from restricted raw-water flow—failed impellers, clogged sea strainers, blocked intakes, bad thermostats, or fouled heat exchangers. Stop running if temperatures climb. Check strainer and telltale stream on outboards, then book cooling system repair if flow stays weak.",
    h1: "Why is my boat engine overheating? Causes and next steps",
    category: "engine",
    keywords: [
      "boat engine overheating",
      "boat overheating impeller",
      "cooling system repairs boat",
      "outboard overheating Fort Lauderdale",
    ],
    readTime: "5 min",
    updated: "2026-08-06",
    relatedServices: ["cooling", "engine-repair"],
    howTo: {
      name: "What to do if your boat engine overheats",
      description: "Safe first steps when engine temperature rises on the water or at idle.",
      steps: [
        {
          name: "Reduce load and monitor temperature",
          text: "Throttle back. If temperature keeps rising, shut down to protect the engine.",
        },
        {
          name: "Check the telltale or raw-water discharge",
          text: "On many outboards, a weak or missing pee stream means no cooling flow.",
        },
        {
          name: "Inspect the sea strainer",
          text: "Clear debris if safe to do so at the dock. Never ignore repeated clogging.",
        },
        {
          name: "Book cooling system service",
          text: "Impellers, thermostats, and exchangers need hands-on diagnosis—especially after sand, grass, or long storage.",
        },
      ],
    },
    sections: [
      {
        heading: "Most common overheating causes",
        body: ["These account for the majority of South Florida cooling calls:"],
        list: [
          "Failed raw-water impeller",
          "Clogged sea strainer or intake",
          "Collapsed or blocked hose",
          "Stuck thermostat",
          "Fouled heat exchanger (inboards)",
          "Exhaust restriction (less common, serious)",
        ],
      },
      {
        heading: "Can I keep running if it’s only a little hot?",
        body: [
          "Don’t gamble. “A little hot” can become a warped head or seized engine. Idle to the nearest safe dock if temperatures are elevated, then schedule cooling system repairs in Fort Lauderdale or South Florida.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I replace a marine impeller?",
        answer:
          "Many manufacturers suggest inspection or replacement on a schedule (often annually or by hours). In silty or grassy water, inspect more often—especially before long trips.",
      },
      {
        question: "Do you fix overheating at the dock?",
        answer:
          "Yes. Many impeller, strainer, hose, and thermostat jobs are done dockside. Complex exchanger work may need shop or haul-out planning.",
      },
    ],
  },
  {
    slug: "how-often-to-service-a-boat-in-florida",
    title: "How Often Should You Service a Boat in Florida?",
    seoTitle: "How Often to Service a Boat in Florida | Maintenance Guide",
    seoDescription:
      "How often to service a boat in Florida: saltwater intervals, oil changes, impellers, zincs, and batteries. Local advice for Fort Lauderdale & South Florida owners.",
    quickAnswer:
      "In Florida saltwater use, service a boat at least annually—and by engine hours per the manufacturer. Many owners do oil and filters every 50–100 hours, inspect impellers and zincs yearly, and check batteries before peak season. Heavy use or neglected storage may need more frequent service.",
    h1: "How often should you service a boat in Florida?",
    category: "maintenance",
    keywords: [
      "how often service boat Florida",
      "boat maintenance schedule Florida",
      "boat oil change interval",
      "South Florida boat maintenance",
    ],
    readTime: "5 min",
    updated: "2026-08-06",
    relatedServices: ["maintenance", "engine-repair", "electrical"],
    sections: [
      {
        heading: "Why Florida boats need a tighter schedule",
        body: [
          "Salt, heat, and year-round growth punish cooling systems, electrical connections, and anodes. A Midwest “once a season” plan is often too light for Fort Lauderdale or Miami use.",
        ],
      },
      {
        heading: "A practical South Florida maintenance rhythm",
        body: ["Use manufacturer hours as the baseline, then adjust for saltwater:"],
        list: [
          "Every trip: bilge, battery switch, visual leaks, telltale stream",
          "Every 50–100 hours or annually: engine oil & filters (per manual)",
          "Annually: impeller inspection/replacement, zincs, belts, cables",
          "Pre-season: battery load test, charging system, safety gear, sea trial",
          "As needed: bottom paint cycles, after grounding or overheating events",
        ],
      },
      {
        heading: "What “boat maintenance” usually includes",
        body: [
          "Oil and filters, gear lube (where applicable), zincs, impellers, fluid checks, basic electrical health, and a short systems walk-through. Doctor Yachts documents findings so you have a paper trail for resale or surveys.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I skip a year if I barely use the boat?",
        answer:
          "Low use still ages fuel, batteries, and impellers. Sitting can be harder than running. At minimum, do a yearly inspection and battery/charging check.",
      },
      {
        question: "Do you offer seasonal packages?",
        answer:
          "Yes. We can schedule pre-season commissioning and interval maintenance for boats kept in Fort Lauderdale, Miami, and Palm Beach County.",
      },
    ],
  },
  {
    slug: "mobile-boat-repair-vs-shop",
    title: "Mobile Boat Repair vs Bringing the Boat to a Shop",
    seoTitle: "Mobile Boat Repair vs Shop Service | Which Is Better?",
    seoDescription:
      "Mobile boat repair vs shop: when dockside service wins, when haul-out is needed, and how Fort Lauderdale owners should choose.",
    quickAnswer:
      "Mobile boat repair is best for no-starts, electrical faults, maintenance, and many cooling jobs at the dock. A shop or haul-out is better for major structural work, full repaints, or jobs that need equipment you can’t bring aboard. Start mobile when the boat is floating and accessible.",
    h1: "Mobile boat repair vs shop: which should you choose?",
    category: "mobile",
    keywords: [
      "mobile boat repair vs shop",
      "dockside boat repair Fort Lauderdale",
      "on-site boat mechanic",
      "when to haul boat for repairs",
    ],
    readTime: "4 min",
    updated: "2026-08-06",
    relatedServices: ["engine-repair", "electrical"],
    sections: [
      {
        heading: "When mobile / dockside wins",
        body: ["Most owner pain points never need a travel lift first:"],
        list: [
          "No-start and weak battery / charging issues",
          "Intermittent electrical problems",
          "Impeller and many cooling jobs",
          "Routine maintenance and diagnostics",
          "Bilge pump and basic plumbing repairs",
        ],
      },
      {
        heading: "When a shop or haul-out makes sense",
        body: [
          "Bottom work, major running gear, structural fiberglass, full paint, or jobs requiring heavy presses and long tear-downs may need a yard. A good mobile mechanic will tell you early if the boat should move.",
        ],
      },
      {
        heading: "Cost and time reality in Broward",
        body: [
          "Towing and yard minimums add cost. Mobile boat repair in Fort Lauderdale or South Florida often solves the problem where the boat already sits—especially for electrical and no-start cases.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is mobile boat repair more expensive?",
        answer:
          "Not always. You may pay a trip fee, but you often save towing, yard days, and downtime. Ask for a free estimate with location details.",
      },
      {
        question: "Do you work at private docks?",
        answer:
          "Yes, when access and HOA/marina rules allow. Share gate codes and parking notes when you book.",
      },
    ],
  },
  {
    slug: "signs-you-need-marine-electrical-repair",
    title: "Signs You Need Marine Electrical Repair",
    seoTitle: "Signs You Need Boat Electrical Repair | Battery & Charging Issues",
    seoDescription:
      "Dead batteries, dim electronics, shore power trips? Learn signs you need marine electrical repair and when to call a Fort Lauderdale boat electrician/mechanic.",
    quickAnswer:
      "You likely need marine electrical repair if batteries die overnight, the boat cranks slowly, electronics brown out under load, the charger or alternator undercharges, or shore power breakers trip. Intermittent faults and burning smells need immediate attention. Don’t keep jump-starting—diagnose the charging path.",
    h1: "Signs you need marine electrical repair",
    category: "electrical",
    keywords: [
      "marine electrical repair signs",
      "boat battery keeps dying",
      "boat electrical problems",
      "shore power breaker trips",
    ],
    readTime: "5 min",
    updated: "2026-08-06",
    relatedServices: ["electrical", "engine-repair"],
    sections: [
      {
        heading: "Red flags at the dock",
        body: [],
        list: [
          "Battery dead after sitting 2–7 days",
          "Slow cranking that “used to be fine”",
          "Voltage drops when bilge, windlass, or electronics kick on",
          "Shore power trips or reverse polarity light",
          "Corroded terminals and green crust on grounds",
          "Burning smell, hot cables, or melted insulation (stop and call)",
        ],
      },
      {
        heading: "Why South Florida electrical issues multiply",
        body: [
          "Salt air attacks grounds and connections. Add lithium upgrades, thrusters, and large house banks, and small resistance problems become big voltage drops. A proper electrical repair traces the path—not just the cheapest battery swap.",
        ],
      },
      {
        heading: "What Doctor Yachts does on an electrical call",
        body: [
          "We test batteries under load, charging sources (alternator/charger/inverter-charger), voltage drop on cables, and distribution panels. You’ll get a plain-language plan and a free estimate for the repair path we recommend.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a bad ground cause random boat electrical problems?",
        answer:
          "Yes. High-resistance grounds cause brownouts, false alarms, and intermittent failures that look like “bad electronics” but are really wiring or corrosion.",
      },
      {
        question: "Should I upgrade to lithium without an electrical survey?",
        answer:
          "Not blindly. Lithium systems need correct charging profiles, protection, and cable sizing. We can assess readiness before you buy batteries.",
      },
    ],
  },
  {
    slug: "emergency-boat-repair-fort-lauderdale",
    title: "Emergency Boat Repair Fort Lauderdale",
    seoTitle: "Emergency Boat Repair Fort Lauderdale | Mobile Mechanic",
    seoDescription:
      "Emergency boat repair Fort Lauderdale: no-start, overheating, bilge, electrical. When to call a mobile boat mechanic and what to do first. Free estimates.",
    quickAnswer:
      "For emergency boat repair in Fort Lauderdale, prioritize safety: if you’re taking on water, call for help first. For no-starts, overheating, or dead power at the dock, reduce risk, note symptoms, and call a mobile boat mechanic. Doctor Yachts triages urgent dockside jobs when capacity allows—free estimates for recommended work.",
    h1: "Emergency boat repair in Fort Lauderdale: what to do and when to call",
    category: "mobile",
    keywords: [
      "emergency boat repair Fort Lauderdale",
      "emergency boat mechanic Fort Lauderdale",
      "boat won't start emergency Fort Lauderdale",
      "mobile emergency boat repair",
    ],
    readTime: "5 min",
    updated: "2026-08-06",
    relatedServices: ["engine-repair", "electrical", "cooling"],
    howTo: {
      name: "What to do in a boat repair emergency at the dock",
      description: "First steps for common dockside emergencies in Fort Lauderdale.",
      steps: [
        {
          name: "Make the scene safe",
          text: "If there is fire, heavy fuel smell, or uncontrolled flooding, get people safe and call emergency services. Do not troubleshoot first.",
        },
        {
          name: "Stop further damage",
          text: "Shut down an overheating engine. For bilge alarms, verify pumps and locate the source of water if safe.",
        },
        {
          name: "Capture symptoms",
          text: "Note alarms, last successful run, fuel state, battery age, and any recent work—this speeds mobile diagnosis.",
        },
        {
          name: "Call a mobile boat mechanic",
          text: "Share marina, slip, and gate access. Ask for priority triage for no-start, overheating, or electrical loss.",
        },
      ],
    },
    sections: [
      {
        heading: "What counts as an emergency vs can wait",
        body: ["True emergencies threaten safety or leave you stranded:"],
        list: [
          "Uncontrolled water ingress / bilge can’t keep up",
          "Strong fuel smell or suspected leak",
          "No-start when you need to move the vessel for weather/safety",
          "Overheating that returns immediately after cooldown",
          "Total electrical loss (navigation/safety gear dark)",
        ],
      },
      {
        heading: "Fort Lauderdale–specific notes",
        body: [
          "Traffic, bridge schedules, and marina access rules can slow a tow. Mobile emergency boat repair in Fort Lauderdale often starts faster when the boat is already at a dock with power and parking for a tech.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer 24/7 emergency boat repair in Fort Lauderdale?",
        answer:
          "Priority response depends on schedule and technician availability. Call for triage—after-hours guidance may be available for active clients when possible.",
      },
      {
        question: "Should I tow first or call mobile?",
        answer:
          "If the boat is floating, accessible, and not in immediate danger, start with mobile diagnostics. Tow when the vessel must move or the job needs a yard.",
      },
    ],
  },
  {
    slug: "what-does-a-boat-mechanic-do",
    title: "What Does a Boat Mechanic Do?",
    seoTitle: "What Does a Boat Mechanic Do? | Yacht & Boat Repair Explained",
    seoDescription:
      "What a boat mechanic does: engines, electrical, cooling, diagnostics, and maintenance. How Doctor Yachts works in Fort Lauderdale & South Florida.",
    quickAnswer:
      "A boat mechanic diagnoses and repairs marine engines, electrical systems, cooling, pumps, and related vessel systems. Unlike a general handyman, a specialist traces faults across systems and follows marine procedures. Doctor Yachts focuses on diagnostic-first mobile and dockside repair for boats and yachts in South Florida.",
    h1: "What does a boat mechanic do?",
    category: "general",
    keywords: [
      "what does a boat mechanic do",
      "boat mechanic vs marina",
      "yacht mechanic services",
      "marine mechanic Fort Lauderdale",
    ],
    readTime: "4 min",
    updated: "2026-08-06",
    relatedServices: ["engine-repair", "electrical", "maintenance"],
    sections: [
      {
        heading: "Core boat mechanic services",
        body: ["Most calls fall into a few buckets:"],
        list: [
          "Marine engine repair (inboard / outboard)",
          "Boat electrical repairs and charging systems",
          "Cooling system service",
          "Bilge, plumbing, and pumps",
          "Scheduled boat maintenance",
          "Mobile / dockside diagnostics",
        ],
      },
      {
        heading: "How Doctor Yachts is different",
        body: [
          "We market as the mechanic for boats and yachts—not a brokerage and not a detailing crew. The “doctor” idea means symptoms first, diagnosis second, parts third. That approach ranks well with owners tired of mystery invoices—and it matches how answer engines prefer clear, expert explanations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a yacht mechanic different from a boat mechanic?",
        answer:
          "The skills overlap. Larger yachts may have more complex electrical and systems, but the diagnostic discipline is the same. We service recreational boats and yachts.",
      },
      {
        question: "Do you only work on certain brands?",
        answer:
          "We work across common gas and diesel platforms. For brand-specific warranty work, factory dealers may be required—we’ll tell you if that’s the better path.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export const guideCategories = [
  { id: "engine", label: "Engines & cooling" },
  { id: "electrical", label: "Electrical" },
  { id: "maintenance", label: "Maintenance" },
  { id: "mobile", label: "Mobile repair" },
  { id: "general", label: "General" },
] as const;
