// Shared by the interactive desktop Growth Engine (CommerceSystemMap) and
// the mobile operating-layer strip in the hero - one source of truth.
export const ENGINE_NODES = [
  { label: "MARKETPLACES", angle: -90, detail: "One operating team across the channels that matter." },
  { label: "ADVERTISING", angle: -30, detail: "Media decisions connected to margin and conversion." },
  { label: "CONVERSION", angle: 30, detail: "Listings and storefronts that turn demand into orders." },
  { label: "RETENTION", angle: 90, detail: "Growth measured beyond the first transaction." },
  { label: "CREATIVE", angle: 150, detail: "Creative built around conversion data — not guesswork." },
  { label: "INVENTORY", angle: 210, detail: "Demand planning tied directly to marketplace velocity." },
] as const;
