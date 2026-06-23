"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Target,
  Brain,
  TrendingUp,
  Zap,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "T-Scores Across 22 Dimensions",
    description:
      "Every aspect of your mental game scored on a scientific scale — from Focus to Grit to Mental Toughness.",
  },
  {
    icon: Target,
    title: "Personalized Gameplan",
    description:
      "Actionable development strategies tailored to your weakest areas with specific mental skills routines.",
  },
  {
    icon: Brain,
    title: "Situational Mindset Analysis",
    description:
      "7 mindset profiles showing how you perform under pressure, deal with setbacks, and lead your team.",
  },
  {
    icon: TrendingUp,
    title: "Sport-Specific Benchmarking",
    description:
      "See how you stack up against thousands of athletes in your sport, age group, and competition level.",
  },
  {
    icon: Zap,
    title: "Elite Comparison",
    description:
      "Compare your scores directly against D1 and professional athletes to see where you stand.",
  },
  {
    icon: BookOpen,
    title: "Mental Skills Routines",
    description:
      "Self-talk, visualization, emotional control, and goal-setting techniques assigned to your specific gaps.",
  },
];

export function WhatYouGet() {
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
            What You Get
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            Your Complete Mental{" "}
            <span className="gradient-text">Performance Profile</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm md:text-lg">
            One assessment. 15 minutes. A deep, scientific look at the mental
            side of your game that no physical test can measure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
