"use client";

import { useEffect, useRef, useState } from "react";
import { ENGINE_NODES } from "../lib/engine-nodes";

const CENTER = { x: 380, y: 240 };
const RADIUS = 190;

const DEFAULT_CAPTION = "Six commercial functions, coordinated through one operating layer. Hover or tap a node.";
const CYCLE_MS = 3200;
const FIRST_CYCLE_DELAY_MS = 1800; // let the entrance sequence finish first
const USER_LOCK_MS = 8000;

function pointOn(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + RADIUS * Math.cos(rad), y: CENTER.y + RADIUS * Math.sin(rad) };
}

function labelAnchor(angleDeg: number): "start" | "middle" | "end" {
  const cos = Math.cos((angleDeg * Math.PI) / 180);
  if (cos > 0.35) return "start";
  if (cos < -0.35) return "end";
  return "middle";
}

// Interactive Growth Engine. Nodes auto-activate in sequence so the system
// reads as alive; hover / tap / keyboard focus takes control (auto-cycle
// resumes after 8s idle). All motion pauses off-viewport, and reduced-motion
// users get a static, fully-drawn diagram with the caption panel intact.
export function CommerceSystemMap() {
  const [active, setActive] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const lockUntil = useRef(0);
  const inView = useRef(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting;
      setPaused(!entry.isIntersecting);
    });
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setActive(0);
      interval = setInterval(() => {
        if (!inView.current || Date.now() < lockUntil.current) return;
        index = (index + 1) % ENGINE_NODES.length;
        setActive(index);
      }, CYCLE_MS);
    }, FIRST_CYCLE_DELAY_MS);
    return () => { clearTimeout(start); clearInterval(interval); };
  }, []);

  function engage(index: number) {
    // eslint-disable-next-line react-hooks/purity -- only ever called from user event handlers, never during render
    lockUntil.current = Date.now() + USER_LOCK_MS;
    setActive(index);
  }

  const activeNode = active === null ? null : ENGINE_NODES[active];

  return (
    <div ref={rootRef} className={`gm-system-map ${paused ? "gm-map--paused" : ""}`}>
      <div className="gm-map-label"><span className="gm-pulse" /> LIVE COMMERCIAL SYSTEM</div>
      <svg viewBox="0 0 760 480" aria-hidden="true">
        {ENGINE_NODES.map((node, index) => {
          const p = pointOn(node.angle);
          const anchor = labelAnchor(node.angle);
          const labelOffset = anchor === "start" ? 26 : anchor === "end" ? -26 : 0;
          const labelY = node.angle === 90 ? 32 : node.angle === -90 ? -22 : 5;
          const d = `M ${p.x} ${p.y} L ${CENTER.x} ${CENTER.y}`;
          const isActive = active === index;
          return (
            <g key={node.label}>
              <path className={`gm-map-spoke ${isActive ? "gm-map-spoke--active" : ""}`} style={{ animationDelay: `${600 + index * 140}ms` }} d={d} />
              <circle className="gm-map-pulse" r="4" style={{ offsetPath: `path("${d}")`, animationDelay: `${1.4 + index * 0.55}s` }} />
              <g
                className={`gm-map-node ${isActive ? "gm-map-node--active" : ""}`}
                style={{ animationDelay: `${600 + index * 140}ms` }}
                transform={`translate(${p.x} ${p.y})`}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}: ${node.detail}`}
                onMouseEnter={() => engage(index)}
                onClick={() => engage(index)}
                onFocus={() => engage(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); engage(index); } }}
              >
                <circle className="gm-map-node-hit" r="34" />
                <circle className="gm-map-node-ring" r="18" />
                <circle className="gm-map-node-core" r="4.5" />
                <text textAnchor={anchor} x={labelOffset} y={labelY}>{node.label}</text>
              </g>
            </g>
          );
        })}
        <g className={`gm-map-center ${activeNode ? "gm-map-center--live" : ""}`} transform={`translate(${CENTER.x} ${CENTER.y})`}>
          <rect x="-70" y="-34" width="140" height="68" />
          <text textAnchor="middle" y="-3">GO MASSIVE</text>
          <text className="gm-map-center-sub" textAnchor="middle" y="16">OPERATING LAYER</text>
        </g>
      </svg>
      <div className="gm-map-detail" aria-live="polite">
        {activeNode ? (
          <>
            <p className="gm-map-detail-title"><span aria-hidden="true">&#9632;&nbsp;</span>{activeNode.label}</p>
            <p className="gm-map-detail-copy">{activeNode.detail}</p>
          </>
        ) : (
          <p className="gm-map-detail-copy">{DEFAULT_CAPTION}</p>
        )}
      </div>
    </div>
  );
}
