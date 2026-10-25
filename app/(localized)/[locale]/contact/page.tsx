import { ContactPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/contact/", "contact"); }
export default function Page({ params }: { params: { locale: string } }) { return <ContactPage locale={params.locale} />; }
