"use client";

import { useEffect, useRef, useState } from "react";

// Radial growth engine: all 8 layers orbit one central commercial system,
// with clockwise arrows showing each layer feeding the next (a flywheel, not
// a linear pipeline). Click/keyboard-activate any layer to inspect it; a
// quiet auto-advance keeps the wheel alive until the visitor interacts
// (8s lock, matching the old hero map behaviour), pauses off-viewport, and
// never runs under prefers-reduced-motion. Below lg the wheel restructures
// into an accordion.
const STEPS = [
  { name: "Research", lines: ["Research"], detail: "Category, competitor, and demand signals gathered before a dollar is committed." },
  { name: "Strategy", lines: ["Strategy"], detail: "A commercial plan built on margins and constraints — not channel wishlists." },
  { name: "Marketplace Operations", lines: ["Marketplace", "Operations"], detail: "Catalogue, inventory, and account health kept launch-ready at all times." },
  { name: "Creative", lines: ["Creative"], detail: "Listings, A+ content, and ad creative built to convert the demand we buy." },
  { name: "Advertising", lines: ["Advertising"], detail: "PPC across Amazon, Walmart, Google, and Meta — with a defined job for every campaign." },
  { name: "Automation", lines: ["Automation"], detail: "Workflows and tooling that remove manual lag between signal and action." },
  { name: "Optimization", lines: ["Optimization"], detail: "Weekly commercial reviews that reallocate toward whatever is compounding." },
  { name: "Scale", lines: ["Scale"], detail: "New channels, new markets, new products — expanded on proven unit economics." },
];

const SIZE = 680;
const CENTER = SIZE / 2;
const ORBIT = 238; // node-centre radius
const NODE_R = 47;
const HUB_R = 88;

const rad = (deg: number) => (deg * Math.PI) / 180;
const angleOf = (index: number) => -90 + index * 45; // start at 12 o'clock, clockwise
const pos = (index: number, radius: number) => ({
  x: CENTER + radius * Math.cos(rad(angleOf(index))),
  y: CENTER + radius * Math.sin(rad(angleOf(index))),
});

// Arc along the orbit from the active node toward the next one - the
// "this layer feeds the next" highlight.
function feedArc(index: number) {
  const from = angleOf(index) + 13;
  const to = angleOf(index) + 45 - 13;
  const a = { x: CENTER + ORBIT * Math.cos(rad(from)), y: CENTER + ORBIT * Math.sin(rad(from)) };
  const b = { x: CENTER + ORBIT * Math.cos(rad(to)), y: CENTER + ORBIT * Math.sin(rad(to)) };
  return `M ${a.x} ${a.y} A ${ORBIT} ${ORBIT} 0 0 1 ${b.x} ${b.y}`;
}

const CYCLE_MS = 4000;
const INTERACTION_LOCK_MS = 8000;

export function GrowthFlywheel() {
  const [active, setActive] = useState(0);
  const lockUntil = useRef(0);
  const inView = useRef(true);
  const rootRef = useRef<HTMLDivElement>(null);

  function activate(index: number) {
    setActive(index);
    lockUntil.current = performance.now() + INTERACTION_LOCK_MS;
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => { inView.current = entry.isIntersecting; }, { threshold: 0.15 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!inView.current || performance.now() < lockUntil.current) return;
      setActive((current) => (current + 1) % STEPS.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  const step = STEPS[active];
  const next = STEPS[(active + 1) % STEPS.length];

  return (
    <div ref={rootRef}>
      {/* Desktop / large tablet: the radial wheel */}
      <div className="hidden lg:block">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto h-auto w-full max-w-[620px]" role="group" aria-label="The Go Massive growth engine: eight layers orbiting one commercial system">
          {/* orbit ring + clockwise flow arrows */}
          <circle cx={CENTER} cy={CENTER} r={ORBIT} className="gm-fly-ring" />
          {STEPS.map((_, index) => {
            const mid = angleOf(index) + 22.5;
            const m = { x: CENTER + ORBIT * Math.cos(rad(mid)), y: CENTER + ORBIT * Math.sin(rad(mid)) };
            return <path key={index} d="M -5 -4.5 L 6 0 L -5 4.5 Z" className="gm-fly-arrow" transform={`translate(${m.x} ${m.y}) rotate(${mid + 90})`} />;
          })}
          {/* active layer feeds the next: red arc segment */}
          <path d={feedArc(active)} className="gm-fly-feed" />
          {/* spokes */}
          {STEPS.map((_, index) => {
            const a = pos(index, HUB_R + 6);
            const b = pos(index, ORBIT - NODE_R - 4);
            return <line key={index} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className={index === active ? "gm-fly-spoke gm-fly-spoke--active" : "gm-fly-spoke"} />;
          })}
          {/* hub */}
          <g className="gm-fly-hub">
            <circle cx={CENTER} cy={CENTER} r={HUB_R} />
            <text x={CENTER} y={CENTER - 14}>ONE</text>
            <text x={CENTER} y={CENTER + 4}>COMMERCIAL</text>
            <text x={CENTER} y={CENTER + 22}>SYSTEM</text>
            <circle cx={CENTER} cy={CENTER + 42} r={4} className="gm-fly-hub-dot" />
          </g>
          {/* nodes */}
          {STEPS.map((item, index) => {
            const p = pos(index, ORBIT);
            const isActive = index === active;
            return (
              <g
                key={item.name}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${item.name}: ${item.detail}`}
                className={isActive ? "gm-fly-node gm-fly-node--active" : "gm-fly-node"}
                onClick={() => activate(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(index); } }}
              >
                <circle cx={p.x} cy={p.y} r={NODE_R} />
                <text x={p.x} y={p.y - (item.lines.length > 1 ? 16 : 8)} className="gm-fly-num">{String(index + 1).padStart(2, "0")}</text>
                {item.lines.map((line, lineIndex) => (
                  <text key={line} x={p.x} y={p.y + 6 + lineIndex * 14} className="gm-fly-label">{line}</text>
                ))}
              </g>
            );
          })}
        </svg>
        {/* inspection panel - fixed height so switching layers never shifts layout */}
        <div className="mt-2 min-h-[96px] max-w-xl border-t border-[#020d1f]/15 pt-4" aria-live="polite">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-[#DB1822]">{String(active + 1).padStart(2, "0")} · {step.name} <span className="text-[#596475]">→ feeds {next.name}</span></p>
          <p className="mt-2 leading-7 text-[#020d1f]/70">{step.detail}</p>
        </div>
      </div>

      {/* Tablet / mobile: accordion restructure */}
      <div className="lg:hidden">
        {STEPS.map((item, index) => {
          const isActive = index === active;
          return (
            <div key={item.name} className="border-b border-[#020d1f]/15">
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => activate(index)}
                className="flex w-full items-center gap-4 py-4 text-left"
              >
                <span className={`font-mono text-[13px] font-bold ${isActive ? "text-[#DB1822]" : "text-[#596475]"}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className={`flex-1 text-[17px] font-semibold tracking-[-.02em] ${isActive ? "text-[#020d1f]" : "text-[#020d1f]/65"}`}>{item.name}</span>
                <span className={`text-xl leading-none transition-transform duration-300 ${isActive ? "rotate-45 text-[#E91A24]" : "text-[#596475]"}`} aria-hidden="true">+</span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="pb-5 pl-9 text-[15px] leading-6 text-[#596475]">{item.detail} <span className="font-mono text-[11px] font-bold uppercase tracking-[.08em] text-[#DB1822]">→ feeds {STEPS[(index + 1) % STEPS.length].name}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
