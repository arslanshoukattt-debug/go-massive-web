import Link from "next/link";
import { requireMember } from "../../lib/supabase/server";
import { signOut } from "./actions";
const modules = [
  ["crm", "Leads & CRM", "Enquiries, follow-ups and your sales pipeline."],
  ["analytics", "Traffic & search", "Website visitors, acquisition and organic search."],
  ["payments", "Payments", "Payment history and reconciliation."],
  ["reviews", "Review requests", "Customer email and invitation status."],
  ["content", "Content & SEO", "Blog drafts, publishing and search metadata."],
  ["site_health", "Site health", "Page errors, form failures and performance."],
] as const;
export default async function Dashboard() {
  const { db, user, member } = await requireMember();
  const { data: permissions, error } = await db.from("dashboard_permissions").select("feature,access_level").eq("user_id", user.id);
  const allowed = member.role === "owner" ? modules : modules.filter(([key]) => !error && permissions?.some(p => p.feature === key));
  return <main id="main" className="admin-shell">
    <header className="admin-top"><Link href="/admin" className="admin-brand">GO MASSIVE<span>Workspace</span></Link><div><span className="admin-badge">{member.role === "owner" ? "Owner" : "Team member"}</span><form action={signOut}><button className="admin-secondary">Sign out</button></form></div></header>
    <section className="admin-intro"><p className="admin-label">BUSINESS OVERVIEW</p><h1>Your business.<br /><span>One workspace.</span></h1><p>Signed in as {user.email}</p></section>
    <section className="admin-status"><div><strong>Secure access is connected.</strong><p>Your {member.role === "owner" ? "Owner account has full access" : "feature access is controlled by the Owner"}. Reporting sources and business tools are still being connected.</p></div><Link href="/admin/password">Change password →</Link></section>
    <div className="admin-grid">{allowed.map(([key, title, detail]) => <section className="admin-module" key={key}><p className="admin-label">{key === "analytics" ? "REPORTING" : "NOT CONNECTED YET"}</p><h2>{title}</h2><p>{detail}</p>{key === "analytics" ? <Link href="/admin/analytics" prefetch={false}>View traffic & search →</Link> : <span className="admin-muted">No live data available</span>}</section>)}</div>
    {member.role === "owner" && <section className="admin-status"><div><h2>Team access</h2><p>Owner access and per-feature view/edit rules are configured. The invitation and team-management interface is the next build step.</p></div></section>}
  </main>;
}
