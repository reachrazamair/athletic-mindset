"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Award } from "lucide-react";
import type { User } from "@/lib/api";

function timeGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardHero({ user }: { user: User }) {
  const first = user.first_name?.trim() || user.email.split("@")[0];
  const profile = user.athlete_profile;

  const chips = [
    profile?.primary_sport && { icon: Trophy, label: profile.primary_sport },
    profile?.competition_level && { icon: Award, label: profile.competition_level },
    profile?.position && { icon: MapPin, label: profile.position },
  ].filter(Boolean) as { icon: typeof Trophy; label: string }[];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border/50"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/videos/athlete-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-2"
        >
          {timeGreeting()}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-text-primary"
        >
          {first}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-2 max-w-md text-sm md:text-base text-text-secondary"
        >
          Your mental performance command center. Let&apos;s train the part of the game no one else sees.
        </motion.p>

        {chips.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {chips.map((chip, i) => {
              const Icon = chip.icon;
              return (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-surface-card/60 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-text-secondary"
                >
                  <Icon size={13} className="text-primary-light" />
                  {chip.label}
                </motion.span>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
}
