import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, Check, Layers3, Megaphone, Search } from "lucide-react";
import { Reveal } from "../../components/Reveal";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Marketplace Growth Services | Go Massive",
  description: "Amazon growth, performance marketing, and commerce operations for brands that need an integrated eCommerce growth system.",
  path: "/services",
});

const amazonServices = [
  ["Amazon Account Management", "Operational ownership across catalogue, account health, commercial priorities, and reporting."],
  ["Amazon PPC Management", "Advertising structured around search intent, product economics, and profitable scale."],
  ["Listings, SEO & Catalogue", "Search-ready listings and catalogue foundations designed to improve discovery and conversion."],
  ["Creative, A+ Content & Brand Stores", "Marketplace creative that helps shoppers understand, trust, and choose the brand."],
  ["Product Launch", "A focused launch system for building demand, learning quickly, and establishing momentum."],
  ["Account Health & Compliance", "Practical support for account issues and marketplace-risk management before problems escalate."],
];

const performanceServices = [
  { title: "Google Ads", description: "Capture high-intent demand when buyers are researching, comparing, and ready to act.", href: "/services/google-ads", icon: Search },
  { title: "Meta Ads", description: "Build demand with creative, audience, and landing-page decisions that work as one system.", href: "/services/meta-ads", icon: Megaphone },
];

const commerceServices = [
  "Shopify Management", "Shopify Website Development", "Email Marketing", "SEO", "Creative Direction", "Social Media Management", "Walmart", "eBay Wholesale / White Label", "Temu",
];

export default function ServicesPage() {
  return <main id="main" className="bg-[#F7F8FA] text-[#020D1F]">
    <SiteHeader />
    <ViewTransition name="page-content" share="auto" enter="auto" default="none">
    <section className="bg-[#020D1F] py-20 text-white sm:py-28"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
      <p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Marketplace growth, connected</p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><h1 className="max-w-4xl text-[clamp(2.3rem,5.4vw,5.2rem)] font-semibold uppercase leading-[.92] tracking-[-.04em]">Every commercial lever. One accountable growth system.</h1><p className="max-w-xl text-lg leading-8 text-white/65">We do not treat marketplace management, acquisition, conversion, and expansion as separate jobs. They are one system—and each decision should strengthen the next.</p></div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <Reveal delay={0}><div className="h-full bg-[#081B38] p-7"><span className="gm-num-editorial">01</span><p className="mt-8 text-2xl font-semibold">Manage</p><p className="mt-3 leading-7 text-white/55">The marketplace operations that keep growth possible.</p></div></Reveal>
        <div className="hidden items-center justify-center bg-[#081B38] px-3 text-[#E91A24] md:flex" aria-hidden="true"><ArrowRight size={20} /></div>
        <Reveal delay={90}><div className="h-full bg-[#081B38] p-7"><span className="gm-num-editorial">02</span><p className="mt-8 text-2xl font-semibold">Acquire</p><p className="mt-3 leading-7 text-white/55">Demand capture and creation that puts the right products in front of the right people.</p></div></Reveal>
        <div className="hidden items-center justify-center bg-[#081B38] px-3 text-[#E91A24] md:flex" aria-hidden="true"><ArrowRight size={20} /></div>
        <Reveal delay={180}><div className="h-full bg-[#081B38] p-7"><span className="gm-num-editorial">03</span><p className="mt-8 text-2xl font-semibold">Convert & expand</p><p className="mt-3 leading-7 text-white/55">The content, commerce, retention, and new-channel work that compounds demand.</p></div></Reveal>
      </div>
    </div></section>

    <section className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Flagship capability</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Amazon Growth</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596475]">Amazon is where the commercial system becomes visible: operations, catalogue, conversion, advertising, and account health have to work together. We manage the full picture—or the specific constraint stopping progress.</p></div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-2 lg:grid-cols-3">{amazonServices.map(([title,description],index)=><Reveal key={title} delay={index * 70}><article className={index===0 ? "bg-[#020D1F] p-7 text-white sm:p-8" : "bg-white p-7 sm:p-8"}><span className={index===0 ? "gm-num-editorial gm-num-editorial--on-dark" : "gm-num-editorial"}>0{index+1}</span><h3 className="mt-10 text-2xl font-semibold tracking-tight">{title}</h3><p className={index===0 ? "mt-4 leading-7 text-white/60" : "mt-4 leading-7 text-[#596475]"}>{description}</p>{title === "Amazon PPC Management" && <Link href="/services/amazon-ppc" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#E91A24]">Explore Amazon PPC <ArrowRight size={16}/></Link>}</article></Reveal>)}</div>
    </div></section>

    <section className="bg-[#0A1830] py-24 text-white sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Demand beyond the marketplace</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Performance Marketing</h2></div><p className="max-w-2xl text-lg leading-8 text-white/60">Marketplace performance is stronger when the broader acquisition engine is coordinated around it. We connect the channels based on the job they need to do—not because a channel exists.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2">{performanceServices.map(({title,description,href,icon: ServiceIcon},index)=> <Reveal key={title} delay={index * 90}><Link href={href} className="block rounded-3xl border border-white/10 bg-white/[.04] p-8 transition hover:-translate-y-1 hover:bg-white/[.08]"><ServiceIcon className="text-[#E91A24]" size={26}/><h3 className="mt-16 text-3xl font-semibold tracking-tight">{title}</h3><p className="mt-4 max-w-lg leading-7 text-white/60">{description}</p><span className="mt-9 inline-flex items-center gap-2 font-semibold text-[#FF8A90]">Explore service <ArrowRight size={17}/></span></Link></Reveal>)}</div></div></section>

    <section className="bg-[#F7F8FA] py-24 sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">Build the system around the sale</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Commerce & marketplace expansion</h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#596475]">When it supports the growth plan, the same team can connect storefront, retention, creative, organic search, and new marketplace work to the commercial priorities already established.</p></div><div className="grid gap-x-8 gap-y-1 border-t border-[#020D1F]/10 sm:grid-cols-2">{commerceServices.map((service,index)=><Reveal key={service} delay={index * 50}><div className="flex items-center gap-4 border-b border-[#020D1F]/10 py-4"><span className="gm-num-meta">{String(index+1).padStart(2,"0")}</span><p className="font-semibold leading-6">{service}</p></div></Reveal>)}</div></div></section>

    <section className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div className="rounded-3xl bg-[#020D1F] p-8 text-white sm:p-11"><Layers3 className="text-[#E91A24]" size={28}/><p className="mt-16 text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">How we work</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em]">The work connects. Your reporting should too.</h2><p className="mt-6 leading-8 text-white/60">One commercial view is better than a collection of channel updates. We focus on product priorities, constraints, decisions, and what deserves attention next.</p></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Choose the right starting point</p><ul className="mt-8 space-y-5">{["Start with the revenue channel closest to your immediate constraint.","Bring in adjacent services when they clearly improve the commercial outcome.","Keep a single operating rhythm across delivery, decisions, and reporting."].map(item=><li key={item} className="flex gap-4 text-lg leading-8 text-[#596475]"><Check className="mt-1.5 shrink-0 text-[#E91A24]" size={19} strokeWidth={3}/>{item}</li>)}</ul><Link href="/growth-audit" className="gm-button gm-button--red mt-10">Get a Growth Audit <ArrowRight size={18}/></Link></div></div></div></section>

    </ViewTransition>
    <SiteFooter />
  </main>;
}
