import { useAppContext } from "../../context/useContext";

export const useFilteredProducts = () => {
  const { products, searchTerm } = useAppContext();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredProducts;
};
