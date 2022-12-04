import "./ExpenseItem.css";
import { useRef, useEffect } from "react";

export function ExpenseItem({ name, price, img, index }) {
  function increaseAmount() {
    let list = JSON.parse(localStorage.getItem("products"));
    list[index].amount += 1;
    localStorage.setItem("products", JSON.stringify(list));
    console.log(JSON.parse(localStorage.getItem("products")));

    alert("Item added to cart!");
  }

  return (
    <div className="container">
      <div>
        <p className="productName">{name}</p>
        <p className="price">{price}</p>
        <button className="cartbtn" onClick={increaseAmount}>
          Add to cart
        </button>
      </div>
      <img src={img} alt="This is a cool image" />
    </div>
  );
}
