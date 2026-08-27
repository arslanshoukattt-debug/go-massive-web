import type { Metadata } from "next";

const SITE_URL = "https://go-massive.com";
const SITE_NAME = "Go Massive";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Go Massive — the commercial operating layer for ambitious eCommerce brands" };

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
