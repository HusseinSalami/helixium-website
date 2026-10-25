export type Market = "lb" | "ae" | "sa" | "us" | "fr";
export type BillingCycle = "monthly" | "annual";
export type PlanPrice = { monthly: number; annual: number; onboarding?: number };

export const markets: Record<Market, { label: string; currency: string }> = {
  lb: { label: "Lebanon", currency: "USD" },
  ae: { label: "United Arab Emirates", currency: "AED" },
  sa: { label: "Saudi Arabia", currency: "SAR" },
  us: { label: "United States", currency: "USD" },
  fr: { label: "France", currency: "EUR" }
};

export const pricing: Record<Market, { currency: string; plans: Record<"pantheon" | "olympus" | "elysium", PlanPrice>; eInvoicingNote?: string }> = {
  lb: { currency: "USD", plans: { pantheon: { monthly: 39, annual: 390, onboarding: 99 }, olympus: { monthly: 89, annual: 890, onboarding: 199 }, elysium: { monthly: 299, annual: 2990, onboarding: 499 } } },
  ae: { currency: "AED", plans: { pantheon: { monthly: 179, annual: 1790, onboarding: 499 }, olympus: { monthly: 399, annual: 3990, onboarding: 999 }, elysium: { monthly: 1499, annual: 14990, onboarding: 2499 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  sa: { currency: "SAR", plans: { pantheon: { monthly: 179, annual: 1790, onboarding: 499 }, olympus: { monthly: 449, annual: 4490, onboarding: 999 }, elysium: { monthly: 1699, annual: 16990, onboarding: 2499 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  us: { currency: "USD", plans: { pantheon: { monthly: 79, annual: 790, onboarding: 199 }, olympus: { monthly: 199, annual: 1990, onboarding: 399 }, elysium: { monthly: 799, annual: 7990, onboarding: 999 } } },
  fr: { currency: "EUR", plans: { pantheon: { monthly: 59, annual: 590, onboarding: 149 }, olympus: { monthly: 149, annual: 1490, onboarding: 299 }, elysium: { monthly: 599, annual: 5990, onboarding: 699 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." }
};

export const addOns = {
  cryptoSettle: { pilotDays: 30, monthly: 29, ratePercent: 0.15, cap: 299, currency: "USD" },
  matchPulse: { monthly: 99, currency: "USD" }
} as const;

export const includedUsers = { pantheon: 5, olympus: 20, elysium: "unlimited" } as const;

export function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}
