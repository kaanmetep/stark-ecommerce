import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("DB is Connected."));
  mongoose.connection.on("error", (err) =>
    console.error("DB Connection Error:", err)
  );

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/starkdb`);
  } catch (error) {
    console.error("Initial DB Connection Failed:", error);
  }
};

export default connectDB;
