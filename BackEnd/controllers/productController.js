import { ProductModel } from "../schemas/product.js";

export async function getAllProducts(req, res) {
  //TODO check why this is an error when returning allUsers
  let allUsers = ProductModel.find({}, function (err, file) {});
  res.send("Getting all the users");
}

export async function addProducts(req, res) {
  res.send("send all products from here");
}
