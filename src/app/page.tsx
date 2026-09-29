import Image from "next/image";
import { Reveal } from "../components/Reveal";
import { BrandShowcase } from "../components/BrandShowcase";
import Link from "next/link";
import { TrendingUp, MousePointerClick, PackageX, Users, TrendingDown, ChartNoAxesCombined, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  CaseCard,
  ClosingCTA,
  SectionHeading,
  StatsBand,
} from "../components/Editorial";
import { HeroGrowthDashboard } from "../components/HeroGrowthDashboard";
import { HeroHeadline } from "../components/HeroHeadline";
import { OperatingPillars } from "../components/OperatingPillars";
import { GrowthSystem } from "../components/GrowthSystem";
import { caseStudies } from "../lib/case-studies";

const brands = [
  ["Hallowood Furniture", "hallowood"],
  ["Bigfoot Bushcraft", "bigfoot-bushcraft"],
  ["Calzitaly", "calzitaly"],
  ["Eatwater", "eatwater"],
  ["Witt", "witt"],
  ["Weymouth", "weymouth"],
  ["Love & Peanut", "love-and-peanut"],
  ["Bigg Golf", "bigg-golf"],
  ["DBZ Beds", "dbz-beds"],
  ["Hot Star Honey", "hot-star-honey"],
  ["Welnesse", "welnesse"],
  ["funSLINGER", "funslinger"],
  ["Qnaturals", "qnaturals"],
];
const services = [
  {
    number: "01",
    title: "Marketplace growth",
    copy: "Amazon account management, listings, content and advertising, handled by one team.",
    tags: "Account management · Listings & A+ · Amazon PPC",
    href: "/services#amazon-growth",
  },
  {
    number: "02",
    title: "Performance marketing",
    copy: "Google and Meta campaigns, with creative testing and budgets based on your margins.",
    tags: "Google Ads · Meta Ads · Creative strategy",
    href: "/services#performance-marketing",
  },
  {
    number: "03",
    title: "Commerce & expansion",
    copy: "Shopify stores, email marketing and new marketplaces. Assess the costs and product fit before expanding.",
    tags: "Shopify · Email & retention · Marketplace expansion",
    href: "/services#commerce-expansion",
  },
];
const faqs = [
  [
    "What does Go Massive actually manage?",
    "Marketplace operations, advertising, creative and the systems around them. Amazon is our flagship capability, with Google Ads, Meta Ads, Shopify and marketplace expansion brought in where they support the commercial plan.",
  ],
  [
    "Can we start with one service?",
    "Yes. We start with the constraint that matters most to your business. That may be Amazon PPC, catalogue structure or a specific acquisition channel. Adjacent services are added when there is a clear reason to connect them.",
  ],
  [
    "How does the commercial model work?",
    "Soft operating fees cover the team, tools and delivery. Profit share connects our upside to profitable growth. The baseline, measurement and commercial terms are agreed for your account before work begins.",
  ],
  [
    "What happens during a growth audit?",
    "You tell us about your brand, channels and current challenge. We review the commercial context and discuss where the opportunity may be, what needs attention first and whether we are a useful fit.",
  ],
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main">
        <section className="home-hero">
          <div className="container hero-grid">
            <div className="hero-message">
              <p className="eyebrow">
                <span className="signal-dot" /> Amazon, advertising and
                ecommerce.
              </p>
              <HeroHeadline />
              <p className="hero-description">
                Your growth should fund our success. We connect strategy,
                marketplaces, advertising and creative — with soft fees to keep
                the work moving and profit share that gives us a stake in your
                growth.
              </p>
              <div className="hero-actions">
                <Link href="/growth-audit" className="gm-button gm-button--red">
                  Let’s talk growth <ArrowUpRight size={18} />
                </Link>
                <Link href="/case-studies" className="quiet-link">
                  Explore our work <ArrowRight size={17} />
                </Link>
              </div>
              <div className="hero-note">
                <span>7+</span>
                <p>
                  Years of ecommerce experience.
                  <br />
                  Strategy, advertising and hands-on account management.
                </p>
              </div>
            </div>
            <HeroGrowthDashboard
              evidence={{
                slug: caseStudies[0].slug,
                metrics: caseStudies[0].metrics,
              }}
            />
          </div>
        </section>
        <section className="home-track-record" aria-labelledby="track-record-title"><div className="container"><div className="track-record-heading"><h2 id="track-record-title">EXPERIENCE THAT EARNS YOUR <span className="trust-accent">TRUST.</span></h2><p>Our track record across brands, accounts and long-term partnerships.</p></div><StatsBand /></div></section>
        <section className="brand-section">
          <div className="container">
            <div className="brand-heading">
              <h2 className="brand-statement">
                AMBITIOUS BRANDS.
                <br />
                <span>PROVEN PARTNERSHIP.</span>
              </h2>
            </div>
            <BrandShowcase brands={brands} />
            <div className="credentials credential-panel">
              <div className="credential-heading"><span>PLATFORM EXPERTISE</span><h3>Recognitions &amp;<br />certifications.</h3></div>
              <div className="credential-item"><Image src="/platforms/amazonads.png" alt="Amazon Ads" width={110} height={58} /><p>Amazon Ads<small>Verified Partner</small></p></div>
              <div className="credential-item"><Image src="/platforms/amazon.svg" alt="Amazon" width={110} height={46} /><p>Service Provider Network<small>Verified Partner</small></p></div>
              <div className="credential-item"><Image src="/platforms/amazon.svg" alt="Amazon" width={110} height={46} /><p>Amazon SAS<small>Core</small></p></div>
              <div className="credential-item"><Image src="/platforms/googleads.svg" alt="Google Ads" width={50} height={46} /><p>Google Ads<small>Partner</small></p></div>
            </div>
          </div>
        </section>
        <section className="section problem-section">
          <div className="container">
            <SectionHeading
              index="01"
              label="The real growth problem"
              title={
                <>
                  BUSY ACCOUNTS.
                  <br />
                  <span>STALLED GROWTH.</span>
                </>
              }
            >
              <p>
                More activity should mean more progress. When these six things
                go wrong, adding budget only makes the cracks bigger.
              </p>
            </SectionHeading>
            <Reveal className="problem-grid">
              {[
                [
                  "Rising spend. Thinning returns.",
                  "Acquisition gets more expensive while the same sales cost more to win.",
                ],
                [
                  "Traffic without conversion.",
                  "Weak listings and creative lose the demand you already paid for.",
                ],
                [
                  "Operations that hold you back.",
                  "Stockouts, catalogue issues and account health cap what ads can scale.",
                ],
                [
                  "Too many partners. No owner.",
                  "Everyone delivers their piece. Nobody owns the commercial outcome.",
                ],
                [
                  "Revenue up. Profit down.",
                  "A bigger top line means little if the margin disappears underneath it.",
                ],
                [
                  "Reports without direction.",
                  "Channel dashboards tell different stories. The next move stays unclear.",
                ],
              ].map(([title, copy], i) => (
                <article key={title}>
                  <div className="problem-card-top"><span>0{i + 1}</span>{(() => { const Icon = [TrendingUp, MousePointerClick, PackageX, Users, TrendingDown, ChartNoAxesCombined][i]; return <Icon size={28} strokeWidth={1.5} aria-hidden="true" />; })()}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
        <section id="growth-engine" className="section section-navy">
          <div className="container">
            <SectionHeading
              index="02"
              label="The Growth Engine"
              title={
                <>
                  BUILT TO GROW.
                  <br />
                  <span>ALIGNED TO <em className="profit-emphasis">PROFIT.</em></span>
                </>
              }
            >
              <p>
                Find the opportunity. Build demand. Improve the return.
                We bring the work together, with a stake in how your business grows.
              </p>
            </SectionHeading>
            <GrowthSystem />
            <div className="engine-proof">
              <strong>{caseStudies[0].metrics[1].value}</strong>
              <p>
                {caseStudies[0].metrics[1].label} for an outdoor brand over six
                months. Listing improvements, campaign structure and commercial
                reporting working together.
              </p>
              <Link href={`/case-studies/${caseStudies[0].slug}`}>
                Read the case study <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        <section id="selected-work" className="section section-tint">
          <div className="container">
            <SectionHeading
              index="03"
              label="The work speaks"
              title={
                <>
                  GROWTH YOU CAN MEASURE.
                  <br />
                  <span>WORK YOU CAN TRACE.</span>
                </>
              }
            >
              <p>
                Different brands. Different constraints. One commitment to
                getting the commercial details right.
              </p>
              <Link href="/case-studies" className="quiet-link">
                All case studies <ArrowUpRight size={18} />
              </Link>
            </SectionHeading>
            <div className="case-grid">
              <CaseCard study={caseStudies[0]} />
              <CaseCard study={caseStudies[2]} index={1} />
            </div>
            <div className="more-results">
              {[caseStudies[1], caseStudies[3], caseStudies[4]].map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                  <strong>{study.metrics[0].value}</strong>
                  <div>
                    <span>{study.category}</span>
                    <p>{study.metrics[0].label}</p>
                  </div>
                  <ArrowUpRight size={21} />
                </Link>
              ))}
            </div>
            <p className="editorial-note">
              Documented engagements. Client identities remain confidential.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              index="04"
              label="What we do"
              title={
                <>
                  SIX CHANNELS.
                  <br />
                  <span>ONE ACCOUNTABLE TEAM.</span>
                </>
              }
            >
              <p>
                One team across the work that drives your business. Start where
                you need us. Connect the rest when it counts.
              </p>
            </SectionHeading>
            <Reveal className="service-list">
              {services.map((service) => (
                <Link
                  href={service.href}
                  className="service-row"
                  key={service.number}
                >
                  <span className="row-index">{service.number}</span>
                  <h3>{service.title}</h3>
                  <div>
                    <p>{service.copy}</p>
                    <span className="service-tags">{service.tags}</span>
                  </div>
                  <ArrowUpRight className="service-arrow" size={27} />
                </Link>
              ))}
            </Reveal>
            <div className="channel-line">
              <span>ACROSS YOUR COMMERCIAL WORLD</span>
              <div>
                {[["Amazon", "amazon"], ["Walmart", "walmart"], ["TikTok Shop", "tiktok"], ["eBay", "ebay"], ["Shopify", "shopify"], ["Temu", "temu"]].map(([name, file]) => <div className={`marketplace-mark marketplace-mark--${file}`} key={file}><Image src={`/platforms/${file}.svg`} alt={name} width={180} height={80} /></div>)}
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container model-grid">
            <div>
              <p className="eyebrow">05 / A better kind of partnership</p>
              <h2 className="display-heading">
                SOFT FEES.
                <br />
                <span>SHARED UPSIDE.</span>
              </h2>
              <p className="large-copy">
                We earn more when you grow profitably.
                <br />
                That is the point of profit share.
              </p>
              <Link href="/growth-audit" className="quiet-link">
                Find out if we’re a fit <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="model-principles">
              {[
                [
                  "01",
                  "Modest operating fees",
                  "A modest operating fee supports the team, tools and delivery. Heavy retainers are not the foundation of our model.",
                ],
                [
                  "02",
                  "One accountable team",
                  "Strategy, execution and reporting stay connected. No passing problems between suppliers.",
                ],
                [
                  "03",
                  "Profit share. Aligned incentives.",
                  "Our upside comes from sharing in profitable growth. We agree the baseline, profit definition and share with you before work begins.",
                ],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <Check size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-tint operating-section">
          <div className="container">
            <SectionHeading
              index="06"
              label="How we operate"
              title={
                <>
                  SENIOR MINDS.
                  <br />
                  <span>DAILY OWNERSHIP.</span>
                </>
              }
            >
              <p>
                Aligned fees matter. So does the team behind them. Six operating
                principles keep strategy connected to the everyday work.
              </p>
            </SectionHeading>
            <OperatingPillars />
          </div>
        </section>
        <section className="section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">A few things worth knowing</p>
              <h2 className="display-heading">
                GOOD
                <br />
                <span>QUESTIONS.</span>
              </h2>
              <p className="section-intro">
                Prefer a conversation?
                <br />
                <a href="mailto:info@go-massive.com" className="inline-link">
                  We’re an email away.
                </a>
              </p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
