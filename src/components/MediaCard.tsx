import Link from "next/link";
import type { ReactNode } from "react";

type MediaCardProps = {
  href?: string;
  title?: ReactNode;
  kicker?: string;
  description?: ReactNode;
  footer?: ReactNode;
};

/** Text tile for service and location indexes. No photograph. */
export function MediaCard({
  href,
  title,
  kicker,
  description,
  footer,
}: MediaCardProps) {
  const body = (
    <article className="media-card group flex h-full flex-col">
      {(kicker || title || description || footer) && (
        <div className="flex flex-1 flex-col">
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
