import Link from "next/link";
import { localizedPath } from "../lib/site";
import { StructuredData, breadcrumbJsonLd } from "./StructuredData";

const rows = [
  ["Pricing model", "Flat price per company", "Per user / plan", "Subscription tiers", "Subscription tiers"],
  ["Arabic and French UI", "Yes", "Check", "Check", "Check"],
  ["Field service and repair orders", "Included in ERP source", "Check", "Check", "Check"],
  ["POS", "Olympus and Elysium", "Check", "Check", "Check"],
  ["On-premise option", "Contact us", "Check", "Check", "Check"],
  ["AI agents with approval", "Designed around approval", "Check", "Check", "Check"]
];

export function ComparePage({ locale }: { locale: string }) {
  return <><StructuredData data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare/" }], locale)} /><section className="page-hero"><div className="shell"><span className="eyebrow">Compare</span><h1>An Odoo alternative for Lebanon and the Gulf.</h1><p>Compare the operating model, not just the feature count. We only state Helixium facts verified in the ERP source; competitor cells marked Check need confirmation from their current product and market terms.</p></div></section><section className="section-tight"><div className="shell"><div className="compare-wrap"><table className="compare-table"><thead><tr><th>What matters</th><th>Helixium ERP</th><th>Odoo</th><th>QuickBooks Online</th><th>Zoho Books</th></tr></thead><tbody>{rows.map(([label, helixium, odoo, quickbooks, zoho]) => <tr key={label}><th scope="row">{label}</th><td>{helixium}</td><td>{odoo}<sup>[O1]</sup></td><td>{quickbooks}<sup>[Q1]</sup></td><td>{zoho}<sup>[Z1]</sup></td></tr>)}</tbody></table></div><p className="compare-note">Check means the current market, edition, or configuration needs confirmation. It is not a claim that the competitor lacks the capability.</p></div></section><section className="section"><div className="shell source-grid"><article className="surface-card"><span className="card-kicker">Helixium sources</span><h2>Facts from the product code</h2><p>H1: ERP front-end localization entries. H2: work-order and repair-order source modules. H3: `lib/plans.ts` and the approved pricing matrix.</p></article><article className="surface-card"><span className="card-kicker">Competitor sources</span><h2>Verify before switching</h2><p>O1: Odoo pricing and feature pages. Q1: QuickBooks Online pricing and product pages. Z1: Zoho Books pricing and feature pages. Links are listed in PRICING-SOURCES.md.</p></article></div></section><section className="cta"><span className="eyebrow">Want a closer fit?</span><h2>See how your workflow would look in Helixium.</h2><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/contact/")}>Book a demo →</Link><Link className="button button-secondary" href={localizedPath(locale, "/plans/")}>See pricing</Link></div></section></>;
}
