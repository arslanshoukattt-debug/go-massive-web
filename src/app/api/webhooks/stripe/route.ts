import Stripe from "stripe";
import { Resend } from "resend";
import { processReviewPayment } from "../../../../lib/review-request";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) return Response.json({ error: "Missing signature" }, { status: 400 });
  const key = process.env.STRIPE_SECRET_KEY;
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const emailKey = process.env.RESEND_API_KEY;
  if (!key || !secret || !emailKey) return Response.json({ error: "Integration not configured" }, { status: 503 });
  const stripe = new Stripe(key, { timeout: 10000, maxNetworkRetries: 1 });
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }
  try {
    const result = await processReviewPayment(event, stripe, new Resend(emailKey));
    return Response.json({ received: true, result });
  } catch (error) {
    // Do not log customer email, payloads, credentials or provider errors.
    const code = error instanceof Error && error.message.startsWith("review_") ? error.message : "review_provider_failure";
    console.error("Stripe review request failed", { eventId: event.id, code });
    return Response.json({ error: "Processing failed" }, { status: 500 });
  }
}
