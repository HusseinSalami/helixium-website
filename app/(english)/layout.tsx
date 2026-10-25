import type { Metadata } from "next";
import { SiteLayout } from "../../components/SiteLayout";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.helixiumsolutions.com"),
  title: { default: "Helixium Solutions | The ERP that does the work", template: "%s | Helixium Solutions" },
  description: "Agentic operations software for ERP, field service, POS, predictions, and custom workflows.",
  openGraph: { title: "Helixium Solutions", description: "The ERP that does the work, not just the reports.", type: "website", siteName: "Helixium Solutions" },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body><SiteLayout locale="en">{children}</SiteLayout></body></html>;
}
