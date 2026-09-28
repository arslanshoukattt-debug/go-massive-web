"use client";

import { useState } from "react";
import { caseStudies } from "../lib/case-studies";
import { CaseCard } from "./Editorial";

const categories = [
  "All work",
  "Outdoor and leisure",
  "Food and beverage",
  "Consumer goods",
  "Home and furniture",
];
export function CaseStudyExplorer() {
  const [category, setCategory] = useState("All work");
  const studies =
    category === "All work"
      ? caseStudies
      : caseStudies.filter((study) => study.category === category);
  return (
    <>
      <div
        className="case-filters"
        role="group"
        aria-label="Filter case studies by industry"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={item === category}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {studies.length} {studies.length === 1 ? "engagement" : "engagements"}
        {category !== "All work"
          ? ` in ${category.toLowerCase()}`
          : " across four industries"}
      </p>
      <div className="case-grid">
        {studies.map((study, i) => (
          <CaseCard key={study.slug} study={study} index={i} />
        ))}
      </div>
    </>
  );
}
