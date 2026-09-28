"use client";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { RotatingWord } from "./RotatingWord";

export function HeroHeadline() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="hero-headline">
      <h1>
        BUILD GROWTH
        <br />
        THAT’S
        <br />
        <span className="hero-flip-line">
          <span className="sr-only">Predictable.</span>
          <RotatingWord
            words={["Predictable", "Repeatable", "Scalable", "Profitable"]}
            paused={paused}
            interval={3500}
          />
        </span>
      </h1>
      <button
        type="button"
        className="headline-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={
          paused ? "Play headline animation" : "Pause headline animation"
        }
      >
        {paused ? <Play size={12} /> : <Pause size={12} />}{" "}
        {paused ? "Play headline" : "Pause headline"}
      </button>
    </div>
  );
}
