"use client";

import { motion } from "framer-motion";
import { Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/common/TiltCard";

export function ScoreTeaserCard() {
  const size = 190;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <TiltCard className="rounded-3xl" max={7}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-surface-card/50 p-8 text-center"
      >
        {/* Rotating conic sheen */}
        <div
          className="pointer-events-none absolute -inset-1/2 opacity-30 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(37,99,235,0.25) 20%, transparent 40%, transparent 60%, rgba(96,165,250,0.2) 80%, transparent 100%)",
          }}
        />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(37,99,235,0.14)_0%,_transparent_60%)]" />

        <span className="relative mb-6 text-xs font-semibold uppercase tracking-widest text-primary-light">
          Your Athletic Mindset
        </span>

        {/* Ring */}
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="url(#scoreGrad)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: c * 0.72 }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center: locked state */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15"
            >
              <Lock size={22} className="text-primary-light" />
            </motion.div>
            <span className="mt-2 font-display text-3xl font-black text-text-primary">--</span>
            <span className="text-[10px] uppercase tracking-widest text-text-muted">Locked</span>
          </div>
        </div>

        <p className="relative mt-6 max-w-xs text-sm text-text-secondary">
          Take your 15-minute assessment to reveal your score across{" "}
          <span className="text-text-primary font-medium">22 dimensions</span> of your mental game.
        </p>

        <Link
          href="/assessment"
          className="group relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-light hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles size={15} />
          Reveal My Score
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </TiltCard>
  );
}
