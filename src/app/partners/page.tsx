"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { PartnerHero } from "@/components/partners/PartnerHero";
import { PartnerEarnings } from "@/components/partners/PartnerEarnings";
import { PartnerHowItWorks } from "@/components/partners/PartnerHowItWorks";
import { PartnerTiers } from "@/components/partners/PartnerTiers";
import { PartnerDashboard } from "@/components/partners/PartnerDashboard";
import { PartnerTournament } from "@/components/partners/PartnerTournament";
import { PartnerCTA } from "@/components/partners/PartnerCTA";

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <PartnerHero />
        <PartnerEarnings />
        <PartnerHowItWorks />
        <PartnerTiers />
        <PartnerDashboard />
        <PartnerTournament />
        <PartnerCTA />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
