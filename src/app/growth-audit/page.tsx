import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Check, Mail, ShieldCheck } from "lucide-react";
import { HubSpotGrowthAuditForm } from "../../components/HubSpotGrowthAuditForm";
import { Reveal } from "../../components/Reveal";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { StatCounter } from "../../components/StatCounter";
import { agencyStats } from "../../lib/case-studies";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book an eCommerce Growth Audit | Go Massive",
  description:
    "Start a conversation with Go Massive about your Amazon, Google Ads, Meta Ads, or wider eCommerce growth opportunity.",
  path: "/growth-audit",
});

const whatWeLookAt = [
  "Where the account currently creates the most - and least - commercial impact",
  "Whether marketplace operations, paid demand, and conversion work are pulling in the same direction",
  "The constraints actually limiting growth right now, whether that is budget, catalogue, creative, or structure",
  "What a focused next step looks like, with or without Go Massive",
];

const auditIncludes = [
  "A focused view of the highest-value opportunities",
  "An honest conversation about priorities and constraints",
  "Clear next steps—even if we are not the right fit",
];

export default function GrowthAuditPage() {
  return (
    <main id="main" className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">

      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(2,13,31,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(2,13,31,.06)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] gm-text-red-safe">Growth Audit</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,5.6vw,5.4rem)] font-semibold uppercase leading-[.92] tracking-[-.04em]">Get clarity on your next best growth move.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#596475]">Tell us where your business is today and what you are trying to solve. We will use it to prepare for a focused, commercially useful conversation - not a generic sales call.</p>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#020D1F]/10 bg-[#020D1F]/10 sm:grid-cols-4">
            {agencyStats.map((stat, index) => <Reveal key={stat.label} delay={index * 90}><div className="bg-white p-5"><p className="text-2xl font-semibold tracking-[-.03em] sm:text-3xl"><StatCounter value={stat.value} /></p><p className="mt-1 text-xs leading-5 text-[#596475]">{stat.label}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">What we look at</p>
          <Reveal><ul className="mt-6 space-y-4">
            {whatWeLookAt.map((item, index) => <li key={item} className="flex gap-4 border-b border-[#020D1F]/10 pb-4"><span className="gm-num-meta shrink-0">{String(index + 1).padStart(2, "0")}</span><p className="leading-7 text-[#354052]">{item}</p></li>)}
          </ul></Reveal>

          <p className="mt-10 text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">What you get</p>
          <ul className="mt-6 space-y-4 text-sm font-medium text-[#354052]">
            {auditIncludes.map((item) => <li className="flex gap-3" key={item}><Check className="shrink-0 text-[#E91A24]" size={18} strokeWidth={3} />{item}</li>)}
          </ul>

          <div className="mt-8 flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#020D1F]/10"><ShieldCheck className="shrink-0 text-[#E91A24]" size={20} /><p className="text-sm leading-6 text-[#354052]">This is not a pitch for a retainer. It is a structured look at your account, so you leave with a clearer view of where the constraint actually is.</p></div>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#020D1F]/10">
            <div className="flex gap-3"><Mail className="shrink-0 text-[#E91A24]" size={21} /><div><p className="font-semibold">Prefer email?</p><a className="mt-1 inline-block text-sm text-[#596475] transition hover:text-[#E91A24]" href="mailto:info@go-massive.com">info@go-massive.com</a></div></div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">Start the audit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Tell us about the account.</h2>
          <div className="mt-7"><HubSpotGrowthAuditForm /></div>
        </div>
      </div></section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
