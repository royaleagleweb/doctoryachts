import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const img = service.images[0] ?? images.services[service.id as keyof typeof images.services];
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group panel flex h-full flex-col overflow-hidden transition hover:border-navy/25">
      <div className="shot-img relative aspect-[16/10]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 bg-navy/85 px-2 py-1 font-mono text-[0.65rem] font-semibold tracking-wider text-paper">
          DX-{num}
        </span>
      </div>
      <div className="flex flex-1 flex-col border-t border-line p-5">
        <h3 className="font-display text-xl font-semibold tracking-tight text-navy">
          <Link
            href={`/services/${service.slug}`}
            className="text-navy no-underline hover:text-gold"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs uppercase tracking-wider">
          <Link href={`/services/${service.slug}`} className="text-muted no-underline hover:text-gold">
            Details
          </Link>
          <Link
            href={`/book?service=${service.id}`}
            className="font-semibold text-gold no-underline hover:text-gold-deep"
          >
            Book →
          </Link>
        </div>
      </div>
    </article>
  );
}
