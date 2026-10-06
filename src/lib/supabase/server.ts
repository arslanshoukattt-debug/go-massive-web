import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function dashboardClient() {
  const jar = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Dashboard connection is not configured");
  return createServerClient(url, key, {
    cookies: {
      getAll: () => jar.getAll(),
      setAll: values => {
        try { values.forEach(({ name, value, options }) => jar.set(name, value, options)); }
        catch { /* Proxy persists refreshed cookies during page rendering. */ }
      },
    },
  });
}

export async function requireMember() {
  const db = await dashboardClient();
  const { data: { user }, error } = await db.auth.getUser();
  if (error || !user) redirect("/admin/login");
  const { data: member } = await db.from("dashboard_members").select("role,active").eq("user_id", user.id).single();
  if (!member?.active) redirect("/admin/login?notice=access");
  return { db, user, member };
}
