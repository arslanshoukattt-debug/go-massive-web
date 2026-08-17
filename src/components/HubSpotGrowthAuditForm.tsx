"use client";

import Script from "next/script";

export function HubSpotGrowthAuditForm() {
  return (
    <div className="rounded-[1.5rem] border border-[#020D1F]/10 bg-[#F6F7F9] p-6 shadow-sm sm:p-9">
      <Script
        src="https://js-na2.hsforms.net/forms/embed/247020931.js"
        strategy="afterInteractive"
      />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="00676a9a-1f88-4c56-8e4b-ef58ee7c2517"
        data-portal-id="247020931"
      />
    </div>
  );
}
