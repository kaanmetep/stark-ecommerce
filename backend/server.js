import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connnectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connnectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("API is working.");
});

app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});
