import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Coaches and club directors earn recurring revenue by sharing a platform their athletes already need. No selling, no upfront cost.",
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
