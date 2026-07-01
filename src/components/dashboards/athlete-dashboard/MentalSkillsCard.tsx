"use client";

import { motion } from "framer-motion";
import { MessageCircle, Brain, Eye, Repeat, Target, RefreshCw } from "lucide-react";

const skills = [
  { icon: MessageCircle, name: "Self-Talk" },
  { icon: Brain, name: "Emotional Control" },
  { icon: Eye, name: "Visualization" },
  { icon: Repeat, name: "Routines" },
  { icon: Target, name: "Goal Setting" },
  { icon: RefreshCw, name: "Re-Framing" },
];

export function MentalSkillsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="rounded-3xl border border-border/50 bg-surface-card/50 p-6"
    >
      <h3 className="text-base font-semibold text-text-primary mb-1">Mental skills toolkit</h3>
      <p className="text-[13px] text-text-muted mb-5">The 6 skills we&apos;ll help you train.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.35 }}
              whileHover={{ scale: 1.06, y: -5, transition: { duration: 0.12, ease: "easeOut" } }}
              className="group flex cursor-default flex-col items-center gap-2.5 rounded-2xl border-2 border-primary/25 bg-white/[0.05] p-5 text-center transition-colors duration-150 hover:border-primary/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary-light" />
              </span>
              <span className="text-[13px] font-medium text-text-primary">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
