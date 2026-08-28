"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// ============================================================================
// The Go Massive Operating Layer. No vendor tools anywhere (owner direction:
// a separate "Our tech stack" section may host logos later). The deck shows
// the disciplined operating loop the team runs - and the copy carries the
// real message: dedication, work ethic, senior skill, safe hands.
//   01 SIGNALS -> 02 INTELLIGENCE -> [GO MASSIVE OPERATING LAYER]
//   -> 03 DECISIONS -> 04 EXECUTION, with 05 MEASUREMENT closing the loop.
// Hover/focus/tap a layer: dot fills red, adjacent segments light, detail
// line updates. Bottom strip = operating standards, not tool names.
// All motion respects prefers-reduced-motion.
// ============================================================================

type Layer = {
  id: string;
  num: string;
  label: string;
  sub: string;
  outcome: string;
  x: number;
  y: number;
  paths: number[];
};

const LAYERS: Layer[] = [
  { id: "signals", num: "01", label: "Signals", sub: "Watched around the clock", outcome: "Your account is watched like it's our own — marketplace data, advertising, inventory, and competitor movement, monitored daily, not quarterly.", x: 130, y: 140, paths: [5, 0] },
  { id: "intelligence", num: "02", label: "Intelligence", sub: "Senior analysis, AI-accelerated", outcome: "Experienced operators do the thinking; technology just makes them faster. Research that took weeks lands in hours — then a human judges it.", x: 350, y: 140, paths: [0, 1] },
  { id: "decisions", num: "03", label: "Decisions", sub: "Weekly · human · accountable", outcome: "Every call is made by a senior operator with their name on it, in a weekly commercial review against one P&L view. Nothing hides behind a dashboard.", x: 850, y: 140, paths: [2, 3] },
  { id: "execution", num: "04", label: "Execution", sub: "Done properly, done daily", outcome: "The unglamorous work — bids, budgets, catalogue, compliance — done with the same discipline in month twenty as in week one.", x: 1070, y: 140, paths: [3, 4] },
  { id: "measurement", num: "05", label: "Measurement", sub: "Honest, explained, owned", outcome: "We report what happened and why — including what didn't work. You always know exactly where your account stands.", x: 600, y: 292, paths: [4, 5] },
];

const HUB = { left: 470, right: 730, top: 78, height: 124, cx: 600 };

const PATHS = [
  "M 148 140 L 332 140",
  `M 368 140 L ${HUB.left} 140`,
  `M ${HUB.right} 140 L 832 140`,
  "M 868 140 L 1052 140",
  "M 1070 154 C 1075 252, 880 292, 618 292",
  "M 582 292 C 320 292, 125 252, 130 154",
];

// Ethos commitments, not metrics or tool names.
const STANDARDS = [
  "Weekly commercial reviews",
  "A named owner on every account",
  "Decisions explained, never hidden",
  "The details done daily",
];

function OperatingHub({ still }: { still: boolean }) {
  return (
    <motion.g animate={still ? undefined : { scale: [1, 1.006, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      <rect x={HUB.left} y={HUB.top} width={HUB.right - HUB.left} height={HUB.height} rx="14" fill="white" stroke="rgba(2,13,31,.45)" strokeWidth="1.6" />
      <rect x={HUB.left + 6} y={HUB.top + 6} width={HUB.right - HUB.left - 12} height={HUB.height - 12} rx="10" fill="none" stroke="rgba(2,13,31,.08)" strokeWidth="1" />
      <text x={HUB.cx} y={HUB.top + 46} textAnchor="middle" style={{ font: "700 23px var(--font-geist-mono)", letterSpacing: ".06em" }} fill="#020d1f">GO MASSIVE</text>
      <text x={HUB.cx} y={HUB.top + 68} textAnchor="middle" style={{ font: "600 10.5px var(--font-geist-mono)", letterSpacing: ".3em" }} fill="rgba(2,13,31,.6)">OPERATING LAYER</text>
      <line x1={HUB.left + 34} y1={HUB.top + 84} x2={HUB.right - 34} y2={HUB.top + 84} stroke="rgba(2,13,31,.12)" />
      <text x={HUB.cx} y={HUB.top + 104} textAnchor="middle" style={{ font: "600 9.5px var(--font-geist-mono)", letterSpacing: ".14em" }} fill="#DB1822">SIGNAL → ACTION IN HOURS, NOT REVIEW CYCLES</text>
      <circle cx={HUB.right - 20} cy={HUB.top + 20} r="4" fill="#E91A24" className={still ? undefined : "gm-os-pulse"} />
    </motion.g>
  );
}

function SignalPath({ d, lit, still, delay, duration }: { d: string; lit: boolean; still: boolean; delay: number; duration: number }) {
  return (
    <>
      <path d={d} fill="none" stroke={lit ? "#E91A24" : "rgba(2,13,31,.16)"} strokeWidth={lit ? 1.8 : 1.2} style={{ transition: "stroke .3s" }} />
      {!still && <circle r="2.3" fill="#E91A24" className="gm-os-particle" style={{ offsetPath: `path('${d}')`, animationDuration: `${duration}s`, animationDelay: `${delay}s` }} />}
    </>
  );
}

function LayerStation({ layer, active, still, onActivate }: { layer: Layer; active: boolean; still: boolean; onActivate: () => void }) {
  const labelY = layer.y + 34;
  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={`${layer.num} ${layer.label}: ${layer.outcome}`}
      className="cursor-pointer outline-none"
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
      whileHover={still ? undefined : { scale: 1.05 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onActivate(); } }}
    >
      <rect x={layer.x - 78} y={layer.y - 22} width="156" height="84" fill="transparent" />
      <circle cx={layer.x} cy={layer.y} r={active ? 7 : 5.5} fill={active ? "#E91A24" : "white"} stroke={active ? "#E91A24" : "rgba(2,13,31,.45)"} strokeWidth="1.6" style={{ transition: "fill .3s, stroke .3s" }} />
      <text x={layer.x} y={labelY} textAnchor="middle" fill={active ? "#020d1f" : "rgba(2,13,31,.72)"} style={{ font: "700 14px var(--font-geist-sans)", letterSpacing: ".08em" }}>
        <tspan fill={active ? "#DB1822" : "rgba(2,13,31,.4)"} style={{ font: "700 11px var(--font-geist-mono)" }}>{layer.num}  </tspan>
        {layer.label.toUpperCase()}
      </text>
      <text x={layer.x} y={labelY + 17} textAnchor="middle" fill="rgba(2,13,31,.48)" style={{ font: "500 10.5px var(--font-geist-sans)", letterSpacing: ".02em" }}>{layer.sub}</text>
    </motion.g>
  );
}

function LayerDetail({ layer, still }: { layer: Layer; still: boolean }) {
  return (
    <div className="min-h-[58px] border-t border-[#020d1f]/10 px-5 py-3 sm:px-7" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={layer.id}
          initial={still ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={still ? undefined : { opacity: 0, y: -5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-[13.5px] leading-6 text-[#596475]"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#DB1822]">{layer.num} · {layer.label}</span>
          <span className="mx-2 font-semibold text-[#020d1f]">{layer.sub}</span>
          {layer.outcome}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function OperatingStandards({ still }: { still: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#020d1f]/10 bg-[#020d1f]/[.02] px-5 py-2.5 sm:px-7">
      <span className="font-mono text-[9.5px] font-bold uppercase tracking-[.18em] text-[#020d1f]/70">Operating standards</span>
      {STANDARDS.map((standard, index) => (
        <span key={standard} className="flex items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[.1em] text-[#596475]">
          <span className={still ? "h-1 w-1 rounded-full bg-[#E91A24]" : "gm-os-pulse h-1 w-1 rounded-full bg-[#E91A24]"} style={{ animationDelay: `${index * 0.3}s` }} aria-hidden="true" />
          {standard}
        </span>
      ))}
    </div>
  );
}

export function OperatingLayer() {
  const [activeId, setActiveId] = useState("decisions");
  const reduced = useReducedMotion();
  const still = !!reduced;
  const active = LAYERS.find((l) => l.id === activeId) ?? LAYERS[2];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#020d1f]/12 bg-[#FBFBFC] shadow-[0_18px_50px_-38px_rgba(2,13,31,.35)]">
      {/* Desktop deck */}
      <div className="hidden lg:block">
        <svg viewBox="0 0 1200 352" className="h-auto w-full" role="group" aria-label="The Go Massive operating layer: signals, intelligence, decisions, execution, and measurement run as one disciplined loop">
          {PATHS.map((d, index) => (
            <SignalPath key={index} d={d} lit={active.paths.includes(index)} still={still} delay={index * 1.1} duration={5.5 + index * 1.2} />
          ))}
          <OperatingHub still={still} />
          {LAYERS.map((layer) => (
            <LayerStation key={layer.id} layer={layer} active={layer.id === activeId} still={still} onActivate={() => setActiveId(layer.id)} />
          ))}
        </svg>
      </div>

      {/* Mobile / tablet */}
      <div className="p-5 lg:hidden">
        <div className="relative rounded-xl border border-[#020d1f]/25 bg-white p-5 text-center">
          <p className="font-mono text-[19px] font-bold tracking-[.06em]">GO MASSIVE</p>
          <p className="mt-1 font-mono text-[9.5px] font-semibold uppercase tracking-[.3em] text-[#020d1f]/60">Operating Layer</p>
          <p className="mt-2.5 border-t border-[#020d1f]/10 pt-2.5 font-mono text-[9px] font-semibold tracking-[.1em] text-[#DB1822]">SIGNAL → ACTION IN HOURS, NOT REVIEW CYCLES</p>
          <span className={`absolute right-3.5 top-3.5 h-2 w-2 rounded-full bg-[#E91A24] ${still ? "" : "gm-os-pulse"}`} aria-hidden="true" />
        </div>
        <div className="-mx-1 mt-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1" style={{ scrollbarWidth: "none" }} aria-label="The five layers of the Go Massive operating loop">
          {LAYERS.map((layer) => {
            const isActive = layer.id === activeId;
            return (
              <button
                key={layer.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(layer.id)}
                className={`flex shrink-0 snap-start items-center gap-2 rounded-lg border px-3.5 py-2 transition-colors duration-300 ${isActive ? "border-[#E91A24] bg-[#E91A24]/5" : "border-[#020d1f]/15 bg-white"}`}
              >
                <span className={`font-mono text-[10px] font-bold ${isActive ? "text-[#DB1822]" : "text-[#020d1f]/40"}`}>{layer.num}</span>
                <span className={`whitespace-nowrap text-[12.5px] font-bold uppercase tracking-[.06em] ${isActive ? "text-[#020d1f]" : "text-[#020d1f]/65"}`}>{layer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <LayerDetail layer={active} still={still} />
      <OperatingStandards still={still} />
    </div>
  );
}
