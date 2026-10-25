import ProductsPage from "../../(localized)/[locale]/products/page";
export const metadata = { title: "Products", description: "ERP, field service, predictions, and custom agentic solutions." };
export default function Page() { return <ProductsPage params={{ locale: "en" }} />; }
