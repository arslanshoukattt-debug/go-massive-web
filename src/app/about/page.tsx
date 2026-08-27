import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, Globe2, Target, Users } from "lucide-react";
import { Reveal } from "../../components/Reveal";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { StatCounter } from "../../components/StatCounter";
import { agencyStats } from "../../lib/case-studies";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Go Massive | eCommerce Growth Operating Partner",
  description:
    "Go Massive is a commercial operating partner for ambitious eCommerce brands and manufacturers, connecting marketplace operations, demand capture, conversion and expansion.",
  path: "/about",
});

const principles = [
  { title: "Commercial context first", description: "We begin with your goals, margins, market position, and constraints—not a standard agency checklist.", icon: Target },
  { title: "Hands-on accountability", description: "Strategy, execution, and reporting stay connected, with a clear owner behind every meaningful decision.", icon: Users },
  { title: "Built for modern commerce", description: "We understand the relationship between marketplaces, paid media, and the wider systems required for sustainable growth.", icon: Globe2 },
];

const operatingPrinciples = [
  "We diagnose before we prescribe.",
  "We prioritise commercial outcomes over vanity metrics.",
  "We keep strategy, execution, and reporting in the same operating rhythm.",
];

export default function AboutPage() {
  return (
    <main id="main" className="overflow-hidden bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(2,13,31,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(2,13,31,.06)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -right-32 top-0 -z-10 h-[640px] w-[640px] rounded-full border border-[#E91A24]/35" />
        <div className="absolute -right-8 top-28 -z-10 h-[410px] w-[410px] rounded-full border border-[#020D1F]/10" />
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">The Go Massive difference</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[.97] tracking-[-.06em] sm:text-6xl lg:text-7xl">A growth partner built for the work behind the numbers.</h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#596475]">Go Massive helps ambitious brands and manufacturers make better commercial decisions across the marketplaces and channels that drive modern commerce.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#020D1F]/10 bg-[#020D1F]/10 sm:grid-cols-4">
            {agencyStats.map((stat, index) => <Reveal key={stat.label} delay={index * 90}><div className="bg-white p-6"><p className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl"><StatCounter value={stat.value} /></p><p className="mt-2 text-sm leading-5 text-[#596475]">{stat.label}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#E91A24]">Our point of view</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Growth gets easier when the work is connected.</h2></div>
          <div className="max-w-2xl text-lg leading-8 text-[#596475]"><p>Brands do not need another supplier creating activity in isolation. They need a team that can connect channel strategy to commercial priorities, execute with discipline, and explain what should happen next.</p><p className="mt-6">That is the role Go Massive is built to play: making the systems behind growth more focused, measurable, and useful to the people accountable for the business.</p></div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={index * 90}>
                <article className="bg-white p-7 sm:p-8">
                  <span className="gm-num-editorial">0{index + 1}</span>
                  <Icon className="mt-8 text-[#E91A24]" size={24} />
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">{principle.title}</h3>
                  <p className="mt-4 leading-7 text-[#596475]">{principle.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div></section>

      <section className="border-y border-[#020D1F]/10 bg-white py-24 sm:py-32"><div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-10">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">How we work</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Clear priorities. Direct communication. Better decisions.</h2></div>
        <div className="grid gap-3">{operatingPrinciples.map((item, index) => <Reveal key={item} delay={index * 90}><div className="flex gap-4 rounded-2xl border border-[#020D1F]/10 bg-[#F7F8FA] p-5"><span className="gm-num-meta">{String(index + 1).padStart(2, "0")}</span><p className="font-semibold leading-6">{item}</p></div></Reveal>)}</div>
      </div></section>

      <section className="bg-[#F7F8FA] py-20 sm:py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">Where we work</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Built for international commerce.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#020D1F]/10 bg-white p-5"><p className="text-sm font-semibold">Austin, Texas</p><p className="mt-1 text-sm text-[#596475]">United States</p></div>
            <div className="rounded-2xl border border-[#020D1F]/10 bg-white p-5"><p className="text-sm font-semibold">Lahore, Punjab</p><p className="mt-1 text-sm text-[#596475]">Pakistan</p></div>
          </div>
        </div>
      </div></section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-white">A clearer next step</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Start with the opportunity in front of you.</h2></div>
        <Link href="/growth-audit" className="gm-button gm-button--dark">Request a Growth Audit <ArrowRight size={18} /></Link>
      </div></section>

      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
