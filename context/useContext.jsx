"use client";
import { productService } from "../lib/ProductService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const AppContext = createContext();
import SignInService from "../lib/SignInService";

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isSeller, setIsSeller] = useState(true);
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log(userData);
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const addToCart = (productId) => {
    setCartItems((prevItems) => {
      // Check if item already in cart
      const exists = prevItems.find((item) => item.id === productId);
      if (exists) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = products.find((p) => p.id === productId);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    const productDeleted = cartItems.find((item) => item.id === productId);
    if (productDeleted) {
      setCartItems((prevItems) => {
        prevItems.filter((item) => item.id !== productId);
      });
      toast.warning(`${productDeleted.title} removed from cart`);
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await SignInService.login(formData.email, formData.password);
      setUserData(res);
      toast(res.message);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  const handleLogout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {
      method: "GET",
      credentials: "include",
    });

    toast(res.message);
    if (res.redirected) {
      window.location.href = res.url;
    }
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
    handleLogout,
    setIsMenuOpen,
    router,
    addToCart,
    cartItems,
    isSeller,
    setIsSeller,
    removeFromCart,
    handleChange,
    handleSignIn,
    userData,
    setUserData,
    formData,
    setFormData,
    searchTerm,
    setSearchTerm,
    isCartOpen,
    setIsCartOpen,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
