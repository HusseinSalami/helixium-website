"use client";

import { useState } from "react";
import { markets, pricing, type Market } from "../lib/pricing";

export function MarketPricing() {
  const [market, setMarket] = useState<Market>("lb");
  const values = pricing[market];
  return <section className="section-tight"><div className="shell market-pricing"><div><span className="eyebrow">Market and currency</span><h2>See the quote in your market.</h2><p>Prices are currently marked TBD and render as Contact for pricing.</p><p className="market-note">Local e-invoicing integration is on the roadmap. Contact us for market-specific requirements.</p></div><label className="market-select">Market<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><div className="market-values"><div><strong>Pantheon</strong><span>{values.pantheon === "TBD" ? "Contact for pricing" : values.pantheon}</span></div><div><strong>Olympus</strong><span>{values.olympus === "TBD" ? "Contact for pricing" : values.olympus}</span></div><div><strong>Elysium</strong><span>{values.elysium === "TBD" ? "Contact for pricing" : values.elysium}</span></div><div><strong>CryptoSettle</strong><span>{values.cryptoSettle === "TBD" ? "Contact for pricing" : values.cryptoSettle}</span></div></div></div></section>;
}
