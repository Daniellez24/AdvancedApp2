import { useState, useEffect } from "react";
import { Api } from "../../services/api";

export const useProducts = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let res = await Api.get("products");

    res = res.data.allProducts.map((item) => {
      return { amount: 0, ...item };
    });
    if (
      !localStorage.getItem("cureentlyShopping") ||
      !localStorage.getItem("products")
    ) {
      localStorage.setItem("products", JSON.stringify(res));
    } else {
    }

    setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
