export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  visualHeadline: [string, string];
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  takeaway: string;
  sections: { id: string; title: string; paragraphs: string[]; checklist?: string[] }[];
  sources: { title: string; url: string }[];
  service: { title: string; href: string };
};

const posts: BlogPost[] = [{
  slug: "shopify-session-measurement-update-september-2026",
  title: "Shopify changed session measurement. Here’s what to check before changing your ads.",
  seoTitle: "Shopify’s 2026 Session Update: What to Check | Go Massive",
  visualHeadline: ["Same orders.", "New baseline."],
  description: "Shopify’s September 2026 analytics update can change session-based metrics. Learn how to separate reporting changes from real trading performance.",
  category: "Shopify · Analytics",
  publishedAt: "2026-10-02",
  updatedAt: "2026-10-02",
  published: true,
  takeaway: "A change in your conversion rate does not automatically mean a change in customer behaviour. Check the measurement baseline before reallocating budget.",
  sections: [
    { id: "what-changed", title: "What changed on 21 September?", paragraphs: [
      "Shopify announced an update to session measurement starting 21 September 2026. It changes how human, bot and system activity is classified, and recognises valid shopping journeys that may not contain a conventional pageview. Where the Human or bot filter is available, the default session view focuses on human visitors.",
      "That can affect sessions and the metrics calculated from them, including conversion rate, add-to-cart rate and bounce rate. Shopify says the update does not change orders, sales or customer counts. Its advice is to treat comparisons across 21 September as crossing a new measurement baseline."
    ] },
    { id: "why-it-matters", title: "Why this matters to your ad budget", paragraphs: [
      "Our view: a reporting change is a reason to investigate, not an automatic reason to scale or stop a campaign. Conversion rate depends on both orders and sessions. If the session denominator changes, the rate can move even when the underlying order volume stays the same.",
      "For illustration, 100 orders from 10,000 sessions is a 1% conversion rate. The same 100 orders divided by 8,000 sessions produces 1.25%. Those are hypothetical numbers, not an estimate of the effect on your store. They show why a higher rate alone cannot prove that a new creative or landing page worked.",
      "Start with the commercial question: did the additional advertising spend produce additional profitable orders? Review revenue alongside refunds, discounts, product cost, fulfilment cost and media spend. Use a consistent definition of contribution profit, and avoid treating a platform-reported return as your final margin."
    ] },
    { id: "audit-your-reporting", title: "A practical reporting check", paragraphs: [
      "Keep an untouched export of your original reports before editing dashboards. Compare equivalent trading periods, and mark promotions, stockouts and campaign changes separately from the measurement update. This gives the team a shared record of what actually changed."
    ], checklist: [
      "Annotate 21 September 2026 in your reporting notes and any before-and-after analysis.",
      "Compare orders and sales first, then examine sessions and conversion rates. Keep time zone, date range and channel filters consistent.",
      "Check the Human or bot filter where available. Record the selected view so the next report uses the same definition.",
      "Compare landing pages and acquisition channels separately. A store-wide average can hide a weak product page or a shift in traffic mix.",
      "Document any budget decision with its commercial evidence. Avoid crediting the measurement change to a campaign experiment."
    ] },
    { id: "next-decision", title: "Build a new baseline before judging the next test", paragraphs: [
      "Choose a post-update reporting window long enough to reflect your normal buying cycle. A high-volume store may see a useful pattern sooner than a store with only a handful of weekly orders. There is no universal number of days that makes a test reliable.",
      "Keep other changes controlled where possible. If you change pricing, creative and product-page layout together, even clean analytics will struggle to explain which change contributed to the outcome. Give each test an owner, a commercial hypothesis and a decision date.",
      "For agency reporting, show the measurement note beside the result rather than burying it in a footnote. The useful conversation is whether the business is making better decisions and retaining more profit—not whether one percentage looks better after a platform update."
    ] }
  ],
  sources: [{ title: "Shopify: session measurement improvements (21 September 2026)", url: "https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements" }],
  service: { title: "Shopify management", href: "/services/shopify-management" },
}];

export const publishedPosts = posts.filter(post => post.published).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export const findPost = (slug: string) => publishedPosts.find(post => post.slug === slug);
export const formatPostDate = (date: string) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date));
export function readingMinutes(post: BlogPost) {
  const text = post.sections.flatMap(section => [...section.paragraphs, ...(section.checklist ?? [])]).join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 220));
}
