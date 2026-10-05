# Stripe review requests

Endpoint: `https://www.go-massive.com/api/webhooks/stripe` (POST).

Production server environment variables: `RESEND_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`. Never use NEXT_PUBLIC names. Redeploy after changing variables. A restricted Stripe API key needs Checkout Sessions read/write and Payment Links read permissions.

Register a live Stripe account event destination for `checkout.session.completed` and `checkout.session.async_payment_succeeded`. Copy that destination's signing secret into STRIPE_WEBHOOK_SECRET. No customer emails are sent until all three variables are configured. Test-mode events are deliberately ignored.

The handler verifies Stripe's signature against the raw body, checks the fresh session is paid, and limits delivery to the configured Go Massive payment link. It sends one voluntary review request from arslan@go-massive.com containing Google, Trustpilot and Clutch links. This covers initial Checkout payments, not subscription renewals. No paid-status claim is inferred from visiting the thank-you URL.

Checkout Session metadata stores `gm_review_started` and `gm_review_email_id` (Resend accepted message ID, not proof of delivery). Resend's per-session idempotency key protects concurrent/repeated attempts within its 24-hour retention. The handler refuses sends after 23 hours from the recorded attempt/event timestamp, including historical events. Provider failures return 500 for Stripe retry; missing configuration returns 503.

For `review_reconciliation_required`, inspect the Checkout Session metadata and Resend logs. If Resend accepted the email, save its ID as gm_review_email_id in the session metadata before retrying. If no message exists, investigate before manually sending; never clear the marker and blindly replay old events. Monitor failed deliveries in Resend and failed webhook attempts in Stripe. Changes to email content during pending retries may produce an idempotency conflict and require reconciliation.

Use `node --test scripts/stripe-webhook.test.cjs` for mocked tests (no emails or charges). After configuration, verify an actual authorized payment in Stripe's event delivery log and confirm a single accepted/delivered message in Resend. Automated sending is not considered activated until this production verification is complete.

Optional Stripe Payment Link setting: After payment → redirect to `https://www.go-massive.com/pay/thank-you`. This does not trigger email; the signed payment webhook does.

## Trustpilot AFS
The customer email and thank-you page now offer Google and the owner-confirmed Clutch link. Trustpilot receives a separate structured-data trigger at the owner-supplied invitation inbox. It contains only recipientName, recipientEmail, and the Checkout Session ID as referenceId. The trigger has its own Resend idempotency key and gm_trustpilot_email_id metadata marker; partial failures retry only the unfinished send. Trustpilot timing and frequency are controlled in Trustpilot Business (quick setup showed a seven-day default). Provider acceptance is not proof that Trustpilot scheduled the invitation: verify in invitation status after a real eligible payment. No historical payment backfill is performed.
