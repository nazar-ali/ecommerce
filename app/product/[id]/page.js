"use client";

import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/useContext";
import React from "react";

const Product = () => {
  const { id } = useParams();
  const { products, router, addToCart } = useAppContext();
  const [expandProduct, setExpandProduct] = useState(false);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (products && id) {
      const found = products.find((p) => p.id.toString() === id.toString());
      if (found) {
        setProduct(found);
        setMainImage(found.thumbnail);
      }
    }
  }, [id, products]);

  if (!isClient || !products) return <Loading />;
  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left image panel */}
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4 group">
              <Image
                src={mainImage || product.thumbnail}
                alt="product"
                className="w-full h-auto object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                width={1280}
                height={720}
              />
            </div>

            {/* Dimensions */}
            {product.width && product.height && product.depth && (
              <p className="text-sm text-gray-500">
                Dimensions: {product.width}W × {product.height}H ×{" "}
                {product.depth}D (inches)
              </p>
            )}

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div
                onClick={() => setMainImage(product.thumbnail)}
                className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
              >
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  className="w-full h-auto object-cover mix-blend-multiply"
                  width={1280}
                  height={720}
                />
              </div>
              {/* You can map more images if available */}
            </div>
          </div>

          {/* Right details panel */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={`filled-star-${i}`}
                    className="h-4 w-4"
                    src={assets.star_icon}
                    alt="star"
                  />
                ))}
                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull"
                />
              </div>
              <p>(4.5)</p>
            </div>
            <p className="text-gray-600 mt-3">{product.description}</p>
            <p className="text-3xl font-medium mt-6">
              ${product.price}
              <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                ${product.price}
              </span>
            </p>
            <hr className="bg-gray-600 my-6" />

            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium">Brand</td>
                    <td className="text-gray-800/50">Generic</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Color</td>
                    <td className="text-gray-800/50">Multi</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Category</td>
                    <td className="text-gray-800/50">{product.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => {
                  addToCart(product.id);
                  router.push("/cart");
                }}
                className="w-full cursor-pointer py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product.id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <p className="text-3xl font-medium">
              Featured{" "}
              <span className="font-medium text-orange-600">Products</span>
            </p>
            <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, expandProduct ? 10 : 5)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>

          <button
            onClick={() => setExpandProduct(!expandProduct)}
            className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
          >
            {expandProduct ? "See less" : "See more"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
