import type { ReactNode } from "react";

/** Consistent inner-page hero for the luxury service layout */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="page-hero border-b border-line">
      <div className="wrap section-pad pb-10">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-pearl sm:text-5xl">
          {title}
        </h1>
        {description && (
          <div className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">{description}</div>
        )}
        {actions && <div className="mt-6 flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
    </section>
  );
}
