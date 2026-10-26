"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { erpUrl, localizedPath, navItems } from "../lib/site";
import { translations, type Locale } from "../lib/content";

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  const basePath = pathname.replace(/^\/(ar|fr)(?=\/|$)/, "") || "/";
  const switchPath = (targetLocale: string) => localizedPath(targetLocale, basePath);
  const currentLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const copy = translations[currentLocale];
  const labels = [copy.nav.erp, copy.nav.field, copy.nav.crypto, copy.nav.solutions, copy.nav.plans, copy.nav.about, copy.nav.contact];
  return <header className="site-header">
    <div className="shell nav-row">
      <Link className="brand" href={localizedPath(locale, "/")} onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">H</span><span className="brand-copy">Helixium Solutions</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item, index) => <Link key={item.href} href={localizedPath(locale, item.href)}>{labels[index]}</Link>)}
      </nav>
      <div className="nav-actions">
        <nav className="language-links" aria-label="Language switcher">
          <Link href={switchPath("en")} aria-current={currentLocale === "en" ? "page" : undefined}>EN</Link>
          <Link href={switchPath("ar")} aria-current={currentLocale === "ar" ? "page" : undefined}>AR</Link>
          <Link href={switchPath("fr")} aria-current={currentLocale === "fr" ? "page" : undefined}>FR</Link>
        </nav>
        <Link className="button button-secondary compact" href={localizedPath(locale, "/contact/")}>{copy.ctaContact} <span aria-hidden="true">→</span></Link>
        <a className="button button-primary compact" href={erpUrl}>{copy.ctaErp} <span aria-hidden="true">↗</span></a>
        <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">Toggle navigation</span>☰</button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav shell" aria-label="Mobile navigation">
      {navItems.map((item, index) => <Link key={item.href} href={localizedPath(locale, item.href)} onClick={() => setOpen(false)}>{labels[index]}</Link>)}
      <div className="mobile-language-links"><Link href={switchPath("en")}>English</Link><Link href={switchPath("ar")}>العربية</Link><Link href={switchPath("fr")}>Français</Link></div>
      <Link className="button button-secondary" href={localizedPath(locale, "/contact/")}>{copy.ctaContact} →</Link>
      <a className="button button-primary" href={erpUrl}>{copy.ctaErp} ↗</a>
    </nav>}
  </header>;
}
