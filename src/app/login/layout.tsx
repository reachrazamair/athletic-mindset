import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Athletic Mindset account.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
