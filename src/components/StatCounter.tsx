"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ParsedStat = { prefix: string; target: number; decimals: number; suffix: string };

function parseStat(raw: string): ParsedStat | null {
  const match = raw.match(/^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numberStr, suffix] = match;
  const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numberStr.replace(/,/g, "")), decimals, suffix };
}

function format(value: number, parsed: ParsedStat) {
  const numeric = parsed.decimals
    ? value.toFixed(parsed.decimals)
    : Math.round(value).toLocaleString("en-US");
  return `${parsed.prefix}${numeric}${parsed.suffix}`;
}

// Approximates the same "fast start, gentle settle" character as the
// cubic-bezier(.16,1,.3,1) curve used elsewhere on the site.
function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

const DURATION_MS = 1500;

export function StatCounter({ value, className }: { value: string; className?: string }) {
  // Memoized on the value string itself, not recreated every render - a fresh
  // object here would change the effect's dependency on every animation
  // frame and force the count to restart from zero before it can progress.
  const parsed = useMemo(() => parseStat(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const startText = parsed ? format(0, parsed) : value;
  const finalText = parsed ? format(parsed.target, parsed) : value;

  // Plain IntersectionObserver, same pattern as Reveal.tsx - no animation
  // library needed just to detect a one-time viewport entry.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0, rootMargin: "-10% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!inView || !parsed || !node) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = finalText;
      return;
    }
    // Hand-rolled rAF tween written straight to the DOM node rather than
    // through setState, so per-frame updates never trigger a React
    // re-render (and can't re-trigger this effect).
    let frame: number;
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const value = parsed!.target * easeOutQuint(t);
      node!.textContent = format(value, parsed!);
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed, finalText]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums", display: "inline-block", minWidth: `${finalText.length}ch` }}
    >
      {startText}
    </span>
  );
}
