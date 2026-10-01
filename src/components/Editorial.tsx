import { Reveal } from "./Reveal";
import { StatCounter } from "./StatCounter";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { agencyStats, type CaseStudy } from "../lib/case-studies";

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          {index && <span>{index} / </span>}
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </Reveal>
  );
}

export function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="container closing-grid">
        <div>
          <p className="eyebrow">Talk to the team</p>
          <h2>You’ve seen how we work. Let’s talk about where you’re stuck.</h2>
        </div>
        <div>
          <p>
            Tell us where growth is getting stuck. We’ll discuss the priorities,
            scope and whether our fee model fits your business.
          </p>
          <Link href="/growth-audit" className="gm-button gm-button--dark">
            Book a growth call <ArrowUpRight size={18} />
          </Link>
          <a className="closing-email" href="mailto:info@go-massive.com">
            Email us <Mail size={16} />
          </a>
          <p className="closing-assurance">
            <Check size={17} /> Clear next steps — even if we’re not the right
            fit.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <div className="stats-band">
      {agencyStats.map((stat) => (
        <div key={stat.label}>
          <strong><StatCounter value={stat.value} /></strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export function CaseCard({
  study,
  index = 0,
}: {
  study: CaseStudy;
  index?: number;
}) {
  const image =
    study.category === "Outdoor and leisure"
      ? "/images/outdoor-editorial.webp"
      : study.category === "Food and beverage"
        ? "/images/food-editorial.webp"
        : study.category === "Home and furniture"
          ? "/images/furniture-editorial.webp"
          : "/images/commerce-editorial.webp";
  return (
    <Link href={`/case-studies/${study.slug}`} className="case-card">
      <div className={`case-image case-image--${index % 3}`}>
        <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span className="case-category">{study.category}</span>
        <span className="case-arrow">
          <ArrowUpRight size={24} />
        </span>
      </div>
      <div className="case-info">
        <div>
          <p className="eyebrow">{study.marketplace}</p>
          <h3>{study.title.replace(/^How /, "").replace(/\.$/, "")}</h3>
        </div>
        <div className="case-result">
          <strong>{study.metrics[0].value}</strong>
          <span>{study.metrics[0].label}</span>
        </div>
      </div>
      <p className="case-summary">{study.summary}</p>
    </Link>
  );
}

export function PageIntro({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <div className="page-intro-grid">
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
