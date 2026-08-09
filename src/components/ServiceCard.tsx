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
    <article className="group panel flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
      <div className="shot-img relative aspect-[16/10]">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.08]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-navy-deep/80 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-gold">
          DX-{num}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold tracking-tight text-pearl">
          <Link
            href={`/services/${service.slug}`}
            className="text-pearl no-underline hover:text-gold-light"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{service.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs uppercase tracking-wider">
          <Link
            href={`/services/${service.slug}`}
            className="text-muted no-underline hover:text-gold-light"
          >
            Details
          </Link>
          <Link
            href={`/book?service=${service.id}`}
            className="font-semibold text-gold no-underline hover:text-gold-light"
          >
            Book →
          </Link>
        </div>
      </div>
    </article>
  );
}
