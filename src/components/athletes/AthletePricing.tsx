"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "See where you stand",
    features: [
      "Full 22-dimension assessment",
      "8-factor score overview",
      "Basic report with top strengths",
      "Overall percentile ranking",
    ],
    cta: "Start Free",
    href: "#assessment",
    featured: false,
  },
  {
    name: "Elite Report",
    price: "$125",
    period: "/year",
    description: "The complete mental performance experience",
    features: [
      "Everything in Free, plus:",
      "Full detailed report across all 22 dimensions",
      "Personalized Gameplan with mental skills routines",
      "Sport-specific benchmarking",
      "Elite athlete comparison (D1/Pro)",
      "7 Situational Mindset profiles",
      "Unlimited reassessments",
      "Progress tracking over time",
    ],
    cta: "Get Elite Report",
    href: "#buy",
    featured: true,
  },
];

export function AthletePricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="buy" className="relative py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Pricing
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Invest in Your{" "}
            <span className="gradient-text">Mental Edge</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            Start free or go all-in with the Elite Report for the full depth of
            your mental performance profile.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${
                tier.featured
                  ? "gradient-border bg-surface-card glow"
                  : "border border-border/50 bg-surface-card/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1">
                    <Sparkles size={12} className="text-white" />
                    <span className="text-xs font-medium text-white">
                      Recommended
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text-primary">
                    {tier.price}
                  </span>
                  <span className="text-text-muted text-sm">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
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

              <Link
                href={tier.href}
                className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
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
          Parents purchasing for their athlete: create the account with your
          athlete&apos;s name during checkout.
        </motion.p>
      </div>
    </section>
  );
}
