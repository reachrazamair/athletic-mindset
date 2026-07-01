import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "The insight, language, and gameplan to support your athlete's mental game — no psychology background needed.",
};

export default function ParentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
