"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Beaker,
  Layers,
  Target,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";

const methodologySteps = [
  {
    icon: Beaker,
    title: "Validated Instrument",
    description:
      "Our assessment is built on peer-reviewed research from sport psychology and organizational psychology, validated against 5,000+ athletes across 60+ sports.",
  },
  {
    icon: Layers,
    title: "Four-Level Architecture",
    description:
      "22 Dimensions roll up into 8 Factors, which compose 3 Phases (Preparation, Competition, Teamwork), yielding one Total Athletic Mindset Score.",
  },
  {
    icon: Target,
    title: "T-Score Norming",
    description:
      "Every score is expressed as a T-score (mean 50, SD 10) against the norming population — giving athletes precise, scientifically anchored feedback on where they stand.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Benchmarking",
    description:
      "Athletes receive both a static T-score and a dynamic percentile rank within their sport and competition level, updated with every new assessment in the platform.",
  },
  {
    icon: Users,
    title: "Role-Specific Reports",
    description:
      "The same psychometric data generates three different reports — for athletes, parents, and coaches — each written in appropriate language with tailored action items.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Gameplans",
    description:
      "Every personalized Gameplan recommends from six validated mental skills (Self-Talk, Arousal Control, Visualization, Routines, Goal Setting, Re-Framing) based on the athlete's unique profile.",
  },
];

export function ResearchMethodology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 md:py-28 border-t border-border/30 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface-light via-surface-alt to-surface-light" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            How We Measure the Mental Game
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A rigorous, multi-layer scoring system that transforms subjective
            mental performance into objective, trackable data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {methodologySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border-light bg-surface-card p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                <step.icon size={22} className="text-primary-light" />
              </div>
              <h3 className="text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
