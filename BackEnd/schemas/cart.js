import { getMongooseInstance } from "../services/db.js";

import { productSchema } from "./product.js";

const mongoose = getMongooseInstance();

const cartSchema = new mongoose.Schema({
  cartOwner: { type: String, require: true },
  items: {
    type: [{ cartOwner: { type: String, required: true }, ...productSchema }],
  },
});

export const CartModel = mongoose.model("Carts", cartSchema);
