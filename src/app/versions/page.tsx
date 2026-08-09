import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Design versions",
  description: "Compare Doctor Yachts design variations",
  robots: { index: false, follow: false },
  alternates: { canonical: "/versions" },
};

/** Hub lives as static HTML at /versions/index.html — redirect for clean /versions path. */
export default function VersionsPage() {
  redirect("/versions/index.html");
}
