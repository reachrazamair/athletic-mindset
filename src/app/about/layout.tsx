import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Athletic Mindset — built by athletes, engineered by psychologists to make the mental edge measurable and trainable.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
