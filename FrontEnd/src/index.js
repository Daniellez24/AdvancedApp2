import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/shop/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Cart } from "./pages/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Something went wrong</h1>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
