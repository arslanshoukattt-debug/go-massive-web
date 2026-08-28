"use client";

import { useState } from "react";
import { StatCounter } from "./StatCounter";

// Track-record proof points on the dark separator band. Exactly one metric
// is active at a time (hover/focus/tap); the explanation beneath stays
// factual and restrained - context for the number, no inflated claims.
// Values are the approved metrics only.
const METRICS = [
  {
    value: "7+",
    label: "Years operating in eCommerce",
    explain: "Operating experience built through changing marketplaces, platform rules, and growth conditions — not one easy cycle.",
  },
  {
    value: "50+",
    label: "Brands managed",
    explain: "Experience across categories, account stages, and commercial challenges — patterns learned on one account compound across the rest.",
  },
  {
    value: "$200M+",
    label: "Revenue managed",
    explain: "The level of commercial responsibility handled across client accounts — decisions made at real scale, with real stakes.",
  },
  {
    value: "92%",
    label: "Average annual client retention",
    explain: "Most client relationships continue well beyond short-term engagements — retention is the number that keeps the others honest.",
  },
];

export function TrackRecord() {
  const [active, setActive] = useState(0);
  const metric = METRICS[active];

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.label}
              type="button"
              aria-pressed={isActive}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`relative overflow-hidden border p-6 text-left transition-colors duration-300 sm:p-7 ${isActive ? "border-white/20 bg-white/[.05]" : "border-white/10"}`}
            >
              <span className={`absolute left-0 top-0 h-[2.5px] w-full origin-left bg-[#E91A24] transition-transform duration-500 ease-out ${isActive ? "scale-x-100" : "scale-x-0"}`} aria-hidden="true" />
              <span className="block text-4xl font-bold tracking-[-.04em] sm:text-5xl"><StatCounter value={item.value} /></span>
              <span className="mt-3 block text-sm leading-5 text-white/60">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-7 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="min-h-[76px] max-w-2xl" aria-live="polite">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#FF8A90]">{metric.value} · {metric.label}</p>
          <p className="mt-2 leading-7 text-white/70">{metric.explain}</p>
        </div>
        <span className="gm-eyebrow shrink-0 border border-white/25 px-3 py-2 text-white/75">Measured, not exaggerated</span>
      </div>
    </div>
  );
}
