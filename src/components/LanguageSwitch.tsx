"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { setLocaleCookie, switchPath, type Locale } from "@/lib/i18n";

export function LanguageSwitch({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const pathname = usePathname() || "/";
  const enHref = switchPath(pathname, "en");
  const esHref = switchPath(pathname, "es");

  return (
    <nav className={`lang-switch ${compact ? "lang-switch--menu" : ""}`} aria-label="Language">
      <Link
        href={enHref}
        className={locale === "en" ? "is-active" : ""}
        hrefLang="en"
        onClick={() => setLocaleCookie("en")}
      >
        EN
      </Link>
      <span aria-hidden className="lang-switch__sep">
        /
      </span>
      <Link
        href={esHref}
        className={locale === "es" ? "is-active" : ""}
        hrefLang="es"
        onClick={() => setLocaleCookie("es")}
      >
        ES
      </Link>
    </nav>
  );
}
