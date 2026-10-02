// Public, owner-supplied payment URL. An environment override supports future changes.
export function getPaymentLink(): string | null {
  const value = process.env.STRIPE_PAYMENT_LINK ?? "https://buy.stripe.com/9B6eVcb8k71Bb7l8kp9R60v";
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "buy.stripe.com" && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
