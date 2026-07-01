import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Athletic Mindset team about the assessment, team packages, or partnership opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
