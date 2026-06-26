"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Link2, Share2, Wallet } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up Free",
    description:
      "Create your partner account in 60 seconds. No approval required. No credit card. No upfront cost.",
  },
  {
    icon: Link2,
    step: "02",
    title: "Get Your Link & QR",
    description:
      "Receive your unique referral link and downloadable QR code instantly. Share it any way you want.",
  },
  {
    icon: Share2,
    step: "03",
    title: "Share With Your Athletes",
    description:
      "Text it to your team, post it at practice, or hand out printed QR codes at tournaments. One link does it all.",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Earn Every Month",
    description:
      "Earn 30–40% of every athlete subscription — automatically deposited via Stripe.",
  },
];

export function PartnerHowItWorks() {
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
            How It Works
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            From Zero to{" "}
            <span className="gradient-text">Earning in 3 Minutes</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            No sales pitch. No long onboarding. Sign up, share your link, and
            start earning when your athletes subscribe.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                {/* Connector line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-0 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-5">
                    <div className="h-16 w-16 rounded-2xl bg-surface-card border border-border/50 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary-light" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                      {step.step.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
