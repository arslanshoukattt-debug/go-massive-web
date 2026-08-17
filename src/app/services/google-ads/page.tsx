import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Search, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Management for eCommerce Brands | Go Massive",
  description:
    "Google Ads management for brands and manufacturers that want to capture high-intent demand with clearer strategy and disciplined execution.",
};

const pillars = [
  {
    title: "Demand capture strategy",
    description: "Campaign priorities shaped around how customers search, compare, and decide between products and brands.",
  },
  {
    title: "Search campaign structure",
    description: "A cleaner account structure that separates meaningful intent, product priorities, and testing opportunities.",
  },
  {
    title: "Budget and query control",
    description: "Spend allocated to the queries and campaigns that deserve it, with waste identified and addressed deliberately.",
  },
  {
    title: "Landing-page alignment",
    description: "Paid search works best when the message, product offer, and destination page make the next step obvious.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-white text-[#020D1F]">
      <header className="border-b border-[#020D1F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" aria-label="Go Massive home">
            <Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={210} height={32} priority className="h-8 w-auto" />
          </a>
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
            <p className="mt-10 inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">Google Ads Management</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Be there when customers are looking for you.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#505A6A]">Go Massive helps eCommerce brands capture high-intent demand through Google Ads strategies that connect search behaviour, product priorities, and commercial objectives.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/#growth-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E91A24] px-6 py-4 font-semibold text-white shadow-xl shadow-[#E91A24]/20 transition hover:bg-[#C9141D]">Get your Google Ads Audit <ArrowRight size={18} /></a>
              <a href="#what-we-manage" className="inline-flex items-center justify-center rounded-full border border-[#020D1F]/15 bg-white px-6 py-4 font-semibold transition hover:border-[#020D1F]/35 hover:bg-[#020D1F] hover:text-white">See what we manage</a>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-[#020D1F]/10 bg-[#020D1F] p-6 text-white shadow-[0_25px_70px_rgba(2,13,31,0.2)] sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF7A81]">Google Ads focus</p>
                <p className="mt-2 text-lg font-semibold">High-intent demand, handled with discipline</p>
              </div>
              <Search className="text-[#E91A24]" size={24} />
            </div>
            <ul className="mt-7 space-y-5">
              {["Search campaign structure and keyword strategy", "Query review, negative keywords, and expansion", "Budget allocation around commercial priorities", "Conversion-focused ad copy and landing-page alignment"].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><Check className="mt-0.5 shrink-0 text-[#E91A24]" size={17} strokeWidth={3} />{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="what-we-manage" className="border-y border-[#020D1F]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div><p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">What we manage</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">A Google Ads account built around real intent.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-[#505A6A]">Paid search should do more than generate activity. Each campaign should have a defined role in helping the right customer find the right offer at the right moment.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-2">
            {pillars.map((pillar, index) => <article key={pillar.title} className="bg-white p-7 sm:p-8"><span className="text-sm font-bold tracking-[0.16em] text-[#E91A24]">0{index + 1}</span><h3 className="mt-7 text-2xl font-semibold tracking-tight">{pillar.title}</h3><p className="mt-4 max-w-md leading-7 text-[#5D6675]">{pillar.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F7F9] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-[#020D1F]/10 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]"><Target size={21} /></span><div><p className="text-sm font-semibold">Search is a commercial signal</p><p className="mt-1 text-sm text-[#5D6675]">Use it with context.</p></div></div><p className="mt-7 leading-7 text-[#505A6A]">The best decisions come from looking beyond surface-level metrics and understanding the intent, product economics, and downstream action behind a search query.</p></div>
          <div><p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">The Go Massive standard</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Demand capture with a clearer point of view.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#505A6A]">We bring search expertise and a performance mindset together, then turn that work into straightforward recommendations for your next move.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#020D1F]"><TrendingUp className="text-[#E91A24]" size={19} /> Strategy, execution, and reporting in one operating rhythm.</div></div>
        </div>
      </section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">Start with an audit</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Find the Google Ads opportunities worth acting on.</h2></div><a href="/#growth-audit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#020D1F] transition hover:bg-[#020D1F] hover:text-white">Book a Growth Audit <ArrowRight size={18} /></a></div></section>
    </main>
  );
}
