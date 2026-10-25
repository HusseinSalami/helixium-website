"use client";

import Link from "next/link";
import { useState } from "react";
import { erpUrl, navItems } from "../lib/site";

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  const [open, setOpen] = useState(false);
  const prefix = locale === "en" ? "" : `/${locale}`;
  return (
    <header className="site-header">
      <div className="shell">
        <div className="nav-row">
          <Link className="brand" href={`${prefix}/`} onClick={() => setOpen(false)} aria-label="Helixium Solutions home">
            <span className="brand-mark" aria-hidden="true">H</span>
            <span className="brand-copy">Helixium Solutions</span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => <Link key={item.href} href={`${prefix}${item.href}`}>{item.label}</Link>)}
          </nav>
          <div className="nav-actions">
            <nav className="language-links" aria-label="Language switcher">
              <Link href="/en/" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
              <Link href="/ar/" aria-current={locale === "ar" ? "page" : undefined}>AR</Link>
              <Link href="/fr/" aria-current={locale === "fr" ? "page" : undefined}>FR</Link>
            </nav>
            <a className="button button-primary" href={erpUrl}>Start free trial <span aria-hidden="true">↗</span></a>
            <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
              <span className="sr-only">Toggle navigation</span>☰
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={`${prefix}${item.href}`} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/ar/" onClick={() => setOpen(false)}>العربية</Link>
            <a className="button button-primary" href={erpUrl}>Start free trial ↗</a>
          </nav>
        )}
      </div>
    </header>
  );
}
