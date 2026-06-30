"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { resetPassword } from "@/lib/api";

function ResetPasswordInner() {
  const router = useRouter();
  const token = useSearchParams().get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // No token in the URL — the link is malformed.
  if (!token) {
    return (
      <div className="w-full max-w-sm text-center">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
          <AlertTriangle size={26} className="text-red-400" />
        </span>
        <h1 className="text-xl font-semibold text-text-primary mb-2">Invalid reset link</h1>
        <p className="text-sm text-text-muted">
          This link is missing or broken. Please request a new password reset.
        </p>
        <Link
          href="/forgot-password"
          className="mt-7 inline-block rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-all"
        >
          Request new link
        </Link>
      </div>
    );
  }

  const handleSubmit = async (password: string) => {
    setError(null);
    setIsLoading(true);

    const result = await resetPassword(token, password);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
      return;
    }

    setDone(true);
    setIsLoading(false);
    // Send them to login after a short beat
    setTimeout(() => router.push("/login"), 2200);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.1 }}
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10"
        >
          <CheckCircle2 size={28} className="text-green-400" />
        </motion.span>
        <h1 className="text-xl font-semibold text-text-primary mb-2">Password reset</h1>
        <p className="text-sm text-text-muted flex items-center justify-center gap-2">
          <Loader2 size={14} className="animate-spin" />
          Taking you to sign in...
        </p>
      </motion.div>
    );
  }

  return <ResetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />;
}

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<Loader2 size={22} className="animate-spin text-text-muted" />}>
        <ResetPasswordInner />
      </Suspense>
    </AuthLayout>
  );
}
