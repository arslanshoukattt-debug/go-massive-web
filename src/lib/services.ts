import { serviceLinks } from "./service-navigation";
export type ServiceVisualKind =
  | "advertising"
  | "operations"
  | "creative"
  | "commerce"
  | "search"
  | "retention";
export type ServiceContent = {
  slug: string;
  name: string;
  group: string;
  groupName: string;
  title: string;
  accent: string;
  description: string;
  outcomes: string[];
  problem: string;
  problemCopy: string;
  scope: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  audience: string[];
  faqs: { question: string; answer: string }[];
  visual: ServiceVisualKind;
  visualTitle: string;
  visualItems: string[];
  proofSlug?: string;
  related: string[];
};
type ServiceInput = Omit<
  ServiceContent,
  "slug" | "name" | "group" | "groupName"
>;
const blocks = (items: [string, string][]) =>
  items.map(([title, copy]) => ({ title, copy }));
const questions = (items: [string, string][]) =>
  items.map(([question, answer]) => ({ question, answer }));
const outdoor = "outdoor-leisure-marketplace-growth";
const content: Record<string, ServiceInput> = {
  "amazon-account-management": {
    title: "YOUR AMAZON BUSINESS.",
    accent: "ONE ACCOUNTABLE TEAM.",
    description:
      "Amazon account management covering listings, inventory coordination, advertising and account health. One team handles the work and reports on sales, costs and priorities.",
    outcomes: [
      "One owner across marketplace priorities",
      "Operations connected to acquisition",
      "Clear reporting and next actions",
    ],
    problem: "A busy account isn’t always a growing business.",
    problemCopy:
      "When listings, advertising and operations sit with different people, problems fall between the gaps. Growth needs a team that can see how one decision affects the rest of the account.",
    scope: blocks([
      [
        "Account operations",
        "Keep priorities, support cases and account activity organised in one working plan.",
      ],
      [
        "Catalogue ownership",
        "Coordinate product information, variations and listing fixes around how people shop.",
      ],
      [
        "Inventory coordination",
        "Bring stock availability and replenishment context into campaign and launch decisions.",
      ],
      [
        "Content coordination",
        "Align listings, A+ content and storefront work with the products that matter.",
      ],
      [
        "Advertising alignment",
        "Connect paid demand to product economics, account readiness and the growth plan.",
      ],
      [
        "Commercial reporting",
        "Review performance, blockers and next actions with clear task ownership.",
      ],
    ]),
    steps: blocks([
      [
        "Map the account",
        "Review the structure, catalogue, operations and commercial constraints together.",
      ],
      [
        "Prioritise the fixes",
        "Agree a plan that gives urgent risks and valuable opportunities the right attention.",
      ],
      [
        "Manage and review",
        "Review completed work, account performance and open issues. Assign the next actions to named owners.",
      ],
    ]),
    audience: [
      "Established brands with fragmented support",
      "DTC brands building an Amazon channel",
      "Growing catalogues needing daily ownership",
    ],
    faqs: questions([
      [
        "Can you take over an existing account?",
        "Yes. We review your setup, access, open issues and priorities. The handover plan keeps ongoing operations visible while we agree the work to take on.",
      ],
      [
        "Does management include advertising and creative?",
        "It can. We agree the specific services and responsibilities together, so you know which work is included and how specialist delivery connects to account management.",
      ],
    ]),
    visual: "operations",
    visualTitle: "One account. A connected plan.",
    visualItems: [
      "Catalogue & account health",
      "Inventory & content",
      "Advertising & reporting",
    ],
    proofSlug: outdoor,
    related: [
      "amazon-ppc",
      "amazon-listing-optimization",
      "amazon-account-health",
    ],
  },
  "amazon-ppc": {
    title: "MAKE EVERY CLICK",
    accent: "EARN ITS PLACE.",
    description:
      "We manage Amazon campaigns, search terms, bids and budgets against your margins. See where ad spend is working, where it is wasted and what to change.",
    outcomes: [
      "Separate acquisition from branded demand",
      "Connect budgets to product priorities",
      "Use search-term data to refine targeting",
    ],
    problem: "More spend won’t fix a confused account.",
    problemCopy:
      "Mixed demand, duplicated targeting and budgets spread too thin make performance hard to understand. We organise the account around what each campaign is meant to achieve.",
    scope: blocks([
      [
        "Campaign structure",
        "Organise portfolios, product groups and campaign roles around commercial intent.",
      ],
      [
        "Keyword & product targeting",
        "Develop relevant search, category and competitor opportunities for your range.",
      ],
      [
        "Search-term management",
        "Refine targeting, develop useful demand and reduce wasted spend.",
      ],
      [
        "Bids, budgets & placements",
        "Allocate investment with product economics, stock and performance in view.",
      ],
      [
        "Launch & seasonal planning",
        "Give new products and peak periods a specific plan.",
      ],
      [
        "Performance reviews",
        "Explain changes in advertising efficiency, acquisition and total account performance.",
      ],
    ]),
    steps: blocks([
      [
        "Audit the demand",
        "Review search terms, products, branded demand and structure before changing budgets.",
      ],
      [
        "Build the campaign plan",
        "Give discovery, conversion and branded defence distinct investment priorities.",
      ],
      [
        "Test and reallocate",
        "Use search and product data to refine bids, targeting and the next decision.",
      ],
    ]),
    audience: [
      "Brands without clear demand separation",
      "New launches needing an acquisition plan",
      "Sellers protecting efficiency as they scale",
    ],
    faqs: questions([
      [
        "Do you focus on ACOS or the whole business?",
        "Both need context. We review campaign efficiency alongside total advertising cost of sale, product economics and account goals. A lower ACOS is not automatically a better commercial result.",
      ],
      [
        "Can you manage PPC on its own?",
        "Yes. PPC can be a focused engagement. We still need visibility into listings, stock and product priorities that affect what advertising can achieve.",
      ],
    ]),
    visual: "advertising",
    visualTitle: "Every campaign has a job.",
    visualItems: [
      "Discover new demand",
      "Convert the right shoppers",
      "Refine spend with evidence",
    ],
    proofSlug: outdoor,
    related: [
      "amazon-listing-optimization",
      "amazon-creative",
      "amazon-product-launch",
    ],
  },
  "amazon-listing-optimization": {
    title: "GET FOUND.",
    accent: "MAKE THE CHOICE CLEAR.",
    description:
      "Keyword research, listing copy, product variations and catalogue fixes. Help shoppers find the right product and understand what they are buying.",
    outcomes: [
      "Search intent reflected in your listings",
      "Cleaner product and variation structure",
      "Content that answers purchase questions",
    ],
    problem: "Traffic can’t repair a confusing listing.",
    problemCopy:
      "Unclear titles, missing attributes and tangled variations create friction before shoppers consider your brand. The catalogue must support discovery and conversion.",
    scope: blocks([
      [
        "Listing audits",
        "Review content gaps, product attributes and customer-facing inconsistencies.",
      ],
      [
        "Search research",
        "Connect relevant shopper language to how your products are described.",
      ],
      [
        "Titles & bullet points",
        "Make product information specific, readable and useful.",
      ],
      [
        "Catalogue & variations",
        "Review product relationships against the actual range.",
      ],
      [
        "Attributes & product data",
        "Resolve information gaps that undermine discovery.",
      ],
      [
        "Content improvement plan",
        "Connect listing updates to advertising and creative priorities.",
      ],
    ]),
    steps: blocks([
      [
        "Read the catalogue",
        "Map the range, structure and how shoppers search for the offer.",
      ],
      [
        "Rebuild the foundations",
        "Align copy, attributes and organisation with accurate product information.",
      ],
      [
        "Review the response",
        "Observe account data and prioritise the next improvement.",
      ],
    ]),
    audience: [
      "Brands with inconsistent product pages",
      "Complex ranges with variation problems",
      "Sellers buying traffic that does not convert",
    ],
    faqs: questions([
      [
        "Can you fix structure as well as copy?",
        "Yes. We review product relationships alongside listing copy. Changes depend on your catalogue, evidence and marketplace requirements.",
      ],
      [
        "Do you guarantee first-page rankings?",
        "No. Search placement depends on multiple factors. We focus on accurate, relevant content and a stronger catalogue foundation, then review data over time.",
      ],
    ]),
    visual: "search",
    visualTitle: "From search to selection.",
    visualItems: [
      "Shopper intent",
      "Relevant content",
      "Clear catalogue structure",
    ],
    proofSlug: "consumer-goods-catalogue-structure",
    related: ["amazon-creative", "amazon-ppc", "amazon-account-management"],
  },
  "amazon-creative": {
    title: "SHOW THE DIFFERENCE.",
    accent: "EARN THE DECISION.",
    description:
      "Product imagery, A+ Content and Amazon Brand Stores that explain benefits, answer buying questions and help shoppers compare your range.",
    outcomes: [
      "Product benefits made easy to understand",
      "One story across the shopping journey",
      "Creative connected to buyer questions",
    ],
    problem: "Good products still need a convincing story.",
    problemCopy:
      "A shopper cannot hold your product or ask your team a question. Your imagery and content must explain the details, remove uncertainty and make the difference visible.",
    scope: blocks([
      [
        "Creative audit",
        "Identify missing messages, unclear imagery and gaps in the product story.",
      ],
      [
        "Listing imagery direction",
        "Plan visual hierarchies and useful benefit explanations.",
      ],
      [
        "A+ Content",
        "Structure modules and copy around differentiation and buyer questions.",
      ],
      [
        "Brand storytelling",
        "Connect the range with a consistent reason to trust the brand.",
      ],
      ["Brand Stores", "Organise range navigation and campaign destinations."],
      [
        "Creative iteration",
        "Use feedback and performance context to improve messages and layouts.",
      ],
    ]),
    steps: blocks([
      [
        "Find the story",
        "Review assets, product benefits and customer questions before designing.",
      ],
      [
        "Build the journey",
        "Develop copy and visual direction across listings, A+ modules and stores.",
      ],
      [
        "Refine for the shopper",
        "Review clarity, mobile presentation and content readiness before rollout.",
      ],
    ]),
    audience: [
      "Brands whose listings undersell their products",
      "Ranges needing a consistent visual identity",
      "DTC brands translating their story to Amazon",
    ],
    faqs: questions([
      [
        "Do we need existing photography?",
        "We review your assets and identify gaps. New photography or asset production is scoped explicitly before work begins.",
      ],
      [
        "Can every account use A+ Content?",
        "Availability depends on account and brand eligibility. We check what your account can access before recommending formats.",
      ],
    ]),
    visual: "creative",
    visualTitle: "A clearer product story.",
    visualItems: [
      "Explain the benefit",
      "Show the difference",
      "Guide the next click",
    ],
    proofSlug: outdoor,
    related: [
      "amazon-listing-optimization",
      "creative-direction",
      "amazon-ppc",
    ],
  },
  "amazon-product-launch": {
    title: "LAUNCH WITH A PLAN.",
    accent: "LEARN FROM THE LAUNCH.",
    description:
      "Prepare listings, creative, stock and advertising before launch. After launch, use search and sales data to decide what to improve and where to invest.",
    outcomes: [
      "Launch readiness before paid demand",
      "A focused plan for initial discovery",
      "Clear learning priorities after launch",
    ],
    problem: "Going live is a milestone. Not a launch strategy.",
    problemCopy:
      "An uploaded listing and an ad budget leave too much to chance. A launch needs a clear offer, a prepared account and a plan for what to learn from the first customers.",
    scope: blocks([
      [
        "Market & competitor context",
        "Understand customer expectations and the space your product can occupy.",
      ],
      [
        "Launch readiness",
        "Review product information, account setup and dependencies.",
      ],
      [
        "Listing & creative plan",
        "Coordinate the story and assets shoppers will see.",
      ],
      [
        "Initial advertising",
        "Structure discovery and conversion around launch priorities.",
      ],
      [
        "Inventory alignment",
        "Plan demand generation with replenishment context in view.",
      ],
      [
        "Early performance reviews",
        "Use customer and campaign data to prioritise improvements.",
      ],
    ]),
    steps: blocks([
      [
        "Validate the starting point",
        "Map the category, available stock and commercial goals.",
      ],
      [
        "Prepare the launch",
        "Connect listing readiness, creative and campaigns before go-live.",
      ],
      [
        "Learn into the next phase",
        "Review customer and search data, then adjust the priorities.",
      ],
    ]),
    audience: [
      "DTC brands entering Amazon",
      "Sellers launching a new range",
      "Products without a marketplace plan",
    ],
    faqs: questions([
      [
        "Do you guarantee launch sales?",
        "No. Demand, competition, pricing and the product affect results. We agree a plan and learning milestones without promising a sales number.",
      ],
      [
        "What do you need to start?",
        "Product information, brand assets, inventory context, target markets and commercial goals. These help us identify readiness gaps and agree the scope.",
      ],
    ]),
    visual: "operations",
    visualTitle: "Ready. Launch. Learn.",
    visualItems: [
      "Product & market context",
      "Launch readiness",
      "Discovery & iteration",
    ],
    proofSlug: "outdoor-leisure-product-launch",
    related: ["amazon-creative", "amazon-ppc", "amazon-account-management"],
  },
  "amazon-account-health": {
    title: "PROTECT THE FOUNDATION.",
    accent: "KEEP BUSINESS MOVING.",
    description:
      "Track account-health issues, gather documentation and coordinate support cases. Keep responsibilities and follow-up clear while resolving listing and account problems.",
    outcomes: [
      "Visibility into account-health priorities",
      "Clear ownership of issues and follow-up",
      "Operations informed by marketplace risk",
    ],
    problem: "Small account issues can become large blockers.",
    problemCopy:
      "Unresolved notices, incomplete records and scattered support conversations make it harder to respond well. We organise the facts and actions around your account.",
    scope: blocks([
      [
        "Account-health review",
        "Identify notices, outstanding issues and areas needing attention.",
      ],
      [
        "Issue prioritisation",
        "Separate urgent blockers from routine maintenance.",
      ],
      [
        "Documentation coordination",
        "Organise product and business information needed for a specific issue.",
      ],
      [
        "Support-case tracking",
        "Keep cases, responses and follow-up actions visible.",
      ],
      [
        "Listing issue coordination",
        "Connect account concerns to catalogue and content work.",
      ],
      [
        "Operational handover",
        "Make responsibilities and repeatable checks clear.",
      ],
    ]),
    steps: blocks([
      [
        "Understand the issue",
        "Review notices, context and evidence before proposing actions.",
      ],
      [
        "Coordinate the response",
        "Agree documentation and account steps for the specific situation.",
      ],
      [
        "Track the progress",
        "Connect follow-up and learning to everyday account operations.",
      ],
    ]),
    audience: [
      "Sellers with unresolved account issues",
      "Teams struggling to track support cases",
      "Brands needing clearer operational controls",
    ],
    faqs: questions([
      [
        "Do you guarantee reinstatement?",
        "No. Amazon makes enforcement decisions. We help organise facts, documentation and follow-up; we cannot guarantee the platform’s outcome.",
      ],
      [
        "Is this legal or regulatory advice?",
        "No. This is operational account support. Issues needing legal, tax or product-compliance expertise require the appropriate qualified adviser.",
      ],
    ]),
    visual: "operations",
    visualTitle: "Risks visible. Actions owned.",
    visualItems: [
      "Review the evidence",
      "Coordinate the response",
      "Track the next action",
    ],
    related: [
      "amazon-account-management",
      "amazon-listing-optimization",
      "amazon-product-launch",
    ],
  },
  "google-ads": {
    title: "REACH BUYERS",
    accent: "WHEN THEY SEARCH.",
    description:
      "Google Search, Shopping and remarketing campaigns for ecommerce. We review queries, product feeds and landing pages alongside bids and budgets.",
    outcomes: [
      "Capture searches that fit your offer",
      "Allocate spend around commercial priorities",
      "Align ad copy and landing-page experience",
    ],
    problem: "Buying intent only helps if you can convert it.",
    problemCopy:
      "Loose targeting and disconnected landing pages turn valuable searches into expensive visits. We connect campaign decisions to what customers need to see next.",
    scope: blocks([
      [
        "Search strategy",
        "Map how shoppers discover, compare and choose your products.",
      ],
      [
        "Campaign structure",
        "Separate intent and product priorities into a manageable account.",
      ],
      [
        "Keyword & query reviews",
        "Develop useful searches and exclude terms that do not fit the goal.",
      ],
      [
        "Ad copy",
        "Align promises, product details and calls to action with intent.",
      ],
      [
        "Budget & conversion review",
        "Assess investment priorities and measurement needs.",
      ],
      [
        "Landing-page alignment",
        "Identify friction between the ad, offer and destination.",
      ],
    ]),
    steps: blocks([
      [
        "Map the intent",
        "Review searches, existing campaigns and conversion measurement.",
      ],
      [
        "Build the account plan",
        "Align targeting, copy and budgets with product priorities.",
      ],
      [
        "Refine the investment",
        "Use query and conversion data to guide tests and allocation.",
      ],
    ]),
    audience: [
      "Brands with existing search demand",
      "Accounts with unclear query quality",
      "Teams connecting paid traffic to their store",
    ],
    faqs: questions([
      [
        "Can you audit an existing account?",
        "Yes. We review structure, search terms, spend priorities and conversion measurement to identify what is helping or holding you back.",
      ],
      [
        "Is landing-page development included?",
        "We review alignment in campaign planning. Design or development is agreed separately when implementation is needed.",
      ],
    ]),
    visual: "search",
    visualTitle: "Intent meets the right offer.",
    visualItems: ["Relevant search", "A clear promise", "A useful destination"],
    related: ["shopify-development", "seo", "meta-ads"],
  },
  "meta-ads": {
    title: "TEST THE CREATIVE.",
    accent: "CONTROL THE SPEND.",
    description:
      "Facebook and Instagram advertising with a clear testing plan for creative, audiences and offers. We review acquisition costs alongside product margins.",
    outcomes: [
      "Creative testing with a clear hypothesis",
      "A consistent journey from ad to offer",
      "Budgets informed by acquisition economics",
    ],
    problem: "Attention is the start. Not the result.",
    problemCopy:
      "An ad can earn a click and still fail the business. Creative, targeting and the destination need to support the same story and commercial goal.",
    scope: blocks([
      [
        "Creative strategy",
        "Define messages, customer needs and angles worth testing.",
      ],
      [
        "Campaign structure",
        "Organise acquisition and audience tests around specific goals.",
      ],
      [
        "Audience development",
        "Review opportunities alongside creative and offer fit.",
      ],
      [
        "Testing plans",
        "Give each test a hypothesis and an actionable question.",
      ],
      [
        "Budget reviews",
        "Connect performance and learning to the next investment decision.",
      ],
      [
        "Journey alignment",
        "Review consistency between the ad, offer and landing page.",
      ],
    ]),
    steps: blocks([
      [
        "Find the angle",
        "Understand the customer, product benefits and creative data.",
      ],
      [
        "Launch deliberate tests",
        "Connect campaigns and creative variations to learning goals.",
      ],
      [
        "Build on evidence",
        "Review acquisition data and direct the next creative or budget change.",
      ],
    ]),
    audience: [
      "Brands ready to test creative systematically",
      "Ecommerce teams with a strong product offer",
      "Accounts with clicks but unclear acquisition value",
    ],
    faqs: questions([
      [
        "Do you create ads too?",
        "Creative direction and testing priorities are part of planning. Asset production is scoped to your needs and existing materials.",
      ],
      [
        "Will you guarantee ROAS?",
        "No. Results depend on the product, offer, market and measurement. We agree the goals and evaluation approach before work begins.",
      ],
    ]),
    visual: "advertising",
    visualTitle: "Creative. Audience. Offer.",
    visualItems: [
      "Test a relevant angle",
      "Reach the right people",
      "Learn from acquisition",
    ],
    related: ["creative-direction", "shopify-development", "email-marketing"],
  },
  seo: {
    title: "HELP CUSTOMERS",
    accent: "FIND YOUR PRODUCTS.",
    description:
      "Technical SEO, keyword research and product-page content for ecommerce stores. Fix crawling and indexing issues, improve relevance and prioritise useful content.",
    outcomes: [
      "Prioritised search opportunities",
      "Clearer category and product content",
      "Technical issues linked to business impact",
    ],
    problem: "More content isn’t always more discoverability.",
    problemCopy:
      "Search work can drift into disconnected tasks. We connect technical readiness, site structure and customer intent so effort goes toward useful opportunities.",
    scope: blocks([
      [
        "Search & site audit",
        "Review available performance data, site structure and content gaps.",
      ],
      [
        "Intent mapping",
        "Connect searches with relevant category, product and informational pages.",
      ],
      [
        "On-page optimisation",
        "Improve titles, headings, product information and internal connections.",
      ],
      [
        "Technical priorities",
        "Identify crawl, indexation and experience issues for implementation.",
      ],
      [
        "Content planning",
        "Prioritise useful customer questions and commercial journeys.",
      ],
      [
        "Progress reviews",
        "Review visibility and traffic context alongside completed work.",
      ],
    ]),
    steps: blocks([
      [
        "Find the constraints",
        "Review the site and search data to establish a practical starting point.",
      ],
      [
        "Prioritise the work",
        "Map fixes and content opportunities to important pages and products.",
      ],
      [
        "Improve and review",
        "Coordinate implementation and use new data to refine the plan.",
      ],
    ]),
    audience: [
      "Stores with weak organic discovery",
      "Brands with content but no search structure",
      "Teams planning a store refresh",
    ],
    faqs: questions([
      [
        "How quickly does SEO work?",
        "Timing varies with the site, competition and work involved. We agree delivery milestones and review progress rather than promise a ranking by a fixed date.",
      ],
      [
        "Is this Amazon SEO?",
        "This service focuses on your owned website. Amazon search relevance is covered by our Listings, SEO & Catalogue service.",
      ],
    ]),
    visual: "search",
    visualTitle: "Make discovery deliberate.",
    visualItems: ["Technical foundations", "Search intent", "Useful content"],
    related: [
      "shopify-development",
      "google-ads",
      "amazon-listing-optimization",
    ],
  },
  "social-media-management": {
    title: "PLAN THE CONTENT.",
    accent: "STAY CONSISTENT.",
    description:
      "Content planning, publishing and community management for your brand. Build a practical calendar around products, customer questions and campaigns.",
    outcomes: [
      "A coherent editorial direction",
      "An organised publishing rhythm",
      "Social activity linked to brand priorities",
    ],
    problem: "A full calendar can still say very little.",
    problemCopy:
      "Posting without a point creates noise. We give your channels a clearer role and your content a reason to exist beyond filling the next slot.",
    scope: blocks([
      [
        "Channel review",
        "Assess the presence, audience context and role of each channel.",
      ],
      [
        "Content pillars",
        "Define themes that connect products with customer interests.",
      ],
      [
        "Editorial calendar",
        "Plan around launches and useful recurring stories.",
      ],
      [
        "Copy & creative briefs",
        "Give posts a clear message, format and next step.",
      ],
      [
        "Publishing coordination",
        "Agree approvals, responsibilities and the working cadence.",
      ],
      [
        "Performance review",
        "Review audience response and ideas worth developing.",
      ],
    ]),
    steps: blocks([
      [
        "Define the role",
        "Agree what social should do and which channels deserve attention.",
      ],
      [
        "Build the calendar",
        "Connect themes, assets and approvals into an executable plan.",
      ],
      [
        "Learn from response",
        "Use engagement and business context to shape the next content round.",
      ],
    ]),
    audience: [
      "Brands with inconsistent social activity",
      "Teams needing publishing structure",
      "Product businesses with stories worth telling",
    ],
    faqs: questions([
      [
        "Is paid social included?",
        "Paid campaigns are covered by Meta Ads. We can connect both scopes with responsibilities and budgets agreed in advance.",
      ],
      [
        "Who approves the content?",
        "We agree the approval workflow with you. Brand priorities and product accuracy inform what is published and how reviews are handled.",
      ],
    ]),
    visual: "creative",
    visualTitle: "A presence with a point.",
    visualItems: ["Brand story", "Editorial rhythm", "Audience response"],
    related: ["creative-direction", "meta-ads", "email-marketing"],
  },
  "creative-direction": {
    title: "MAKE THE BRAND CLEAR.",
    accent: "ACROSS EVERY CHANNEL.",
    description:
      "Creative briefs, product messaging and visual direction for ads, stores and marketplaces. Keep the brand consistent while adapting assets to each placement.",
    outcomes: [
      "A sharper product and brand story",
      "Consistent direction across channels",
      "Briefs grounded in customer needs",
    ],
    problem: "Disconnected creative makes a strong brand feel smaller.",
    problemCopy:
      "When channels tell different stories, customers work harder to understand you. We align the message, design direction and priorities behind your assets.",
    scope: blocks([
      [
        "Brand & asset review",
        "Understand the identity, product benefits and gaps in the asset library.",
      ],
      [
        "Message hierarchy",
        "Agree which benefits and differences need to be understood first.",
      ],
      [
        "Visual direction",
        "Define composition, typography, colour and product presentation.",
      ],
      [
        "Channel-specific briefs",
        "Translate direction into useful store, campaign and marketplace briefs.",
      ],
      [
        "Production coordination",
        "Clarify assets, responsibilities and review stages.",
      ],
      [
        "Creative feedback",
        "Review work against the brief and the customer decision it supports.",
      ],
    ]),
    steps: blocks([
      [
        "Find the through-line",
        "Identify the brand truths connecting your channels.",
      ],
      [
        "Set the direction",
        "Build an approach and actionable briefs for agreed assets.",
      ],
      [
        "Refine the execution",
        "Review consistency, clarity and usefulness as work takes shape.",
      ],
    ]),
    audience: [
      "Brands refreshing their ecommerce presentation",
      "Teams managing multiple creative suppliers",
      "Businesses with inconsistent assets",
    ],
    faqs: questions([
      [
        "Does this include a full rebrand?",
        "Not automatically. We agree whether the work sits within the current identity or requires a broader identity project.",
      ],
      [
        "Do you handle photography and video?",
        "We identify and brief the assets your plan needs. Production arrangements, suppliers and costs are agreed separately where required.",
      ],
    ]),
    visual: "creative",
    visualTitle: "One story. Every touchpoint.",
    visualItems: ["Brand truth", "Creative direction", "Connected execution"],
    related: ["amazon-creative", "meta-ads", "shopify-development"],
  },
  "email-marketing": {
    title: "THE FIRST ORDER",
    accent: "IS JUST THE START.",
    description:
      "Welcome emails, cart recovery, post-purchase journeys and campaigns. Send relevant messages based on what customers browse, buy and need next.",
    outcomes: [
      "Messages mapped to customer journeys",
      "Campaigns and flows working together",
      "Retention reviewed in commercial context",
    ],
    problem: "An email list isn’t a retention strategy.",
    problemCopy:
      "Broadcasting every offer to everyone misses the moments that matter. We connect customer context, relevance and the rhythm behind your email programme.",
    scope: blocks([
      [
        "Programme review",
        "Understand your platform, data, campaigns and journeys.",
      ],
      [
        "Lifecycle planning",
        "Map welcome, post-purchase and re-engagement opportunities.",
      ],
      [
        "Audience segmentation",
        "Develop useful groups around available customer information.",
      ],
      [
        "Campaign calendar",
        "Connect launches, offers and editorial messages to the commercial plan.",
      ],
      [
        "Copy & creative direction",
        "Make messages clear, relevant and consistent with the brand.",
      ],
      [
        "Performance reviews",
        "Review engagement, conversion and deliverability data.",
      ],
    ]),
    steps: blocks([
      [
        "Map the journey",
        "Review the audience, platform and moments where communication helps.",
      ],
      [
        "Build the programme",
        "Prioritise flows and campaigns with agreed content processes.",
      ],
      [
        "Improve relevance",
        "Refine timing, segments and messages using customer data.",
      ],
    ]),
    audience: [
      "Stores with an underused email audience",
      "Brands relying mainly on paid acquisition",
      "Teams needing a lifecycle plan",
    ],
    faqs: questions([
      [
        "Can you use our existing platform?",
        "We review your platform and integrations during scoping to establish what is possible and what additional work is needed.",
      ],
      [
        "Do you buy email lists?",
        "No. The programme uses your own audience and the permission and customer data your business can appropriately use.",
      ],
    ]),
    visual: "retention",
    visualTitle: "Make the next moment count.",
    visualItems: [
      "Welcome & educate",
      "Support the purchase",
      "Give a reason to return",
    ],
    related: ["shopify-management", "creative-direction", "meta-ads"],
  },
  "shopify-management": {
    title: "KEEP YOUR STORE",
    accent: "MOVING FORWARD.",
    description:
      "Day-to-day Shopify management: product updates, collections, merchandising and store checks. Keep the catalogue accurate and the shopping experience consistent.",
    outcomes: [
      "A clear store operating plan",
      "Product and collection updates with purpose",
      "Merchandising connected to campaigns",
    ],
    problem: "Store maintenance shouldn’t compete with growth.",
    problemCopy:
      "Outdated pages, scattered updates and missed campaign handovers create friction. We organise the work that keeps your store commercially ready.",
    scope: blocks([
      [
        "Operations review",
        "Map the setup, recurring work and responsibilities.",
      ],
      [
        "Product information",
        "Coordinate accurate details, assets and catalogue updates.",
      ],
      [
        "Collections & merchandising",
        "Organise the range around customer browsing and comparison.",
      ],
      [
        "Campaign coordination",
        "Align storefront updates with promotions and launches.",
      ],
      [
        "Journey reviews",
        "Identify friction in navigation and product discovery.",
      ],
      [
        "Improvement planning",
        "Keep a visible plan for fixes, with development scoped as needed.",
      ],
    ]),
    steps: blocks([
      [
        "Understand the store",
        "Review the range, operations and recurring blockers.",
      ],
      [
        "Set the operating plan",
        "Agree ownership, updates and the campaign cadence.",
      ],
      [
        "Keep improving",
        "Use customer and commercial data to decide the next step.",
      ],
    ]),
    audience: [
      "Established Shopify stores",
      "Teams juggling tasks across suppliers",
      "Growing ranges needing better merchandising",
    ],
    faqs: questions([
      [
        "Is custom development included?",
        "Routine scope is agreed before work begins. Larger theme, integration or feature changes have a defined development scope.",
      ],
      [
        "Can this connect to ads and email?",
        "Yes. Store management can coordinate with acquisition and email so the storefront supports the same priorities.",
      ],
    ]),
    visual: "commerce",
    visualTitle: "Your store. Working together.",
    visualItems: [
      "Product & collection clarity",
      "Campaign-ready storefront",
      "Continuous improvement",
    ],
    related: ["shopify-development", "email-marketing", "google-ads"],
  },
  "shopify-development": {
    title: "A BETTER STORE.",
    accent: "A CLEARER PATH TO BUY.",
    description:
      "Shopify store design and development, from navigation and product pages to responsive layouts. Make products easier to find, compare and buy.",
    outcomes: [
      "Store structure built around shopping journeys",
      "Responsive product and collection experiences",
      "Clear implementation scope and handover",
    ],
    problem: "A beautiful page still has a job to do.",
    problemCopy:
      "Your store must help customers understand the offer and move forward. We connect design to product clarity, browsing behaviour and the mobile experience.",
    scope: blocks([
      [
        "Journey planning",
        "Map content, collections and key paths before building.",
      ],
      [
        "Theme implementation",
        "Build agreed layouts and components around your brand.",
      ],
      [
        "Product-page experience",
        "Organise benefits and details around purchase questions.",
      ],
      [
        "Responsive layouts",
        "Review content and interactions on desktop and mobile.",
      ],
      [
        "Integration scoping",
        "Identify apps, dependencies and costs explicitly.",
      ],
      [
        "Launch & handover",
        "Check agreed flows, document setup and clarify ownership.",
      ],
    ]),
    steps: blocks([
      [
        "Define the store",
        "Agree pages, functionality and implementation boundaries.",
      ],
      [
        "Design & build",
        "Create responsive templates and reusable components.",
      ],
      [
        "Verify & hand over",
        "Review purchase paths and content before launch and handover.",
      ],
    ]),
    audience: [
      "Brands building a first owned store",
      "Shopify businesses ready for a redesign",
      "Teams with difficult-to-maintain stores",
    ],
    faqs: questions([
      [
        "Can you improve our existing theme?",
        "Yes. We review the theme and requirements before recommending improvements or a broader rebuild.",
      ],
      [
        "Are app subscriptions included?",
        "Third-party costs are identified in scoping. We agree tools and subscription ownership before they become part of the build.",
      ],
    ]),
    visual: "commerce",
    visualTitle: "Design around the decision.",
    visualItems: [
      "Discover the range",
      "Understand the product",
      "Move toward purchase",
    ],
    related: ["shopify-management", "creative-direction", "seo"],
  },
  walmart: {
    title: "YOUR NEXT MARKETPLACE.",
    accent: "A PLAN FOR THE COSTS.",
    description:
      "Prepare and manage your Walmart marketplace account, product listings and operating workflows. Assess product fit and fulfilment needs before expanding.",
    outcomes: [
      "A practical readiness review",
      "Product and operational needs connected",
      "Expansion paced to the business",
    ],
    problem: "A new channel needs more than copied listings.",
    problemCopy:
      "Marketplaces bring different customer expectations and operating needs. Expansion works better when the offer, catalogue and fulfilment context are planned together.",
    scope: blocks([
      [
        "Readiness review",
        "Assess product fit, account context and dependencies.",
      ],
      [
        "Catalogue planning",
        "Organise the range and required product information.",
      ],
      [
        "Listing content",
        "Adapt product details and creative priorities to the channel.",
      ],
      [
        "Operating coordination",
        "Connect inventory and fulfilment responsibilities.",
      ],
      [
        "Launch priorities",
        "Choose the products and tasks deserving attention first.",
      ],
      [
        "Performance reviews",
        "Use early data and operating friction to guide the next step.",
      ],
    ]),
    steps: blocks([
      ["Assess the opportunity", "Review the range and operational readiness."],
      [
        "Prepare the channel",
        "Coordinate content and responsibilities for going live.",
      ],
      [
        "Learn before expanding",
        "Refine the range, content and plan using channel data.",
      ],
    ]),
    audience: [
      "Amazon brands considering another marketplace",
      "Businesses with a prepared supply chain",
      "Teams needing setup and operating ownership",
    ],
    faqs: questions([
      [
        "Can you guarantee approval?",
        "No. Walmart controls seller approvals. We review readiness and coordinate work within the agreed scope.",
      ],
      [
        "Should every product launch?",
        "Not necessarily. We assess the range and operations before agreeing the initial product plan.",
      ],
    ]),
    visual: "commerce",
    visualTitle: "Expand with a foundation.",
    visualItems: [
      "Channel readiness",
      "Product & operations",
      "Review & refine",
    ],
    related: ["amazon-account-management", "shopify-management", "tiktok-shop"],
  },
  "tiktok-shop": {
    title: "TURN DISCOVERY",
    accent: "INTO A SHOPPING JOURNEY.",
    description:
      "TikTok Shop setup, product listings and content planning, supported by clear stock and order workflows. Connect product discovery to a store ready to sell.",
    outcomes: [
      "Product and channel readiness reviewed together",
      "Content grounded in the offer",
      "Operations connected to customer expectations",
    ],
    problem: "Attention moves fast. Operations still have to work.",
    problemCopy:
      "Discovery creates opportunity when the listing, stock and buying experience are ready. We connect the product story with the work behind the sale.",
    scope: blocks([
      [
        "Channel readiness",
        "Review the offer, account context and target market.",
      ],
      ["Product catalogue", "Prepare information and identify missing inputs."],
      [
        "Content direction",
        "Plan how benefits and demonstrations support discovery.",
      ],
      [
        "Shop presentation",
        "Coordinate a consistent product and brand experience.",
      ],
      [
        "Operating coordination",
        "Agree inventory, order and customer-experience responsibilities.",
      ],
      [
        "Learning priorities",
        "Define what the next channel test needs to answer.",
      ],
    ]),
    steps: blocks([
      ["Assess the fit", "Review product, audience and operating context."],
      [
        "Prepare the experience",
        "Connect catalogue, content and fulfilment planning.",
      ],
      ["Test and refine", "Learn from discovery and shopping data."],
    ]),
    audience: [
      "Brands with demonstrable products",
      "Teams exploring social commerce",
      "Sellers diversifying product discovery",
    ],
    faqs: questions([
      [
        "Are creator partnerships included?",
        "Creator sourcing, agreements and production are not assumed. We define any creator work and costs explicitly in scoping.",
      ],
      [
        "Is every brand eligible?",
        "Availability and eligibility vary. We check your target market and account context before recommending a launch scope.",
      ],
    ]),
    visual: "creative",
    visualTitle: "Discovery meets commerce.",
    visualItems: [
      "Show the product",
      "Make the offer clear",
      "Deliver the experience",
    ],
    related: ["creative-direction", "social-media-management", "walmart"],
  },
  ebay: {
    title: "BUILD THE CHANNEL.",
    accent: "OWN THE DETAILS.",
    description:
      "eBay support for wholesale and white-label ranges: product selection, listings, catalogue organisation and operating responsibilities.",
    outcomes: [
      "Clear catalogue and listing priorities",
      "A plan shaped around your supply model",
      "Channel responsibilities made explicit",
    ],
    problem: "A broad catalogue still needs a focused plan.",
    problemCopy:
      "Data, availability and listing consistency matter as the range grows. We bring structure so the channel can be managed deliberately.",
    scope: blocks([
      [
        "Business-model review",
        "Understand the range, supply context and goals.",
      ],
      [
        "Catalogue organisation",
        "Map products, information and listing priorities.",
      ],
      [
        "Listing development",
        "Coordinate accurate descriptions and presentation.",
      ],
      [
        "Offer review",
        "Connect the proposition to fulfilment and commercial context.",
      ],
      [
        "Operations coordination",
        "Clarify stock, order and account responsibilities.",
      ],
      ["Channel reviews", "Review performance and operating improvements."],
    ]),
    steps: blocks([
      ["Map the range", "Review products, supply and the existing setup."],
      [
        "Build the foundations",
        "Prioritise listings, data and operating ownership.",
      ],
      ["Review the channel", "Use customer data to refine the next actions."],
    ]),
    audience: [
      "Wholesale businesses organising an online range",
      "White-label brands building marketplace presence",
      "Sellers with fragmented catalogue operations",
    ],
    faqs: questions([
      [
        "Do you source wholesale products?",
        "Sourcing is not assumed. We start with your range and supply model, then agree the marketplace work.",
      ],
      [
        "Can you manage an existing store?",
        "Yes. We review the current catalogue and operations before agreeing improvements and ongoing responsibilities.",
      ],
    ]),
    visual: "operations",
    visualTitle: "Bring order to the range.",
    visualItems: [
      "Supply & product context",
      "Listing consistency",
      "Account ownership",
    ],
    related: ["walmart", "amazon-listing-optimization", "shopify-management"],
  },
  temu: {
    title: "CHECK THE MARGINS.",
    accent: "THEN EXPAND.",
    description:
      "Assess whether Temu fits your products, margins and capacity. Prepare the catalogue and operating plan before committing more stock or budget.",
    outcomes: [
      "A clearer view of channel suitability",
      "Operating dependencies identified",
      "Expansion grounded in commercial priorities",
    ],
    problem: "Another marketplace is not automatically progress.",
    problemCopy:
      "A channel should earn its place in your plan. We examine the offer and operating context before building activity around an untested assumption.",
    scope: blocks([
      ["Opportunity review", "Assess the range, market and reason for entry."],
      [
        "Commercial context",
        "Review pricing inputs, supply constraints and economics.",
      ],
      ["Account readiness", "Identify account and operational dependencies."],
      [
        "Catalogue preparation",
        "Organise details, assets and listing priorities.",
      ],
      [
        "Operating coordination",
        "Agree inventory, fulfilment and management responsibilities.",
      ],
      [
        "Progress reviews",
        "Review evidence before widening the range or investment.",
      ],
    ]),
    steps: blocks([
      ["Evaluate the fit", "Understand the model and channel opportunity."],
      [
        "Prepare deliberately",
        "Align readiness, content and operating responsibilities.",
      ],
      [
        "Review before scaling",
        "Use commercial data to decide what happens next.",
      ],
    ]),
    audience: [
      "Brands evaluating diversification",
      "Businesses with clear supply economics",
      "Teams seeking a channel-readiness review",
    ],
    faqs: questions([
      [
        "Does the same model work for everyone?",
        "No. Account options and eligibility depend on the market and platform. We review context before defining the work.",
      ],
      [
        "What if the economics do not work?",
        "The channel should support the business. The review may identify reasons to delay expansion or narrow the scope.",
      ],
    ]),
    visual: "commerce",
    visualTitle: "Opportunity. Then commitment.",
    visualItems: ["Commercial fit", "Channel readiness", "Measured expansion"],
    related: ["walmart", "ebay", "amazon-account-management"],
  },
};
export const services: Record<string, ServiceContent> = Object.fromEntries(
  serviceLinks.map((link) => {
    const details = content[link.slug];
    if (!details) throw new Error(`Missing service content: ${link.slug}`);
    return [link.slug, { ...link, ...details }];
  }),
);
export const serviceList = serviceLinks.map((link) => services[link.slug]);
