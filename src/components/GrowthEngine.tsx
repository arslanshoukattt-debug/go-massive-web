"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  { name: "Research", detail: "Category, competitor, and demand signals gathered before a dollar is committed." },
  { name: "Strategy", detail: "A commercial plan built on margins and constraints — not channel wishlists." },
  { name: "Marketplace Operations", detail: "Catalogue, inventory, and account health kept launch-ready at all times." },
  { name: "Creative", detail: "Listings, A+ content, and ad creative built to convert the demand we buy." },
  { name: "Advertising", detail: "PPC across Amazon, Walmart, Google, and Meta — with a defined job for every campaign." },
  { name: "Automation", detail: "Workflows and tooling that remove manual lag between signal and action." },
  { name: "Optimization", detail: "Weekly commercial reviews that reallocate toward whatever is compounding." },
  { name: "Scale", detail: "New channels, new markets, new products — expanded on proven unit economics." },
];

export function GrowthEngine() {
  const ref = useRef<HTMLOListElement>(null);

  // Each step lights up (dot fills red, connector line draws downward) as it
  // scrolls into the middle band of the viewport - the pipeline visibly
  // assembles itself as the visitor reads it. States persist once activated.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const steps = Array.from(root.children);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "-20% 0px -30% 0px" }
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={ref} className="list-none p-0 m-0">
      {STEPS.map((step, index) => (
        <li key={step.name} className="gm-engine-step">
          <span className="gm-engine-dot" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{step.name}</h3>
            <p>{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
