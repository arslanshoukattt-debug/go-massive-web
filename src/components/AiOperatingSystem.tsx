"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// The Go Massive AI Operating System: a central hub with the AI/automation
// technologies the stack runs on orbiting it, connected by fine lines with
// slow-moving particles (data flow). Hover/focus/tap a node to update the
// outcome panel. Continuous but quiet motion: particles, a slow-drifting
// neural mesh, pulsing status dots - all disabled under reduced motion.
// NOTE: tool names + outcomes are owner-editable in NODES below; outcomes
// restate approved capability claims in plain business language.
type OsNode = { name: string; outcome: string };

const NODES: OsNode[] = [
  { name: "OpenAI", outcome: "Category and competitor research compressed from weeks into hours — before a dollar is committed." },
  { name: "Claude", outcome: "Account analysis and creative drafts prepared before the humans sit down to decide." },
  { name: "Gemini", outcome: "Large-scale listing and search-term data summarised into decisions, not spreadsheets." },
  { name: "Zapier", outcome: "Routine hand-offs between tools happen without anyone touching them." },
  { name: "Make", outcome: "Multi-step operational workflows run on schedule — not on somebody's memory." },
  { name: "n8n", outcome: "Custom automations connect marketplace data straight into our reporting rhythm." },
  { name: "Amazon Ads API", outcome: "Bid and budget guardrails act between weekly human reviews." },
  { name: "Google Ads API", outcome: "Search-term signals flow into campaigns the day they appear." },
];

const W = 660;
const H = 500;
const CX = 330;
const CY = 242;
const RX = 252;
const RY = 176;

const rad = (deg: number) => (deg * Math.PI) / 180;
const nodePos = (index: number) => {
  const angle = rad(-90 + index * 45);
  return { x: CX + RX * Math.cos(angle), y: CY + RY * Math.sin(angle) };
};
const pillWidth = (name: string) => Math.max(78, name.length * 7.6 + 30);
const lineD = (index: number) => {
  const p = nodePos(index);
  return `M ${CX} ${CY} L ${p.x} ${p.y}`;
};

// Slow-drifting neural mesh behind the graphic (very low opacity)
function NeuralMesh({ still }: { still: boolean }) {
  const points = [[120, 70], [420, 40], [760, 110], [1080, 50], [1380, 130], [220, 330], [620, 380], [980, 320], [1320, 390], [80, 480], [500, 520], [900, 500], [1250, 540]];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [8, 12], [9, 10], [10, 11], [11, 12]];
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox="0 0 1500 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      animate={still ? undefined : { y: [0, -16, 0] }}
      transition={still ? undefined : { duration: 28, repeat: Infinity, ease: "easeInOut" }}
    >
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} stroke="#020D1F" strokeOpacity=".05" strokeWidth="1" />
      ))}
      {points.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="2.5" fill={index % 4 === 0 ? "#E91A24" : "#020D1F"} fillOpacity={index % 4 === 0 ? ".1" : ".07"} />
      ))}
    </motion.svg>
  );
}

function StatusBar({ still }: { still: boolean }) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#020d1f]/12 pt-4">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-[#020d1f]/75">Connected systems</span>
      {NODES.map((node, index) => (
        <span key={node.name} className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#596475]">
          <span className={still ? "h-1.5 w-1.5 rounded-full bg-[#E91A24]" : "gm-os-pulse h-1.5 w-1.5 rounded-full bg-[#E91A24]"} style={{ animationDelay: `${index * 0.3}s` }} aria-hidden="true" />
          {node.name}
        </span>
      ))}
    </div>
  );
}

export function AiOperatingSystem() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const still = !!reduced;

  return (
    <div className="relative">
      <NeuralMesh still={still} />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-12">
        {/* Desktop graph */}
        <svg viewBox={`0 0 ${W} ${H}`} className="hidden h-auto w-full max-w-[660px] lg:block" role="group" aria-label="The Go Massive AI operating system and the technologies connected to it">
          {/* connection lines */}
          {NODES.map((_, index) => (
            <path key={index} d={lineD(index)} stroke={index === active ? "#E91A24" : "rgba(2,13,31,.14)"} strokeWidth={index === active ? 1.6 : 1} fill="none" />
          ))}
          {/* slow data-flow particles */}
          {!still && NODES.map((_, index) => (
            <circle
              key={`p-${index}`}
              r="2.4"
              fill="#E91A24"
              className="gm-os-particle"
              style={{ offsetPath: `path('${lineD(index)}')`, animationDuration: `${5.2 + index * 0.8}s`, animationDelay: `${index * 0.6}s` }}
            />
          ))}
          {/* hub */}
          <g>
            <rect x={CX - 104} y={CY - 34} width="208" height="68" rx="10" fill="white" stroke="rgba(2,13,31,.4)" strokeWidth="1.5" />
            <text x={CX} y={CY - 7} textAnchor="middle" className="gm-os-hub-title">GO MASSIVE</text>
            <text x={CX} y={CY + 12} textAnchor="middle" className="gm-os-hub-sub">AI OPERATING SYSTEM</text>
            {!still && <circle cx={CX + 92} cy={CY - 22} r="3.5" fill="#E91A24" className="gm-os-pulse" />}
            {still && <circle cx={CX + 92} cy={CY - 22} r="3.5" fill="#E91A24" />}
          </g>
          {/* technology nodes */}
          {NODES.map((node, index) => {
            const p = nodePos(index);
            const w = pillWidth(node.name);
            const isActive = index === active;
            return (
              <motion.g
                key={node.name}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${node.name}: ${node.outcome}`}
                className="cursor-pointer outline-none"
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                whileHover={still ? undefined : { scale: 1.05 }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(index); } }}
              >
                <rect x={p.x - w / 2} y={p.y - 19} width={w} height="38" rx="19" fill={isActive ? "rgba(233,26,36,.05)" : "white"} stroke={isActive ? "#E91A24" : "rgba(2,13,31,.25)"} strokeWidth={isActive ? 1.6 : 1.2} />
                <text x={p.x} y={p.y + 4} textAnchor="middle" className={isActive ? "gm-os-node-label gm-os-node-label--active" : "gm-os-node-label"}>{node.name}</text>
              </motion.g>
            );
          })}
        </svg>

        {/* Mobile / tablet: horizontal scroll nodes */}
        <div className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-2 lg:hidden" style={{ scrollbarWidth: "none" }} aria-label="Technologies connected to the Go Massive AI operating system">
          {NODES.map((node, index) => {
            const isActive = index === active;
            return (
              <button
                key={node.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${isActive ? "border-[#E91A24] bg-[#E91A24]/5 text-[#020d1f]" : "border-[#020d1f]/20 bg-white text-[#020d1f]/70"}`}
              >
                {node.name}
              </button>
            );
          })}
        </div>

        {/* Outcome panel */}
        <div className="min-h-[130px] border-t border-[#020d1f]/15 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={still ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={still ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[.14em] text-[#DB1822]">{NODES[active].name} · in the system</p>
              <p className="mt-3 max-w-md text-lg leading-8 text-[#020d1f]/75">{NODES[active].outcome}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <StatusBar still={still} />
    </div>
  );
}
