import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, BarChart3, Check, Layers3, Megaphone, Sparkles, Target, Users } from "lucide-react";
import { Reveal } from "../../../components/Reveal";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "../../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Meta Ads Management for eCommerce Brands | Go Massive",
  description:
    "Meta Ads management for brands that want to create demand, improve acquisition efficiency, and connect creative with commercial growth.",
  path: "/services/meta-ads",
});

const pillars = [
  { number: "01", title: "Creative testing strategy", copy: "A more deliberate approach to the messages, formats, and angles that earn attention from the right audience.", icon: Megaphone },
  { number: "02", title: "Audience and campaign design", copy: "Campaign structures built around the job each campaign needs to do, rather than unnecessary account complexity.", icon: Users },
  { number: "03", title: "Acquisition efficiency", copy: "Budget decisions informed by performance signals, learning opportunities, and the economics behind customer acquisition.", icon: BarChart3 },
  { number: "04", title: "Landing-page alignment", copy: "A paid-social journey works best when the ad, offer, and destination page tell one coherent story.", icon: Layers3 },
];

const accountWork = [
  "Creative angles, formats, and testing priorities",
  "Audience and campaign structure",
  "Budget allocation and performance analysis",
  "Offer and landing-page alignment",
];

export default function MetaAdsPage() {
  return (
    <main id="main" className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd({ name: "Meta Ads Management", description: "Meta Ads management for brands that want to create demand, improve acquisition efficiency, and connect creative with commercial growth.", path: "/services/meta-ads" }), breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: "Meta Ads", path: "/services/meta-ads" }])]) }} />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="relative isolate bg-[#020D1F] py-20 text-white sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-32 top-0 -z-10 h-[640px] w-[640px] rounded-full border border-[#E91A24]/35" />
        <div className="absolute -right-8 top-28 -z-10 h-[410px] w-[410px] rounded-full border border-white/15" />
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"><ArrowRight className="rotate-180" size={16} /> Services</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-[#FF8A90]">Meta Ads management</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-.065em] sm:text-7xl">Turn attention into a <span className="text-[#FF8A90]">stronger acquisition engine.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">Go Massive helps brands create demand through Meta Ads campaigns that bring creative, audiences, offers, and landing pages into a more useful commercial system.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/growth-audit" className="gm-button gm-button--red">Get your Meta Ads Audit <ArrowRight size={18} /></Link>
              <a href="#what-we-manage" className="gm-button gm-button--ghost">See what we manage</a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-[#081B38] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Meta Ads focus</p><p className="mt-2 text-xl font-semibold">Demand creation with commercial intent.</p></div>
              <BarChart3 className="text-[#E91A24]" size={27} />
            </div>
            <ul className="mt-7 space-y-5">
              {accountWork.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/75"><Check className="mt-0.5 shrink-0 text-[#E91A24]" size={17} strokeWidth={3} />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="what-we-manage" className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">What we manage</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">A Meta Ads program made for learning and growth.</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596475]">Paid social gets more useful when it is connected to the full customer journey. We manage the components that help you learn faster, improve the offer, and create a stronger path to conversion.</p></div>
        <p className="mt-16 text-xs font-bold uppercase tracking-[.2em] text-[#596475]">Test <span className="text-[#E91A24]">↻</span> Learn <span className="text-[#E91A24]">↻</span> Scale — a loop, not a one-way pipeline</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{pillars.map(({ number, title, copy, icon: Icon }, index) => <Reveal key={title} delay={index * 90}><article className="min-h-[280px] rounded-3xl border border-[#020D1F]/10 bg-[#F7F8FA] p-8 transition hover:-translate-y-1 hover:border-[#E91A24]/50 hover:bg-white hover:shadow-xl"><div className="flex items-start justify-between"><span className="gm-num-editorial">{number}</span><Icon size={26} /></div><h3 className="mt-10 text-3xl font-semibold tracking-tight">{title}</h3><p className="mt-3 max-w-md leading-7 text-[#596475]">{copy}</p></article></Reveal>)}</div>
      </div></section>

      <section className="bg-[#0A1830] py-24 text-white sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[.045] p-7 sm:p-9"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E91A24]/15 text-[#FF8A90]"><Target size={21} /></span><div><p className="text-sm font-semibold">Creative is a growth lever</p><p className="mt-1 text-sm text-white/55">Not just a deliverable.</p></div></div><p className="mt-7 leading-7 text-white/65">The most effective Meta Ads programs treat creative as an ongoing source of customer insight, not a one-time production task.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">The Go Massive standard</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">More than reach. A clearer route to acquisition.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">We help teams connect creative strategy to the outcomes they need the channel to produce, then make the next test and next decision clear.</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold"><Sparkles className="text-[#E91A24]" size={19} /> Strategy, execution, and reporting in one operating rhythm.</div><Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#FF8A90] transition hover:text-white">See how this thinking performs <ArrowRight size={16} /></Link></div>
      </div></section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-white">Start with an audit</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Find the Meta Ads opportunities worth testing next.</h2></div><Link href="/growth-audit" className="gm-button gm-button--dark">Book a Growth Audit <ArrowRight size={18} /></Link></div></section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
