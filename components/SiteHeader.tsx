"use client";

import Link from "next/link";
import { useState } from "react";
import { erpUrl, localizedPath, navItems } from "../lib/site";
import { translations, type Locale } from "../lib/content";

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  const [open, setOpen] = useState(false);
  const currentLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const copy = translations[currentLocale];
  const labels = [copy.nav.erp, copy.nav.field, copy.nav.crypto, copy.nav.solutions, copy.nav.plans, copy.nav.about, copy.nav.contact];
  return <header className="site-header">
    <div className="shell nav-row">
      <Link className="brand" href={localizedPath(locale, "/")} onClick={() => setOpen(false)} aria-label="Helixium Solutions home">
        <span className="brand-mark" aria-hidden="true">H</span><span className="brand-copy">Helixium Solutions</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item, index) => <Link key={item.href} href={localizedPath(locale, item.href)}>{labels[index]}</Link>)}
      </nav>
      <div className="nav-actions">
        <nav className="language-links" aria-label="Language switcher">
          <Link href="/" aria-current={currentLocale === "en" ? "page" : undefined}>EN</Link>
          <Link href="/ar/" aria-current={currentLocale === "ar" ? "page" : undefined}>AR</Link>
          <Link href="/fr/" aria-current={currentLocale === "fr" ? "page" : undefined}>FR</Link>
        </nav>
        <a className="button button-primary compact" href={erpUrl}>{copy.ctaTrial} <span aria-hidden="true">↗</span></a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">Toggle navigation</span>☰</button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav shell" aria-label="Mobile navigation">
      {navItems.map((item, index) => <Link key={item.href} href={localizedPath(locale, item.href)} onClick={() => setOpen(false)}>{labels[index]}</Link>)}
      <div className="mobile-language-links"><Link href="/">English</Link><Link href="/ar/">العربية</Link><Link href="/fr/">Français</Link></div>
      <a className="button button-primary" href={erpUrl}>{copy.ctaTrial} ↗</a>
    </nav>}
  </header>;
}
