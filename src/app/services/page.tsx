import type { Metadata } from "next";
import Link from "next/link";
import { ServiceArtwork } from "../../components/ServiceArtwork";
import { Reveal } from "../../components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Target,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  ClosingCTA,
  SectionHeading,
  StatsBand,
} from "../../components/Editorial";
import { pageMetadata, breadcrumbJsonLd } from "../../lib/seo";
import { serviceGroups } from "../../lib/service-navigation";
import { services } from "../../lib/services";
export const metadata: Metadata = pageMetadata({
  title: "Ecommerce & Marketplace Growth Services | Go Massive",
  description:
    "Explore Amazon management, PPC, creative, Shopify, paid media and marketplace expansion. Dedicated expertise, soft fees and shared upside.",
  path: "/services",
});
const groupIcons = [Layers, Target, Sparkles, ShoppingBag];
export default function ServicesPage() {
  return (
    <div className="service-page site-shell">
      <SiteHeader />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
              ]),
            ),
          }}
        />
        <section className="sp-hero service-directory-hero">
          <div className="container">
            <nav className="sp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span aria-current="page">Services</span>
            </nav>
            <div className="sp-hero-grid">
              <div className="sp-hero-copy">
                <p className="eyebrow">Amazon, advertising and ecommerce</p>
                <h1>
                  THE SERVICES YOU NEED.
                  <br />
                  <span>ONE ACCOUNTABLE TEAM.</span>
                </h1>
                <p className="sp-lead">
                  Manage your Amazon account, improve advertising or build a
                  better store. Start with the service your business needs now.
                </p>
                <div className="hero-actions">
                  <Link
                    href="/growth-audit"
                    className="gm-button gm-button--red"
                  >
                    Find your starting point <ArrowUpRight size={18} />
                  </Link>
                  <a href="#amazon-growth" className="quiet-link">
                    Explore services <ArrowRight size={17} />
                  </a>
                </div>
                <p className="sp-model-note">
                  SOFT FEES. SHARED UPSIDE. NO DISCONNECTED TEAMS.
                </p>
              </div>
              <div className="directory-map">
                <div className="directory-map-top">
                  <span>OUR SERVICES</span>
                  <ArrowUpRight size={23} />
                </div>
                <h2>
                  Amazon to Shopify.
                  <br />
                  <span>Managed together.</span>
                </h2>
                {serviceGroups.map((group, i) => {
                  const Icon = groupIcons[i];
                  return (
                    <a href={`#${group.id}`} key={group.id}>
                      <span>
                        <Icon size={22} />
                      </span>
                      <div>
                        <strong>{group.name}</strong>
                        <small>{group.description}</small>
                      </div>
                      <ArrowUpRight size={20} />
                    </a>
                  );
                })}
                <p>Start with one service. Add others when you need them.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="sp-trust">
          <div className="container">
            <p>
              THE EXPERIENCE
              <br />
              <strong>BEHIND THE EXECUTION.</strong>
            </p>
            <StatsBand />
          </div>
        </div>
        <nav
          className="sp-section-nav container"
          aria-label="Service categories"
        >
          {serviceGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.name}
            </a>
          ))}
        </nav>
        {serviceGroups.map((group, i) => {
          return (
            <section
              id={group.id}
              key={group.id}
              className={`section directory-section ${i % 2 === 0 ? "section-tint" : ""}`}
            >
              <div className="container">
                <div className="directory-chapter">
                  <figure className="directory-chapter-art">
                    <ServiceArtwork
                      slug={
                        [
                          "amazon-account-management",
                          "google-ads",
                          "creative-direction",
                          "shopify-development",
                        ][i]
                      }
                    />
                  </figure>
                  <SectionHeading
                    index={`0${i + 1}`}
                    label={group.name}
                    title={
                      <>
                        {
                          [
                            "AMAZON. EVERY DETAIL.",
                            "REACH THE RIGHT PEOPLE.",
                            "EARN THE FIRST CHOICE.",
                            "SELL ON NEW CHANNELS.",
                          ][i]
                        }
                        <br />
                        <span>
                          {
                            [
                              "ONE COMMERCIAL PLAN.",
                              "MAKE THE SPEND COUNT.",
                              "GIVE THEM A REASON TO RETURN.",
                              "WITH THE COSTS IN VIEW.",
                            ][i]
                          }
                        </span>
                      </>
                    }
                  >
                    <p>
                      {group.description} Choose a service below to see the
                      scope and process.
                    </p>
                  </SectionHeading>
                </div>
                <Reveal className="directory-cards">
                  {group.items.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`}>
                      <div className="directory-card-top">
                        <ArrowUpRight size={23} />
                      </div>
                      <h3>{item.name}</h3>
                      <p>{services[item.slug].description}</p>
                      <span>
                        Explore the service <ArrowRight size={17} />
                      </span>
                    </Link>
                  ))}
                </Reveal>
              </div>
            </section>
          );
        })}
        <section className="sp-alignment">
          <div className="container">
            <div>
              <p className="eyebrow">Not sure where to start?</p>
              <h2>
                WHAT NEEDS TO CHANGE?
                <br />
                <span>LET’S START THERE.</span>
              </h2>
              <p>
                We start with your products, channels and commercial priorities.
                The scope follows the opportunity, with soft fees and a shared
                interest in profitable growth.
              </p>
            </div>
            <Link href="/growth-audit" className="gm-button gm-button--dark">
              Get your growth plan <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
