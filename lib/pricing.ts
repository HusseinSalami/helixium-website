export type Market = "lb" | "ae" | "sa" | "us" | "fr";
export type BillingCycle = "monthly" | "annual";
export type IncludedUsers = number | "custom";
export type PlanPrice = { monthly: number; annual: number; includedUsers: IncludedUsers; extraUserMonthly?: number; startsAt?: boolean };

export const markets: Record<Market, { label: string; currency: string }> = {
  lb: { label: "Lebanon", currency: "USD" },
  ae: { label: "United Arab Emirates", currency: "AED" },
  sa: { label: "Saudi Arabia", currency: "SAR" },
  us: { label: "United States", currency: "USD" },
  fr: { label: "France", currency: "EUR" }
};

export const pricing: Record<Market, { currency: string; plans: Record<"pantheon" | "olympus" | "elysium", PlanPrice>; eInvoicingNote?: string }> = {
  lb: { currency: "USD", plans: { pantheon: { monthly: 49, annual: 490, includedUsers: 3, extraUserMonthly: 9 }, olympus: { monthly: 129, annual: 1290, includedUsers: 10 }, elysium: { monthly: 399, annual: 3990, includedUsers: "custom", startsAt: true } } },
  ae: { currency: "AED", plans: { pantheon: { monthly: 229, annual: 2290, includedUsers: 3, extraUserMonthly: 42 }, olympus: { monthly: 579, annual: 5790, includedUsers: 10 }, elysium: { monthly: 1799, annual: 17990, includedUsers: "custom", startsAt: true } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  sa: { currency: "SAR", plans: { pantheon: { monthly: 229, annual: 2290, includedUsers: 3, extraUserMonthly: 42 }, olympus: { monthly: 599, annual: 5990, includedUsers: 10 }, elysium: { monthly: 1999, annual: 19990, includedUsers: "custom", startsAt: true } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." },
  us: { currency: "USD", plans: { pantheon: { monthly: 99, annual: 990, includedUsers: 3, extraUserMonthly: 18 }, olympus: { monthly: 249, annual: 2490, includedUsers: 10 }, elysium: { monthly: 999, annual: 9990, includedUsers: "custom", startsAt: true } } },
  fr: { currency: "EUR", plans: { pantheon: { monthly: 79, annual: 790, includedUsers: 3, extraUserMonthly: 15 }, olympus: { monthly: 199, annual: 1990, includedUsers: 10 }, elysium: { monthly: 749, annual: 7490, includedUsers: "custom", startsAt: true } }, eInvoicingNote: "Local e-invoicing integration on our roadmap - talk to us before you buy." }
};

export const addOns = {
  matchPulse: { pricing: "quoted" }
} as const;

export const includedUsers = { pantheon: 3, olympus: 10, elysium: "custom" } as const;

export function formatPrice(value: number, currency: string, locale = "en") {
  const formatterLocale = locale === "ar" ? "ar" : locale === "fr" ? "fr-FR" : "en-US";
  return new Intl.NumberFormat(formatterLocale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}
