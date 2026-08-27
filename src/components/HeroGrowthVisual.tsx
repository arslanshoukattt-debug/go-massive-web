// Static hero visual: an abstract ascending-bars chart with a rising trend
// arrow. Deliberately carries no numbers or axis values - content rules allow
// approved metrics only, so the growth story stays abstract.
export function HeroGrowthVisual() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-[clamp(18px,3vw,48px)]">
      <svg
        viewBox="0 0 640 470"
        role="img"
        aria-label="Abstract chart of ascending bars with a rising trend arrow, representing compounding eCommerce growth"
        className="h-auto w-full max-w-[560px]"
      >
        {/* baseline */}
        <line x1="28" y1="416" x2="612" y2="416" stroke="rgba(2,13,31,.18)" strokeWidth="1.5" />

        {/* seven ascending bars - the last one carries the brand red */}
        <g>
          <rect x="40" y="356" width="58" height="60" fill="#F4F3EF" stroke="rgba(2,13,31,.14)" />
          <rect x="122" y="318" width="58" height="98" fill="#F4F3EF" stroke="rgba(2,13,31,.14)" />
          <rect x="204" y="274" width="58" height="142" fill="#EAEAEA" stroke="rgba(2,13,31,.14)" />
          <rect x="286" y="226" width="58" height="190" fill="#EAEAEA" stroke="rgba(2,13,31,.16)" />
          <rect x="368" y="170" width="58" height="246" fill="#DFE3E8" stroke="rgba(2,13,31,.16)" />
          <rect x="450" y="108" width="58" height="308" fill="#D5DAE1" stroke="rgba(2,13,31,.18)" />
          <rect x="532" y="40" width="58" height="376" fill="#E91A24" />
        </g>

        {/* trend line through the bar tops, ending in an upward arrow */}
        <path
          d="M69 340 L151 302 L233 258 L315 210 L397 154 L479 92 L552 28"
          fill="none"
          stroke="#020D1F"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M552 28 L522 30 M552 28 L546 56" fill="none" stroke="#020D1F" strokeWidth="2.5" strokeLinecap="round" />

        {/* markers on the trend line */}
        <g fill="white" stroke="#020D1F" strokeWidth="2">
          <circle cx="69" cy="340" r="5" />
          <circle cx="151" cy="302" r="5" />
          <circle cx="233" cy="258" r="5" />
          <circle cx="315" cy="210" r="5" />
          <circle cx="397" cy="154" r="5" />
          <circle cx="479" cy="92" r="5" />
        </g>
        <circle cx="552" cy="28" r="6" fill="#E91A24" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}
