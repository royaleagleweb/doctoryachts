"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-[background,border-color] duration-300 ${
        scrolled
          ? "border-[rgba(196,163,90,0.25)] bg-[rgba(5,12,20,0.94)] backdrop-blur-md"
          : "border-[rgba(196,163,90,0.12)] bg-[rgba(5,12,20,0.72)] backdrop-blur-md"
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/45 text-xs font-bold tracking-wide text-gold">
            DY
          </span>
          <span className="leading-none">
            <span className="font-display block text-[1.35rem] font-semibold text-pearl">
              Doctor Yachts
            </span>
            <span className="mt-1 block text-[0.7rem] text-steel">Boat & yacht mechanic</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
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
                  className={`px-3 py-2 text-sm no-underline transition ${
                    active ? "text-gold-light" : "text-pearl/75 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          <a
            href={site.phoneHref}
            className="ml-2 hidden text-sm font-semibold text-gold no-underline hover:text-gold-light xl:inline"
          >
            {site.phone}
          </a>
          <Link href="/book" className="btn ml-3">
            Book repair
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full border border-gold/35 px-3 py-1.5 text-sm font-semibold text-pearl lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-navy-deep/95 backdrop-blur-md lg:hidden">
          <nav className="wrap flex flex-col py-2">
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
            <a
              href={site.phoneHref}
              className="border-b border-line/50 py-3.5 font-semibold text-gold no-underline"
            >
              {site.phone}
            </a>
            <Link
              href="/free-estimate"
              onClick={() => setOpen(false)}
              className="py-3.5 font-semibold text-gold-light no-underline"
            >
              Free estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
