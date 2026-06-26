"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Users,
  QrCode,
  CreditCard,
  TrendingUp,
  Award,
} from "lucide-react";

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: "Earnings Dashboard",
    description:
      "Your monthly earnings front and center — large, prominent, and motivating. See exactly what your athletes generate for you.",
  },
  {
    icon: Users,
    title: "Athlete Roster",
    description:
      "Track every athlete linked to your code. See who's subscribed, who's free, and who's ready for an upgrade nudge.",
  },
  {
    icon: TrendingUp,
    title: "Earnings History",
    description:
      "Month-by-month earnings chart with projections. Watch your revenue compound as your roster grows.",
  },
  {
    icon: QrCode,
    title: "Share & Grow Tools",
    description:
      "One-tap link sharing, downloadable QR codes, pre-written text and email templates. Make sharing effortless.",
  },
  {
    icon: CreditCard,
    title: "Automated Payouts",
    description:
      "Stripe Connect handles everything. Monthly deposits on the 15th, 1099 tax docs, full transaction history.",
  },
  {
    icon: Award,
    title: "Leaderboard & Badges",
    description:
      "See how you rank among other partners. Earn shareable badges as you grow. Coaches are competitive — use it.",
  },
];

export function PartnerDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Your Partner Dashboard
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Built to Make Earning{" "}
            <span className="gradient-text">Visible & Effortless</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            Every time you open your dashboard, you see money. That&apos;s by
            design. When earnings are visible, partners share more.
          </p>
        </motion.div>

        {/* Dashboard Preview Mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 md:mb-16 relative"
        >
          <div className="rounded-2xl border border-border/50 bg-surface-card/80 p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs text-text-muted uppercase tracking-wider">
                This month
              </p>
              <span className="text-xs text-primary-light font-medium">
                ↑ 23% vs last month
              </span>
            </div>
            <p className="text-5xl md:text-6xl font-black text-text-primary mb-2">
              $134.87
            </p>
            <p className="text-sm text-text-muted mb-6">
              From 38 active subscribers
            </p>
            <div className="flex items-center gap-4 text-xs text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Growth Tier · 35% rate
              </span>
              <span className="text-text-muted">|</span>
              <span>Next payout: Jul 15</span>
            </div>
          </div>
          {/* Gradient glow behind */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 blur-2xl scale-105" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {dashboardFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group rounded-2xl border border-border/50 bg-surface-card/50 p-6 hover:border-primary/40 hover:glow transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary-light" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
