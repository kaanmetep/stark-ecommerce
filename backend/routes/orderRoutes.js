import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { userAuth } from "../middleware/userAuth.js";
const orderRouter = express.Router();

orderRouter.post("/", userAuth, createOrder);

export default orderRouter;
