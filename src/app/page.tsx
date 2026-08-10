import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Globe2,
  Menu,
  Search,
  Target,
} from "lucide-react";

const capabilities = [
  "Amazon PPC management",
  "Google Ads and Meta Ads",
  "Marketplace growth strategy",
];

const channels = [
  { label: "Amazon", value: "Primary channel", width: "w-[88%]" },
  { label: "Google", value: "Demand capture", width: "w-[68%]" },
  { label: "Meta", value: "Demand creation", width: "w-[52%]" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#020D1F]">
      <section className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center justify-between py-6" aria-label="Main navigation">
            <a href="/" className="inline-flex items-center" aria-label="Go Massive home">
              <Image
                src="/go-massive-logo.png"
                alt="Go Massive"
                width={210}
                height={64}
                priority
                className="h-14 w-auto"
              />
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium text-[#354052] md:flex">
              <a className="transition hover:text-[#E91A24]" href="#services">Services</a>
              <a className="transition hover:text-[#E91A24]" href="#approach">Our approach</a>
              <a className="transition hover:text-[#E91A24]" href="#proof">Proof</a>
            </div>

            <a
              href="#growth-audit"
              className="hidden rounded-full bg-[#E91A24] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E91A24]/20 transition hover:bg-[#C9141D] md:inline-flex"
            >
              Book a Growth Audit
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className="rounded-lg border border-[#020D1F]/15 p-2 text-[#020D1F] md:hidden"
            >
              <Menu size={20} />
            </button>
          </nav>

          <div className="grid gap-14 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">
                Paid media for ambitious brands
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-[#020D1F] sm:text-6xl lg:text-7xl">
                Make every growth dollar work harder.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#505A6A]">
                Go Massive helps brands and manufacturers turn Amazon PPC, Google Ads, and Meta Ads into a disciplined engine for profitable scale.
              </p>

              <div id="growth-audit" className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@go-massive.com?subject=Growth%20Audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E91A24] px-6 py-4 font-semibold text-white shadow-xl shadow-[#E91A24]/20 transition hover:bg-[#C9141D]"
                >
                  Get your Growth Audit
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#020D1F]/15 bg-white px-6 py-4 font-semibold text-[#020D1F] transition hover:border-[#020D1F]/35 hover:bg-[#020D1F] hover:text-white"
                >
                  See how we work
                  <ChevronRight size={18} />
                </a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm text-[#4B5565] sm:grid-cols-3 sm:gap-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2">
                    <Check className="mt-0.5 shrink-0 text-[#E91A24]" size={16} strokeWidth={3} />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative" id="approach">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-[#E91A24]/10" />
              <div className="rounded-[1.5rem] border border-[#020D1F]/10 bg-white p-5 shadow-[0_24px_70px_rgba(2,13,31,0.14)] sm:p-7">
                <div className="flex items-start justify-between border-b border-[#020D1F]/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E91A24]">Growth operating system</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight">One accountable strategy.</h2>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#020D1F] text-white">
                    <BarChart3 size={19} />
                  </div>
                </div>

                <div id="services" className="mt-6 space-y-5">
                  {channels.map((channel) => (
                    <div key={channel.label}>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <div className="flex items-center gap-3 font-semibold">
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#FFF1F2] text-[#E91A24]">
                            <Target size={16} />
                          </span>
                          {channel.label}
                        </div>
                        <span className="text-xs text-[#6B7280]">{channel.value}</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-[#020D1F]/8">
                        <div className={`h-2 rounded-full bg-[#E91A24] ${channel.width}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-[#020D1F] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[#E91A24]">
                      <Search size={17} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Built around your business</p>
                      <p className="mt-0.5 text-xs leading-5 text-white/60">Your objectives, margins, marketplace position, and next best opportunity.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p id="proof" className="mt-5 max-w-md text-sm leading-6 text-[#697386]">
                Strategy, execution, and transparent reporting. No borrowed playbooks and no vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="border-y border-[#020D1F]/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="inline-flex items-center gap-2 border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">
                Built for the operators behind the brand
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.045em] text-[#020D1F] sm:text-5xl">
                Paid media built for brands ready to scale.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#505A6A]">
              You do not need another disconnected marketing supplier. You need a growth partner that understands your marketplace, your margins, and the decisions behind every advertising dollar.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#020D1F]/10 bg-[#020D1F]/10 md:grid-cols-3">
            <article className="bg-white p-7 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]">
                <Building2 size={21} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Brands and manufacturers</h3>
              <p className="mt-3 leading-7 text-[#5D6675]">
                For teams with a real product, a serious growth target, and a need for accountable execution.
              </p>
            </article>

            <article className="bg-white p-7 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]">
                <Target size={21} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Performance-first channels</h3>
              <p className="mt-3 leading-7 text-[#5D6675]">
                Amazon PPC, Google Ads, and Meta Ads aligned around the commercial outcome that matters to your business.
              </p>
            </article>

            <article className="bg-white p-7 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF1F2] text-[#E91A24]">
                <Globe2 size={21} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Built for international commerce</h3>
              <p className="mt-3 leading-7 text-[#5D6675]">
                Supporting growth-minded businesses competing across the USA, UK, Canada, and Germany.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#020D1F] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="max-w-2xl text-lg leading-8 text-white/80">
            Clear strategy. Hands-on execution. Reporting that makes the next decision easier.
          </p>
          <a href="#growth-audit" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition hover:text-[#FF7A81]">
            Start with a Growth Audit <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section id="core-services" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 border-l-2 border-[#E91A24] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-[#5D6675]">
              What we do best
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#020D1F] sm:text-5xl">
              Paid media first. A complete commerce partner when you need more.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#505A6A]">
              We lead with the channels that create measurable demand and build a broader growth system around them when it makes commercial sense.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="group rounded-2xl border border-[#020D1F]/10 bg-[#020D1F] p-7 text-white transition sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold tracking-[0.16em] text-[#FF7A81]">01</span>
                <Target className="text-[#E91A24]" size={25} />
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight">Amazon PPC Management</h3>
              <p className="mt-4 leading-7 text-white/65">
                Campaign structure, keyword strategy, budget control, and ongoing optimisation for Amazon sellers who want profitable scale.
              </p>
              <a href="#growth-audit" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#FF7A81]">
                Explore Amazon PPC <ArrowRight size={16} />
              </a>
            </article>

            <article className="group rounded-2xl border border-[#020D1F]/10 bg-white p-7 transition hover:border-[#E91A24]/45 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold tracking-[0.16em] text-[#E91A24]">02</span>
                <Search className="text-[#E91A24]" size={25} />
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight">Google Ads</h3>
              <p className="mt-4 leading-7 text-[#5D6675]">
                Capture high-intent demand with search-led campaigns designed around how customers discover and compare your products.
              </p>
              <a href="#growth-audit" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#020D1F] transition group-hover:text-[#E91A24]">
                Explore Google Ads <ArrowRight size={16} />
              </a>
            </article>

            <article className="group rounded-2xl border border-[#020D1F]/10 bg-white p-7 transition hover:border-[#E91A24]/45 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-bold tracking-[0.16em] text-[#E91A24]">03</span>
                <BarChart3 className="text-[#E91A24]" size={25} />
              </div>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight">Meta Ads</h3>
              <p className="mt-4 leading-7 text-[#5D6675]">
                Build demand and turn creative, audiences, and landing pages into a more effective paid social acquisition engine.
              </p>
              <a href="#growth-audit" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#020D1F] transition group-hover:text-[#E91A24]">
                Explore Meta Ads <ArrowRight size={16} />
              </a>
            </article>
          </div>

          <div className="mt-10 border-t border-[#020D1F]/10 pt-8 sm:flex sm:items-start sm:justify-between sm:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5D6675]">Extended commerce support</p>
              <p className="mt-3 max-w-2xl leading-7 text-[#5D6675]">
                When your growth plan needs it, our team also supports the systems around your media activity.
              </p>
            </div>
            <div className="mt-5 flex max-w-xl flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#020D1F] sm:mt-0">
              {[
                "Shopify growth",
                "Website development",
                "SEO and email",
                "Creative direction",
                "eBay and Temu management",
              ].map((service) => (
                <span key={service} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E91A24]" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
