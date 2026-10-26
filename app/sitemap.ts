import type { MetadataRoute } from "next";

const base = "https://www.helixiumsolutions.com";
const paths = ["/", "/erp/", "/erp/accounting/", "/erp/inventory/", "/erp/sales-purchases/", "/erp/pos/", "/erp/manufacturing/", "/erp/payroll/", "/erp/field-service/", "/matchpulse/", "/plans/", "/compare/", "/solutions/", "/solutions/agentic-ai/", "/solutions/custom-software/", "/customers/", "/about/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${base}${path}`,
    alternates: { languages: { en: `${base}${path}`, ar: `${base}/ar${path}`, fr: `${base}/fr${path}`, "x-default": `${base}${path}` } }
  }));
}
