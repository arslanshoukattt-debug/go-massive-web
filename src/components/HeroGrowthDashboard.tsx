"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Pause, Play } from "lucide-react";

type GrowthEvidence = {
  slug: string;
  metrics: { value: string; label: string }[];
};

export function HeroGrowthDashboard({
  evidence,
}: {
  evidence: GrowthEvidence;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`growth-art ${paused ? "growth-art--paused" : ""}`}>
      <div className="growth-art-heading">
        <span>GO MASSIVE / CLIENT RESULTS</span>
      </div>
      <div className="growth-scene">
        <div className="growth-scene-label">OUTDOOR & LEISURE / AMAZON</div>
        <div className="growth-dashboard">
          <div className="growth-dashboard-header">
            <span className="growth-platform">
              amazon<span>Marketplace performance</span>
            </span>
            <span className="growth-period">
              6 MONTHS <span>↗</span>
            </span>
          </div>
          <div className="growth-dashboard-total">
            <p>{evidence.metrics[0].label}</p>
            <strong>
              {evidence.metrics[0].value}
              <span>growth</span>
            </strong>
            <span className="growth-baseline">
              An established outdoor & leisure brand
            </span>
          </div>
          <div
            className="growth-chart"
            role="img"
            aria-label="Illustrative upward growth curve. Documented result: marketplace revenue reached 2.4 times its starting level in six months. Intermediate points are illustrative."
          >
            <div className="growth-chart-guides" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <svg viewBox="0 0 480 230" fill="none" aria-hidden="true">
              <defs>
                <linearGradient
                  id="hero-growth-fill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#e91a24" stopOpacity=".2" />
                  <stop offset="1" stopColor="#e91a24" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M12 194 C60 192 66 170 103 171 S153 126 196 132 S256 84 295 92 S356 47 388 44 S442 7 468 -23 L468 221 L12 221Z"
                fill="url(#hero-growth-fill)"
              />
              <path
                className="growth-chart-line"
                pathLength="1"
                d="M12 194 C60 192 66 170 103 171 S153 126 196 132 S256 84 295 92 S356 47 388 44 S442 7 468 -23"
                stroke="#e91a24"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                className="growth-chart-arrow"
                d="M444 -15 L468 -23 L472 3"
                stroke="#e91a24"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="194"
                r="5"
                fill="white"
                stroke="#e91a24"
                strokeWidth="3"
              />
            </svg>
            <div className="growth-chart-axis">
              <span>STARTING POINT</span>
              <span>SIX MONTHS LATER</span>
            </div>
          </div>
          <div className="growth-dashboard-foot">
            <span>Strategy + creative + advertising</span>
            <span>Six-month engagement</span>
          </div>
        </div>
        <div className="growth-float growth-float--sales">
          <span className="growth-float-icon">
            <ArrowUpRight size={22} />
          </span>
          <div>
            <span>{evidence.metrics[1].label}</span>
            <strong>{evidence.metrics[1].value}</strong>
          </div>
        </div>
        <div className="growth-float growth-float--efficiency">
          <span className="growth-float-icon">
            <ArrowDownRight size={22} />
          </span>
          <div>
            <span>Advertising cost of sale</span>
            <strong>{evidence.metrics[2].value}</strong>
            <small>Lower advertising cost of sale.</small>
          </div>
        </div>
        <div className="growth-scene-bottom">
          <span>
            YOUR GROWTH.
            <br />
            <strong>OUR SHARED UPSIDE.</strong>
          </span>
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused
                ? "Play growth visual animation"
                : "Pause growth visual animation"
            }
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>
      <div className="growth-art-caption">
        <span>Illustrative trend. Documented case results.</span>
        <Link href={`/case-studies/${evidence.slug}`}>
          View the case <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
