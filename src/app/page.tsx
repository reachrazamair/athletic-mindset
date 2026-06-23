"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { HeroSection } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/Stats";
import { ReportPreview } from "@/components/landing/ReportPreview";
import { WhatWeMeasure } from "@/components/landing/WhatWeMeasure";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SolutionsFor } from "@/components/landing/SolutionsFor";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTASection } from "@/components/landing/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <StatsSection />
        <ReportPreview />
        <WhatWeMeasure />
        <HowItWorks />
        <SolutionsFor />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
