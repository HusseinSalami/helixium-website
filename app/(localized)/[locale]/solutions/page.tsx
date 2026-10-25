import Link from "next/link";
import { erpUrl, localizedMetadata, localizedPath } from "../../../../lib/site";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return localizedMetadata(params.locale, "/solutions/", "Solutions");
}

const solutionCards = [
  ["Finance operations", "Keep invoices, payments, journals, reconciliation, reminders, and reporting in one reviewable flow."],
  ["Inventory and purchasing", "Connect items, warehouses, lots, low-stock signals, purchase orders, receipts, and deliveries."],
  ["Service operations", "Move from service request to work order, dispatch, checklist, contract, and customer history."],
  ["Retail and POS", "Give front-line teams a point-of-sale experience connected to the wider operating system."],
  ["Predictions and signals", "Explore MatchPulse and forecasting experiences that help teams make a clearer next decision."],
  ["Custom operating loops", "Design focused agentic workflows around the handoffs that make your operation unique."]
];

export default function SolutionsPage({ params }: { params: { locale: string } }) {
  return <><section className="page-hero"><div className="shell"><span className="eyebrow">Solutions</span><h1>Connect the work that falls between departments.</h1><p>Helixium gives teams one operating layer for the records they manage and the next steps they need to coordinate.</p></div></section><section className="section-tight"><div className="shell feature-grid">{solutionCards.map(([title, copy]) => <article className="surface-card" key={title}><span className="card-kicker">Connected workflow</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section><section className="section"><div className="shell dark-panel"><span className="eyebrow">Start with the handoff</span><h2>Bring one workflow. Leave with a clearer operating picture.</h2><p className="hero-lede">Use the ERP as the foundation, then extend into field service, POS, predictions, or a custom agentic solution.</p><div className="hero-actions"><a className="button button-primary" href={erpUrl}>Start free trial ↗</a><Link className="button button-secondary" href={localizedPath(params.locale, "/contact/")}>Talk to Helixium →</Link></div></div></section></>;
}
