import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password has to be at least 8 characters."],
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema, "users");

export default userModel;
