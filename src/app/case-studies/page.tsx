import type { Metadata } from "next";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ClosingCTA, PageIntro, StatsBand } from "../../components/Editorial";
import { CaseStudyExplorer } from "../../components/CaseStudyExplorer";
import { pageMetadata } from "../../lib/seo";
export const metadata: Metadata = pageMetadata({
  title: "eCommerce Growth Case Studies | Go Massive",
  description:
    "Five documented eCommerce growth engagements across Amazon and European marketplaces. The outcomes, constraints and work behind the results.",
  path: "/case-studies",
});
export default function CaseStudiesPage() {
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <PageIntro
          label="Selected work"
          title={
            <>
              THE WORK.
              <br />
              <span>THE IMPACT.</span>
            </>
          }
          description="Five engagements. Five different challenges. A closer look at the decisions and execution behind meaningful growth."
        />
        <section className="section section-tint">
          <div className="container">
            <CaseStudyExplorer />
            <p className="editorial-note">
              Client identities and underlying account data remain confidential.
              Results describe individual engagements.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <p className="eyebrow">The wider track record</p>
            <StatsBand />
            <p className="editorial-note">
              Portfolio figures are cumulative or pooled across Go Massive
              engagements.
            </p>
          </div>
        </section>
        <ClosingCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
