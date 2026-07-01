import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Athletic Mindset account and start measuring your mental game.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
