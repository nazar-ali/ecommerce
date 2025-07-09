"use client";

import { useAppContext } from "./../context/useContext";
import Image from "next/image";
// const { useState } = require("react");

const ProductCard = ({ product }) => {
  const { router, loading } = useAppContext();

  //   const [isProduct, setIsProduct] = useState(false);
  if (loading) return <p>Loading...</p>;

  //   console.log(isProduct);
  return (
    <>
      <div
        onClick={() => {
          router.push("/product/" + product.id);
          scrollTo(0, 0);
        }}
        className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden group transition hover:shadow-lg  border border-gray-200"
      >
        {/* Product Image */}
        <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h2 className="text-sm font-semibold text-gray-800 truncate text-center">
            {product.title}
          </h2>

          {/* Brand & Category */}
          <div className="flex justify-between text-xs text-gray-500">
            <p>{product.brand}</p>
            <p>{product.category}</p>
          </div>

          {/* Availability & Stock */}
          <div className="flex justify-between text-xs mt-1">
            <p className="text-gray-500">Stock: {product.stock}</p>
            <p className="text-red-500">{product.availabilityStatus}</p>
          </div>

          {/* Price & Discount */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-bold text-green-600">${product.price}</p>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering parent click
              router.push("/checkout");
            }}
            className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium py-2 rounded-md transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
