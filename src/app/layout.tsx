import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://go-massive.com";
const SITE_TITLE = "Go Massive | The Commercial Operating Layer for eCommerce Brands";
const SITE_DESCRIPTION =
  "Go Massive connects marketplace operations, demand capture, conversion, and expansion into one accountable commercial system for ambitious eCommerce brands.";

export const viewport: Viewport = {
  themeColor: "#020D1F",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/favicon.ico",
    apple: "/go-massive-logo.png",
  },
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
  logo: `${SITE_URL}/go-massive-logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/go-massive/"],
  address: [
    { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
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
        <a href="#main" className="gm-skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
