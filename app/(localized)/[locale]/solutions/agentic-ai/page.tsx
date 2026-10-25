import { AgenticAiPage } from "../../../../../components/MarketingPages";
import { localizedMetadata } from "../../../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) { return localizedMetadata(params.locale, "/solutions/agentic-ai/", "agentic"); }
export default function Page({ params }: { params: { locale: string } }) { return <AgenticAiPage locale={params.locale} />; }
