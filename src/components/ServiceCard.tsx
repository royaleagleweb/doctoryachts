import { MediaCard } from "@/components/MediaCard";
import { images } from "@/lib/images";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
  index?: number;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const img = service.images[0] ?? images.services[service.id as keyof typeof images.services];

  return (
    <MediaCard
      href={`/services/${service.slug}`}
      image={img}
      title={service.title}
      description={service.summary}
      footer={
        <p className="mt-4 text-sm font-semibold text-gold-deep">Service details →</p>
      }
    />
  );
}
