import { CustomSoftwarePage } from "../../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/solutions/custom-software/", "solutions"); }
export default function Page({ params }: { params: { locale: string } }) { return <CustomSoftwarePage locale={params.locale} />; }
