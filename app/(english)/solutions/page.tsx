import ProductsPage from "../../(localized)/[locale]/products/page";
export const metadata = { title: "Solutions", description: "Connected software solutions for operational teams." };
export default function Page() { return <ProductsPage params={{ locale: "en" }} />; }
