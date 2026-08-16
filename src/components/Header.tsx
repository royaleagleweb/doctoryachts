"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ReviewLinks } from "@/components/ReviewLinks";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mainLinks = navLinks.filter((l) => l.href !== "/book" && l.href !== "/");

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
        <Link href="/" className="min-w-0 no-underline" onClick={() => setOpen(false)}>
          <span className="block text-[1.15rem] font-semibold tracking-tight text-white sm:text-[1.25rem]">
            Doctor Yachts
          </span>
          <span className="mt-0.5 block text-[0.75rem] font-medium text-[#a3b4c2]">
            Marine mechanic · South Florida
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {mainLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isServices = link.href === "/services";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-11 items-center px-3 py-2 text-[0.9rem] no-underline ${
                  isServices ? "nav-services font-semibold" : "font-medium"
                } ${active || isServices ? "text-white" : "text-[#a3b4c2] hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <ReviewLinks className="ml-3" />
          <a
            href={site.phoneHref}
            className="ml-3 inline-flex min-h-11 items-center text-[0.9rem] font-semibold text-gold no-underline hover:text-gold-light"
          >
            {site.phone}
          </a>
          <Link href="/book" className="btn ml-3 !min-h-11 py-2 text-sm">
            Book a visit
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 items-center border border-gold px-3.5 text-sm font-semibold text-gold no-underline"
          >
            Call
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-gold px-3.5 text-sm font-semibold text-gold"
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
            {navLinks
              .filter((l) => l.href !== "/book")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`site-header__item flex min-h-12 items-center no-underline ${
                    link.href === "/services" ? "nav-services font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            <div className="site-header__item flex min-h-12 items-center">
              <ReviewLinks />
            </div>
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
