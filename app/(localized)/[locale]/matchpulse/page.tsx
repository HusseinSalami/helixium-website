import { MatchPulsePage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/matchpulse/", "match"); }
export default function Page({ params }: { params: { locale: string } }) { return <MatchPulsePage locale={params.locale} />; }
