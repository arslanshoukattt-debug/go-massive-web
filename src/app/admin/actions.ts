"use server";
import { redirect } from "next/navigation";
import { dashboardClient, requireMember } from "../../lib/supabase/server";

export async function signIn(form: FormData) {
  const email = String(form.get("email") ?? "").trim();
  const password = String(form.get("password") ?? "");
  if (!email || !password || email.length > 254 || password.length > 1024) redirect("/admin/login?notice=credentials");
  const db = await dashboardClient();
  const { error } = await db.auth.signInWithPassword({ email, password });
  if (error) redirect("/admin/login?notice=credentials");
  redirect("/admin");
}

export async function signOut() {
  const db = await dashboardClient();
  await db.auth.signOut();
  redirect("/admin/login");
}

export async function updatePassword(form: FormData) {
  const { db } = await requireMember();
  const password = String(form.get("password") ?? "");
  if (password.length < 12 || password.length > 128 || password !== form.get("confirm")) redirect("/admin/password?notice=invalid");
  const { error } = await db.auth.updateUser({ password });
  if (error) redirect("/admin/password?notice=invalid");
  redirect("/admin?notice=password");
}
