"use client";

import React, { useState } from "react";
import { useAppContext } from "../context/useContext";
import ProductCard from "./ProductCard";

const HomeProduct = () => {
  const { products, router, searchTerm } = useAppContext();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center pt-14">
        <p className="text-2xl font-medium text-left w-full">
          Popular products
        </p>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="flex justify-center items-center ">
              product not found
            </div>
          )}
        </div>
        <button
          onClick={() => {
            router.push("/all-products");
          }}
          className="cursor-pointer px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
        >
          See more
        </button>
      </div>
    </>
  );
};

export default HomeProduct;
