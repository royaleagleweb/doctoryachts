import type { ReactNode } from "react";
import { CoastChart, CompassRose } from "@/components/Nautical";

export type PageHeroImage = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  eyebrow?: string;
  kicker?: ReactNode;
  title: string;
  subhead?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  image?: PageHeroImage;
  meta?: ReactNode;
  priority?: boolean;
  size?: "default" | "display";
  showMap?: boolean;
};

/** Full-bleed hero: photo with a cool ink scrim, tight Plex, brass accent. */
export function PageHero({
  eyebrow,
  kicker,
  title,
  subhead,
  description,
  actions,
  image,
  meta,
  priority,
  size = "default",
  showMap = false,
}: PageHeroProps) {
  void image;
  void priority;
  const classes = [
    "page-hero",
    "page-hero--band",
    size === "display" ? "page-hero--display" : "",
    showMap ? "page-hero--map" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      {showMap ? null : (
        <div className="page-hero__compass">
          <CompassRose />
        </div>
      )}
      <div className="page-hero__veil" aria-hidden />
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
        {showMap ? <CoastChart /> : null}
      </div>
    </section>
  );
}
