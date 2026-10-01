# Checkout and dashboard handover

## Activation requirements

- Set `STRIPE_PAYMENT_LINK` to the company's real `https://buy.stripe.com/...` URL in Vercel, then redeploy. Missing or invalid configuration keeps Checkout disabled.
- In Stripe Payment Links, select the link → After payment → redirect to `https://go-massive.com/pay/thank-you`. Save in Stripe. No payment link or charge has been created by this repository.
- `/pay` and `/pay/thank-you` are absent from navigation and the sitemap. Both have `noindex, nofollow, noarchive` metadata and HTTP `X-Robots-Tag`, with no site header/footer. Noindex is not access control: anyone with the URL can open it.
- The thank-you page is not proof of payment. Reconcile in Stripe or implement the signed webhook below before recording payment status.
- Google review URL/rating/count are pending a verified Business Profile. Add it to `src/lib/reviews.ts` only after verification.
- Clutch and Trustpilot use dated public-profile snapshots, not real-time feeds. Sources: https://clutch.co/profile/go-massive and https://www.trustpilot.com/review/go-massive.com. Trustpilot's displayed TrustScore is 3.7, despite the single review being five stars.
- For live ratings, supply the account-generated Clutch widget from Vendor Dashboard → Marketing Collateral → Widgets and the Trustpilot TrustBox snippet. Snapshot dates remain visible until widgets replace the cards. Do not filter out negative reviews.

## Recommended dashboard

Extend the existing Next.js app with a protected `/admin`, Supabase Postgres and Auth, hosted on Vercel. No admin route is implemented in this design change. This avoids another dashboard vendor, but hosting/database/email and development still have costs; it is not guaranteed to have no extra subscription.

1. **Auth:** invite-only admins, MFA, server-side permission checks on every page/action/API. Supabase Row Level Security with explicit staff roles. Never expose a service-role key to the browser.
2. **Payments:** verify Stripe webhook signatures; store unique event IDs for idempotency. Handle paid `checkout.session.completed`, asynchronous success/failure, and refunds. Store IDs, amount/currency and status, never card data. Reconcile missed events with Stripe.
3. **Leads:** keep HubSpot as source, ingest via authenticated API/webhooks. Store external ID, source page, date and status. Minimize duplicated personal data and restrict staff access.
4. **Review requests:** queue eligibility after an actual service milestone, invite clients consistently for honest feedback without incentives. Track eligible/sent dates, delivery status, opt-out and attempts. A scheduled worker sends once via Resend or the existing provider after sender verification and approval of the message. No emails are sent by this change.
5. **Content:** versioned service copy, cases and FAQs with drafts, preview, publish permissions and audit logs. Require verification of case metrics. Use private uploads/signed URLs for unpublished assets.
6. **Operations:** separate preview/production secrets, backups, rate limits, error monitoring, webhook retries/dead-letter handling, and retention/deletion rules.

Tables: `staff_roles`, `payments`, `stripe_events`, `leads`, `review_requests`, `content_revisions`, `audit_events`. Unique external IDs prevent duplicate payments/leads/emails.

Payload is an alternative when frequent editorial publishing is the priority. Retool/Appsmith can accelerate an internal prototype but introduce a separate tool and possible seat/hosting costs. For the combined dashboard requested here, extend the existing Next.js stack first.

References:
- https://docs.stripe.com/payment-links/post-payment
- https://docs.stripe.com/webhooks
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/pricing
- https://help.clutch.co/en/knowledge/add-clutch-widget-to-site

## Expanded dashboard scope: business overview and CRM

The dashboard is a business operations workspace, not a checkout console. Recommended navigation: Overview, Traffic, Leads, Content & SEO, Site health, Payments, Reviews, Settings.

| Area | What the owner sees | Source of truth |
| --- | --- | --- |
| Overview | Visitors, confirmed enquiries, qualified leads, conversion rate, open issues; date comparison and last-sync time | Aggregated sources below |
| Traffic | Users, sessions, landing pages, acquisition channels, campaign source, device and country | GA4 Data API; distinguish users from sessions |
| Leads / CRM | New → contacted → qualified → proposal → won/lost; owner, notes, next action and response time | HubSpot contact/form records synced with stable IDs |
| Content & SEO | Blog drafts, approval/publish workflow, organic clicks/impressions/CTR/position, top queries/pages | Content store plus Search Console API |
| Site health | 404/500 responses, failed forms, JS errors, uptime incidents, broken links, Core Web Vitals | Sentry or equivalent, uptime probes, scheduled crawl, CrUX/Search Console and lab tests |
| Payments / Reviews | Paid/refunded invoices, reconciliation, review invitations and delivery status | Stripe verified events and email provider |

Use Next.js on Vercel with Supabase Auth/Postgres as the protected aggregation layer. Keep HubSpot as the CRM record system initially instead of rebuilding its contact management. GA4's Data API supports custom reporting; Search Console's API provides search-performance and inspection data. Do not assume all reports in their UIs are available through their APIs. For metrics unavailable through an API, show a clearly labelled link to the original report.

### Measurement rules

- Count a lead only after a confirmed HubSpot submission or server acknowledgement, never from a button click. Separate form starts, errors and submissions. Deduplicate by submission ID.
- Keep attribution fields (landing page, campaign, source/medium) separate from contact details. Do not send names, emails or free-text enquiries to analytics.
- Label each metric with its source, time zone, definition, date range and last successful sync. Show unavailable/stale data as such, not zero. Show trend gaps when measurement changes.
- Record qualified and won lead stages so organic content can be evaluated on business outcomes, not pageviews alone.
- Add consent-aware analytics instrumentation after confirming the property and consent setup. Existing HubSpot embeds do not establish a verified site-wide analytics setup.
- Review errors with URL, device, timestamp and severity; redact personal data and avoid session replay by default.

### Build sequence and required access

Owner confirmed on 2 October 2026 that both GA4 and Search Console are already set up. Reuse those properties; do not create duplicates. Their IDs and authorised integration access are still needed in this workspace.

1. Connect existing GA4 and Search Console properties (or establish them), HubSpot read scopes, error monitoring and uptime checks. Validate a test enquiry without sending marketing messages.
2. Build invite-only `/admin` with Overview, Traffic, Leads and Site health first. Include source health/last-sync states and staff permissions.
3. Add the blog editor: drafts, previews, source verification, review, publish, revision history and redirects for changed URLs. Repository-backed publishing is available now in `src/lib/blog.ts`; no browser editor is deployed yet.
4. Add payments and review requests to the same workspace once Stripe and review-profile configuration is supplied.

Additional tables: `lead_activities`, `metric_snapshots`, `source_syncs`, `site_incidents`, `content_posts`, `content_revisions`. Keep aggregated analytics separate from restricted contact records. Use scheduled server-side API syncs with scoped credentials, retry/backoff and audit logs; never place integration secrets in public environment variables.

Access needed: GA4 property ID/access, verified Search Console domain property, HubSpot private-app scoped access, Supabase project, approved monitoring provider, Stripe payment link/webhook credentials when that phase begins. The dashboard is a specification at this stage; no dummy visitor counts or unsecured admin screen have been published.

Current documentation: https://developers.google.com/analytics/devguides/reporting/data/v1, https://developers.google.com/webmaster-tools/about, https://supabase.com/docs/guides/auth.

## Assets and typography (implementation)

- Original supplied logo: `public/brand/go-massive-source.png`. `scripts/prepare-brand.cjs` derives the lossless WebP wordmark and square arrow icons without redrawing the brand.
- `scripts/generate-service-diagrams.cjs` creates all 18 WebP diagrams from actual service steps. Re-run after editing steps in `src/lib/services.ts`. These are process illustrations, not client screenshots or performance evidence.
- Shared responsive typography roles are in `src/app/typography.css`: label, small, body, lead, step number, stat number and card title.
- Review logos: official Clutch help-centre PNG; Trustpilot/Google from Simple Icons v11. The Google asset is not displayed before its profile is verified.
