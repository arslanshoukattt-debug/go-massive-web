import type { MetadataRoute } from "next";
import { caseStudies } from "../lib/case-studies";

const BASE_URL = "https://go-massive.com";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/services/amazon-ppc", priority: 0.8 },
  { path: "/services/google-ads", priority: 0.7 },
  { path: "/services/meta-ads", priority: 0.7 },
  { path: "/case-studies", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/growth-audit", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));

  const caseStudyEntries = caseStudies.map((caseStudy) => ({
    url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
