import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  kicker?: ReactNode;
  title: string;
  subhead?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
  size?: "default" | "display";
};

/** Navy band hero. Photo treatment was removed; brass type sits on the ink ground. */
export function PageHero({
  eyebrow,
  kicker,
  title,
  subhead,
  description,
  actions,
  meta,
  size = "default",
}: PageHeroProps) {
  const classes = [
    "page-hero",
    "page-hero--band",
    size === "display" ? "page-hero--display" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className="wrap page-hero__grid">
        <div className="page-hero__copy">
          {meta}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {kicker && <p className="page-hero__kicker">{kicker}</p>}
          <h1 className="font-display">{title}</h1>
          {subhead && <p className="page-hero__subhead">{subhead}</p>}
          {description && <div className="page-hero__desc">{description}</div>}
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
