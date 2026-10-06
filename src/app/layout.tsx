import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import "./services.css";
import "./typography.css";
import "./commerce.css";
import { SITE_URL } from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Go Massive | Amazon & Ecommerce Growth Agency";
const SITE_DESCRIPTION =
  "Amazon account management, paid advertising and ecommerce services. Go Massive combines soft operating fees with profit share to grow alongside your business.";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Go Massive",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Go Massive",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/go-massive.webp`,
  description: SITE_DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/go-massive/"],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="gm-skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
if (!window.location.pathname.startsWith('/admin')) { gtag('config', 'G-F2825SYPBX'); } else { window['ga-disable-G-F2825SYPBX'] = true; }`}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F2825SYPBX" strategy="afterInteractive" />

      </body>
    </html>
  );
}
