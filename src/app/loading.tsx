import { Loader2 } from "lucide-react";

/** Route-level loading fallback shown during navigation/suspense. */
export default function Loading() {
  return (
    <div className="min-h-[100dvh] bg-surface flex items-center justify-center">
      <Loader2 size={26} className="animate-spin text-primary-light" />
    </div>
  );
}
