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
          description="Go Massive is an ecommerce growth agency for brands and manufacturers. We bring marketplace operations, advertising and creative together, with soft operating fees and profit share that ties our success to yours."
        />
        <section className="section">
          <div className="container service-detail-grid">
            <div className="about-work-visual"><div className="about-work-photo">
              <Image
                src="/images/commerce-operations.webp"
                alt="Illustration of hands-on ecommerce planning with product packaging, creative materials and a laptop"
                fill
                sizes="(max-width: 850px) 100vw, 45vw"
              />
            </div><div className="about-work-caption"><span>ONE CONNECTED TEAM</span><strong>Strategy. Creative. Operations.</strong><p>Working towards the same commercial goals.</p></div></div>
            <div className="service-description">
              <p className="eyebrow">Our vision</p>
              <h2 className="display-heading">
                GROWING BRANDS.
                <br />
                <span>SHARING SUCCESS.</span>
              </h2>
              <p>
                Our vision is a better agency relationship: one where the brand’s profitable growth determines the agency’s success. We want ambitious businesses to have a team that treats their margins, customers and long-term potential as seriously as they do.
              </p>
              <p className="large-copy">
                We put that belief into practice through soft operating fees, an agreed profit share and one team across strategy and delivery. We build the plan around your business, take responsibility for the work and make the results clear.
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
              label="Our mission in practice"
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
                  "Build profitable growth",
                  "Start with product margins, customer demand and operational capacity. Prioritise work that can improve the business, not simply increase activity.",
                ],
                [
                  "02",
                  "Share the incentive",
                  "Keep operating fees modest and agree how profitable growth is measured. Our profit share gives us a reason to care about the same outcome you do.",
                ],
                [
                  "03",
                  "Own the work",
                  "Connect strategy with daily execution. Explain what changed, what worked and what needs attention, with clear responsibility for the next step.",
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
