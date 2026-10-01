# Technical SEO audit — Go Massive

Audit date: 2 October 2026. Scope: public HTTP responses, source, production-rendered HTML, sitemap, navigation and responsive blog checks. This is a technical audit, not a claim that Google has indexed or ranked the pages.

## Findings and actions

| Priority | Finding / evidence | Action / status |
| --- | --- | --- |
| High | Apex HTTPS domain returns 308 to `https://www.go-massive.com/`, while canonical tags, sitemap, robots sitemap reference and schema used the apex | Aligned all generated SEO URLs to the live www origin through shared `src/lib/site.ts` |
| Medium | Every public URL had a build-time `lastModified`, even when unchanged | Removed invented freshness dates. Blog dates now come from explicit publication/content-modification fields |
| Medium | No editorial landing pages for informational searches | Added `/blog` and static article routes, header/footer discovery links, self-canonicals, article OG metadata, BlogPosting and Breadcrumb schema, sources and contextual service links |
| Medium | No verified first-party analytics property or Search Console access in this task | Dashboard plan now includes GA4, Search Console and HubSpot. Actual traffic, impressions, indexing and conversions remain unverified |
| Medium | Vercel production hostname also returns the same content with HTTP 200 | Added a 308 redirect from the exact production alias to www, preserving paths. Preview deployment hosts and localhost remain unaffected |
| Low | Initial blog search title was long | Added a separate concise SEO title while retaining the descriptive article heading |

Google recommends that sitemap lastmod values reflect meaningful, accurate content updates: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping.

## Verified locally against a production build

- 32 public sitemap pages return 200, have a single H1, unique titles and descriptions, self-canonicals on www, language/viewport tags and parseable Organization schema. Image tags include alt attributes (decorative images may deliberately use empty alt).
- 18 service pages plus the services directory pass sitemap, canonical, breadcrumb, service schema and internal-link checks.
- 34 HTML routes (including the two private payment pages) and 2,324 internal links/anchors passed route validation.
- Unknown pages and unknown articles return a real HTTP 404.
- Blog article content and source links are in the initial server HTML; it does not depend on client-side fetching for discovery.
- Payment pages are absent from sitemap/navigation and carry both robots metadata and `X-Robots-Tag: noindex, nofollow, noarchive`. They remain crawlable so search engines can read noindex; this is not access control.
- Production build, TypeScript build checks and ESLint passed.

Repeatable commands: `PREVIEW_URL=<origin> node scripts/audit-seo.mjs`, `node scripts/verify-site.mjs`, `node scripts/verify-services.mjs`, `node scripts/verify-private-pages.mjs` (set PREVIEW_URL in the shell for all scripts).

## Live checks before the SEO deployment

- HTTP apex → HTTPS apex: 308. HTTPS apex → www: 308. HTTPS www: 200.
- www robots.txt and sitemap.xml: 200. A nonexistent page: 404.
- Live `/pay` returns 200 with noindex/nofollow/noarchive HTTP header.
- Mobile PageSpeed Insights API request returned HTTP 429 (shared API quota exhausted). No Lighthouse or Core Web Vitals score is claimed. Field data and Search Console reports have not been accessed.

## Next priorities

1. The owner confirmed GA4 and Search Console are already set up. Connect access to the existing properties, submit the www sitemap, and inspect the homepage, a service page and the first article. Monitor Google-selected canonical, indexing exclusions and crawl issues after deployment; indexing is not instant or guaranteed.
2. Connect analytics and confirmed HubSpot form submissions. Track landing page → enquiry → qualified lead → won client, with consistent attribution and consent handling. Never use CTA clicks as submitted leads.
3. Run mobile Lighthouse/PageSpeed when quota/access is available, then use field LCP, INP and CLS at the 75th percentile to prioritise fixes. Review hero rendering, third-party form cost and long animation tasks based on evidence, not invented scores.
4. Validate Organization/Service/Article markup with Google's Rich Results Test and Schema.org Validator. Valid schema does not guarantee a rich result. Do not add self-serving aggregate-rating markup to the agency.
5. Add real staff biographies and permissioned case detail as available. Anonymized numbers alone limit the depth of first-hand evidence. Never invent credentials, clients or review totals.

## Blog publishing workflow

Currently repository-backed: add a typed entry in `src/lib/blog.ts`, set `published: false` while drafting, verify sources, then publish through the normal tested GitHub deployment. Only published entries get routes and sitemap entries. A protected browser editor belongs in the dashboard phase.

Every article should identify the platform, announcement date versus effective date, affected seller markets, what changed, commercial implications, a practical action checklist and official source links. Keep publication dates stable; update modified dates only after substantive edits. Never backdate posts or publish speculative platform policy as fact.

Start with one useful update a week rather than thin daily summaries. Build clusters around Amazon operations/PPC, Walmart expansion, Shopify conversion and marketplace measurement. Connect each post to the relevant service and, where evidence exists, a case study. Avoid category/filter pages until enough distinct content exists to justify them. Review expired deadlines and changed policies monthly.

The launch article covers Shopify's documented 21 September 2026 session-measurement update. It separates platform facts from Go Massive's recommendations and hypothetical examples. Source: https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements.
