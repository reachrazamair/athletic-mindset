"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Athletic Mindset platform (myathleticmindset.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. These terms apply to all users including athletes, parents, coaches, and organizational administrators.",
  },
  {
    title: "2. Description of Services",
    content:
      "Athletic Mindset provides psychometric mental performance assessments, personalized reports (Athlete Gameplan, Parent Gameplan, Coach Gameplan), AI-powered coaching interactions, progress tracking, and team-level analytics. Our assessments are designed for developmental purposes — to help athletes grow — not as clinical diagnostic tools.",
  },
  {
    title: "3. Account Registration",
    content:
      "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials. Athletes under 13 require verified parental consent. Each account is personal and non-transferable. You agree to notify us immediately of any unauthorized access.",
  },
  {
    title: "4. Subscriptions & Payments",
    content:
      "Paid subscriptions are billed through Stripe on a monthly or annual basis as selected at checkout. Subscriptions auto-renew unless cancelled before the renewal date. Refund requests within 7 days of initial purchase will be honored for unused services. Team and organizational packages are billed annually and governed by separate agreements.",
  },
  {
    title: "5. Assessment & Report Usage",
    content:
      "Assessment results and reports are provided for personal development and coaching purposes only. Reports should not be used as the sole basis for recruitment decisions, team selection, or any form of discrimination. T-scores and percentile rankings represent relative standing against our norm population and should be interpreted within context.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All assessment instruments, scoring algorithms, report narratives, T-score formulations, and platform content are the intellectual property of Athletic Mindset LLC. You may not reproduce, distribute, reverse-engineer, or create derivative works from our assessment instruments or scoring methodology without written permission.",
  },
  {
    title: "7. User Content & Data",
    content:
      "You retain ownership of personal data you provide (photos, assessment responses). By using our platform, you grant us a license to use your anonymized, aggregate assessment data to improve our norm populations, validate our instruments, and advance sport psychology research. Identifiable data is never shared without consent.",
  },
  {
    title: "8. Coach & Parent Access",
    content:
      "Coaches can access Coach Gameplan reports for athletes on their roster who have consented to this access. Parents can access Parent Gameplan reports for their linked minor children. Adults (18+) must explicitly grant access to coaches or other parties. Access permissions can be revoked at any time through account settings.",
  },
  {
    title: "9. AI Coaching Disclaimer",
    content:
      "Our AI Coach provides general mental performance guidance based on your assessment data and sport psychology principles. It is not a substitute for licensed therapy, clinical psychology, or medical advice. If you are experiencing mental health concerns, please contact a qualified professional. In crisis, contact 988 (Suicide & Crisis Lifeline).",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "Athletic Mindset provides mental performance insights for developmental purposes. We do not guarantee specific athletic outcomes, scholarship offers, or performance improvements. Our assessments measure psychological constructs as self-reported by the user and are subject to the inherent limitations of self-report instruments. Services are provided 'as is' without warranties of any kind.",
  },
  {
    title: "11. Termination",
    content:
      "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse the platform. Upon termination, your access to reports and data will be revoked. You may request a data export before account closure. Active subscriptions will not be refunded upon termination for cause.",
  },
  {
    title: "12. Changes to Terms",
    content:
      "We may update these Terms of Service from time to time. Significant changes will be communicated via email or platform notification at least 30 days before taking effect. Continued use of the platform after changes take effect constitutes acceptance of the updated terms.",
  },
  {
    title: "13. Governing Law",
    content:
      "These terms are governed by the laws of the State of Michigan. Any disputes shall be resolved in the courts of Washtenaw County, Michigan. You agree to resolve disputes through good-faith negotiation before pursuing legal action.",
  },
  {
    title: "14. Contact",
    content:
      "Questions about these terms can be directed to info@myathleticmindset.com or Athletic Mindset LLC, P.O. Box 2259, Ann Arbor, MI 48106.",
  },
];

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-text-secondary">
                Last updated: June 2026
              </p>
              <p className="text-text-secondary mt-4 leading-relaxed">
                Please read these Terms of Service carefully before using the
                Athletic Mindset platform. By using our services, you agree to
                be bound by the following terms and conditions.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                >
                  <h2 className="text-base md:text-lg font-semibold mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {section.content}
                  </p>
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
