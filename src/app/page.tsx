import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { CommerceSystemMap } from "../components/CommerceSystemMap";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StatCounter } from "../components/StatCounter";
import { agencyStats } from "../lib/case-studies";

const operatingLayers = [
  { number: "01", name: "Own the account", detail: "Catalogue, compliance, stock and marketplace health kept commercially accountable.", tags: ["Account operations", "Catalogue control", "Marketplace health"] },
  { number: "02", name: "Capture demand", detail: "Amazon PPC, Google and Meta built around profitable intent—not activity for activity’s sake.", tags: ["Retail media", "Paid demand", "Reporting"] },
  { number: "03", name: "Earn conversion", detail: "Listings, creative and storefront experiences designed to make every visit work harder.", tags: ["Listing strategy", "Creative", "Storefronts"] },
  { number: "04", name: "Compound growth", detail: "Retention, Shopify and marketplace expansion connected to a wider commercial plan.", tags: ["Retention", "Shopify", "Expansion"] },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f3ef] text-[#020d1f]">
      <SiteHeader />

      <section className="gm-hero relative bg-[#020d1f] text-white">
        <div className="gm-hero-grid" />
        <div className="relative mx-auto grid min-h-[690px] max-w-[1600px] lg:grid-cols-[1.03fr_.97fr]">
          <div className="flex flex-col justify-between px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pb-12 lg:pt-20">
            <div>
              <p className="gm-hero-kicker gm-eyebrow">Commerce growth, operated end-to-end</p>
              <h1 className="gm-hero-title mt-7 max-w-4xl text-[clamp(4.3rem,9.2vw,9.8rem)] font-semibold uppercase leading-[.76] tracking-[-.105em]">
                Make growth<br />feel <span className="text-[#e91a24]">inevitable.</span>
              </h1>
            </div>
            <div className="gm-hero-copy mt-12 grid max-w-xl gap-8 border-t border-white/20 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-lg leading-8 text-white/72">Go Massive is the commercial operating layer behind ambitious eCommerce brands—connecting marketplace execution, demand capture, conversion and expansion.</p>
              <Link href="/growth-audit" className="gm-button gm-button--red whitespace-nowrap">Get a growth audit <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="relative hidden min-h-full border-l border-white/15 lg:block"><CommerceSystemMap /><div className="gm-hero-index">01 / 05</div></div>
        </div>
      </section>

      <section className="bg-[#e91a24] text-white">
        <div className="mx-auto grid max-w-[1600px] sm:grid-cols-3">
          <div className="gm-ticker-cell"><span>Amazon</span><b>Marketplace ownership</b></div>
          <div className="gm-ticker-cell"><span>Performance</span><b>Demand worth capturing</b></div>
          <div className="gm-ticker-cell"><span>Commerce</span><b>Conversion that compounds</b></div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 border-b border-[#020d1f]/20 pb-12 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <p className="gm-eyebrow">How we create momentum</p>
            <h2 className="max-w-5xl text-[clamp(3.3rem,6.8vw,7.4rem)] font-semibold uppercase leading-[.81] tracking-[-.1em]">The whole system is the growth strategy.</h2>
          </div>
          <div className="gm-layer-list">
            {operatingLayers.map((layer, index) => <Reveal key={layer.number} delay={index * 90}><article className="gm-layer">
              <div className="gm-layer-number">{layer.number}</div>
              <div><h3>{layer.name}</h3><p>{layer.detail}</p></div>
              <ul>{layer.tags.map(tag => <li key={tag}><Check size={14} /> {tag}</li>)}</ul>
              <span className="gm-layer-arrow"><ArrowDownRight size={25} /></span>
              <div className="gm-layer-progress" style={{ animationDelay: `${index * 130}ms` }} />
            </article></Reveal>)}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-[#020d1f]/15 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="gm-eyebrow">Marketplace growth</p><h2 className="mt-7 text-[clamp(3.6rem,6.5vw,7.2rem)] font-semibold uppercase leading-[.79] tracking-[-.1em]">Stop managing channels.<br /><span className="text-[#e91a24]">Start directing</span> a business.</h2></div>
          <div className="gm-editorial-copy"><p>Amazon performance does not come from a better bid alone. It comes from the decisions between stock, catalogue, creative, advertising and reporting—made quickly, then measured honestly.</p><Link href="/services/amazon-ppc" className="gm-text-link">Explore Amazon growth <ArrowRight size={16} /></Link></div>
        </Reveal>
      </section>

      <section className="bg-[#020d1f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-end"><p className="gm-eyebrow text-[#ff5a61]">Proof, without the theatre</p><h2 className="max-w-5xl text-[clamp(3.4rem,6.4vw,7rem)] font-semibold uppercase leading-[.8] tracking-[-.1em]">The metric is only useful when you can see the move behind it.</h2></div>
          <div className="mt-14 grid gap-px bg-white/20 lg:grid-cols-[1.08fr_.92fr]">
            <article className="gm-case-number"><p className="gm-eyebrow text-white/55">Anonymous outcome / Amazon</p><div><span><StatCounter value="−42%" /></span><p>Total advertising cost of sale</p></div><p className="max-w-sm text-sm leading-6 text-white/60">Following a rebuilt marketplace system for an established outdoor and leisure brand.</p></article>
            <article className="gm-case-detail"><p className="gm-eyebrow text-[#e91a24]">What changed</p><div className="space-y-5"><p><b>01</b> Commercial decisions tied back to availability and conversion.</p><p><b>02</b> Account structure rebuilt around profitable demand.</p><p><b>03</b> Visibility increased through a clear reporting rhythm.</p></div><Link href="/case-studies/outdoor-leisure-marketplace-growth" className="gm-text-link text-white">Read the case study <ArrowRight size={16} /></Link></article>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f4f3ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]"><div className="grid gap-10 lg:grid-cols-[.64fr_1.36fr] lg:items-end"><p className="gm-eyebrow">The Go Massive record</p><h2 className="text-[clamp(3.4rem,6.3vw,6.9rem)] font-semibold uppercase leading-[.8] tracking-[-.1em]">Serious growth needs a team built to stay accountable.</h2></div><div className="mt-14 grid border-l border-t border-[#020d1f]/20 sm:grid-cols-2 lg:grid-cols-4">{agencyStats.map((stat, index) => <Reveal key={stat.label} delay={index * 90}><div className="gm-stat"><span>0{index + 1}</span><p><StatCounter value={stat.value} /></p><small>{stat.label}</small></div></Reveal>)}</div></Reveal>
      </section>

      <section className="gm-closing bg-[#e91a24] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"><Reveal className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><div><p className="gm-eyebrow text-white/70">Start with a growth audit</p><h2 className="mt-7 max-w-5xl text-[clamp(3.8rem,7vw,8rem)] font-semibold uppercase leading-[.78] tracking-[-.105em]">Find the move worth making next.</h2></div><div><p className="text-xl leading-8 text-white/85">Tell us where the business is constrained. We’ll establish the clearest opportunity—and whether Go Massive is the right team to act on it.</p><Link href="/growth-audit" className="gm-button gm-button--dark mt-9">Request a growth audit <ArrowRight size={16} /></Link></div></Reveal></section>
      <SiteFooter />
    </main>
  );
}
