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

const localizedRows = {
  ar: [
    ["نموذج التسعير", "سعر ثابت لكل شركة", "لكل مستخدم / خطة", "شرائح اشتراك", "شرائح اشتراك"],
    ["واجهة بالعربية والفرنسية", "نعم", "تحقق", "تحقق", "تحقق"],
    ["الخدمة الميدانية وأوامر الإصلاح", "مضمنة في مصدر ERP", "تحقق", "تحقق", "تحقق"],
    ["نقاط البيع", "Olympus و Elysium", "تحقق", "تحقق", "تحقق"],
    ["خيار النشر المحلي", "تواصل معنا", "تحقق", "تحقق", "تحقق"],
    ["وكلاء ذكاء اصطناعي مع موافقة", "مصمم حول الموافقة", "تحقق", "تحقق", "تحقق"]
  ],
  fr: [
    ["Modèle tarifaire", "Prix fixe par entreprise", "Par utilisateur / offre", "Niveaux d'abonnement", "Niveaux d'abonnement"],
    ["Interface arabe et française", "Oui", "Vérifier", "Vérifier", "Vérifier"],
    ["Service terrain et ordres de réparation", "Inclus dans le code ERP", "Vérifier", "Vérifier", "Vérifier"],
    ["Caisse", "Olympus et Elysium", "Vérifier", "Vérifier", "Vérifier"],
    ["Option sur site", "Contactez-nous", "Vérifier", "Vérifier", "Vérifier"],
    ["Agents IA avec validation", "Conçu autour de la validation", "Vérifier", "Vérifier", "Vérifier"]
  ]
} as const;

const sourceLinks = {
  odoo: "https://www.odoo.com/pricing",
  quickbooks: "https://quickbooks.intuit.com/pricing/",
  zoho: "https://www.zoho.com/books/pricing/"
};

export function ComparePage({ locale }: { locale: string }) {
  const copy = locale === "ar" ? { eyebrow: "مقارنة", title: "بديل Odoo في لبنان والخليج.", lead: "قارن نموذج التسعير والمنتج، لا عدد الميزات فقط. نذكر فقط حقائق Helixium التي يؤكدها مصدر ERP؛ أما خانات تحقق فتحتاج إلى مراجعة السوق والإصدار الحالي.", matters: "ما يهم", helixium: "Helixium ERP", note: "تعني «تحقق» أن السوق أو الإصدار أو الإعداد يحتاج إلى تأكيد. لا تعني أن المنافس يفتقد القدرة.", scrollHint: "مرر أفقياً للمقارنة", sources: "المصادر", sourceTitle: "حقائق من كود المنتج", competitorTitle: "تحقق قبل الانتقال", cta: "شاهد كيف سيبدو عملك في Helixium.", demo: "احجز عرضاً", pricing: "شاهد الأسعار", sourceHelixium: "واجهة ERP المترجمة، ومسارات أوامر العمل والإصلاح، ومصفوفة الحزم والأسعار المنشورة.", sourceCompetitors: "O1: صفحات أسعار وميزات Odoo. Q1: صفحات أسعار ومنتج QuickBooks Online. Z1: صفحات أسعار وميزات Zoho Books." } : locale === "fr" ? { eyebrow: "Comparer", title: "Une alternative à Odoo au Liban et dans le Golfe.", lead: "Comparez le modèle tarifaire et le produit, pas seulement le nombre de fonctionnalités. Nous indiquons uniquement les faits Helixium vérifiés dans le code ERP; les cellules « Vérifier » demandent une confirmation selon le marché et l'édition.", matters: "Ce qui compte", helixium: "Helixium ERP", note: "« Vérifier » signifie que le marché, l'édition ou la configuration doit être confirmé. Cela ne signifie pas que le concurrent ne possède pas la capacité.", scrollHint: "Faites défiler horizontalement pour comparer", sources: "Références", sourceTitle: "Faits issus du produit", competitorTitle: "Vérifier avant de changer", cta: "Voyez votre travail dans Helixium.", demo: "Réserver une démo", pricing: "Voir les tarifs", sourceHelixium: "Interface ERP localisée, parcours d'ordres de travail et de réparation, et matrice publiée des offres et tarifs.", sourceCompetitors: "O1 : pages de prix et fonctionnalités Odoo. Q1 : pages de prix et produit QuickBooks Online. Z1 : pages de prix et fonctionnalités Zoho Books." } : { eyebrow: "Compare", title: "An Odoo alternative for Lebanon and the Gulf.", lead: "Compare the pricing and product model, not just the feature count. We only state Helixium facts verified in the ERP source; competitor cells marked Check need confirmation from their current product and market terms.", matters: "What matters", helixium: "Helixium ERP", note: "Check means the current market, edition, or configuration needs confirmation. It is not a claim that the competitor lacks the capability.", scrollHint: "Swipe horizontally to compare", sources: "Sources", sourceTitle: "Facts from the product", competitorTitle: "Verify before switching", cta: "See how your work would look in Helixium.", demo: "Book a demo", pricing: "See pricing", sourceHelixium: "Localized ERP interface, work-order and repair-order workflows, and the published bundle and pricing matrix.", sourceCompetitors: "O1: Odoo pricing and feature pages. Q1: QuickBooks Online pricing and product pages. Z1: Zoho Books pricing and feature pages." };
  const tableRows = locale === "ar" ? localizedRows.ar : locale === "fr" ? localizedRows.fr : rows;
  return <><StructuredData data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare/" }], locale)} /><section className="page-hero"><div className="shell"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.lead}</p></div></section><section className="section-tight"><div className="shell"><p className="compare-scroll-hint">{copy.scrollHint}</p><div className="compare-wrap"><table className="compare-table"><thead><tr><th>{copy.matters}</th><th>{copy.helixium}</th><th>Odoo <sup><a href={sourceLinks.odoo}>[O1]</a></sup></th><th>QuickBooks Online <sup><a href={sourceLinks.quickbooks}>[Q1]</a></sup></th><th>Zoho Books <sup><a href={sourceLinks.zoho}>[Z1]</a></sup></th></tr></thead><tbody>{tableRows.map(([label, helixium, odoo, quickbooks, zoho]) => <tr key={label}><th scope="row">{label}</th><td>{helixium}</td><td>{odoo}<sup><a href={sourceLinks.odoo}>[O1]</a></sup></td><td>{quickbooks}<sup><a href={sourceLinks.quickbooks}>[Q1]</a></sup></td><td>{zoho}<sup><a href={sourceLinks.zoho}>[Z1]</a></sup></td></tr>)}</tbody></table></div><p className="compare-note">{copy.note}</p></div></section><section className="section"><div className="shell source-grid"><article className="surface-card"><span className="card-kicker">Helixium</span><h2>{copy.sourceTitle}</h2><p>{copy.sourceHelixium}</p></article><article className="surface-card"><span className="card-kicker">{copy.sources}</span><h2>{copy.competitorTitle}</h2><p>{copy.sourceCompetitors}</p></article></div></section><section className="cta"><span className="eyebrow">{copy.sources}</span><h2>{copy.cta}</h2><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/contact/")}>{copy.demo} →</Link><Link className="button button-secondary" href={localizedPath(locale, "/plans/")}>{copy.pricing}</Link></div></section></>;
}
