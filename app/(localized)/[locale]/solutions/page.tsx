import ProductsPage from "../products/page";
export default function SolutionsPage({ params }: { params: { locale: string } }) {
  return <ProductsPage params={params} />;
}
