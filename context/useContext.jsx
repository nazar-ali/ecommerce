
'use client'
import { productService } from "@/lib/ProductService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {
    const router = useRouter()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      productService
        .getAllProducts()
        .then((data) => setProducts(data.products))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);
  
    const value = {
        products,
        loading
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}