import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ClosingCTA, SectionHeading, StatsBand } from "./Editorial";
import { Reveal } from "./Reveal";
import { serviceArt } from "../lib/service-art";
import { ServiceArtwork } from "./ServiceArtwork";
import { ServiceVisual } from "./ServiceVisual";
import { breadcrumbJsonLd, serviceJsonLd } from "../lib/seo";
import { services, type ServiceContent } from "../lib/services";
import { caseStudies } from "../lib/case-studies";

export function ServicePage({ service }: { service: ServiceContent }) {
  const path = `/services/${service.slug}`;
  const art = serviceArt[service.visual];
  const proof = caseStudies.find((study) => study.slug === service.proofSlug);
  const faqs = [
    ...service.faqs,
    {
      question: "How do your fees work?",
      answer:
        "Soft operating fees support the team, tools and delivery. Profit share aligns our upside with profitable growth. Scope, baseline, measurement and commercial terms are agreed for your account before work begins.",
    },
    {
      question: "What happens after I request a growth audit?",
      answer:
        "You share your brand, channels and current challenge through our audit form. We review the context and discuss the opportunity, the priorities and whether the proposed scope is a useful fit.",
    },
  ];
  return (
    <div className="service-page site-shell">
      <SiteHeader />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              serviceJsonLd({
                name: service.name,
                description: service.description,
                path,
              }),
              breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: service.name, path },
              ]),
            ]),
          }}
        />
        <section className="sp-hero">
          <div className="container">
            <nav className="sp-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span aria-current="page">{service.name}</span>
            </nav>
            <div className="sp-hero-grid">
              <div className="sp-hero-copy">
                <p className="eyebrow">
                  <span className="signal-dot" />
                  {service.name}
                </p>
                <h1>
                  {service.title}
                  <br />
                  <span>{service.accent}</span>
                </h1>
                <p className="sp-lead">{service.description}</p>
                <ul className="sp-benefits">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <Check size={17} />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <Link
                    href="/growth-audit"
                    className="gm-button gm-button--red"
                  >
                    Get your growth plan <ArrowUpRight size={18} />
                  </Link>
                  <a href="#scope" className="quiet-link">
                    Explore the service <ArrowRight size={17} />
                  </a>
                </div>
                <p className="sp-model-note">
                  SOFT FEES. SHARED UPSIDE. CLEAR OWNERSHIP.
                </p>
              </div>
              <ServiceVisual service={service} />
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
        <nav className="sp-section-nav container" aria-label="On this page">
          <a href="#scope">What we do</a>
          <a href="#approach">How we work</a>
          <a href={proof ? "#service-results" : "#service-fit"}>
            {proof ? "Relevant results" : "Who it is for"}
          </a>
          <a href="#service-faq">Your questions</a>
        </nav>
        <section id="scope" className="section sp-scope-section">
          <div className="container">
            <SectionHeading
              label={`Built for ${service.name}`}
              title={<>{service.problem}</>}
            >
              <p>{service.problemCopy}</p>
            </SectionHeading>
            <Reveal className="sp-scope-grid">
              {service.scope.map((item, i) => {
                return (
                  <article key={item.title}>
                    <div className="sp-card-top">
                      <span>0{i + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                );
              })}
            </Reveal>
            <p className="sp-scope-note">
              Deliverables, responsibilities and fees are agreed before work
              starts.
            </p>
          </div>
        </section>
        <section id="approach" className="section sp-approach">
          <div className="container">
            <SectionHeading
              label="The way forward"
              title={
                <>
                  {art.process}
                  <br />
                  <span>{art.processAccent}</span>
                </>
              }
            >
              <p>
                We review the setup, agree the priorities and measure the work
                against your business goals.
              </p>
            </SectionHeading>
            <div className="sp-method-layout sp-method-layout--steps">
              <Reveal className="sp-process">
                {service.steps.map((step, i) => (
                  <article key={step.title}>
                    <div>
                      <span>0{i + 1}</span>
                      <ArrowRight size={23} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </article>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
        {proof && (
          <section
            id="service-results"
            className="section section-navy sp-results"
          >
            <div className="container sp-proof-grid">
              <div className="sp-proof-art">
                <Image
                  src={
                    proof.category === "Consumer goods"
                      ? "/images/commerce-editorial.webp"
                      : "/images/outdoor-editorial.webp"
                  }
                  alt=""
                  fill
                  sizes="(max-width:850px) 90vw, 45vw"
                />
                <div>
                  <span>THE WORK IS THE PROOF.</span>
                  <strong>{proof.metrics[0].value}</strong>
                  <p>{proof.metrics[0].label}</p>
                </div>
              </div>
              <div>
                <p className="eyebrow">A relevant Go Massive engagement</p>
                <h2>{proof.title}</h2>
                <p className="sp-proof-summary">{proof.summary}</p>
                <div className="sp-proof-metrics">
                  {proof.metrics.slice(1, 3).map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <p className="sp-proof-context">
                  Results reflect the combined scope of this engagement. Read
                  the case for the work and context behind them.
                </p>
                <Link
                  href={`/case-studies/${proof.slug}`}
                  className="gm-button gm-button--light"
                >
                  Read the full case <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </section>
        )}
        <section id="service-fit" className="section">
          <div className="container sp-fit-grid">
            <div>
              <p className="eyebrow">Is this your next move?</p>
              <h2 className="display-heading">
                THE RIGHT WORK.
                <br />
                <span>AT THE RIGHT STAGE.</span>
              </h2>
              <p className="section-intro">
                Start with the constraint that matters. Connect adjacent
                services when there is a clear reason to do more.
              </p>
            </div>
            <div className="sp-audiences">
              {service.audience.map((audience, i) => (
                <div key={audience}>
                  <span>0{i + 1}</span>
                  <h3>{audience}</h3>
                  <Check size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="sp-alignment">
          <div className="container">
            <div>
              <p className="eyebrow">A different commercial relationship</p>
              <h2>
                SOFT FEES.
                <br />
                <span>WE GROW WHEN YOU DO.</span>
              </h2>
              <p>
                Modest operating fees support the work. Profit share connects
                our upside to your profitable growth, with the baseline and
                terms agreed together.
              </p>
            </div>
            <Link href="/growth-audit" className="gm-button gm-button--dark">
              Let’s find the fit <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
        <section id="service-faq" className="section section-tint">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">{service.name} / FAQs</p>
              <h2 className="display-heading">
                CLEAR ANSWERS.
                <br />
                <span>BEFORE WE START.</span>
              </h2>
              <p className="section-intro">
                The details matter. Here is what to know before we discuss your
                scope.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <Plus size={19} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              label="Related services"
              title={
                <>
                  THE NEXT STEP.
                  <br />
                  <span>WHEN YOU NEED IT.</span>
                </>
              }
            >
              <p>Services commonly combined with {service.name}.</p>
            </SectionHeading>
            <div className="sp-related-grid">
              {service.related.map((slug) => {
                const item = services[slug];
                return (
                  <Link key={slug} href={`/services/${slug}`}>
                    <div className="sp-related-image">
                      <ServiceArtwork slug={slug} compact />
                      <span>{item.groupName}</span>
                    </div>

                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="quiet-link">
                      Explore the service <ArrowUpRight size={19} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
