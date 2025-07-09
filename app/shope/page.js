import ProductCard from "../../components/ProductCard";

export default function Shop() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard />
      </div>
    </main>
  );
}
