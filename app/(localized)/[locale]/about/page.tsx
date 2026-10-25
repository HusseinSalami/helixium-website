import { AboutPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/about/", "about"); }
export default function Page({ params }: { params: { locale: string } }) { return <AboutPage locale={params.locale} />; }
