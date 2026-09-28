import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "../../../components/ServicePage";
import { serviceList, services } from "../../../lib/services";
import { pageMetadata } from "../../../lib/seo";

export const dynamicParams = false;
const existingRoutes = new Set(["amazon-ppc", "google-ads", "meta-ads"]);
export function generateStaticParams() {
  return serviceList
    .filter((service) => !existingRoutes.has(service.slug))
    .map((service) => ({ slug: service.slug }));
}
function getService(slug: string) {
  if (!Object.hasOwn(services, slug)) notFound();
  return services[slug];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return pageMetadata({
    title: `${service.name} | Go Massive`,
    description: service.description,
    path: `/services/${slug}`,
  });
}
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServicePage service={getService(slug)} />;
}
