# Go Massive growth automation and dashboard handover

Saved 7 October 2026. Dashboard CRM integration is on hold at the owner's request. Prioritize an automated organic growth and outreach system before returning to CRM. The objective is qualified enquiries and clients, not publishing volume alone.

## Latest editorial progress

Update October 8, 2026: all five calibration articles and designs are approved. Owner authorized integration and instructed “start from today, no posting on weekends.” Website publication gates are implemented for October 8, 9, 12, 13, 14 at 09:00 America/Chicago, with tailored interactive tools. See docs/blog-pilot/publication-schedule.md for deployment operation, tests and remaining work. Ongoing AI generation and guest-post research are not active. This update supersedes the older pending-review/setup states below.

The first Amazon ACoS draft and revised visual design are owner-approved. Four additional drafts are complete and await review: Amazon launch readiness, Walmart listing optimization, eBay pricing from sold comparables, and Amazon negative keywords. All are unpublished. Review collection: docs/blog-pilot/batch-review.html, with sources/keywords in batch.json and verification in batch-research.md. Each has a tailored interactive aid using the approved logo and readable type scale. No publishing schedule or guest-post research automation is active. Next: owner review of these four, then production integration and scheduling.

## Completed dashboard work

- Owner login works for arslan@go-massive.com through Supabase.
- Membership and per-feature view/edit permissions exist at the database level. Owner has full access. Staff invitation and management UI is not built.
- Google reporting is live at /admin/analytics. The owner confirmed successful GA4 and Search Console results on 7 October: 19 active users, 20 sessions, 28 page views; 1 search click, 72 impressions, 1.4% CTR, 24.7 average position for September 7 through October 4. These are a dated verification snapshot, not current metrics.
- Keyless Google workload identity federation connects Vercel production to the reporting service account. The missing GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID was corrected and activated by redeploying. Do not repeat this setup.
- Stripe Checkout and the signed payment webhook work. Customer review email from arslan@go-massive.com was received; webhook delivery returned 200.
- Google and Clutch review links are confirmed. Trustpilot AFS trigger is implemented; downstream Trustpilot invitation delivery still needs confirmation.

## Remaining dashboard work when resumed

1. Leads and CRM: confirm HubSpot is receiving website enquiries, obtain scoped integration access, connect contacts/enquiries and pipeline with deduplication and attribution.
2. Payments reporting and reconciliation inside the dashboard; existing checkout is already working.
3. Review invitation history, delivery and failure reporting; confirm Trustpilot AFS operation.
4. Staff invitations, per-feature access editor, revocation and audit history.
5. Content and SEO editorial interface, source records, drafts, previews and revision history. Coordinate this with the blog automation rather than building two publishing systems.
6. Site health monitoring, form failures, operational alerts and recovery workflows.
7. Analytics enhancements such as date selection, trends and content-to-qualified-lead attribution after lead integration.

## Growth systems requested

### Confirmed editorial decisions

- Start with Blog Publishing and Guest-post Research as separate workflows; other growth systems remain later phases.
- Target all three: existing Amazon sellers, established brands/manufacturers launching on Amazon, and Walmart/eBay sellers. Each article addresses one audience and problem.
- Author name: Go Massive.
- Owner has ChatGPT Pro and prefers supported subscription-authenticated Codex execution over separately billed API usage where feasible. Hosting not selected or purchased. Validate headless login, unattended execution, available models and allowance on the chosen host before activation; do not configure automatic paid API fallback.
- Efficiency requirement: retain a compact editorial guide, approved corrections, dated source summaries, topic/publication ledger and reusable visual templates. Retrieve only relevant context, refresh time-sensitive facts, use scripts for deterministic validation, bound retries and measure usage per accepted article. This is workflow improvement, not automatic training of model weights or guaranteed declining token usage.
- Voice: practical, experienced advisor; confident, approachable, actionable and without hype. Service mentions are discreet and relevant, never desperate or repetitive.
- Research primary search intent, related keywords and competing agency coverage before drafting. Use terms naturally; do not invent search-volume or difficulty figures or stuff keywords.
- Five articles per week, Monday through Friday, at 09:00 America/Chicago, following daylight saving. Cover all three audiences each week; allocate remaining slots to the strongest opportunities.
- Owner reviews the first five drafts to calibrate voice, depth, visuals and subtle service mentions. After calibration, automatic publishing can proceed subject to factual and quality checks; failing posts are held.
- Schedule is agreed but not activated. Start date, execution host and publishing implementation still need to be settled. Current blog is a TypeScript array in src/lib/blog.ts, so repository updates require a deployment; this is not yet a scheduled CMS.

These confirmed decisions supersede the initial three-post proposal and undecided audience/time items below.

Each system must have its own named scheduler entry, state, run history and failure handling. No schedules have been created or activated for this request. Publishing time, audience priorities, account connections and deployment execution model remain to be chosen.

### Website blog publishing

Owner requests 3 to 5 valuable posts per week, with daily research and a US Central publishing time to be chosen. Confirm America/Chicago with daylight-saving changes versus fixed UTC-6 before activation. Start proposal: 3 posts weekly; expand toward 5 only when distinct useful topics justify it.

Research credible primary sources for Amazon, Walmart, eBay and related commerce updates. Combine buyer questions, Search Console opportunities and current changes; popularity alone does not establish buyer relevance. Existing brands and manufacturers are the intended core readers, with marketplace sellers and prospective new sellers also mentioned.

Pipeline: discover topics → rank by buyer relevance and evidence → deduplicate against existing articles → create brief → draft → verify facts and dates → produce original/licensed visuals → add internal links, metadata and relevant service CTA → validate build and page → publish at selected time → verify live page → record outcome. Maintain a publication ledger and unique content IDs to prevent duplicate publishing on retries. Skip publication if evidence or quality checks fail. Plan freshness reviews and corrections.

Provide actionable answers; sell implementation, judgment and execution capacity rather than deliberately incomplete advice. A first calibration batch can establish voice before unattended publishing; this is a proposed rollout, not a user-imposed approval requirement. Owner's requested destination is full automation after setup.

Case studies must be supported by actual client records and permission, or clearly labeled hypothetical worked examples. Never fabricate client identities, testimonials, revenue or results. Facts and charts need traceable sources. Use original diagrams/charts from reliable data or licensed assets; source credibility does not grant permission to copy its images. Link primary sources for material claims, without overwhelming the article with citations.

### Guest contributions and earned links

Separate research job: find relevant publications, validate audience fit and editorial contribution requirements, track contacts, pitch concepts and placement status. Aim for useful contributions and genuine editorial links. No purchased ranking links, mass low-quality placements or promise of guaranteed backlinks. Specific pitch copy, recipients and sending account must be settled before automated outreach begins. Publisher acceptance cannot be automated or guaranteed.

### Personal LinkedIn

Separate publishing job for the owner's personal profile. Use expertise-led insights, operator lessons and useful interpretations of industry changes; adapt selected blog topics rather than duplicating entire articles. Confirm profile, approved posting integration, cadence and voice examples. Avoid fabricated personal experiences or client claims.

### Company social accounts

Separate job from personal LinkedIn, with separate channel schedules where required. Confirm platforms and account URLs. Create native formats, original/licensed visuals, campaign tags and audience-appropriate CTAs. Track clicks and qualified enquiries alongside engagement. Do not activate scheduling for unconnected or unconfirmed accounts.

### Prospecting and email outreach

Owner proposes 3 to 4 domains and 10 to 20 inboxes, targeting US brands, Walmart sellers, eBay sellers and prospective marketplace sellers. This is a proposed capacity, not a purchase instruction. Recommend validating one narrow B2B segment and offer with a small pilot first. For broad aspiring-seller audiences, prefer educational content and opt-in lead capture over indiscriminate cold campaigns.

Sales Navigator is available for research. Use permitted workflows and approved integrations; do not depend on prohibited LinkedIn scraping. Prospect sources, usage rights, relevance and email verification need a recorded basis. Deduplicate across campaigns and domains; maintain a global suppression list.

Select providers only after assessing current acceptable-use rules, integration support, budget and campaign needs. Configure SPF, DKIM and DMARC; distinguish outreach from transactional sending; use truthful sender identity, clear opt-out, bounce/complaint monitoring, conservative sending limits and automatic pause rules. Domain/inbox multiplication is not a guarantee of delivery or a way to bypass enforcement. No guarantee of inbox placement or avoiding blocklists.

### Reply handling

Separate job/event-driven process: classify interested, question, objection, out-of-office, unsubscribe, bounce and complaint. Stop sequences on reply, opt-out or complaint. Never reply to automated replies in a loop. Use an approved service/pricing knowledge base and booking workflow. Initially draft unfamiliar replies for owner review; automate routine replies after calibration. Escalate pricing exceptions, contractual commitments, sensitive complaints and ambiguous requests. Measure positive replies, booked calls and qualified opportunities.

## Implementation dependencies

- Confirm first audience and service offer; then blog frequency, weekdays and Central time.
- Confirm ongoing execution host: desktop scheduler requires host availability; unattended publishing may require a hosted worker and durable storage. Separate scheduler entries remain required in either model.
- Inspect existing repository-backed blog schema before changing publishing architecture. Keep source and visual-license records, editorial state, unique job keys, retries and alerts in the design.
- Confirm company social channels, personal LinkedIn connection, email providers, account budget, sender identities, postal business details and unsubscribe handling before email launch.
- Start with blog automation, then social, then prospecting/replies. Resume dashboard CRM after these priorities are established.

## Reference checks

- Google Search spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Gmail sender guidelines: https://support.google.com/mail/answer/81126
- LinkedIn Sales Navigator prohibited software: https://www.linkedin.com/help/sales-navigator/answer/a1341387

These references inform the design; operational provider requirements must be rechecked when implementing and choosing accounts.
