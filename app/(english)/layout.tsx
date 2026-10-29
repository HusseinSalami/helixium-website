import type { Metadata } from "next";
import "../globals.css";
import { SiteLayout } from "../../components/SiteLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.helixiumsolutions.com"),
  title: { default: "Helixium Solutions: ERP, AI agents, custom software and MatchPulse", template: "%s | Helixium Solutions" },
  description: "Helixium Solutions brings together ERP, custom AI agents, custom software, and MatchPulse for teams building clearer operations.",
  openGraph: { title: "Helixium Solutions: ERP, AI agents, custom software and MatchPulse", description: "Helixium Solutions brings together ERP, custom AI agents, custom software, and MatchPulse for teams building clearer operations.", type: "website", siteName: "Helixium Solutions", images: [{ url: "/og/home.svg", width: 1200, height: 630, alt: "Helixium Solutions: ERP, AI agents, custom software and MatchPulse" }] },
  icons: { icon: [{ url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" }, { url: "/favicon.svg", type: "image/svg+xml" }, { url: "/media/brand/favicon.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body><SiteLayout locale="en">{children}</SiteLayout></body></html>;
}
