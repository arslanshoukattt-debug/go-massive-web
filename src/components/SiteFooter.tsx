import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Go Massive home">
              <Image
                src="/go-massive-wordmark-transparent.png"
                alt="Go Massive"
                width={240}
                height={38}
                sizes="240px"
              />
            </Link>
            <p>
              Amazon. Advertising.
              <br />
              Ecommerce.
              <br />
              Soft fees. Shared upside.
            </p>
            <a href="mailto:info@go-massive.com">
              info@go-massive.com <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <p className="eyebrow">Expertise</p>
            <ul>
              {[
                ["Amazon Management", "/services/amazon-account-management"],
                ["Amazon PPC", "/services/amazon-ppc"],
                ["Google Ads", "/services/google-ads"],
                ["Meta Ads", "/services/meta-ads"],
                ["Shopify Development", "/services/shopify-development"],
                ["All services", "/services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Go Massive</p>
            <ul>
              {[
                ["Our work", "/case-studies"],
                ["About us", "/about"],
                ["Growth audit", "/growth-audit"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-locations">
            <p className="eyebrow">Two cities. One team.</p>
            <p>
              Austin, Texas
              <br />
              <span>United States</span>
            </p>
            <p>
              Lahore, Punjab
              <br />
              <span>Pakistan</span>
            </p>
            <a
              href="https://www.linkedin.com/company/go-massive/"
              target="_blank"
              rel="noreferrer"
            >
              Find us on LinkedIn <ArrowUpRight size={15} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Go Massive. All rights reserved.
          </span>
          <span>Amazon · Paid media · Ecommerce</span>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
