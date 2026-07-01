import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club & School",
  description:
    "A complete mental performance system for your whole program — every athlete assessed, every coach equipped, every team stronger.",
};

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
