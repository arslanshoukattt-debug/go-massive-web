import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { HubSpotGrowthAuditForm } from "../../components/HubSpotGrowthAuditForm";
import { pageMetadata } from "../../lib/seo";
export const metadata: Metadata = pageMetadata({
  title: "Book an eCommerce Growth Audit | Go Massive",
  description:
    "Tell Go Massive about your brand, your channels and the constraint holding growth back. Start with a focused growth audit.",
  path: "/growth-audit",
});
export default function GrowthAuditPage() {
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <section className="audit-section">
          <div className="container audit-grid">
            <div className="audit-intro">
              <p className="eyebrow">Let’s talk growth</p>
              <h1>
                LET’S REVIEW
                <br />
                YOUR BUSINESS.
                <br />
                <span>START HERE.</span>
              </h1>
              <p>
                Share your store or marketplace, current sales challenges and
                goals. We’ll review the details before discussing the work your
                account needs.
              </p>
              <ul className="audit-checks">
                {[
                  "A focused look at your channels, catalogue and conversion",
                  "An honest conversation about priorities and constraints",
                  "Clear next steps — even if we’re not the right fit",
                ].map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="audit-email">
                <p>Prefer to start with an email?</p>
                <a href="mailto:info@go-massive.com">
                  info@go-massive.com <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="audit-form-wrap">
              <h2>Tell us about your brand.</h2>
              <p>
                Your website, sales channels and current priorities are a useful
                starting point.
              </p>
              <HubSpotGrowthAuditForm />
              <p className="form-help">
                We use your details to respond to your enquiry.{" "}
                <a href="/privacy">Read our privacy policy.</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
