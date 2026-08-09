import Image from "next/image";
import Link from "next/link";
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
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-[0_12px_36px_rgba(10,22,36,0.08)]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-display text-lg font-bold tracking-tight text-navy">
          <Link
            href={`/services/${service.slug}`}
            className="text-navy no-underline hover:text-gold-deep"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{service.summary}</p>
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
      </div>
    </article>
  );
}
