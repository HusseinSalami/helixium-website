export type Market = "lb" | "ae" | "sa" | "us" | "fr";
export type BillingCycle = "monthly" | "annual";
export type PlanPrice = { monthly: number; annual: number; onboarding?: string };

export const markets: Record<Market, { label: string; currency: string }> = {
  lb: { label: "Lebanon", currency: "USD" },
  ae: { label: "United Arab Emirates", currency: "AED" },
  sa: { label: "Saudi Arabia", currency: "SAR" },
  us: { label: "United States", currency: "USD" },
  fr: { label: "France", currency: "EUR" }
};

export const pricing: Record<Market, { currency: string; plans: Record<"pantheon" | "olympus" | "elysium", PlanPrice>; eInvoicingNote?: string }> = {
  lb: { currency: "USD", plans: { pantheon: { monthly: 39, annual: 390 }, olympus: { monthly: 89, annual: 890 }, elysium: { monthly: 299, annual: 2990 } } },
  ae: { currency: "AED", plans: { pantheon: { monthly: 179, annual: 1790 }, olympus: { monthly: 399, annual: 3990 }, elysium: { monthly: 1499, annual: 14990 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  sa: { currency: "SAR", plans: { pantheon: { monthly: 179, annual: 1790 }, olympus: { monthly: 449, annual: 4490 }, elysium: { monthly: 1699, annual: 16990 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  us: { currency: "USD", plans: { pantheon: { monthly: 79, annual: 790 }, olympus: { monthly: 199, annual: 1990 }, elysium: { monthly: 799, annual: 7990 } } },
  fr: { currency: "EUR", plans: { pantheon: { monthly: 59, annual: 590 }, olympus: { monthly: 149, annual: 1490 }, elysium: { monthly: 599, annual: 5990 } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." }
};

export const addOns = {
  cryptoSettle: { pilotDays: 30, monthly: 29, ratePercent: 0.15, cap: 299, currency: "USD" },
  matchPulse: { monthly: 99, currency: "USD" }
} as const;

export const includedUsers = { pantheon: 5, olympus: 20, elysium: "unlimited" } as const;

export function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}
