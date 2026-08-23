"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPath } from "@/lib/i18n";

/** Keep <html lang> in sync on client navigations and /es static shells. */
export function DocumentLang() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
