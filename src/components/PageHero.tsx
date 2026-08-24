import Image from "next/image";
import type { ReactNode } from "react";

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
};

/** Full-bleed hero: photo with a light marina scrim, tight Plex, gold accent. */
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
}: PageHeroProps) {
  const eager = priority ?? Boolean(image);
  const classes = [
    "page-hero",
    image ? "page-hero--cinema" : "page-hero--band",
    size === "display" ? "page-hero--display" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      {image && (
        <div className="page-hero__media">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload={eager}
            sizes="100vw"
            className="object-cover"
          />
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
      </div>
    </section>
  );
}
