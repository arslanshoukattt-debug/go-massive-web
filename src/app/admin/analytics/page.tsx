import Link from "next/link";
import { getGoogleReports } from "../../../lib/google-reporting";

const number = (value: string | number | undefined) => Number(value ?? 0).toLocaleString("en-US");
export default async function AnalyticsPage() {
  const { analytics, search, startDate, endDate } = await getGoogleReports();
  const metrics = analytics.data?.rows?.[0]?.metricValues;
  const organic = search.data?.rows?.[0];
  return <main id="main" className="admin-shell">
    <header className="admin-top"><Link href="/admin" className="admin-brand">GO MASSIVE<span>Workspace</span></Link><Link href="/admin">← Back to overview</Link></header>
    <section className="admin-intro"><p className="admin-label">TRAFFIC & SEARCH</p><h1>Your audience.<br /><span>Your visibility.</span></h1><p>{startDate} to {endDate} · 28 days</p><p>Recent days are excluded to allow Google to process reports. Analytics uses your property’s time zone; Search Console uses Pacific time.</p></section>
    <section className="admin-report"><h2>Website traffic</h2><p>Google Analytics 4 · Active users, sessions and page views</p>
      {analytics.error ? <p className="admin-alert" role="status">{analytics.error}</p> : <><div className="admin-grid">{["Active users", "Sessions", "Page views"].map((label, i) => <div className="admin-module" key={label}><p>{label}</p><strong className="admin-metric">{number(metrics?.[i]?.value)}</strong></div>)}</div>{!metrics && <p>No traffic was returned for this period.</p>}</>}
    </section>
    <section className="admin-report"><h2>Google Search performance</h2><p>Search Console · Organic web search</p>
      {search.error ? <p className="admin-alert" role="status">{search.error}</p> : <><div className="admin-grid">{[["Clicks", number(organic?.clicks)], ["Impressions", number(organic?.impressions)], ["Click-through rate", organic ? `${(organic.ctr * 100).toFixed(1)}%` : "—"], ["Average position", organic ? organic.position.toFixed(1) : "—"]].map(([label, value]) => <div className="admin-module" key={label}><p>{label}</p><strong className="admin-metric">{value}</strong></div>)}</div>{!organic && <p>No search data was returned for this period.</p>}</>}
    </section>
    <p className="admin-muted">Reports are fetched when you open this page. Reload to refresh.</p>
  </main>;
}
