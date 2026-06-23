"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Users, Target, Award, BookOpen } from "lucide-react";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Brain,
    title: "Science-First",
    description:
      "Every dimension, every score, every recommendation is grounded in peer-reviewed sport psychology research and validated psychometric standards.",
  },
  {
    icon: Shield,
    title: "Development Over Judgment",
    description:
      "We don't label athletes as good or bad. We identify strengths to leverage and growth areas to develop — always framed as opportunity.",
  },
  {
    icon: Users,
    title: "The Whole Network",
    description:
      "Athletes don't perform in isolation. We provide tailored insights for the athlete, their parents, and their coaches — all working together.",
  },
  {
    icon: Target,
    title: "Actionable Outcomes",
    description:
      "Reports aren't just scores. Every assessment produces a personalized Gameplan with specific mental skills, routines, and strategies.",
  },
  {
    icon: Award,
    title: "Elite Standards",
    description:
      "Our assessments are benchmarked against thousands of athletes including D1 and professional competitors. Know exactly where you stand.",
  },
  {
    icon: BookOpen,
    title: "Continuous Growth",
    description:
      "Mental performance isn't a one-time test. We track progress over time with reassessments, showing real growth in mental strength.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                Our Story
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Where Science Meets the{" "}
                <span className="gradient-text">Athletic Mind</span>
              </h1>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
                Athletic Mindset was built to bring world-class psychometric
                science to athletes, coaches, and parents — transforming the
                mental game from guesswork into a measurable, trainable skill
                set.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 border-t border-border/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <Section>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
                  Our Mission
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Make the mental game measurable, trainable, and accessible
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Physical performance is tracked obsessively — speed, strength,
                  agility all have numbers. But the mental game? It&apos;s been left
                  to guesswork. Coaches say &ldquo;be more confident&rdquo; without knowing
                  what that means quantitatively or how to develop it
                  systematically.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We built Athletic Mindset to change that. Our platform gives
                  athletes, parents, and coaches the same precision for mental
                  performance that they expect from physical metrics — backed by
                  real science, not motivational posters.
                </p>
              </Section>

              <Section>
                <div className="rounded-2xl border border-border/50 bg-surface-card/50 p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        22
                      </div>
                      <div className="text-xs text-text-muted">Dimensions Measured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        10K+
                      </div>
                      <div className="text-xs text-text-muted">Athletes Assessed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        60+
                      </div>
                      <div className="text-xs text-text-muted">Sports Covered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        3
                      </div>
                      <div className="text-xs text-text-muted">Report Types</div>
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-t border-border/30 bg-surface-light/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Section className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                What We Believe
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Our core principles guide every assessment, every report, and
                every recommendation we make.
              </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-border/50 bg-surface-card/50 p-6 md:p-8"
                >
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                    <value.icon size={22} className="text-primary-light" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 border-t border-border/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Section className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4 block">
                The Team
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-8">
                Who&apos;s Behind Athletic Mindset
              </h2>

              <div className="space-y-8">
                <div className="rounded-2xl border border-border/50 bg-surface-card/30 p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-1">
                    Brian J. Marentette, Ph.D.
                  </h3>
                  <p className="text-sm text-primary-light mb-3">
                    Founder · Partner
                  </p>
                  <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <p>
                      Dr. Marentette is the founder and president of Sports Mentalytics
                      (now Athletic Mindset). He is an expert in performance management,
                      organizational psychology, psychometrics, and statistics/analytics
                      with over 10 years of experience in consulting, research, and
                      teaching. He leads all assessment, analytics, development, and
                      consulting for the platform.
                    </p>
                    <p>
                      He holds a Ph.D. in Industrial/Organizational Psychology from
                      DePaul University in Chicago, IL and is a Professional Member of
                      the Association for Applied Sport Psychology. His doctoral research
                      was completed with Dr. Suzanne Bell, an international expert on
                      team performance who currently leads the CREWS project helping
                      NASA select and develop teams of astronauts for long-distance space
                      missions.
                    </p>
                    <p>
                      As an athlete, Dr. Marentette played varsity ice hockey, golf, and
                      lacrosse at Pioneer High School in Ann Arbor, MI and was awarded
                      Male Athlete of the Year in 2001 — the only male athlete in his
                      graduating class of 500 students to earn a varsity letter in three
                      different sports. He also co-head coached Holt, MI varsity lacrosse
                      in 2003-2005.
                    </p>
                    <p>
                      Dr. Marentette has developed and administered more than 75 skills
                      assessment and development systems to 8,000+ individuals, published
                      research in the International Journal of Selection and Assessment
                      and Organizational Psychology Review, and has consulted with
                      organizations including Securitas, CareerBuilder, the Chicago Fire
                      Department, and the Chicago Police Department.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-surface-card/30 p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-1">Casey Cittadino</h3>
                  <p className="text-sm text-primary-light mb-3">Partner</p>
                  <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <p>
                      In 2001, Casey was an un-recruited high school athlete who got a
                      last-minute opportunity to play lacrosse for then #3 ranked Towson
                      Tigers, practically as a walk-on. He went on to become a 2x
                      Captain, All-American, and is ranked among the top 50 players in
                      school history.
                    </p>
                    <p>
                      Casey played Major League Lacrosse for 9 seasons — 7 with the
                      Denver Outlaws and 2 with the Charlotte Hounds. He also competed
                      in the 2014 and 2018 FIL World Games for Team Israel as both a
                      player and coach.
                    </p>
                    <p>
                      Having always been fascinated with the athletic mindset and truly
                      wanting to develop athletes differently, Casey partnered with Dr.
                      Brian Marentette to bring this platform to athletes around the
                      world — providing informed insights into the mental aspects of
                      athletics and helping players develop the skills needed for peak
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
