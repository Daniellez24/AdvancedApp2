import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  addProducts,
} from "../controllers/productController.js";

router.get("/products/", getAllProducts);
router.post("/addProduct", addProducts);

export default router;
