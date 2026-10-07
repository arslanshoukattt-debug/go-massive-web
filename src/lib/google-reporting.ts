import "server-only";
import { getVercelOidcToken } from "@vercel/oidc";
import { ExternalAccountClient } from "google-auth-library";
import { notFound } from "next/navigation";
import { requireMember } from "./supabase/server";

class ReportingSetupError extends Error {}

function setting(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new ReportingSetupError(`Missing production variable: ${name}. Save it in Vercel and redeploy.`);
  return value;
}

type Analytics = { rows?: { metricValues?: { value?: string }[] }[] };
type Search = { rows?: { clicks: number; impressions: number; ctr: number; position: number }[] };
export type ReportResult<T> = { data: T; error?: never } | { data?: never; error: string };

async function result<T>(run: () => Promise<T>): Promise<ReportResult<T>> {
  try { return { data: await run() }; }
  catch (error) {
    // Never log the Google client error: it can contain authorization headers.
    if (error instanceof ReportingSetupError) return { error: error.message };
    const failure = error as { response?: { status?: number; data?: { error?: unknown; error_description?: unknown } } };
    const payload = failure?.response?.data;
    const detail = typeof payload?.error === "object" && payload.error !== null ? payload.error as { details?: { reason?: string }[] } : undefined;
    if (detail?.details?.some(item => item.reason === "SERVICE_DISABLED")) return { error: "A required Google API is disabled. Enable IAM Service Account Credentials, Analytics Data and Search Console APIs in Go Massive Dashboard." };
    if (payload?.error === "invalid_target") return { error: "Google could not find the configured identity provider. Check the project number, pool ID and provider ID in Vercel." };
    if (payload?.error === "invalid_grant") return { error: "Google rejected the Vercel identity. Check the provider issuer, allowed audience and production subject condition." };
    const status = (error as { response?: { status?: number } })?.response?.status;
    const code = typeof status === "number" && status >= 400 && status <= 599 ? ` (HTTP ${status})` : "";
    return { error: status === 403 ? "Google denied access. Check API enablement and the reporting account’s permissions." : status === 429 ? "Google’s reporting quota was reached. Please try again later." : `Google reporting is unavailable${code}. Check the connection settings and try again.` };
  }
}

export async function getGoogleReports() {
  const { db } = await requireMember();
  const { data: allowed, error } = await db.rpc("dashboard_can_access", { requested_feature: "analytics", needs_edit: false });
  if (error || allowed !== true) notFound();

  // Request-scoped client: no user credentials or reports are shared across requests.
  const makeClient = () => {
    const project = setting("GCP_PROJECT_NUMBER");
    const pool = setting("GCP_WORKLOAD_IDENTITY_POOL_ID");
    const provider = setting("GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID");
    const email = setting("GCP_SERVICE_ACCOUNT_EMAIL");
    const client = ExternalAccountClient.fromJSON({
      type: "external_account",
      audience: `//iam.googleapis.com/projects/${project}/locations/global/workloadIdentityPools/${pool}/providers/${provider}`,
      subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
      token_url: "https://sts.googleapis.com/v1/token",
      service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${encodeURIComponent(email)}:generateAccessToken`,
      subject_token_supplier: { getSubjectToken: async () => {
        try { return await getVercelOidcToken(); }
        catch { throw new ReportingSetupError("Vercel could not provide a workload identity token. Check OIDC federation in this project’s Security settings, then redeploy."); }
      } },
    });
    if (!client) throw new Error("Google authentication is unavailable");
    client.scopes = ["https://www.googleapis.com/auth/analytics.readonly", "https://www.googleapis.com/auth/webmasters.readonly"];
    return client;
  };
  const end = new Date();
  // Search Console reports in Pacific time. Leave three days for data processing.
  end.setUTCDate(end.getUTCDate() - 3);
  const endDate = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(end);
  const start = new Date(`${endDate}T12:00:00Z`);
  start.setUTCDate(start.getUTCDate() - 27);
  const startDate = start.toISOString().slice(0, 10);
  const [analytics, search] = await Promise.all([
    result(async () => {
      const property = setting("GA4_PROPERTY_ID");
      if (!/^\d+$/.test(property)) throw new Error("Invalid property");
      const response = await makeClient().request<Analytics>({
        url: `https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, method: "POST", timeout: 15000,
        data: { dateRanges: [{ startDate, endDate }], metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }] },
      });
      return response.data;
    }),
    result(async () => {
      const site = encodeURIComponent(setting("GOOGLE_SEARCH_CONSOLE_SITE_URL"));
      const response = await makeClient().request<Search>({
        url: `https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, method: "POST", timeout: 15000,
        data: { startDate, endDate, type: "web", dataState: "final" },
      });
      return response.data;
    }),
  ]);
  return { analytics, search, startDate, endDate };
}
