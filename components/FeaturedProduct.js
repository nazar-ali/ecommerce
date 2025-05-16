// import React from "react";
// import { assets } from "../assets/assets";
// import Image from "next/image";
// import { useAppContext } from "../context/useContext";
// import ProductCard from "./ProductCard";

// const FeaturedProduct = () => {
//   const { products } = useAppContext();
//   const [isFeaturedProduct, setIsFeaturedProduct] = useState(true);
//   return (
//     <div className="mt-14">
//       <div className="flex flex-col items-center">
//         <p className="text-3xl font-medium">Featured Products</p>
//         <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
//         {products.slice(0, 3).map((product) => (
//           <div key={""} className="relative group">
//             <ProductCard product={product} isFeaturedProduct={isFeaturedProduct} />
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
//               <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
//                 Buy now{" "}
//                 <Image
//                   className="h-3 w-3"
//                   src={assets.redirect_icon}
//                   alt="Redirect Icon"
//                 />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProduct;
