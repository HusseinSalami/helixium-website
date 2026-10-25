import { ComparePage } from "../../../../components/ComparePage";
import { localizedMetadata } from "../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/compare/", "compare"); }
export default function Page({ params }: { params: { locale: string } }) { return <ComparePage locale={params.locale} />; }
