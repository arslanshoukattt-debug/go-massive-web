"use client";

import { useEffect, useState } from "react";

// Rotating hero word. SSR and first paint always show words[0] ("Inevitable")
// with no animation - the H1 is the LCP element, so the initial word must not
// enter animated. Invisible sizers keep the box at the widest word so the
// layout never shifts. Screen readers get a static word via the parent's
// sr-only copy; this whole span is aria-hidden.
export function RotatingWord({ words, interval = 3000 }: { words: string[]; interval?: number }) {
  const [state, setState] = useState<{ idx: number; prev: number | null }>({ idx: 0, prev: null });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setState((s) => ({ idx: (s.idx + 1) % words.length, prev: s.idx }));
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="gm-rotator" aria-hidden="true">
      {words.map((word) => (
        <span key={word} className="gm-rotator-sizer">{word}.</span>
      ))}
      <span key={`in-${state.idx}`} className={state.prev === null ? "gm-rotator-word" : "gm-rotator-word gm-rotator-word--in"}>
        {words[state.idx]}.
      </span>
      {state.prev !== null && state.prev !== state.idx && (
        <span key={`out-${state.prev}`} className="gm-rotator-word gm-rotator-word--out">{words[state.prev]}.</span>
      )}
    </span>
  );
}
