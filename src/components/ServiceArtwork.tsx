import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

type ArtworkSpec = {
  channel: string;
  title: string;
  kind: "campaign" | "store" | "creative" | "workflow" | "search" | "email";
  labels: [string, string, string];
  outcome: string;
};
const artwork: Record<string, ArtworkSpec> = {
  "amazon-account-management": {
    channel: "Amazon operations",
    title: "One account. Every detail.",
    kind: "workflow",
    labels: ["Catalogue", "Inventory", "Advertising"],
    outcome: "A connected account plan",
  },
  "amazon-ppc": {
    channel: "Amazon Ads",
    title: "Give every campaign a role.",
    kind: "campaign",
    labels: ["Discovery", "Conversion", "Brand defence"],
    outcome: "Search terms → budget decisions",
  },
  "amazon-listing-optimization": {
    channel: "Amazon listings",
    title: "From query to product.",
    kind: "search",
    labels: ["Keywords", "Product detail", "Catalogue"],
    outcome: "Relevance at every step",
  },
  "amazon-creative": {
    channel: "A+ Content & Brand Stores",
    title: "Show why your product wins.",
    kind: "creative",
    labels: ["Brand story", "Product benefits", "Comparison"],
    outcome: "A clear path to the right product",
  },
  "amazon-product-launch": {
    channel: "Amazon launch",
    title: "Ready before the first click.",
    kind: "workflow",
    labels: ["Prepare", "Launch", "Learn"],
    outcome: "Listing + stock + advertising",
  },
  "amazon-account-health": {
    channel: "Amazon account health",
    title: "See the issue. Own the action.",
    kind: "workflow",
    labels: ["Diagnose", "Document", "Resolve"],
    outcome: "Clear priorities and responsibility",
  },
  "google-ads": {
    channel: "Google Ads",
    title: "Connect intent to the offer.",
    kind: "campaign",
    labels: ["Search", "Shopping", "Remarketing"],
    outcome: "Query → product → purchase",
  },
  "meta-ads": {
    channel: "Meta Ads",
    title: "Build the next creative test.",
    kind: "creative",
    labels: ["Creative", "Audience", "Offer"],
    outcome: "Test → learn → refine",
  },
  seo: {
    channel: "Organic search",
    title: "Make the store discoverable.",
    kind: "search",
    labels: ["Crawl", "Content", "Internal links"],
    outcome: "Search intent meets useful content",
  },
  "social-media-management": {
    channel: "Social media",
    title: "A plan behind every post.",
    kind: "creative",
    labels: ["Plan", "Publish", "Respond"],
    outcome: "Brand story, consistently delivered",
  },
  "creative-direction": {
    channel: "Creative direction",
    title: "One idea. Every touchpoint.",
    kind: "creative",
    labels: ["Campaign", "Storefront", "Marketplace"],
    outcome: "A consistent visual language",
  },
  "email-marketing": {
    channel: "Email marketing",
    title: "The right message. Right moment.",
    kind: "email",
    labels: ["Welcome", "Cart recovery", "Replenishment"],
    outcome: "First visit → next purchase",
  },
  "shopify-management": {
    channel: "Shopify management",
    title: "Merchandise with a purpose.",
    kind: "store",
    labels: ["Collections", "Products", "Customer journey"],
    outcome: "A storefront with clear ownership",
  },
  "shopify-development": {
    channel: "Shopify development",
    title: "Build around the buying journey.",
    kind: "store",
    labels: ["Discover", "Compare", "Checkout"],
    outcome: "Responsive from browse to basket",
  },
  walmart: {
    channel: "Walmart Marketplace",
    title: "Make the channel ready.",
    kind: "store",
    labels: ["Product data", "Inventory", "Operations"],
    outcome: "A structured marketplace launch",
  },
  "tiktok-shop": {
    channel: "TikTok Shop",
    title: "Turn discovery into a next step.",
    kind: "creative",
    labels: ["Content", "Product", "Shop"],
    outcome: "Connect the story to the product",
  },
  ebay: {
    channel: "eBay commerce",
    title: "Bring order to your range.",
    kind: "store",
    labels: ["Range", "Listings", "Fulfilment"],
    outcome: "Wholesale and white-label execution",
  },
  temu: {
    channel: "Temu commerce",
    title: "Start with commercial fit.",
    kind: "workflow",
    labels: ["Assess fit", "Prepare range", "Expand"],
    outcome: "Product suitability before scale",
  },
};

/** Service deliverable diagrams, never screenshots or claimed client results. */
export function ServiceArtwork({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const spec = artwork[slug];
  if (!spec) return null;
  return (
    <div
      className={`service-artwork art-${spec.kind} ${compact ? "art-compact" : ""}`}
      role="img"
      aria-label={`${spec.channel}: ${spec.labels.join(" → ")}. ${spec.outcome}.`}
    >
      <div className="art-chrome">
        <span>{spec.channel}</span>
      </div>
      <div className="art-content" aria-hidden="true">
        <p className="art-title">{spec.title}</p>
        {(spec.kind === "store" || spec.kind === "creative") && (
          <div className="art-product-scene">
            <div className="art-product-copy">
              <span>
                {spec.kind === "store" ? "THE STOREFRONT" : "THE PRODUCT STORY"}
              </span>
              <strong>
                {spec.kind === "store"
                  ? "Made to be found.\nEasy to choose."
                  : "Show the benefit.\nMake it clear."}
              </strong>
            </div>
            <div className="art-product-photo">
              <Image
                src={
                  spec.kind === "creative"
                    ? "/images/creative-production.webp"
                    : "/images/commerce-editorial.webp"
                }
                alt=""
                fill
                sizes="(max-width:600px) 40vw, 240px"
              />
            </div>
          </div>
        )}
        {spec.kind === "search" && (
          <div className="art-query">
            <Search size={19} />
            <span>What your customer is looking for</span>
            <ArrowRight size={18} />
          </div>
        )}
        <div className="art-nodes">
          {spec.labels.map((label, i) => (
            <div className="art-node" key={label}>
              <span className="art-node-symbol">0{i + 1}</span>
              <strong>{label}</strong>
              {spec.kind === "campaign" && (
                <p className="art-node-detail">
                  {
                    (slug === "amazon-ppc"
                      ? [
                          "Find new customers",
                          "Target product searches",
                          "Protect branded searches",
                        ]
                      : [
                          "Match search intent",
                          "Show the product range",
                          "Reach past visitors",
                        ])[i]
                  }
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="art-outcome">
          <span>{spec.outcome}</span>
          <ArrowRight size={17} />
        </div>
      </div>
    </div>
  );
}
