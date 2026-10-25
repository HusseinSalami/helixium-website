import { HomePage } from "../../../components/HomePage";
export default function Page({ params }: { params: { locale: string } }) { return <HomePage locale={params.locale} />; }
