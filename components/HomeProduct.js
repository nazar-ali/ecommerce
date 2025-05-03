'use client'

import React, { useEffect, useState } from "react";
import { productService } from "../lib/ProductService";
// import Image from 'next/image';

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getAllProducts()
      .then((data) => setProducts(data.products))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col  gap-6 mt-6 pb-14 w-full">
      {products.map((product) => (
        <div className=" flex flex-col cursor-pointer group p-1 relative bg-gray-500/10 rounded-lg w-full h-full ">
          <img
            src={product.thumbnail}
            alt={product.title}
            className={` group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full`}
            // width={800}
            //         height={800}
          />
          <h2 className="md:text-base font-medium pt-2 pb-2 text-center w-full truncate">
            {product.title}
          </h2>
          <div className="flex justify-between mt-3">
            <p className="text-xs text-gray-600">
              {product.brand} • {product.category}
            </p>
            <p className="text-xs text-red-500">
              {product.availabilityStatus}
            </p>
          </div>

          <div className="flex justify-between gap-5 mt-2">
            <p className="text-sm font-semibold text-gray-500">
              Stock: {product.stock}
            </p>
            <p className="text-sm bg-yellow-100 text-yellow-700  px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </p>
          </div>

          {/* <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p> */}

          <div className="mt-3 text-xs flex gap-5 justify-between text-gray-500">
            <p className="text-xl font-semibold text-green-600">
              ${product.price}
            </p>
            <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full bg-[#ed7e12] text-xs text-white  transition">
              Buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProduct;
