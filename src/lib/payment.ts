// Set this server-side environment variable in Vercel and redeploy.
export function getPaymentLink(): string | null {
  const value = process.env.STRIPE_PAYMENT_LINK;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "buy.stripe.com" && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
