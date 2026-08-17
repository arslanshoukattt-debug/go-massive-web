import type { Metadata } from "next";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { HubSpotGrowthAuditForm } from "../../components/HubSpotGrowthAuditForm";

export const metadata: Metadata = {
  title: "Book a Growth Audit | Go Massive",
  description:
    "Start a conversation with Go Massive about your Amazon PPC, Google Ads, Meta Ads, or eCommerce growth opportunity.",
};

const auditIncludes = [
  "A focused view of the highest-value opportunities",
  "An honest conversation about priorities and constraints",
  "Clear next steps—even if we are not the right fit",
];

export default function GrowthAuditPage() {
  return (
    <main className="min-h-screen bg-white text-[#020D1F]">
      <header className="border-b border-[#020D1F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" aria-label="Go Massive home">
            <Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={210} height={32} priority className="h-8 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#354052] md:flex">
            <a className="transition hover:text-[#E91A24]" href="/services">Services</a>
            <a className="transition hover:text-[#E91A24]" href="/case-studies">Case studies</a>
            <a className="transition hover:text-[#E91A24]" href="/about">About</a>
          </nav>
          <a href="mailto:info@go-massive.com" className="rounded-full bg-[#E91A24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C9141D]">Email Go Massive</a>
        </div>
      </header>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">Growth Audit</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Get clarity on your next best growth move.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#505A6A]">Tell us where your business is today and what you are trying to solve. We will use it to prepare for a focused, commercially useful conversation.</p>
            <ul className="mt-10 space-y-4 text-sm font-medium text-[#354052]">
              {auditIncludes.map((item) => <li className="flex gap-3" key={item}><Check className="shrink-0 text-[#E91A24]" size={18} strokeWidth={3} />{item}</li>)}
            </ul>
            <div className="mt-10 rounded-2xl bg-[#020D1F] p-6 text-white">
              <div className="flex gap-3"><Mail className="shrink-0 text-[#E91A24]" size={21} /><div><p className="font-semibold">Prefer email?</p><a className="mt-1 inline-block text-sm text-white/70 transition hover:text-[#FF7A81]" href="mailto:info@go-massive.com">info@go-massive.com</a></div></div>
            </div>
          </div>
          <HubSpotGrowthAuditForm />
        </div>
      </section>
    </main>
  );
}
