import type { Metadata } from "next";
import "./admin.css";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Go Massive | Workspace",
  robots: { index: false, follow: false, noarchive: true },
  alternates: { canonical: "/admin" },
};
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-app">{children}</div>;
}
