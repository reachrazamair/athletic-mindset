"use client";

import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import Link from "next/link";
import type { User } from "@/lib/api";

export function GettingStartedCard({ user }: { user: User }) {
  const steps = [
    { label: "Create your account", done: true, href: undefined as string | undefined },
    { label: "Verify your email", done: user.is_verified, href: "/verify-email" },
    { label: "Complete your profile", done: Boolean(user.athlete_profile?.primary_sport), href: "/settings" },
    { label: "Take your first assessment", done: false, href: "/assessment" },
  ];

  const completed = steps.filter((s) => s.done).length;
  const pct = Math.round((completed / steps.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-surface-card/50 p-6"
    >
      {/* Ambient floating orb */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl animate-float" />

      <div className="relative flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-text-primary">Getting started</h3>
        <span className="text-xs font-medium text-primary-light">{pct}%</span>
      </div>

      {/* Progress bar with moving sheen */}
      <div className="relative mt-2 mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full animate-gradient"
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #60a5fa, #2563eb, #60a5fa)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        />
      </div>

      <ul className="relative space-y-2.5">
        {steps.map((step, i) => {
          const content = (
            <div className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                  step.done ? "bg-green-500/15 text-green-400" : "bg-white/5 text-text-muted"
                }`}
              >
                {step.done ? <Check size={13} /> : <Circle size={9} />}
              </span>
              <span className={`text-sm ${step.done ? "text-text-muted line-through" : "text-text-secondary"}`}>
                {step.label}
              </span>
            </div>
          );
          return (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
            >
              {!step.done && step.href ? (
                <Link href={step.href} className="block rounded-lg hover:bg-white/[0.03] -mx-1 px-1 py-0.5 transition-colors">
                  {content}
                </Link>
              ) : (
                content
              )}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
