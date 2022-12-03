import { ProductModel } from "../schemas/product.js";

import { CartModel } from "../schemas/cart.js";

export async function getAllProducts(req, res) {
  let allUsers = await ProductModel.find({}, function (err, file) {})
    //DONT CHANGE THIS - it is handling the  Query was already executed: products.find({}) error
    .clone()
    .catch(function (err) {
      console.log(err);
    });

  console.log(allUsers);
  res.send({ allUsers });
}

export async function addNewCart(req, res) {
  const cart = new CartModel({
    cartOwner: req.body.cartOwner,
    items: req.body.items,
  });

  await cart.save();

  res.send("Item added");
}
