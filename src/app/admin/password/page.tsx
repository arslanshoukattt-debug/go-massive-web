import { requireMember } from "../../../lib/supabase/server";
import { updatePassword } from "../actions";
import Link from "next/link";
export default async function Password({ searchParams }: { searchParams: Promise<{ notice?: string }> }) {
  await requireMember();
  const { notice } = await searchParams;
  return <main id="main" className="admin-login"><div className="admin-card"><p className="admin-label">ACCOUNT SECURITY</p><h1>Change password</h1>{notice && <p role="alert">Use matching passwords of 12–128 characters. If the update still fails, sign in again.</p>}<form action={updatePassword}><label>New password<input name="password" type="password" minLength={12} maxLength={128} autoComplete="new-password" required /></label><label>Confirm password<input name="confirm" type="password" minLength={12} maxLength={128} autoComplete="new-password" required /></label><button>Save password</button></form><Link href="/admin">← Back to workspace</Link></div></main>;
}
