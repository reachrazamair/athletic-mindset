/**
 * VALIDATION — Shared client-side checks for auth forms.
 *
 * These give instant feedback as the user types. The backend still validates
 * everything too (never trust the client), so these are purely for UX.
 */

// Minimum password length — the only password rule for now.
export const MIN_PASSWORD_LENGTH = 8;

/** Basic email shape check: something@something.something */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Password rule: at least MIN_PASSWORD_LENGTH characters. */
export function isValidPassword(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}
