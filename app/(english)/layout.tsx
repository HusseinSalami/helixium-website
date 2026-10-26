import type { Metadata } from "next";
import "../globals.css";
import { SiteLayout } from "../../components/SiteLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.helixiumsolutions.com"),
  title: { default: "Helixium Solutions | The ERP that does the work", template: "%s | Helixium Solutions" },
  description: "Helixium ERP software for accounting, inventory, sales, field service, POS, manufacturing, payroll, and connected operations.",
  openGraph: { title: "Helixium Solutions | ERP software for connected operations", description: "The ERP that does the work, not just the reports.", type: "website", siteName: "Helixium Solutions", images: [{ url: "/og/home.svg", width: 1200, height: 630, alt: "Helixium ERP software for connected operations" }] },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body><SiteLayout locale="en">{children}</SiteLayout></body></html>;
}
