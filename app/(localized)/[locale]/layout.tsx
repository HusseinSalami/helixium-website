import { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../../globals.css";
import { SiteLayout } from "../../../components/SiteLayout";
import { localizedMetadata } from "../../../lib/site";

export function generateStaticParams() { return [{ locale: "ar" }, { locale: "fr" }]; }

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = ["ar", "fr"].includes(params.locale) ? params.locale : "en";
  return localizedMetadata(locale, "/", "home");
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  if (!["en", "ar", "fr"].includes(params.locale)) notFound();
  const locale = params.locale;
  const direction = locale === "ar" ? "rtl" : "ltr";
  return <html lang={locale} dir={direction}><body><SiteLayout locale={locale}>{children}</SiteLayout></body></html>;
}
