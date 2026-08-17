import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BarChart3, Check, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Meta Ads Management for eCommerce Brands | Go Massive",
  description:
    "Meta Ads management for brands that want to create demand, improve acquisition efficiency, and connect creative with commercial growth.",
};

const pillars = [
  {
    title: "Creative testing strategy",
    description: "A more deliberate approach to the messages, formats, and angles that earn attention from the right audience.",
  },
  {
    title: "Audience and campaign design",
    description: "Campaign structures built around the job each campaign needs to do, rather than unnecessary account complexity.",
  },
  {
    title: "Acquisition efficiency",
    description: "Budget decisions informed by performance signals, learning opportunities, and the economics behind customer acquisition.",
  },
  {
    title: "Landing-page alignment",
    description: "A paid-social journey works best when the ad, offer, and destination page tell one coherent story.",
  },
];

export default function MetaAdsPage() {
  return (
    <main className="min-h-screen bg-white text-[#020D1F]">
      <header className="border-b border-[#020D1F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" aria-label="Go Massive home"><Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={210} height={32} priority className="h-8 w-auto" /></a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#354052] md:flex" aria-label="Main navigation">
            <a className="text-[#E91A24]" href="/services">Services</a>
            <a className="transition hover:text-[#E91A24]" href="/#process">Our approach</a>
            <a className="transition hover:text-[#E91A24]" href="/#proof">Reporting</a>
          </nav>
          <a href="/#growth-audit" className="rounded-full bg-[#E91A24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C9141D]">Book a Growth Audit</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="absolute right-0 top-0 -z-0 h-full w-[42%] bg-[#F6F7F9]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <a href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5D6675] transition hover:text-[#E91A24]">Services <ArrowRight className="rotate-180" size={16} /></a>
            <p className="mt-10 inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">Meta Ads Management</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Turn attention into a stronger acquisition engine.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#505A6A]">Go Massive helps brands create demand through Meta Ads campaigns that bring creative, audiences, offers, and landing pages into a more useful commercial system.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/#growth-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E91A24] px-6 py-4 font-semibold text-white shadow-xl shadow-[#E91A24]/20 transition hover:bg-[#C9141D]">Get your Meta Ads Audit <ArrowRight size={18} /></a>
              <a href="#what-we-manage" className="inline-flex items-center justify-center rounded-full border border-[#020D1F]/15 bg-white px-6 py-4 font-semibold transition hover:border-[#020D1F]/35 hover:bg-[#020D1F] hover:text-white">See what we manage</a>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-[#020D1F]/10 bg-[#020D1F] p-6 text-white shadow-[0_25px_70px_rgba(2,13,31,0.2)] sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF7A81]">Meta Ads focus</p><p className="mt-2 text-lg font-semibold">Demand creation with commercial intent</p></div><BarChart3 className="text-[#E91A24]" size={24} /></div>
            <ul className="mt-7 space-y-5">
              {["Creative angles, formats, and testing priorities", "Audience and campaign structure", "Budget allocation and performance analysis", "Offer and landing-page alignment"].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><Check className="mt-0.5 shrink-0 text-[#E91A24]" size={17} strokeWidth={3} />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="what-we-manage" className="border-y border-[#020D1F]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><div><p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">What we manage</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">A Meta Ads program made for learning and growth.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#505A6A]">Paid social gets more useful when it is connected to the full customer journey. We manage the components that help you learn faster, improve the offer, and create a stronger path to conversion.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-2">{pillars.map((pillar, index) => <article key={pillar.title} className="bg-white p-7 sm:p-8"><span className="text-sm font-bold tracking-[0.16em] text-[#E91A24]">0{index + 1}</span><h3 className="mt-7 text-2xl font-semibold tracking-tight">{pillar.title}</h3><p className="mt-4 max-w-md leading-7 text-[#5D6675]">{pillar.description}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#F6F7F9] py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8"><div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#020D1F]/10 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]"><Target size={21} /></span><div><p className="text-sm font-semibold">Creative is a growth lever</p><p className="mt-1 text-sm text-[#5D6675]">Not just a deliverable.</p></div></div><p className="mt-7 leading-7 text-[#505A6A]">The most effective Meta Ads programs treat creative as an ongoing source of customer insight, not a one-time production task.</p></div><div><p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">The Go Massive standard</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">More than reach. A clearer route to acquisition.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#505A6A]">We help teams connect creative strategy to the outcomes they need the channel to produce, then make the next test and next decision clear.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#020D1F]"><TrendingUp className="text-[#E91A24]" size={19} /> Strategy, execution, and reporting in one operating rhythm.</div></div></div></section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Start with an audit</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Find the Meta Ads opportunities worth testing next.</h2></div><a href="/#growth-audit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#020D1F] transition hover:bg-[#020D1F] hover:text-white">Book a Growth Audit <ArrowRight size={18} /></a></div></section>
    </main>
  );
}
