import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteLayout } from "../../../components/SiteLayout";
import "../../globals.css";

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ar" }, { locale: "fr" }]; }

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  if (!["en", "ar", "fr"].includes(params.locale)) notFound();
  const locale = params.locale;
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}><body><SiteLayout locale={locale}>{children}</SiteLayout></body></html>;
}
