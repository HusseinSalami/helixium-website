export const erpUrl = process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup";

export function localizedPath(locale: string | undefined, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale && locale !== "en" ? `/${locale}${cleanPath}` : cleanPath;
}

export function localizedMetadata(locale: string, path: string, title: string) {
  const descriptions: Record<string, string> = {
    Products: "ERP, field service, predictions, and custom agentic solutions.",
    Pricing: "Trial, Pro, and Enterprise operating tiers for Helixium.",
    "How agent workflows work": "See the illustrative observe, propose, approve, act, and audit loop.",
    "About Helixium Solutions": "Helixium Solutions builds practical software for connected operations.",
    "Contact Helixium Solutions": "Talk with Helixium about your operational workflows.",
    Solutions: "Connected software solutions for operational teams."
  };
  const description = descriptions[title] ?? "Agentic operations software for ERP, field service, POS, predictions, and custom workflows.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: path, ar: `/ar${path}`, fr: `/fr${path}` }
    },
    openGraph: { title, description }
  };
}

export const navItems = [
  { label: "Products", href: "/products/" },
  { label: "How agents work", href: "/agents/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" }
];

export const activityItems = [
  { icon: "↔", title: "Bank transactions matched", detail: "Reconciliation queue prepared for review", time: "just now" },
  { icon: "→", title: "Payment reminders prepared", detail: "Drafts ready to send from receivables", time: "2 min" },
  { icon: "＋", title: "Reorder PO drafted", detail: "Low-stock signal routed for approval", time: "6 min" },
  { icon: "⌁", title: "Work order dispatched", detail: "Technician assignment proposed from the board", time: "9 min" },
  { icon: "!", title: "Lot expiry flagged", detail: "Inventory exception added to your queue", time: "12 min" }
];
