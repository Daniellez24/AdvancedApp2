import { getMongooseInstance } from "../services/db.js";

const mongoose = getMongooseInstance();

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
});

export const ProductModel = mongoose.model("products", productSchema);
