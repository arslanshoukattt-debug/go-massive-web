"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Channel = { name: string; role: string; flagship?: boolean };

// Premium 3x2 channel grid. Exactly one card is "active" at a time -
// Amazon (the flagship) by default, hover/focus moves it. Active state:
// pale red wash + a thin red line sweeping across the top edge.
export function ChannelGrid({ channels }: { channels: Channel[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map((channel, index) => {
        const isActive = index === active;
        return (
          <Link
            key={channel.name}
            href="/services"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className={`group relative flex min-h-[236px] flex-col justify-between overflow-hidden border p-7 transition-colors duration-300 ${isActive ? "border-[#E91A24]/35 bg-[#E91A24]/[.04]" : "border-[#020d1f]/12 bg-white"}`}
          >
            <span className={`absolute left-0 top-0 h-[2.5px] w-full origin-left bg-[#E91A24] transition-transform duration-500 ease-out ${isActive ? "scale-x-100" : "scale-x-0"}`} aria-hidden="true" />
            <div className="flex items-start justify-between gap-4">
              <span className="gm-num-meta">{String(index + 1).padStart(2, "0")}</span>
              {channel.flagship && <span className="gm-eyebrow shrink-0 bg-[#E91A24] px-2.5 py-1.5 text-white">Flagship</span>}
            </div>
            <div>
              <h3 className="text-[26px] font-semibold leading-tight tracking-[-.03em] sm:text-[28px]">{channel.name}</h3>
              <p className="mt-3 text-[15px] leading-6 text-[#596475]">{channel.role}</p>
              <span className="gm-text-red-safe mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.08em]">Explore <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
