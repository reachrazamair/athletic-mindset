"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, Users, Lock } from "lucide-react";
import { TiltCard } from "@/components/common/TiltCard";

const phases = [
  { icon: Dumbbell, name: "Preparation", factors: ["Grit", "Work Style", "Coachability"], color: "from-blue-500/25 via-blue-600/10 to-blue-700/20" },
  { icon: Flame, name: "Competition", factors: ["Drive", "Focus", "Mental Toughness"], color: "from-cyan-500/25 via-blue-500/10 to-blue-600/20" },
  { icon: Users, name: "Teamwork", factors: ["Leadership", "Team Orientation"], color: "from-blue-400/25 via-cyan-400/10 to-blue-500/20" },
];

export function PhasesPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-3xl border border-border/50 bg-surface-card/50 p-6"
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-text-primary">What we&apos;ll measure</h3>
        <span className="flex items-center gap-1 text-xs text-text-muted">
          <Lock size={11} /> Unlocks after assessment
        </span>
      </div>
      <p className="text-[13px] text-text-muted mb-5">3 phases · 8 factors · 22 dimensions</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {phases.map((phase, i) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
            >
              <TiltCard className="rounded-2xl" max={10} glare={false}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative h-full overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br ${phase.color} animate-gradient p-4`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-card/70">
                    <Icon size={19} className="text-primary-light" />
                  </div>
                  <p className="text-base font-semibold text-text-primary">{phase.name}</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {phase.factors.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
