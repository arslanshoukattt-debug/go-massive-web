"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// ============================================================================
// Technology Command Deck v3 - capability layers, not vendor logos.
// The primary objects are the five layers of the operating loop:
//   SIGNALS -> INTELLIGENCE -> [GO MASSIVE OS] -> DECISIONS -> EXECUTION
//   ... with MEASUREMENT closing the loop back into SIGNALS underneath.
// Vendor tools appear only as small monochrome marks in the CONNECTED SYSTEMS
// strip - evidence, not content. Hover/focus/tap a layer: its dot fills red,
// its adjacent path segments light up, and the one-line detail updates with a
// client-outcome. Message: one proprietary system supporting human operators.
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
  paths: number[]; // indexes into PATHS that touch this layer
};

const LAYERS: Layer[] = [
  { id: "signals", num: "01", label: "Signals", sub: "Marketplace · ads · inventory", outcome: "Nothing important happens in the account without the system seeing it — marketplace data, advertising APIs, inventory, search terms, competitor movement.", x: 130, y: 140, paths: [5, 0] },
  { id: "intelligence", num: "02", label: "Intelligence", sub: "AI models + analysts", outcome: "AI models and analysts turn raw signal into insight — research that took weeks lands in hours.", x: 350, y: 140, paths: [0, 1] },
  { id: "decisions", num: "03", label: "Decisions", sub: "Weekly · human · accountable", outcome: "Humans, on a cadence: weekly commercial reviews against one P&L view, with a named owner for every call.", x: 850, y: 140, paths: [2, 3] },
  { id: "execution", num: "04", label: "Execution", sub: "Guardrails, around the clock", outcome: "Automation with guardrails acts between reviews — bids, budgets, and hand-offs never wait for a meeting.", x: 1070, y: 140, paths: [3, 4] },
  { id: "measurement", num: "05", label: "Measurement", sub: "One commercial view", outcome: "Every decision is logged, reported, and explained — and the results feed straight back into the signals.", x: 600, y: 292, paths: [4, 5] },
];

const HUB = { left: 470, right: 730, top: 78, height: 124, cx: 600 };

// The loop, as path segments (forward along the top, feedback along the bottom)
const PATHS = [
  "M 148 140 L 332 140",                                   // signals -> intelligence
  `M 368 140 L ${HUB.left} 140`,                           // intelligence -> hub
  `M ${HUB.right} 140 L 832 140`,                          // hub -> decisions
  "M 868 140 L 1052 140",                                  // decisions -> execution
  "M 1070 154 C 1075 252, 880 292, 618 292",               // execution -> measurement
  "M 582 292 C 320 292, 125 252, 130 154",                 // measurement -> signals
];

// Vendor tools: strip-only. Owner-editable; real logo files can replace the
// drawn marks in TechLogoMark without touching the strip markup.
const TOOLS = [
  { id: "openai", name: "OpenAI" },
  { id: "claude", name: "Claude" },
  { id: "gemini", name: "Gemini" },
  { id: "n8n", name: "n8n" },
  { id: "make", name: "Make" },
  { id: "zapier", name: "Zapier" },
  { id: "amazonads", name: "Amazon Ads" },
  { id: "googleads", name: "Google Ads" },
  { id: "meta", name: "Meta" },
  { id: "higgsfield", name: "Higgsfield" },
  { id: "canva", name: "Canva" },
];

// Small monochrome vendor marks (currentColor, ~28px box, shown at ~14px)
function TechLogoMark({ id }: { id: string }) {
  switch (id) {
    case "openai":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
          {[0, 60, 120, 180, 240, 300].map((r) => <path key={r} d="M 0 -13 C 8 -13 13 -8 13 0" transform={`rotate(${r})`} />)}
        </g>
      );
    case "claude":
      return (
        <g stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((r, i) => <line key={r} x1="0" y1={-5.5} x2="0" y2={i % 2 ? -10.5 : -13.5} transform={`rotate(${r})`} />)}
        </g>
      );
    case "gemini":
      return <path d="M0,-14 C2,-4 4,-2 14,0 C4,2 2,4 0,14 C-2,4 -4,2 -14,0 C-4,-2 -2,-4 0,-14 Z" fill="currentColor" />;
    case "zapier":
      return (
        <g stroke="currentColor" strokeWidth="3.8" strokeLinecap="round">
          <line x1="-12" y1="0" x2="12" y2="0" /><line x1="0" y1="-12" x2="0" y2="12" />
          <line x1="-8.5" y1="-8.5" x2="8.5" y2="8.5" /><line x1="-8.5" y1="8.5" x2="8.5" y2="-8.5" />
        </g>
      );
    case "make":
      return <path d="M -13 11 L -13 -4 A 6.5 6.5 0 0 1 0 -4 L 0 11 M 0 -4 A 6.5 6.5 0 0 1 13 -4 L 13 11" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />;
    case "n8n":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <line x1="-7" y1="2" x2="-1.5" y2="-4" /><line x1="1.5" y1="-4" x2="7" y2="2" />
          <circle cx="-10.5" cy="5" r="4.2" /><circle cx="0" cy="-7" r="4.2" /><circle cx="10.5" cy="5" r="4.2" />
        </g>
      );
    case "amazonads":
      return (
        <g>
          <text x="0" y="3" textAnchor="middle" fill="currentColor" style={{ font: "700 21px var(--font-geist-sans)" }}>a</text>
          <path d="M -11 9 C -4 14 5 14 11 8 M 11 8 L 7 7.4 M 11 8 L 10 11.6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      );
    case "googleads":
      return (
        <g>
          <rect x="-3.4" y="-14" width="7" height="26" rx="3.5" fill="currentColor" transform="rotate(-30)" />
          <rect x="-3.4" y="-2" width="7" height="14" rx="3.5" fill="currentColor" opacity=".55" transform="rotate(30)" />
          <circle cx="-9.5" cy="9" r="4.6" fill="currentColor" opacity=".75" />
        </g>
      );
    case "meta":
      return <path d="M-6,-6 C-13.5,-6 -13.5,7 -6,7 C-1,7 1,-6 6,-6 C13.5,-6 13.5,7 6,7 C1,7 -1,-6 -6,-6 Z" fill="none" stroke="currentColor" strokeWidth="3.4" />;
    case "higgsfield":
      return (
        <g>
          <rect x="-13" y="-13" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="2.8" />
          <text x="0" y="5.5" textAnchor="middle" fill="currentColor" style={{ font: "800 15px var(--font-geist-sans)" }}>H</text>
        </g>
      );
    case "canva":
      return (
        <g>
          <circle cx="0" cy="0" r="13" fill="currentColor" />
          <text x="0" y="5.5" textAnchor="middle" fill="white" style={{ font: "700 15px var(--font-geist-sans)" }}>C</text>
        </g>
      );
    default:
      return <circle r="12" fill="currentColor" />;
  }
}

function TechOperatingSystem({ still }: { still: boolean }) {
  return (
    <motion.g animate={still ? undefined : { scale: [1, 1.006, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      <rect x={HUB.left} y={HUB.top} width={HUB.right - HUB.left} height={HUB.height} rx="14" fill="white" stroke="rgba(2,13,31,.45)" strokeWidth="1.6" />
      <rect x={HUB.left + 6} y={HUB.top + 6} width={HUB.right - HUB.left - 12} height={HUB.height - 12} rx="10" fill="none" stroke="rgba(2,13,31,.08)" strokeWidth="1" />
      <text x={HUB.cx} y={HUB.top + 46} textAnchor="middle" style={{ font: "700 23px var(--font-geist-mono)", letterSpacing: ".06em" }} fill="#020d1f">GO MASSIVE</text>
      <text x={HUB.cx} y={HUB.top + 68} textAnchor="middle" style={{ font: "600 10.5px var(--font-geist-mono)", letterSpacing: ".26em" }} fill="rgba(2,13,31,.6)">AI OPERATING SYSTEM</text>
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
  const below = layer.id !== "measurement";
  const labelY = below ? layer.y + 34 : layer.y + 34; // measurement text also sits under its dot
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

function ToolDetail({ layer, still }: { layer: Layer; still: boolean }) {
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

function ConnectedSystems({ still }: { still: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#020d1f]/10 bg-[#020d1f]/[.02] px-5 py-2.5 sm:px-7">
      <span className="font-mono text-[9.5px] font-bold uppercase tracking-[.18em] text-[#020d1f]/70">Connected systems</span>
      {TOOLS.map((tool, index) => (
        <span key={tool.id} className="flex items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[.1em] text-[#596475]" style={{ color: "#596475" }}>
          <span className={still ? "h-1 w-1 rounded-full bg-[#E91A24]" : "gm-os-pulse h-1 w-1 rounded-full bg-[#E91A24]"} style={{ animationDelay: `${index * 0.28}s` }} aria-hidden="true" />
          <svg viewBox="-16 -16 32 32" className="h-3.5 w-3.5 shrink-0" aria-hidden="true"><TechLogoMark id={tool.id} /></svg>
          {tool.name}
        </span>
      ))}
    </div>
  );
}

export function TechnologyStack() {
  const [activeId, setActiveId] = useState("decisions");
  const reduced = useReducedMotion();
  const still = !!reduced;
  const active = LAYERS.find((l) => l.id === activeId) ?? LAYERS[2];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#020d1f]/12 bg-[#FBFBFC] shadow-[0_18px_50px_-38px_rgba(2,13,31,.35)]">
      {/* Desktop command deck */}
      <div className="hidden lg:block">
        <svg viewBox="0 0 1200 352" className="h-auto w-full" role="group" aria-label="The Go Massive operating loop: signals, intelligence, decisions, execution, and measurement running through one AI operating system">
          {PATHS.map((d, index) => (
            <SignalPath key={index} d={d} lit={active.paths.includes(index)} still={still} delay={index * 1.1} duration={5.5 + index * 1.2} />
          ))}
          <TechOperatingSystem still={still} />
          {LAYERS.map((layer) => (
            <LayerStation key={layer.id} layer={layer} active={layer.id === activeId} still={still} onActivate={() => setActiveId(layer.id)} />
          ))}
        </svg>
      </div>

      {/* Mobile / tablet */}
      <div className="p-5 lg:hidden">
        <div className="relative rounded-xl border border-[#020d1f]/25 bg-white p-5 text-center">
          <p className="font-mono text-[19px] font-bold tracking-[.06em]">GO MASSIVE</p>
          <p className="mt-1 font-mono text-[9.5px] font-semibold uppercase tracking-[.26em] text-[#020d1f]/60">AI Operating System</p>
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

      <ToolDetail layer={active} still={still} />
      <ConnectedSystems still={still} />
    </div>
  );
}
