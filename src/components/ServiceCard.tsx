import Link from "next/link";
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
      image={img}
      title={
        <Link
          href={`/services/${service.slug}`}
          className="text-navy no-underline hover:text-gold-deep"
        >
          {service.title}
        </Link>
      }
      description={service.summary}
      footer={
        <div className="mt-4 flex items-center justify-between text-sm">
          <Link
            href={`/services/${service.slug}`}
            className="font-medium text-steel no-underline hover:text-navy"
          >
            Details
          </Link>
          <Link
            href={`/book?service=${service.id}`}
            className="font-semibold text-gold-deep no-underline hover:text-navy"
          >
            Book →
          </Link>
        </div>
      }
    />
  );
}
