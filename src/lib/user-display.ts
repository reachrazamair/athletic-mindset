/**
 * USER DISPLAY — Small helpers for showing a user's name and avatar initials.
 */

import type { User } from "@/lib/api";

/** Full name if available, otherwise the part of the email before the @. */
export function displayName(user: User): string {
  const full = [user.first_name, user.last_name].filter(Boolean).join(" ").trim();
  if (full) return full;
  return user.email.split("@")[0];
}

/** 1-2 letter initials for the avatar. Falls back to the first email letter. */
export function initials(user: User): string {
  const first = user.first_name?.trim()?.[0];
  const last = user.last_name?.trim()?.[0];

  if (first && last) return (first + last).toUpperCase();
  if (first) return first.toUpperCase();

  return (user.email.trim()[0] || "?").toUpperCase();
}
