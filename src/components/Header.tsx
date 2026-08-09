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
    <header className="sticky top-0 z-50">
      {/* Utility bar — service business style */}
      <div className="border-b border-line bg-navy-deep">
        <div className="wrap flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
          <p className="text-steel">
            Fort Lauderdale · Pompano Beach · Miami · Free estimates
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden text-steel sm:inline">{site.hours}</span>
            <a
              href={`mailto:${site.email}`}
              className="hidden text-steel no-underline hover:text-gold-light md:inline"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="font-semibold text-gold no-underline hover:text-gold-light"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-line bg-navy">
        <div className="wrap flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 no-underline"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded bg-gold text-sm font-extrabold tracking-wide text-navy-deep">
              DY
            </span>
            <span className="leading-tight">
              <span className="font-display block text-xl font-semibold text-pearl sm:text-[1.4rem]">
                Doctor Yachts
              </span>
              <span className="block text-xs font-medium text-steel sm:text-[0.78rem]">
                Marine mechanic · South Florida
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[0.92rem] font-medium no-underline transition ${
                    active
                      ? "text-gold"
                      : "text-pearl/80 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/free-estimate" className="btn btn-ghost ml-2 py-2.5 text-sm">
              Free estimate
            </Link>
            <Link href="/book" className="btn ml-2 py-2.5 text-sm">
              Book repair
            </Link>
          </nav>

          <button
            type="button"
            className="rounded border border-gold/40 px-3 py-2 text-sm font-semibold text-pearl lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="border-t border-line bg-navy-deep lg:hidden">
            <nav className="wrap flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/40 py-3.5 text-pearl no-underline"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/free-estimate"
                onClick={() => setOpen(false)}
                className="py-3.5 font-semibold text-gold no-underline"
              >
                Free estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
