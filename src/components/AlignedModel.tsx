"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useState } from "react";

// Row-by-row fee-structure comparison: Traditional Agency -> Go Massive.
// Exactly one row is selected at a time (hover/focus/tap moves it); the
// explanation panel beneath clarifies WHY the Go Massive side is better
// aligned rather than repeating the row. Copy restates the approved model
// (lean retainer + shared upside) - no new claims or numbers.
const ROWS = [
  {
    traditional: { title: "Large setup fee", sub: "Paid before any work has proven anything." },
    gomassive: { title: "Lean operating retainer", sub: "Covers the dedicated team, tools, and infrastructure your account runs on — not our profit margin." },
    lead: "Prove value before upside.",
    support: "A lean base means we have to earn the real economics by growing the account — not by invoicing it.",
  },
  {
    traditional: { title: "Heavy monthly retainer", sub: "Due on the first of the month, regardless of results." },
    gomassive: { title: "Full-system execution", sub: "Strategy, operations, advertising, creative, and technology as one accountable engine." },
    lead: "One team, one commercial outcome.",
    support: "When strategy, ads, operations, and creative share one commercial view, nobody optimises their silo at your expense.",
  },
  {
    traditional: { title: "Percentage of ad spend", sub: "The incentive points at spending more, not earning more." },
    gomassive: { title: "Growth measured commercially", sub: "Revenue, efficiency, and margin. Not activity." },
    lead: "Optimize for economics, not spend.",
    support: "Nothing in the fee structure rewards a bigger budget — only better revenue, efficiency, and margin.",
  },
  {
    traditional: { title: "Agency gets paid either way", sub: "Growth is your problem. Invoices are theirs." },
    gomassive: { title: "Shared upside", sub: "Our real earnings come from a share of the growth we create. No growth, no upside — for either of us." },
    lead: "We participate in the result.",
    support: "Shared upside means a flat quarter costs us too. Alignment isn't a promise here — it's the payout math.",
  },
];

export function AlignedModel() {
  const [active, setActive] = useState(0);
  const row = ROWS[active];

  return (
    <div>
      {/* column labels (side-by-side layouts) */}
      <div className="hidden border-b border-[#020d1f]/15 pb-3 md:grid md:grid-cols-[1fr_56px_1fr] md:gap-6">
        <p className="gm-eyebrow text-[#596475]">The traditional agency</p>
        <span />
        <p className="gm-eyebrow gm-text-red-safe">The Go Massive model</p>
      </div>

      {ROWS.map((item, index) => {
        const isActive = index === active;
        return (
          <button
            key={item.traditional.title}
            type="button"
            aria-pressed={isActive}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            className={`grid w-full grid-cols-1 gap-3 border-b border-[#020d1f]/12 px-2 py-5 text-left transition-colors duration-300 md:grid-cols-[1fr_56px_1fr] md:items-center md:gap-6 md:py-6 ${isActive ? "bg-[#E91A24]/[.03]" : ""}`}
          >
            {/* traditional side: deliberately neutral */}
            <span className="flex gap-4">
              <span className="pt-0.5 font-mono text-[12px] font-bold text-[#687385]">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-[17px] font-semibold tracking-[-.02em] text-[#020d1f]/70">{item.traditional.title}</span>
                <span className="mt-1 block max-w-md text-[13.5px] leading-5 text-[#687385]">{item.traditional.sub}</span>
              </span>
            </span>
            {/* transition indicator: right on side-by-side, down when stacked */}
            <span className="flex pl-10 md:justify-center md:pl-0">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#E91A24]/10" aria-hidden="true">
                <ArrowRight size={16} className="hidden text-[#E91A24] md:block" />
                <ArrowDown size={15} className="text-[#E91A24] md:hidden" />
              </span>
            </span>
            {/* Go Massive side: premium, pale-red accents */}
            <span className="relative block pl-10 md:pl-5">
              <span className={`absolute left-6 top-1 h-[calc(100%-8px)] w-[3px] bg-[#E91A24] transition-opacity duration-300 md:left-0 ${isActive ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
              <span className="block text-[17px] font-bold tracking-[-.02em]">{item.gomassive.title}</span>
              <span className="mt-1 block max-w-md text-[13.5px] leading-5 text-[#4E5A6B]">{item.gomassive.sub}</span>
            </span>
          </button>
        );
      })}

      {/* why the selected row is better aligned */}
      <div className="min-h-[88px] pt-5" aria-live="polite">
        <p className="text-lg font-semibold tracking-[-.02em]"><span className="text-[#E91A24]" aria-hidden="true">→</span> {row.lead}</p>
        <p className="mt-1 max-w-2xl leading-7 text-[#596475]">{row.support}</p>
      </div>

      {/* risk alignment: restrained horizontal treatment, no numbers claimed */}
      <div className="mt-10 border-t border-[#020d1f]/15 pt-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#596475]">Traditional agency — who carries the risk</p>
            <div className="mt-3 flex h-2.5 overflow-hidden" aria-hidden="true">
              <span className="w-[82%] bg-[#020d1f]/25" />
              <span className="w-[18%] bg-[#020d1f]/10" />
            </div>
            <div className="mt-2 flex justify-between text-xs font-medium text-[#687385]"><span>The brand</span><span>The agency</span></div>
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#DB1822]">The Go Massive model — risk shared</p>
            <div className="mt-3 flex h-2.5 overflow-hidden" aria-hidden="true">
              <span className="w-[52%] bg-[#020d1f]/25" />
              <span className="w-[48%] bg-[#E91A24]" />
            </div>
            <div className="mt-2 flex justify-between text-xs font-medium text-[#687385]"><span>The brand</span><span className="text-[#DB1822]">Go Massive</span></div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-5 text-[#687385]">An illustration of how each fee structure distributes risk — not a contractual split.</p>
      </div>
    </div>
  );
}
