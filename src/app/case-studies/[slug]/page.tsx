import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { CaseCard, ClosingCTA } from "../../../components/Editorial";
import { caseStudies, getCaseStudy } from "../../../lib/case-studies";
import { breadcrumbJsonLd, pageMetadata } from "../../../lib/seo";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return study
    ? pageMetadata({
        title: `${study.label} Case Study | Go Massive`,
        description: study.summary,
        path: `/case-studies/${slug}`,
      })
    : {};
}
export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const related = caseStudies.filter((item) => item.slug !== slug).slice(0, 2);
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Case Studies", path: "/case-studies" },
                { name: study.label, path: `/case-studies/${slug}` },
              ]),
            ),
          }}
        />
        <section className="case-detail-intro">
          <div className="container">
            <Link href="/case-studies" className="breadcrumb-link">
              <ArrowLeft size={16} />
              All case studies
            </Link>
            <p className="eyebrow">
              {study.category} / {study.marketplace}
            </p>
            <h1>{study.title}</h1>
            <p className="lead">{study.summary}</p>
            <div className="case-metrics">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-tint">
          <div className="container case-body">
            <aside className="case-facts" aria-label="Engagement context">
              <dl>
                {[
                  ["Category", study.category],
                  ["Marketplace", study.marketplace],
                  ["Business stage", study.businessStage],
                  ["Our scope", study.scope],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="editorial-note">
                Client identity and underlying account data remain confidential.
              </p>
              <Link href="/services" className="quiet-link">
                Explore our services <ArrowUpRight size={16} />
              </Link>
            </aside>
            <div className="case-narrative">
              <section>
                <h2>The challenge.</h2>
                {study.challenge.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </section>
              <section>
                <h2>What we changed.</h2>
                <ul>
                  {study.execution.map((item) => (
                    <li key={item}>
                      <Check size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>The outcome.</h2>
                {study.result.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </section>
              <div className="case-takeaway">
                <h2>The takeaway</h2>
                <p>{study.takeaway}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">More perspectives</p>
                <h2>
                  ANOTHER CHALLENGE.
                  <br />
                  <span>ANOTHER WAY FORWARD.</span>
                </h2>
              </div>
              <Link href="/case-studies" className="quiet-link">
                See all our work <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="case-grid">
              {related.map((item, i) => (
                <CaseCard key={item.slug} study={item} index={i} />
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
