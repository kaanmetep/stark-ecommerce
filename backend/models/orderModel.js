import mongoose from "mongoose";

const orderSchmea = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, required: true },
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchmea);

export default orderModel;
