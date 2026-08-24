import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  tone?: "default" | "soft" | "dark";
  className?: string;
  id?: string;
};

/** Shared section chrome: wrap + section-pad + ivory reading floor. */
export function Section({
  children,
  tone = "default",
  className = "",
  id,
}: SectionProps) {
  const toneClass =
    tone === "soft" ? "section-soft" : tone === "dark" ? "section-dark" : "section-floor";
  return (
    <section id={id} className={[toneClass, className].filter(Boolean).join(" ")}>
      <div className="wrap section-pad">{children}</div>
    </section>
  );
}
