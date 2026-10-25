import { ERPPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/erp/", "erp"); }
export default function Page({ params }: { params: { locale: string } }) { return <ERPPage locale={params.locale} />; }
