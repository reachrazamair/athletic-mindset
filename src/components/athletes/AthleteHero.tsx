"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AthleteHero() {
  return (
    <section className="relative h-[100dvh] flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/athlete-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-surface/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-surface/30" />
      </div>

      {/* Top: Logo - mobile only */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 pt-[env(safe-area-inset-top)] md:hidden"
      >
        <div className="flex justify-center pt-6">
          <Image
            src="/athletic-mindset-logo.png"
            alt="Athletic Mindset"
            width={150}
            height={38}
            className="h-9 w-auto"
            priority
            unoptimized
          />
        </div>
      </motion.div>

      {/* Center: Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-8">
        {/* For Athletes Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 mb-5"
        >
          <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
            For Athletes
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[32px] sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6 text-center"
        >
          Know Your Mental Game.
          <br />
          <span className="gradient-text">Own It.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto max-w-md md:max-w-xl text-[15px] md:text-xl text-text-secondary leading-relaxed mb-7 md:mb-10 text-center"
        >
          Get your complete mental performance profile across{" "}
          <span className="text-text-primary font-medium">22 dimensions</span>.
          Understand your strengths. Fix your gaps. Compete at your best.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="#buy"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base md:text-lg font-semibold text-white hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Your Report
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <p className="mt-3 text-xs md:text-sm text-text-muted">
            15-minute assessment · Instant results · Personalized gameplan
          </p>
        </motion.div>
      </div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 pb-20 md:pb-24"
      >
        <div className="flex items-center justify-center gap-6 md:gap-12 text-center px-6">
          <div>
            <p className="text-xl md:text-2xl font-bold text-text-primary">22</p>
            <p className="text-[10px] md:text-xs text-text-muted">Dimensions</p>
          </div>
          <div className="h-8 w-px bg-border-light" />
          <div>
            <p className="text-xl md:text-2xl font-bold text-text-primary">8</p>
            <p className="text-[10px] md:text-xs text-text-muted">Factors</p>
          </div>
          <div className="h-8 w-px bg-border-light" />
          <div>
            <p className="text-xl md:text-2xl font-bold text-text-primary">3</p>
            <p className="text-[10px] md:text-xs text-text-muted">Phases</p>
          </div>
          <div className="h-8 w-px bg-border-light" />
          <div>
            <p className="text-xl md:text-2xl font-bold text-text-primary">15</p>
            <p className="text-[10px] md:text-xs text-text-muted">Minutes</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
