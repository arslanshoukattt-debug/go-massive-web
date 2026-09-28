import { ServiceArtwork } from "./ServiceArtwork";
import type { ServiceContent } from "../lib/services";

export function ServiceVisual({ service }: { service: ServiceContent }) {
  return (
    <div className="service-board service-board--specific">
      <ServiceArtwork slug={service.slug} />
    </div>
  );
}
