import type { Metadata } from "next";
import { ServicePage } from "../../../components/ServicePage";
import { services } from "../../../lib/services";
import { pageMetadata } from "../../../lib/seo";
const service = services["meta-ads"];
export const metadata: Metadata = pageMetadata({
  title: "Meta Ads Management for eCommerce Brands | Go Massive",
  description: service.description,
  path: "/services/meta-ads",
});
export default function MetaAdsPage() {
  return <ServicePage service={service} />;
}
