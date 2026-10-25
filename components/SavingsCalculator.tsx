"use client";

import { useState } from "react";
import { formatPrice, includedUsers, markets, pricing, type Market } from "../lib/pricing";

export function SavingsCalculator({ locale }: { locale: string }) {
  const [market, setMarket] = useState<Market>("lb");
  const [users, setUsers] = useState<number>(includedUsers.olympus);
  const monthly = pricing[market].plans.olympus.monthly;
  const odooYear = users * 24 * 12;
  const helixiumYear = monthly * 10;
  const saving = odooYear - helixiumYear;
  const comparable = pricing[market].currency === "USD";
  return <section className="section"><div className="shell savings-band"><div className="savings-copy"><span className="eyebrow">See the difference</span><h2>A flat price can leave more room for the work.</h2><p>Compare a typical per-user ERP benchmark with Helixium Olympus for your team size.</p><label className="savings-market">Market<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><label className="slider-label"><span><strong>{users}</strong> users</span><input type="range" min="1" max={includedUsers.olympus} value={users} onChange={(event) => setUsers(Number(event.target.value))} /></label></div><div className="savings-result"><span className="savings-kicker">{comparable ? "Estimated yearly saving" : "Local comparison"}</span>{comparable ? <><strong>{formatPrice(Math.max(saving, 0), pricing[market].currency)}</strong><div className="savings-compare"><span>Typical per-user ERP<br /><b>{formatPrice(odooYear, "USD")}/year</b></span><span>Helixium Olympus<br /><b>{formatPrice(helixiumYear, pricing[market].currency)}/year</b></span></div></> : <><strong>Compare in USD</strong><p className="savings-unavailable">The selected market uses {pricing[market].currency}. We will show a local-currency saving once a comparison FX basis is confirmed.</p></>}<small>Based on published list prices as of Oct 2026. The $24/user/month benchmark is a USD baseline. <a href="https://www.odoo.com/pricing">Source: Odoo pricing</a>.</small></div></div></section>;
}
