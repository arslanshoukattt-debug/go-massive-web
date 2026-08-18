import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Reveal } from "../../../components/Reveal";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { StatCounter } from "../../../components/StatCounter";
import { caseStudies, getCaseStudy } from "../../../lib/case-studies";
import { pageMetadata } from "../../../lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return pageMetadata({
    title: `${caseStudy.label} Case Study | Go Massive`,
    description: caseStudy.summary,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <main className="bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="bg-[#020D1F] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"><ArrowLeft size={17} /> All case studies</Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[.18em] text-[#FF8A90]">{caseStudy.label}</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">{caseStudy.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">{caseStudy.summary}</p>
          <div className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 ${caseStudy.metrics.length === 1 ? "" : caseStudy.metrics.length === 2 ? "sm:grid-cols-2" : caseStudy.metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>{caseStudy.metrics.map((metric, index) => <Reveal key={metric.label} delay={index * 90}><div className="bg-[#081B38] p-5"><p className="text-3xl font-semibold tracking-tight text-white"><StatCounter value={metric.value} /></p><p className="mt-2 text-sm leading-5 text-white/55">{metric.label}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-[1120px] px-6 lg:px-10"><div className="grid gap-10 border-b border-[#020D1F]/10 pb-16 lg:grid-cols-[.7fr_1.3fr]"><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">Brand snapshot</p><dl className="grid gap-7 sm:grid-cols-2"><div><dt className="text-xs font-bold uppercase tracking-[.14em] text-[#687385]">Category</dt><dd className="mt-2 font-semibold">{caseStudy.category}</dd></div><div><dt className="text-xs font-bold uppercase tracking-[.14em] text-[#687385]">Marketplace</dt><dd className="mt-2 font-semibold">{caseStudy.marketplace}</dd></div><div><dt className="text-xs font-bold uppercase tracking-[.14em] text-[#687385]">Business stage</dt><dd className="mt-2 font-semibold">{caseStudy.businessStage}</dd></div><div><dt className="text-xs font-bold uppercase tracking-[.14em] text-[#687385]">Go Massive scope</dt><dd className="mt-2 font-semibold">{caseStudy.scope}</dd></div></dl></div>
        <div className="grid gap-10 border-b border-[#020D1F]/10 py-16 lg:grid-cols-[.7fr_1.3fr]"><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">The challenge</p><div className="space-y-5 text-lg leading-8 text-[#4E5A6B]">{caseStudy.challenge.map(item=><p key={item}>{item}</p>)}</div></div>
        <div className="grid gap-10 border-b border-[#020D1F]/10 py-16 lg:grid-cols-[.7fr_1.3fr]"><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">What Go Massive did</p><ul className="space-y-4">{caseStudy.execution.map(item=><li className="flex gap-4 text-lg leading-8 text-[#4E5A6B]" key={item}><Check size={19} className="mt-1.5 shrink-0 text-[#E91A24]" strokeWidth={3} />{item}</li>)}</ul></div>
        <div className="grid gap-10 py-16 lg:grid-cols-[.7fr_1.3fr]"><p className="text-xs font-bold uppercase tracking-[.18em] gm-text-red-safe">The outcome</p><div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10"><div className="space-y-5 text-lg leading-8 text-[#4E5A6B]">{caseStudy.result.map(item=><p key={item}>{item}</p>)}</div><div className="mt-10 border-t border-[#020D1F]/10 pt-7"><p className="text-sm font-bold uppercase tracking-[.14em] text-[#E91A24]">Takeaway</p><p className="mt-4 text-xl font-semibold leading-8 tracking-tight">{caseStudy.takeaway}</p></div></div></div></div></section>
      <section className="bg-[#E91A24] py-20 text-white"><div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-white/65">Your opportunity is different</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-.055em]">Start with the facts in your own account.</h2></div><a href="/growth-audit" className="gm-button gm-button--dark">Get a Growth Audit <ArrowRight size={18} /></a></div></section>
      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
