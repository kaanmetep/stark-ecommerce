import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
export const createOrder = async (req, res) => {
  try {
    const orderData = {
      items: req.body,
      user: req.user.id,
    };
    const createdOrder = await orderModel.create(orderData);
    await userModel.findByIdAndUpdate(req.user.id, {
      $push: { orders: createdOrder._id },
    });
    if (createOrder) {
      res.status(201).json({ status: true, message: createdOrder });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({ status: true, message: orders });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
