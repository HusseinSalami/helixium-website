export const erpUrl = process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup";

export function localizedPath(locale: string | undefined, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale && locale !== "en" ? `/${locale}${cleanPath}` : cleanPath;
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
