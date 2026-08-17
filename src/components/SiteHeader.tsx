"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="gm-vt-header sticky top-0 z-50 border-b border-white/20 bg-[#07090A]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex shrink-0" aria-label="Go Massive home">
          <Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={220} height={34} priority className="h-8 w-auto brightness-0 invert" />
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[.1em] text-white/75 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-[#E91A24]">{label}</Link>)}
        </nav>
        <Link href="/growth-audit" className="hidden bg-[#E91A24] px-5 py-3 text-[11px] font-semibold uppercase tracking-[.08em] transition hover:bg-white hover:text-[#07090A] sm:inline-flex">Start an audit ↗</Link>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center border border-white/25 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && <div className="border-t border-white/15 bg-[#07090A] px-5 py-6 lg:hidden"><nav className="flex flex-col" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/15 py-5 text-xl font-semibold uppercase tracking-[-.04em]">{label}</Link>)}<Link href="/growth-audit" onClick={() => setOpen(false)} className="mt-6 bg-[#E91A24] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[.1em]">Start a Growth Audit ↗</Link></nav></div>}
    </header>
  );
}
