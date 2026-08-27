import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Go Massive | eCommerce Growth Agency",
  description:
    "Talk to Go Massive about Amazon growth, performance marketing, or wider eCommerce operations. Offices in Austin, Texas and Lahore, Pakistan.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="bg-[#020D1F] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FF8A90]">Contact</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,5.6vw,5.4rem)] font-semibold uppercase leading-[.92] tracking-[-.04em]">Start the conversation.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">The fastest route to a useful answer is the Growth Audit. For everything else, email works.</p>
        </div>
      </section>

      <section className="flex-1 py-16 sm:py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          <a href="mailto:info@go-massive.com" className="group rounded-3xl border border-[#020D1F]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <Mail className="text-[#E91A24]" size={24} />
            <p className="mt-10 text-xl font-semibold tracking-tight">Email</p>
            <p className="mt-2 text-[#596475]">info@go-massive.com</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold gm-text-red-safe">Write to us <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
          </a>
          <a href="https://www.linkedin.com/company/go-massive/" target="_blank" rel="noreferrer" className="group rounded-3xl border border-[#020D1F]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <ExternalLink className="text-[#E91A24]" size={24} />
            <p className="mt-10 text-xl font-semibold tracking-tight">LinkedIn</p>
            <p className="mt-2 text-[#596475]">Follow the company page</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold gm-text-red-safe">Open LinkedIn <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
          </a>
          <div className="rounded-3xl border border-[#020D1F]/10 bg-white p-7">
            <MapPin className="text-[#E91A24]" size={24} />
            <p className="mt-10 text-xl font-semibold tracking-tight">Where we work</p>
            <p className="mt-2 text-[#596475]">Austin, Texas — United States</p>
            <p className="mt-1 text-[#596475]">Lahore, Punjab — Pakistan</p>
          </div>
        </div>
      </div></section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-white">The better starting point</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Tell us about the account, not just the ambition.</h2></div>
        <Link href="/growth-audit" className="gm-button gm-button--dark">Request a Growth Audit <ArrowRight size={18} /></Link>
      </div></section>
      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
