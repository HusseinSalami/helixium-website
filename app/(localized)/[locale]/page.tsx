import { HomePage } from "../../../components/HomePage";
import { localizedMetadata } from "../../../lib/site";
export function generateMetadata({ params }: { params: { locale: string } }) {
  return localizedMetadata(params.locale, "/", "home");
}
export default function Page({ params }: { params: { locale: string } }) { return <HomePage locale={params.locale} />; }
