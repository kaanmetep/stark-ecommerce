import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/:id", getUser);
export default userRouter;
