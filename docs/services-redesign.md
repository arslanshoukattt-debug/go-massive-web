# Service-page redesign — 27 September 2026

## Reference review

Reviewed the [AMZ Dudes homepage](https://amzdudes.com/), [Amazon PPC page](https://amzdudes.com/amazon-ppc-agency/), [Account Management page](https://amzdudes.com/amazon-account-management-services/) and [A+ Content page](https://amzdudes.com/amazon-a-content-services/) with Firecrawl and a visual browser inspection.

Useful patterns: a grouped service dropdown; service-specific headline and benefit list; comprehensive scope cards; buyer-fit sections; proof connected to the offer; FAQs; and a clear next step. The Go Massive adaptation uses its existing red/navy typography and palette, original copy and existing evidence. The established /growth-audit conversion funnel remains the destination for audit calls to action.

## Implemented

- Rebuilt the services directory with four linked categories and a dedicated page for each of 18 offerings.
- Added 15 statically generated service URLs while preserving the existing Amazon PPC, Google Ads and Meta Ads URLs.
- Each page has a unique proposition, benefits, six scope items, a three-step process, audience-fit guidance, specific FAQs, pricing-model explanation and related services.
- Six visual variants explain advertising, operations, creative, commerce, search and retention. Illustrative assets are labelled. Existing anonymised Amazon case studies appear only on relevant pages, with their combined scope made clear.
- Desktop dropdown has grouped links, active states, click/keyboard opening, Escape/focus return, outside-click closing and a height limit for smaller screens. Mobile uses native expandable categories and scrollable navigation.
- Updated footer entry points, sitemap, canonicals, social metadata and Service/Breadcrumb structured data.

## Content maintenance

- `src/lib/service-navigation.ts`: lightweight navigation labels and category ordering.
- `src/lib/services.ts`: propositions, scope, process, FAQs, visual choice and related services.
- `src/lib/case-studies.ts`: unchanged single source for case metrics.
- `src/components/ServicePage.tsx`: shared server-rendered page structure.
- `src/components/ServiceVisual.tsx`: service-specific visual variants.
- `src/app/services/[slug]/page.tsx`: static page generation and metadata for the added services.
- `src/app/services.css`: service and dropdown styles.

## Verification

- Production build: 36 generated static pages; TypeScript passed.
- ESLint: passed.
- `node scripts/verify-services.mjs`: all 18 service pages and the directory return 200, contain one H1, expected canonicals and sitemap entries, valid structured data and valid service links. Unknown service returns 404.
- Browser: 57 route/viewport checks (19 routes at 320, 768 and 1440px); no document overflow, missing H1 or failed loaded images. Console clean.
- Interaction: desktop menu open/close, ArrowDown focus entry, Escape focus return, outside click, mobile category expansion, mobile navigation, mobile Escape, service FAQ disclosure and audit CTA destination passed.

Preview: http://localhost:3002/services. No production deployment made.
