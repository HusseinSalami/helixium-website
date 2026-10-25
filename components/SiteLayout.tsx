import { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children, locale = "en" }: { children: ReactNode; locale?: string }) {
  const isFallbackLocale = locale === "ar" || locale === "fr";
  return <><SiteHeader locale={locale} />{isFallbackLocale && <div className="shell locale-prompt" role="note">English fallback copy is shown here. Reviewed {locale === "ar" ? "Arabic" : "French"} translation is a TODO for phase 2.</div>}<main>{children}</main><SiteFooter locale={locale} /></>;
}
