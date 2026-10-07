# Google reporting

`/admin/analytics` checks the active Supabase member and the `dashboard_can_access('analytics', false)` RPC before creating Google clients. Anonymous sessions redirect to login; missing permissions and RPC errors fail closed. Reports are request-time server components, with no shared report cache or public API.

Production configuration: GCP_PROJECT_NUMBER, GCP_SERVICE_ACCOUNT_EMAIL, GCP_WORKLOAD_IDENTITY_POOL_ID, GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID, GA4_PROPERTY_ID, GOOGLE_SEARCH_CONSOLE_SITE_URL. GCP_PROJECT_ID is recorded in Vercel for project administration; these API calls do not require it.

Vercel uses the Team issuer https://oidc.vercel.com/go-massive and default token audience https://vercel.com/go-massive, registered as an allowed audience in Google. Google STS separately receives the full provider resource as its audience. The provider condition and service-account subject grant restrict production to owner:go-massive:project:go-massive-web:environment:production. No JSON key is used.

Google requirements: Analytics Data API, Search Console API, and IAM Service Account Credentials API enabled; the principal has Workload Identity User on the reporting service account. That account needs GA4 Viewer and Search Console read access. Never log Google client errors or token response objects because they may contain credentials.

Reports cover 28 days ending three days before the current Pacific date; GA4 uses property time zone. Search requests finalized web-search data. Missing rows produce an explicit empty-period message; failed sources display unavailable, independently of other sources.

Validation: `node --test google-reporting.test.cjs`, `npm run lint`, `npm run build`. Mock tests cover denied/anonymous access, permission database failure, date range, partial API failure, missing config and credential redaction. Live token exchange and Google account permissions must also be verified in the signed-in production page; local builds cannot prove those.
