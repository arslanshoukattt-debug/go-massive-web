"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, FileText, Gem, Layers, Radar, RefreshCw } from "lucide-react";

// Six trust pillars in an asymmetric editorial grid (5/4/3 over 3/4/5 on lg).
// No diagrams, no AI-as-the-story: specialists lead, systems support. Cards
// fade up with a small stagger on scroll; hover reveals a tiny status note.
// Red is the only accent (brand rule: no colours outside the red family).
const PILLARS = [
  { icon: Radar, title: "Signal intelligence", desc: "Every account is monitored daily — nothing important happens without us seeing it.", status: "Always on", span: "lg:col-span-5" },
  { icon: Compass, title: "Strategic decisions", desc: "Senior operators make every call, weekly, against one commercial view.", status: "Human led", span: "lg:col-span-4" },
  { icon: Gem, title: "White-glove execution", desc: "Bids, budgets, catalogue, compliance — handled with month-one care, permanently.", status: "Done daily", span: "lg:col-span-3" },
  { icon: Layers, title: "Modern systems", desc: "Automation and tooling refined over 7+ years keep busywork off the critical path.", status: "Always on", span: "lg:col-span-3" },
  { icon: FileText, title: "Transparent reporting", desc: "You see what happened, why, and what's next — including what didn't work.", status: "Human reviewed", span: "lg:col-span-4" },
  { icon: RefreshCw, title: "Continuous optimization", desc: "Budgets and effort reallocate weekly toward whatever is compounding.", status: "Reviewed weekly", span: "lg:col-span-5" },
];

export function OperatingPillars() {
  const reduced = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
      {PILLARS.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <motion.article
            key={pillar.title}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.08 + Math.floor(index / 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative border border-[#020d1f]/12 bg-white p-7 transition-colors duration-300 hover:border-[#E91A24]/45 sm:p-8 ${pillar.span}`}
          >
            <span className="absolute right-6 top-6 flex items-center gap-1.5 font-mono text-[9.5px] font-bold uppercase tracking-[.14em] text-[#DB1822] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
              <span className="gm-os-pulse h-1 w-1 rounded-full bg-[#E91A24]" />
              {pillar.status}
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E91A24]/10">
              <Icon size={20} strokeWidth={1.9} className="text-[#E91A24]" aria-hidden="true" />
            </span>
            <h3 className="mt-7 text-[19px] font-semibold tracking-[-.02em] sm:text-[20px]">{pillar.title}</h3>
            <p className="mt-2.5 max-w-sm text-[14.5px] leading-6 text-[#596475]">{pillar.desc}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
