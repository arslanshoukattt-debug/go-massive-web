import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ClosingCTA, PageIntro } from "../../components/Editorial";
import { pageMetadata } from "../../lib/seo";
import { publishedPosts, formatPostDate, readingMinutes } from "../../lib/blog";
import "./blog.css";

export const metadata = pageMetadata({ title: "Ecommerce & Marketplace Insights | Go Massive", description: "Platform changes explained for ecommerce brands. Practical analysis of marketplace updates, advertising and profitable growth from Go Massive.", path: "/blog" });

export default function BlogPage() {
  return <><SiteHeader /><main id="main">
    <PageIntro label="The Go Massive journal" title={<>COMMERCE CHANGES.<br /><span>STAY AHEAD.</span></>} description="What changed. What it means for your business. What to do next. Practical analysis for brands building profitable growth." />
    <section className="section blog-list"><div className="container">
      <div className="blog-section-label"><h2>Latest insights</h2><span>Platform updates & practical decisions</span></div>
      {publishedPosts.map(post => <article className="blog-feature" key={post.slug}>
        <div className="blog-art" aria-hidden="true"><span>{post.category.toUpperCase()}</span><div>{post.visualHeadline[0]}<br /><strong>{post.visualHeadline[1]}</strong></div><div className="blog-baseline"><i /><i /><i /><i /><i /><i /></div><small>MEASURE WHAT MOVES THE BUSINESS.</small></div>
        <div className="blog-feature-copy"><p className="eyebrow">{post.category}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><div className="blog-meta"><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span>{readingMinutes(post)} min read</span></div><Link className="quiet-link" href={`/blog/${post.slug}`}>Read the analysis <ArrowUpRight size={18} /></Link></div>
      </article>)}
    </div></section><ClosingCTA />
  </main><SiteFooter /></>;
}
