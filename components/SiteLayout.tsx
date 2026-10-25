import { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children, locale = "en" }: { children: ReactNode; locale?: string }) {
  return <><SiteHeader locale={locale} /><main>{children}</main><SiteFooter locale={locale} /></>;
}
