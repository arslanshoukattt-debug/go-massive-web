"use client";

import { useState } from "react";

const stages = [
  { name: "Find the headroom", outcome: "Know where to grow.", copy: "We start with your margins, market and account. Then we put effort where it can make a commercial difference.", work: ["Research", "Strategy", "Operations"], note: "A clear plan. A stronger foundation." },
  { name: "Build the demand", outcome: "Give buyers a reason.", copy: "A sharper offer, stronger creative and focused campaigns turn your products into a more compelling choice.", work: ["Creative", "Advertising"], note: "The right message. The right audience." },
  { name: "Grow the profit", outcome: "Make the gains count.", copy: "We test, improve and expand what earns its place. Reporting and automation keep the team focused on the decisions that matter.", work: ["Automation", "Optimisation", "Scale"], note: "Better decisions. Repeatable progress." },
];

export function GrowthSystem() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <div className="gm-engine">
      <div className="gm-engine-choices" role="tablist" aria-label="How our growth engine works">
        {stages.map((item, index) => (
          <button key={item.name} id={`growth-stage-${index}`} type="button" role="tab"
            aria-selected={active === index} aria-controls="growth-stage-panel"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
              if (!keys.includes(event.key)) return;
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : (index + (event.key === "ArrowLeft" || event.key === "ArrowUp" ? 2 : 1)) % 3;
              setActive(next);
              document.getElementById(`growth-stage-${next}`)?.focus();
            }}>
            <span className="gm-engine-step">0{index + 1}</span>
            <span>{item.name}</span><span className="gm-engine-choice-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="gm-engine-body">
        <div className="gm-engine-mark" aria-hidden="true">
          <div className="gm-engine-track" />
          <div className="gm-engine-track gm-engine-track-inner" />
          <span className={`gm-engine-position gm-engine-position-${active}`} />
          <div className="gm-engine-centre"><span>THE GO MASSIVE</span><strong>GROWTH<br />ENGINE<span className="gm-engine-period">.</span></strong><span>YOUR PROFIT AT THE CENTRE</span></div>

        </div>
        <div id="growth-stage-panel" className="gm-engine-panel" role="tabpanel" aria-labelledby={`growth-stage-${active}`} tabIndex={0}>
          <div key={active} className="gm-engine-panel-content">

            <h3>{stage.outcome}</h3>
            <p>{stage.copy}</p>
            <ul aria-label="Capabilities involved">{stage.work.map(item => <li key={item}>{item}</li>)}</ul>

          </div>
        </div>
      </div>
      <div className="gm-engine-alignment"><span>ONE TEAM. THE WHOLE PICTURE.</span><p>Soft fees keep the work moving. <strong>Profit share keeps us invested.</strong></p></div>
    </div>
  );
}
