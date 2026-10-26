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
  const localizedEInvoicingNote = values.eInvoicingNote && (locale === "ar" ? "تكامل الفوترة الإلكترونية المحلية ضمن خارطة الطريق - تواصل معنا قبل الشراء" : locale === "fr" ? "L'intégration de la facturation électronique locale est sur notre feuille de route - contactez-nous avant d'acheter" : values.eInvoicingNote);
  const copy = locale === "ar" ? {
    eyebrow: compact ? "خطط بسيطة" : "خطط واضحة", title: compact ? "اختر خطتك وابدأ." : "أسعار واضحة لطريقة عملك.", lead: "الأسعار لا تشمل الضرائب. رسوم الإعداد لمرة واحدة.", market: "السوق", monthly: "شهري", annual: "سنوي", free: "شهران مجاناً", month: "شهرياً", year: "سنوياً", perVenue: "لكل مكان شهرياً", onboarding: "رسوم الإعداد لمرة واحدة تُحدد مع خطة التجهيز", pantheon: "للفرق الصغيرة التي ترتب الأساسيات.", olympus: "للفرق النامية والعمليات متعددة الشركات.", elysium: "للفرق الكبيرة التي تحتاج إلى ملاءمة أعمق.", trial: "ابدأ تجربة 14 يوماً", demo: "ابدأ تجربة أو احجز عرضاً", talk: "تحدث معنا", addonPilot: "تجربة 30 يوماً، ثم", addonVenues: "الأماكن المؤسسة", footnote: "الأسعار لا تشمل الضرائب. الفوترة السنوية تعادل 10 أشهر. ناقش الضرائب وطرق الدفع ومتطلبات التكامل المحلي قبل الشراء."
  } : locale === "fr" ? {
    eyebrow: compact ? "Offres simples" : "Des offres claires", title: compact ? "Choisissez une offre et avancez." : "Des tarifs clairs pour votre façon de travailler.", lead: "Tarifs hors taxes. Mise en route facturée une fois.", market: "Marché", monthly: "Mensuel", annual: "Annuel", free: "2 mois offerts", month: "/mois", year: "/an", perVenue: "par lieu / mois", onboarding: "La mise en route est chiffrée avec votre configuration", pantheon: "Pour les petites équipes qui structurent l'essentiel.", olympus: "Pour les équipes en croissance et multi-sociétés.", elysium: "Pour les équipes qui ont besoin d'un cadre plus profond.", trial: "Démarrer l'essai de 14 jours", demo: "Essai ou démo", talk: "Parlons-en", addonPilot: "Pilote de 30 jours, puis", addonVenues: "Lieux fondateurs", footnote: "Tarifs hors taxes. La facturation annuelle correspond à 10 mois. Discutez taxes, paiements et intégrations locales avant achat."
  } : {
    eyebrow: compact ? "Simple plans" : "Plans that stay simple", title: compact ? "Pick a plan and get moving." : "Clear pricing for the way you work.", lead: "Prices are tax-exclusive. Onboarding is a one-time fee.", market: "Market", monthly: "Monthly", annual: "Annual", free: "2 months free", month: "/month", year: "/year", perVenue: "per venue / month", onboarding: "One-time onboarding is quoted with your setup", pantheon: "For small teams getting the essentials right.", olympus: "For growing teams and multi-company operations.", elysium: "For enterprise teams that need a deeper fit.", trial: "Start the 14-day trial", demo: "Start a trial or book a demo", talk: "Talk to us", addonPilot: "30-day pilot, then", addonVenues: "Founding venues", footnote: "Prices are tax-exclusive. Annual billing is priced at 10 months. Market-specific tax, payment, and local integration requirements should be discussed before purchase."
  };
  return <section className={`pricing-section ${compact ? "pricing-section-compact" : ""}`}><div className="shell">
    <div className={`pricing-toolbar ${compact ? "pricing-toolbar-compact" : ""}`}><div><span className="eyebrow">{copy.eyebrow}</span><h2>{copy.title}</h2><p>{copy.lead}</p></div><div className="pricing-controls"><label>{copy.market}<select value={market} onChange={(event) => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, item]) => <option key={key} value={key}>{item.label} · {item.currency}</option>)}</select></label><div className="billing-toggle" role="group" aria-label={`${copy.monthly} / ${copy.annual}`}><button type="button" aria-pressed={cycle === "monthly"} className={cycle === "monthly" ? "active" : ""} onClick={() => setCycle("monthly")}>{copy.monthly}</button><button type="button" aria-pressed={cycle === "annual"} className={cycle === "annual" ? "active" : ""} onClick={() => setCycle("annual")}>{copy.annual} <span>{copy.free}</span></button></div></div></div>
    <div className="pricing-grid">{planOrder.map((key) => {
      const plan = values.plans[key];
      const featured = key === "olympus";
      const bundle = plans.find((item) => item.key === key);
      const features = planFeatures[locale as keyof typeof planFeatures]?.[key] || bundle?.features || [];
      return <article className={`price-card ${featured ? "featured" : ""}`} key={key}>{featured && <span className="price-badge">Most popular</span>}<h3>{key[0].toUpperCase() + key.slice(1)}</h3><p>{copy[key]}</p><div className="price-value">{formatPrice(plan[cycle], values.currency)}<small>{cycle === "annual" ? `${copy.year} when billed annually` : copy.month}</small></div><div className="price-onboarding">{copy.onboarding}</div><ul className="price-list">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className={`button ${featured ? "button-primary" : "button-secondary"}`} href={localizedPath(locale, "/contact/")}>{key === "pantheon" ? copy.trial : key === "olympus" ? copy.demo : copy.talk} →</Link></article>;
    })}</div>
    <div className="pricing-addons"><div><strong>CryptoSettle <small>(USD)</small></strong><span>{copy.addonPilot} {formatPrice(addOns.cryptoSettle.monthly, addOns.cryptoSettle.currency)}{copy.month} + {addOns.cryptoSettle.ratePercent}% {locale === "ar" ? "من حجم المطابقة، بحد أقصى" : locale === "fr" ? "du volume rapproché, plafonné à" : "of matched volume, capped at"} {formatPrice(addOns.cryptoSettle.cap, addOns.cryptoSettle.currency)}.</span></div><div><strong>MatchPulse <small>(USD)</small></strong><span>{copy.addonVenues}: {formatPrice(addOns.matchPulse.monthly, addOns.matchPulse.currency)} {copy.perVenue}.</span></div></div>
    {localizedEInvoicingNote && <p className="pricing-market-note">{localizedEInvoicingNote}</p>}
    <p className="pricing-footnote">{copy.footnote}</p>
  </div></section>;
}
