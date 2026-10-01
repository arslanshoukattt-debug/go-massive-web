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

## Assets and typography

- Original supplied logo: `public/brand/go-massive-source.png`. `scripts/prepare-brand.cjs` derives the lossless WebP wordmark and square arrow icons without redrawing the brand.
- `scripts/generate-service-diagrams.cjs` creates all 18 WebP diagrams from actual service steps. Re-run after editing steps in `src/lib/services.ts`. These are process illustrations, not client screenshots or performance evidence.
- Shared responsive typography roles are in `src/app/typography.css`: label, small, body, lead, step number, stat number and card title.
- Review logos: official Clutch help-centre PNG; Trustpilot/Google from Simple Icons v11. The Google asset is not displayed before its profile is verified.
