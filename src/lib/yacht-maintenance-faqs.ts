import { site } from "./site";

export type FaqNext = {
  href: string;
  label: string;
};

export type YachtMaintenanceFaq = {
  question: string;
  answer: string;
  next: FaqNext;
};

export type YachtFaqGroup = {
  id: string;
  title: string;
  intro: string;
  faqs: YachtMaintenanceFaq[];
};

/**
 * 40 yacht/boat maintenance Q&As for /faq, FAQPage JSON-LD, and llms.txt.
 * Answers are diagnose-first, South Florida where it matters, no invented prices.
 */
export const yachtFaqGroups: YachtFaqGroup[] = [
  {
    id: "planning",
    title: "Planning & ownership",
    intro: "How often to service, what it costs, and why notes matter at resale.",
    faqs: [
      {
        question: "How often should I service my yacht?",
        answer:
          "In South Florida, treat the engine maker’s hours as the floor, not the ceiling. Salt, heat, and year-round growth age cooling, electrical connections, and anodes faster than a northern once-a-season plan. Most boats need a yearly systems check plus oil and filters on the hour interval—often every 50–100 hours. Sitting still still ages fuel, batteries, and impellers. After we see the vessel and how you use it, we set a practical schedule.",
        next: {
          href: "/guides/how-often-to-service-a-boat-in-florida",
          label: "How often to service a boat in Florida",
        },
      },
      {
        question: "How much does yacht maintenance cost per year?",
        answer:
          "There is no honest flat number. Cost tracks vessel size, engine hours, systems such as generators and air, and whether the boat lives in salt year-round. Preventive work—oil, filters, impellers, zincs, batteries—usually costs less than one neglected overheat or electrical failure. Doctor Yachts does not publish invented price lists. We diagnose first, then give a free estimate for recommended work so you can choose what to do now versus later.",
        next: { href: "/free-estimate", label: "Get a free estimate" },
      },
      {
        question: "What is the difference between preventive and corrective yacht maintenance?",
        answer:
          "Preventive maintenance is scheduled: oil and filters, impeller inspection, zincs, belts, batteries, and a systems walk-through before the boat fails. Corrective work is the repair after a no-start, overheat, leak, or dead bank. A diagnose-first shop treats both—we find the fault before parts, and we flag items that become corrective if you wait. Preventive visits in Fort Lauderdale often catch cooling and charging issues before a weekend trip.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
      {
        question: "Can I do yacht maintenance myself?",
        answer:
          "Owners can handle many basics: visual leaks, strainer cleaning, battery terminals, bilge checks, and a written log. Impellers, fuel systems, seacocks, electrical diagnosis, and anything that can flood or overheat the engine are easier to get wrong than they look. If you are unsure, stop and book a visit rather than guessing parts from a forum. We will tell you what is owner-safe versus what needs a mechanic at the dock.",
        next: { href: "/book", label: "Book a visit" },
      },
      {
        question: "Does yacht maintenance affect resale value?",
        answer:
          "Yes. Buyers and surveyors look for service notes, not just a clean hull. Documented oil changes, impeller work, anode replacement, and electrical findings reduce surprise defects at survey. Mystery invoices and skipped years do the opposite. Doctor Yachts writes what was inspected, replaced, and recommended next so you have a paper trail for resale or the next yard. We are an independent mechanic shop, not a brokerage or detailing crew.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
    ],
  },
  {
    id: "booking",
    title: "Booking a mobile mechanic",
    intro: "How to request a dockside visit, free estimates, and response time.",
    faqs: [
      {
        question: "How do I book a mobile yacht mechanic in South Florida?",
        answer:
          `Book online or call ${site.phone}. Tell us the symptom, vessel type, marina or private dock, slip, and access notes such as a gate or parking. We confirm the visit by phone during Monday–Saturday 7:00 AM–6:00 PM and bring tools that match the complaint. Same-day depends on the real schedule and access—not a countdown or fake “two slots left.” Diagnose first, then we estimate recommended work.`,
        next: { href: "/book", label: "Book a visit" },
      },
      {
        question: "Do you give free estimates for boat and yacht repair?",
        answer:
          "Yes. After we understand symptoms and location—and complete diagnosis when the boat needs to be seen—we give a free estimate for recommended repair work before you authorize major parts and labor. An online note can start the conversation; a dockside visit is how we price the real fault. We do not publish invented menus. If you only want guidance first, use the estimate form; book when you already want a visit.",
        next: { href: "/free-estimate", label: "Get a free estimate" },
      },
      {
        question: "How fast will a mobile boat mechanic respond in Fort Lauderdale?",
        answer:
          `We reply during shop hours, usually the same business day. Urgent no-starts, overheating, and safety issues should call ${site.phone} so we can triage. Same-day dockside work depends on the existing schedule and marina access—we will say so honestly. We do not advertise fake scarcity. Many Fort Lauderdale jobs start where the boat already sits when the dock is accessible.`,
        next: { href: "/", label: "Mobile boat mechanic" },
      },
    ],
  },
  {
    id: "engines",
    title: "Engines, oil, fuel & impellers",
    intro: "No-starts, overheating, oil intervals, and inboard versus outboard care.",
    faqs: [
      {
        question: "Why won’t my boat start?",
        answer:
          "Start with battery charge and connections, the kill switch or lanyard, and fuel basics. Weak or silent cranking is usually electrical. Strong cranking with no fire points to fuel, sensors, or safety interlocks. South Florida heat and sitting between weekends make batteries and connections fail first. If the simple checks fail, stop swapping parts and book mobile diagnostics at the dock.",
        next: {
          href: "/guides/boat-wont-start-checklist",
          label: "Boat won’t start checklist",
        },
      },
      {
        question: "Why is my boat engine overheating?",
        answer:
          "Most overheating is restricted raw-water flow: a failed impeller, clogged strainer, blocked intake, stuck thermostat, or a fouled heat exchanger. Reduce load and shut down if temperature keeps rising. A weak telltale on an outboard is a cooling-flow clue, not a reason to keep running. Then book cooling system repair before the next trip so a “little hot” does not become engine damage.",
        next: {
          href: "/guides/why-is-my-boat-engine-overheating",
          label: "Why boat engines overheat",
        },
      },
      {
        question: "How often should I change marine engine oil?",
        answer:
          "Follow the engine maker’s hours and time limits—whichever comes first. Many recreational engines land around 50–100 hours or annually. Florida heat and short trips can dirty oil faster than a long northern season. Sitting still still oxidizes oil. We change oil as part of scheduled maintenance and note hours so the next interval is clear. If you barely run the boat, do not skip the yearly change.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
      {
        question: "How often should I replace a raw water impeller in Florida?",
        answer:
          "Inspect at least yearly, and replace on the manufacturer’s hour interval or sooner if the telltale is weak, you ran dry, or the boat sat. Silty, grassy South Florida water and heat age vanes faster than a freshwater lake. A fresh impeller is cheaper than a cooked engine. If flow is already weak, do not wait for the calendar—book cooling service.",
        next: { href: "/services/cooling-system-repairs", label: "Cooling system repairs" },
      },
      {
        question: "What happens if I run the engine with a failed impeller?",
        answer:
          "Raw-water flow drops or stops. Temperature climbs, exhaust parts can overheat, and you can warp or seize the engine. Bits of a shredded impeller also travel downstream and clog the heat exchanger or cooling passages. If you suspect a failed impeller, shut down. Do not “just run it home” if temperatures are rising. Book cooling service so we can pull the impeller and check what it left behind.",
        next: { href: "/services/cooling-system-repairs", label: "Cooling system repairs" },
      },
      {
        question: "How is inboard maintenance different from outboard maintenance?",
        answer:
          "Inboards live in the boat: heat soak, exhaust routing, raw-water plumbing, and heat exchangers change the inspection. Outboards put telltale flow, cowling electrics, lower-unit gear lube, and cowling access first. Both need oil and filters on hours, zincs, and electrical health. Doctor Yachts services both. If the job is outboard-specific, we point you to that path instead of a generic engine visit.",
        next: { href: "/services/marine-engine-repair", label: "Marine engine repair" },
      },
      {
        question: "How often should I replace marine fuel filters?",
        answer:
          "Replace on the engine’s hour and time interval, and any time you see water, slime, or a power loss that points to fuel. South Florida heat and sitting weekends make water and microbial growth more common. Primary and secondary filters are not the same job. If the boat surges or dies under load, diagnose fuel delivery before you keep adding bottles of additive. Book engine service when filters keep clogging.",
        next: { href: "/services/marine-engine-repair", label: "Marine engine repair" },
      },
    ],
  },
  {
    id: "electrical",
    title: "Electrical & batteries",
    intro: "Dead banks, dock power, and when wiring—not the battery—is the fault.",
    faqs: [
      {
        question: "Why is my boat battery dead in the morning?",
        answer:
          "Common causes include a battery that will not hold charge, a parasitic draw from a pump or electronics, a failed charger or alternator, or high-resistance connections. Lights can still work while the bank cannot crank. South Florida heat and salt make this a weekly call. We load-test the battery and trace the charging path instead of only swapping the cheapest battery on the dock.",
        next: {
          href: "/guides/signs-you-need-marine-electrical-repair",
          label: "Signs you need marine electrical repair",
        },
      },
      {
        question: "How long do marine batteries last?",
        answer:
          "Flooded and AGM start or house batteries often last a few seasons in salt air if they are charged correctly and not deeply discharged every weekend. Heat shortens life. Lithium can last longer, but only with the right charger profile and protection—do not drop it in without an electrical look. We test under load rather than guessing age from the label, then estimate the repair or replacement path.",
        next: { href: "/services/electrical-repairs", label: "Boat electrical repairs" },
      },
      {
        question: "Why does my boat lose power at the dock?",
        answer:
          "Shore-power trips, reverse polarity, a bad cord or inlet, isolation issues, or a charger that is not actually charging the bank. Onboard, a high-resistance ground or failing distribution can brown out electronics even when the pedestal looks live. We diagnose from inlet to panel to charger—not just the marina breaker. Many of these jobs are dockside in Fort Lauderdale when access allows.",
        next: { href: "/services/electrical-repairs", label: "Boat electrical repairs" },
      },
      {
        question: "What are signs I need marine electrical repair?",
        answer:
          "Dead batteries after a few days, slow cranking, electronics that brown out under load, a charger or alternator that undercharges, shore-power trips, corroded grounds, or a burning smell. Intermittent faults and hot cables need attention now. Do not keep jump-starting. A diagnose-first electrical visit traces the path so you are not buying batteries that fail the same way next Saturday.",
        next: {
          href: "/guides/signs-you-need-marine-electrical-repair",
          label: "Signs you need marine electrical repair",
        },
      },
    ],
  },
  {
    id: "cooling-bottom",
    title: "Cooling, zincs & bottom",
    intro: "Telltale flow, heat exchangers, anodes, and when a haul-out is the yard’s job.",
    faqs: [
      {
        question: "How often should I replace zinc anodes in South Florida?",
        answer:
          "Inspect often. Many South Florida boats need anode checks more than once a year because warm salt water and marina bonding eat zincs faster than northern seasons. Replace when they are roughly half gone, or sooner if you see unusual pitting. Bonding, shore power, and nearby boats can accelerate waste. We inspect anodes with maintenance. We are a mechanic shop, not a paint yard.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
      {
        question: "How often should I haul out and antifoul in South Florida?",
        answer:
          "Growth is year-round here. Many owners haul on a shorter cycle than northern boats—often annually or when speed and fuel burn fall off—but the right interval depends on paint type, use, and how the boat sits. Doctor Yachts is a mobile mechanic, not a bottom-paint yard. We can tell you when performance or anodes say it is time and help you plan the yard step.",
        next: {
          href: "/guides/mobile-boat-repair-vs-shop",
          label: "Mobile repair vs shop or haul-out",
        },
      },
      {
        question: "Why is my engine telltale weak or dry?",
        answer:
          "A weak or dry pee stream usually means little or no cooling flow: clogged intake, failed impeller, blocked tube, or debris. Do not keep running. Check the strainer if you can do it safely at the dock, then book cooling service. Outboards in grassy Fort Lauderdale water clog more often than lake boats. A missing telltale is a stop-and-diagnose clue, not a weekend workaround.",
        next: { href: "/services/cooling-system-repairs", label: "Cooling system repairs" },
      },
      {
        question: "What is a marine heat exchanger and when does it need service?",
        answer:
          "On many inboards, the heat exchanger is the saltwater-to-coolant interface. Scale, debris, and failed-impeller fragments restrict it. Service when temperatures climb under load, after overheating, or on the engine’s interval. A dockside diagnosis can confirm flow; a thorough clean may need more access. We tell you early if the boat should move. Free estimates cover the recommended repair path after we see the restriction.",
        next: { href: "/services/cooling-system-repairs", label: "Cooling system repairs" },
      },
    ],
  },
  {
    id: "generators",
    title: "Marine generators",
    intro: "Start faults, load shutdowns, and service intervals for yacht generators.",
    faqs: [
      {
        question: "Why won’t my marine generator start?",
        answer:
          "The same families as the main engines: weak batteries or connections, fuel, safety interlocks, raw-water cooling, and control faults. We diagnose the start first. Book marine engine repair and note any alarms.",
        next: { href: "/services/marine-engine-repair", label: "Marine engine repair" },
      },
      {
        question: "Why does my marine generator overheat or shut down under load?",
        answer:
          "Restricted raw-water flow, a tired impeller, a fouled exchanger, exhaust restriction, or a unit that cannot carry the air-conditioning and house load you just added. Idle in the slip can look fine. We test under load when it is safe, then estimate the repair path. Do not keep resetting a hot generator. A diagnose-first visit separates cooling from overload so you are not buying the wrong part.",
        next: { href: "/services/marine-engine-repair", label: "Marine engine repair" },
      },
      {
        question: "How often should I service a marine generator?",
        answer:
          "Follow the generator maker’s hours and time limits. Many yacht generators need oil, filters, impeller, and zinc attention on a tighter calendar than the main engines because they run hours at the dock. Sitting still still ages fuel. We include generator checks in maintenance when the vessel has one, and we document hours so the next interval is not a guess. Book a visit before peak season if it has been sitting.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
    ],
  },
  {
    id: "bilge-plumbing",
    title: "Bilge, plumbing & seacocks",
    intro: "Pumps that never stop, through-hulls, and freshwater systems.",
    faqs: [
      {
        question: "Why is my bilge pump always running?",
        answer:
          "A stuck float switch, a real leak, air-conditioning condensate overload, packing drip, or a failing pump or wiring. Constant cycling is not normal. It can hide a leak or leave you without a pump when you need it. We find the water source and the switch or pump fault instead of only replacing the pump. Treat constant running as a diagnostic priority, not a background noise.",
        next: { href: "/services/plumbing-repairs", label: "Boat plumbing repairs" },
      },
      {
        question: "How often should I test boat bilge pumps?",
        answer:
          "Test before every trip and after the boat sits: lift the float, confirm the pump runs, and confirm it shuts off. Check the high-water alarm if you have one. South Florida rain and air-conditioning condensate keep bilges wet; a pump that “always runs a little” still needs a diagnosis. Book plumbing service if it cycles without a clear reason or if you cannot find the float in a hurry.",
        next: { href: "/services/plumbing-repairs", label: "Boat plumbing repairs" },
      },
      {
        question: "When should seacocks and through-hulls be inspected?",
        answer:
          "At least annually, and anytime a seacock is stiff, weeping, or you cannot find it in a hurry. Exercise them so they do not freeze. Replacement often needs a haul-out; inspection and operation checks are often dockside. We flag haul-out needs early and help plan that step. Doctor Yachts is a mechanic shop, not a paint yard—we will not pretend a through-hull swap is a mobile polish job.",
        next: { href: "/services/plumbing-repairs", label: "Boat plumbing repairs" },
      },
      {
        question: "How often should I service the freshwater or plumbing system on a yacht?",
        answer:
          "At least yearly: pumps, strainers, the water-heater anode if equipped, heads, macerators, and holding-tank plumbing. Odors, weak pressure, and cycling pumps are reasons to go sooner. Florida heat and sitting water make tanks and heads fail faster. We diagnose the circuit—pump, switch, plumbing—not just the fixture you can see. Book a visit if pressure drops or a head will not flush.",
        next: { href: "/services/plumbing-repairs", label: "Boat plumbing repairs" },
      },
    ],
  },
  {
    id: "south-florida",
    title: "South Florida & dockside",
    intro: "Florida intervals, dockside versus haul-out, and getting unstuck at the slip.",
    faqs: [
      {
        question: "How often should I service a boat in Florida vs up north?",
        answer:
          "Florida boats usually need a tighter calendar. Salt, heat, and year-round growth punish cooling, electrical connections, and anodes. A Midwest once-a-season plan is often too light for Fort Lauderdale or Miami use. Hours still matter; sitting still still ages fuel and batteries. Use the maker’s interval, then add Florida inspections. We set the schedule after we know the vessel—not from a generic northern checklist.",
        next: {
          href: "/guides/how-often-to-service-a-boat-in-florida",
          label: "How often to service a boat in Florida",
        },
      },
      {
        question: "Do South Florida boats need more frequent bottom and anode work?",
        answer:
          "Usually yes. Warm salt water and marina living grow bottoms faster and consume anodes faster than cold northern seasons. Bonding and shore power can add to anode waste. We inspect anodes and tell you when performance says the bottom is due. Haul-out paint is a yard job, not ours. If the boat feels slower or zincs are disappearing, book a maintenance look before you guess at paint.",
        next: {
          href: "/guides/mobile-boat-repair-vs-shop",
          label: "Mobile repair vs shop or haul-out",
        },
      },
      {
        question: "Can you repair my yacht dockside or do I need a haul-out?",
        answer:
          "Most no-starts, electrical faults, maintenance, impeller jobs, and many cooling repairs start dockside when the marina or private dock is accessible. Haul-out is for bottom work, many seacock replacements, major running gear, or jobs that need equipment we cannot bring aboard. We tell you early if the boat should move. Doctor Yachts is mobile and dockside first—not a travel-lift yard.",
        next: {
          href: "/guides/mobile-boat-repair-vs-shop",
          label: "Mobile repair vs shop or haul-out",
        },
      },
      {
        question: "What should I do if I’m stuck at the dock and the boat won’t start?",
        answer:
          `Make it safe. Check battery connections, the kill switch, and fuel basics. Do not keep cranking a hot starter. Write down alarms and the last time it ran. Then call ${site.phone} or book mobile diagnostics—share marina, slip, and gate notes. Most no-starts in Fort Lauderdale do not need a tow first. We confirm by phone during Monday–Saturday 7:00 AM–6:00 PM.`,
        next: {
          href: "/guides/boat-wont-start-checklist",
          label: "Boat won’t start checklist",
        },
      },
    ],
  },
  {
    id: "annual-trips",
    title: "Annual service & trip prep",
    intro: "What a yearly visit covers, Florida commissioning, and a weekend checklist.",
    faqs: [
      {
        question: "What is included in annual yacht maintenance?",
        answer:
          "Typical annual work includes engine oil and filters on hours, gear lube where it applies, impeller inspection, zincs, belts and hoses, battery and charging health, bilge and critical pumps, and a systems walk-through. Generators and steering get checked when the boat has them. You get notes, not a mystery invoice. Scope follows the vessel, not a brochure package. Ask for a free estimate after we see what is due.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
      {
        question: "How do I commission or decommission a yacht that stays in Florida year-round?",
        answer:
          "Year-round Florida boats still need a season check: batteries and charging, cooling flow, fuel condition, safety gear, and a short systems trial before peak use. Decommissioning here is less about hard freeze and more about fuel, batteries, growth, and sitting systems. We schedule commissioning and interval maintenance. We do not invent a northern winterization ritual that does not match South Florida.",
        next: { href: "/services/boat-maintenance", label: "Boat maintenance" },
      },
      {
        question: "How often should steering, hydraulics, or stabilizers be inspected?",
        answer:
          "At least annually, and immediately after stiffness, leaks, unusual noise, or a change in feel. Check fluid level and look for weeping fittings before a long trip. These systems are diagnose-first: find the leak or air before you keep topping off. If the job needs specialized yard equipment, we say so. Book a visit or start with diagnostics when the helm does not feel like last season.",
        next: { href: "/", label: "Mobile boat mechanic" },
      },
      {
        question: "What should I check before a weekend trip on the boat?",
        answer:
          "Bilge and pumps, battery switch and voltage, visible leaks, fuel level, telltale or raw-water discharge, and that seacocks you will use actually operate. Note any new alarms. If something already feels wrong, book before Saturday morning. A ten-minute walk-through beats a tow from a Fort Lauderdale canal. We confirm weekday and Saturday visits by phone during shop hours.",
        next: { href: "/book", label: "Book a visit" },
      },
    ],
  },
  {
    id: "emergencies",
    title: "Odors & emergencies",
    intro: "Fuel or mildew smells, and what cannot wait until next month.",
    faqs: [
      {
        question: "Why does my yacht smell like fuel or mildew?",
        answer:
          "Fuel smell is a leak or spill until proven otherwise—ventilate, do not start if it is strong, and call. Mildew is heat, humidity, and standing water: air-conditioning condensate, wet lockers, or a bilge that never dries. We find the source in the fuel system, bilge, or plumbing rather than masking odor. Strong fuel odor is an emergency path, not a detailing job. We are a mechanic shop, not a polish crew.",
        next: {
          href: "/guides/emergency-boat-repair-fort-lauderdale",
          label: "Emergency boat repair in Fort Lauderdale",
        },
      },
      {
        question: "When is a boat problem an emergency vs a scheduled visit?",
        answer:
          `Emergency: uncontrolled water, strong fuel smell or fire risk, overheating that returns, total electrical loss, or a no-start when you must move for weather or safety. Scheduled: interval maintenance, slow electrical quirks, and issues that can wait until shop hours. If people or the vessel are at risk, get them safe first, then call ${site.phone}. We triage during Monday–Saturday 7:00 AM–6:00 PM.`,
        next: {
          href: "/guides/emergency-boat-repair-fort-lauderdale",
          label: "Emergency boat repair in Fort Lauderdale",
        },
      },
    ],
  },
];

export const yachtMaintenanceFaqs: YachtMaintenanceFaq[] = yachtFaqGroups.flatMap(
  (group) => group.faqs,
);

const REQUIRED_YACHT_FAQ_QUESTIONS = [
  "How often should I service my yacht?",
  "How much does yacht maintenance cost per year?",
  "What is the difference between preventive and corrective yacht maintenance?",
  "Can I do yacht maintenance myself?",
  "Does yacht maintenance affect resale value?",
  "How do I book a mobile yacht mechanic in South Florida?",
  "Do you give free estimates for boat and yacht repair?",
  "How fast will a mobile boat mechanic respond in Fort Lauderdale?",
  "Why won’t my boat start?",
  "Why is my boat engine overheating?",
  "How often should I change marine engine oil?",
  "How often should I replace a raw water impeller in Florida?",
  "What happens if I run the engine with a failed impeller?",
  "How is inboard maintenance different from outboard maintenance?",
  "How often should I replace marine fuel filters?",
  "Why is my boat battery dead in the morning?",
  "How long do marine batteries last?",
  "Why does my boat lose power at the dock?",
  "What are signs I need marine electrical repair?",
  "How often should I replace zinc anodes in South Florida?",
  "How often should I haul out and antifoul in South Florida?",
  "Why is my engine telltale weak or dry?",
  "What is a marine heat exchanger and when does it need service?",
  "Why won’t my marine generator start?",
  "Why does my marine generator overheat or shut down under load?",
  "How often should I service a marine generator?",
  "Why is my bilge pump always running?",
  "How often should I test boat bilge pumps?",
  "When should seacocks and through-hulls be inspected?",
  "How often should I service the freshwater or plumbing system on a yacht?",
  "How often should I service a boat in Florida vs up north?",
  "Do South Florida boats need more frequent bottom and anode work?",
  "Can you repair my yacht dockside or do I need a haul-out?",
  "What should I do if I’m stuck at the dock and the boat won’t start?",
  "What is included in annual yacht maintenance?",
  "How do I commission or decommission a yacht that stays in Florida year-round?",
  "How often should steering, hydraulics, or stabilizers be inspected?",
  "What should I check before a weekend trip on the boat?",
  "Why does my yacht smell like fuel or mildew?",
  "When is a boat problem an emergency vs a scheduled visit?",
] as const;

function normalizeQuestion(question: string) {
  return question
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const yachtFaqQuestionKeys = new Set(
  yachtMaintenanceFaqs.map((faq) => normalizeQuestion(faq.question)),
);

/** Service-page FAQs that restate a hub question — omit from /faq JSON-LD. */
const SERVICE_FAQ_DUPLICATE_KEYS = new Set(
  [
    "Why is my boat engine overheating?",
    "How often should I service my boat?",
    "How often should marine impellers be replaced?",
    "My bilge pump runs constantly—what’s wrong?",
    "Do you offer same-day boat repair in Fort Lauderdale?",
    "Why do my boat batteries keep dying?",
    "Do you give free estimates for engine repair?",
    "Do you give free estimates?",
  ].map(normalizeQuestion),
);

export function isUniqueServiceFaq(question: string) {
  const key = normalizeQuestion(question);
  return !yachtFaqQuestionKeys.has(key) && !SERVICE_FAQ_DUPLICATE_KEYS.has(key);
}

export function assertYachtFaqCorpus() {
  if (yachtMaintenanceFaqs.length !== 40) {
    throw new Error(`Expected 40 yacht FAQs, found ${yachtMaintenanceFaqs.length}`);
  }
  REQUIRED_YACHT_FAQ_QUESTIONS.forEach((question, index) => {
    if (yachtMaintenanceFaqs[index]?.question !== question) {
      throw new Error(`FAQ ${index + 1} must be exactly: ${question}`);
    }
  });
}

assertYachtFaqCorpus();
