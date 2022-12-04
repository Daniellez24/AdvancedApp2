import * as React from 'react';
import { ExpenseItem } from "../../Components/ExpenseItem";
import { useProducts } from "./useProducts";
import { useNavigate } from 'react-router-dom';

import "./App.css";

function App() {
  const products = useProducts();
  const navigate = useNavigate();

  localStorage.setItem("cureentlyShopping", true);

  return (
    <>
      <h1>Our shop</h1>
      <button className='goToCart' onClick={() => navigate('../cart/')}>Go to cart</button>
      {products &&
        products.map((item, index) => {
          return (
            <div>
            <ExpenseItem
              key={item._id}
              name={item.name}
              img={item.imgUrl}
              price={item.price}
              index={index}
            />
              </div>
          );
        })}
    </>
  );
}

export default App;
