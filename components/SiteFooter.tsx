import Link from "next/link";
import { erpUrl, localizedPath, whatsappUrl } from "../lib/site";

export function SiteFooter({ locale = "en" }: { locale?: string }) {
  const copy = locale === "ar" ? { desc: "برمجيات تحول إشارات التشغيل إلى الخطوة التالية المعتمدة.", explore: "استكشف", field: "الخدمة الميدانية", solutions: "الحلول", plans: "الخطط", compare: "مقارنة", customers: "العملاء", talk: "تواصل معنا", trial: "ابدأ تجربة مجانية", cloud: "سحابي أو محلي" } : locale === "fr" ? { desc: "Des logiciels qui transforment les signaux opérationnels en prochaine action validée.", explore: "Explorer", field: "Service terrain", solutions: "Solutions", plans: "Offres", compare: "Comparer", customers: "Clients", talk: "Nous contacter", trial: "Démarrer un essai", cloud: "Cloud ou sur site" } : { desc: "Software that turns operational signals into the next approved action.", explore: "Explore", field: "Field service", solutions: "Solutions", plans: "Plans", compare: "Compare", customers: "Customers", talk: "Talk to us", trial: "Start a free trial", cloud: "Cloud or on-premise" };
  return <footer className="site-footer"><div className="shell">
    <div className="footer-grid">
      <div><Link className="brand" href={localizedPath(locale, "/")}><span className="brand-mark" aria-hidden="true">H</span><span className="brand-copy">Helixium Solutions</span></Link><p className="footer-copy">{copy.desc}</p></div>
      <div><h2 className="footer-heading">{copy.explore}</h2><div className="footer-links"><Link href={localizedPath(locale, "/erp/")}>ERP</Link><Link href={localizedPath(locale, "/field-service/")}>{copy.field}</Link><Link href={localizedPath(locale, "/cryptosettle/")}>CryptoSettle</Link><Link href={localizedPath(locale, "/matchpulse/")}>MatchPulse</Link><Link href={localizedPath(locale, "/solutions/")}>{copy.solutions}</Link><Link href={localizedPath(locale, "/plans/")}>{copy.plans}</Link><Link href={localizedPath(locale, "/compare/")}>{copy.compare}</Link><Link href={localizedPath(locale, "/customers/")}>{copy.customers}</Link></div></div>
      <div><h2 className="footer-heading">{copy.talk}</h2><div className="footer-links"><a href="mailto:info@helixiumsolutions.com">info@helixiumsolutions.com</a><a href="tel:+96171495273">+961 71 49 52 73</a><a href="tel:+15127169315">+1 (512) 716-9315</a><a href={whatsappUrl}>WhatsApp</a><span>13800 Lyndhurst Street<br />Austin, TX 78717</span><a href={erpUrl}>{copy.trial} ↗</a></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Helixium Solutions. All rights reserved.</span><span>{copy.cloud}</span></div>
  </div></footer>;
}
