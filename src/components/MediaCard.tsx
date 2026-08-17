import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type MediaCardProps = {
  href?: string;
  image: { src: string; alt: string };
  title?: ReactNode;
  kicker?: string;
  description?: ReactNode;
  footer?: ReactNode;
};

/**
 * Image + caption tile matching service/location card geometry (16/10).
 * Kickers/captions must come from real image metadata — do not invent job claims.
 */
export function MediaCard({
  href,
  image,
  title,
  kicker,
  description,
  footer,
}: MediaCardProps) {
  const body = (
    <article className="media-card group flex h-full flex-col">
      <div className="media-card__shot relative aspect-[16/10] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      {(kicker || title || description || footer) && (
        <div className="flex flex-1 flex-col pt-4">
          {kicker && <p className="text-sm font-medium text-gold">{kicker}</p>}
          {title && (
            <h3 className="font-display text-lg font-bold tracking-tight">{title}</h3>
          )}
          {description && (
            <div className="mt-2 flex-1 text-sm leading-relaxed text-steel">{description}</div>
          )}
          {footer}
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="media-card-link no-underline">
        {body}
      </Link>
    );
  }
  return body;
}
