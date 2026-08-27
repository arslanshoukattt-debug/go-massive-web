import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const paths = [
  ["Explore the services", "/services"],
  ["Read the case studies", "/case-studies"],
  ["About Go Massive", "/about"],
] as const;

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-[#020D1F] text-white">
      <SiteHeader />
      <section className="flex flex-1 items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="gm-num-editorial gm-num-editorial--on-dark">404</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,8vw,7rem)] font-semibold uppercase leading-[.87] tracking-[-.06em]">This page is not part of the system.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">The address may have changed, or it never existed. Everything that does exist is one step away.</p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/growth-audit" className="gm-button gm-button--red">Get a growth audit <ArrowRight size={16} /></Link>
            <Link href="/" className="gm-button gm-button--ghost">Back to the homepage</Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8">
            {paths.map(([label, href]) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
                {label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
