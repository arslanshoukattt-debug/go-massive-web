# Redesign verification — 26 September 2026

## Automated checks

- `npm run build`: passed; Next.js production compilation, TypeScript and all 21 generated pages/metadata endpoints completed.
- `npm run lint`: passed, no warnings or errors. Removed the superseded flywheel and misleading combined growth-chart components.
- `git diff --check`: passed.
- Browser DOM checks across 15 public content pages at 320, 390, 768, 1024, 1440 and 1920 pixels: 90 combinations; no document horizontal overflow, exactly one H1 on each page, no failed loaded images.

## Browser interaction checks

- Desktop and mobile homepage visual review; imagery remains available on mobile.
- Mobile menu opens and closes, Escape restores focus to the trigger.
- Growth process responds to selection and updates its expanded panel and visual state.
- FAQ disclosure opens and shows its answer.
- Case-study category filter reduces to the expected engagement; Enter on All work restores all five.
- Service navigation and growth-audit links work with client-side navigation.
- Real portfolio metrics are present in the initial server-rendered markup; no zero-value animation dependency.
- HubSpot fresh-load rendering verified. Testing exposed a remount failure in the vendor script; the embed now runs in a dedicated local document, initializes afresh on return navigation and sends validated resize/ready messages to its parent.
- Loading and failure states provide an email alternative and a retry action. No enquiry was submitted and no CAPTCHA was solved.
- Reduced-motion CSS disables movement and smooth scrolling; essential content and interactions do not depend on animation.

## Integration limits

- HubSpot controls the fields, consent copy, validation, CAPTCHA and submission behavior inside its own cross-origin iframe. Its styling is managed in HubSpot. Receipt of an actual submitted lead was not tested.
- Vercel connector denied the Go Massive team scope (403). Existing GitHub/Vercel integration may create a branch preview, but production publishing remains a separate action.
- Existing custom-domain canonical URLs and privacy-policy substance are preserved.

## Local review

Run `npm ci`, `npm run build`, then `npm run start -- -p 3002`. Visit `http://localhost:3002`.

## Brand-direction refinement — 27 September 2026

- Restored the flipping hero headline with Predictable / Repeatable / Scalable / Inevitable, a pause control, a stable screen-reader heading and reduced-motion support.
- Restored the buyer narrative: hero, credibility, six growth problems, eight-part Growth Engine, all five case outcomes, channels, aligned model, six operating pillars, FAQ, closing conversion band.
- Made soft operating fees and profit share explicit in the hero, model and commercial FAQ; no prices, percentages or new performance claims were invented.
- Replaced the four-stage process with eight interactive levers. Desktop uses a connected radial diagram; mobile uses a two-column selector. Both share the same detail panel and support keyboard navigation.
- Restored the original operator-led closing headline and copy across pages using ClosingCTA.
- Production build passed with 21 static pages. Browser checks covered widths 320, 390, 600, 768, 1024, 1440 and 1920: no document overflow, headline fits, and engine controls remain inside the viewport with touch-sized targets.
- Verified selected lever/detail updates, End-key navigation, wraparound Next control, headline pause/resume, mobile closing section, and no browser console errors.
- Preview remains local at http://localhost:3002; no production deployment made.

## Hero growth visual — 27 September 2026

Replaced the hero product photograph with a responsive SVG/HTML Amazon case-study dashboard. Metrics are passed directly from the first case in src/lib/case-studies.ts (2.4x revenue, +180% non-branded sales, -42% total advertising cost of sale). The curve is explicitly illustrative, not fabricated monthly sales data or a Seller Central screenshot. Red/navy art direction includes a tilted panel, an animated rising curve, floating evidence cards, pause/resume control and reduced-motion support. The case link opens the corresponding evidence page. No Shopify results were invented.

Verified all cards stay within the viewport with no horizontal overflow at 320, 390, 768, 1024, 1440 and 1920px; checked mobile/desktop screenshots, pause state and source-case navigation. Browser console clean; lint and production build pass. This change affects the homepage hero only.

## Dedicated service pages and dropdown — 27 September 2026

Rebuilt the services directory and all 18 service pages following the structural reference review in docs/services-redesign.md. Added 15 static service routes, a grouped desktop dropdown and expandable mobile navigation. Build now generates 36 pages. Lint passes. The reusable route smoke check is scripts/verify-services.mjs. All 19 service routes pass HTTP/SEO/schema/internal-link checks and the 57-case responsive browser sweep. Menu keyboard/dismissal behaviour, mobile navigation, FAQs and growth-audit routing verified. No production deployment made.

## Compact service refinement — 28 September 2026

- Dropdown links increased from 12px to 14px; tighter menu rows, column padding, heading and footer. Mobile links retain 44px targets.
- Service section spacing reduced from 104px to 64px on desktop and 40px on mobile. Red section markers align with the content container; alternating surfaces and image-led chapters separate the narrative.
- Added two optimized editorial images (see service-image-provenance.md), category imagery, image-led process sections and related-service thumbnails. Images are explicitly illustrative rather than client evidence.
- Tighter scope cards, clearer heading hierarchy and service-specific process punch lines. Soft fees and profit share remain explicit.
- Added staggered card entry, dropdown transition, thumbnail hover and FAQ icon feedback. Reduced-motion CSS disables the new animations.
- Validation: ESLint passed, production build generated 36 pages, and scripts/verify-services.mjs passed 18 service pages plus the directory. Browser sweep: all 19 routes at 320/768/1440px (57 checks) had one H1 and no horizontal overflow or broken completed images. Inspected desktop and mobile screenshots, menu at 1024/1440px, mobile service navigation and fee FAQ. Console showed no warnings or errors.
- Local production preview: http://localhost:3002/services. No production deployment made.

## Service-specific visuals and type proportions — 28 September 2026

Replaced generic full-width service photographs with ServiceArtwork: 18 service-specific compositions covering campaign roles, search structure, account workflows, email journeys, creative layouts and storefronts. Product photography appears within relevant store/creative compositions. These are deliverable diagrams, not screenshots or client performance claims. Added accessible image descriptions and responsive HTML text rather than embedding small text into bitmaps.

Removed visible editorial/category-illustration labels from service pages, shared case cards and homepage/case-index notes. Confidentiality and results context remain. Balanced service typography: section headings 28–40px, card titles 20px, body 14–15px and supporting text generally 11–12px. Preserved red/navy styling.

Validation: ESLint and production build passed (36 static pages). All 19 service routes passed the HTTP/SEO check and 57 browser size checks (320, 768, 1440px): no page or artwork overflow, one H1, no editorial labels. Reviewed PPC and Shopify desktop screenshots and mobile process section; no browser warnings or errors. Local preview remains on port 3002; no deployment.

## Brand and usability cleanup — 28 September 2026

Refined copy across the homepage, services, about, contact, audit and shared navigation/footer. Preserved the flipping headline, red/navy palette and soft-fee/profit-share positioning. Simplified service diagrams to meaningful labels and deliverables; removed decorative browser chrome, placeholder lines, arbitrary icons and duplicate process artwork. Rebuilt operating principles as a consistent responsive grid. Standardized typography and removed 73 obsolete service CSS rules. Favicon and Apple icon now use the existing Go Massive brand artwork.

Validation: all 30 public pages passed 90 browser checks at 320/768/1440px for horizontal overflow, H1 count and completed images. The site verification script checked 2,098 internal references and image metadata endpoints. Service checks passed all 18 pages plus directory. Verified desktop keyboard dropdown, Escape focus restoration, mobile scroll locking, growth-engine selection and hero pause control.

Known remaining issue: the HubSpot enquiry embed did not render in the local browser; a MutationObserver error was recorded during form initialization. The exact source is unconfirmed. Removed diagnostic code and an unsuccessful protocol workaround. The page retains retry and email fallback, and hides the blank iframe on failure. No enquiry was submitted; successful HubSpot submission remains unverified. Preview is local, not deployed to production.
