import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Athletes",
  description:
    "Get your complete mental performance profile — scored across 22 dimensions and benchmarked against athletes in your sport.",
};

export default function AthletesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
