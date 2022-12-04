import React from "react";
import { Api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  let cartItems = [];
  if (localStorage.getItem("products")) {
    cartItems = JSON.parse(localStorage.getItem("products")).filter(
      (item) => item.amount > 0
    );
  }

  let totalPrice = 0;

  console.log("cartItems", cartItems);
  const navigate = useNavigate();

  let name;

  async function submitForm(e) {
    e.preventDefault();
    let res = await Api.post("addNewCart", {
      cartOwner: name,
      items: cartItems,
    });
    console.log(res.data);
    localStorage.setItem("cureentlyShopping", false);
    localStorage.removeItem("products");
    console.log("submitted");
  }

  return (
    <div className="cart__container">
      <h1>My Cart</h1>
      <p>Here you can see everything in your cart</p>

      {}
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
      <form onSubmit={submitForm}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            onChange={(event) => (name = event.target.value)}
          />
        </label>{" "}
        <br />
        <div className="btns_container">
          <button className="cartBtn" type="submit" value="Submit">
            Submit
          </button>
          <button className="cartBtn" onClick={() => navigate("/")}>
            Continue shopping
          </button>
        </div>
      </form>
    </div>
  );
};
