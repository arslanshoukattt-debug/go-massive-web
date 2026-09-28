# Go Massive website audit — 26 September 2026

Reviewed the live homepage, services index, three service pages, case-study index, all five case studies, about, growth audit, contact and privacy; inspected the corresponding Next.js source and shared components. Desktop review at 1440px; responsive verification follows implementation.

## Findings and response

| Area | Existing issue | Design response |
| --- | --- | --- |
| Positioning | Abstract commercial-system language dominates the opening; long rotating headline competes with badges. | Short, stable headline, plain explanation of ecommerce work, a strong primary CTA and real portfolio figures. |
| Hero | A large, sparse graph connects three unrelated client outcomes; hidden entirely below 1024px. | Original editorial commerce photography with clearly separated proof. Keep meaningful visual content on mobile. |
| Page rhythm | Many consecutive white sections repeat description-left/headline-right and icon grids. | Alternate editorial work showcases, service rows, a dark interactive process section and a concise model explanation. |
| Typography | The imported Geist font is overridden by Arial on body. Oversized headings and long lines create awkward wrapping. | Actually apply Geist, unified widths, responsive type, consistent eyebrow/body hierarchy and deliberate line lengths. |
| Proof | Five lengthy text rows on home; case-study index has cards within cards. | Two visual featured engagements, concise links to remaining work, filterable case-study library. Preserve approved case metrics and anonymity. |
| Imagery | All interior pages have only two images: header and footer logos. | Original unbranded product imagery. Label case imagery as editorial, never actual client merchandise. No invented team photos, endorsements or account screenshots. |
| Interaction | Auto-cycling diagram and hover-selected comparisons add movement without helping navigation. | Explicit user-controlled process steps, service links, category filters, native FAQ disclosures and clear focus states. |
| Counters | Server HTML renders zero values; evidence depends on scrolling and JavaScript. | Render real values on the server and keep accessible text stable during optional enhancement. |
| Navigation | No active-page state; narrow footer columns; disappearing header. | Persistent compact header, current-page indicators, accessible mobile menu and balanced footer. |
| Growth audit | Long intro and stats push form below the fold; a failed embed leaves a large blank block. | Side-by-side introduction and form, explicit loading/error state, retry and visible email fallback. Preserve the actual HubSpot form. |
| Service detail | Abstract text-box visuals and repeated large containers. | Shared service template, readable process, useful deliverables and direct next-step links. |
| Case detail | Challenge/execution/outcome labels are paragraphs, not section headings. | Proper heading hierarchy, clear content measure, real outcome figures, related engagements. |
| Brand continuity | Strong red/navy identity and legitimate source content already exist. | Preserve red #E91A24, navy #020D1F, approved logos, copy substance, URLs and metadata. |

## Content and integration constraints

- Retain the five documented engagements and source metrics in `src/lib/case-studies.ts`.
- Do not associate anonymous outcomes with named clients in the logo strip.
- Omit review scores whose provider attribution is inconsistent in the repository notes; approved operating figures provide the main proof.
- Preserve HubSpot portal 247020931 and form 00676a9a-1f88-4c56-8e4b-ef58ee7c2517. Do not submit a test lead without authorization.
- Privacy copy is preserved; custom-domain canonicals retain the repository's intentional go-massive.com setting.
- Connected Vercel account returned 403 for the Go Massive team. Local build and browser verification are possible independently; GitHub branch/PR can trigger the project's existing preview integration.

## Acceptance checks

Production build, ESLint, TypeScript; route and asset checks; viewport widths 320, 390, 768, 1024, 1440 and 1920; keyboard navigation, menu dismissal, process selection, case filters, FAQ disclosures; HubSpot loading/fallback; real SSR statistics, no horizontal overflow, reduced-motion support and no new browser errors.
