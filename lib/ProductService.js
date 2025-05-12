// lib/ProductService.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://dummyjson.com",
});

const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const productService = {
  getAllProducts,
};
