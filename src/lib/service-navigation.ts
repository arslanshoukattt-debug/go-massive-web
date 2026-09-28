export const serviceGroups = [
  {
    id: "amazon-growth",
    name: "Amazon growth",
    description: "The complete marketplace operation.",
    items: [
      { slug: "amazon-account-management", name: "Amazon Account Management" },
      { slug: "amazon-ppc", name: "Amazon PPC" },
      {
        slug: "amazon-listing-optimization",
        name: "Listings, SEO & Catalogue",
      },
      { slug: "amazon-creative", name: "A+ Content & Brand Stores" },
      { slug: "amazon-product-launch", name: "Amazon Product Launch" },
      { slug: "amazon-account-health", name: "Account Health & Compliance" },
    ],
  },
  {
    id: "performance-marketing",
    name: "Performance marketing",
    description: "Turn intent and attention into demand.",
    items: [
      { slug: "google-ads", name: "Google Ads" },
      { slug: "meta-ads", name: "Meta Ads" },
      { slug: "seo", name: "Search Engine Optimisation" },
      { slug: "social-media-management", name: "Social Media Management" },
    ],
  },
  {
    id: "creative-retention",
    name: "Creative & retention",
    description: "Give people a reason to choose and return.",
    items: [
      { slug: "creative-direction", name: "Creative Direction" },
      { slug: "email-marketing", name: "Email Marketing" },
    ],
  },
  {
    id: "commerce-expansion",
    name: "Commerce & expansion",
    description: "Build your next channel with purpose.",
    items: [
      { slug: "shopify-management", name: "Shopify Management" },
      { slug: "shopify-development", name: "Shopify Development" },
      { slug: "walmart", name: "Walmart Management" },
      { slug: "tiktok-shop", name: "TikTok Shop" },
      { slug: "ebay", name: "eBay Wholesale & White Label" },
      { slug: "temu", name: "Temu Management" },
    ],
  },
] as const;
export const serviceLinks = serviceGroups.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    group: group.id,
    groupName: group.name,
  })),
);
