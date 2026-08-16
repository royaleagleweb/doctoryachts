import Image from "next/image";
import type { ReactNode } from "react";

export type PageHeroImage = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  image?: PageHeroImage;
  meta?: ReactNode;
  priority?: boolean;
};

/** Inner-page hero — light or photo. Home keeps the marketing `hero-edge` stack. */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  image,
  meta,
  priority,
}: PageHeroProps) {
  const eager = priority ?? Boolean(image);

  if (image) {
    return (
      <section className="page-hero page-hero--photo">
        <div className="page-hero__media">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={eager}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="page-hero__copy">
          <div className="wrap">
            {meta}
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="font-display">{title}</h1>
            {description && <div className="page-hero__desc">{description}</div>}
            {actions && <div className="page-hero__actions">{actions}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="wrap section-pad">
        {meta}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="font-display">{title}</h1>
        {description && <div className="page-hero__desc">{description}</div>}
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
