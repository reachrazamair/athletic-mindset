"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign } from "lucide-react";

const earningsExamples = [
  {
    type: "Youth Travel Coach",
    athletes: "20 athletes",
    rate: "40% convert",
    subscribers: "8 paid",
    monthly: "$24/mo",
    annual: "$288/yr",
  },
  {
    type: "Club Director (1 team)",
    athletes: "30 athletes",
    rate: "50% convert",
    subscribers: "15 paid",
    monthly: "$53/mo",
    annual: "$540/yr",
    highlighted: true,
  },
  {
    type: "Club Director (3 teams)",
    athletes: "90 athletes",
    rate: "50% convert",
    subscribers: "45 paid",
    monthly: "$135/mo",
    annual: "$1,618/yr",
  },
  {
    type: "Large Club Owner",
    athletes: "200 athletes",
    rate: "50% convert",
    subscribers: "100 paid",
    monthly: "$300/mo",
    annual: "$3,596/yr",
    highlighted: true,
  },
];

export function PartnerEarnings() {
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
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            The Math
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Real Coaches.{" "}
            <span className="gradient-text">Real Earnings.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            You earn up to 40% of every athlete subscription linked to your
            referral code. Every month. Forever.
          </p>
        </motion.div>

        {/* Earnings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {earningsExamples.map((example, index) => (
            <motion.div
              key={example.type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl p-6 transition-all duration-300 ${
                example.highlighted
                  ? "gradient-border bg-surface-card glow"
                  : "border border-border/50 bg-surface-card/50 hover:border-primary/40 hover:glow"
              }`}
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="h-5 w-5 text-primary-light" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {example.type}
              </h3>
              <p className="text-xs text-text-muted mb-4">
                {example.athletes} · {example.rate}
              </p>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-text-primary">
                  {example.annual}
                </p>
                <p className="text-xs text-text-muted">
                  {example.monthly} recurring
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs md:text-sm text-text-muted mt-8 max-w-lg mx-auto"
        >
          Based on $9.99/month athlete subscription. Earnings scale automatically
          as your roster grows — no cap on how much you can earn.
        </motion.p>
      </div>
    </section>
  );
}
