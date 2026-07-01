import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on sports psychology, mental performance, and building the athletic mindset — from the Athletic Mindset team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
