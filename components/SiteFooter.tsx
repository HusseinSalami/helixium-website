import Link from "next/link";
import { erpUrl, localizedPath, whatsappUrl } from "../lib/site";

export function SiteFooter({ locale = "en" }: { locale?: string }) {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-grid">
      <div><Link className="brand" href={localizedPath(locale, "/")}><span className="brand-mark" aria-hidden="true">H</span><span className="brand-copy">Helixium Solutions</span></Link><p className="footer-copy">Software that turns operational signals into the next approved action.</p></div>
      <div><h2 className="footer-heading">Explore</h2><div className="footer-links"><Link href={localizedPath(locale, "/erp/")}>ERP</Link><Link href={localizedPath(locale, "/field-service/")}>Field service</Link><Link href={localizedPath(locale, "/cryptosettle/")}>CryptoSettle</Link><Link href={localizedPath(locale, "/matchpulse/")}>MatchPulse</Link><Link href={localizedPath(locale, "/solutions/")}>Solutions</Link><Link href={localizedPath(locale, "/plans/")}>Plans</Link><Link href={localizedPath(locale, "/customers/")}>Customers</Link></div></div>
      <div><h2 className="footer-heading">Talk to us</h2><div className="footer-links"><a href="mailto:info@helixiumsolutions.com">info@helixiumsolutions.com</a><a href="tel:+96171495273">+961 71 49 52 73</a><a href="tel:+15127169315">+1 (512) 716-9315</a><a href={whatsappUrl}>WhatsApp</a><span>13800 Lyndhurst Street<br />Austin, TX 78717</span><a href={erpUrl}>Start a free trial ↗</a></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Helixium Solutions. All rights reserved.</span><span>Cloud · on-premise · hybrid</span></div>
  </div></footer>;
}
