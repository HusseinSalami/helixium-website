"use client";

import Link from "next/link";
import { useState } from "react";
import { addOns, formatPrice, markets, pricing, type BillingCycle, type Market } from "../lib/pricing";
import { planFeatures, plans } from "../lib/plans";
import { localizedPath } from "../lib/site";

const planOrder = ["pantheon", "olympus", "elysium"] as const;

export function MarketPricing({ compact = false, locale = "en" }: { compact?: boolean; locale?: string }) {
  const [market, setMarket] = useState<Market>("lb");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const values = pricing[market];
  const marketLabels = locale === "ar" ? { lb: "لبنان", ae: "الإمارات العربية المتحدة", sa: "السعودية", us: "الولايات المتحدة", fr: "فرنسا" } : locale === "fr" ? { lb: "Liban", ae: "Émirats arabes unis", sa: "Arabie saoudite", us: "États-Unis", fr: "France" } : { lb: "Lebanon", ae: "United Arab Emirates", sa: "Saudi Arabia", us: "United States", fr: "France" };
  const localizedEInvoicingNote = values.eInvoicingNote && (locale === "ar" ? "تكامل الفوترة الإلكترونية المحلية ضمن خارطة الطريق - تواصل معنا قبل الشراء" : locale === "fr" ? "L'intégration de la facturation électronique locale est sur notre feuille de route - contactez-nous avant d'acheter" : values.eInvoicingNote);
  const copy = locale === "ar" ? {
    eyebrow: compact ? "خطط بسيطة" : "خطط واضحة", title: compact ? "اختر خطتك وابدأ." : "خطط تناسب مرحلة عملك.", lead: "الأسعار لا تشمل الضرائب. رسوم الإعداد لمرة واحدة.", market: "السوق", monthly: "شهري", annual: "سنوي", free: "شهران مجاناً", month: "شهرياً", year: "سنوياً", billedAnnual: "عند الفوترة السنوية", mostPopular: "الأكثر شعبية", perVenue: "لكل مكان شهرياً", onboarding: "رسوم الإعداد لمرة واحدة تُحدد مع خطة التجهيز", pantheon: "للفرق الصغيرة التي ترتب الأساسيات.", olympus: "للفرق النامية والعمليات متعددة الشركات.", elysium: "للفرق الكبيرة التي تحتاج إلى ملاءمة أعمق.", trial: "ابدأ تجربة ERP لمدة 14 يوماً", demo: "ابدأ تجربة ERP أو احجز عرضاً", talk: "تحدث معنا", matchPulse: "الأماكن المؤسسة: 99 دولاراً أمريكياً لكل مكان شهرياً", crypto: "CryptoSettle: وصول مبكر، السعر لم يُحدد بعد", footnote: "الأسعار لا تشمل الضرائب. الفوترة السنوية تعادل 10 أشهر. ناقش الضرائب وطرق الدفع ومتطلبات التكامل المحلي قبل الشراء."
  } : locale === "fr" ? {
    eyebrow: compact ? "Offres simples" : "Des offres claires", title: compact ? "Choisissez une offre et avancez." : "Des offres pour chaque étape.", lead: "Tarifs hors taxes. Mise en route facturée une fois.", market: "Marché", monthly: "Mensuel", annual: "Annuel", free: "2 mois offerts", month: "/mois", year: "/an", billedAnnual: "lors de la facturation annuelle", mostPopular: "Le plus populaire", perVenue: "par lieu / mois", onboarding: "La mise en route est chiffrée avec votre configuration", pantheon: "Pour les petites équipes qui structurent l'essentiel.", olympus: "Pour les équipes en croissance et multi-sociétés.", elysium: "Pour les équipes qui ont besoin d'un cadre plus profond.", trial: "Démarrer l'essai ERP de 14 jours", demo: "Essai ERP ou démo", talk: "Parlons-en", matchPulse: "Lieux fondateurs : 99 USD par lieu / mois", crypto: "CryptoSettle : accès anticipé, tarif à venir", footnote: "Tarifs hors taxes. La facturation annuelle correspond à 10 mois. Discutez taxes, paiements et intégrations locales avant achat."
  } : {
    eyebrow: compact ? "Simple plans" : "Plans that stay simple", title: compact ? "Pick a plan and get moving." : "Plans for every stage of your operation.", lead: "Prices are tax-exclusive. Onboarding is a one-time fee.", market: "Market", monthly: "Monthly", annual: "Annual", free: "2 months free", month: "/month", year: "/year", billedAnnual: "when billed annually", mostPopular: "Most popular", perVenue: "per venue / month", onboarding: "One-time onboarding is quoted with your setup", pantheon: "For small teams getting the essentials right.", olympus: "For growing teams and multi-company operations.", elysium: "For enterprise teams that need a deeper fit.", trial: "Start your 14-day ERP trial", demo: "Start an ERP trial or book a demo", talk: "Talk to us", matchPulse: "Founding venues: $99 per venue / month", crypto: "CryptoSettle: Early access, no price yet", footnote: "Prices are tax-exclusive. Annual billing is priced at 10 months. Market-specific tax, payment, and local integration requirements should be discussed before purchase."
  };
  return <section className={`pricing-section ${compact ? "pricing-section-compact" : ""}`}><div className="shell">
    <div className={`pricing-toolbar ${compact ? "pricing-toolbar-compact" : ""}`}><div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.title}</h2><p>{copy.lead}</p></div><div className="pricing-controls"><label>{copy.market}<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{marketLabels[key as Market]} · {item.currency}</option>)}</select></label><div className="billing-toggle" role="group" aria-label={`${copy.monthly} / ${copy.annual}`}><button type="button" aria-pressed={cycle === "monthly"} className={cycle === "monthly" ? "active" : ""} onClick={() => setCycle("monthly")}>{copy.monthly}</button><button type="button" aria-pressed={cycle === "annual"} className={cycle === "annual" ? "active" : ""} onClick={() => setCycle("annual")}>{copy.annual} <span>{copy.free}</span></button></div></div></div>
    <div className="pricing-grid">{planOrder.map((key) => {
      const plan = values.plans[key];
      const featured = key === "olympus";
      const bundle = plans.find((item) => item.key === key);
      const features = planFeatures[locale as keyof typeof planFeatures]?.[key] || bundle?.features || [];
      const name = locale === "en" && bundle ? bundle.name : key[0].toUpperCase() + key.slice(1);
      const description = locale === "en" && bundle ? `${bundle.audience}. ${bundle.copy}` : copy[key];
      const cta = key === "pantheon" ? copy.trial : key === "olympus" ? copy.demo : copy.talk;
      return <article className={`price-card ${featured ? "featured" : ""}`} key={key}>{featured && <span className="price-badge">{copy.mostPopular}</span>}<h3>{name}</h3><p>{description}</p><div className="price-value">{formatPrice(plan[cycle], values.currency, locale)}<small>{cycle === "annual" ? `${copy.year} ${copy.billedAnnual}` : copy.month}</small></div><div className="price-onboarding">{copy.onboarding}</div><ul className="price-list">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className={`button ${featured ? "button-primary" : "button-secondary"}`} href={localizedPath(locale, "/contact/")}>{cta} →</Link></article>;
    })}</div>
    <div className="pricing-addons"><div><strong>MatchPulse <small>(USD)</small></strong><span>{copy.matchPulse}</span></div><div><strong>CryptoSettle</strong><span>{copy.crypto}</span></div></div>
    {localizedEInvoicingNote && <p className="pricing-market-note">{localizedEInvoicingNote}</p>}
    <p className="pricing-footnote">{copy.footnote}</p>
  </div></section>;
}
