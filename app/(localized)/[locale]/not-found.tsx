"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizedPath } from "../../../lib/site";

const copy = {
  ar: { title: "هذه الصفحة غير متاحة بعد.", lead: "جرّب الصفحة الرئيسية أو استكشف ERP أو تواصل مع فريق Helixium.", home: "العودة إلى الرئيسية", contact: "تواصل معنا" },
  fr: { title: "Cette page n'est pas encore disponible.", lead: "Retournez à l'accueil, découvrez l'ERP ou contactez l'équipe Helixium.", home: "Accueil", contact: "Nous contacter" }
} as const;

export default function LocalizedNotFound() {
  const locale = usePathname()?.split("/")[1] === "fr" ? "fr" : "ar";
  const text = copy[locale];
  return <section className="page-hero not-found"><div className="shell"><span className="eyebrow">404</span><h1>{text.title}</h1><p>{text.lead}</p><div className="hero-actions"><Link className="button button-primary" href={localizedPath(locale, "/")}>{text.home}</Link><Link className="button button-secondary" href={localizedPath(locale, "/contact/")}>{text.contact}</Link></div></div></section>;
}
