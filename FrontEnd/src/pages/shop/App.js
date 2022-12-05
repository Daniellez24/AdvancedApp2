import { ExpenseItem } from "../../Components/ExpenseItem";
import { useProducts } from "./useProducts";

import "./App.css";

function App() {
  const products = useProducts();

  //localStorage.setItem('items', JSON.stringify(items));
  //console.log(JSON.parse(localStorage.getItem("items"))[1].name)

  return (
    <>
      <h1>Our shop</h1>
      {products &&
        products.map((item) => {
          return (
            <ExpenseItem
              key={item._id}
              name={item.name}
              img={item.imgUrl}
              price={item.price}
            />
          );
        })}
    </>
  );
}

export default App;
