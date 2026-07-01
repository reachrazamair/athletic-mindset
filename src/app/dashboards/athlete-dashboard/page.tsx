"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { RequireAuth } from "@/components/common/RequireAuth";
import { DashboardTransition } from "@/components/common/DashboardTransition";
import { AthleteDashboard } from "@/components/dashboards/athlete-dashboard/AthleteDashboard";
import { useAuth } from "@/lib/auth-context";
import type { User } from "@/lib/api";

function ComingSoon({ role }: { role: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[50vh] flex-col items-center justify-center text-center"
    >
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <Rocket size={26} className="text-primary-light" />
      </span>
      <h1 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary">
        Your {role} dashboard is coming
      </h1>
      <p className="mt-2 max-w-md text-sm text-text-secondary">
        We&apos;re building your personalized space. Check back soon — it&apos;s on the way.
      </p>
    </motion.div>
  );
}

function DashboardContent() {
  const { user } = useAuth();
  const u = user as User; // guaranteed present inside RequireAuth
  const roles = u.roles.map((r) => r.role);
  const isAthlete = roles.includes("athlete");

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-surface pt-8 md:pt-24 pb-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {isAthlete ? (
            <AthleteDashboard user={u} />
          ) : (
            <ComingSoon role={roles.includes("coach") ? "coach" : roles.includes("parent") ? "parent" : "team"} />
          )}
        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default function DashboardPage() {
  // Play the entrance transition once when landing on the dashboard.
  const [showIntro, setShowIntro] = useState(true);

  return (
    <RequireAuth>
      {showIntro && <DashboardTransition onComplete={() => setShowIntro(false)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardContent />
      </motion.div>
    </RequireAuth>
  );
}
