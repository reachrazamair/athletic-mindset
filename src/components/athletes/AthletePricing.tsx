"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: "",
    description: "See where you stand — 1 factor unlocked",
    features: [
      "Full 22-dimension assessment",
      "1 factor score unlocked (of 8)",
      "Overall Athletic Mindset score",
      "Basic percentile ranking",
    ],
    lockedFeatures: [
      "Full 8-factor detailed breakdown",
      "Personalized Gameplan",
      "Mental skills routines",
      "Sport-specific benchmarking",
    ],
    cta: "Start Free",
    href: "/assessment",
    featured: false,
  },
  {
    name: "Elite Report",
    monthlyPrice: "$10.42",
    yearlyPrice: "$125",
    period: "/mo",
    description: "The complete mental performance experience",
    features: [
      "Everything in Free, plus:",
      "Full detailed report — all 22 dimensions",
      "Personalized Gameplan with mental skills",
      "Sport-specific benchmarking",
      "Elite athlete comparison (D1/Pro)",
      "7 Situational Mindset profiles",
      "Unlimited reassessments",
      "Progress tracking over time",
      "Parent & Coach report included",
    ],
    lockedFeatures: [],
    cta: "Get Elite Report",
    href: "#buy",
    featured: true,
  },
];

export function AthletePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="buy" className="relative py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-5 uppercase tracking-tight">
            Invest in Your{" "}
            <span className="gradient-text">Mental Edge</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            Start free or go all-in with the Elite Report for the full depth of
            your mental performance profile.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-10 md:mb-14"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                tier.featured
                  ? "gradient-border bg-surface-card glow"
                  : "border border-border/50 bg-surface-card/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1">
                    <Sparkles size={12} className="text-white" />
                    <span className="text-xs font-semibold text-white">
                      Recommended
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">
                    {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  {tier.name !== "Free" && (
                    <span className="text-text-muted text-sm">
                      {isYearly ? "/year" : tier.period}
                    </span>
                  )}
                </div>
                {tier.name === "Elite Report" && !isYearly && (
                  <p className="text-xs text-text-muted mt-1">
                    Billed as $125/year
                  </p>
                )}
              </div>

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

              {/* Locked features for Free tier */}
              {tier.lockedFeatures.length > 0 && (
                <div className="mb-6 pt-4 border-t border-border/30">
                  <p className="text-xs font-medium text-text-muted mb-3 flex items-center gap-1.5">
                    <Lock size={11} />
                    Unlock with Elite
                  </p>
                  <ul className="space-y-2">
                    {tier.lockedFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-50">
                        <Lock size={12} className="mt-0.5 flex-shrink-0 text-text-muted" />
                        <span className="text-xs text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href={tier.href}
                className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    : "border border-border-light text-text-primary hover:border-primary/50"
                }`}
              >
                {tier.cta}
                {tier.featured && (
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs md:text-sm text-text-muted mt-8"
        >
          Parents purchasing for their athlete: the Elite report includes
          a separate Parent Gameplan at no extra cost.
        </motion.p>
      </div>
    </section>
  );
}
