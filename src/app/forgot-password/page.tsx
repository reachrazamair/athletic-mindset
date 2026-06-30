"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MailCheck } from "lucide-react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { forgotPassword } from "@/lib/api";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = async (email: string) => {
    setError(null);
    setIsLoading(true);

    const result = await forgotPassword(email);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
      return;
    }

    // Backend always returns success (it won't reveal if the email exists).
    setSubmittedEmail(email);
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      {submittedEmail ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm text-center"
        >
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"
          >
            <MailCheck size={26} className="text-primary-light" />
          </motion.span>
          <h1 className="text-xl font-semibold text-text-primary mb-2">Check your email</h1>
          <p className="text-sm text-text-muted">
            If an account exists for{" "}
            <span className="text-text-secondary font-medium">{submittedEmail}</span>, we&apos;ve sent a
            link to reset your password. The link expires in 30 minutes.
          </p>
          <Link
            href="/login"
            className="mt-7 inline-block rounded-xl border border-border/50 bg-surface-card/50 px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-card/80 transition-all"
          >
            Back to sign in
          </Link>
        </motion.div>
      ) : (
        <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
      )}
    </AuthLayout>
  );
}
