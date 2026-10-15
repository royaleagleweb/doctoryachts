import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/components/ServiceLanding";
import { fitPageTitle, metaDescriptionFor } from "@/lib/page-meta";
import { getServiceBySlug } from "@/lib/services";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return buildMetadata({
    title: fitPageTitle(service.seoTitle),
    description: metaDescriptionFor(path, service.seoDescription),
    path,
    keywords: service.keywords,
    locale: "en",
  });
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceLanding service={service} locale="en" />;
}
