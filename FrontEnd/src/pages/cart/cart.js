import React from "react";

import "./cart.css";

export const Cart = () => {
  let cartItems = JSON.parse(localStorage.getItem("products")).filter(
    (item) => item.amount > 0
  );

  let totalPrice = 0;

  console.log(cartItems);

  return (
    <div className="cart__container">
      <h1>This is the cart</h1>
      <p> In here you can see everything in your cart</p>
      <div className="cart__items">
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            totalPrice += item.price * item.amount;
            return (
              <div>
                <p>{`Product name: ${item.name}`}</p>
                <p>{`Total price: ${item.amount} X ${item.price}$ = ${
                  item.amount * item.price
                }$`}</p>
              </div>
            );
          })}
      </div>

      <p>Total Cart Price is {totalPrice}$</p>
    </div>
  );
};
