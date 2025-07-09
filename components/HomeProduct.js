"use client";

import React from "react";
import { useAppContext } from "../context/useContext";
import ProductCard from "./ProductCard";
import { useFilteredProducts } from "../app/hooks/useFilteredProducts";

const HomeProduct = () => {
  const { router } = useAppContext(); // Only router needed here
  const filteredProducts = useFilteredProducts();

  return (
    <div className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Title */}
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-12 text-gray-500 text-sm">
            No products found.
          </div>
        )}
      </div>

      {/* See More Button */}
      <div className="mt-12">
        <button
          onClick={() => router.push("/all-products")}
          className="px-6 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
