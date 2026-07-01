import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Athletic Mindset platform.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
