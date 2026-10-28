"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localizedPath } from "../lib/site";
import { translations, type Locale } from "../lib/content";

type MenuName = "products" | "language" | null;

export function SiteHeader({ locale = "en" }: { locale?: string }) {
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";
  const menuButton = useRef<HTMLButtonElement>(null);
  const productButton = useRef<HTMLButtonElement>(null);
  const languageButton = useRef<HTMLButtonElement>(null);
  const currentLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const copy = translations[currentLocale];
  const basePath = pathname.replace(/^\/(ar|fr)(?=\/|$)/, "") || "/";
  const switchPath = (targetLocale: string) => localizedPath(targetLocale, basePath);
  const closeMenus = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const activeMenu = openMenu;
        setOpenMenu(null);
        setMobileOpen(false);
        if (mobileOpen) menuButton.current?.focus();
        else if (activeMenu === "products") productButton.current?.focus();
        else if (activeMenu === "language") languageButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen, openMenu]);
  const toggleMenu = (menu: Exclude<MenuName, null>) => {
    setOpenMenu((current) => current === menu ? null : menu);
  };
  const menuLink = (href: string, label: string) => <Link href={localizedPath(locale, href)} onClick={closeMenus}>{label}</Link>;
  return <header className="site-header">
    <div className="shell nav-row">
      <Link className="brand" href={localizedPath(locale, "/")} onClick={closeMenus}>
        <span className="brand-lockup" role="img" aria-label="Helixium Solutions">
          <Image className="brand-icon" src="/media/brand/helixium-icon.png" alt="" width={256} height={256} />
          <Image className="brand-wordmark" src="/media/brand/helixium-wordmark.webp" alt="" width={500} height={105} />
        </span>
      </Link>
      <nav className="nav-links" aria-label={copy.mainNavigation}>
        <div className="nav-dropdown-wrap">
          <button ref={productButton} className="nav-menu-trigger" type="button" aria-expanded={openMenu === "products"} aria-controls="products-menu" aria-haspopup="true" onClick={() => toggleMenu("products")}>{copy.nav.products}<span aria-hidden="true">⌄</span></button>
          <div id="products-menu" className="nav-dropdown" hidden={openMenu !== "products"}>{menuLink("/erp/", copy.nav.erp)}{menuLink("/erp/field-service/", copy.nav.field)}{menuLink("/matchpulse/", copy.nav.match)}{menuLink("/solutions/agentic-ai/", copy.nav.agentic)}{menuLink("/solutions/custom-software/", copy.nav.custom)}</div>
        </div>
        <Link href={localizedPath(locale, "/plans/")}>{copy.nav.plans}</Link>
        <Link href={localizedPath(locale, "/about/")}>{copy.nav.about}</Link>
        <Link href={localizedPath(locale, "/contact/")}>{copy.nav.contact}</Link>
      </nav>
      <div className="nav-actions">
        <div className="language-control">
          <button ref={languageButton} className="language-trigger" type="button" aria-expanded={openMenu === "language"} aria-controls="language-menu" aria-label={`${copy.languageSwitcher}: ${currentLocale.toUpperCase()}`} onClick={() => toggleMenu("language")}><span aria-hidden="true">◎</span> {currentLocale.toUpperCase()}</button>
          <div id="language-menu" className="language-menu" hidden={openMenu !== "language"}><Link href={switchPath("en")} aria-current={currentLocale === "en" ? "page" : undefined} onClick={closeMenus}>EN</Link><Link href={switchPath("ar")} aria-current={currentLocale === "ar" ? "page" : undefined} onClick={closeMenus}>{copy.languageNames[1]}</Link><Link href={switchPath("fr")} aria-current={currentLocale === "fr" ? "page" : undefined} onClick={closeMenus}>FR</Link></div>
        </div>
        <Link className="button button-primary compact header-talk" href={localizedPath(locale, "/contact/")} onClick={closeMenus}>{copy.ctaContact}</Link>
        <button ref={menuButton} className="menu-button" type="button" aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen((current) => !current)}><span className="sr-only">{copy.toggleNavigation}</span>☰</button>
      </div>
    </div>
    {mobileOpen && <nav id="mobile-menu" className="mobile-nav shell" aria-label={copy.mobileNavigation}>
      <div className="mobile-nav-group"><button className="nav-menu-trigger" type="button" aria-expanded={openMenu === "products"} aria-controls="mobile-products-menu" aria-haspopup="true" onClick={() => toggleMenu("products")}>{copy.nav.products}<span aria-hidden="true">⌄</span></button><div id="mobile-products-menu" className="mobile-subnav" hidden={openMenu !== "products"}>{menuLink("/erp/", copy.nav.erp)}{menuLink("/erp/field-service/", copy.nav.field)}{menuLink("/matchpulse/", copy.nav.match)}{menuLink("/solutions/agentic-ai/", copy.nav.agentic)}{menuLink("/solutions/custom-software/", copy.nav.custom)}</div></div>
      <Link href={localizedPath(locale, "/plans/")} onClick={closeMenus}>{copy.nav.plans}</Link><Link href={localizedPath(locale, "/about/")} onClick={closeMenus}>{copy.nav.about}</Link><Link href={localizedPath(locale, "/contact/")} onClick={closeMenus}>{copy.nav.contact}</Link>
      <div className="mobile-language-links"><Link href={switchPath("en")} aria-current={currentLocale === "en" ? "page" : undefined} onClick={closeMenus}>{copy.languageNames[0]}</Link><Link href={switchPath("ar")} aria-current={currentLocale === "ar" ? "page" : undefined} onClick={closeMenus}>{copy.languageNames[1]}</Link><Link href={switchPath("fr")} aria-current={currentLocale === "fr" ? "page" : undefined} onClick={closeMenus}>{copy.languageNames[2]}</Link></div>
      <Link className="button button-primary" href={localizedPath(locale, "/contact/")} onClick={closeMenus}>{copy.ctaContact}</Link>
    </nav>}
  </header>;
}
