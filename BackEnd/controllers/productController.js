import { ProductModel } from "../schemas/product.js";

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
  
  res.send("send all products from here");
}
