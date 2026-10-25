import { FieldServicePage } from "../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/field-service/", "field"); }
export default function Page({ params }: { params: { locale: string } }) { return <FieldServicePage locale={params.locale} />; }
