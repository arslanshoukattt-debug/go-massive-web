export type CaseStudy = {
  slug: string;
  label: string;
  category: string;
  marketplace: string;
  businessStage: string;
  scope: string;
  title: string;
  summary: string;
  metrics: { value: string; label: string }[];
  challenge: string[];
  execution: string[];
  result: string[];
  takeaway: string;
};

export const agencyStats = [
  { value: "50+", label: "Brands managed" },
  { value: "200+", label: "Accounts under management" },
  { value: "$200M+", label: "Cumulative revenue managed" },
  { value: "92%", label: "Average annual client retention" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "outdoor-leisure-marketplace-growth",
    label: "Established Outdoor & Leisure Brand",
    category: "Outdoor and leisure",
    marketplace: "Amazon",
    businessStage: "Established brand with a mature direct-to-consumer channel",
    scope: "Amazon advertising, listing and content optimisation, account management",
    title: "How an established outdoor brand grew marketplace revenue 2.4x in six months.",
    summary: "A stronger Amazon presence, clearer demand separation, and a campaign structure built around commercial intent.",
    metrics: [
      { value: "2.4x", label: "Marketplace revenue" },
      { value: "+180%", label: "Non-branded sales" },
      { value: "−42%", label: "Total advertising cost of sale" },
      { value: "6 months", label: "Time to result" },
    ],
    challenge: [
      "The marketplace channel carried products without carrying the brand: listings existed, but the content, imagery, and storefront did not give shoppers a reason to choose it.",
      "Advertising had accumulated rather than been designed. Branded and non-branded demand were mixed together, so spend was active but undirected.",
      "The team could not see which products deserved investment, which terms were introducing new customers, or whether performance was simply existing brand demand finding its way to Amazon.",
    ],
    execution: [
      "Rebuilt campaign structure so each product group and each type of demand had a defined job.",
      "Separated branded from non-branded demand to make genuine customer acquisition visible.",
      "Brought listings, imagery, and storefront content up to a marketplace-first standard.",
      "Introduced a working search-term process and product-level budget priorities.",
      "Established a reporting rhythm built around decisions the client could run the business against.",
    ],
    result: [
      "Redirecting spend toward genuine acquisition cut total advertising cost of sale by 42% while non-branded sales grew 180%.",
      "Overall marketplace revenue reached 2.4x its starting level over six months.",
    ],
    takeaway: "A strong brand does not transfer to a marketplace by itself. It has to be rebuilt there on purpose—and advertising can only be steered once it has a structure worth steering.",
  },
  {
    slug: "outdoor-leisure-product-launch",
    label: "Growing Outdoor & Leisure Brand",
    category: "Outdoor and leisure",
    marketplace: "Amazon",
    businessStage: "New marketplace entry",
    scope: "Launch strategy, advertising, listing and content development",
    title: "How a new outdoor product grew sales 300% in its first season.",
    summary: "A launch strategy built to learn quickly, establish conversion signals, and make the most of one selling window.",
    metrics: [
      { value: "+300%", label: "Sales growth across the first season" },
      { value: "1 season", label: "Window available" },
    ],
    challenge: [
      "There was no sales history, review base, conversion data, or proven marketplace search behaviour to build from.",
      "The product was seasonal, so the learning period and selling period were the same. Every slow decision cost part of the only window available.",
      "Early advertising needed to build information as well as sales, without allowing the launch phase to become permanent.",
    ],
    execution: [
      "Front-loaded learning through broad early activity to surface real search behaviour quickly.",
      "Separated discovery spend from conversion spend so each could be judged against the right objective.",
      "Built listing and content around how shoppers would discover the product on the marketplace.",
      "Compressed the optimisation cycle, reallocating toward proven terms and cutting the rest at a faster seasonal rhythm.",
      "Built early review and rating momentum through legitimate marketplace programmes.",
    ],
    result: [
      "Sales grew 300% across the first season.",
      "The launch also created a validated set of converting search terms, a review base, and performance history for the next season.",
    ],
    takeaway: "A launch is not a smaller version of managing an established account. You are buying data before you are buying sales—and for a seasonal product, that learning has to finish before the season does.",
  },
  {
    slug: "food-beverage-category-development",
    label: "Growing Food & Beverage Brand",
    category: "Food and beverage",
    marketplace: "Amazon",
    businessStage: "Growing brand entering an undeveloped category",
    scope: "Category development, advertising, listing and content strategy",
    title: "How a food brand grew sales 250% while holding TACoS at 15%.",
    summary: "Finding demand through real shopper occasions when the category itself had little established search volume.",
    metrics: [
      { value: "+250%", label: "Sales growth" },
      { value: "15%", label: "Total advertising cost of sale, held throughout" },
      { value: "4 months", label: "Time to result" },
    ],
    challenge: [
      "Shoppers were not searching for the category—not because the product was weak, but because the category was not yet familiar to them.",
      "Standard keyword research offered very little. Capturing the handful of existing searches would never be enough to create meaningful growth.",
      "The listing had to explain what the product was for before it could explain why a shopper should choose it.",
    ],
    execution: [
      "Targeted the occasions, uses, and adjacent products the product served rather than waiting for category demand to form.",
      "Rebuilt the listing around the shopper question: what is this and why would I want it?",
      "Used early advertising as category research to test which product framing people actually responded to.",
      "Widened deliberately at first, then narrowed around real converting terms once they emerged.",
      "Built around the search terms the brand could realistically own as the category developed.",
    ],
    result: [
      "Sales grew 250% in four months, with total advertising cost of sale held at 15% throughout.",
      "The growth came from finding demand that already existed under a different name—not from buying attention until awareness caught up.",
    ],
    takeaway: "When shoppers do not know a category exists, bidding on its name is not enough. You have to meet demand where it already is—in the occasions the product serves and the products it replaces.",
  },
  {
    slug: "consumer-goods-catalogue-structure",
    label: "Established Consumer Goods Business",
    category: "Consumer goods",
    marketplace: "Multiple European marketplaces",
    businessStage: "Established manufacturer with a broad, multi-variant range",
    scope: "Catalogue structure, advertising, listing optimisation, multi-market management",
    title: "How a consumer-goods business grew marketplace sales 700% by fixing catalogue structure.",
    summary: "Consolidating fragmented product signals so inventory, reviews, and advertising could start compounding instead of competing.",
    metrics: [
      { value: "+700%", label: "Marketplace sales" },
      { value: "5 months", label: "Time to result" },
    ],
    challenge: [
      "A broad multi-variant range had become thousands of separate marketplace listings, fragmenting reviews, sales history, ranking signals, and ad data.",
      "Stockouts repeatedly reset individual listing momentum, while spend was spread too thinly across variants to create useful optimisation data.",
      "The same structural weakness multiplied across several European marketplaces, each with its own listings, content, search terms, and budget logic.",
    ],
    execution: [
      "Rebuilt parent-child catalogue structure so related variants could consolidate their sales history, reviews, and ranking signals.",
      "Re-pointed advertising toward consolidated listings so budget accumulated where it could be optimised.",
      "Prioritised the product lines that carried the business rather than spreading investment evenly across the full range.",
      "Separated local-market work from repeatable work to make multi-market management more controlled.",
      "Aligned advertising to inventory position so spend followed products that could actually be supplied.",
    ],
    result: [
      "Marketplace sales grew 700% in five months.",
      "The rebuilt catalogue reduced the commercial cost of stockouts: a gap in one variant no longer erased the standing of the broader product family.",
    ],
    takeaway: "On a large multi-variant catalogue, structure decides the ceiling before advertising gets a say. Get it right and the same products, supply constraints, and spend can produce a completely different result.",
  },
  {
    slug: "home-furniture-marketplace-rebuild",
    label: "Established Home & Furniture Brand",
    category: "Home and furniture",
    marketplace: "Amazon",
    businessStage: "Established manufacturer and retailer with substantial off-marketplace volume",
    scope: "Listing creation, imagery, copy, A+ content, design, PPC structure, account management",
    title: "How a furniture brand grew monthly sales more than 4x by rebuilding its marketplace presence.",
    summary: "Turning a scattered collection of listings into a connected, conversion-ready marketplace catalogue.",
    metrics: [{ value: "4x+", label: "Monthly sales following a marketplace rebuild" }],
    challenge: [
      "Listings had accumulated without a shared visual language, consistent copy, or a structure that connected products into coherent ranges.",
      "For a considered furniture purchase, weak imagery and disconnected listings removed products from consideration before advertising could make a difference.",
      "Spend was being sent to pages that were not equipped to convert it, making a merchandising constraint look like an advertising-efficiency problem.",
    ],
    execution: [
      "Rebuilt listings as a connected catalogue with consistent structure, imagery, and product-range relationships.",
      "Produced new imagery and rewrote copy around how shoppers search for and choose furniture.",
      "Built A+ content and design assets that carried the brand consistently across the catalogue.",
      "Restructured advertising beneath the rebuilt listings so performance data reflected demand rather than presentation gaps.",
      "Prioritised ranges with stronger cross-sell potential so investment could compound across a range, not just one product at a time.",
    ],
    result: [
      "Monthly sales grew more than 4x following the full marketplace rebuild.",
      "The key change was not the products, pricing, or market. The catalogue began presenting itself as a coherent brand with connected ranges, so the same traffic converted differently.",
    ],
    takeaway: "On a considered purchase like furniture, presentation is not decoration sitting on top of the commercial engine. It is part of the commercial engine.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
