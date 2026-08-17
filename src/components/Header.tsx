"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

const chromeHrefs = ["/services", "/locations", "/faq"] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const chromeLinks = navLinks.filter((l) =>
    (chromeHrefs as readonly string[]).includes(l.href),
  );
  const menuLinks = navLinks.filter((l) => l.href !== "/book");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="brand-wordmark no-underline" onClick={() => setOpen(false)}>
          <span className="brand-wordmark__doctor">Doctor</span>
          <span className="brand-wordmark__yachts">Yachts</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {chromeLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`site-header__link ${active ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/book" className="btn btn-nav-book">
            Book
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={site.phoneHref} className="btn btn-ghost !min-h-11 px-3.5 text-sm">
            Call
          </a>
          <button
            type="button"
            className="btn btn-ghost !min-h-11 px-3.5 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="site-header__menu lg:hidden">
          <nav className="wrap flex flex-col py-2" aria-label="Mobile">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="site-header__item flex min-h-12 items-center no-underline"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                {site.phone}
              </a>
              <Link href="/book" onClick={() => setOpen(false)} className="btn w-full">
                Book a visit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
