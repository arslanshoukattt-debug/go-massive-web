import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, BarChart3, Check, Layers3, Search, Target, TrendingUp } from "lucide-react";
import { Reveal } from "../../../components/Reveal";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { pageMetadata } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Google Ads Management for eCommerce Brands | Go Massive",
  description:
    "Google Ads management for brands and manufacturers that want to capture high-intent demand with clearer strategy and disciplined execution.",
  path: "/services/google-ads",
});

const pillars = [
  { number: "01", title: "Demand capture strategy", copy: "Campaign priorities shaped around how customers search, compare, and decide between products and brands.", icon: Target },
  { number: "02", title: "Search campaign structure", copy: "A cleaner account structure that separates meaningful intent, product priorities, and testing opportunities.", icon: Search },
  { number: "03", title: "Budget and query control", copy: "Spend allocated to the queries and campaigns that deserve it, with waste identified and addressed deliberately.", icon: BarChart3 },
  { number: "04", title: "Landing-page alignment", copy: "Paid search works best when the message, product offer, and destination page make the next step obvious.", icon: Layers3 },
];

const accountWork = [
  "Search campaign structure and keyword strategy",
  "Query review, negative keywords, and expansion",
  "Budget allocation around commercial priorities",
  "Conversion-focused ad copy and landing-page alignment",
];

export default function GoogleAdsPage() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="relative isolate bg-[#020D1F] py-20 text-white sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-32 top-0 -z-10 h-[640px] w-[640px] rounded-full border border-[#E91A24]/35" />
        <div className="absolute -right-8 top-28 -z-10 h-[410px] w-[410px] rounded-full border border-white/15" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"><ArrowRight className="rotate-180" size={16} /> Services</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-[#FF8A90]">Google Ads management</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-.065em] sm:text-7xl">Be there when customers are <span className="text-[#FF6E76]">looking for you.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">Go Massive helps eCommerce brands capture high-intent demand through Google Ads strategies that connect search behaviour, product priorities, and commercial objectives.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/growth-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E91A24] px-6 py-4 font-semibold transition hover:bg-[#C9141D]">Get your Google Ads Audit <ArrowRight size={18} /></Link>
              <a href="#what-we-manage" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 font-semibold transition hover:bg-white hover:text-[#020D1F]">See what we manage</a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-[#081B38] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Google Ads focus</p><p className="mt-2 text-xl font-semibold">High-intent demand, handled with discipline.</p></div>
              <Search className="text-[#E91A24]" size={27} />
            </div>
            <ul className="mt-7 space-y-5">
              {accountWork.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><Check className="mt-0.5 shrink-0 text-[#E91A24]" size={17} strokeWidth={3} />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="what-we-manage" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">What we manage</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">A Google Ads account built around real intent.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596475]">Paid search should do more than generate activity. Each campaign should have a defined role in helping the right customer find the right offer at the right moment.</p></div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{pillars.map(({ number, title, copy, icon: Icon }, index) => <Reveal key={title} delay={index * 90}><article className="min-h-[340px] rounded-3xl border border-[#020D1F]/10 bg-[#F7F8FA] p-7 transition hover:-translate-y-1 hover:border-[#E91A24]/50 hover:bg-white hover:shadow-xl"><div className="flex items-start justify-between"><span className="text-sm font-bold tracking-[.16em] text-[#E91A24]">{number}</span><Icon size={24} /></div><h3 className="mt-14 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-[#596475]">{copy}</p></article></Reveal>)}</div>
      </div></section>

      <section className="bg-[#0A1830] py-24 text-white sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[.045] p-7 sm:p-9"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E91A24]/15 text-[#FF8A90]"><Target size={21} /></span><div><p className="text-sm font-semibold">Search is a commercial signal</p><p className="mt-1 text-sm text-white/55">Use it with context.</p></div></div><p className="mt-7 leading-7 text-white/65">The best decisions come from looking beyond surface-level metrics and understanding the intent, product economics, and downstream action behind a search query.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">The Go Massive standard</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Demand capture with a clearer point of view.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">We bring search expertise and a performance mindset together, then turn that work into straightforward recommendations for your next move.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold"><TrendingUp className="text-[#E91A24]" size={19} /> Strategy, execution, and reporting in one operating rhythm.</div></div>
      </div></section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-white/65">Start with an audit</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Find the Google Ads opportunities worth acting on.</h2></div><Link href="/growth-audit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#020D1F] px-6 py-4 font-semibold transition hover:bg-white hover:text-[#020D1F]">Book a Growth Audit <ArrowRight size={18} /></Link></div></section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
