import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  addNewCart,
} from "../controllers/productController.js";

router.get("/products/", getAllProducts);
router.post("/addNewCart", addNewCart);

export default router;
