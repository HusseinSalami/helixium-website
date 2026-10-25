import { HomePage } from "../../../components/HomePage";
export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: "Helixium Solutions | The ERP that does the work", alternates: { canonical: `/${params.locale}/` } };
}
export default function Page({ params }: { params: { locale: string } }) { return <HomePage locale={params.locale} />; }
