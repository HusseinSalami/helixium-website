import { SolutionsPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/solutions/", "solutions"); }
export default function Page({ params }: { params: { locale: string } }) { return <SolutionsPage locale={params.locale} />; }
