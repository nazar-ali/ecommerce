import { useAppContext } from "@/context/useContext";

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
        className=" flex flex-col cursor-pointer group p-1 relative bg-gray-500/10 rounded-lg max-sm:w-full max-sm:items-center md:w-full w-full h-full "
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className={` group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full`}
        />
        <h2 className="md:text-base font-medium pt-2 pb-2 text-center w-full truncate">
          {product.title}
        </h2>
        <div className="flex justify-between mt-3">
          <p className="text-xs text-gray-600 ">
            {product.brand && product.category ? (
              <>
                {product.brand} • {product.category}
              </>
            ) : (
              <>{product.category}</>
            )}
          </p>
          <p className="text-xs text-red-500">{product.availabilityStatus}</p>
        </div>

        <div className="flex justify-between gap-5 mt-2">
          <p className="text-sm font-semibold text-gray-500 ">
            Stock: {product.stock}
          </p>
          <p className="text-sm bg-yellow-100 text-yellow-700  px-2 py-1 rounded">
            {product.discountPercentage}%
          </p>
        </div>

        {/* <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p> */}

        <div className="mt-3 text-xs flex gap-5 justify-between text-gray-500">
          <p className="text-xl font-semibold text-green-600">
            ${product.price}
          </p>
          <button className="  md:block sm:block px-4 max-sm:py-.5 py-1.5 text-gray-500 border border-gray-500/20 max-sm:rounded-xxl rounded-full bg-[#ed7e12] text-xs text-white  transition">
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
