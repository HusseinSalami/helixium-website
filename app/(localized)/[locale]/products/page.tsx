import Link from "next/link";
import { erpUrl, localizedMetadata, localizedPath } from "../../../../lib/site";

const products = [
  { kicker: "Core platform", title: "Helixium ERP", copy: "A connected workspace for sales, purchasing, accounting, inventory, production, payroll, POS, and reporting.", features: ["Invoices, orders, quotations, returns", "Payments, journals, trial balance, P&L", "Items, warehouses, lots, deliveries", "Production orders and recipes"] },
  { kicker: "Field operations", title: "Field Service & Dispatch", copy: "Make service work visible from intake to dispatch to completion.", features: ["Work orders and repair orders", "Dispatch board and scheduling", "Inspection checklists", "Service contracts and requests"] },
  { kicker: "Signals & forecasts", title: "Predictions", copy: "Turn signals into a decision surface with MatchPulse and forecasting products.", features: ["MatchPulse product experience", "Forecasting workflows", "Clearer operating signals", "Human-readable recommendations"] },
  { kicker: "Built around you", title: "Custom Agentic Solutions", copy: "Design a focused agent workflow around the parts of your business that do not fit a template.", features: ["Workflow discovery", "Approval-aware orchestration", "System and data integration", "A practical path from pilot to scale"] }
];

export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/products/", "Products"); }
export default function ProductsPage({ params }: { params: { locale: string } }) {
  const currentLocale = params.locale;
  return <><section className="page-hero"><div className="shell"><span className="eyebrow">Products</span><h1>Software for the work between the records.</h1><p>Helixium brings the system of record and the next best action into the same operating layer. Start with the ERP, then extend into service, POS, predictions, and custom agentic workflows.</p></div></section><section className="section-tight"><div className="shell feature-grid">{products.map((product) => <article className="surface-card" key={product.title}><span className="card-kicker">{product.kicker}</span><h3>{product.title}</h3><p>{product.copy}</p><ul className="bullet-list">{product.features.map((item) => <li key={item}><span className="check" aria-hidden="true">✓</span><span>{item}</span></li>)}</ul></article>)}</div></section><section className="cta"><h2>See where your next workflow fits.</h2><p>Take a guided look at the platform or start exploring with a 14-day trial.</p><div className="hero-actions"><a className="button button-primary" href={erpUrl}>Start free trial ↗</a><Link className="button button-secondary" href={localizedPath(currentLocale, "/contact/")}>Book a demo →</Link></div></section></>;
}
