"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  className,
  immediate = false,
}: {
  value: string;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const element = ref.current;
    const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || !match || motion.matches) return;
    let frame = 0;
    let started = false;
    const decimals = match[2].split(".")[1]?.length ?? 0;
    const target = Number(match[2]);
    const start = () => {
      if (started || motion.matches) return;
      started = true;
      const beginning = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - beginning) / 1800, 1);
        const number = target * (1 - Math.pow(1 - progress, 3));
        setDisplay(progress === 1 ? value : `${match[1]}${number.toFixed(decimals)}${match[3]}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { start(); observer.disconnect(); }
    }, { threshold: 0.2 });
    const onPreferenceChange = () => {
      if (motion.matches) { cancelAnimationFrame(frame); setDisplay(value); observer.disconnect(); }
    };
    motion.addEventListener("change", onPreferenceChange);
    if (immediate) start(); else observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); motion.removeEventListener("change", onPreferenceChange); };
  }, [value, immediate]);
  return (
    <span ref={ref} className={`stat-counter ${className ?? ""}`} aria-label={value}>
      <span className="stat-counter-size" aria-hidden="true">{value}</span>
      <span className="stat-counter-value" aria-hidden="true">{display}</span>
    </span>
  );
}
