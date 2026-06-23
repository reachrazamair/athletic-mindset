"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { AthleteHero } from "@/components/athletes/AthleteHero";
import { WhatYouGet } from "@/components/athletes/WhatYouGet";
import { MentalFramework } from "@/components/athletes/MentalFramework";
import { AthleteReportPreview } from "@/components/athletes/AthleteReportPreview";
import { HowItHelps } from "@/components/athletes/HowItHelps";
import { AthleteTestimonials } from "@/components/athletes/AthleteTestimonials";
import { AthletePricing } from "@/components/athletes/AthletePricing";
import { AthleteCTA } from "@/components/athletes/AthleteCTA";

export default function AthletesPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <AthleteHero />
        <WhatYouGet />
        <MentalFramework />
        <AthleteReportPreview />
        <HowItHelps />
        <AthleteTestimonials />
        <AthletePricing />
        <AthleteCTA />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
