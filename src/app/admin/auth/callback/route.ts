import { NextResponse } from "next/server";
import { dashboardClient } from "../../../../lib/supabase/server";
export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get("code");
  if (code) {
    const db = await dashboardClient();
    const { error } = await db.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(new URL("/admin/password", request.url));
  }
  return NextResponse.redirect(new URL("/admin/login?notice=callback", request.url));
}
