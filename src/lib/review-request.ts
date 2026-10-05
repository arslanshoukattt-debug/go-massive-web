import type Stripe from "stripe";
import type { Resend } from "resend";
import { getPaymentLink } from "./payment";

export const reviewDestinations = [
  { name: "Google", reviewUrl: "https://g.page/r/CY6FI_FFy6a8EBM/review" },
  { name: "Trustpilot", reviewUrl: "https://www.trustpilot.com/evaluate/go-massive.com" },
  { name: "Clutch", reviewUrl: "https://review.clutch.co/review/?provider_id=2513026" },
];

export function reviewEmail(to: string) {
  const intro = "Thank you for choosing Go Massive. If you have had a chance to work with us, we would appreciate your honest feedback. Choose whichever platform you prefer; there is no need to review us on all three.";
  return {
    from: "Arslan at Go Massive <arslan@go-massive.com>",
    replyTo: "arslan@go-massive.com",
    to,
    subject: "How was your experience with Go Massive?",
    text: `${intro}\n\n${reviewDestinations.map(x => `${x.name}: ${x.reviewUrl}`).join("\n")}\n\nQuestions about your project? Reply to this email.\n\nArslan\nGo Massive`,
    html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:32px;color:#071324"><h1 style="font-size:26px">Your experience matters.</h1><p style="line-height:1.7">${intro}</p>${reviewDestinations.map(x => `<p><a style="color:#e9192c" href="${x.reviewUrl}">Share your experience on ${x.name}</a></p>`).join("")}<p style="line-height:1.7">Questions about your project? Reply to this email.</p><p>Arslan<br>Go Massive</p></div>`,
  };
}

export async function processReviewPayment(event: Stripe.Event, stripe: Stripe, resend: Resend, now = Date.now()) {
  if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded") return "ignored";
  const notification = event.data.object as Stripe.Checkout.Session;
  if (!event.livemode || notification.payment_status !== "paid") return "ignored";
  const session = await stripe.checkout.sessions.retrieve(notification.id);
  if (!session.livemode || session.payment_status !== "paid") return "ignored";
  if (session.metadata?.gm_review_email_id) return "already-sent";
  const linkId = typeof session.payment_link === "string" ? session.payment_link : session.payment_link?.id;
  if (!linkId) return "ignored";
  const link = await stripe.paymentLinks.retrieve(linkId);
  if (link.url !== getPaymentLink()) return "ignored";
  const email = session.customer_details?.email ?? session.customer_email;
  if (!email) throw new Error("review_missing_email");

  // Fail closed beyond Resend's 24-hour deduplication window. An ambiguous
  // delivery needs reconciliation in Resend, never a blind resend.
  const started = Number(session.metadata?.gm_review_started ?? event.created);
  if (!Number.isFinite(started) || now / 1000 - started >= 23 * 3600 || started > now / 1000 + 300) {
    throw new Error("review_reconciliation_required");
  }
  await stripe.checkout.sessions.update(session.id, { metadata: { gm_review_started: String(started) } });
  const { data, error } = await resend.emails.send(reviewEmail(email), { idempotencyKey: `review-request/${session.id}` });
  if (error || !data?.id) throw new Error("review_send_failed");
  await stripe.checkout.sessions.update(session.id, { metadata: { gm_review_email_id: data.id } });
  return "sent";
}
