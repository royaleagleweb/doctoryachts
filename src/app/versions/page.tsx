import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Design versions",
  description: "Internal design comparisons",
  robots: { index: false, follow: false },
};

/** Internal mockups only — not part of the public site. */
export default function VersionsPage() {
  redirect("/");
}
