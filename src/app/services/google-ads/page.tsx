import type { Metadata } from "next";
import { ServicePage } from "../../../components/ServicePage";
import { services } from "../../../lib/services";
import { pageMetadata } from "../../../lib/seo";
const service = services["google-ads"];
export const metadata: Metadata = pageMetadata({
  title: "Google Ads Management for eCommerce Brands | Go Massive",
  description: service.description,
  path: "/services/google-ads",
});
export default function GoogleAdsPage() {
  return <ServicePage service={service} />;
}
