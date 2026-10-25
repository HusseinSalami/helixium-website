import { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteLayout } from "../../../components/SiteLayout";
import "../../globals.css";

export function generateStaticParams() { return [{ locale: "ar" }, { locale: "fr" }]; }

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = ["en", "ar", "fr"].includes(params.locale) ? params.locale : "en";
  return {
    metadataBase: new URL("https://www.helixiumsolutions.com"),
    title: { default: "Helixium Solutions | The ERP that does the work", template: "%s | Helixium Solutions" },
    description: "Agentic operations software for ERP, field service, POS, predictions, and custom workflows.",
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}/`,
      languages: { en: "/", ar: "/ar/", fr: "/fr/", "x-default": "/" }
    },
    openGraph: {
      title: "Helixium Solutions",
      description: "The ERP that does the work, not just the reports.",
      locale: locale === "ar" ? "ar" : locale === "fr" ? "fr_FR" : "en_US"
    }
  };
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  if (!["en", "ar", "fr"].includes(params.locale)) notFound();
  const locale = params.locale;
  return <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}><body><SiteLayout locale={locale}>{children}</SiteLayout></body></html>;
}
