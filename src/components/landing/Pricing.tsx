"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles, Lock } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    subtitle: "See Where You Stand",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: "forever",
    description: "Take the full assessment. See 1 of 8 factors unlocked.",
    features: [
      "Full 22-dimension assessment",
      "1 factor score unlocked (of 8)",
      "Overall Athletic Mindset score",
      "Basic percentile ranking",
      "One assessment per year",
    ],
    lockedFeatures: [
      "Full 8-factor breakdown",
      "22-dimension detailed scores",
      "Personalized Gameplan",
      "Mental skills routines",
      "Sport-specific benchmarking",
    ],
    cta: "Start Free Assessment",
    href: "/assessment",
    featured: false,
  },
  {
    name: "Elite",
    subtitle: "Most Popular",
    monthlyPrice: "$10.42",
    yearlyPrice: "$125",
    period: "/mo",
    yearlyPeriod: "/year",
    description: "Unlock your complete mental performance profile.",
    features: [
      "Everything in Free, plus:",
      "Full detailed report — all 22 dimensions",
      "Personalized Gameplan with mental skills",
      "Sport-specific benchmarking",
      "Elite athlete comparison",
      "Unlimited reassessments",
      "Parent & Coach report versions",
      "Progress tracking over time",
      "Priority support",
    ],
    lockedFeatures: [],
    cta: "Get Elite Access",
    href: "/assessment",
    featured: true,
  },
  {
    name: "Team",
    subtitle: "For Clubs & Programs",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    period: "",
    description: "Scale across your entire organization.",
    features: [
      "Everything in Elite, plus:",
      "Bulk athlete onboarding (CSV, links, QR)",
      "Coach dashboard with roster view",
      "Team-level mental readiness analytics",
      "At-risk athlete identification",
      "Team Mindset Assessment included",
      "Partner revenue share program",
      "Dedicated account support",
    ],
    lockedFeatures: [],
    cta: "Contact Sales",
    href: "/contact",
    featured: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Choose Your{" "}
            <span className="gradient-text">Level</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base md:text-lg">
            Start free. Upgrade when you&apos;re ready to unlock the full depth of
            your mental performance profile.
          </p>
        </motion.div>

        {/* Monthly / Yearly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-text-primary" : "text-text-muted"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 rounded-full bg-surface-card border border-border-light transition-colors"
            aria-label="Toggle billing period"
          >
            <motion.div
              animate={{ x: isYearly ? 24 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-primary"
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-text-primary" : "text-text-muted"
            }`}
          >
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-medium text-primary-light bg-primary/10 px-2 py-0.5 rounded-full"
            >
              Save 15%
            </motion.span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className={`relative rounded-2xl p-7 md:p-8 flex flex-col ${
                tier.featured
                  ? "gradient-border bg-surface-card glow md:scale-[1.03]"
                  : "border border-border/50 bg-surface-card/50"
              }`}
            >
              {/* Popular Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1">
                    <Sparkles size={12} className="text-white" />
                    <span className="text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Tier Info */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-muted mb-5">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">
                    {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  {tier.name !== "Team" && (
                    <span className="text-text-muted text-sm">
                      {isYearly
                        ? tier.name === "Free"
                          ? ""
                          : "/year"
                        : tier.period}
                    </span>
                  )}
                </div>
                {tier.name === "Elite" && !isYearly && (
                  <p className="text-xs text-text-muted mt-1">
                    Billed as $125/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.featured ? "text-primary-light" : "text-text-muted"
                      }`}
                    />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Locked Features (Free tier only) */}
              {tier.lockedFeatures && tier.lockedFeatures.length > 0 && (
                <div className="mb-6 pt-4 border-t border-border/30">
                  <p className="text-xs font-medium text-text-muted mb-3 flex items-center gap-1.5">
                    <Lock size={11} />
                    Unlock with Elite
                  </p>
                  <ul className="space-y-2">
                    {tier.lockedFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 opacity-50"
                      >
                        <Lock size={12} className="mt-0.5 flex-shrink-0 text-text-muted" />
                        <span className="text-xs text-text-muted">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Link
                href={tier.href}
                className={`block text-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    : "border border-border-light text-text-primary hover:border-primary/50 hover:bg-surface-card"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-text-muted mt-12"
        >
          All plans include our psychologist-engineered 22-dimension assessment.
          No credit card required for free tier.
        </motion.p>
      </div>
    </section>
  );
}
