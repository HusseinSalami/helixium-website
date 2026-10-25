export function StructuredData({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helixium Solutions",
  url: "https://www.helixiumsolutions.com",
  logo: "https://www.helixiumsolutions.com/favicon.svg",
  contactPoint: [{ "@type": "ContactPoint", email: "info@helixiumsolutions.com", telephone: "+96171495273", contactType: "sales" }],
  sameAs: []
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `https://www.helixiumsolutions.com${item.path}` }))
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
  };
}
