# Approved first-batch publication schedule

Owner instruction on October 8, 2026: start today, no weekends. Time: 09:00 America/Chicago.

| Date | Article | Release instant |
| --- | --- | --- |
| Thursday October 8 | What is a good Amazon ACoS? | 2026-10-08T09:00:00-05:00 |
| Friday October 9 | Amazon product launch checklist | 2026-10-09T09:00:00-05:00 |
| Monday October 12 | Walmart listing optimization | 2026-10-12T09:00:00-05:00 |
| Tuesday October 13 | How to price eBay products | 2026-10-13T09:00:00-05:00 |
| Wednesday October 14 | Amazon negative keywords | 2026-10-14T09:00:00-05:00 |

## Operation

The deployed website evaluates publication timestamps on every request. At the release instant, the article becomes available in its route, blog index and sitemap. Before then its route returns an uncached 404. No local computer, cron job, AI call or new environment variable is needed to release this prepared batch. An already-open page requires reload; search-engine indexing is independent and not guaranteed at the release time.

These October dates are CDT (UTC−05:00). For future batches, resolve America/Chicago for each date; winter is not the same UTC offset. Do not perpetually reuse 14:00 UTC.

The editorial renderer exports reviewed local HTML into server-side article data, strips preview/editorial briefing material, rejects scripts/event handlers/javascript URLs, and scopes CSS. It is not an HTML sanitizer for arbitrary external input. Never feed remote or user-uploaded HTML to it. Client code receives only the selected released article, not the future collection. Interactive tools are original hypothetical teaching examples and make no account changes.

To stop a pending release, set that article's `published` flag to false in `src/lib/scheduled-blog-posts.json` and deploy before its timestamp. Regenerating from `export-production.cjs` restores the approved batch defaults; review flags and dates before every deployment.

## Validation

- `node docs/blog-pilot/test-schedule.cjs`: exact release boundaries, weekend gaps, unknown and future articles.
- Production build, TypeScript and targeted ESLint pass.
- `verify-production.cjs`: all five browser interactions, canonical URLs, one H1, no editorial brief, 390px mobile overflow, no browser exceptions. Tested against a separate local production server with Date.now simulated after the last release; no clock override exists in application code.
- Actual-clock server: future article absent from index and sitemap, 404 route, no future body in response, private/no-store caching.

## Still to build

1. Ongoing subscription-backed research and drafting runner with durable editorial memory, review/quality checks, deduplication and failure reporting. No continuous generation job is active.
2. Next editorial batch after October 14. The website does not invent replacement posts when this queue ends.
3. Separate guest-post research workflow and opportunity shortlist. No outreach has been sent.
4. Social and email systems, then paused CRM/dashboard work.
