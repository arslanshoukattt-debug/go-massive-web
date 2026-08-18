"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";

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

export function StatCounter({ value, className }: { value: string; className?: string }) {
  // Memoized on the value string itself, not recreated every render - a fresh
  // object here would change the effect's dependency on every animation
  // frame and force the count to restart from zero before it can progress.
  const parsed = useMemo(() => parseStat(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const startText = parsed ? format(0, parsed) : value;
  const finalText = parsed ? format(parsed.target, parsed) : value;

  useEffect(() => {
    const node = ref.current;
    if (!inView || !parsed || !node) return;
    if (reduceMotion) {
      node.textContent = finalText;
      return;
    }
    // Written straight to the DOM node rather than through setState, so the
    // ~90 updates over the animation's duration never trigger a React
    // re-render (and can't re-trigger this effect).
    const controls = animate(0, parsed.target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest, parsed);
      },
    });
    return () => controls.stop();
  }, [inView, parsed, reduceMotion, finalText]);

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
