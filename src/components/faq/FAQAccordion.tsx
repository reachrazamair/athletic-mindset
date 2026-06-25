"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "About the Assessment",
    items: [
      {
        question: "What exactly does the Athletic Mindset assessment measure?",
        answer:
          "The assessment measures 22 dimensions of mental performance organized into 8 factors across 3 phases: Preparation (Work Style, Coachability, Grit), Competition (Drive, Focus, Mental Toughness), and Teamwork (Leadership Potential, Team Orientation). Every athlete receives a Total Athletic Mindset Score plus granular scores for each dimension.",
      },
      {
        question: "How long does the assessment take?",
        answer:
          "About 15–20 minutes for a complete evaluation. Athletes answer questions covering all 22 dimensions. There are no wrong answers — it's a self-evaluation of mental tendencies and preferences.",
      },
      {
        question: "Is the assessment scientifically validated?",
        answer:
          "Yes. The assessment is built on peer-reviewed sport psychology and organizational psychology research, validated against 5,000+ athletes across 60+ sports. All dimension scales meet professional psychometric reliability standards (α ≥ .70). It was developed by Dr. Brian Marentette, Ph.D. in Industrial/Organizational Psychology.",
      },
      {
        question: "How is my score calculated?",
        answer:
          "Your raw responses are converted to T-scores (mean 50, standard deviation 10) using our norming population of 5,000+ athletes. Scores range from 20–80, where 50 is exactly average. You also receive percentile rankings both overall and within your specific sport and competition level.",
      },
      {
        question: "Can I retake the assessment?",
        answer:
          "Yes — unlimited reassessments are included with the Elite Report. The platform tracks your progress over time and highlights your biggest improvements.",
      },
      {
        question: "What sports does it cover?",
        answer:
          "The assessment covers 60+ sports. Mental performance dimensions like confidence, focus, and composure are universal across sports, but your scores are benchmarked against athletes in your specific sport and competition level for the most relevant comparison.",
      },
    ],
  },
  {
    title: "Reports & Results",
    items: [
      {
        question: "What's included in the free tier?",
        answer:
          "The free tier includes the full 22-dimension assessment, 1 factor score unlocked (of 8), your overall Athletic Mindset score, and basic percentile ranking. It's a real taste of the platform — enough to see where you stand and decide if you want the full depth.",
      },
      {
        question: "What does the Elite Report add?",
        answer:
          "The Elite Report unlocks everything: full detailed report across all 22 dimensions, personalized Gameplan with specific mental skills, sport-specific benchmarking, elite athlete comparison (D1/Pro level), all 7 Situational Mindset profiles, unlimited reassessments, and progress tracking over time.",
      },
      {
        question: "Do parents and coaches take a separate assessment?",
        answer:
          "No — only athletes take the assessment. Parents and coaches each receive their own tailored report generated from the athlete's results. The Parent Report focuses on communication and support guidance. The Coach Report focuses on development strategy and how to coach each athlete effectively.",
      },
      {
        question: "What are the six mental skills in my Gameplan?",
        answer:
          "Based on your scores, your Gameplan recommends from six evidence-based mental skills: Self-Talk (controlling your inner narrative), Arousal Control (managing energy and anxiety), Visualization (mental rehearsal), Routines (consistent preparation), Goal Setting (directing focus), and Re-Framing (turning setbacks into fuel).",
      },
    ],
  },
  {
    title: "For Parents",
    items: [
      {
        question: "What does the Parent Report include?",
        answer:
          "The Parent Report translates your child's assessment data into plain, jargon-free language. It includes their overall mental profile, a Coachability spotlight (how your child receives feedback), their motivation profile (intrinsic vs. extrinsic), specific communication guidance, conversation starters tied to their scores, and when to seek additional mental performance support.",
      },
      {
        question: "Can I see my child's detailed scores?",
        answer:
          "The Parent Report shows your child's factor-level scores with context and interpretation — but framed around how you can support them, not raw numbers without guidance. The goal is actionable understanding, not data overload.",
      },
      {
        question: "How much does it cost for a parent?",
        answer:
          "The Athlete + Parent Elite bundle is $15/month or $175/year. This includes the full athlete report AND a dedicated Parent Gameplan report at no extra cost. The free tier is always available to try first.",
      },
    ],
  },
  {
    title: "For Coaches",
    items: [
      {
        question: "How does the coach dashboard work?",
        answer:
          "Once athletes on your team complete assessments, you see their mental readiness at a glance — factor scores, development areas, leadership potential, and role recommendations. The Coach Report for each athlete includes specific guidance on how to communicate with and develop that player.",
      },
      {
        question: "What is the Partner Revenue Share program?",
        answer:
          "Coaches can earn 30% of every athlete subscription that comes through their referral link — paid monthly via Stripe. Share your unique link or QR code with your athletes, and earn passive income while helping them develop their mental game. One club director with 90 athletes could earn $1,600+/year.",
      },
      {
        question: "Can I use this for my entire team?",
        answer:
          "Yes. We offer team and club packages for programs with 20+ athletes. Bulk onboarding, roster-wide analytics, and dedicated support are included. Contact us for custom pricing based on your program size.",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    items: [
      {
        question: "Is there really a free tier?",
        answer:
          "Yes — completely free, no credit card required. Take the full 22-dimension assessment, get your overall score and 1 unlocked factor. It's not a trial — it's a permanent free tier you can use anytime.",
      },
      {
        question: "What's the difference between monthly and yearly pricing?",
        answer:
          "Yearly billing saves you money compared to paying month-by-month. Both include all features with no restrictions.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes — cancel with one tap, no questions asked. If you're on a monthly plan, you'll retain access through the end of your billing period. No hidden fees, no long-term commitments.",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-text-primary group-hover:text-primary-light transition-colors pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-12 md:py-20" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-10 md:space-y-14">
          {faqSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
            >
              <h2 className="text-lg md:text-xl font-bold mb-4 text-text-primary">
                {section.title}
              </h2>
              <div className="rounded-2xl border border-border-light bg-surface-card/50 px-6 md:px-8">
                {section.items.map((item) => (
                  <AccordionItem key={item.question} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
