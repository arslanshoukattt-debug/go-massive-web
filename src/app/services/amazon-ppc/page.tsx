import type { Metadata } from "next";
import { ServicePage } from "../../../components/ServicePage";
import { services } from "../../../lib/services";
import { pageMetadata } from "../../../lib/seo";
const service = services["amazon-ppc"];
export const metadata: Metadata = pageMetadata({
  title: "Amazon PPC Management | Go Massive",
  description: service.description,
  path: "/services/amazon-ppc",
});
export default function AmazonPpcPage() {
  return <ServicePage service={service} />;
}
