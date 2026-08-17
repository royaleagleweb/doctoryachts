import { MediaCard } from "@/components/MediaCard";
import { images } from "@/lib/images";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
  index?: number;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const img = service.images[0] ?? images.services[service.id as keyof typeof images.services];

  return (
    <MediaCard
      href={`/services/${service.slug}`}
      image={img}
      title={service.title}
      description={compact ? undefined : service.summary}
      footer={
        compact ? undefined : (
          <p className="mt-4 text-sm font-semibold text-gold">Service details →</p>
        )
      }
    />
  );
}
