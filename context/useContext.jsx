"use client";
import { productService } from "@/lib/ProductService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((prevItems) => {
      // Check if item already in cart
      const exists = prevItems.find((item) => item.id === productId);
      if (exists) {
        return prevItems;
      }

      // Assuming you have all products stored somewhere
      const product = products.find((p) => p.id === productId);
      if (!product) return prevItems;

      return [...prevItems, product];
    });
  };

  useEffect(() => {
    productService
      .getAllProducts()
      .then((data) => setProducts(data.products))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  console.log(products);
  const value = {
    products,
    loading,
    isMenuOpen,
    setIsMenuOpen,
    router,
    addToCart,
    cartItems,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
