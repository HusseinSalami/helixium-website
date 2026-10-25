"use client";

import Link from "next/link";
import { useState } from "react";
import { addOns, formatPrice, markets, pricing, type BillingCycle, type Market } from "../lib/pricing";
import { localizedPath } from "../lib/site";

const planOrder = ["pantheon", "olympus", "elysium"] as const;

export function MarketPricing({ compact = false, locale = "en" }: { compact?: boolean; locale?: string }) {
  const [market, setMarket] = useState<Market>("lb");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const values = pricing[market];
  return <section className={`pricing-section ${compact ? "pricing-section-compact" : ""}`}><div className="shell">
    {!compact && <div className="pricing-toolbar"><div><span className="eyebrow">Plans that stay simple</span><h2>Clear pricing for the way you work.</h2><p>Prices are tax-exclusive. Onboarding is a one-time fee.</p></div><div className="pricing-controls"><label>Market<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><div className="billing-toggle" aria-label="Billing cycle"><button className={cycle === "monthly" ? "active" : ""} onClick={() => setCycle("monthly")}>Monthly</button><button className={cycle === "annual" ? "active" : ""} onClick={() => setCycle("annual")}>Annual <span>2 months free</span></button></div></div></div>}
    {compact && <div className="pricing-toolbar pricing-toolbar-compact"><div><span className="eyebrow">Simple plans</span><h2>Pick a plan and get moving.</h2><p>Tax-exclusive pricing. Onboarding is one-time.</p></div><div className="pricing-controls"><label>Market<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><div className="billing-toggle" aria-label="Billing cycle"><button className={cycle === "monthly" ? "active" : ""} onClick={() => setCycle("monthly")}>Monthly</button><button className={cycle === "annual" ? "active" : ""} onClick={() => setCycle("annual")}>Annual <span>2 months free</span></button></div></div></div>}
    <div className="pricing-grid">{planOrder.map((key) => {
      const plan = values.plans[key];
      const featured = key === "olympus";
      return <article className={`price-card ${featured ? "featured" : ""}`} key={key}>{featured && <span className="price-badge">Most popular</span>}<h3>{key[0].toUpperCase() + key.slice(1)}</h3><p>{key === "pantheon" ? "For small teams getting the essentials right." : key === "olympus" ? "For growing teams and multi-company operations." : "For enterprise teams that need a deeper fit."}</p><div className="price-value">{formatPrice(plan[cycle], values.currency)}<small>/month {cycle === "annual" ? "when billed annually" : ""}</small></div><div className="price-onboarding">One-time onboarding is quoted with your setup</div><ul className="price-list">{key === "pantheon" ? ["Invoicing", "Stock", "Accounting", "Standard reporting", "Basic AI prompting"] : key === "olympus" ? ["Everything in Pantheon", "POS", "Manufacturing", "Advanced reporting", "Workflow automation"] : ["Everything in Olympus", "Full customization", "External integrations and APIs", "Advanced configuration", "Advanced AI"]}</ul><Link className={`button ${featured ? "button-primary" : "button-secondary"}`} href={localizedPath(locale, "/contact/")}>{key === "pantheon" ? "Start the 14-day trial" : key === "olympus" ? "Start a trial or book a demo" : "Talk to us"} →</Link></article>;
    })}</div>
    <div className="pricing-addons"><div><strong>CryptoSettle</strong><span>30-day pilot, then {formatPrice(addOns.cryptoSettle.monthly, addOns.cryptoSettle.currency)}/month + {addOns.cryptoSettle.ratePercent}% of matched volume, capped at {formatPrice(addOns.cryptoSettle.cap, addOns.cryptoSettle.currency)}.</span></div><div><strong>MatchPulse</strong><span>Founding venues: {formatPrice(addOns.matchPulse.monthly, addOns.matchPulse.currency)}/month per venue.</span></div></div>
    {values.eInvoicingNote && <p className="pricing-market-note">{values.eInvoicingNote}</p>}
    <p className="pricing-footnote">Prices are tax-exclusive. Annual billing is priced at 10 months. Market-specific tax, payment, and local integration requirements should be discussed before purchase.</p>
  </div></section>;
}
