"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// ============================================================================
// Technology Command Deck. One premium horizontal panel: category-organised
// tool marks feed a dominant GO MASSIVE / AI OPERATING SYSTEM module through
// thin signal paths (inbound particles), which drives a HUMAN DECISIONS ->
// ACTION layer (outbound particles). Hover/focus/tap a tool: it enlarges,
// its path lights red, others dim, and the compact detail line updates.
// Message: one coordinated operating system supporting human operators - not
// a pile of subscriptions. All motion respects prefers-reduced-motion.
// Tool list is owner-editable below.
// ============================================================================

type Tool = {
  id: string;
  name: string;
  short: string; // status-strip name
  cat: string;
  role: string;
  desc: string;
  x: number; // desktop deck position (viewBox coords)
  y: number;
  side: "left" | "right";
};

const TOOLS: Tool[] = [
  { id: "openai", name: "OpenAI", short: "OpenAI", cat: "Intelligence", role: "Research intelligence", desc: "Category, competitor, and demand research compressed from weeks to hours.", x: 125, y: 100, side: "left" },
  { id: "claude", name: "Claude", short: "Claude", cat: "Intelligence", role: "Research + analysis", desc: "Accelerates competitive research, structured analysis, and operational decision support.", x: 125, y: 185, side: "left" },
  { id: "gemini", name: "Gemini", short: "Gemini", cat: "Intelligence", role: "Data synthesis", desc: "Large listing and search-term datasets summarised into usable decisions.", x: 125, y: 270, side: "left" },
  { id: "amazonads", name: "Amazon Ads API", short: "Amazon Ads", cat: "Marketplace + media", role: "Advertising intelligence", desc: "Campaign and budget signals flow into the operating system between human reviews.", x: 330, y: 100, side: "left" },
  { id: "googleads", name: "Google Ads API", short: "Google Ads", cat: "Marketplace + media", role: "Search signals", desc: "Search-term signals reach campaigns the day they appear.", x: 330, y: 185, side: "left" },
  { id: "meta", name: "Meta", short: "Meta", cat: "Marketplace + media", role: "Demand creation", desc: "Creative and audience signals feed one commercial view of paid social.", x: 330, y: 270, side: "left" },
  { id: "n8n", name: "n8n", short: "n8n", cat: "Automation", role: "Custom automation", desc: "Connects marketplace data straight into the reporting rhythm.", x: 870, y: 100, side: "right" },
  { id: "make", name: "Make", short: "Make", cat: "Automation", role: "Workflow orchestration", desc: "Multi-step operational workflows run on schedule, not on memory.", x: 870, y: 185, side: "right" },
  { id: "zapier", name: "Zapier", short: "Zapier", cat: "Automation", role: "Tool hand-offs", desc: "Routine hand-offs between systems happen without anyone touching them.", x: 870, y: 270, side: "right" },
  { id: "higgsfield", name: "Higgsfield", short: "Higgsfield", cat: "Creative", role: "Creative generation", desc: "AI-assisted creative concepts produced for testing at channel speed.", x: 1075, y: 140, side: "right" },
  { id: "canva", name: "Canva", short: "Canva", cat: "Creative", role: "Creative production", desc: "Listing and ad visuals produced and iterated in hours, not weeks.", x: 1075, y: 230, side: "right" },
];

const CATEGORIES = [
  { label: "Intelligence", x: 125 },
  { label: "Marketplace + media", x: 330 },
  { label: "Automation", x: 870 },
  { label: "Creative", x: 1075 },
];

// Deck geometry
const HUB = { cx: 600, left: 455, right: 745, top: 112, height: 122 };

function signalPathD(tool: Tool) {
  const edgeX = tool.side === "left" ? tool.x + 58 : tool.x - 58;
  const hubX = tool.side === "left" ? HUB.left : HUB.right;
  const hubY = 140 + ((tool.y - 100) / 170) * 66; // spread arrivals down the hub edge
  const c1 = tool.side === "left" ? edgeX + 60 : edgeX - 60;
  const c2 = tool.side === "left" ? hubX - 50 : hubX + 50;
  return `M ${edgeX} ${tool.y} C ${c1} ${tool.y}, ${c2} ${hubY}, ${hubX} ${hubY}`;
}

// --- Monochrome logo marks (drawn, currentColor; ~28px box) -----------------
function TechLogoMark({ id }: { id: string }) {
  switch (id) {
    case "openai":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          {[0, 60, 120, 180, 240, 300].map((r) => (
            <path key={r} d="M 0 -13 C 8 -13 13 -8 13 0" transform={`rotate(${r})`} />
          ))}
        </g>
      );
    case "claude":
      return (
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((r, i) => (
            <line key={r} x1="0" y1={-5.5} x2="0" y2={i % 2 ? -10.5 : -13.5} transform={`rotate(${r})`} />
          ))}
        </g>
      );
    case "gemini":
      return <path d="M0,-14 C2,-4 4,-2 14,0 C4,2 2,4 0,14 C-2,4 -4,2 -14,0 C-4,-2 -2,-4 0,-14 Z" fill="currentColor" />;
    case "zapier":
      return (
        <g stroke="currentColor" strokeWidth="3.6" strokeLinecap="round">
          <line x1="-12" y1="0" x2="12" y2="0" /><line x1="0" y1="-12" x2="0" y2="12" />
          <line x1="-8.5" y1="-8.5" x2="8.5" y2="8.5" /><line x1="-8.5" y1="8.5" x2="8.5" y2="-8.5" />
        </g>
      );
    case "make":
      return <path d="M -13 11 L -13 -4 A 6.5 6.5 0 0 1 0 -4 L 0 11 M 0 -4 A 6.5 6.5 0 0 1 13 -4 L 13 11" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />;
    case "n8n":
      return (
        <g fill="none" stroke="currentColor" strokeWidth="2.8">
          <line x1="-7" y1="2" x2="-1.5" y2="-4" /><line x1="1.5" y1="-4" x2="7" y2="2" />
          <circle cx="-10.5" cy="5" r="4.2" /><circle cx="0" cy="-7" r="4.2" /><circle cx="10.5" cy="5" r="4.2" />
        </g>
      );
    case "amazonads":
      return (
        <g>
          <text x="0" y="3" textAnchor="middle" fill="currentColor" style={{ font: "700 21px var(--font-geist-sans)" }}>a</text>
          <path d="M -11 9 C -4 14 5 14 11 8 M 11 8 L 7 7.4 M 11 8 L 10 11.6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
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
      return <path d="M-6,-6 C-13.5,-6 -13.5,7 -6,7 C-1,7 1,-6 6,-6 C13.5,-6 13.5,7 6,7 C1,7 -1,-6 -6,-6 Z" fill="none" stroke="currentColor" strokeWidth="3.1" />;
    case "higgsfield":
      return (
        <g>
          <rect x="-13" y="-13" width="26" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="2.6" />
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

// --- Deck subcomponents ------------------------------------------------------
function SignalPath({ tool, active, still }: { tool: Tool; active: boolean; still: boolean }) {
  const d = signalPathD(tool);
  return (
    <>
      <path d={d} fill="none" stroke={active ? "#E91A24" : "rgba(2,13,31,.13)"} strokeWidth={active ? 1.7 : 1.1} opacity={active ? 1 : 0.75} style={{ transition: "stroke .3s, opacity .3s" }} />
      {!still && (
        <circle r="2.3" fill="#E91A24" className="gm-os-particle" style={{ offsetPath: `path('${d}')`, animationDuration: `${6 + (tool.x % 5) + (tool.y % 4) * 0.7}s`, animationDelay: `${(tool.y % 7) * 0.9}s` }} />
      )}
    </>
  );
}

function TechLogoNode({ tool, active, still, onActivate }: { tool: Tool; active: boolean; still: boolean; onActivate: () => void }) {
  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={`${tool.name} — ${tool.role}`}
      className="cursor-pointer outline-none"
      style={{ transformBox: "fill-box", transformOrigin: "center", color: active ? "#E91A24" : "#3A4656" }}
      animate={still ? undefined : { scale: active ? 1.08 : 1 }}
      whileHover={still ? undefined : { scale: 1.08 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onActivate(); } }}
    >
      <rect x={tool.x - 66} y={tool.y - 36} width="132" height="72" fill="transparent" stroke={active ? "rgba(233,26,36,.0)" : "none"} />
      <g transform={`translate(${tool.x} ${tool.y - 9})`} opacity={active ? 1 : 0.8}><TechLogoMark id={tool.id} /></g>
      <text x={tool.x} y={tool.y + 26} textAnchor="middle" style={{ font: `600 11.5px var(--font-geist-sans)`, letterSpacing: "-.01em" }} fill={active ? "#020d1f" : "rgba(2,13,31,.6)"}>{tool.name}</text>
    </motion.g>
  );
}

function TechOperatingSystem({ still }: { still: boolean }) {
  return (
    <motion.g animate={still ? undefined : { scale: [1, 1.006, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      <rect x={HUB.left} y={HUB.top} width={HUB.right - HUB.left} height={HUB.height} rx="14" fill="white" stroke="rgba(2,13,31,.45)" strokeWidth="1.6" />
      <rect x={HUB.left + 6} y={HUB.top + 6} width={HUB.right - HUB.left - 12} height={HUB.height - 12} rx="10" fill="none" stroke="rgba(2,13,31,.08)" strokeWidth="1" />
      <text x={HUB.cx} y={HUB.top + 44} textAnchor="middle" style={{ font: "700 23px var(--font-geist-mono)", letterSpacing: ".06em" }} fill="#020d1f">GO MASSIVE</text>
      <text x={HUB.cx} y={HUB.top + 66} textAnchor="middle" style={{ font: "600 10.5px var(--font-geist-mono)", letterSpacing: ".26em" }} fill="rgba(2,13,31,.6)">AI OPERATING SYSTEM</text>
      <line x1={HUB.left + 34} y1={HUB.top + 82} x2={HUB.right - 34} y2={HUB.top + 82} stroke="rgba(2,13,31,.12)" />
      <text x={HUB.cx} y={HUB.top + 102} textAnchor="middle" style={{ font: "600 9.5px var(--font-geist-mono)", letterSpacing: ".18em" }} fill="#DB1822">SIGNALS → DECISIONS → EXECUTION</text>
      <circle cx={HUB.right - 20} cy={HUB.top + 20} r="4" fill="#E91A24" className={still ? undefined : "gm-os-pulse"} />
    </motion.g>
  );
}

function ExecutionLayer({ still }: { still: boolean }) {
  const d = `M ${HUB.cx} ${HUB.top + HUB.height} L ${HUB.cx} 306`;
  return (
    <g>
      <path d={d} stroke="rgba(2,13,31,.2)" strokeWidth="1.2" fill="none" />
      {!still && <circle r="2.3" fill="#E91A24" className="gm-os-particle" style={{ offsetPath: `path('${d}')`, animationDuration: "3.2s" }} />}
      {!still && <circle r="2.3" fill="#E91A24" className="gm-os-particle" style={{ offsetPath: `path('${d}')`, animationDuration: "3.2s", animationDelay: "1.6s" }} />}
      <rect x={HUB.cx - 128} y={306} width="256" height="36" rx="8" fill="rgba(2,13,31,.03)" stroke="rgba(2,13,31,.18)" strokeWidth="1.1" />
      <text x={HUB.cx} y={328.5} textAnchor="middle" style={{ font: "700 10.5px var(--font-geist-mono)", letterSpacing: ".2em" }} fill="rgba(2,13,31,.72)">HUMAN DECISIONS → ACTION</text>
    </g>
  );
}

function ToolDetail({ tool, still }: { tool: Tool; still: boolean }) {
  return (
    <div className="min-h-[54px] border-t border-[#020d1f]/10 px-5 py-3 sm:px-7" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={tool.id}
          initial={still ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={still ? undefined : { opacity: 0, y: -5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-[13.5px] leading-6 text-[#596475]"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#DB1822]">{tool.name}</span>
          <span className="mx-2 font-semibold text-[#020d1f]">{tool.role}</span>
          {tool.desc}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function ConnectedSystems({ still }: { still: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#020d1f]/10 bg-[#020d1f]/[.02] px-5 py-2.5 sm:px-7">
      <span className="font-mono text-[9.5px] font-bold uppercase tracking-[.18em] text-[#020d1f]/70">Connected systems</span>
      {TOOLS.map((tool, index) => (
        <span key={tool.id} className="flex items-center gap-1.5 font-mono text-[9.5px] font-semibold uppercase tracking-[.1em] text-[#596475]">
          <span className={still ? "h-1 w-1 rounded-full bg-[#E91A24]" : "gm-os-pulse h-1 w-1 rounded-full bg-[#E91A24]"} style={{ animationDelay: `${index * 0.28}s` }} aria-hidden="true" />
          {tool.short}
        </span>
      ))}
    </div>
  );
}

// --- Main --------------------------------------------------------------------
export function TechnologyStack() {
  const [activeId, setActiveId] = useState("claude");
  const reduced = useReducedMotion();
  const still = !!reduced;
  const active = TOOLS.find((t) => t.id === activeId) ?? TOOLS[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#020d1f]/12 bg-[#FBFBFC] shadow-[0_18px_50px_-38px_rgba(2,13,31,.35)]">
      {/* Desktop command deck */}
      <div className="hidden lg:block">
        <svg viewBox="0 0 1200 366" className="h-auto w-full" role="group" aria-label="The Go Massive technology command deck: intelligence, marketplace, automation, and creative tools feeding one AI operating system">
          {CATEGORIES.map((cat) => (
            <text key={cat.label} x={cat.x} y={44} textAnchor="middle" style={{ font: "700 9.5px var(--font-geist-mono)", letterSpacing: ".22em" }} fill="rgba(2,13,31,.42)">{cat.label.toUpperCase()}</text>
          ))}
          {TOOLS.map((tool) => <SignalPath key={`p-${tool.id}`} tool={tool} active={tool.id === activeId} still={still} />)}
          <ExecutionLayer still={still} />
          <TechOperatingSystem still={still} />
          {TOOLS.map((tool) => <TechLogoNode key={tool.id} tool={tool} active={tool.id === activeId} still={still} onActivate={() => setActiveId(tool.id)} />)}
        </svg>
      </div>

      {/* Mobile / tablet: OS module + scrollable logos */}
      <div className="p-5 lg:hidden">
        <div className="relative rounded-xl border border-[#020d1f]/25 bg-white p-5 text-center">
          <p className="font-mono text-[19px] font-bold tracking-[.06em]">GO MASSIVE</p>
          <p className="mt-1 font-mono text-[9.5px] font-semibold uppercase tracking-[.26em] text-[#020d1f]/60">AI Operating System</p>
          <p className="mt-2.5 border-t border-[#020d1f]/10 pt-2.5 font-mono text-[9px] font-semibold tracking-[.16em] text-[#DB1822]">SIGNALS → DECISIONS → EXECUTION</p>
          <span className={`absolute right-3.5 top-3.5 h-2 w-2 rounded-full bg-[#E91A24] ${still ? "" : "gm-os-pulse"}`} aria-hidden="true" />
        </div>
        <div className="-mx-1 mt-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1" style={{ scrollbarWidth: "none" }} aria-label="Technologies in the Go Massive operating system">
          {TOOLS.map((tool) => {
            const isActive = tool.id === activeId;
            return (
              <button
                key={tool.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(tool.id)}
                className={`flex shrink-0 snap-start items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-300 ${isActive ? "border-[#E91A24] bg-[#E91A24]/5" : "border-[#020d1f]/15 bg-white"}`}
                style={{ color: isActive ? "#E91A24" : "#3A4656" }}
              >
                <svg viewBox="-16 -16 32 32" className="h-5 w-5 shrink-0" aria-hidden="true"><TechLogoMark id={tool.id} /></svg>
                <span className={`whitespace-nowrap text-[12.5px] font-semibold ${isActive ? "text-[#020d1f]" : "text-[#020d1f]/65"}`}>{tool.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ToolDetail tool={active} still={still} />
      <ConnectedSystems still={still} />
    </div>
  );
}
