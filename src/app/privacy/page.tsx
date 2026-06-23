"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Account information including name, email address, sport, competition level, and age when you register for an account.",
      "Assessment responses you provide when completing the Athletic Mindset assessment, which are used solely to generate your personalized reports and scores.",
      "Photos you optionally upload for personalization within the platform, stored securely in private storage.",
      "Usage data such as pages visited, features used, and interaction patterns to improve our services.",
      "Payment information processed securely — we never store your full credit card details on our servers.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To generate your T-score assessments, percentile rankings, and personalized Gameplan reports.",
      "To provide comparative benchmarks against our norm population (your data contributes to aggregate, anonymized norms).",
      "To deliver AI coaching interactions and personalized mental training recommendations.",
      "To communicate assessment reminders, progress updates, and platform notifications you opt into.",
      "To improve our assessment instruments and platform experience through aggregate, de-identified analytics.",
    ],
  },
  {
    title: "Data Sharing & Third Parties",
    content: [
      "Coach/Parent access: If you are linked to a coach or parent account, they receive their respective report type (Coach Gameplan or Parent Gameplan) which contains your assessment scores with role-appropriate framing.",
      "We do not sell your personal data or assessment results to any third party.",
      "We use Stripe for payment processing, Twilio for SMS communications, and AWS for secure data hosting.",
      "Aggregated, de-identified data may be used for research purposes to advance sport psychology science.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "All data is encrypted in transit (TLS/SSL) and at rest (AES-256).",
      "Personal photos are stored in private, per-user storage buckets that are never publicly accessible.",
      "We implement role-based access controls ensuring coaches only see their athletes, parents only see linked children.",
      "Regular security audits and vulnerability assessments are conducted on our infrastructure.",
    ],
  },
  {
    title: "Minors & Parental Consent",
    content: [
      "Athletes under the age of 13 require verified parental consent before creating an account or completing assessments.",
      "Parents of minor athletes maintain full access to their child's data and can request deletion at any time.",
      "We comply with COPPA (Children's Online Privacy Protection Act) requirements for users under 13.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access: You can request a full export of your personal data and assessment history at any time.",
      "Deletion: You can request permanent deletion of your account and all associated data.",
      "Correction: You can update inaccurate personal information through your account settings.",
      "Opt-out: You can unsubscribe from marketing communications while maintaining your account.",
      "Portability: Your assessment data can be exported in a standard format.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Active accounts: Data is retained as long as your account is active to enable progress tracking and reassessment comparisons.",
      "Deleted accounts: Upon deletion request, personal data is permanently removed within 30 days. Anonymized, aggregate contributions to norm data are retained.",
      "Assessment history is maintained to support longitudinal tracking — a core feature of mental performance development.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For privacy-related inquiries, data access requests, or deletion requests, contact us at info@myathleticmindset.com.",
      "Athletic Mindset LLC, P.O. Box 2259, Ann Arbor, MI 48106.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <section className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-text-secondary">
                Last updated: June 2026
              </p>
              <p className="text-text-secondary mt-4 leading-relaxed">
                Athletic Mindset LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                protecting the privacy of athletes, parents, coaches, and all
                users of our platform. This policy explains how we collect, use,
                and safeguard your information.
              </p>
            </motion.div>

            <div className="space-y-10 md:space-y-14">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
