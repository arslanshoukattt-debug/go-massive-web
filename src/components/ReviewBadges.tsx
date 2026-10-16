import Image from "next/image";
import { reviewProfiles } from "../lib/reviews";

export function ReviewBadges({ footer = false }: { footer?: boolean }) {
  return <div className={`review-proof ${footer ? "review-proof--footer" : ""}`} aria-label="Independent client reviews">
    <div className="review-badges">
      {reviewProfiles.map(profile => <a key={profile.name} className="review-badge" href={profile.url} target="_blank" rel="noopener noreferrer nofollow" aria-label={`${profile.name}: ${profile.rating} out of 5, ${profile.count} ${profile.count === 1 ? "review" : "reviews"}. Opens in a new tab.`}>
        <span className="review-brand">{profile.logo && <Image src={profile.logo} alt={profile.name === "Clutch" ? "Clutch" : ""} width={profile.name === "Clutch" ? 92 : 24} height={profile.name === "Clutch" ? 43 : 24} loading="lazy" />}{profile.name !== "Clutch" && profile.name}</span>
        <span className="review-stars" aria-hidden="true"><span>★★★★★</span><span style={{ width: `${profile.rating / 5 * 100}%` }}>★★★★★</span></span>
        <span className="review-score"><strong>{profile.rating.toFixed(1)}/5</strong> · {profile.count} {profile.count === 1 ? "review" : "reviews"}</span>
      </a>)}
    </div>
    <p className="review-date">Ratings checked: {reviewProfiles.map(profile => `${profile.name} ${new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(profile.checkedAt))}`).join("; ")}. See the latest reviews on each platform.</p>
  </div>;
}
