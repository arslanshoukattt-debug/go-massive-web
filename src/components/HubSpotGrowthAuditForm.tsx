"use client";

import { useEffect, useRef, useState } from "react";

const HUBSPOT_SRC = "https://js-na2.hsforms.net/forms/embed/247020931.js";

export function HubSpotGrowthAuditForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  // The HubSpot embed script costs ~1.2s of main-thread blocking time, so it
  // only loads once the form container approaches the viewport - on mobile
  // the form sits well below the fold and the page becomes interactive
  // long before the visitor can see it. 600px of lead distance gives the
  // script time to build the form before the container scrolls into view.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return;
    if (document.querySelector(`script[src="${HUBSPOT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = HUBSPOT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [load]);

  return (
    <div ref={ref} className="min-h-[700px] rounded-[1.5rem] border border-[#020D1F]/10 bg-[#F6F7F9] p-6 shadow-sm sm:p-9">
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="00676a9a-1f88-4c56-8e4b-ef58ee7c2517"
        data-portal-id="247020931"
      />
    </div>
  );
}
