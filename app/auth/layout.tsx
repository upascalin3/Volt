import type { Metadata } from "next";
import "./auth.css";

export const metadata: Metadata = {
  title: "VOLT | Authentication",
  description: "Sign in or create an account to access your VOLT smart energy dashboard.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
