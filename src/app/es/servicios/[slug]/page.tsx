import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/ServiceLanding";
import { SERVICE_SLUG_ES } from "@/lib/i18n";
import { services } from "@/lib/services";
import { getLocalizedServiceBySlug } from "@/lib/services-localized";
import { buildMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: SERVICE_SLUG_ES[s.slug] ?? s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getLocalizedServiceBySlug(slug, "es");
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/es/servicios/${service.slug}`,
    keywords: service.keywords,
    locale: "es",
  });
}

export default async function SpanishServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getLocalizedServiceBySlug(slug, "es");
  if (!service) notFound();
  return <ServiceLanding service={service} locale="es" />;
}
