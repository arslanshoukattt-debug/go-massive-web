"use client";

import { useState } from "react";
import { StatCounter } from "./StatCounter";

// Compact proof-of-work strip metrics. Minimal interaction: hover/focus/tap
// marks one metric at a time (dark highlight + thin red top line), leaving
// the row clears it. Approved metrics only, no extra content.
const METRICS = [
  { value: "7+", label: "Years operating in eCommerce" },
  { value: "50+", label: "Brands managed" },
  { value: "$200M+", label: "Revenue managed" },
  { value: "92%", label: "Average annual client retention" },
];

export function TrackRecord() {
  const [active, setActive] = useState(-1);

  return (
    <div className="grid flex-1 grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0" onMouseLeave={() => setActive(-1)}>
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
            className={`relative overflow-hidden px-4 py-2 text-left transition-colors duration-300 sm:px-6 sm:py-3 ${index > 0 ? "sm:border-l sm:border-white/10" : ""} ${isActive ? "bg-white/[.04]" : ""}`}
          >
            <span className={`absolute left-0 top-0 h-[2px] w-full origin-left bg-[#E91A24] transition-transform duration-500 ease-out ${isActive ? "scale-x-100" : "scale-x-0"}`} aria-hidden="true" />
            <span className="block text-3xl font-bold tracking-[-.04em] lg:text-4xl"><StatCounter value={item.value} /></span>
            <span className="mt-1.5 block max-w-[180px] text-[13px] leading-5 text-white/55">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
