import Image from "next/image";
import type { ReactNode } from "react";

export type PageHeroImage = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subhead?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  image?: PageHeroImage;
  meta?: ReactNode;
  priority?: boolean;
};

/** Shop-ticket hero: paper ground, navy type, optional contained photo. Not a full-bleed brochure. */
export function PageHero({
  eyebrow,
  title,
  subhead,
  description,
  actions,
  image,
  meta,
  priority,
}: PageHeroProps) {
  const eager = priority ?? Boolean(image);

  return (
    <section className={image ? "page-hero page-hero--split" : "page-hero"}>
      <div className="wrap page-hero__grid">
        <div className="page-hero__copy">
          {meta}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="font-display">{title}</h1>
          {subhead && <p className="page-hero__subhead">{subhead}</p>}
          {description && <div className="page-hero__desc">{description}</div>}
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
        {image && (
          <div className="page-hero__media">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={eager}
              sizes="(max-width: 900px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
