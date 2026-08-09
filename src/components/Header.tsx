"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mainLinks = navLinks.filter((l) => l.href !== "/book" && l.href !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy-deep/95 backdrop-blur-md">
      <div className="wrap flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className="min-w-0 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="font-display block text-[1.35rem] font-extrabold tracking-tight text-pearl sm:text-[1.55rem]">
            Doctor Yachts
          </span>
          <span className="mt-0.5 block text-[0.75rem] font-medium text-steel">
            Marine mechanic · South Florida
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {mainLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[0.9rem] font-medium no-underline transition ${
                  active ? "text-gold" : "text-pearl/75 hover:text-pearl"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="ml-3 text-[0.9rem] font-semibold text-gold no-underline hover:text-gold-light"
          >
            {site.phone}
          </a>
          <Link href="/book" className="btn ml-3 !min-h-0 py-2.5 text-sm">
            Book
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            className="border border-line px-3 py-2 text-sm font-semibold text-gold no-underline"
          >
            Call
          </a>
          <button
            type="button"
            className="border border-line px-3 py-2 text-sm font-semibold text-pearl"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-navy-deep lg:hidden">
          <nav className="wrap flex flex-col py-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/50 py-3.5 text-pearl no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="py-3.5 font-semibold text-gold no-underline"
            >
              Book repair
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
