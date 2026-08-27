// Hero trust signals: the 4.9 / 300+ reviews rating row and the review-platform
// badges. Rating figures are owner-provided (Aug 2026) - update them here and
// in CLAUDE.md together if they change.
const RATING = "4.9";
const REVIEWS = "300+";

// Owner-directed links (Aug 2026). Trustpilot is the live go-massive.com
// profile; the Google link is a Maps lookup for the Austin listing - replace
// with the exact share link from the Google Business dashboard when provided.
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/go-massive.com";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Go%20Massive%205900%20Balcones%20Drive%20Austin%20TX";

const STAR = "M8 .6l2.18 4.42 4.88.71-3.53 3.44.83 4.86L8 11.74l-4.36 2.29.83-4.86L.94 5.73l4.88-.71L8 .6z";

function Stars({ color, size = 15 }: { color: string; size?: number }) {
  const gradientId = `gm-star-${size}-${color.replace("#", "")}`;
  return (
    <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 16 16">
          {i === 4 ? (
            <>
              {/* 4.9 of 5: the last star is 90% filled */}
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="90%" stopColor={color} />
                  <stop offset="90%" stopColor="rgba(2,13,31,.18)" />
                </linearGradient>
              </defs>
              <path d={STAR} fill={`url(#${gradientId})`} />
            </>
          ) : (
            <path d={STAR} fill={color} />
          )}
        </svg>
      ))}
    </span>
  );
}

export function HeroRating() {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1">
      <Stars color="#FBBC04" size={17} />
      <span className="text-[15px] font-bold tracking-[-.01em]">{RATING}</span>
      <span className="text-sm text-[#596475]">rated by {REVIEWS} reviews</span>
    </p>
  );
}

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Trustpilot */}
      <a href={TRUSTPILOT_URL} target="_blank" rel="noreferrer" aria-label="Go Massive reviews on Trustpilot (opens in a new tab)" className="inline-flex items-center gap-2 border border-[#020d1f]/12 bg-white py-2.5 pl-3 pr-3.5 transition hover:border-[#E91A24]">
        <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><path d={STAR} fill="#00B67A" /></svg>
        <span className="text-sm font-bold tracking-[-.02em]">Trustpilot</span>
        <Stars color="#00B67A" size={12} />
        <span className="text-sm font-semibold">{RATING}</span>
      </a>
      {/* Google Reviews */}
      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" aria-label="Go Massive reviews on Google (opens in a new tab)" className="inline-flex items-center gap-2 border border-[#020d1f]/12 bg-white py-2.5 pl-3 pr-3.5 transition hover:border-[#E91A24]">
        <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden="true">
          <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.163-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" />
          <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" />
          <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" />
          <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
        </svg>
        <span className="text-sm font-bold tracking-[-.02em]">Google Reviews</span>
        <Stars color="#FBBC04" size={12} />
        <span className="text-sm font-semibold">{RATING}</span>
      </a>
    </div>
  );
}
