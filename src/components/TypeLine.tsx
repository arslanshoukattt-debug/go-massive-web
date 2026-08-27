"use client";

import { useEffect, useRef, useState } from "react";

const TYPE_MS = 42;
const ERASE_MS = 16;
const HOLD_MS = 2400;
const REST_MS = 600;
const START_DELAY_MS = 200;

// Terminal-style credibility line: types, holds, erases, repeats.
// Server-renders the full text (SEO + no-JS + reduced-motion all see the
// complete sentence); the animation only takes over after hydration.
export function TypeLine({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;

    function schedule(fn: () => void, ms: number) {
      timer.current = setTimeout(() => { if (!cancelled) fn(); }, ms);
    }
    function typeChar(i: number) {
      setShown(text.slice(0, i));
      if (i < text.length) schedule(() => typeChar(i + 1), TYPE_MS);
      else schedule(() => eraseChar(text.length), HOLD_MS);
    }
    function eraseChar(i: number) {
      setShown(text.slice(0, i));
      if (i > 0) schedule(() => eraseChar(i - 1), ERASE_MS);
      else schedule(() => typeChar(0), REST_MS);
    }
    schedule(() => typeChar(0), START_DELAY_MS);
    return () => { cancelled = true; clearTimeout(timer.current); };
  }, [text]);

  return (
    <p className="gm-typeline" aria-label={text}>
      <span className="gm-pulse" aria-hidden="true" />
      <span aria-hidden="true" className="gm-typeline-text">
        <span className="gm-typeline-prompt">&gt;&nbsp;</span>{shown}<span className="gm-typeline-cursor">_</span>
      </span>
    </p>
  );
}
