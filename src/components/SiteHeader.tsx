"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
] as const;

const MOBILE_NAV_ID = "mobile-nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="gm-vt-header sticky top-0 z-50 border-b border-white/20 bg-[#07090A]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between gap-2 px-4 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex shrink-0" aria-label="Go Massive home">
          <Image src="/go-massive-wordmark-transparent.png" alt="Go Massive" width={220} height={34} priority sizes="220px" className="h-6 w-auto brightness-0 invert sm:h-8" />
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[.1em] text-white/75 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-[#E91A24]">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/growth-audit" className="inline-flex whitespace-nowrap bg-[#E91A24] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[.06em] transition hover:bg-white hover:text-[#07090A] sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[.08em]"><span className="sm:hidden">Audit ↗</span><span className="hidden sm:inline">Start an audit ↗</span></Link>
          <button ref={triggerRef} type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls={MOBILE_NAV_ID}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && <div id={MOBILE_NAV_ID} className="border-t border-white/15 bg-[#07090A] px-5 py-6 lg:hidden"><nav className="flex flex-col" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/15 py-5 text-xl font-semibold uppercase tracking-[-.04em]">{label}</Link>)}<Link href="/growth-audit" onClick={() => setOpen(false)} className="mt-6 bg-[#E91A24] px-5 py-4 text-center text-[11px] font-semibold uppercase tracking-[.1em]">Start a Growth Audit ↗</Link></nav></div>}
    </header>
  );
}
