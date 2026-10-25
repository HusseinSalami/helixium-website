import { PlansPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/plans/", "plans"); }
export default function Page({ params }: { params: { locale: string } }) { return <PlansPage locale={params.locale} />; }
