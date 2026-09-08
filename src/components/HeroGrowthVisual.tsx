// Evidence-annotated hero visual: a rising performance curve annotated with
// real, approved case outcomes (category + metric + timeframe, identities
// confidential). Every figure here MUST mirror lib/case-studies.ts - never
// invent or round a number. Replaced the abstract bars (Sep 2026): the hero
// image now shows documented results instead of decoration.
export function HeroGrowthVisual() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-[clamp(18px,3vw,48px)]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="gm-eyebrow gm-text-red-safe">Documented client outcomes</p>
        <svg
          viewBox="0 0 640 440"
          role="img"
          aria-label="Rising growth curve annotated with documented client outcomes: 2.4x marketplace revenue in six months for an outdoor and leisure brand, 250% sales growth at 15% TACoS in four months for a food and beverage brand, and 700% marketplace sales growth in five months for a consumer goods business."
          className="mt-6 h-auto w-full"
        >
          {/* quiet chart grid */}
          <g stroke="rgba(2,13,31,.07)" strokeWidth="1">
            <line x1="40" y1="110" x2="612" y2="110" />
            <line x1="40" y1="215" x2="612" y2="215" />
            <line x1="40" y1="320" x2="612" y2="320" />
          </g>
          <line x1="40" y1="425" x2="612" y2="425" stroke="rgba(2,13,31,.2)" strokeWidth="1.5" />

          {/* area under the curve - faint brand tint */}
          <path
            d="M40 414 C 130 402, 230 376, 300 344 C 370 312, 390 296, 430 252 C 480 198, 540 122, 596 60 L596 425 L40 425 Z"
            fill="#E91A24"
            fillOpacity=".045"
          />
          {/* the curve itself */}
          <path
            d="M40 414 C 130 402, 230 376, 300 344 C 370 312, 390 296, 430 252 C 480 198, 540 122, 596 60"
            fill="none"
            stroke="#020D1F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* outcome 1 - outdoor & leisure, 2.4x marketplace revenue, 6 months */}
          <line x1="212" y1="344" x2="288" y2="344" stroke="rgba(2,13,31,.25)" strokeWidth="1" />
          <circle cx="300" cy="344" r="5" fill="white" stroke="#020D1F" strokeWidth="2" />
          <text x="204" y="331" textAnchor="end" fontSize="30" fontWeight="600" letterSpacing="-1" fill="#020D1F">2.4x</text>
          <text x="204" y="353" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">REVENUE · 6 MONTHS</text>
          <text x="204" y="368" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">OUTDOOR &amp; LEISURE</text>

          {/* outcome 2 - food & beverage, +250% at 15% TACoS, 4 months */}
          <line x1="342" y1="252" x2="418" y2="252" stroke="rgba(2,13,31,.25)" strokeWidth="1" />
          <circle cx="430" cy="252" r="5" fill="white" stroke="#020D1F" strokeWidth="2" />
          <text x="334" y="245" textAnchor="end" fontSize="30" fontWeight="600" letterSpacing="-1" fill="#020D1F">+250%</text>
          <text x="334" y="267" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">SALES AT 15% TACOS</text>
          <text x="334" y="282" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">FOOD &amp; BEVERAGE · 4 MO</text>

          {/* outcome 3 - consumer goods, +700% marketplace sales, 5 months */}
          <line x1="508" y1="60" x2="584" y2="60" stroke="rgba(2,13,31,.25)" strokeWidth="1" />
          <circle cx="596" cy="60" r="6" fill="#E91A24" stroke="white" strokeWidth="2" />
          <text x="500" y="53" textAnchor="end" fontSize="30" fontWeight="600" letterSpacing="-1" fill="#E91A24">+700%</text>
          <text x="500" y="75" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">MARKETPLACE SALES</text>
          <text x="500" y="90" textAnchor="end" fontSize="10.5" fontWeight="700" letterSpacing="1.1" fill="#596475" className="font-mono">CONSUMER GOODS · 5 MO</text>
        </svg>
        <p className="mt-5 text-[13px] leading-6 text-[#596475]">Every figure above is drawn from a documented engagement. Identities stay confidential — the mechanisms are in the case studies below.</p>
      </div>
    </div>
  );
}
