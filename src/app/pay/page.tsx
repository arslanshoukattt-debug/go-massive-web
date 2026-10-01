import Image from "next/image";
import type { Metadata } from "next";
import { getPaymentLink } from "../../lib/payment";

export const metadata: Metadata = {
  title: "Checkout | Go Massive",
  robots: { index: false, follow: false, noarchive: true },
  alternates: { canonical: "/pay" },
};

export default function PayPage() {
  const paymentLink = getPaymentLink();
  return <main id="main" className="private-page">
    <div className="private-card">
      <Image src="/brand/go-massive.webp" alt="Go Massive" width={260} height={37} />
      <p className="eyebrow">Client checkout</p>
      <h1>Ready when you are.</h1>
      <p>Review your agreed service and payment amount securely on Stripe.</p>
      {paymentLink ? <a className="gm-button gm-button--red" href={paymentLink} rel="nofollow">Checkout</a> : <><button className="gm-button gm-button--red" disabled>Checkout</button><p className="private-note">Checkout is not available yet. Please contact your Go Massive account manager.</p></>}
    </div>
  </main>;
}
