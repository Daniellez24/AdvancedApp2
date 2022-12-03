import { useState, useEffect } from "react";
import { Api } from "../../services/api";

export const useProducts = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let res = await Api.get("products");
    setProducts(res.data.allProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
