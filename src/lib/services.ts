export type ServiceSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type ServiceImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Service = {
  id: string;
  /** SEO-friendly URL slug under /services/[slug] */
  slug: string;
  title: string;
  summary: string;
  description: string;
  /** Opening paragraphs (long-form) */
  content: string[];
  /** Named H2 sections for deep SEO content */
  sections: ServiceSection[];
  /** Visit process unique to this service */
  process: { title: string; detail: string }[];
  /** What we inspect / test */
  whatWeCheck: string[];
  features: string[];
  symptoms: string[];
  whenToCall: string;
  duration: string;
  icon: "engine" | "electrical" | "diagnostics" | "maintenance" | "systems" | "emergency";
  seoTitle: string;
  seoDescription: string;
  quickAnswer: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  /** Hero + in-page gallery images */
  images: ServiceImage[];
};

/** Primary service hubs promoted in nav, sitemap, and OfferCatalog. */
export const HUB_SERVICE_ORDER = [
  "engine-repair",
  "outboard",
  "electrical",
  "cooling",
  "maintenance",
  "systems",
] as const;

export const services: Service[] = [
  {
    id: "engine-repair",
    slug: "marine-engine-repair",
    title: "Marine Engine Repair in Fort Lauderdale",
    summary: "Inboard & outboard engine repair—diagnose first, fix what matters.",
    description:
      "Inboard and outboard engine repair in Fort Lauderdale and South Florida. Hard starts, overheating, power loss—we diagnose the system first, then fix what matters. Free estimates.",
    content: [
      "Need marine engine repair in Fort Lauderdale? Doctor Yachts is an independent boat and yacht mechanic. We come to the boat when marina or private-dock access allows. We treat engines as systems—fuel, air, spark or compression, cooling, and controls—not a shopping list of sensors.",
      "Hard starts, overheating, power loss, rough idle, and exhaust issues are everyday calls in Broward and Miami-Dade. Salt air, heat, and year-round use punish cooling passages, connections, and fuel systems. A proper visit separates “needs a battery” from “needs a fuel pump,” “needs cooling flow,” or “needs deeper mechanical work”—so you don’t pay twice for the same symptom.",
      "We offer dockside marine engine repair at Fort Lauderdale marinas, private docks, and nearby South Florida waterways. Many diagnostics and repairs never need a travel lift. When a job does need haul-out or specialized equipment, we tell you early. Free estimates apply to recommended work after diagnosis. If the job is outboard-first, start on our outboard motor repair page.",
    ],
    sections: [
      {
        heading: "Diagnose the system before parts",
        body: [
          "Marine engine repair is broader than “swap the part that looks dirty.” On modern gas and diesel platforms, the same no-start can come from a weak battery, a failed safety interlock, a fuel delivery problem, or a control-system fault. We start with the symptom history: when it last ran well, what changed, alarms, fuel state, and how the boat is stored.",
          "On inboards and sterndrives, we often evaluate raw-water cooling paths, exhaust risers or manifolds where relevant, charging under load, and idle quality. On outboards, we add telltale flow, cowling access, and common service-interval items. If your primary need is outboard-specific, use the dedicated outboard motor repair page.",
        ],
        list: [
          "No-start and hard-start diagnosis (cranking quality, safety circuits, fuel, ignition/injection)",
          "Overheating and cooling-path verification (often linked to cooling system repair)",
          "Power loss, surging, rough idle, and smoke evaluation",
          "Inboard and sterndrive diagnostic checks",
          "Marine diesel service concerns with clear findings",
          "Mobile/dockside engine work when access and parts allow",
        ],
      },
      {
        heading: "Inboard vs outboard: how the approach differs",
        body: [
          "Inboard and sterndrive packages live inside the boat. Access, heat soak, exhaust routing, and raw-water plumbing all change how we diagnose. A temperature climb that only appears after 15 minutes may be a restriction, a thermostat, or a heat exchanger issue—not something you see in a 30-second idle at the dock.",
          "Outboards put cooling telltales, cowling electronics, and lower-unit realities front and center. Many Fort Lauderdale center consoles live hard: fishing, long runs, and sitting in the sun between weekends. Outboard motor repair often overlaps with electrical charging checks and impeller/cooling service. Point outboard-first jobs to the outboard page so the visit matches the platform.",
        ],
      },
      {
        heading: "Why South Florida engines fail differently",
        body: [
          "Midwest “once a season” logic under-serves Florida boats. Heat accelerates battery and connection failures. Salt accelerates corrosion in grounds and cooling hardware. Sitting between weekends can create sulfated batteries, sticky fuel issues, and surprise no-starts on Saturday morning.",
          "That is why diagnose-first marine engine repair in Fort Lauderdale and South Florida focuses on verifying the system under realistic conditions—not guessing the most popular part on a forum. We document findings so you have a paper trail for resale, surveys, or the next yard visit.",
        ],
      },
      {
        heading: "What you receive after an engine visit",
        body: [
          "You should leave with more than a verbal “we think it’s fine.” After diagnosis we explain options in plain language: temporary safety fix, full repair now, or planned maintenance if the boat is still trip-ready. Free estimates cover recommended repair work before major parts and labor are authorized.",
          "If the root cause is primarily electrical or cooling rather than the engine core, we say so and point you to the right service path. That honesty saves money and keeps the diagnose-first method intact.",
        ],
      },
    ],
    process: [
      {
        title: "Symptom intake",
        detail:
          "You describe what the boat does—or does not do—plus marina, slip, vessel type, and any recent work or alarms. Photos help.",
      },
      {
        title: "Access & schedule",
        detail:
          "We confirm dock access, parking, and whether the job is a strong dockside candidate. Priority for safety-critical no-starts when capacity allows.",
      },
      {
        title: "On-site diagnosis",
        detail:
          "Battery/charging baseline, safety circuits, fuel delivery clues, cooling indicators, and engine behavior under the right test conditions.",
      },
      {
        title: "Findings & free estimate",
        detail:
          "Clear options, recommended vs optional work, and a free estimate path before major parts. Repair proceeds with your approval.",
      },
    ],
    whatWeCheck: [
      "Battery condition and voltage under load",
      "Cranking quality and starter-related clues",
      "Kill switch / neutral safety / interlocks",
      "Fuel supply basics and delivery clues",
      "Cooling telltale / temperature behavior",
      "Visible leaks, belts, hoses, and exhaust clues",
      "Codes and service history when available",
    ],
    features: [
      "Inboard & outboard engine repair",
      "Sterndrive diagnostic checks",
      "Compression & performance testing",
      "Cooling, fuel & exhaust systems",
      "Mobile / dockside when available",
    ],
    symptoms: [
      "Boat won’t start or cranks weakly",
      "Overheating at idle or under load",
      "Power loss, surging, or rough idle",
      "Smoke, unusual noise, or fuel smell",
      "Check-engine / warning alarms",
    ],
    whenToCall:
      "Call for marine engine repair when the boat won’t start, runs hot, loses power, or throws alarms—especially before a planned trip. Early diagnosis at the dock in Fort Lauderdale or South Florida often prevents a tow and more expensive engine damage.",
    duration: "2–8 hrs typical",
    icon: "engine",
    quickAnswer:
      "Marine engine repair covers inboard and outboard no-starts, overheating, and power loss. Doctor Yachts diagnoses the system first in Fort Lauderdale and South Florida, then repairs with dockside service when access allows. Free estimates before major parts work.",
    seoTitle: "Marine Engine Repair Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Marine engine repair in Fort Lauderdale. Inboard and outboard, diagnose-first dockside service. Free estimates — Doctor Yachts.",
    keywords: [
      "marine engine repair Fort Lauderdale",
      "inboard engine repair Fort Lauderdale",
      "outboard engine repair Fort Lauderdale",
      "boat motor repair Fort Lauderdale",
      "boat engine repair South Florida",
    ],
    images: [
      {
        src: "/images/service-engine.jpg",
        alt: "Marine engine bay during professional boat engine repair",
        caption: "Engine bay diagnosis — inboard and related systems",
      },
      {
        src: "/images/service-dockside.jpg",
        alt: "Dockside mobile marine engine repair at a South Florida marina",
        caption: "Dockside engine service when access allows",
      },
      {
        src: "/images/service-diagnostics.jpg",
        alt: "Marine diagnostics supporting engine repair findings",
        caption: "Systems thinking when faults span engines and electrics",
      },
    ],
    faqs: [
      {
        question: "What boat engine problems do you fix?",
        answer:
          "We diagnose and repair hard starts, overheating, power loss, fuel and cooling faults, exhaust issues, and rough running on marine engines.",
      },
      {
        question: "Do you work on outboards and inboards?",
        answer:
          "Yes. We service gas and diesel inboards and outboards. Outboard-first jobs are a better fit for the outboard motor repair page.",
      },
      {
        question: "Can marine engine repair be done dockside?",
        answer:
          "Many engine diagnostics and repairs are completed dockside when access and parts allow. If the job needs haul-out or shop equipment, we tell you early and plan the next step.",
      },
      {
        question: "Do you give free estimates for engine repair?",
        answer:
          "Yes. After we understand symptoms and complete diagnosis, we provide free estimates for recommended engine repair work before you authorize major parts and labor.",
      },
      {
        question: "Do you only replace parts, or do you diagnose first?",
        answer:
          "Diagnose first. We verify the fault path so you are not paying for popular parts that do not fix the symptom. Findings are explained in plain language.",
      },
    ],
  },
  {
    id: "electrical",
    slug: "electrical-repairs",
    title: "Boat Electrical Repair in Fort Lauderdale",
    summary: "Charging, wiring, shore power—path diagnosis, not a battery lottery.",
    description:
      "Boat electrical repair in Fort Lauderdale and South Florida: batteries, chargers, wiring, shore power, voltage drop, and parasitic draws—diagnosed as a path, not a battery-swap lottery.",
    content: [
      "Turn to Doctor Yachts for boat electrical repair in Fort Lauderdale, and across Miami and Palm Beach when scheduled. Dead batteries, no charge underway, shore power trips, dim electronics under load, and intermittent shorts are core work for a marine mechanic who treats electrical systems as a complete path—not a single box on the bulkhead.",
      "Intermittent marine electrical issues are often the hardest to catch in salt air and heat. Green crust on grounds, high-resistance cable ends, failing chargers, and parasitic draws can look like “bad batteries” until the charging and distribution path is tested properly. We use a systems approach so parts-swapping does not become your weekend hobby.",
      "Mobile and dockside electrical service is available when access allows. Bring photos of the panel, battery bank, and shore power inlet when you request a free estimate—it speeds triage and helps us arrive prepared. We are not a full navigation-package installer.",
    ],
    sections: [
      {
        heading: "What boat electrical repair includes",
        body: [
          "Electrical repair on a boat is rarely just the battery. The bank must accept charge, the charger or alternator must deliver it, cables and grounds must carry current without excessive voltage drop, and distribution breakers/fuses must protect without nuisance trips. We start at the symptom and walk the path.",
          "Shore power problems—trips, reverse polarity lights, no power at the dock—need inlet, cord, isolation, and onboard distribution checks. Underway charging problems need alternator/regulator thinking plus load context.",
        ],
        list: [
          "Battery testing under load (not just a resting voltage glance)",
          "Charger, inverter, and inverter-charger behavior",
          "Wiring, grounds, and voltage drop",
          "Shore power inlet, cord, and breaker issues",
          "Parasitic draw investigation when batteries die overnight",
        ],
      },
      {
        heading: "Why South Florida electrical faults multiply",
        body: [
          "Salt air attacks grounds and connections. Heat stresses batteries and electronics. Modern boats stack house loads and electronics on the same electrical backbone. A single high-resistance ground can look like “bad electronics” until voltage drop testing proves otherwise.",
          "Owners in Fort Lauderdale marinas often jump-start for months before calling. Jump-starting can get you home, but it can hide a charging fault that leaves you dark again next weekend. Diagnose the path once—save the repeated dock drama.",
        ],
      },
      {
        heading: "How we document electrical findings",
        body: [
          "You receive plain-language findings: what failed, what is weak, and what is optional. Free estimates cover recommended repair work. Notes matter for surveys, resale, and the next technician.",
          "We are not a general handyman and not a full multi-display nav-package installer. We keep electronics reliable by fixing the power and distribution foundation they depend on. For large installation packages, we can discuss scope or coordinate when a specialist installer is the better path.",
        ],
      },
    ],
    process: [
      {
        title: "Symptom & photos",
        detail:
          "Dead overnight? Trips on shore power? Brownouts under load? Share symptoms, battery age, and panel photos if you have them.",
      },
      {
        title: "Path testing",
        detail:
          "On site we test batteries under load, charging sources, voltage drop on cables, and distribution behavior under realistic loads.",
      },
      {
        title: "Root cause plan",
        detail:
          "We separate “bad cell” from “bad charger,” “bad ground,” and “too much load for the cable size.”",
      },
      {
        title: "Estimate & repair",
        detail:
          "Free estimate for recommended work. Repair proceeds with approval—no mystery parts pressure.",
      },
    ],
    whatWeCheck: [
      "Battery health under load",
      "Charger output and profiles",
      "Alternator / charging underway clues",
      "Shore power inlet and isolation basics",
      "Main grounds and high-resistance connections",
      "Voltage drop on critical runs",
      "Breaker/fuse distribution symptoms",
      "Parasitic draws when relevant",
    ],
    features: [
      "Battery, charger & inverter service",
      "Wiring harness repair",
      "Shore power & isolation checks",
      "Voltage drop & ground diagnosis",
      "Parasitic draw investigation",
      "On-site / dockside electrical repair",
    ],
    symptoms: [
      "Batteries dead after sitting a few days",
      "Slow cranking or no start",
      "Electronics brown out under load",
      "Shore power breaker trips",
      "Charger / alternator not charging",
      "Burning smell or hot cables (stop and call)",
    ],
    whenToCall:
      "Book boat electrical repair when batteries keep dying, charging is weak, shore power trips, or electronics brown out. Intermittent faults and burning smells need prompt diagnosis—don’t keep jump-starting and hoping.",
    duration: "1–6 hrs typical",
    icon: "electrical",
    quickAnswer:
      "Boat electrical repair fixes dead batteries, weak charging, shore power trips, and intermittent wiring faults. We test the full path—batteries, chargers, wiring, shore power, voltage drop, and parasitic draws—across Fort Lauderdale and South Florida docks. Free estimates after diagnosis.",
    seoTitle: "Boat Electrical Repair Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Boat electrical repair in Fort Lauderdale. Batteries, chargers, wiring, shore power, voltage drop. Free estimates — Doctor Yachts.",
    keywords: [
      "boat electrical repair Fort Lauderdale",
      "boat electrical repairs South Florida",
      "marine electrical repair",
      "boat battery charger repair",
      "shore power problems boat",
      "boat battery keeps dying",
    ],
    images: [
      {
        src: "/images/service-electrical.jpg",
        alt: "Marine electrical panel and boat wiring service",
        caption: "Distribution and panel diagnosis",
      },
      {
        src: "/images/service-electrical-detail.jpg",
        alt: "Marine battery bank and electrical testing on a boat",
        caption: "Battery bank and charging path checks",
      },
      {
        src: "/images/service-diagnostics.jpg",
        alt: "Helm systems depending on healthy boat electrical power",
        caption: "Electronics depend on a healthy electrical foundation",
      },
    ],
    faqs: [
      {
        question: "Why do my boat batteries keep dying?",
        answer:
          "Common causes include parasitic draws, failing chargers or alternators, bad cells, poor connections, or incorrect charging profiles. We test the full charging and distribution path—not just the battery.",
      },
      {
        question: "Can you fix shore power issues?",
        answer:
          "Yes. We diagnose inlet, cord, isolation, breaker, and onboard distribution problems that cause trips, reverse polarity, or no power at the dock.",
      },
      {
        question: "Do you install marine electronics?",
        answer:
          "We are not a full nav-package installer. We focus on electrical health, charging, distribution, and fault finding that keeps electronics reliable. For large multi-display navigation packages, we can discuss scope or coordinate with a specialist installer when that is the better path.",
      },
      {
        question: "Should I upgrade to lithium without an electrical survey?",
        answer:
          "Not blindly. Lithium systems need correct charging profiles, protection, and cable sizing. We can assess readiness before you buy batteries.",
      },
      {
        question: "Can electrical repairs be done at my marina?",
        answer:
          "Yes. Many electrical diagnostics and repairs are completed dockside in Fort Lauderdale and South Florida when access allows.",
      },
    ],
  },
  {
    id: "cooling",
    slug: "cooling-system-repairs",
    title: "Boat Cooling System Repair in Fort Lauderdale",
    summary: "Keep the engine cool—raw-water and closed cooling, impellers, heat exchangers.",
    description:
      "Boat cooling system repair in Fort Lauderdale and South Florida. Overheating, weak flow, clogged exchangers, impeller service—stop damage before a hot engine becomes an expensive engine.",
    content: [
      "Overheating is one of the fastest ways to destroy an otherwise healthy marine engine. Doctor Yachts provides boat cooling system repair for Fort Lauderdale and nearby South Florida boats—raw-water and closed cooling paths, impellers, sea strainers, thermostats, heat exchangers, hoses, and flow under the right conditions.",
      "If the engine runs hot only at cruise—or only after a few minutes—we still treat it as a cooling case until proven otherwise. A weak telltale (pee stream) on an outboard is a red flag, not a curiosity. Grass, sand, and growth in Broward and Miami-Dade waters make cooling reliability a weekly reality for active owners.",
      "Many impeller, strainer, hose, and thermostat jobs are done dockside without a haul-out. Free estimates after diagnosis. If you already overheated, stop running and book service before the next trip.",
    ],
    sections: [
      {
        heading: "Common causes of boat overheating",
        body: [
          "Most marine overheating is restricted raw-water flow or a failed temperature-control component. Impellers age and fail—especially after sitting. Strainers clog with grass and debris. Hoses collapse. Thermostats stick. Heat exchangers foul on inboards. Exhaust restrictions are less common but serious.",
          "Clearing a strainer once is not always a fix. If overheating returns, the cooling path needs hands-on diagnosis—not another temporary clear-out the morning of a trip.",
        ],
        list: [
          "Failed raw-water impeller",
          "Clogged sea strainer or intake",
          "Collapsed or blocked hose",
          "Stuck thermostat",
          "Fouled heat exchanger (inboards)",
          "Weak or missing outboard telltale stream",
          "Exhaust restriction (serious—diagnose promptly)",
        ],
      },
      {
        heading: "What to do when the temperature climbs",
        body: [
          "Reduce load. If temperature keeps rising, shut down to protect the engine. Check the telltale stream on many outboards. At the dock, inspect the sea strainer if it is safe to do so. Do not keep running “a little hot”—that is how warped heads and seized engines happen.",
          "Then book cooling system repair. Bring notes: idle vs cruise heat, recent grounding or grass, storage history, and any alarms. That history shortens diagnosis time at Fort Lauderdale and South Florida docks.",
        ],
      },
      {
        heading: "South Florida grass, sand, and dockside vs haul-out",
        body: [
          "Grass, sand, and growth in South Florida water clog strainers and punish raw-water pumps. Impellers, strainers, hoses, and many thermostat jobs are strong dockside candidates when access allows. Complex exchanger work or jobs requiring equipment you cannot bring aboard may need shop or haul-out planning. We tell you early which path you are on.",
          "Cooling often overlaps with engine repair and outboard service. If the root cause is not cooling, we redirect—diagnose first remains the rule.",
        ],
      },
    ],
    process: [
      {
        title: "Stop further damage",
        detail:
          "If temps are climbing, reduce load and shut down. Note when heat appears (idle, cruise, after storage).",
      },
      {
        title: "Flow & restriction diagnosis",
        detail:
          "We inspect strainers, telltale/discharge clues, impeller condition, hoses, and temperature behavior under appropriate conditions.",
      },
      {
        title: "Repair path",
        detail:
          "Impeller, thermostat, hose, exchanger, or deeper work—explained with a free estimate before major parts.",
      },
      {
        title: "Prevention notes",
        detail:
          "We recommend inspection intervals suited to South Florida grass, silt, and storage patterns.",
      },
    ],
    whatWeCheck: [
      "Sea strainer condition and clogging pattern",
      "Impeller condition and raw-water pump clues",
      "Hose integrity and collapse points",
      "Thermostat operation clues",
      "Heat exchanger condition (inboards, as accessible)",
      "Outboard telltale / discharge stream",
      "Temperature behavior idle vs load when safe",
      "Related engine alarms and history",
    ],
    features: [
      "Overheating diagnosis",
      "Impeller & raw-water service",
      "Closed-cooling / heat exchanger inspection",
      "Thermostat & hose service",
      "Dockside cooling repairs when possible",
      "Post-overheat assessment",
    ],
    symptoms: [
      "Temperature gauge climbing",
      "Weak or no outboard pee stream",
      "Steam, hot smell, or alarms",
      "Overheats only at cruise",
      "Repeated strainer clogging",
      "Hot after sitting or storage",
    ],
    whenToCall:
      "Stop running if temperatures keep rising. Book cooling system repair after any overheat event, weak telltale stream, or repeated strainer issues—before a weekend trip turns into engine damage.",
    duration: "1–5 hrs typical",
    icon: "diagnostics",
    quickAnswer:
      "Boat cooling system repair addresses overheating from failed impellers, clogged strainers, stuck thermostats, or fouled heat exchangers. Stop running if temps keep rising. Doctor Yachts offers dockside cooling diagnostics in Fort Lauderdale and South Florida. Free estimates.",
    seoTitle: "Boat Cooling System Repair Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Boat cooling system repair in Fort Lauderdale. Overheating, impellers, strainers, exchangers. Free estimates — Doctor Yachts.",
    keywords: [
      "boat cooling system repair Fort Lauderdale",
      "boat overheating repair",
      "impeller replacement Fort Lauderdale",
      "marine heat exchanger service",
      "outboard cooling problems",
    ],
    images: [
      {
        src: "/images/service-cooling.jpg",
        alt: "Boat cooling system and raw-water plumbing service",
        caption: "Raw-water cooling components and hoses",
      },
      {
        src: "/images/service-engine.jpg",
        alt: "Marine engine bay related to cooling system repair",
        caption: "Cooling diagnosis in the engine bay",
      },
      {
        src: "/images/service-outboard.jpg",
        alt: "Outboard motors where telltale cooling flow matters",
        caption: "Outboard telltale / cooling flow issues",
      },
    ],
    faqs: [
      {
        question: "Why is my boat engine overheating?",
        answer:
          "Common causes include a failed impeller, clogged strainer or heat exchanger, stuck thermostat, collapsed hose, or restricted raw-water intake. We test flow and temperature under the right conditions.",
      },
      {
        question: "Can you replace an impeller at the dock?",
        answer:
          "Often yes, when access and parts allow. Many outboard and inboard raw-water jobs are done dockside without a haul-out.",
      },
      {
        question: "How often should marine impellers be replaced?",
        answer:
          "Many manufacturers suggest annual inspection or replacement by hours. In silty or grassy South Florida water, inspect more often—especially before long trips or after storage.",
      },
      {
        question: "Can I keep running if it’s only a little hot?",
        answer:
          "Don’t gamble. “A little hot” can become serious engine damage. Idle to safety if needed, shut down if temps keep rising, then schedule cooling repairs.",
      },
    ],
  },
  {
    id: "maintenance",
    slug: "boat-maintenance",
    title: "Boat Maintenance in Fort Lauderdale",
    summary: "Preventative boat maintenance on a Florida rhythm—including 100-hour and 300-hour service.",
    description:
      "Boat maintenance in Fort Lauderdale and South Florida: oil service, impellers, zincs, belts, batteries, and manufacturer-interval 100-hour and 300-hour service with clear logs.",
    content: [
      "Boat owners throughout Fort Lauderdale and South Florida can depend on Doctor Yachts for preventative boat maintenance scheduled to manufacturer intervals and how you actually use the boat. Preventative maintenance is cheaper than emergency no-starts the morning of a trip.",
      "Typical service includes oil and filters, impeller inspection or replacement planning, belts, zincs, fluid checks, cooling attention, battery and charging health, and system function tests. Clear service notes keep your maintenance history organized for resale or surveys.",
      "Florida’s year-round salt and heat set the rhythm—not a three-month northern season. 100-hour service and 300-hour service live on this page as interval visits, not separate destinations. Book early before peak season. Free estimates for packages.",
    ],
    sections: [
      {
        heading: "A practical Florida maintenance rhythm",
        body: [
          "In Florida saltwater use, annual service is a baseline—then adjust by engine hours and how hard you run the boat. Low use still ages fuel, batteries, and impellers. Sitting can be harder than running.",
          "We prioritize the failure modes that strand South Florida owners most: cooling reliability, charging health, and safety systems (bilge pumps, kill circuits). Cosmetic detailing is not our product—mechanical readiness is.",
        ],
        list: [
          "Every trip: bilge, battery switch, visual leaks, telltale stream",
          "Every 50–100 hours or annually: engine oil & filters (per manual)",
          "Annually: impeller inspection/replacement planning, zincs, belts, cables",
          "Pre-season: battery load test, charging system, safety gear, systems walk-through",
          "As needed: after grounding, overheating, or long storage",
        ],
      },
      {
        heading: "100-hour service",
        body: [
          "Most manufacturer manuals put a serious service around 100 hours—or once a year if you run fewer hours in saltwater. 100-hour service is that interval visit, done dockside in Fort Lauderdale and South Florida when access allows. It is scheduled marine maintenance, not a parts dump: we follow the interval, inspect what salt and heat actually punish, and tell you what can wait.",
          "A typical 100-hour visit covers engine oil and filters, gear lube where the drive or lower unit calls for it, impeller and cooling-path checks, zincs, belts, batteries and charging, fluid levels, and function tests you can keep in a service log. Sitting between weekends still ages fuel, batteries, and impellers—so “low hours” is not a free pass in Florida. Diagnose first. If we find a fault that is not interval work, we say so and give a free estimate before major parts.",
        ],
        list: [
          "Engine oil and filters (per manufacturer hours / annual saltwater use)",
          "Gear lube on relevant outboards, sterndrives, and transmissions",
          "Impeller inspection or replacement planning and cooling-path check",
          "Zincs / anodes and visible corrosion points",
          "Belts, hoses, accessible fluids, battery and charging health",
          "Function tests and a written service log",
        ],
      },
      {
        heading: "300-hour service",
        body: [
          "Around 250–300 hours, most marine manuals stop calling it a simple oil change. 300-hour service is the heavier interval visit—still dockside in Fort Lauderdale and South Florida when access allows. This is not a parts dump. We inspect what the hours actually stress, document findings, and estimate extras before you buy them.",
          "Expect deeper cooling attention (impeller plus heat-exchanger and raw-water path clues on inboards), more thorough electrical and charging checks, fuel-system inspection, and the drive or lower-unit items many makers group at this interval. Twin and triple setups take longer; we plan time honestly. If you are past 300 hours, or you bought a boat with thin records, this visit is how you stop guessing.",
        ],
        list: [
          "Interval fluids and filters plus the heavier 250–300 hour items",
          "Cooling path and heat-exchanger attention (inboards, as accessible)",
          "Electrical, charging, and high-resistance connection checks",
          "Fuel-system inspection (separators, supply clues, leak/odor)",
          "Drive / lower-unit and gear-lube items when due",
          "Function tests, prioritized findings, and a free estimate before non-interval parts",
        ],
      },
      {
        heading: "What a maintenance visit usually includes",
        body: [
          "Scope is matched to vessel and hours: oil and filters where applicable, gear lube on relevant drives, impeller and cooling attention, zincs, belts, fluid checks, and basic electrical health. Outboard interval service follows manufacturer guidance adapted to saltwater use.",
          "You receive notes on what was done and what is recommended next. That log is valuable for surveys and resale—and for your own future self when planning trips.",
        ],
      },
      {
        heading: "Seasonal commissioning in South Florida",
        body: [
          "Pre-season commissioning is not winterization theater—it is a readiness pass before heavy use. We catch weak batteries, tired impellers, and bilge issues before they become Saturday emergencies in Fort Lauderdale or South Florida.",
          "Ask about seasonal packages when you book. Free estimates available.",
        ],
      },
    ],
    process: [
      {
        title: "Share hours & history",
        detail:
          "Engine hours, last service, vessel type, and how you use the boat (weekend, fishing, cruising).",
      },
      {
        title: "Service plan",
        detail:
          "We propose interval work plus saltwater realities—impellers, zincs, batteries, cooling. 100-hour or 300-hour when the meter or calendar says so.",
      },
      {
        title: "Dockside service",
        detail:
          "Maintenance completed at marina or private dock when access allows.",
      },
      {
        title: "Service log",
        detail:
          "What was inspected, replaced, and recommended next—kept for your records.",
      },
    ],
    whatWeCheck: [
      "Oil and filter interval status",
      "Impeller / cooling service interval",
      "Zincs and basic corrosion points",
      "Belts and visible drive components",
      "Battery and charging health",
      "Bilge pump function",
      "Fluid levels and leak clues",
      "Owner trip checklist items",
    ],
    features: [
      "Oil & filter service",
      "Outboard engine maintenance",
      "100-hour / annual saltwater interval",
      "300-hour heavier interval inspection",
      "Impellers, belts & zincs",
      "Service logs for resale value",
    ],
    symptoms: [
      "Overdue oil / hour interval",
      "Approaching or past 100 hours",
      "Approaching or past 250–300 hours",
      "Pre-season checklist needed",
      "Unknown service history on a used boat",
      "Planning a long trip or cruise",
    ],
    whenToCall:
      "Schedule boat maintenance by manufacturer hours, before peak season, and after buying a boat with unknown history. Annual saltwater service is the baseline for Fort Lauderdale and South Florida use.",
    duration: "2–5 hrs typical",
    icon: "maintenance",
    quickAnswer:
      "Boat maintenance in Florida should follow manufacturer hours plus saltwater reality—oil and filters, impellers, zincs, belts, and 100-hour or 300-hour interval service. Doctor Yachts provides scheduled maintenance in Fort Lauderdale and South Florida. Free estimates for packages.",
    seoTitle: "Boat Maintenance Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Boat maintenance in Fort Lauderdale. Oil service, 100-hour and 300-hour intervals, zincs, seasonal checks. Free estimates — Doctor Yachts.",
    keywords: [
      "boat maintenance Fort Lauderdale",
      "boat maintenance South Florida",
      "outboard engine maintenance",
      "100 hour boat service Fort Lauderdale",
      "300 hour boat service Fort Lauderdale",
      "preventative boat maintenance",
    ],
    images: [
      {
        src: "/images/service-maintenance.jpg",
        alt: "Scheduled boat maintenance at a South Florida marina dock",
        caption: "Dockside maintenance visit",
      },
      {
        src: "/images/service-outboard.jpg",
        alt: "Outboard motors during interval boat maintenance",
        caption: "Outboard interval service support",
      },
      {
        src: "/images/service-dockside.jpg",
        alt: "Mobile boat maintenance at the marina",
        caption: "Mobile maintenance when access allows",
      },
    ],
    faqs: [
      {
        question: "How often should I service my boat?",
        answer:
          "Follow manufacturer hours/time intervals, then adjust for saltwater use, storage conditions, and how hard you run the engines. We’ll recommend a practical schedule after we know the vessel.",
      },
      {
        question: "Where are 100-hour and 300-hour service?",
        answer:
          "On this page. 100-hour service and 300-hour service are interval visits we schedule as boat maintenance—not separate pages. 100-hour is the regular interval; 300-hour is the heavier inspection many manuals put around 250–300 hours.",
      },
      {
        question: "Do you keep service records?",
        answer:
          "Yes. Clear service notes help resale, surveys, and the next technician. We document what was inspected, replaced, and recommended next.",
      },
      {
        question: "Can maintenance be done at my dock?",
        answer:
          "Often yes. Many maintenance items are completed dockside in Fort Lauderdale and South Florida when access allows.",
      },
      {
        question: "Do I need 100-hour service if I barely ran the boat?",
        answer:
          "Often yes on the calendar. Saltwater, heat, and sitting still age fuel, batteries, and impellers even with low hours. Annual service is the Florida baseline; we adjust after we see the boat.",
      },
    ],
  },
  {
    id: "systems",
    slug: "plumbing-repairs",
    title: "Boat Plumbing & Systems Repair in Fort Lauderdale",
    summary: "Bilge, freshwater, heads, livewell, and seacocks.",
    description:
      "Boat plumbing repair in Fort Lauderdale and South Florida—bilge pumps, freshwater, heads, livewell, seacocks, and related electrical supply to pumps.",
    content: [
      "Doctor Yachts handles boat plumbing and systems repair across Fort Lauderdale and nearby South Florida docks. Bilge pumps that run nonstop, weak freshwater pressure, head system failures, and livewell/raw-water pump problems are common calls—and they are not “minor” when safety or guest weekends are on the line.",
      "We inspect pumps, float switches, plumbing runs, seacocks, and related electrical supply so you are protected at the dock and underway. When plumbing issues mix with electrical load or raw-water cooling problems, we troubleshoot the system as one machine.",
      "A bilge that “always runs a little” is not normal. Constant cycling can hide slow leaks, packing issues, AC condensate overload—or a stuck switch that leaves you unprotected when you need the pump most. Free estimates available.",
    ],
    sections: [
      {
        heading: "Bilge systems: the safety-critical plumbing job",
        body: [
          "Bilge pumps and float switches are safety gear. A failed pump, a stuck switch, or wiring that only works sometimes is a flooding risk—not an inconvenience. We diagnose root cause so you are not masking a serious leak with a louder pump.",
          "High bilge water after rain or AC use still deserves a look. Condensate can be normal; unexplained water is not. Constant bilge run is a diagnostic priority.",
        ],
        list: [
          "Primary and secondary bilge pump function",
          "Float switch operation and mounting",
          "Wiring and fuse/breaker supply to pumps",
          "Obvious leak sources when accessible",
          "High-water alarm clues when equipped",
        ],
      },
      {
        heading: "Freshwater, heads, livewell, and seacocks",
        body: [
          "Weak freshwater pressure, failed pumps, head and holding-tank issues, and livewell/raw-water systems are common dockside jobs. We repair what is accessible and honest about what needs haul-out—especially seacock replacement.",
          "Seacocks and thru-hulls are inspected for operation and condition. If a seacock needs haul-out replacement, we identify it early rather than pretending a temporary workaround is permanent.",
        ],
      },
      {
        heading: "Why plumbing and electrical get diagnosed together",
        body: [
          "Pumps need power. A “dead bilge pump” is often a wiring, switch, or breaker issue. A “weak freshwater system” may be the pump, the accumulator, clogged filters, or voltage under load. Systems thinking prevents buying three pumps before fixing one ground.",
        ],
      },
    ],
    process: [
      {
        title: "Symptom intake",
        detail:
          "Constant bilge run? No pressure? Head failure? Note when it started and any recent work.",
      },
      {
        title: "Pump & path diagnosis",
        detail:
          "We test the pump, switch, plumbing path, and electrical supply—not just the easiest part to replace.",
      },
      {
        title: "Leak vs switch vs pump",
        detail:
          "Clear root cause so you are not masking flooding risk or guest-weekend failures.",
      },
      {
        title: "Repair & estimate",
        detail:
          "Free estimate for recommended work. Haul-out needs flagged early when relevant.",
      },
    ],
    whatWeCheck: [
      "Bilge pump operation and capacity clues",
      "Float switches and auto/manual modes",
      "Pump wiring and protection",
      "Freshwater pump and pressure symptoms",
      "Head / holding system complaints",
      "Seacock operation (inspection)",
      "Livewell and raw-water pump issues",
      "Related electrical supply problems",
    ],
    features: [
      "Bilge & freshwater pumps",
      "Heads & holding tank systems",
      "Livewell and raw-water systems",
      "Thru-hulls & seacocks inspection",
      "Pump electrical supply diagnosis",
    ],
    symptoms: [
      "Bilge pump runs nonstop or never runs",
      "Weak or no freshwater pressure",
      "Head or holding tank problems",
      "Visible leaks at fittings or seacocks",
      "Livewell / raw-water pump failure",
      "High bilge water after rain or AC use",
    ],
    whenToCall:
      "Call for boat plumbing repair if bilge pumps cycle constantly, water pressure fails, you see unexplained bilge water, or a head/holding system fails before guests or a trip.",
    duration: "1–4 hrs typical",
    icon: "systems",
    quickAnswer:
      "Boat plumbing repair covers bilge pumps, freshwater systems, heads, livewell, seacocks, and related leaks or failures. Constant bilge running or weak water pressure needs diagnosis, not random part swaps. Mobile service in Fort Lauderdale and South Florida when access allows.",
    seoTitle: "Boat Plumbing Repair Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Boat plumbing repair in Fort Lauderdale. Bilge, freshwater, heads, livewell, seacocks. Free estimates — Doctor Yachts.",
    keywords: [
      "boat plumbing repair Fort Lauderdale",
      "boat plumbing repairs South Florida",
      "bilge pump repair Fort Lauderdale",
      "marine plumbing Florida",
      "boat pump repair",
    ],
    images: [
      {
        src: "/images/service-systems.jpg",
        alt: "Marine bilge pumps and boat systems compartment",
        caption: "Bilge and systems compartment work",
      },
      {
        src: "/images/service-electrical.jpg",
        alt: "Electrical supply diagnosis for boat pumps",
        caption: "Pumps need healthy electrical supply",
      },
      {
        src: "/images/service-dockside.jpg",
        alt: "Dockside boat plumbing repair service",
        caption: "Dockside plumbing repairs when access allows",
      },
    ],
    faqs: [
      {
        question: "My bilge pump runs constantly—what’s wrong?",
        answer:
          "Causes include a stuck float switch, a real leak, wiring faults, or a failing pump. We diagnose the root cause so you are not masking a serious issue. Treat constant cycling as a diagnostic priority.",
      },
      {
        question: "Do you repair marine heads and holding tanks?",
        answer:
          "Yes. We diagnose and repair common head, macerator, and holding-tank plumbing issues, including related electrical supply to pumps.",
      },
      {
        question: "Can you service seacocks and thru-hulls?",
        answer:
          "We inspect operation and condition of seacocks and related plumbing. If a seacock needs haul-out replacement, we identify it early and help plan the correct path.",
      },
      {
        question: "Is constant bilge running dangerous?",
        answer:
          "It can be. It may hide a leak or leave you without a working pump when you need it. Treat constant cycling as a diagnostic priority.",
      },
    ],
  },
  {
    id: "outboard",
    slug: "outboard-motor-repair",
    title: "Outboard Motor Repair in Fort Lauderdale",
    summary: "Diagnostic-first outboard repair—Mercury and Yamaha common platforms.",
    description:
      "Outboard motor repair in Fort Lauderdale: no-starts, overheating, power loss, and dockside service for center consoles and fishing boats when access allows.",
    content: [
      "Outboard motor repair in Fort Lauderdale is everyday work for center consoles and fishing boats. Doctor Yachts provides diagnostic-first outboard repair and maintenance for owners who want clarity before parts and honest guidance before anyone mentions a repower you may not need.",
      "We service common no-start, overheating (including weak telltale/pee stream), rough running, power loss, and charging-related outboard issues. Interval service—including 100-hour style items—lives on our boat maintenance page. Many jobs are completed dockside at Fort Lauderdale and South Florida docks.",
      "Popular platforms include common Mercury and Yamaha applications. For brand warranty work, a factory dealer may be required—we’ll tell you if that’s the better path. Free estimates after we understand the symptoms and motor family.",
    ],
    sections: [
      {
        heading: "What outboard motor repair covers",
        body: [
          "Outboard repair spans starting systems, fuel delivery clues, cooling/telltale flow, running quality, and charging behavior. Weekend no-starts are often electrical or safety-circuit related; overheating is often impeller, intake, or restriction related; power loss needs systematic diagnosis—not random sensor swaps.",
          "Interval service covers manufacturer-guided items adapted to saltwater use: fluids, gear lube where applicable, impeller inspection planning, and system checks that prevent Saturday failures. For dedicated 100-hour or 300-hour interval work, see boat maintenance.",
        ],
        list: [
          "No-start and hard-start diagnosis",
          "Overheating and weak telltale stream",
          "Rough idle, surging, and power loss",
          "Charging issues after running",
          "Alarm codes / limp-mode investigation",
          "Dockside outboard service when access allows",
        ],
      },
      {
        heading: "Dealer wait vs independent mobile outboard service",
        body: [
          "Dealers are the right path for many warranty and brand-program jobs. Independent mobile service is often faster for out-of-warranty no-starts, cooling issues, and maintenance when you need the boat for the weekend and the boat already sits at a working dock.",
          "We focus on root cause and repair—not upselling a repower by default. If the motor is truly at end of life, we say so with reasons you can verify.",
        ],
      },
      {
        heading: "Fort Lauderdale outboard realities",
        body: [
          "Grass, heat, and long runs punish cooling systems. Sitting between trips punishes batteries and fuel. Twin and triple setups add complexity—one motor’s charging or idle issue can look like a different problem until tested correctly.",
          "Share motor make/model/hours if known, plus telltale behavior and when the problem appears (cold start, hot restart, cruise). That history speeds dockside diagnosis.",
        ],
      },
    ],
    process: [
      {
        title: "Motor & symptom details",
        detail:
          "Make/model/hours if known, single/twin/triple, no-start vs overheat vs power loss, telltale notes.",
      },
      {
        title: "Dockside diagnosis",
        detail:
          "Starting path, cooling clues, running quality, and charging checks matched to the complaint.",
      },
      {
        title: "Repair options",
        detail:
          "Clear findings, free estimate for recommended work, dealer path if warranty requires it.",
      },
      {
        title: "Service log",
        detail:
          "What was fixed and what interval item is due next for saltwater use.",
      },
    ],
    whatWeCheck: [
      "Battery and cranking quality",
      "Safety lanyard / kill circuits",
      "Telltale / cooling discharge",
      "Fuel supply basics (primer, level, separators when relevant)",
      "Idle and running quality clues",
      "Charging after running",
      "Visible lower unit and cowling access issues",
      "Service interval status",
    ],
    features: [
      "Outboard motor repair & diagnostics",
      "No-start and overheating service",
      "Mercury & Yamaha common platforms",
      "Charging and electrical checks",
      "Dockside outboard repair when possible",
    ],
    symptoms: [
      "Outboard won’t start",
      "Weak or missing pee stream / overheating",
      "Rough idle or power loss",
      "Charging light or dead battery after running",
      "Alarm codes or limp mode",
    ],
    whenToCall:
      "Book outboard motor repair in Fort Lauderdale when the motor won’t start, overheats, loses power, or is due for interval service. Dockside diagnosis often solves weekend-killers without a dealer queue.",
    duration: "1–6 hrs typical",
    icon: "engine",
    quickAnswer:
      "Outboard motor repair in Fort Lauderdale covers no-starts, overheating, power loss, and scheduled service. Doctor Yachts diagnoses first and often works dockside so you avoid unnecessary towing. Free estimates. Also serves nearby Broward and South Florida.",
    seoTitle: "Outboard Motor Repair Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Outboard motor repair Fort Lauderdale—no-starts, overheating, diagnostic-first mobile mechanic. Free estimates — Doctor Yachts.",
    keywords: [
      "outboard motor repair Fort Lauderdale",
      "outboard repair Fort Lauderdale",
      "outboard service Fort Lauderdale",
      "Mercury outboard service Fort Lauderdale",
      "Yamaha outboard service Fort Lauderdale",
      "boat motor repair Fort Lauderdale",
    ],
    images: [
      {
        src: "/images/service-outboard.jpg",
        alt: "Twin outboard motors on a boat at Fort Lauderdale marina",
        caption: "Outboard motors at the dock",
      },
      {
        src: "/images/service-engine.jpg",
        alt: "Marine power systems related to outboard repair",
        caption: "Power and systems diagnosis support",
      },
      {
        src: "/images/service-cooling.jpg",
        alt: "Cooling-related service for outboard overheating",
        caption: "Cooling and overheating related service",
      },
    ],
    faqs: [
      {
        question: "Do you work on Mercury and Yamaha outboards?",
        answer:
          "We service common outboard platforms including popular Mercury and Yamaha applications. For brand warranty work, a factory dealer may be required—we'll tell you if that's the better path.",
      },
      {
        question: "Can you do outboard repair at my Fort Lauderdale dock?",
        answer:
          "Often yes. Many outboard diagnostics, impeller, electrical, and maintenance jobs are completed dockside when access and parts allow.",
      },
      {
        question: "Do you do 100-hour outboard service?",
        answer:
          "Yes, as boat maintenance. Interval items—oil/filters where applicable, gear lube, impeller inspection, and system checks—are scheduled on the boat maintenance page, not as a separate destination.",
      },
      {
        question: "Should I repower or repair?",
        answer:
          "It depends on condition, hours, cost of repair vs remaining life, and your use case. We diagnose first and give an honest recommendation—not a default repower pitch.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export function servicesInHubOrder() {
  return HUB_SERVICE_ORDER.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is Service => Boolean(s),
  );
}

export const bookingServices = servicesInHubOrder().map((s) => ({
  id: s.id,
  title: s.title,
  summary: s.summary,
  slug: s.slug,
}));

export const vesselTypes = [
  "Center Console",
  "Cabin Cruiser",
  "Sport Yacht",
  "Motor Yacht",
  "Sailboat / Auxiliary",
  "Pontoon / Deck Boat",
  "Other",
] as const;

export const timeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
] as const;
