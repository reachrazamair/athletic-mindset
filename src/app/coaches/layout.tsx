import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Coaches",
  description:
    "A complete mental readiness picture for every athlete on your roster — without adding hours to your week.",
};

export default function CoachesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
