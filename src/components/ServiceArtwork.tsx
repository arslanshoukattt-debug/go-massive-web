import Image from "next/image";
import { services } from "../lib/services";

/** Process diagrams use the actual service scope, never simulated client data. */
export function ServiceArtwork({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const service = services[slug];
  if (!service) return null;
  return <div className={`service-diagram ${compact ? "service-diagram--compact" : ""}`}>
    <Image
      src={`/images/services/${slug}.webp`}
      alt={`${service.name} process: ${service.steps.map(step => step.title).join("; ")}.`}
      width={1000}
      height={310 + service.steps.length * 190}
      sizes={compact ? "(max-width: 700px) 90vw, 30vw" : "(max-width: 850px) 90vw, 45vw"}
      loading="lazy"
    />
  </div>;
}
