import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Layers3, Megaphone, Search } from "lucide-react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Marketplace Growth Services | Go Massive",
  description: "Amazon growth, performance marketing, and commerce operations for brands that need an integrated eCommerce growth system.",
};

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
  return <main className="bg-[#F7F8FA] text-[#020D1F]">
    <SiteHeader />
    <section className="bg-[#020D1F] py-20 text-white sm:py-28"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
      <p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Marketplace growth, connected</p>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><h1 className="max-w-5xl text-5xl font-semibold leading-[.97] tracking-[-.06em] sm:text-7xl">Every commercial lever. One accountable growth system.</h1><p className="max-w-xl text-lg leading-8 text-white/65">We do not treat marketplace management, acquisition, conversion, and expansion as separate jobs. They are one system—and each decision should strengthen the next.</p></div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3"><div className="bg-[#081B38] p-7"><span className="text-sm font-bold text-[#FF8A90]">01</span><p className="mt-8 text-2xl font-semibold">Manage</p><p className="mt-3 leading-7 text-white/55">The marketplace operations that keep growth possible.</p></div><div className="bg-[#081B38] p-7"><span className="text-sm font-bold text-[#FF8A90]">02</span><p className="mt-8 text-2xl font-semibold">Acquire</p><p className="mt-3 leading-7 text-white/55">Demand capture and creation that puts the right products in front of the right people.</p></div><div className="bg-[#081B38] p-7"><span className="text-sm font-bold text-[#FF8A90]">03</span><p className="mt-8 text-2xl font-semibold">Convert & expand</p><p className="mt-3 leading-7 text-white/55">The content, commerce, retention, and new-channel work that compounds demand.</p></div></div>
    </div></section>

    <section className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Flagship capability</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Amazon Growth</h2></div><p className="max-w-2xl text-lg leading-8 text-[#596475]">Amazon is where the commercial system becomes visible: operations, catalogue, conversion, advertising, and account health have to work together. We manage the full picture—or the specific constraint stopping progress.</p></div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-2 lg:grid-cols-3">{amazonServices.map(([title,description],index)=><article key={title} className={index===0 ? "bg-[#020D1F] p-7 text-white sm:p-8" : "bg-white p-7 sm:p-8"}><span className={index===0 ? "text-sm font-bold tracking-[.16em] text-[#FF8A90]" : "text-sm font-bold tracking-[.16em] text-[#E91A24]"}>0{index+1}</span><h3 className="mt-12 text-2xl font-semibold tracking-tight">{title}</h3><p className={index===0 ? "mt-4 leading-7 text-white/60" : "mt-4 leading-7 text-[#596475]"}>{description}</p>{title === "Amazon PPC Management" && <Link href="/services/amazon-ppc" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#E91A24]">Explore Amazon PPC <ArrowRight size={16}/></Link>}</article>)}</div>
    </div></section>

    <section className="bg-[#0A1830] py-24 text-white sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">Demand beyond the marketplace</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Performance Marketing</h2></div><p className="max-w-2xl text-lg leading-8 text-white/60">Marketplace performance is stronger when the broader acquisition engine is coordinated around it. We connect the channels based on the job they need to do—not because a channel exists.</p></div><div className="mt-14 grid gap-5 md:grid-cols-2">{performanceServices.map(({title,description,href,icon: ServiceIcon})=> <Link key={title} href={href} className="rounded-3xl border border-white/10 bg-white/[.04] p-8 transition hover:-translate-y-1 hover:bg-white/[.08]"><ServiceIcon className="text-[#E91A24]" size={26}/><h3 className="mt-16 text-3xl font-semibold tracking-tight">{title}</h3><p className="mt-4 max-w-lg leading-7 text-white/60">{description}</p><span className="mt-9 inline-flex items-center gap-2 font-semibold text-[#FF8A90]">Explore service <ArrowRight size={17}/></span></Link>)}</div></div></section>

    <section className="bg-[#F7F8FA] py-24 sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Build the system around the sale</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Commerce & marketplace expansion</h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#596475]">When it supports the growth plan, the same team can connect storefront, retention, creative, organic search, and new marketplace work to the commercial priorities already established.</p></div><div className="grid gap-3 sm:grid-cols-2">{commerceServices.map((service,index)=><div key={service} className="flex gap-4 rounded-2xl border border-[#020D1F]/10 bg-white p-5"><span className="text-sm font-bold text-[#E91A24]">{String(index+1).padStart(2,"0")}</span><p className="font-semibold leading-6">{service}</p></div>)}</div></div></section>

    <section className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div className="rounded-3xl bg-[#020D1F] p-8 text-white sm:p-11"><Layers3 className="text-[#E91A24]" size={28}/><p className="mt-16 text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">How we work</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em]">The work connects. Your reporting should too.</h2><p className="mt-6 leading-8 text-white/60">One commercial view is better than a collection of channel updates. We focus on product priorities, constraints, decisions, and what deserves attention next.</p></div><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Choose the right starting point</p><ul className="mt-8 space-y-5">{["Start with the revenue channel closest to your immediate constraint.","Bring in adjacent services when they clearly improve the commercial outcome.","Keep a single operating rhythm across delivery, decisions, and reporting."].map(item=><li key={item} className="flex gap-4 text-lg leading-8 text-[#596475]"><Check className="mt-1.5 shrink-0 text-[#E91A24]" size={19} strokeWidth={3}/>{item}</li>)}</ul><Link href="/growth-audit" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#E91A24] px-6 py-4 font-semibold text-white transition hover:bg-[#C9141D]">Get a Growth Audit <ArrowRight size={18}/></Link></div></div></div></section>

    <SiteFooter />
  </main>;
}
