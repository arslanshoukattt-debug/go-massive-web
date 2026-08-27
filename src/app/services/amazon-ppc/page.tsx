import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, BarChart3, Check, CircleDollarSign, Search, ShieldCheck, Target, Workflow } from "lucide-react";
import { Reveal } from "../../../components/Reveal";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { StatCounter } from "../../../components/StatCounter";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Amazon PPC Management | Go Massive",
  description:
    "Amazon PPC management that connects campaign architecture, search-term intelligence, catalogue priorities, and commercial reporting.",
  path: "/services/amazon-ppc",
});

const pillars = [
  {
    number: "01",
    title: "Set the commercial direction",
    copy: "We start with the products, margin context, inventory position, and growth objective that should determine where advertising earns the right to spend.",
    icon: Target,
  },
  {
    number: "02",
    title: "Build an account with a job for every campaign",
    copy: "Campaigns are structured around product groups and demand types, so discovery, conversion, branded defence, and expansion can be managed intentionally.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Turn search terms into decisions",
    copy: "We use search-term signals to develop relevant demand, reduce waste, and keep testing connected to the opportunities worth pursuing.",
    icon: Search,
  },
  {
    number: "04",
    title: "Report the decisions, not the activity",
    copy: "Clear reporting shows what changed, what it means for the account, and which product or marketplace decision deserves attention next.",
    icon: BarChart3,
  },
];

const accountWork = [
  "Campaign and portfolio structure",
  "Product-level budget allocation",
  "Search-term harvesting and negative targeting",
  "Keyword, product, and category targeting",
  "Bid and placement refinement",
  "Branded and non-branded demand separation",
  "Launch and seasonal campaign planning",
  "Performance reporting and commercial reviews",
];

const auditChecks = [
  "Whether campaign structure makes useful decisions possible",
  "Where spend is being directed without a defined commercial role",
  "Which products, terms, and targets deserve more or less investment",
  "Whether listings, inventory, and advertising priorities are working against each other",
];

export default function AmazonPpcPage() {
  return (
    <main id="main" className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd({ name: "Amazon PPC Management", description: "Amazon PPC management that connects campaign architecture, search-term intelligence, catalogue priorities, and commercial reporting.", path: "/services/amazon-ppc" }), breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: "Amazon PPC", path: "/services/amazon-ppc" }])]) }} />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="relative isolate bg-[#020D1F] py-20 text-white sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-32 top-0 -z-10 h-[640px] w-[640px] rounded-full border border-[#E91A24]/35" />
        <div className="absolute -right-8 top-28 -z-10 h-[410px] w-[410px] rounded-full border border-white/15" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white">
              <ArrowRight className="rotate-180" size={16} /> Services
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-[#FF8A90]">Amazon PPC management</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.96] tracking-[-.065em] sm:text-7xl lg:text-[5.35rem]">Amazon advertising that works like a <span className="text-[#FF6E76]">commercial system.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">Go Massive turns PPC from an isolated campaign task into a connected system for capturing demand, making better product decisions, and growing the marketplace opportunities that matter.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/growth-audit" className="gm-button gm-button--red">Get your Amazon PPC Audit <ArrowRight size={18} /></Link>
              <a href="#how-it-works" className="gm-button gm-button--ghost">How we manage PPC</a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-[#081B38] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">The operating view</p><p className="mt-2 text-xl font-semibold">Make every decision earn its place.</p></div>
              <CircleDollarSign className="text-[#E91A24]" size={27} />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[['Demand', 'Capture, defend, and develop the searches that matter.'], ['Products', 'Prioritise the catalogue opportunities worth backing.'], ['Efficiency', 'Put budget behind a defined commercial job.'], ['Context', 'Connect PPC to listings, stock, and conversion.']].map(([title, copy], index) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.045] p-4"><p className="gm-num-meta gm-num-meta--on-dark">0{index + 1}</p><p className="mt-6 font-semibold">{title}</p><p className="mt-2 text-sm leading-6 text-white/55">{copy}</p></div>)}
            </div>
            <div className="mt-4 flex gap-3 rounded-2xl bg-[#E91A24] p-4"><ShieldCheck className="shrink-0" size={21} /><p className="text-sm leading-6">Activity is not the goal. Better commercial decisions are.</p></div>
          </aside>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">The PPC operating system</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">A structure built to make performance clearer.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596475]">When campaigns accumulate without a role, the account gets harder to improve. We create a practical operating rhythm that separates the work, reveals the signals, and directs investment toward the right opportunity.</p></div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{pillars.map(({number,title,copy,icon: Icon}, index) => <Reveal key={title} delay={index * 90}><article className="min-h-[340px] rounded-3xl border border-[#020D1F]/10 bg-[#F7F8FA] p-7 transition hover:-translate-y-1 hover:border-[#E91A24]/50 hover:bg-white hover:shadow-xl"><div className="flex items-start justify-between"><span className="gm-num-editorial">{number}</span><Icon size={24}/></div><h3 className="mt-14 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 leading-7 text-[#596475]">{copy}</p></article></Reveal>)}</div>
      </div></section>

      <section className="bg-[#0A1830] py-24 text-white sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">What we manage</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">The levers behind a more intentional account.</h2><p className="mt-7 max-w-lg text-lg leading-8 text-white/60">The exact scope follows the commercial need, but every engagement connects account activity back to product, demand, and profitability decisions.</p></div><div className="grid gap-3 sm:grid-cols-2">{accountWork.map((item,index) => <Reveal key={item} delay={index * 70}><div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[.045] p-5"><span className="gm-num-meta gm-num-meta--on-dark">{String(index + 1).padStart(2, "0")}</span><p className="font-semibold leading-6">{item}</p></div></Reveal>)}</div></div></section>

      <section className="bg-[#F7F8FA] py-24 sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10"><div className="rounded-[2rem] bg-[#E91A24] p-8 text-white sm:p-12"><p className="text-xs font-bold uppercase tracking-[.18em] text-white">Anonymous client outcome</p><p className="mt-12 text-6xl font-semibold tracking-[-.07em] sm:text-8xl"><StatCounter value="−42%" /></p><p className="mt-3 max-w-sm text-xl leading-7">Total advertising cost of sale</p><div className="mt-10 border-t border-white/25 pt-6"><p className="text-2xl font-semibold"><StatCounter value="+180%" /></p><p className="mt-1 text-white">Non-branded sales</p><p className="mt-6 text-sm leading-6 text-white">An established outdoor and leisure brand rebuilt its Amazon advertising, listings, content, and account management into one connected marketplace system.</p></div></div><div><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">Proof with context</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">PPC works better when the work around it does too.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#596475]">Advertising can expose a conversion or catalogue constraint, but it cannot fix one alone. Our Amazon PPC work connects to listings, content, product priorities, and marketplace operations—so the account is designed to compound, not just stay active.</p><Link href="/case-studies/outdoor-leisure-marketplace-growth" className="mt-9 inline-flex items-center gap-2 font-semibold gm-text-red-safe transition hover:text-[#C9141D]">Read the anonymous case study <ArrowRight size={18}/></Link></div></div></section>

      <section className="bg-white py-24 sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Start with the real constraint</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">An audit should clarify the next decision before it adds more activity.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#596475]">We review the account you have, establish the opportunity and the constraints, then identify the scope and priorities that could make the clearest commercial difference.</p><Link href="/growth-audit" className="gm-button gm-button--red mt-10">Request an Amazon PPC Audit <ArrowRight size={18}/></Link></div><div className="rounded-3xl border border-[#020D1F]/10 bg-[#F7F8FA] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#596475]">An audit looks at</p><ul className="mt-8 space-y-5">{auditChecks.map(item => <li key={item} className="flex gap-3 leading-7 text-[#394457]"><Check className="mt-1 shrink-0 text-[#E91A24]" size={18} strokeWidth={3}/>{item}</li>)}</ul></div></div></section>

      <section className="bg-[#E91A24] py-20 text-white"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-white">Start with clarity</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Find the Amazon PPC opportunity worth acting on first.</h2></div><Link href="/growth-audit" className="gm-button gm-button--dark">Get a Growth Audit <ArrowRight size={18}/></Link></div></section>
      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
