import { useState, useEffect } from "react";
import { Api } from "../../services/api";

export const useProducts = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let res = await Api.get("products");
    res = res.data.allProducts.map((item) => {
      return { amount: 0, ...item };
    });
    localStorage.setItem("products", JSON.stringify(res));
    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
