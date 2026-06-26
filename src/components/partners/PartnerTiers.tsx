"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    requirement: "1–14 paid athletes",
    rate: "30%",
    perAthlete: "$3.00",
    features: [
      "Partner dashboard access",
      "Unique referral link & QR code",
      "Pre-written sharing templates",
      "Monthly Stripe payouts",
      "Real-time earnings tracking",
    ],
    featured: false,
  },
  {
    name: "Growth",
    requirement: "15–49 paid athletes",
    rate: "35%",
    perAthlete: "$3.50",
    features: [
      "Everything in Starter, plus:",
      "Priority partner support",
      "Coach-to-coach referral bonuses",
      "Upgrade nudge tools for free athletes",
      "Monthly earnings summary emails",
    ],
    featured: true,
  },
  {
    name: "Elite",
    requirement: "50+ paid athletes",
    rate: "40%",
    perAthlete: "$4.00",
    features: [
      "Everything in Growth, plus:",
      "Featured in partner directory",
      "Quarterly strategy calls",
      "Co-marketing opportunities",
      "Early access to new features",
      "Ambassador badge & recognition",
    ],
    featured: false,
  },
];

export function PartnerTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-light/30 to-surface" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Partner Tiers
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Grow Your Roster.{" "}
            <span className="gradient-text">Grow Your Rate.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            Your revenue share increases automatically as more of your athletes
            subscribe. No action needed — tier upgrades happen on their own.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
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
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy
                    size={16}
                    className={tier.featured ? "text-primary-light" : "text-text-muted"}
                  />
                  <h3 className="text-lg font-bold text-text-primary">
                    {tier.name}
                  </h3>
                </div>
                <p className="text-xs text-text-muted mb-4">
                  {tier.requirement}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">
                    {tier.rate}
                  </span>
                  <span className="text-text-muted text-sm">rev share</span>
                </div>
                <p className="text-xs text-text-muted mt-1">
                  {tier.perAthlete}/athlete/month
                </p>
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

              <Link
                href="#join"
                className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    : "border border-border-light text-text-primary hover:border-primary/50"
                }`}
              >
                Get Started
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
          Tournament partners & governing bodies qualify for custom institutional
          agreements.{" "}
          <Link href="/contact" className="text-primary-light hover:underline">
            Contact us
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
