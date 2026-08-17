import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Globe2, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Go Massive | eCommerce Growth Partner",
  description:
    "Go Massive is a paid-media and eCommerce growth partner for ambitious brands and manufacturers.",
};

const principles = [
  {
    title: "Commercial context first",
    description:
      "We begin with your goals, margins, market position, and constraints—not a standard agency checklist.",
    icon: Target,
  },
  {
    title: "Hands-on accountability",
    description:
      "Strategy, execution, and reporting stay connected, with a clear owner behind every meaningful decision.",
    icon: Users,
  },
  {
    title: "Built for modern commerce",
    description:
      "We understand the relationship between marketplaces, paid media, and the wider systems required for sustainable growth.",
    icon: Globe2,
  },
];

const operatingPrinciples = [
  "We diagnose before we prescribe.",
  "We prioritise commercial outcomes over vanity metrics.",
  "We keep strategy, execution, and reporting in the same operating rhythm.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#020D1F]">
      <header className="border-b border-[#020D1F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="/" aria-label="Go Massive home">
            <Image
              src="/go-massive-wordmark-transparent.png"
              alt="Go Massive"
              width={210}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#354052] md:flex" aria-label="Main navigation">
            <a className="transition hover:text-[#E91A24]" href="/services">Services</a>
            <a className="transition hover:text-[#E91A24]" href="/case-studies">Case studies</a>
            <a className="text-[#E91A24]" href="/about">About</a>
          </nav>
          <a href="/growth-audit" className="rounded-full bg-[#E91A24] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C9141D]">
            Book a Growth Audit
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-[#020D1F]/10 bg-white py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[34%] bg-[#F6F7F9] lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8">
          <div>
            <p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">
              The Go Massive difference
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              A growth partner built for the work behind the numbers.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#505A6A]">
            Go Massive helps ambitious brands and manufacturers make better paid-media decisions across the marketplaces and channels that drive modern commerce.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">
                Our point of view
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Growth gets easier when the work is connected.
              </h2>
            </div>
            <div className="max-w-2xl text-lg leading-8 text-[#505A6A]">
              <p>
                Brands do not need another supplier creating activity in isolation. They need a team that can connect channel strategy to commercial priorities, execute with discipline, and explain what should happen next.
              </p>
              <p className="mt-6">
                That is the role Go Massive is built to play: making the systems behind growth more focused, measurable, and useful to the people accountable for the business.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article className="bg-white p-7 sm:p-8" key={principle.title}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{principle.title}</h3>
                  <p className="mt-3 leading-7 text-[#5D6675]">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#020D1F] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="inline-flex border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              How we work
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Clear priorities. Direct communication. Better decisions.
            </h2>
          </div>
          <ul className="space-y-5">
            {operatingPrinciples.map((item) => (
              <li className="flex gap-4 text-lg leading-8 text-white/75" key={item}>
                <Check className="mt-1 shrink-0 text-[#E91A24]" size={20} strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[#020D1F]/10 bg-[#F6F7F9] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E91A24]">Where we work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Built for international commerce.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#020D1F]/10 bg-white p-5">
              <p className="text-sm font-semibold">Austin, Texas</p>
              <p className="mt-1 text-sm text-[#5D6675]">United States</p>
            </div>
            <div className="rounded-xl border border-[#020D1F]/10 bg-white p-5">
              <p className="text-sm font-semibold">Lahore, Punjab</p>
              <p className="mt-1 text-sm text-[#5D6675]">Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E91A24] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">A clearer next step</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Start with the opportunity in front of you.
            </h2>
          </div>
          <a href="/growth-audit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-[#020D1F] transition hover:bg-[#020D1F] hover:text-white">
            Book a Growth Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
