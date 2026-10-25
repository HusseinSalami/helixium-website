"use client";

import { useState } from "react";
import { formatPrice, markets, pricing, type Market } from "../lib/pricing";

export function SavingsCalculator({ locale }: { locale: string }) {
  const [market, setMarket] = useState<Market>("lb");
  const [users, setUsers] = useState(20);
  const monthly = pricing[market].plans.olympus.monthly;
  const odooYear = users * 24 * 12;
  const helixiumYear = monthly * 10;
  const saving = odooYear - helixiumYear;
  return <section className="section"><div className="shell savings-band"><div className="savings-copy"><span className="eyebrow">See the difference</span><h2>A flat price can leave more room for the work.</h2><p>Compare a typical per-user ERP benchmark with Helixium Olympus for your team size.</p><label className="savings-market">Market<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><label className="slider-label"><span><strong>{users}</strong> users</span><input type="range" min="1" max="100" value={users} onChange={(event) => setUsers(Number(event.target.value))} /></label></div><div className="savings-result"><span className="savings-kicker">Estimated yearly saving</span><strong>{formatPrice(Math.max(saving, 0), pricing[market].currency)}</strong><div className="savings-compare"><span>Typical per-user ERP<br /><b>{formatPrice(odooYear, "USD")}/year</b></span><span>Helixium Olympus<br /><b>{formatPrice(helixiumYear, pricing[market].currency)}/year</b></span></div><small>Based on published list prices as of Oct 2026. The $24/user/month benchmark is a USD baseline; no exchange rates are applied. <a href="https://www.odoo.com/pricing">Source: Odoo pricing</a>.</small></div></div></section>;
}
