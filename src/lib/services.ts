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

export const services: Service[] = [
  {
    id: "engine-repair",
    slug: "marine-engine-repair",
    title: "Marine Engine Repair",
    summary: "Inboard & outboard engine repair—diagnose first, fix what matters.",
    description:
      "Inboard and outboard engine repairs for boats and yachts in the Fort Lauderdale and South Florida area. Hard starts, overheating, power loss, generators—diagnose first, then fix what matters.",
    content: [
      "Need marine engine repair in Fort Lauderdale, or nearby South Florida? Doctor Yachts is an independent boat and yacht mechanic focused on finding the real fault before parts get thrown at the problem. Whether your vessel is a center console, cabin cruiser, sport yacht, or motor yacht, we treat engines as systems—fuel, air, spark/compression, cooling, and controls—not a shopping list of sensors.",
      "Hard starts, overheating, power loss, rough idle, exhaust issues, and generator load problems are everyday calls in Broward and Miami-Dade. Salt air, heat, and year-round use punish cooling passages, connections, and fuel systems. A proper marine engine repair visit separates “needs a battery” from “needs a fuel pump,” “needs cooling flow,” or “needs deeper mechanical work”—so you don’t pay twice for the same symptom.",
      "We offer mobile and dockside marine engine repair when access allows at Fort Lauderdale marinas, private docks, and nearby waterways. Many diagnostics and repairs never need a travel lift. When a job does need haul-out or specialized equipment, we tell you early and help plan the next step. Free estimates apply to recommended work after diagnosis.",
    ],
    sections: [
      {
        heading: "What marine engine repair actually covers",
        body: [
          "Marine engine repair is broader than “swap the part that looks dirty.” On modern gas and diesel platforms, the same no-start can come from a weak battery, a failed safety interlock, a fuel delivery problem, or a control-system fault. We start with the symptom history: when it last ran well, what changed, alarms, fuel state, and how the boat is stored.",
          "On inboards and sterndrives, we often evaluate raw-water cooling paths, exhaust risers/manifolds where relevant, charging under load, and idle quality. On outboards, we add telltale flow, cowling access realities, and common service-interval items. Generators get load-side thinking—will it carry air conditioning and house loads, or only idle in the slip?",
        ],
        list: [
          "No-start and hard-start diagnosis (cranking quality, safety circuits, fuel, ignition/injection)",
          "Overheating and cooling-path verification (often linked to separate cooling service)",
          "Power loss, surging, rough idle, and smoke evaluation",
          "Mercruiser / sterndrive-style diagnostic checks",
          "Marine diesel service concerns with clear findings",
          "Generator service and load-related complaints",
          "Mobile/dockside engine work when access and parts allow",
        ],
      },
      {
        heading: "Inboard vs outboard: how the approach differs",
        body: [
          "Inboard and sterndrive packages live inside the boat. Access, heat soak, exhaust routing, and raw-water plumbing all change how we diagnose. A temperature climb that only appears after 15 minutes may be a restriction, a thermostat, or a heat exchanger issue—not something you see in a 30-second idle at the dock.",
          "Outboards put cooling telltales, cowling electronics, and lower-unit realities front and center. Many Fort Lauderdale center consoles live hard: fishing, long runs, and sitting in the sun between weekends. Outboard motor repair often overlaps with electrical charging checks and impeller/cooling service. If your primary need is outboard-specific, also see our dedicated outboard motor repair page.",
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
          "If the root cause is primarily electrical or cooling rather than the engine core, we say so and point you to the right service path. That honesty saves money and keeps the “doctor” method intact.",
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
      "Generator load complaints when applicable",
      "Codes and service history when available",
    ],
    features: [
      "Inboard & outboard engine repair",
      "Mercruiser / sterndrive diagnostics",
      "Compression & performance testing",
      "Cooling, fuel & exhaust systems",
      "Generator service & load testing",
      "Mobile / dockside when available",
    ],
    symptoms: [
      "Boat won’t start or cranks weakly",
      "Overheating at idle or under load",
      "Power loss, surging, or rough idle",
      "Smoke, unusual noise, or fuel smell",
      "Generator won’t carry house loads",
      "Check-engine / warning alarms",
    ],
    whenToCall:
      "Call for marine engine repair when the boat won’t start, runs hot, loses power, or throws alarms—especially before a planned trip. Early diagnosis at the dock in Fort Lauderdale or South Florida often prevents a tow and more expensive engine damage.",
    duration: "2–8 hrs typical",
    icon: "engine",
    quickAnswer:
      "Marine engine repair covers inboard and outboard no-starts, overheating, power loss, and generator issues. Doctor Yachts diagnoses first in Fort Lauderdale and South Florida, then repairs with dockside service when access allows. Free estimates before major parts work.",
    seoTitle: "Marine Engine Repair, Inboard & Outboard | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Expert inboard & outboard marine engine repair in Fort Lauderdale & South Florida. Diagnose-first dockside service. Free estimates — Doctor Yachts.",
    keywords: [
      "marine engine repair Fort Lauderdale",
      "inboard engine repair Fort Lauderdale",
      "outboard engine repair Fort Lauderdale",
      "boat motor repair Fort Lauderdale",
      "Mercruiser repair Fort Lauderdale",
      "marine diesel repair Fort Lauderdale",
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
          "We diagnose and repair hard starts, overheating, power loss, fuel and cooling faults, exhaust issues, rough running, and generator problems on marine engines.",
      },
      {
        question: "Do you work on outboards and inboards?",
        answer:
          "Yes. We service gas and diesel inboards, outboards, and many marine generators used on boats and yachts.",
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
    title: "Boat Electrical Repairs",
    summary: "Charging, wiring, shore power—you can't hit the water with a faulty electrical system.",
    description:
      "Boat electrical repairs in Fort Lauderdale and South Florida: batteries, chargers, inverters, shore power, grounds, and distribution faults—diagnosed as a system, not a battery-swap lottery.",
    content: [
      "Turn to Doctor Yachts for boat electrical repairs in Fort Lauderdale, and across Miami and Palm Beach when scheduled. Dead batteries, no charge underway, shore power trips, dim electronics under load, and intermittent shorts are core work for a marine mechanic who treats electrical systems as a complete path—not a single box on the bulkhead.",
      "Intermittent marine electrical issues are often the hardest to catch in salt air and heat. Green crust on grounds, high-resistance cable ends, failing chargers, and parasitic draws can look like “bad batteries” until the charging and distribution path is tested properly. We use a systems approach so parts-swapping does not become your weekend hobby.",
      "Mobile and dockside electrical service is available when access allows. Bring photos of the panel, battery bank, and shore power inlet when you request a free estimate—it speeds triage and helps us arrive prepared.",
    ],
    sections: [
      {
        heading: "What boat electrical repairs include",
        body: [
          "Electrical repair on a boat is rarely just the battery. The bank must accept charge, the charger or alternator must deliver it, cables and grounds must carry current without excessive voltage drop, and distribution breakers/fuses must protect without nuisance trips. We start at the symptom and walk the path.",
          "Shore power problems—trips, reverse polarity lights, no power at the dock—need inlet, cord, isolation, and onboard distribution checks. Underway charging problems need alternator/regulator thinking plus load context (thrusters, windlass, large electronics).",
        ],
        list: [
          "Battery testing under load (not just a resting voltage glance)",
          "Charger, inverter, and inverter-charger behavior",
          "Alternator / charging system complaints",
          "Shore power inlet, cord, and breaker issues",
          "DC/AC distribution troubleshooting",
          "Corroded connections, grounds, and voltage drop",
          "Parasitic draw investigation when batteries die overnight",
        ],
      },
      {
        heading: "Why South Florida electrical faults multiply",
        body: [
          "Salt air attacks grounds and connections. Heat stresses batteries and electronics. Modern boats stack thrusters, large house banks, lithium upgrades, and navigation packages on the same electrical backbone. A single high-resistance ground can look like “bad electronics” until voltage drop testing proves otherwise.",
          "Owners in Fort Lauderdale marinas often jump-start for months before calling. Jump-starting can get you home, but it can hide a charging fault that leaves you dark again next weekend. Diagnose the path once—save the repeated dock drama.",
        ],
      },
      {
        heading: "How we document electrical findings",
        body: [
          "You receive plain-language findings: what failed, what is weak, and what is optional. Free estimates cover recommended repair work. Notes matter for surveys, resale, and the next technician—especially after lithium or house-bank upgrades.",
          "We are not a general handyman and not a full multi-display nav package design firm. We keep electronics reliable by fixing the power and distribution foundation they depend on. For large installation packages, we can discuss scope or coordinate when a specialist installer is the better path.",
        ],
      },
    ],
    process: [
      {
        title: "Symptom & photos",
        detail:
          "Dead overnight? Trips on shore power? Brownouts under thruster? Share symptoms, battery age, and panel photos if you have them.",
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
      "DC/AC distribution troubleshooting",
      "On-site / dockside electrical repair",
      "Voltage drop & ground diagnosis",
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
      "Book boat electrical repairs when batteries keep dying, charging is weak, shore power trips, or electronics brown out. Intermittent faults and burning smells need prompt diagnosis—don’t keep jump-starting and hoping.",
    duration: "1–6 hrs typical",
    icon: "electrical",
    quickAnswer:
      "Boat electrical repairs fix dead batteries, weak charging, shore power trips, and intermittent wiring faults. We test the full path—batteries, chargers, alternators, and grounds—across Fort Lauderdale and South Florida docks. Free estimates after diagnosis.",
    seoTitle: "Boat Electrical Repairs | Doctor Yachts | Fort Lauderdale & South Florida, FL",
    seoDescription:
      "Expert boat electrical repairs in Fort Lauderdale & South Florida. Batteries, charging, shore power, grounds. Free estimates — Doctor Yachts.",
    keywords: [
      "boat electrical repairs Fort Lauderdale",
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
          "We focus on electrical health, charging, distribution, and fault finding that keeps electronics reliable. For large multi-display navigation packages, we can discuss scope or coordinate with a specialist installer when that is the better path.",
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
    title: "Cooling System Repairs",
    summary: "Keep your engine cool and running safely—impellers, heat exchangers, raw-water flow.",
    description:
      "Cooling system repair services in Fort Lauderdale and South Florida. Overheating, weak flow, clogged exchangers, impeller service—stop damage before a hot engine becomes an expensive engine.",
    content: [
      "Overheating is one of the fastest ways to destroy an otherwise healthy marine engine. Doctor Yachts provides cooling system repair services for Fort Lauderdale, and nearby South Florida boats—raw-water and closed cooling paths, impellers, sea strainers, thermostats, heat exchangers, hoses, and flow under the right conditions.",
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
          "Then book cooling system repairs. Bring notes: idle vs cruise heat, recent grounding or grass, storage history, and any alarms. That history shortens diagnosis time at Fort Lauderdale and South Florida docks.",
        ],
      },
      {
        heading: "Dockside cooling work vs haul-out",
        body: [
          "Impellers, strainers, hoses, and many thermostat jobs are strong dockside candidates when access allows. Complex exchanger work or jobs requiring equipment you cannot bring aboard may need shop or haul-out planning. We tell you early which path you are on.",
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
      "Heat exchanger inspection",
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
      "Stop running if temperatures keep rising. Book cooling system repairs after any overheat event, weak telltale stream, or repeated strainer issues—before a weekend trip turns into engine damage.",
    duration: "1–5 hrs typical",
    icon: "diagnostics",
    quickAnswer:
      "Boat cooling system repairs address overheating from failed impellers, clogged strainers, stuck thermostats, or fouled heat exchangers. Stop running if temps keep rising. Doctor Yachts offers dockside cooling diagnostics in Fort Lauderdale and South Florida. Free estimates.",
    seoTitle: "Cooling System Repairs | Doctor Yachts | Fort Lauderdale & South Florida, FL",
    seoDescription:
      "Boat cooling system repairs in Fort Lauderdale & South Florida. Overheating, impellers, strainers, exchangers. Free estimates — Doctor Yachts.",
    keywords: [
      "cooling system repairs boat Fort Lauderdale",
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
    id: "diagnostics",
    slug: "boat-diagnostics",
    title: "Boat & Yacht Diagnostics",
    summary: "We'll diagnose your boat problems clearly—before you buy parts you don't need.",
    description:
      "Multi-system boat diagnostics in Fort Lauderdale & South Florida, FL. Engines, electrical, bilge, and safety systems with written findings and a prioritized repair roadmap.",
    content: [
      "Doctor Yachts performs multi-system mechanical diagnostics for boat and yacht owners in Fort Lauderdale, Miami, and surrounding South Florida docks. Use a diagnostic before peak season, after purchase, when something only fails “sometimes,” or after another shop replaced parts without solving the symptom.",
      "You receive clear findings and a prioritized repair roadmap—not a vague invoice. Pre-purchase mechanical checks and sea-trial support help buyers understand true condition beyond a walkthrough. Pre-season diagnostics help you start the year ready, not reactive—especially important in Florida’s year-round salt and heat.",
      "Diagnostics are ideal when multiple systems might be involved—charging vs starter, cooling vs fuel, bilge pump vs wiring. Free estimates for recommended work after the inspection.",
    ],
    sections: [
      {
        heading: "What’s included in a vessel diagnostic",
        body: [
          "A diagnostic is a structured multi-system check, not a five-minute glance. Scope depends on vessel type, but typically covers engines and related systems, electrical and charging health, bilge and critical pumps, and other mechanical items that affect safety and reliability.",
          "You leave with documented findings: what is urgent, what can wait, and what to budget next. That paper trail helps owners, buyers, captains, and surveyors.",
        ],
        list: [
          "Engine running quality and obvious cooling/fuel clues",
          "Battery and charging path baseline",
          "Bilge pumps and float switch behavior",
          "Critical systems function checks by vessel type",
          "Notes on access issues and recommended next tests",
          "Prioritized repair roadmap with free estimate path",
        ],
      },
      {
        heading: "Diagnostics vs a formal marine survey",
        body: [
          "We provide mechanical and systems diagnostics. A formal survey for insurance or purchase is typically done by a licensed surveyor. We can complement a surveyor with deeper mechanical findings and sea-trial support when the boat needs hands-on systems evaluation.",
          "If you are buying used in Fort Lauderdale or Miami, a mechanical diagnostic can reveal issues a cosmetic walkthrough misses—especially intermittent electrical and cooling problems.",
        ],
      },
      {
        heading: "When diagnostics save the most money",
        body: [
          "Intermittent faults, multi-system symptoms, pre-purchase decisions, and post-parts-swapping second opinions. Guessing across three weekends of parts is more expensive than one structured diagnostic day.",
          "Dockside diagnostics are common when the vessel is accessible. Sea-trial support is scheduled when underway behavior is required.",
        ],
      },
    ],
    process: [
      {
        title: "Define the goal",
        detail:
          "Pre-purchase, pre-season, intermittent fault, or second opinion—scope follows the goal.",
      },
      {
        title: "Multi-system inspection",
        detail:
          "Engines, electrical/charging, bilge/pumps, and related systems matched to vessel type.",
      },
      {
        title: "Sea trial if needed",
        detail:
          "Underway checks when the fault only appears under load or at temperature.",
      },
      {
        title: "Written findings",
        detail:
          "Prioritized roadmap and free estimates for recommended repairs.",
      },
    ],
    whatWeCheck: [
      "Engine starting and running quality",
      "Cooling indicators and overheating history",
      "Battery and charging baseline",
      "Shore power symptoms if reported",
      "Bilge pumps and high-water risk clues",
      "Visible leaks and critical hoses",
      "Safety-related systems access",
      "Owner/captain reported intermittent events",
    ],
    features: [
      "Pre-purchase mechanical checks",
      "Pre-season vessel health inspections",
      "Sea trial support",
      "Written findings report",
      "Prioritized repair roadmap",
      "Mobile / dockside diagnostics",
    ],
    symptoms: [
      "Intermittent faults no one can recreate",
      "Buying a used boat or yacht",
      "Pre-season readiness check",
      "Multiple systems acting up",
      "Second opinion after parts-swapping",
      "Preparing for survey or long trip",
    ],
    whenToCall:
      "Book boat diagnostics before peak season, after purchase, or when problems are intermittent. A structured multi-system check is faster and cheaper than guessing parts across several weekends.",
    duration: "Half or full day",
    icon: "diagnostics",
    quickAnswer:
      "Boat diagnostics inspect engines, electrical, bilge, and safety systems and deliver written findings with a repair roadmap. Use before season, after purchase, or when faults are intermittent. Available mobile in Fort Lauderdale and South Florida. Free estimates on recommended work.",
    seoTitle: "Boat Diagnostics | Doctor Yachts | Fort Lauderdale & South Florida, FL",
    seoDescription:
      "Boat & yacht diagnostics in Fort Lauderdale & South Florida. Written findings, repair roadmap, free estimates on recommended work — Doctor Yachts.",
    keywords: [
      "boat diagnostics Fort Lauderdale",
      "yacht diagnostics Fort Lauderdale",
      "pre-purchase boat inspection Florida",
      "pre-season boat service",
      "marine inspection South Florida",
    ],
    images: [
      {
        src: "/images/service-diagnostics.jpg",
        alt: "Boat diagnostics at helm and systems inspection",
        caption: "Multi-system diagnostic session",
      },
      {
        src: "/images/service-engine.jpg",
        alt: "Engine checks during yacht diagnostics",
        caption: "Engine and mechanical evaluation",
      },
      {
        src: "/images/service-electrical.jpg",
        alt: "Electrical checks during boat diagnostic inspection",
        caption: "Electrical and charging baseline",
      },
    ],
    faqs: [
      {
        question: "What’s included in a vessel diagnostic?",
        answer:
          "A multi-system check of engines and related systems, electrical and charging, bilge and critical pumps, and other mechanical items based on vessel type—plus documented findings and next steps.",
      },
      {
        question: "Is this a full survey?",
        answer:
          "We provide mechanical and systems diagnostics. For a formal survey, we can complement a licensed surveyor with deeper mechanical findings and sea-trial support.",
      },
      {
        question: "Can diagnostics be done at my marina?",
        answer:
          "Yes. Many diagnostics are completed dockside in Fort Lauderdale and South Florida when the vessel is accessible. Sea-trial support is scheduled when the job requires underway testing.",
      },
      {
        question: "How long does a diagnostic take?",
        answer:
          "Typically half or full day depending on vessel size, access, and whether a sea trial is required. We’ll estimate time when you book.",
      },
    ],
  },
  {
    id: "maintenance",
    slug: "boat-maintenance",
    title: "Boat Maintenance",
    summary: "Routine and seasonal boat maintenance so you spend time on the water—not waiting on repairs.",
    description:
      "Boat maintenance in Fort Lauderdale & South Florida, FL: oil service, impellers, zincs, belts, batteries, and manufacturer-interval service with clear logs.",
    content: [
      "Boat owners throughout Fort Lauderdale and South Florida can depend on Doctor Yachts for quality boat maintenance scheduled to manufacturer intervals and how you actually use the boat. Preventative maintenance is cheaper than emergency no-starts the morning of a charter or family trip.",
      "Typical service includes oil and filters, impeller inspection/replacement planning, belts, zincs, fluid checks, cooling attention, battery/charging health, and system function tests. Clear service notes keep your maintenance history organized for resale or surveys.",
      "Book outboard engine maintenance or full seasonal commissioning early—South Florida calendars fill before peak season. Free estimates for packages available.",
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
        heading: "What a maintenance visit usually includes",
        body: [
          "Scope is matched to vessel and hours: oil and filters where applicable, gear lube on relevant drives, impeller and cooling attention, zincs, belts, fluid checks, and basic electrical health. Outboard interval service follows manufacturer guidance adapted to saltwater use. For a dedicated interval visit, see our 100-hour service and the heavier 300-hour service.",
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
          "We propose interval work plus saltwater realities—impellers, zincs, batteries, cooling.",
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
      "Impellers, belts & zincs",
      "Seasonal commissioning",
      "Service logs for resale value",
      "Battery & charging health checks",
    ],
    symptoms: [
      "Overdue oil / hour interval",
      "Pre-season checklist needed",
      "Unknown service history on a used boat",
      "Impellers / zincs not inspected this year",
      "Planning a long trip or cruise",
      "Battery and charging “seems fine” but untested",
    ],
    whenToCall:
      "Schedule boat maintenance by manufacturer hours, before peak season, and after buying a boat with unknown history. Annual saltwater service is the baseline for Fort Lauderdale and South Florida use.",
    duration: "2–5 hrs typical",
    icon: "maintenance",
    quickAnswer:
      "Boat maintenance in Florida should follow manufacturer hours plus saltwater reality—oil and filters, impellers, zincs, belts, and seasonal checks. Doctor Yachts provides scheduled maintenance in Fort Lauderdale and South Florida. Free estimates for packages.",
    seoTitle: "Boat Maintenance | Doctor Yachts | Fort Lauderdale & South Florida, FL",
    seoDescription:
      "Boat maintenance in Fort Lauderdale & South Florida. Oil service, outboard maintenance, zincs, seasonal commissioning. Free estimates — Doctor Yachts.",
    keywords: [
      "boat maintenance Fort Lauderdale",
      "boat maintenance South Florida",
      "outboard engine maintenance",
      "annual boat service Florida",
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
        question: "Do you offer seasonal packages?",
        answer:
          "Yes. We provide pre-season commissioning, in-season maintenance, and winterization options tailored to your boat or yacht.",
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
        question: "Do you offer 100-hour and 300-hour service?",
        answer:
          "Yes. Manufacturer-interval dockside service is a first-class offering: 100-hour / annual saltwater service and the heavier 300-hour interval. We diagnose first and estimate before parts.",
      },
    ],
  },
  {
    id: "hour-100",
    slug: "100-hour-service",
    title: "100-Hour Service",
    summary: "Manufacturer-interval dockside service around 100 hours or annual saltwater use.",
    description:
      "100-hour boat and yacht service in Fort Lauderdale and South Florida: oil and filters, gear lube, impeller and cooling check, zincs, belts, batteries, fluids, and a service log. The visit that prevents Saturday no-starts.",
    content: [
      "Most manufacturer manuals put a serious service around 100 hours—or once a year if you run fewer hours in saltwater. Doctor Yachts provides 100-hour service at the dock in Fort Lauderdale and across South Florida when access allows. This is scheduled marine maintenance, not a parts dump: we follow the interval, inspect what salt and heat actually punish, and tell you what can wait.",
      "A typical 100-hour visit covers engine oil and filters, gear lube where the drive or lower unit calls for it, impeller and cooling-path checks, zincs, belts, batteries and charging, fluid levels, and function tests you can keep in a service log. Sitting between weekends still ages fuel, batteries, and impellers—so “low hours” is not a free pass in Florida.",
      "Think of 100-hour service as the visit that prevents Saturday no-starts. Diagnose first. If we find a fault that is not interval work—weak charging, restricted cooling, a safety circuit—we say so and give a free estimate before major parts. Book the 100-hour service, or start with a free estimate if you are not sure the hours or last service date.",
    ],
    sections: [
      {
        heading: "What 100-hour service actually includes",
        body: [
          "The 100-hour / annual interval is where most gas and diesel manuals put oil, filters, and a systems walk-through. On outboards we add gear-case lube when due, telltale/cooling attention, and cowling-access items. On inboards and sterndrives we add raw-water clues, belts, and accessible fluid checks. Scope follows the vessel and the manual—not a one-size invoice.",
          "You leave with notes: what was inspected, what was replaced, and what the next interval looks like. That log helps resale, surveys, and your own trip planning.",
        ],
        list: [
          "Engine oil and filters (per manufacturer hours / annual saltwater use)",
          "Gear lube on relevant outboards, sterndrives, and transmissions",
          "Impeller inspection or replacement planning and cooling-path check",
          "Zincs / anodes and visible corrosion points",
          "Belts, hoses, and accessible fluid levels",
          "Battery load and charging health",
          "Function tests — bilge, kill circuits, basic running quality",
          "Written service log for your records",
        ],
      },
      {
        heading: "Why Florida boats miss the 100-hour window",
        body: [
          "South Florida use is year-round salt, heat, and grass—not a three-month season. Hours accumulate on fishing weekends and short runs. Other boats sit. Both patterns punish cooling, charging, and fuel. Waiting until something fails is how Saturday morning becomes a tow.",
          "If you are overdue, book now. If you are near the interval, we will tell you what is due versus what is optional. See also our broader boat-maintenance page and the heavier 300-hour service when the manual or hours call for deeper work.",
        ],
      },
      {
        heading: "Dockside 100-hour service vs a dealer wait",
        body: [
          "Many interval items are strong dockside candidates when the boat is floating and accessible. You often skip a tow and a yard minimum. Dealers remain the right path for warranty-program work—we will say so if that is the better fit.",
          "We are not here to upsell a parts kit you do not need. Findings first. Free estimates on recommended extras before you authorize them.",
        ],
      },
    ],
    process: [
      {
        title: "Share hours & last service",
        detail:
          "Engine hours, last oil/impeller/zinc work, vessel type, and how you use the boat. Photos of the hour meter help.",
      },
      {
        title: "Interval plan",
        detail:
          "We match manufacturer guidance to saltwater use—oil, filters, gear lube, cooling, zincs, batteries.",
      },
      {
        title: "Dockside service",
        detail:
          "Work completed at the marina or private dock when access allows. Diagnose first if something is already wrong.",
      },
      {
        title: "Service log & next interval",
        detail:
          "What was done, what is due around 300 hours or next season, and a free estimate path for anything we found.",
      },
    ],
    whatWeCheck: [
      "Hour meter and last-service notes",
      "Oil and filter interval status",
      "Gear lube condition where applicable",
      "Impeller / cooling telltale or flow clues",
      "Zincs and visible bonding/anode points",
      "Belts and accessible hoses",
      "Battery condition and charging",
      "Bilge pump and basic safety function tests",
    ],
    features: [
      "100-hour / annual saltwater interval service",
      "Oil, filters & gear lube where due",
      "Impeller and cooling check",
      "Zincs, belts & batteries",
      "Function tests and service log",
      "Mobile / dockside in Fort Lauderdale & South Florida",
    ],
    symptoms: [
      "Approaching or past 100 hours",
      "Annual saltwater service is overdue",
      "Unknown last-service date on a used boat",
      "Pre-season checklist before heavy use",
      "Want to avoid Saturday no-starts",
      "Planning a long weekend or cruise",
    ],
    whenToCall:
      "Book 100-hour service when the hour meter or the calendar says you are due—especially before peak season or a trip. Annual saltwater use in Fort Lauderdale and South Florida is the baseline even if hours are low.",
    duration: "2–5 hrs typical",
    icon: "maintenance",
    quickAnswer:
      "100-hour service is manufacturer-interval dockside maintenance—oil and filters, gear lube, impeller and cooling checks, zincs, belts, batteries, and a service log. Doctor Yachts does this visit in Fort Lauderdale and South Florida to prevent Saturday no-starts. Diagnose first. Free estimates.",
    seoTitle: "100-Hour Boat Service | Doctor Yachts | Fort Lauderdale & South Florida",
    seoDescription:
      "100-hour boat & yacht service in Fort Lauderdale & South Florida. Oil, filters, impeller, zincs, batteries. Dockside interval service. Free estimates — Doctor Yachts.",
    keywords: [
      "100 hour service boat",
      "100 hour boat service Fort Lauderdale",
      "100 hour outboard service",
      "annual boat service South Florida",
      "servicio 100 horas",
      "yacht 100 hour maintenance",
    ],
    images: [
      {
        src: "/images/service-maintenance.jpg",
        alt: "100-hour boat service at a South Florida marina dock",
        caption: "Dockside 100-hour interval service",
      },
      {
        src: "/images/service-outboard.jpg",
        alt: "Outboard motors during 100-hour service",
        caption: "Outboard 100-hour items",
      },
      {
        src: "/images/service-dockside.jpg",
        alt: "Mobile 100-hour marine service at the marina",
        caption: "Mobile interval service when access allows",
      },
    ],
    faqs: [
      {
        question: "What is included in 100-hour boat service?",
        answer:
          "Typically oil and filters, gear lube where applicable, impeller and cooling checks, zincs, belts, batteries/charging, fluids, function tests, and a written service log. Scope follows the vessel and manufacturer interval—not a parts dump.",
      },
      {
        question: "Do I need 100-hour service if I barely ran the boat?",
        answer:
          "Often yes on the calendar. Saltwater, heat, and sitting still age fuel, batteries, and impellers even with low hours. Annual service is the Florida baseline; we adjust after we see the boat.",
      },
      {
        question: "Can you do 100-hour service at my dock?",
        answer:
          "Usually yes in Fort Lauderdale and South Florida when marina or private-dock access allows. Many interval items never need a travel lift.",
      },
      {
        question: "How is this different from 300-hour service?",
        answer:
          "100-hour is the regular interval visit. 300-hour is the heavier inspection many manuals put around 250–300 hours—deeper cooling, electrical, and fuel-system attention. We recommend the one that matches your hours and history.",
      },
      {
        question: "Do you give a free estimate before extra parts?",
        answer:
          "Yes. Interval items are planned up front. Anything we find that is not routine gets a free estimate before you authorize major parts and labor.",
      },
    ],
  },
  {
    id: "hour-300",
    slug: "300-hour-service",
    title: "300-Hour Service",
    summary: "The heavier interval—deeper cooling, electrical, and fuel-system inspection around 250–300 hours.",
    description:
      "300-hour boat and yacht service in Fort Lauderdale and South Florida. Deeper dockside inspection: cooling and heat-exchanger attention, thorough electrical and fuel-system checks, and the items many manuals put at 250–300 hours. Findings before parts.",
    content: [
      "Around 250–300 hours, most marine manuals stop calling it a simple oil change. Doctor Yachts provides 300-hour service as the heavier interval visit—still dockside in Fort Lauderdale and South Florida when access allows. This is not a parts dump. We inspect what the hours actually stress, document findings, and estimate extras before you buy them.",
      "Expect deeper cooling attention (impeller plus heat-exchanger and raw-water path clues on inboards), more thorough electrical and charging checks, fuel-system inspection, and the drive or lower-unit items many makers group at this interval. Twin and triple setups take longer; we plan time honestly.",
      "If you are past 300 hours, or you bought a boat with thin records, this visit is how you stop guessing. Diagnose first. Free estimates on recommended work. Pair it with regular 100-hour service so you are not jumping from neglect to a yard invoice.",
    ],
    sections: [
      {
        heading: "What 300-hour service covers",
        body: [
          "Think of 300-hour service as a structured deeper inspection plus the interval fluids. Cooling gets more than a glance: strainers, impeller condition, and heat-exchanger or raw-water clues that only show after real hours. Electrical gets load-aware charging and connection checks. Fuel systems get separator, supply, and leak/odor attention matched to the platform.",
          "We still follow the manufacturer list for your engines—then adapt to saltwater use in South Florida. You get a written picture of what is due now versus what can wait until the next 100-hour visit.",
        ],
        list: [
          "Interval fluids and filters plus the heavier 250–300 hour items",
          "Cooling path and heat-exchanger attention (inboards, as accessible)",
          "Impeller condition and raw-water restrictions",
          "Electrical, charging, and high-resistance connection checks",
          "Fuel-system inspection (separators, supply clues, leak/odor)",
          "Drive / lower-unit and gear-lube items when due",
          "Function tests and a prioritized findings list",
          "Free estimate before non-interval parts and labor",
        ],
      },
      {
        heading: "When 300-hour service is the right call",
        body: [
          "The hour meter is near 250–300, or you skipped a couple of 100-hour visits. The boat overheats only after a long run. Charging “seems fine” but has never been load-tested. You bought used and the binder is thin. Those are 300-hour conversations—not another bottle of oil and a hope.",
          "If the boat is already in failure (no-start, hot, flooding risk), we treat that first as repair, then fold interval work into the plan. Honesty about urgency is part of the job.",
        ],
      },
      {
        heading: "Still dockside — still diagnose first",
        body: [
          "A heavier interval does not automatically mean a haul-out. Many 300-hour inspections and services are completed at Fort Lauderdale and South Florida docks when access and parts allow. If exchanger work or a job needs shop equipment, we tell you early.",
          "We will not sell you a kit to look busy. Findings before parts. That is the same Doctor Yachts method as a no-start call—just scheduled.",
        ],
      },
    ],
    process: [
      {
        title: "Hours, history, and access",
        detail:
          "Hour meter, last major service, cooling or electrical complaints, marina and slip details.",
      },
      {
        title: "Deeper inspection plan",
        detail:
          "We outline 250–300 hour items for your engines—cooling, electrical, fuel, drives—before we start.",
      },
      {
        title: "Dockside work",
        detail:
          "Inspection and interval service at the boat when access allows. Findings explained as we go.",
      },
      {
        title: "Findings & free estimate",
        detail:
          "What is done, what is recommended, what can wait. Extras estimated before parts. Log for your file.",
      },
    ],
    whatWeCheck: [
      "Hour meter vs last documented service",
      "Cooling path, impeller, and exchanger clues",
      "Fuel separators and supply basics",
      "Battery, charging, and voltage-drop clues",
      "Belts, hoses, and visible leaks",
      "Gear lube / drive interval status",
      "Electrical connections that salt attacks",
      "Safety and bilge function tests",
    ],
    features: [
      "250–300 hour deeper interval service",
      "Cooling / heat exchanger attention",
      "Electrical and fuel-system inspection",
      "Findings before parts — not a kit dump",
      "Dockside when access allows",
      "Service log and next-interval plan",
    ],
    symptoms: [
      "Approaching or past 250–300 hours",
      "Skipped 100-hour visits and the boat feels tired",
      "Overheats only after a long run",
      "Thin service records on a used boat",
      "Charging or fuel issues that come and go",
      "Planning a season of heavier use",
    ],
    whenToCall:
      "Book 300-hour service when the manual or the hour meter puts you in the heavier interval—or when 100-hour visits have been skipped. Dockside in Fort Lauderdale and South Florida when access allows.",
    duration: "4–8 hrs typical",
    icon: "maintenance",
    quickAnswer:
      "300-hour service is the heavier manufacturer interval: deeper cooling and heat-exchanger attention, thorough electrical and fuel-system checks, plus fluids. Doctor Yachts does this dockside in Fort Lauderdale and South Florida when access allows. Findings before parts. Free estimates.",
    seoTitle: "300-Hour Boat Service | Doctor Yachts | Fort Lauderdale & South Florida",
    seoDescription:
      "300-hour boat & yacht service in Fort Lauderdale & South Florida. Deeper cooling, electrical & fuel inspection. Dockside. Free estimates — Doctor Yachts.",
    keywords: [
      "300 hour service boat",
      "300 hour boat service Fort Lauderdale",
      "250 hour marine service",
      "servicio 300 horas",
      "yacht 300 hour maintenance",
      "heat exchanger service boat",
    ],
    images: [
      {
        src: "/images/service-engine.jpg",
        alt: "300-hour marine service inspection in an engine bay",
        caption: "Deeper interval inspection in the engine bay",
      },
      {
        src: "/images/service-cooling.jpg",
        alt: "Cooling and heat-exchanger attention during 300-hour service",
        caption: "Cooling path attention at the heavier interval",
      },
      {
        src: "/images/service-maintenance.jpg",
        alt: "Dockside 300-hour boat service in South Florida",
        caption: "Dockside 300-hour service when access allows",
      },
    ],
    faqs: [
      {
        question: "What is 300-hour boat service?",
        answer:
          "The heavier manufacturer interval—typically around 250–300 hours. Deeper cooling and heat-exchanger attention, more thorough electrical and fuel-system checks, plus the usual fluids. Not a parts dump: we document findings first.",
      },
      {
        question: "Do I need 300-hour service if I already did 100-hour?",
        answer:
          "Yes, when the hours or the manual say so. 100-hour keeps you current; 300-hour is the deeper pass. If records are missing, we treat it as a 300-hour-style inspection and tell you what was actually due.",
      },
      {
        question: "Can 300-hour service be done dockside?",
        answer:
          "Often yes in Fort Lauderdale and South Florida when access allows. If heat-exchanger or other work needs haul-out or shop equipment, we say so early.",
      },
      {
        question: "Will you replace everything on the 300-hour list?",
        answer:
          "No. We inspect to the interval, replace what is due or failed, and estimate optional or extra items before you authorize them. Findings before parts.",
      },
      {
        question: "How long does 300-hour service take?",
        answer:
          "Often a half to a full day depending on engines, access, and what we find. Twins and generators add time. We estimate when you book.",
      },
    ],
  },
  {
    id: "systems",
    slug: "plumbing-repairs",
    title: "Boat Plumbing & Systems Repairs",
    summary: "Bilge, freshwater, heads, and critical onboard plumbing systems.",
    description:
      "Boat plumbing repairs in Fort Lauderdale and South Florida—bilge pumps, freshwater, heads, seacocks, and related electrical supply to pumps.",
    content: [
      "Doctor Yachts handles boat plumbing and systems repairs across Fort Lauderdale, and nearby South Florida docks. Bilge pumps that run nonstop, weak freshwater pressure, head system failures, and livewell/raw-water pump problems are common calls—and they are not “minor” when safety or guest weekends are on the line.",
      "We inspect pumps, float switches, plumbing runs, seacocks, and related electrical supply so you are protected at the dock and underway. When plumbing issues mix with electrical load or raw-water cooling problems, we troubleshoot the system as one machine.",
      "A bilge that “always runs a little” is not normal. Constant cycling can hide slow leaks, packing issues, AC condensate overload—or a stuck switch that leaves you unprotected when you need the pump most. Free estimates available.",
    ],
    sections: [
      {
        heading: "Bilge systems: the safety-critical plumbing job",
        body: [
          "Bilge pumps and float switches are safety gear. A failed pump, a stuck switch, or wiring that only works sometimes is a flooding risk—not an inconvenience. We diagnose root cause so you are not masking a serious leak with a louder pump.",
          "High bilge water after rain or AC use still deserves a look. Condensate can be normal; unexplained water is not.",
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
        heading: "Freshwater, heads, and other onboard systems",
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
      "Boat plumbing repairs",
      "Heads & holding tank systems",
      "Thru-hulls & seacocks inspection",
      "Livewell and raw-water systems",
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
      "Call for boat plumbing repairs if bilge pumps cycle constantly, water pressure fails, you see unexplained bilge water, or a head/holding system fails before guests or a trip.",
    duration: "1–4 hrs typical",
    icon: "systems",
    quickAnswer:
      "Boat plumbing repairs cover bilge pumps, freshwater systems, heads, seacocks, and related leaks or failures. Constant bilge running or weak water pressure needs diagnosis, not random part swaps. Mobile service in Fort Lauderdale and South Florida when access allows.",
    seoTitle: "Boat Plumbing Repairs | Doctor Yachts | Fort Lauderdale & South Florida, FL",
    seoDescription:
      "Boat plumbing & bilge repairs in Fort Lauderdale & South Florida. Pumps, heads, seacocks, systems. Free estimates — Doctor Yachts.",
    keywords: [
      "boat plumbing repairs Fort Lauderdale",
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
          "Causes include a stuck float switch, a real leak, wiring faults, or a failing pump. We diagnose the root cause so you are not masking a serious issue.",
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
    id: "emergency",
    slug: "mobile-boat-repair",
    title: "Mobile Boat Repair",
    summary: "On-site and dockside boat repair—we'll diagnose your boat problems on the spot.",
    description:
      "Mobile boat mechanic and dockside service in Fort Lauderdale, FL and surrounding areas. Engines, electrical, cooling, plumbing systems—often without a tow first.",
    content: [
      "Looking for a mobile boat mechanic in Fort Lauderdale? Doctor Yachts provides on-site boat repair at marinas and private docks in Fort Lauderdale, Dania Beach, Hollywood, and nearby South Florida—when access and marina rules allow. Mobile repair means diagnosis and many repairs where the boat already lives.",
      "We handle engines, electrical, cooling, bilge/pumps, and related systems. Priority slots for emergency boat repair—no-start, overheating, and safety-critical issues—when the schedule allows. Bridge schedules, marina gates, and tow wait times make dockside service the practical first move for many Broward owners.",
      "Share parking, gate codes, and slip numbers when you book so the tech arrives ready—not waiting on access. Free estimates on recommended work. Request online or call for urgent triage.",
    ],
    sections: [
      {
        heading: "When mobile / dockside boat repair wins",
        body: [
          "Most owner pain points never need a travel lift first. No-starts, weak batteries, intermittent electrical faults, impeller jobs, many cooling repairs, bilge pump failures, and routine maintenance are strong mobile candidates when the boat is floating and accessible.",
          "Starting mobile often saves towing cost, yard minimums, and days of downtime. If the job needs a shop or haul-out, a good mobile mechanic says so early—not after three fruitless visits.",
        ],
        list: [
          "No-start and weak cranking at the slip",
          "Dead batteries and charging faults",
          "Overheating / impeller / strainer issues",
          "Bilge pump and basic plumbing failures",
          "Scheduled maintenance and diagnostics",
          "Pre-trip urgent mechanical issues",
        ],
      },
      {
        heading: "When a tow or yard still makes sense",
        body: [
          "Bottom work, major running gear, structural fiberglass, full paint, or jobs requiring heavy presses and long tear-downs may need a yard. Uncontrolled flooding, fire risk, or vessels that must move for weather/safety need emergency services first—not a mechanic appointment.",
          "We will not force every problem into a mobile visit. Honest triage is part of the service.",
        ],
      },
      {
        heading: "Fort Lauderdale mobile coverage notes",
        body: [
          "East Fort Lauderdale docks, New River access, Intracoastal marinas, and private docks are routine when rules allow. Lighthouse Point, Dania Beach, and Hollywood are core Broward coverage—not rare stretch calls. Miami and Palm Beach County are scheduled with access details confirmed in advance.",
          "For emergency boat repair in Fort Lauderdale, call for triage. Capacity varies; priority goes to safety-critical and no-start situations when possible.",
        ],
      },
    ],
    process: [
      {
        title: "Call or book with location",
        detail:
          "Marina, slip, gate, parking, vessel type, and symptoms. Urgent? Call for triage.",
      },
      {
        title: "Confirm access & ETA",
        detail:
          "We confirm whether the job is a strong dockside candidate and when we can arrive.",
      },
      {
        title: "On-site diagnosis",
        detail:
          "Engines, electrical, cooling, or systems—find the fault before parts pressure.",
      },
      {
        title: "Estimate & fix",
        detail:
          "Free estimate for recommended work. Repair at the dock when possible, or plan yard path if needed.",
      },
    ],
    whatWeCheck: [
      "Access, power, and safe work conditions",
      "Symptom reproduction at the dock",
      "Battery/charging for no-starts",
      "Cooling clues for overheating",
      "Bilge and safety systems when relevant",
      "Whether haul-out is actually required",
      "Parts likely needed for a return visit",
      "Owner priorities (trip timing, budget)",
    ],
    features: [
      "Mobile boat mechanic Fort Lauderdale",
      "On-site / dockside boat repair",
      "Emergency boat repair triage",
      "Same-day priority when available",
      "Engines, electrical, cooling, systems",
      "Free estimates",
    ],
    symptoms: [
      "No-start at the marina or private dock",
      "Electrical loss before a trip",
      "Overheating at the dock or underway",
      "Bilge or pump emergency",
      "Need repair without a tow",
      "Urgent pre-trip mechanical issue",
    ],
    whenToCall:
      "Call a mobile boat mechanic when the boat is floating, accessible, and you want diagnosis without a yard wait—especially for no-starts, electrical faults, cooling issues, and many maintenance jobs in Fort Lauderdale and South Florida.",
    duration: "As needed",
    icon: "emergency",
    quickAnswer:
      "A mobile boat mechanic in Fort Lauderdale comes to your marina or dock for no-starts, electrical faults, cooling issues, and maintenance—often without a tow. Doctor Yachts also covers nearby Broward and South Florida. Free estimates. Priority for emergencies when available.",
    seoTitle: "Mobile Boat Mechanic Fort Lauderdale | Dockside Boat Repair",
    seoDescription:
      "Mobile boat mechanic in Fort Lauderdale & South Florida. Dockside engine, electrical & emergency repair. Free estimates — Doctor Yachts.",
    keywords: [
      "mobile boat mechanic Fort Lauderdale",
      "mobile boat repair Fort Lauderdale",
      "emergency boat repair Fort Lauderdale",
      "dockside boat repair Fort Lauderdale",
      "mobile boat repair South Florida",
      "on-site boat repair Fort Lauderdale",
    ],
    images: [
      {
        src: "/images/service-dockside.jpg",
        alt: "Mobile dockside boat repair at a Fort Lauderdale marina",
        caption: "Dockside mobile boat repair",
      },
      {
        src: "/images/location-fort-lauderdale.jpg",
        alt: "Fort Lauderdale marinas served by mobile boat mechanic",
        caption: "Fort Lauderdale marina coverage",
      },
      {
        src: "/images/service-engine.jpg",
        alt: "On-site marine engine diagnosis during mobile repair",
        caption: "On-site engine and systems diagnosis",
      },
    ],
    faqs: [
      {
        question: "Do you offer same-day boat repair in Fort Lauderdale?",
        answer:
          "When capacity allows, yes—especially for safety-critical or no-start issues. Call for the fastest triage or book priority online.",
      },
      {
        question: "Will you come to my marina in Fort Lauderdale?",
        answer:
          "Yes, we routinely work dockside at Fort Lauderdale marinas and private docks when the job and access allow. Share slip and gate details when you book.",
      },
      {
        question: "Is mobile boat repair more expensive than a shop?",
        answer:
          "Not always. You may pay a trip fee, but you often save towing, yard days, and downtime. Ask for a free estimate with your location and symptoms.",
      },
      {
        question: "Do you work at private docks?",
        answer:
          "Yes, when access and HOA/marina rules allow. Share gate codes and parking notes when you book.",
      },
    ],
  },
  {
    id: "outboard",
    slug: "outboard-motor-repair",
    title: "Outboard Motor Repair Fort Lauderdale",
    summary: "Outboard motor repair and service—diagnostics, maintenance, and dockside fixes.",
    description:
      "Outboard motor repair in Fort Lauderdale, FL: no-starts, overheating, power loss, 100-hour service, and mobile outboard repair for center consoles and fishing boats when access allows.",
    content: [
      "Outboard motor repair Fort Lauderdale searches are packed with dealer and mobile shops for a reason—center consoles and fishing boats live on outboards. Doctor Yachts provides diagnostic-first outboard repair and maintenance for owners who want clarity before parts and honest guidance before anyone mentions a repower you may not need.",
      "We service common no-start, overheating (including weak telltale/pee stream), rough running, power loss, and charging-related outboard issues. Routine outboard service and 100-hour style maintenance keep you out of emergency mode. Many jobs are completed as mobile boat repair at Fort Lauderdale and South Florida docks.",
      "Popular platforms include common Mercury and Yamaha applications. For brand warranty work, a factory dealer may be required—we’ll tell you if that’s the better path. Free estimates after we understand the symptoms and motor family.",
    ],
    sections: [
      {
        heading: "What outboard motor repair covers",
        body: [
          "Outboard repair spans starting systems, fuel delivery clues, cooling/telltale flow, running quality, and charging behavior. Weekend no-starts are often electrical or safety-circuit related; overheating is often impeller, intake, or restriction related; power loss needs systematic diagnosis—not random sensor swaps.",
          "Interval service (including 100-hour style maintenance support) covers manufacturer-guided items adapted to saltwater use: fluids, gear lube where applicable, impeller inspection planning, and system checks that prevent Saturday failures.",
        ],
        list: [
          "No-start and hard-start diagnosis",
          "Overheating and weak telltale stream",
          "Rough idle, surging, and power loss",
          "Charging issues after running",
          "Alarm codes / limp-mode investigation",
          "100-hour / seasonal maintenance support",
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
      "100-hour / interval maintenance support",
      "Charging and electrical checks",
      "Dockside outboard repair when possible",
      "Mercury & Yamaha common platforms",
    ],
    symptoms: [
      "Outboard won’t start",
      "Weak or missing pee stream / overheating",
      "Rough idle or power loss",
      "Charging light or dead battery after running",
      "Overdue 100-hour / annual service",
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
      "Outboard motor repair Fort Lauderdale—no-starts, overheating, 100-hour service. Diagnostic-first mobile mechanic. Free estimates — Doctor Yachts.",
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
          "Yes. We support interval and seasonal outboard maintenance—oil/filters where applicable, gear lube, impeller inspection, and system checks based on manufacturer guidance and how you use the boat.",
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

export const HUB_SERVICE_ORDER = [
  "engine-repair",
  "outboard",
  "electrical",
  "cooling",
  "diagnostics",
  "maintenance",
  "hour-100",
  "hour-300",
  "systems",
  "emergency",
] as const;

export function servicesInHubOrder() {
  return HUB_SERVICE_ORDER.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is Service => Boolean(s),
  );
}

export const bookingServices = services.map((s) => ({
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
