export type Market = "lb" | "ae" | "sa" | "us" | "fr";

export const markets: Record<Market, { label: string; currency: string }> = {
  lb: { label: "Lebanon", currency: "USD" },
  ae: { label: "United Arab Emirates", currency: "AED" },
  sa: { label: "Saudi Arabia", currency: "SAR" },
  us: { label: "United States", currency: "USD" },
  fr: { label: "France", currency: "EUR" }
};

export const pricing: Record<Market, Record<"pantheon" | "olympus" | "elysium" | "cryptoSettle", string>> = {
  lb: { pantheon: "TBD", olympus: "TBD", elysium: "TBD", cryptoSettle: "TBD" },
  ae: { pantheon: "TBD", olympus: "TBD", elysium: "TBD", cryptoSettle: "TBD" },
  sa: { pantheon: "TBD", olympus: "TBD", elysium: "TBD", cryptoSettle: "TBD" },
  us: { pantheon: "TBD", olympus: "TBD", elysium: "TBD", cryptoSettle: "TBD" },
  fr: { pantheon: "TBD", olympus: "TBD", elysium: "TBD", cryptoSettle: "TBD" }
};
