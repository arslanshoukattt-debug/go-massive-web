import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { PageIntro, ClosingCTA } from "../../components/Editorial";
import { pageMetadata } from "../../lib/seo";
export const metadata: Metadata = pageMetadata({
  title: "Contact Go Massive | eCommerce Growth Agency",
  description:
    "Talk to Go Massive about Amazon growth, performance marketing or ecommerce operations. Austin, Texas and Lahore, Pakistan.",
  path: "/contact",
});
export default function ContactPage() {
  return (
    <div>
      <SiteHeader />
      <main id="main">
        <PageIntro
          label="Say hello"
          title={
            <>
              LET’S TALK
              <br />
              <span>ABOUT YOUR BUSINESS.</span>
            </>
          }
          description="Tell us what you sell, where you sell it and what you need help with. Email us or request a growth audit."
        />
        <section className="section">
          <div className="container contact-grid">
            <div className="contact-options">
              <a href="mailto:info@go-massive.com">
                <div>
                  <span>WRITE TO US</span>
                  <strong>info@go-massive.com</strong>
                </div>
                <ArrowUpRight size={24} />
              </a>
              <Link href="/growth-audit">
                <div>
                  <span>TELL US ABOUT YOUR ACCOUNT</span>
                  <strong>Request a growth audit</strong>
                </div>
                <ArrowUpRight size={24} />
              </Link>
              <a
                href="https://www.linkedin.com/company/go-massive/"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>STAY CONNECTED</span>
                  <strong>Find us on LinkedIn</strong>
                  <span className="sr-only"> (opens in a new tab)</span>
                </div>
                <ArrowUpRight size={24} />
              </a>
            </div>
            <div>
              <p className="eyebrow">Where we work</p>
              <article className="location-card">
                <h3>Austin.</h3>
                <p>Texas, United States</p>
              </article>
              <article className="location-card">
                <h3>Lahore.</h3>
                <p>Punjab, Pakistan</p>
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
