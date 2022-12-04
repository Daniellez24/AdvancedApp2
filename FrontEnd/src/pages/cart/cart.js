import React from "react";
import { Api } from "../../services/api";

import "./cart.css";

export const Cart = () => {
  let cartItems = JSON.parse(localStorage.getItem("products")).filter(
    (item) => item.amount > 0
  );

  let totalPrice = 0;

  console.log(cartItems);

  let name;

  async function submitForm(e){
    e.preventDefault();
    let res = await Api.post("addNewCart",{
      cartOwner: name, 
      items: cartItems
    })
    console.log(res.data);
  }


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
      <form onSubmit={submitForm}>
        <label>
          Full Name:
          <input type="text" name="name" onChange={ (event) => name = event.target.value}/>
        </label> <br />
        <button className="submitBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
};
