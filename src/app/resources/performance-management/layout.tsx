import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Management",
  description:
    "How Athletic Mindset helps athletes and teams manage and improve mental performance over time.",
};

export default function PerformanceManagementLayout({ children }: { children: React.ReactNode }) {
  return children;
}
