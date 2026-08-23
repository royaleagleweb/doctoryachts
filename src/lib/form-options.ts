/** Practical client-facing options for book + free estimate forms */

export const problemOptions = [
  {
    id: "wont-start",
    label: "Won't start",
    hint: "Click, no crank, or dead quiet",
    serviceId: "engine-repair",
    labelEs: "No arranca",
    hintEs: "Click, no da arranque, o silencio total",
  },
  {
    id: "overheating",
    label: "Overheating",
    hint: "Hot, weak telltale, shut-down",
    serviceId: "cooling",
    labelEs: "Se sobrecalienta",
    hintEs: "Caliente, chorrito débil, se apaga",
  },
  {
    id: "electrical",
    label: "Battery / electrical",
    hint: "Dead overnight, shore power, charging",
    serviceId: "electrical",
    labelEs: "Batería / eléctrico",
    hintEs: "Muerta al otro día, shore power, carga",
  },
  {
    id: "bilge-pumps",
    label: "Bilge / pumps",
    hint: "Always running, leaks, no pump",
    serviceId: "systems",
    labelEs: "Sentina / bombas",
    hintEs: "Siempre prendida, goteras, sin bomba",
  },
  {
    id: "maintenance",
    label: "Scheduled service",
    hint: "Oil, impeller, zincs, pre-season",
    serviceId: "maintenance",
    labelEs: "Servicio programado",
    hintEs: "Aceite, impulsor, zincs, pretemporada",
  },
  {
    id: "hour-100",
    label: "100-hour service",
    hint: "Annual / ~100 hour interval",
    serviceId: "hour-100",
    labelEs: "Servicio 100 horas",
    hintEs: "Intervalo anual o ~100 horas",
  },
  {
    id: "hour-300",
    label: "300-hour service",
    hint: "Heavier 250–300 hour interval",
    serviceId: "hour-300",
    labelEs: "Servicio 300 horas",
    hintEs: "Intervalo más profundo, 250–300 h",
  },
  {
    id: "generator",
    label: "Generator",
    hint: "Won't carry load, no start, AC",
    serviceId: "engine-repair",
    labelEs: "Generador",
    hintEs: "No aguanta la carga, no arranca, A/C",
  },
  {
    id: "outboard",
    label: "Outboard issue",
    hint: "Running rough, no start, service",
    serviceId: "outboard",
    labelEs: "Motor fuera de borda",
    hintEs: "Anda irregular, no arranca, servicio",
  },
  {
    id: "not-sure",
    label: "Not sure",
    hint: "Something's wrong — diagnose first",
    serviceId: "diagnostics",
    labelEs: "No estoy seguro",
    hintEs: "Algo anda mal — primero diagnosticamos",
  },
] as const;

export const boatTypeOptions = [
  { id: "center-console", label: "Center console", labelEs: "Center console" },
  { id: "cabin-cruiser", label: "Cabin cruiser", labelEs: "Cabin cruiser" },
  { id: "express-yacht", label: "Express / sport yacht", labelEs: "Yate express / sport" },
  { id: "motor-yacht", label: "Motor yacht", labelEs: "Motor yacht" },
  { id: "sailboat", label: "Sailboat", labelEs: "Velero" },
  { id: "pontoon", label: "Pontoon / deck", labelEs: "Pontoon / deck" },
  { id: "other", label: "Other / not sure", labelEs: "Otro / no sé" },
] as const;

export const timeWindowOptions = [
  { id: "morning", label: "Morning", hint: "7–11 AM", labelEs: "Mañana", hintEs: "7–11 a. m." },
  { id: "midday", label: "Midday", hint: "11 AM–2 PM", labelEs: "Mediodía", hintEs: "11 a. m.–2 p. m." },
  { id: "afternoon", label: "Afternoon", hint: "2–5 PM", labelEs: "Tarde", hintEs: "2–5 p. m." },
  { id: "flexible", label: "Flexible", hint: "Call me to set a time", labelEs: "Flexible", hintEs: "Llámenme para cuadrar" },
] as const;

export const urgencyOptions = [
  { id: "today", label: "ASAP / today", hint: "Call us too if stuck at the dock", labelEs: "Hoy / lo antes posible", hintEs: "Llame también si quedó en el muelle" },
  { id: "week", label: "This week", hint: "Preferred window below", labelEs: "Esta semana", hintEs: "Ventana preferida abajo" },
  { id: "flexible", label: "Flexible", hint: "Whenever you can fit me in", labelEs: "Flexible", hintEs: "Cuando puedan acomodarme" },
] as const;

export const cityOptions = [
  { id: "Fort Lauderdale", label: "Fort Lauderdale", labelEs: "Fort Lauderdale" },
  { id: "Pompano Beach", label: "Pompano Beach", labelEs: "Pompano Beach" },
  { id: "Miami / Miami Beach", label: "Miami / Miami Beach", labelEs: "Miami / Miami Beach" },
  { id: "Dania Beach", label: "Dania Beach", labelEs: "Dania Beach" },
  { id: "Hollywood", label: "Hollywood", labelEs: "Hollywood" },
  { id: "Palm Beach area", label: "Palm Beach area", labelEs: "Zona Palm Beach" },
  { id: "Other South Florida", label: "Other South Florida", labelEs: "Otro punto del sur de la Florida" },
] as const;

export const lengthOptions = [
  { id: "Under 25 ft", label: "Under 25 ft", labelEs: "Menos de 25 ft" },
  { id: "25–35 ft", label: "25–35 ft", labelEs: "25–35 ft" },
  { id: "36–45 ft", label: "36–45 ft", labelEs: "36–45 ft" },
  { id: "46–60 ft", label: "46–60 ft", labelEs: "46–60 ft" },
  { id: "60+ ft", label: "60+ ft", labelEs: "60+ ft" },
  { id: "Not sure", label: "Not sure", labelEs: "No sé" },
] as const;
