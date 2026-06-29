"use client";

/**
 * LOGOUT CONFIRM MODAL — Asks the user to confirm before logging out,
 * so an accidental tap doesn't end the session.
 *
 * Mobile-first: full-width sheet feel on small screens, centered card on
 * larger screens. Closes on backdrop click or Escape.
 */

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";

interface LogoutConfirmModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function LogoutConfirmModal({ open, onConfirm, onCancel }: LogoutConfirmModalProps) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", handleKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onCancel]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCancel}
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl glass border border-border/50 p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-6 shadow-[0_8px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Mobile grab handle */}
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border/70 sm:hidden" />

            <div className="flex flex-col items-center text-center">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <LogOut size={22} className="text-red-400" />
              </span>
              <h2 id="logout-title" className="text-lg font-semibold text-text-primary">
                Log out?
              </h2>
              <p className="mt-1.5 text-sm text-text-muted">
                You&apos;ll need to sign in again to access your account.
              </p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
              <button
                onClick={onCancel}
                className="w-full rounded-xl border border-border/50 bg-surface-card/50 px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-card/80 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-all"
              >
                Log out
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
