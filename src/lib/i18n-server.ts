import { headers } from "next/headers";
import { localeFromPath, type Locale } from "./i18n";

export async function getRequestLocale(): Promise<Locale> {
  const h = await headers();
  const header = h.get("x-dy-locale");
  if (header === "es" || header === "en") return header;
  return localeFromPath(h.get("x-dy-pathname") || "");
}
