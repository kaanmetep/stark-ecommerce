import express from "express";
import {
  addProduct,
  getProducts,
  getProduct,
  removeProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
const productRouter = express.Router();

productRouter.get("/:id", getProduct);
productRouter.get("/", getProducts);
productRouter.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.delete("/:id", removeProduct);

export default productRouter;
