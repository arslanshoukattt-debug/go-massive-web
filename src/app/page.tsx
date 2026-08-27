import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, Check, CircleDollarSign, Mail, Package, PieChart, ShoppingCart, TrendingDown, Users } from "lucide-react";
import { GrowthEngine } from "../components/GrowthEngine";
import { HeroGrowthVisual } from "../components/HeroGrowthVisual";
import { Reveal } from "../components/Reveal";
import { RotatingWord } from "../components/RotatingWord";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StatCounter } from "../components/StatCounter";
import { Testimonials } from "../components/Testimonials";
import { HeroRating, TrustBadges } from "../components/TrustSignals";
import { caseStudies } from "../lib/case-studies";
import { ENGINE_NODES } from "../lib/engine-nodes";

// Contact channels beyond email/audit render only once real links exist -
// fill these in and the buttons appear in the closing section automatically.
const WHATSAPP_URL = "";
const MEETING_URL = "";

// Owner-cleared client logos (Aug 2026) - single-line marquee in section 3.
// Per-logo heights equalise visual mass: wide wordmarks run shorter, compact
// square marks taller, so no logo reads bigger than its neighbours.
const brandLogos = [
  { name: "Hallowood Furniture", src: "/logos/hallowood.png", h: "h-9" },
  { name: "Bigfoot Bushcraft", src: "/logos/bigfoot-bushcraft.png", h: "h-14" },
  { name: "Calzitaly", src: "/logos/calzitaly.png", h: "h-9" },
  { name: "Eatwater", src: "/logos/eatwater.png", h: "h-12" },
  { name: "Witt", src: "/logos/witt.png", h: "h-11" },
  { name: "Weymouth", src: "/logos/weymouth.png", h: "h-14" },
  { name: "Love & Peanut", src: "/logos/love-and-peanut.png", h: "h-9" },
  { name: "Bigg Golf", src: "/logos/bigg-golf.png", h: "h-10" },
  { name: "DBZ Beds", src: "/logos/dbz-beds.png", h: "h-11" },
  { name: "Hot Star Honey", src: "/logos/hot-star-honey.png", h: "h-14" },
  { name: "Welnesse", src: "/logos/welnesse.png", h: "h-12" },
  { name: "funSLINGER", src: "/logos/funslinger.png", h: "h-10" },
  { name: "Qnaturals", src: "/logos/qnaturals.png", h: "h-12" },
];

// Owner-provided certifications (Aug 2026), rendered in the strip under the hero.
const certifications = [
  { name: "Amazon Ads", label: "Verified Partner" },
  { name: "Amazon SPN", label: "Verified Partner" },
  { name: "Amazon SAS", label: "Core" },
  { name: "Google Ads", label: "Partner" },
  { name: "Clutch", label: "5.0-rated agency" },
];

const proofStats = [
  { value: "7+", label: "Years operating in eCommerce" },
  { value: "50+", label: "Brands managed" },
  { value: "$200M+", label: "Revenue managed" },
  { value: "92%", label: "Average annual client retention" },
];

const problems = [
  { icon: CircleDollarSign, title: "Ads get more expensive, not more efficient", detail: "CPCs climb, TACoS creeps up, and the account starts buying the same sales for more money." },
  { icon: ShoppingCart, title: "Traffic lands on listings that can't convert", detail: "Weak content and creative turn paid demand into browsing instead of buying." },
  { icon: Package, title: "Operations quietly cap the growth", detail: "Stockouts, catalogue drift, and compliance issues put a ceiling on what advertising can scale." },
  { icon: Users, title: "Fragmented partners, fragmented accountability", detail: "An ads agency, a listing freelancer, three tools — and nobody owning the outcome." },
  { icon: TrendingDown, title: "Revenue up, margin down", detail: "Top-line growth that costs more than it returns isn't growth. It's expensive activity." },
  { icon: PieChart, title: "No single commercial view", detail: "Decisions get made from channel reports instead of one honest picture of the business." },
];

const channels = [
  { name: "Amazon", role: "The centre of gravity — operations, advertising, content, and growth run as one account system.", flagship: true },
  { name: "Walmart", role: "The second engine. Expansion that leverages the catalogue and data you already have." },
  { name: "TikTok Shop", role: "Where demand creation meets checkout — creative-led growth on the fastest-moving channel." },
  { name: "eBay", role: "Wholesale and white-label volume that most brands leave unmanaged." },
  { name: "Shopify / DTC", role: "Owned margin, retention, and the brand experience marketplaces can't give you." },
  { name: "Temu & emerging", role: "New channels tested when the economics earn it — not because they're new." },
];

const techStack = [
  { title: "AI-assisted research", detail: "Category, keyword, and competitor intelligence gathered in hours instead of weeks.", wide: true, dark: true },
  { title: "Advertising automation", detail: "Bid and budget guardrails that act between human reviews." },
  { title: "Marketplace analytics", detail: "One commercial view across every channel and account we run." },
  { title: "Listing intelligence", detail: "Content and conversion signals tracked at SKU level." },
  { title: "Workflow automation", detail: "Operational busywork removed from the critical path." },
  { title: "A reporting rhythm", detail: "Decisions and the reasons behind them — not activity dashboards." },
];

export default function Home() {
  const [featuredCase, ...otherCases] = caseStudies;

  return (
    <main id="main" className="overflow-hidden bg-[#f4f3ef] text-[#020d1f]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">

      {/* 1 — HERO: experience -> problem -> promise -> system -> action, one viewport on desktop */}
      <section className="gm-hero relative flex flex-col bg-white text-[#020d1f] lg:h-[calc(100svh-76px)] lg:max-h-[940px] lg:min-h-[600px]">
        <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 lg:min-h-0 lg:grid-cols-[1.06fr_.94fr]">
          <div className="flex flex-col justify-center px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:py-10">
            <p className="gm-text-red-safe font-mono text-[15px] font-bold uppercase tracking-[.14em]">7+ Years of Creating eCommerce Growth</p>
            <HeroRating />
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,5.6vw,6.5rem)] font-semibold uppercase leading-[.85] tracking-[-.06em]">
              <span className="gm-hero-line">Build growth that&rsquo;s</span>
              <span className="gm-hero-line text-[#e91a24]">
                <span className="sr-only">Inevitable.</span>
                <RotatingWord words={["Inevitable", "Predictable", "Repeatable", "Scalable"]} />
              </span>
            </h1>
            <div className="gm-hero-copy mt-5 max-w-xl border-t border-[#020d1f]/20 pt-4">
              <p className="text-lg leading-8 text-[#020d1f]/72 lg:text-[19px]">Fragmented partners get paid whether you grow or not. We run strategy, operations, advertising, creative, and technology as one system — with economics aligned to your growth.</p>
            </div>
            <div className="gm-hero-copy mt-6"><TrustBadges /></div>
            <div className="gm-hero-ctas mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/growth-audit" className="gm-button gm-button--red whitespace-nowrap">Book a growth call <ArrowRight size={16} /></Link>
              <a href="#growth-engine" className="gm-button gm-button--ghost whitespace-nowrap">See how we work</a>
            </div>
          </div>
          <div className="relative hidden min-h-full border-l border-[#020d1f]/15 lg:block"><HeroGrowthVisual /></div>
        </div>
        <div className="px-5 pb-8 pt-2 sm:px-8 lg:hidden">
          <p className="gm-eyebrow gm-text-red-safe">Go Massive — Operating Layer</p>
          <div className="gm-engine-strip mt-4" aria-label="The six commercial functions Go Massive coordinates">
            {ENGINE_NODES.map((node) => (
              <article key={node.label}><b>{node.label}</b><p>{node.detail}</p></article>
            ))}
          </div>
        </div>
      </section>

      {/* 1b — RECOGNITIONS & CERTIFICATIONS (owner-provided, Aug 2026) — pure typographic row, no containers */}
      <section className="border-b border-[#020d1f]/10 bg-white px-5 py-8 sm:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-[1600px] flex-col gap-7 lg:flex-row lg:items-center lg:gap-16">
          <p className="gm-eyebrow gm-text-red-safe shrink-0 lg:max-w-[150px]">Recognitions &amp; certifications</p>
          <div className="flex flex-1 flex-wrap items-center gap-x-12 gap-y-6 lg:justify-between">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className="text-[16px] font-semibold leading-5 tracking-[-.02em]">{cert.name}</p>
                <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#596475]">{cert.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2 — PROBLEM: centered kicker, description left / headline right, icon lattice on white with red accents */}
      <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-36 -z-10 h-[540px] w-[540px] rounded-full border border-[#E91A24]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-28 bottom-10 -z-10 h-[340px] w-[340px] rounded-full border border-[#E91A24]/10" aria-hidden="true" />
        <Reveal className="mx-auto max-w-[1600px]">
          <p className="text-center text-[19px] font-bold uppercase tracking-[.12em] text-[#E91A24] sm:text-[21px]">Where brands get stuck</p>
          <div className="mt-10 grid gap-8 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
            <p className="max-w-lg text-lg leading-8 text-[#020d1f]/70 sm:text-[19px] lg:justify-self-end lg:text-right">By the time revenue flattens, the cause is usually spread across the account — and no single-channel partner can see all of it.</p>
            <h2 className="max-w-3xl text-[clamp(2.2rem,4.2vw,4.2rem)] font-bold uppercase leading-[.92] tracking-[-.045em] lg:border-l lg:border-[#020d1f]/15 lg:pl-14">Growth rarely breaks in one place<span className="text-[#E91A24]">.</span></h2>
          </div>
          <div className="grid gap-px border-y border-[#020d1f]/15 bg-[#020d1f]/15 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Reveal key={problem.title} delay={index * 60} className="bg-white">
                  <div className="group relative flex h-full items-start gap-5 px-6 py-9 lg:px-8 lg:py-10">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#E91A24]/10 transition-colors duration-300 group-hover:bg-[#E91A24]"><Icon size={24} strokeWidth={1.8} className="text-[#E91A24] transition-colors duration-300 group-hover:text-white" aria-hidden="true" /></span>
                    <div>
                      <h3 className="max-w-[16rem] text-[19px] font-semibold leading-snug tracking-[-.02em]">{problem.title}</h3>
                      <p className="mt-2 max-w-sm text-[14.5px] leading-6 text-[#596475]">{problem.detail}</p>
                    </div>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#E91A24] transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-12 border-l-[3px] border-[#E91A24] pl-6 text-xl leading-8 tracking-[-.02em] sm:text-2xl"><span className="font-semibold">Every one of these is a system problem.</span> <span className="text-[#020d1f]/70">Fixing them one silo at a time is how brands stay stuck.</span></p>
        </Reveal>
      </section>

      {/* 3 — BRANDS: clean logo cloud, logos only (owner direction, Aug 2026) */}
      <section className="border-y border-[#020d1f]/15 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <Reveal className="mx-auto max-w-[1600px]">
          <h2 className="text-center text-[clamp(1.5rem,2.6vw,2.3rem)] font-bold uppercase tracking-[-.03em]">Trusted by leading brands worldwide<span className="text-[#E91A24]">.</span></h2>
          <div className="gm-logo-marquee mt-12" aria-label="Logos of brands Go Massive has worked with">
            <div className="gm-logo-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="gm-logo-set" aria-hidden={copy === 1}>
                  {brandLogos.map((brand) => (
                    // eslint-disable-next-line @next/next/no-img-element -- marquee needs natural-width PNGs, no optimizer frame
                    <img key={brand.name} src={brand.src} alt={copy === 0 ? brand.name : ""} loading="lazy" className={`${brand.h} w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 text-center text-xs leading-5 text-[#687385]">Logos shown with permission · 50+ brands and 200+ accounts managed across categories, marketplaces, and growth stages</p>
        </Reveal>
      </section>

      {/* 4 — THE GROWTH ENGINE: how the system actually works */}
      <section id="growth-engine" className="bg-white px-5 py-20 text-[#020d1f] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="gm-eyebrow gm-text-red-safe">The Growth Engine</p>
              <h2 className="mt-6 max-w-xl text-[clamp(2.1rem,8.5vw,6rem)] font-semibold uppercase leading-[.87] tracking-[-.05em]">One system. Every lever that moves revenue.</h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-[#020d1f]/70">Not an ads agency with add-ons. An operating engine where each stage feeds the next — so wins compound instead of leaking between vendors.</p>
              <Link href="/services" className="gm-text-link mt-9">Explore the services <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <GrowthEngine />
        </div>
      </section>

      {/* 5 — CHANNELS: where the engine runs */}
      <section className="border-y border-[#020d1f]/15 bg-white px-5 py-20 text-[#020d1f] sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 pb-12 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <div><p className="gm-eyebrow gm-text-red-safe">Sales channels</p><p className="gm-section-support gm-section-support--dark">Brands shouldn&rsquo;t need five agencies for five channels. Priorities get set commercially — not per silo.</p></div>
            <h2 className="max-w-5xl text-[clamp(2.1rem,8.5vw,6rem)] font-semibold uppercase leading-[.87] tracking-[-.05em]">Every channel that matters. One accountable partner.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <Reveal key={channel.name} delay={index * 70}>
                <Link href="/services" className="gm-channel h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3>{channel.name}</h3>
                    {channel.flagship && <span className="gm-eyebrow shrink-0 bg-[#E91A24] px-2.5 py-1.5 text-white">Flagship</span>}
                  </div>
                  <div>
                    <p>{channel.role}</p>
                    <span className="gm-text-red-safe mt-5 inline-flex items-center gap-2 text-sm font-semibold">Explore <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 6 — DIFFERENTIATION: the aligned model */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 border-b border-[#020d1f]/20 pb-12 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <div><p className="gm-eyebrow gm-text-red-safe">The aligned model</p><p className="gm-section-support">The traditional agency stack gets paid whether you grow or not. We built the opposite.</p></div>
            <h2 className="max-w-5xl text-[clamp(2.1rem,8.5vw,6.6rem)] font-semibold uppercase leading-[.87] tracking-[-.05em]">We win when you grow. Literally.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal><div className="gm-model-col h-full">
              <p className="gm-eyebrow text-[#596475]">The traditional agency</p>
              <div className="mt-8">
                <div className="gm-model-step"><span className="gm-num-meta">01</span><div><b>Large setup fee</b><small>Paid before any work has proven anything.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">02</span><div><b>Heavy monthly retainer</b><small>Due on the first of the month, regardless of results.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">03</span><div><b>Percentage of ad spend</b><small>The incentive points at spending more, not earning more.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">04</span><div><b>Agency gets paid either way</b><small>Growth is your problem. Invoices are theirs.</small></div></div>
              </div>
              <p className="gm-model-verdict text-[#596475]">The brand carries the risk</p>
            </div></Reveal>
            <Reveal delay={120}><div className="gm-model-col gm-model-col--gm h-full">
              <p className="gm-eyebrow gm-text-red-safe">The Go Massive model</p>
              <div className="mt-8">
                <div className="gm-model-step"><span className="gm-num-meta">01</span><div><b>Lean operating retainer</b><small>Covers the dedicated team, tools, and infrastructure your account runs on — not our profit margin.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">02</span><div><b>Full-system execution</b><small>Strategy, operations, advertising, creative, and technology as one accountable engine.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">03</span><div><b>Growth</b><small>Measured commercially — revenue, efficiency, and margin. Not activity.</small></div></div>
                <div className="gm-model-step"><span className="gm-num-meta">04</span><div><b>Shared upside</b><small>Our real earnings come from a share of the growth we create. No growth, no upside — for either of us.</small></div></div>
              </div>
              <p className="gm-model-verdict gm-text-red-safe">We carry the risk with you</p>
            </div></Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[#020d1f]/20 pt-10 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl"><StatCounter value={stat.value} /></p>
                <p className="mt-2 max-w-[220px] text-sm leading-5 text-[#596475]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-.02em]">Aligned incentives aren&rsquo;t a slogan here. They&rsquo;re the fee structure.</p>
            <Link href="/growth-audit" className="gm-text-link shrink-0">Ask how the model works <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      {/* 7 — TECHNOLOGY: the operating stack */}
      <section className="border-y border-[#020d1f]/15 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 pb-12 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <div><p className="gm-eyebrow gm-text-red-safe">The stack</p><p className="gm-section-support">Every account runs on an internal stack that compresses the time between signal and action.</p></div>
            <h2 className="max-w-5xl text-[clamp(2.1rem,8vw,6rem)] font-semibold uppercase leading-[.87] tracking-[-.05em]">Humans make the decisions. Technology makes us faster.</h2>
          </div>
          <div className="gm-bento">
            {techStack.map((cell, index) => (
              <Reveal key={cell.title} delay={index * 60} className={cell.wide ? "gm-bento-cell--wide" : ""}>
                <article className={`gm-bento-cell h-full ${cell.dark ? "gm-bento-cell--dark" : ""}`}>
                  <span className="gm-num-meta">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{cell.title}</h3><p>{cell.detail}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xl font-medium leading-8 tracking-[-.02em]">Faster decisions. Faster execution. Fewer blind spots. That&rsquo;s the actual advantage — not the word &ldquo;AI&rdquo;.</p>
        </Reveal>
      </section>

      {/* 8 — PROOF: featured case study + supporting results */}
      <section className="bg-[#f4f3ef] px-5 py-20 text-[#020d1f] sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 pb-12 lg:grid-cols-[.64fr_1.36fr] lg:items-end">
            <div><p className="gm-eyebrow gm-text-red-safe">Proof</p><p className="gm-section-support gm-section-support--dark">Documented engagements with the mechanism behind every number. Identities stay confidential.</p></div>
            <h2 className="max-w-5xl text-[clamp(2.1rem,8.5vw,6.2rem)] font-semibold uppercase leading-[.87] tracking-[-.05em]">The numbers matter. The mechanism matters more.</h2>
          </div>
          <div className="grid gap-px bg-[#020d1f]/15 lg:grid-cols-[1.15fr_.85fr]">
            <article className="flex flex-col justify-between bg-white p-8 sm:p-10">
              <div>
                <p className="gm-eyebrow text-[#596475]">{featuredCase.label}</p>
                <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">{featuredCase.title}</h3>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden border border-[#020d1f]/15 bg-[#020d1f]/10 sm:grid-cols-2">
                {featuredCase.metrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="bg-white p-5">
                    <p className="text-3xl font-semibold tracking-tight sm:text-4xl"><StatCounter value={metric.value} /></p>
                    <p className="mt-2 text-sm leading-5 text-[#596475]">{metric.label}</p>
                  </div>
                ))}
              </div>
              <Link href={`/case-studies/${featuredCase.slug}`} className="gm-text-link mt-9">Read the full case study <ArrowRight size={16} /></Link>
            </article>
            <div className="grid gap-px bg-[#020d1f]/15">
              {otherCases.slice(0, 3).map((caseStudy) => (
                <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}`} className="group flex flex-col justify-between bg-white p-6 transition hover:bg-[#F7F8FA]">
                  <p className="gm-eyebrow text-[#596475]">{caseStudy.label}</p>
                  <div className="mt-5 flex items-end justify-between gap-6">
                    <p className="max-w-md font-semibold leading-6">{caseStudy.title}</p>
                    <ArrowRight className="gm-text-red-safe shrink-0 transition group-hover:translate-x-1" size={18} />
                  </div>
                </Link>
              ))}
              <Link href="/case-studies" className="flex items-center justify-between bg-[#E91A24] p-6 font-semibold text-white transition hover:bg-[#020d1f]">All case studies <ArrowRight size={18} /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9 — TESTIMONIALS: renders once real quotes exist in lib/testimonials.ts */}
      <Testimonials />

      {/* 10 — CONVERSION */}
      <section className="gm-closing bg-[#e91a24] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <p className="gm-eyebrow text-white">Talk to an operator</p>
            <h2 className="mt-7 max-w-5xl text-[clamp(2.2rem,9vw,7.4rem)] font-semibold uppercase leading-[.85] tracking-[-.06em]">You&rsquo;ve seen how we work. Let&rsquo;s talk about where you&rsquo;re stuck.</h2>
          </div>
          <div>
            <p className="text-xl leading-8 text-white">A direct conversation about your account — constraints, opportunities, and whether the model fits. No pitch deck.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/growth-audit" className="gm-button gm-button--dark">Book a growth call <ArrowRight size={16} /></Link>
              <a href="mailto:info@go-massive.com" className="gm-button gm-button--ghost-on-dark">Email us <Mail size={16} /></a>
              {WHATSAPP_URL && <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="gm-button gm-button--ghost-on-dark">WhatsApp</a>}
              {MEETING_URL && <a href={MEETING_URL} target="_blank" rel="noreferrer" className="gm-button gm-button--ghost-on-dark">Book a meeting</a>}
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-white"><Check size={16} strokeWidth={3} /> Clear next steps — even if we&rsquo;re not the right fit.</p>
          </div>
        </Reveal>
      </section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
