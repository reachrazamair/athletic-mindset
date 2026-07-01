import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about the Athletic Mindset assessment, reports, pricing, and how it works.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
