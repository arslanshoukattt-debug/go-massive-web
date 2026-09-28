"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { serviceGroups } from "../lib/service-navigation";

const navItems = [
  ["Our work", "/case-studies"],
  ["About us", "/about"],
] as const;
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 851px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);
  useEffect(() => {
    if (!open && !servicesOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (servicesOpen) {
          setServicesOpen(false);
          servicesRef.current?.focus();
        } else {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, servicesOpen]);
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header
      className="site-header"
      ref={headerRef}
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        )
          close();
      }}
    >
      <div className="container header-inner">
        <Link
          href="/"
          className="site-logo"
          aria-label="Go Massive home"
          onClick={close}
        >
          <Image
            src="/go-massive-wordmark-transparent.png"
            alt="Go Massive"
            width={220}
            height={34}
            sizes="(max-width: 600px) 148px, 200px"
            preload
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="services-navigation">
            <button
              ref={servicesRef}
              type="button"
              className={`services-trigger ${isActive("/services") ? "is-current" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              onClick={() => setServicesOpen(!servicesOpen)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setServicesOpen(true);
                  requestAnimationFrame(() =>
                    headerRef.current
                      ?.querySelector<HTMLAnchorElement>("#services-dropdown a")
                      ?.focus(),
                  );
                }
              }}
            >
              Services <ChevronDown size={15} />
            </button>
            <div
              id="services-dropdown"
              className="services-dropdown"
              hidden={!servicesOpen}
            >
              <div className="mega-heading">
                <div>
                  <span className="eyebrow">Go Massive services</span>
                  <p>What do you need help with?</p>
                </div>
                <Link href="/services" onClick={close}>
                  Explore all services <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="mega-columns">
                {serviceGroups.map((group) => (
                  <div key={group.id}>
                    <p className="mega-category">{group.name}</p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            aria-current={
                              pathname === `/services/${item.slug}`
                                ? "page"
                                : undefined
                            }
                            onClick={close}
                          >
                            {item.name}
                            <ArrowUpRight size={13} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mega-bottom">
                <span>Soft fees. Shared upside. One accountable team.</span>
                <Link href="/growth-audit" onClick={close}>
                  Find your starting point <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={close}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/growth-audit" className="header-cta" onClick={close}>
            <span className="desktop-cta-label">Let’s talk growth</span>
            <span className="mobile-cta-label">Let’s talk</span>
            <ArrowUpRight size={16} />
          </Link>
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => {
              setOpen(!open);
              setServicesOpen(false);
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        <Link href="/services" onClick={close}>
          All services <ArrowUpRight size={20} />
        </Link>
        <div className="mobile-service-groups">
          {serviceGroups.map((group) => (
            <details key={group.id}>
              <summary>
                {group.name}
                <ChevronDown size={17} />
              </summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      aria-current={
                        pathname === `/services/${item.slug}`
                          ? "page"
                          : undefined
                      }
                      onClick={close}
                    >
                      {item.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        {navItems.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
            onClick={close}
          >
            {label}
            <ArrowUpRight size={20} />
          </Link>
        ))}
        <Link href="/contact" onClick={close}>
          Contact <ArrowUpRight size={20} />
        </Link>
      </nav>
    </header>
  );
}
