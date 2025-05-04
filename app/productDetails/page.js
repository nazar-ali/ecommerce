import { productService } from "@/lib/ProductService";

const productDetails = () => {
    
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
              <Image
                src={mainImage || productData.image[3]}
                alt="alt"
                className="w-full h-auto object-cover mix-blend-multiply"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
