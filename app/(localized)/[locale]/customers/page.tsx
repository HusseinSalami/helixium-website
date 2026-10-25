import { CustomersPage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/customers/", "customers"); }
export default function Page({ params }: { params: { locale: string } }) { return <CustomersPage locale={params.locale} />; }
