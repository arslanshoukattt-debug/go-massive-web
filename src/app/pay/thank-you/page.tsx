import Image from "next/image";
import type { Metadata } from "next";
import { reviewProfiles } from "../../../lib/reviews";

export const metadata: Metadata = {
  title: "Thank you | Go Massive",
  robots: { index: false, follow: false, noarchive: true },
  alternates: { canonical: "/pay/thank-you" },
};

export default function ThankYouPage() {
  return <main id="main" className="private-page"><div className="private-card">
    <Image src="/brand/go-massive.webp" alt="Go Massive" width={260} height={37} />
    <p className="eyebrow">Thank you for choosing Go Massive</p>
    <h1>We appreciate your trust.</h1>
    <p>If you completed checkout, Stripe will send your payment receipt. Your account manager will follow up with the next steps.</p>
    <div className="review-request"><h2>Worked with us? Share your experience.</h2><p>Your honest feedback helps other businesses make an informed choice.</p>
      <div className="review-request-links">{reviewProfiles.map(profile => <a href={profile.reviewUrl} key={profile.name} target="_blank" rel="noopener noreferrer nofollow">Review us on {profile.name}<span className="sr-only"> (opens in a new tab)</span></a>)}</div>
    </div>
  </div></main>;
}
