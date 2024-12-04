import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { userAuth } from "../middleware/userAuth.js";
const orderRouter = express.Router();

orderRouter.post("/", userAuth, createOrder);
orderRouter.get("/", getOrders);
export default orderRouter;
