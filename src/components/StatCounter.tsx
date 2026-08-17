"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
  const parsed = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(() => (parsed ? format(0, parsed) : value));

  useEffect(() => {
    if (!inView || !parsed) return;
    const controls = animate(0, parsed.target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(format(latest, parsed)),
    });
    return () => controls.stop();
  }, [inView, parsed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
