"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQCTA } from "@/components/faq/FAQCTA";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <FAQHero />
        <FAQAccordion />
        <FAQCTA />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
