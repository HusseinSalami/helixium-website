import { CryptoSettlePage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/cryptosettle/", "crypto"); }
export default function Page({ params }: { params: { locale: string } }) { return <CryptoSettlePage locale={params.locale} />; }
