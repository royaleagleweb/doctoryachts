"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** Sticky mobile conversion bar — hidden on book/estimate to avoid double CTAs */
export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/book" || pathname === "/free-estimate") return null;

  return (
    <div className="mobile-cta lg:hidden">
      <a href={site.phoneHref} className="btn btn-ghost">
        Call
      </a>
      <Link href="/free-estimate" className="btn btn-ghost">
        Estimate
      </Link>
      <Link href="/book" className="btn">
        Book
      </Link>
    </div>
  );
}
