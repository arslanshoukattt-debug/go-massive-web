import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  ClosingCTA,
  PageIntro,
  StatsBand,
  SectionHeading,
} from "../../components/Editorial";
import { pageMetadata } from "../../lib/seo";
export const metadata: Metadata = pageMetadata({
  title: "About Go Massive | Amazon & Ecommerce Agency",
  description:
    "Go Massive manages Amazon accounts, paid advertising and ecommerce stores with soft fees and profit share. Based in Austin and Lahore.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <PageIntro
          label="This is Go Massive"
          title={
            <>
              YOUR BUSINESS.
              <br />
              <span>OUR RESPONSIBILITY.</span>
            </>
          }
          description="We manage Amazon accounts, advertising and ecommerce stores for brands and manufacturers. Our fees combine day-to-day operating support with a share of profitable growth."
        />
        <section className="section">
          <div className="container service-detail-grid">
            <div className="about-image">
              <Image
                src="/images/commerce-editorial.webp"
                alt="Conceptual ecommerce products arranged as a connected collection"
                fill
                sizes="(max-width: 850px) 100vw, 45vw"
              />
            </div>
            <div className="service-description">
              <p className="eyebrow">Our point of view</p>
              <h2 className="display-heading">
                ONE TEAM.
                <br />
                <span>FEWER HANDOVERS.</span>
              </h2>
              <p>
                An ads agency, a listing freelancer, another dashboard. More
                suppliers can mean more gaps — especially when nobody owns the
                whole outcome.
              </p>
              <p className="large-copy">
                We coordinate account operations, advertising and creative so
                decisions about one part of the business account for the others.
                You know who owns the work and what happens next.
              </p>
              <Link href="/services" className="quiet-link">
                Explore our services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="container">
            <StatsBand />
          </div>
        </section>
        <section className="section section-navy">
          <div className="container">
            <SectionHeading
              label="What we stand for"
              title={
                <>
                  WHAT YOU CAN
                  <br />
                  EXPECT FROM US.
                </>
              }
            />
            <div className="principle-grid">
              {[
                [
                  "01",
                  "Start with the numbers",
                  "Your goals, margins, market position and constraints determine the plan. We review those before recommending work.",
                ],
                [
                  "02",
                  "Hands-on accountability",
                  "Strategy, execution and reporting stay connected, with a clear owner behind every meaningful decision.",
                ],
                [
                  "03",
                  "Progress you can understand",
                  "We explain what changed, why it matters and what we do next — including the things that did not work.",
                ],
              ].map(([n, title, copy]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Where we work"
              title={
                <>
                  TWO CITIES.
                  <br />
                  <span>ONE CONNECTED TEAM.</span>
                </>
              }
            >
              <p>
                Our team works from Austin and Lahore, supporting brands across
                marketplaces.
              </p>
            </SectionHeading>
            <div className="location-grid">
              <article className="location-card">
                <span>01 / UNITED STATES</span>
                <h3>Austin, Texas.</h3>
                <p>United States</p>
              </article>
              <article className="location-card">
                <span>02 / PAKISTAN</span>
                <h3>Lahore, Punjab.</h3>
                <p>Pakistan</p>
              </article>
            </div>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
