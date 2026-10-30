export function StructuredData({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helixium Solutions",
  url: "https://www.helixiumsolutions.com",
  logo: "https://www.helixiumsolutions.com/media/brand/helixium-badge.png",
  contactPoint: [{ "@type": "ContactPoint", email: "info@helixiumsolutions.com", telephone: "+96171495273", contactType: "sales" }],
  sameAs: []
};

const breadcrumbLabels: Record<string, Record<string, string>> = {
  Home: { ar: "الرئيسية", fr: "Accueil" },
  ERP: { ar: "نظام ERP", fr: "ERP" },
  Plans: { ar: "الأسعار", fr: "Tarifs" },
  "Field service": { ar: "الخدمة الميدانية", fr: "Service terrain" },
  "MatchPulse": { ar: "MatchPulse", fr: "MatchPulse" },
  Solutions: { ar: "الحلول", fr: "Solutions" },
  About: { ar: "من نحن", fr: "À propos" },
  Contact: { ar: "تواصل معنا", fr: "Contact" },
  Compare: { ar: "مقارنة", fr: "Comparer" }
};

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale = "en") {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: breadcrumbLabels[item.name]?.[locale] || item.name, item: `https://www.helixiumsolutions.com${prefix}${item.path}` }))
  };
}

export function faqJsonLd(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  };
}
