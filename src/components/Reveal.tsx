import { ScrollReveal } from "./ScrollReveal";
import type { ReactNode } from "react";

// Preserve the existing millisecond-based API across the site's sections.
export function Reveal({ children, className, delay = 0 }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <ScrollReveal className={className} delay={delay / 1000}>{children}</ScrollReveal>;
}
