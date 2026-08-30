import { MediaCard } from "@/components/MediaCard";
import { t } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";
import { servicePath } from "@/lib/i18n";
import { images } from "@/lib/images";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
  index?: number;
  compact?: boolean;
  locale?: Locale;
};

export function ServiceCard({ service, compact = false, locale = "en" }: ServiceCardProps) {
  const img = service.images[0] ?? images.services[service.id as keyof typeof images.services];
  const enSlug = services.find((s) => s.id === service.id)?.slug ?? service.slug;
  const copy = t(locale);

  return (
    <MediaCard
      href={servicePath(enSlug, locale)}
      image={img}
      title={service.title}
      description={compact ? service.summary : service.summary}
      footer={
        compact ? undefined : (
          <p className="media-card__cta">{copy.serviceCard.details}</p>
        )
      }
      cta={copy.serviceCard.details}
    />
  );
}
