import type { Locale } from "./content";

export const erpUrl = process.env.NEXT_PUBLIC_ERP_APP_URL || "https://erp.helixiumsolutions.com/signup";
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "";
export const whatsappUrl = "https://wa.me/96171495273";

export function localizedPath(locale: string | undefined, path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale && locale !== "en" ? `/${locale}${cleanPath}` : cleanPath;
}

const seo: Record<string, { title: string; description: string }> = {
  home: { title: "ERP software for connected operations", description: "Helixium ERP connects accounting, inventory, sales, field service, POS, manufacturing, payroll, and agent-assisted workflows." },
  erp: { title: "Helixium ERP software", description: "ERP software for accounting, inventory, sales, purchases, POS, manufacturing, payroll, and connected operations." },
  field: { title: "Field service management and repair order software", description: "Manage work orders, repair orders, dispatch, checklists, service contracts, warranty workflows, and technician jobs." },
  crypto: { title: "CryptoSettle USDT payment reconciliation", description: "CryptoSettle monitors supported chains, matches stablecoin payments to invoices, exports statements, and sends webhooks." },
  match: { title: "MatchPulse founding venues", description: "Join the MatchPulse founding venues programme. The first 10 venues receive 50% off." },
  plans: { title: "Helixium ERP plans and pricing", description: "Compare Pantheon, Olympus, Elysium, and the CryptoSettle add-on. Contact us for market-specific pricing." },
  solutions: { title: "Agentic AI and custom software solutions", description: "Explore Helixium agentic AI workflows and custom software portfolio work for operational teams." },
  customers: { title: "Helixium ERP customer stories", description: "Explore customer story placeholders for MOM and Endomedix, plus Helixium portfolio work." },
  about: { title: "About Helixium Solutions", description: "Helixium Solutions builds practical software for connected operations." },
  contact: { title: "Contact Helixium Solutions", description: "Talk with Helixium about ERP, CryptoSettle, MatchPulse, agentic AI, or custom software." }
};

export function localizedMetadata(locale: string, path: string, key: keyof typeof seo) {
  const safeLocale = (["en", "ar", "fr"].includes(locale) ? locale : "en") as Locale;
  const current = seo[key];
  const canonical = safeLocale === "en" ? path : `/${safeLocale}${path}`;
  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical,
      languages: { en: path, ar: `/ar${path}`, fr: `/fr${path}`, "x-default": path }
    },
    openGraph: { title: current.title, description: current.description, url: `https://www.helixiumsolutions.com${canonical}`, type: "website" as const, images: [{ url: `/og/${key}.svg`, width: 1200, height: 630, alt: current.title }] },
    twitter: { card: "summary_large_image" as const, title: current.title, description: current.description, images: [`/og/${key}.svg`] }
  };
}

export const navItems = [
  { label: "ERP", href: "/erp/" },
  { label: "Field service", href: "/field-service/" },
  { label: "CryptoSettle", href: "/cryptosettle/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Plans", href: "/plans/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" }
];
