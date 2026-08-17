import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Check, Mail } from "lucide-react";
import { HubSpotGrowthAuditForm } from "../../components/HubSpotGrowthAuditForm";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a Growth Audit | Go Massive",
  description:
    "Start a conversation with Go Massive about your Amazon, Google Ads, Meta Ads, or wider eCommerce growth opportunity.",
  path: "/growth-audit",
});

const auditIncludes = [
  "A focused view of the highest-value opportunities",
  "An honest conversation about priorities and constraints",
  "Clear next steps—even if we are not the right fit",
];

export default function GrowthAuditPage() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Growth Audit</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-.06em] sm:text-6xl lg:text-7xl">Get clarity on your next best growth move.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#596475]">Tell us where your business is today and what you are trying to solve. We will use it to prepare for a focused, commercially useful conversation.</p>
          <ul className="mt-10 space-y-4 text-sm font-medium text-[#354052]">
            {auditIncludes.map((item) => <li className="flex gap-3" key={item}><Check className="shrink-0 text-[#E91A24]" size={18} strokeWidth={3} />{item}</li>)}
          </ul>
          <div className="mt-10 rounded-2xl bg-[#020D1F] p-6 text-white">
            <div className="flex gap-3"><Mail className="shrink-0 text-[#E91A24]" size={21} /><div><p className="font-semibold">Prefer email?</p><a className="mt-1 inline-block text-sm text-white/70 transition hover:text-[#FF7A81]" href="mailto:info@go-massive.com">info@go-massive.com</a></div></div>
          </div>
        </div>
        <HubSpotGrowthAuditForm />
      </div></section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
