import { getMongooseInstance } from "../services/db.js";

const mongoose = getMongooseInstance();

export const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

export const ProductModel = mongoose.model("products", productSchema);
