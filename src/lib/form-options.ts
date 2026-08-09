/** Practical client-facing options for book + free estimate forms */

export const problemOptions = [
  {
    id: "wont-start",
    label: "Won't start",
    hint: "Click, no crank, or dead quiet",
    serviceId: "engine-repair",
  },
  {
    id: "overheating",
    label: "Overheating",
    hint: "Hot, weak telltale, shut-down",
    serviceId: "cooling",
  },
  {
    id: "electrical",
    label: "Battery / electrical",
    hint: "Dead overnight, shore power, charging",
    serviceId: "electrical",
  },
  {
    id: "bilge-pumps",
    label: "Bilge / pumps",
    hint: "Always running, leaks, no pump",
    serviceId: "systems",
  },
  {
    id: "maintenance",
    label: "Scheduled service",
    hint: "Oil, impeller, zincs, pre-season",
    serviceId: "maintenance",
  },
  {
    id: "generator",
    label: "Generator",
    hint: "Won't carry load, no start, AC",
    serviceId: "engine-repair",
  },
  {
    id: "outboard",
    label: "Outboard issue",
    hint: "Running rough, no start, service",
    serviceId: "outboard",
  },
  {
    id: "not-sure",
    label: "Not sure",
    hint: "Something's wrong — diagnose first",
    serviceId: "diagnostics",
  },
] as const;

export const boatTypeOptions = [
  { id: "center-console", label: "Center console" },
  { id: "cabin-cruiser", label: "Cabin cruiser" },
  { id: "express-yacht", label: "Express / sport yacht" },
  { id: "motor-yacht", label: "Motor yacht" },
  { id: "sailboat", label: "Sailboat" },
  { id: "pontoon", label: "Pontoon / deck" },
  { id: "other", label: "Other / not sure" },
] as const;

export const timeWindowOptions = [
  { id: "morning", label: "Morning", hint: "7–11 AM" },
  { id: "midday", label: "Midday", hint: "11 AM–2 PM" },
  { id: "afternoon", label: "Afternoon", hint: "2–5 PM" },
  { id: "flexible", label: "Flexible", hint: "Call me to set a time" },
] as const;

export const urgencyOptions = [
  { id: "today", label: "ASAP / today", hint: "Call us too if stuck at the dock" },
  { id: "week", label: "This week", hint: "Preferred window below" },
  { id: "flexible", label: "Flexible", hint: "Whenever you can fit me in" },
] as const;

export const cityOptions = [
  "Fort Lauderdale",
  "Pompano Beach",
  "Miami / Miami Beach",
  "Dania Beach",
  "Hollywood",
  "Palm Beach area",
  "Other South Florida",
] as const;

export const lengthOptions = [
  "Under 25 ft",
  "25–35 ft",
  "36–45 ft",
  "46–60 ft",
  "60+ ft",
  "Not sure",
] as const;
