import { ModulePage } from "../../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../../lib/site";
export function generateStaticParams() {
  return ["ar", "fr"].flatMap((locale) => ["accounting", "inventory", "sales-purchases", "pos", "manufacturing", "payroll", "field-service"].map((slug) => ({ locale, slug })));
}
export function generateMetadata({ params }: { params: { locale: string; slug: string } }) { return localizedMetadata(params.locale, `/erp/${params.slug}/`, "erp"); }
export default function Page({ params }: { params: { locale: string; slug: string } }) { return <ModulePage locale={params.locale} slug={params.slug} />; }
