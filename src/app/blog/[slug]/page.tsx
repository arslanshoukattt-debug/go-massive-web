import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import { ClosingCTA } from "../../../components/Editorial";
import { findPost, publishedPosts, formatPostDate, readingMinutes } from "../../../lib/blog";
import { breadcrumbJsonLd, pageMetadata } from "../../../lib/seo";
import { SITE_URL } from "../../../lib/site";
import "../blog.css";

export const dynamicParams = false;
export function generateStaticParams() { return publishedPosts.map(post => ({ slug: post.slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findPost((await params).slug);
  if (!post) notFound();
  const base = pageMetadata({ title: post.seoTitle, description: post.description, path: `/blog/${post.slug}` });
  return { ...base, openGraph: { ...base.openGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.updatedAt, authors: ["Go Massive"], section: post.category } };
}
export default async function ArticlePage({ params }: Props) {
  const post = findPost((await params).slug);
  if (!post) notFound();
  const schema = [{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.publishedAt, dateModified: post.updatedAt, author: { "@type": "Organization", name: "Go Massive", url: `${SITE_URL}/about` }, publisher: { "@type": "Organization", name: "Go Massive", logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } }, image: `${SITE_URL}/opengraph-image`, mainEntityOfPage: `${SITE_URL}/blog/${post.slug}` }, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])];
  return <><SiteHeader /><main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <article className="container blog-article">
      <header className="blog-article-header"><Link href="/blog" className="quiet-link">← All insights</Link><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="blog-deck">{post.description}</p><div className="blog-meta"><Link href="/about">By Go Massive</Link><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>{readingMinutes(post)} min read</span></div></header>
      <div className="blog-article-layout"><aside><nav aria-label="In this article"><p className="eyebrow">In this article</p>{post.sections.map(section => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}</nav><Link className="quiet-link" href={post.service.href}>Explore {post.service.title} ↗</Link></aside>
        <div className="blog-prose"><div className="blog-takeaway"><p className="eyebrow">The decision that matters</p><p>{post.takeaway}</p></div>
          {post.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.checklist && <ul>{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}
          <section className="blog-sources"><h2>Source & verification</h2><p>Platform facts checked on {formatPostDate(post.updatedAt)}. Recommendations and examples are Go Massive’s analysis.</p><ul>{post.sources.map(source => <li key={source.url}><a href={source.url}>{source.title} ↗</a></li>)}</ul></section>
        </div>
      </div>
    </article><ClosingCTA /></main><SiteFooter /></>;
}
