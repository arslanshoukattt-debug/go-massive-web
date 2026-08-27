import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Growth", links: [["Amazon Growth", "/services#amazon-growth"], ["Amazon PPC", "/services/amazon-ppc"], ["Google Ads", "/services/google-ads"], ["Meta Ads", "/services/meta-ads"], ["Marketplace Expansion", "/services#commerce-expansion"]] },
  { title: "Company", links: [["Case Studies", "/case-studies"], ["About Go Massive", "/about"], ["Growth Audit", "/growth-audit"], ["Contact", "/contact"]] },
];

export function SiteFooter() {
  return <footer className="gm-vt-footer bg-[#07090A] text-white">
    <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-16 border-b border-white/20 pb-14 lg:grid-cols-[1.4fr_.6fr_1fr] lg:gap-10">
        <div><Link href="/" aria-label="Go Massive home" className="inline-flex"><Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={260} height={40} sizes="260px" className="h-9 w-auto brightness-0 invert" /></Link><p className="mt-7 max-w-md text-xl leading-8 tracking-[-.03em] text-white/65">The commercial operating system for brands that expect more from every marketplace.</p></div>
        <div className="grid grid-cols-2 gap-8">{columns.map(column => <div key={column.title}><p className="text-[10px] font-medium uppercase tracking-[.16em] gm-text-red-safe--on-dark">{column.title}</p><ul className="mt-5 space-y-3 text-sm text-white/65">{column.links.map(([label, href]) => <li key={label}><Link href={href} className="transition hover:text-[#E91A24]">{label}</Link></li>)}</ul></div>)}</div>
        <div className="lg:border-l lg:border-white/20 lg:pl-10"><p className="text-[10px] font-medium uppercase tracking-[.16em] gm-text-red-safe--on-dark">Start with a signal</p><p className="mt-5 text-2xl font-semibold leading-7 tracking-[-.05em]">Find the commercial move worth making next.</p><Link href="/growth-audit" className="mt-8 inline-flex bg-[#E91A24] px-5 py-4 text-[11px] font-semibold uppercase tracking-[.1em] transition hover:bg-white hover:text-[#07090A]">Request an audit ↗</Link></div>
      </div>
      <div className="flex flex-col gap-5 pt-7 text-[11px] uppercase tracking-[.08em] text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Go Massive. All rights reserved.</p><p>Austin, Texas · Lahore, Pakistan</p><span className="flex gap-6"><Link className="transition hover:text-white" href="/privacy">Privacy</Link><a className="transition hover:text-white" href="https://www.linkedin.com/company/go-massive/" target="_blank" rel="noreferrer">LinkedIn ↗</a></span></div>
    </div>
  </footer>;
}
