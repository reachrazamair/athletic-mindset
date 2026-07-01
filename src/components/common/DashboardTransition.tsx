"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DASHBOARD TRANSITION — a short, premium "entering your space" animation
 * shown when a user lands on a dashboard. Deliberately different from the
 * cinematic IntroAnimation: quicker, calmer, ring-based. Reused across the
 * athlete / parent / coach dashboards.
 */
export function DashboardTransition({
  onComplete,
  message = "Welcome to your space",
}: {
  onComplete: () => void;
  message?: string;
}) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1500);
    const t2 = setTimeout(() => onComplete(), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        animate={{ opacity: phase === "out" ? 0 : 1 }}
        transition={phase === "out" ? { duration: 0.55, ease: "easeInOut" } : {}}
      >
        {/* Ambient gradient glow */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7] }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18) 0%, transparent 55%)",
          }}
        />

        {/* Expanding concentric rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-primary/40"
            initial={{ width: 60, height: 60, opacity: 0 }}
            animate={{
              width: [60, 320 + i * 140],
              height: [60, 320 + i * 140],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 0.1 + i * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Center content — logo bars + message */}
        <motion.div
          className="relative flex flex-col items-center"
          animate={
            phase === "out"
              ? { scale: 1.15, opacity: 0, filter: "blur(6px)" }
              : { scale: 1, opacity: 1, filter: "blur(0px)" }
          }
          transition={phase === "out" ? { duration: 0.5, ease: [0.76, 0, 0.24, 1] } : {}}
        >
          {/* AM bars */}
          <div className="relative mb-6 flex items-end justify-center gap-1.5 h-[70px]">
            {[52, 34, 52].map((h, i) => (
              <motion.div
                key={i}
                className="w-3 rounded-[3px]"
                style={{
                  background: "linear-gradient(180deg, #3b82f6, #2563eb 60%, #1d4ed8)",
                }}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: h,
                  opacity: 1,
                  boxShadow: [
                    "0 0 18px rgba(37,99,235,0.4)",
                    "0 0 30px rgba(37,99,235,0.65)",
                    "0 0 18px rgba(37,99,235,0.4)",
                  ],
                }}
                transition={{
                  height: { delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
                  opacity: { delay: 0.15 + i * 0.12, duration: 0.3 },
                  boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            ))}
          </div>

          <motion.p
            className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-primary-light font-semibold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {message}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
