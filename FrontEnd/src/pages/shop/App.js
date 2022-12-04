import { ExpenseItem } from "../../Components/ExpenseItem";
import { useProducts } from "./useProducts";

import "./App.css";

function App() {
  const products = useProducts();

  return (
    <>
      <h1>Our shop</h1>
      {products &&
        products.map((item, index) => {
          return (
            <ExpenseItem
              key={item._id}
              name={item.name}
              img={item.imgUrl}
              price={item.price}
              index={index}
            />
          );
        })}
    </>
  );
}

export default App;
