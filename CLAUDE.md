# Go Massive Website — Project Context

## What this is
Marketing site for Go Massive, an eCommerce growth agency (7+ years operating). Positioning: **"The commercial operating layer for ambitious eCommerce brands"** with an anti-traditional-agency business model: lean operating retainer + shared upside from growth ("We win when you grow. Literally.").

## Locations & deployment
- **Code**: `E:\Go Massive Web\go-massive-web` (Next.js 16.2.12, React 19, Tailwind CSS 4, TypeScript, Geist/Geist Mono via next/font).
- **GitHub**: `arslanshoukattt-debug/go-massive-web`, branch `main`.
- **Vercel**: team "Go Massive" (`team_6mMxsilF6c7yw3EDTIjRsH80`, hobby), project `go-massive-web`, **live at https://go-massive-web.vercel.app**. Git-linked: every push to main auto-deploys (~40-60s). Custom domain go-massive.com NOT yet attached, but all metadata/canonicals/sitemap already point to go-massive.com (intentional).
- **Workflow**: user runs `npm run dev` (port 3000) in VS Code. Delivery = verify locally (build + `next start -p 3002` + Playwright checks) → commit → push → poll live URL until 200/content marker appears. Pushing to keep Vercel updated is the established mode.
- **Claude↔Vercel connector quirk**: can CREATE projects but all reads 404 (project access not granted in connector settings). Verify deploys by curling the public URL, not via MCP.

## Design system (all in `src/app/globals.css`)
- **Reds (only these 4 permitted)**: brand `#E91A24` (`--gm-red`), hover `#C9141D`, light-surface small-text `#DB1822` (`--gm-red-safe-light`, WCAG AA on #F7F8FA/#F4F3EF/white), dark-surface small-text `#FF8A90` (`--gm-red-safe-dark`). Classes: `.gm-text-red-safe`, `.gm-text-red-safe--on-dark`.
- **Surfaces**: midnight navy `#020D1F`, panel navy `#081B38`/`#0A1830`, near-black footer `#07090A`, warm off-white `#F4F3EF`, light neutral `#F7F8FA`, white.
- **Numeric tiers**: `.gm-num-editorial` (+`--on-dark`), `.gm-num-meta` (+`--on-dark`); proof metrics stay large inline.
- **Shared classes**: `.gm-eyebrow`, `.gm-button` (`--red/--dark/--ghost`; arrow shifts on hover), `.gm-text-link`, `.gm-section-support` (+`--dark`), `.gm-reveal` (IntersectionObserver entrance: opacity+translateY+blur), `.gm-skip-link`.
- Display headlines: uppercase, bold, tight tracking, clamp() sizing (floors must stay low enough for 320px — this was once a real clipping bug).
- White-on-red text must be solid white (opacity variants fail WCAG on #E91A24).

## Homepage (src/app/page.tsx) — current section order
1. **Hero** (one-viewport fit on desktop: `lg:h-[calc(100svh-76px)]` capped 600–940px): TypeLine typewriter "> 7+ YEARS OPERATING ECOMMERCE GROWTH_" → H1 "MAKE GROWTH FEEL / INEVITABLE." (clamp 3–6.5rem) → 2-sentence support → CTAs ("Book a growth call" red, "See how we work" ghost) → right: interactive CommerceSystemMap → mobile-only operating-layer scroll strip → stats strip (7+ / 50+ / $200M+ / 92%, `StatCounter immediate`).
2. Problem: "Growth rarely breaks in one place." — 6 `.gm-problem` cards.
3. Portfolio: "Seen it before. Fixed it before." — BrandWall rotating tiles.
4. Growth Engine (navy, `#growth-engine`): sticky intro + 8-step scroll-lit pipeline (GrowthEngine).
5. Channels (navy `#0A1830`): Amazon (Flagship chip), Walmart, TikTok Shop, eBay, Shopify/DTC, Temu & emerging.
6. Aligned model: traditional-agency vs Go Massive fee-structure comparison columns.
7. Tech stack bento: "Humans make the decisions. Technology makes us faster."
8. Proof (navy): featured case + 3 side rows + red all-cases row (data from `lib/case-studies`).
9. Testimonials — hidden until `lib/testimonials.ts` has entries.
10. Conversion (red band): email + audit CTAs; `WHATSAPP_URL`/`MEETING_URL` consts at top of page.tsx render buttons when filled.

## Components & quirks
- `CommerceSystemMap` (client): interactive hub-spoke SVG; nodes from `lib/engine-nodes.ts` (MARKETPLACES/ADVERTISING/CONVERSION/RETENTION/CREATIVE/INVENTORY); hover/tap/keyboard sets active (red ring+spoke+center, detail panel below, no layout shift); auto-cycles every 3.2s after 1.8s, user interaction locks 8s; pauses off-viewport; reduced-motion = static.
- `TypeLine` (client): typewriter; SSR renders full text (SEO/reduced-motion safe).
- `StatCounter`: rAF count-up, writes textContent directly (never setState per frame — caused an infinite-restart bug once); `immediate` prop skips IO (hero strip sits on the fold); `tabular-nums` + reserved `ch` width prevents CLS.
- `BrandWall` (client): 16-item pool → 12 tiles (6 on mobile), one tile 3D-flips every 4.2s, duplicate-guarded, deterministic (no Math.random), off under reduced-motion. Logo-ready: add `logo:` to an item.
- `GrowthEngine` (client): IO lights steps once, states persist.
- `SiteHeader`: hides on scroll-down past 160px, returns on scroll-up/focus-within/menu-open; mobile CTA always visible ("Audit ↗" under 640px); Escape closes menu + refocuses trigger.
- `HubSpotGrowthAuditForm`: lazy-mounts script via IO at 600px (was 1,240ms TBT); form iframe internals are cross-origin — unstylable, don't try.
- `Reveal`: entrance wrapper; content visible by default if JS fails.

## Routes
`/` `/services` (anchors: #amazon-growth #performance-marketing #commerce-expansion) `/services/amazon-ppc` `/services/google-ads` `/services/meta-ads` `/case-studies` + 5 `[slug]` details `/about` `/growth-audit` (HubSpot portal 247020931, form 00676a9a-1f88-4c56-8e4b-ef58ee7c2517) `/contact` `/privacy` (needs legal review) + branded `not-found.tsx`, `sitemap.ts`, `robots.ts`, generated `opengraph-image.tsx` (referenced by every page via `lib/seo.ts` `pageMetadata()` — also canonical + OG/Twitter). Schema: Organization (layout), Service+Breadcrumb (service pages), Breadcrumb (case details).

## Content rules (non-negotiable)
- Approved numbers ONLY: 7+ years, 50+ brands, 200+ accounts, $200M+ revenue managed, 92% retention; case metrics (2.4x/6mo outdoor, +300% first-season launch, +250% @15% TACoS food, +700% consumer goods EU, 4x furniture). Model description (lean retainer + revenue share) came from the owner.
- Client anonymity: no names/logos/screenshots until owner clears them. No fake testimonials/logos/metrics/dashboards. Structures exist gated on real data.
- Voice: direct, operator-led, no agency clichés.

## Verification pattern (rebuild in new session's scratchpad)
Playwright installed via `npm init -y && npm i playwright@1.62.1` in scratchpad + `npx playwright install chromium`. Old scripts may still exist at `C:\PROGRA~1\KMSpico\temp\claude\E--Hermes-Agent\549b41f9-a2c8-4490-933d-ad8951fb843a\scratchpad\` (shot-matrix.js, keyboard-walk.js, find-red-contrast-issues.js, case-study-sweep.js, tech-audit.js etc.). Standard checks: overflow sweep 320–1920, console errors, reduced-motion, counters at human scroll speed. **Lighthouse**: chrome-launcher can't spawn Playwright's chrome — launch `chrome.exe --headless=new --remote-debugging-port=9333` in background, then `npx lighthouse <url> --port=9333`. Local perf numbers are noisy (74–92 same code); trust live-URL runs: baseline home 95/100/100/100, growth-audit 96/100/100/100, CLS 0, LCP = hero H1 (kept LCP-safe by transform-only entrance — never animate H1 opacity from 0).
Lint uses new react-hooks purity rules: no Date.now() in render-reachable fns, no sync setState in effects.

## Open items (need owner input)
Client logos for BrandWall · testimonials for `lib/testimonials.ts` · WhatsApp/Meeting URLs (page.tsx consts) · model-copy sign-off (commercial commitment wording) · analytics decision (site has none) · custom domain attach · privacy legal review · SEO depth pages (Amazon Account Mgmt, Listings/A+, Shopify, Walmart/eBay — need real scope input, don't invent) · art-direction assets (blueprint artifact exists: photography plan, 4 shoots, Meta Ads contact-sheet etc.).

## Design direction status
A light-first "White Edition" homepage mockup was designed as an artifact (white hero, navy×2, red×1, mono section-index rails): https://claude.ai/code/artifact/588296dc-14b4-48c2-916b-b32f27939c63 — the owner is deciding; current working mode is **iterating the existing (dark-hero) live site section by section per owner's direction**, not wholesale adopting the mock. Owner wants a white hero background eventually — confirm before applying.

## Working mode with the owner (Arslan)
Changes come one section at a time. For each: implement → verify (build + Playwright + the checks above) → commit with detailed message → push (auto-deploys) → confirm on live URL → report with screenshots. Don't redesign unrequested sections. Don't push without an established go-ahead (pushing is currently the agreed delivery mechanism for this site).
