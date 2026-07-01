import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The science behind Athletic Mindset — the research and methodology powering our psychometrically validated assessment.",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
