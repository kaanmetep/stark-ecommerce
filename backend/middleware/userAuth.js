// to create an order, use have to be logged in!
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const userAuth = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized!" });
    }
    const token = authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken.id);
    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "This user doesnt exist!" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Authentication failed" });
  }
};
