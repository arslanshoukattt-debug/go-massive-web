import type { MetadataRoute } from "next";
import { serviceList } from "../lib/services";
import { caseStudies } from "../lib/case-studies";

import { SITE_URL as BASE_URL } from "../lib/site";
import { getPublishedPosts } from "../lib/blog";

export const dynamic = "force-dynamic";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/case-studies", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
  { path: "/growth-audit", priority: 0.9 },
  { path: "/contact", priority: 0.5 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const caseStudyEntries = caseStudies.map((caseStudy) => ({
    url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceEntries = serviceList.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...getPublishedPosts().map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }))];
}
