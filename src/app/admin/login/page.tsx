import { signIn } from "../actions";
export default async function Login({ searchParams }: { searchParams: Promise<{ notice?: string }> }) {
  const { notice } = await searchParams;
  return <main id="main" className="admin-login"><div className="admin-card">
    <p className="admin-label">GO MASSIVE / WORKSPACE</p>
    <h1>Welcome back.</h1><p>Sign in to your team workspace.</p>
    {notice && <p role="alert" className="admin-alert">{notice === "access" ? "Your account does not have active workspace access. Contact the Owner." : "Unable to sign in. Check your details or try again shortly."}</p>}
    <form action={signIn}>
      <label>Email<input name="email" type="email" autoComplete="username" required /></label>
      <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
      <button type="submit">Sign in →</button>
    </form><p className="admin-muted">Access is by invitation only.</p>
  </div></main>;
}
