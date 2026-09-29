"use client";
import { RotatingWord } from "./RotatingWord";

export function HeroHeadline() {

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

            interval={3500}
          />
        </span>
      </h1>

    </div>
  );
}
