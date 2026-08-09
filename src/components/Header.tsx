"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="border-b border-line bg-navy text-paper">
        <div className="wrap flex flex-wrap items-center justify-between gap-2 text-[0.7rem] font-medium tracking-wide text-steel">
          <span>Fort Lauderdale · Pompano Beach · Miami · free estimates</span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="hidden text-steel no-underline hover:text-gold-light sm:inline"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="font-semibold text-gold no-underline hover:text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <BrandMark size={42} className="text-navy transition group-hover:text-gold" />
          <span className="leading-none">
            <span className="font-display block text-[1.35rem] font-semibold tracking-tight text-navy">
              Doctor Yachts
            </span>
            <span className="mt-1 block text-[0.7rem] font-medium tracking-wide text-muted">
              Boat & yacht mechanic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks
            .filter((l) => l.href !== "/book")
            .map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium no-underline transition ${
                    active ? "text-gold" : "text-navy hover:text-gold"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gold" />
                  )}
                </Link>
              );
            })}
          <Link href="/free-estimate" className="btn btn-ghost ml-1">
            Free estimate
          </Link>
          <Link href="/book" className="btn ml-1">
            Book repair
          </Link>
        </nav>

        <button
          type="button"
          className="border border-navy px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="wrap flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-navy no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/free-estimate"
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 font-semibold text-navy no-underline"
            >
              Free estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
