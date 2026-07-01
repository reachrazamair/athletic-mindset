"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TiltCard } from "@/components/common/TiltCard";

// Curated tips — rotates daily. AI-personalized later.
const TIPS = [
  "Control the controllables. Your effort, attitude, and preparation are always yours.",
  "Pressure is a privilege — it means you're in a moment that matters.",
  "Talk to yourself like you'd talk to a teammate you believe in.",
  "You don't rise to the occasion. You fall to the level of your preparation.",
  "Reset in one breath. The next play is the only one you can win.",
  "Confidence is built in practice, not found in competition.",
  "Visualize the rep before you take it. Your mind can rehearse success.",
];

const DAY_MS = 86_400_000;
// Reading the clock via an external store keeps render pure and avoids any
// server/client hydration mismatch (server starts at tip 0, client syncs).
const subscribe = () => () => {};
const getDayIndex = () => Math.floor(Date.now() / DAY_MS) % TIPS.length;
const getServerDayIndex = () => 0;

export function DailyTipCard() {
  const dayIndex = useSyncExternalStore(subscribe, getDayIndex, getServerDayIndex);
  const tip = TIPS[dayIndex];

  return (
    <TiltCard className="rounded-3xl" max={6}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/20 p-6"
      >
        {/* Moving gradient background */}
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(120deg, rgba(37,99,235,0.28) 0%, rgba(96,165,250,0.10) 40%, rgba(29,78,216,0.24) 70%, rgba(37,99,235,0.28) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-surface-card/40" />
        {/* Floating orb */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl animate-float" />

        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
            Today&apos;s Focus
          </span>
          <Quote className="mt-4 h-7 w-7 text-primary/40" />
          <p className="mt-3 text-base md:text-lg font-medium leading-relaxed text-text-primary">
            {tip}
          </p>
        </div>
      </motion.div>
    </TiltCard>
  );
}
