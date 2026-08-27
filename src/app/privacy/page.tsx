import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Go Massive",
  description: "How Go Massive collects, uses, and protects the information you share through go-massive.com.",
  path: "/privacy",
});

const sections = [
  {
    heading: "What we collect",
    body: [
      "When you submit the Growth Audit form, we collect the details you provide: your name, email address, company name, phone number (optional), your primary growth channel, and anything you write about what you would like to improve.",
      "We do not collect payment details through this website.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use the information you submit to respond to your enquiry, prepare for the conversation you requested, and — where you have agreed — send you relevant communications from Go Massive. You can unsubscribe from those at any time.",
      "We do not sell your personal information.",
    ],
  },
  {
    heading: "Where it is stored",
    body: [
      "Form submissions are processed and stored in HubSpot, the customer-relationship platform we use to manage enquiries. HubSpot processes this data on our behalf under its own security and privacy commitments.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "The Growth Audit form is served by HubSpot and protected by Google reCAPTCHA, which may set cookies and collect device information to distinguish people from bots. These services operate under their own privacy policies.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us at any time to access, correct, or delete the personal information we hold about you. Email info@go-massive.com and we will action the request.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If our data practices change, this page will be updated to reflect them. This policy was last updated in August 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-[#F7F8FA] text-[#020D1F]">
      <SiteHeader />
      <ViewTransition name="page-content" share="auto" enter="auto" default="none">
      <section className="bg-[#020D1F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[880px] px-6">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FF8A90]">Legal</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">A plain-language description of what this website collects and what happens to it.</p>
        </div>
      </section>

      <section className="flex-1 py-16 sm:py-20"><div className="mx-auto max-w-[880px] px-6">
        {sections.map((section, index) => (
          <div key={section.heading} className={index === 0 ? "" : "mt-12 border-t border-[#020D1F]/10 pt-12"}>
            <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-[#4E5A6B]">{paragraph}</p>)}
          </div>
        ))}
        <p className="mt-12 border-t border-[#020D1F]/10 pt-12 leading-8 text-[#4E5A6B]">Questions about this policy? <Link href="/contact" className="font-semibold gm-text-red-safe">Contact us</Link>.</p>
      </div></section>
      </ViewTransition>
      <SiteFooter />
    </main>
  );
}
