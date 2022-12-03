import { getMongooseInstance } from "../services/db.js";

import { productSchema } from "./product.js";

const mongoose = getMongooseInstance();

const cartSchema = new mongoose.Schema({
  cartOwner: { type: String, require: true },
  items: {
    type: [
      {
        amount: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        imgUrl: { type: String, required: true },
      },
    ],
  },
});

export const CartModel = mongoose.model("Carts", cartSchema);
