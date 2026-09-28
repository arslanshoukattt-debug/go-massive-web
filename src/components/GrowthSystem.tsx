"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { CSSProperties, KeyboardEvent } from "react";

const levers = [
  {
    name: "Research",
    title: "Find the opportunity. Before funding it.",
    copy: "We connect category demand, competitors and customer behaviour to find the gaps your brand can credibly own.",
    output: "A clear opportunity map",
    items: [
      "Category and competitor research",
      "Demand and search-term analysis",
      "Account and catalogue audit",
    ],
  },
  {
    name: "Strategy",
    title: "Give every move a commercial reason.",
    copy: "Your margin, inventory and ambition shape the plan. We agree the priorities, the baseline and what success will actually mean.",
    output: "One commercial growth plan",
    items: [
      "Product-level unit economics",
      "Channel and budget priorities",
      "Agreed goals and measurement",
    ],
  },
  {
    name: "Operations",
    title: "Remove the ceiling on your growth.",
    copy: "Advertising cannot fix a suppressed listing or an empty shelf. We keep the marketplace foundation ready for the demand we create.",
    output: "An account ready to scale",
    items: [
      "Catalogue and account health",
      "Inventory coordination",
      "Marketplace compliance",
    ],
  },
  {
    name: "Creative",
    title: "Make attention turn into intent.",
    copy: "Listings, product stories and ad creative work together to answer the buyer’s questions and make your offer easier to choose.",
    output: "A stronger path to conversion",
    items: [
      "Listing content and A+",
      "Storefront and product storytelling",
      "Performance creative testing",
    ],
  },
  {
    name: "Advertising",
    title: "Buy useful demand. Make it count.",
    copy: "Every campaign has a defined job. We connect spend to the products, margins and customer journeys behind it.",
    output: "Acquisition with accountability",
    items: [
      "Amazon, Google and Meta campaigns",
      "Branded and non-branded separation",
      "Product-level budget allocation",
    ],
  },
  {
    name: "Automation",
    title: "Less manual lag. Faster action.",
    copy: "Automated reporting and account checks flag changes for the team to review. People remain responsible for the decisions.",
    output: "More time for valuable decisions",
    items: [
      "Reporting and workflow automation",
      "Account monitoring",
      "Repeatable operating processes",
    ],
  },
  {
    name: "Optimisation",
    title: "Keep what works. Improve the rest.",
    copy: "We review the commercial picture, test the next hypothesis and redirect effort toward what earns its place in the plan.",
    output: "A tighter feedback loop",
    items: [
      "Weekly commercial reviews",
      "Creative and conversion tests",
      "Search-term and budget refinement",
    ],
  },
  {
    name: "Scale",
    title: "Grow the upside. Protect the economics.",
    copy: "We expand into products, channels and markets when the evidence supports the move. What we learn feeds the next round of research.",
    output: "The next informed growth move",
    items: [
      "New product and market opportunities",
      "Marketplace expansion",
      "Investment paced to performance",
    ],
  },
];

export function GrowthSystem() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const lever = levers[active];
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % levers.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + levers.length - 1) % levers.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = levers.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="engine">
      <div className="engine-map">
        <div className="engine-map-label">
          <span>THE GO MASSIVE GROWTH ENGINE</span>
          <span>08 CONNECTED LEVERS</span>
        </div>
        <div className="engine-wheel">
          <svg
            className="engine-lines"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="300" cy="300" r="215" stroke="currentColor" />
            <circle
              cx="300"
              cy="300"
              r="150"
              stroke="currentColor"
              strokeDasharray="3 9"
            />
            {levers.map((item, index) => {
              const angle = ((index * 45 - 90) * Math.PI) / 180;
              return (
                <path
                  key={item.name}
                  d={`M300 300 L${300 + Math.cos(angle) * 215} ${300 + Math.sin(angle) * 215}`}
                  className={active === index ? "is-active" : ""}
                />
              );
            })}
          </svg>
          <div className="engine-hub" aria-hidden="true">
            <span>ONE SYSTEM.</span>
            <strong>
              PROFIT
              <br />
              FIRST.
            </strong>
            <ArrowUpRight size={28} />
          </div>
          <div
            className="engine-tabs"
            role="tablist"
            aria-label="Eight growth engine levers"
          >
            {levers.map((item, index) => {
              const angle = ((index * 45 - 90) * Math.PI) / 180;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`lever-tab-${index}`}
                  aria-selected={active === index}
                  aria-controls="engine-detail"
                  tabIndex={active === index ? 0 : -1}
                  ref={(element) => {
                    buttons.current[index] = element;
                  }}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => navigate(event, index)}
                  style={
                    {
                      "--node-x": `${50 + Math.cos(angle) * 36}%`,
                      "--node-y": `${50 + Math.sin(angle) * 36}%`,
                    } as CSSProperties
                  }
                >
                  <span>0{index + 1}</span>
                  <strong>{item.name}</strong>
                </button>
              );
            })}
          </div>
        </div>
        <p className="engine-map-note">
          Every lever feeds the next. Every decision comes back to your growth.
        </p>
      </div>
      <div
        id="engine-detail"
        className="engine-detail"
        role="tabpanel"
        aria-labelledby={`lever-tab-${active}`}
        tabIndex={0}
      >
        <div className="engine-detail-top">
          <span>EXPLORE THE ENGINE</span>
          <b>0{active + 1} / 08</b>
        </div>
        <div className="engine-detail-content" key={active}>
          <p className="eyebrow">{lever.name}</p>
          <h3>{lever.title}</h3>
          <p className="engine-copy">{lever.copy}</p>
          <ul>
            {lever.items.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <div className="engine-deliverable">
            <span>THE DELIVERABLE</span>
            <p>{lever.output}</p>
          </div>
        </div>
        <button
          className="engine-next"
          type="button"
          onClick={() => setActive((active + 1) % levers.length)}
        >
          Next: {levers[(active + 1) % levers.length].name}
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="engine-bottom">
        <p>
          Connected execution. <strong>Shared upside.</strong>
        </p>
        <Link href="/growth-audit">
          Find your growth constraint <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
