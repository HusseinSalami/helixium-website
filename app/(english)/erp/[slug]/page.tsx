import { ModulePage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateStaticParams() {
  return ["accounting", "inventory", "sales-purchases", "pos", "manufacturing", "payroll", "field-service"].map((slug) => ({ slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) { return localizedMetadata("en", `/erp/${params.slug}/`, params.slug as "accounting" | "inventory" | "sales-purchases" | "pos" | "manufacturing" | "payroll" | "field-service"); }
export default function Page({ params }: { params: { slug: string } }) { return <ModulePage locale="en" slug={params.slug} />; }
