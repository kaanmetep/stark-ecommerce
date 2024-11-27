import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
const comparePasswords = async (userPassword, hashedPassword) => {
  return await bcrypt.compare(userPassword, hashedPassword);
};
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if fields are empty
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide an email and a password",
      });
    }
    // Check if e-mail exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found." });
    }
    // Check if password is correct
    const isPasswordCorrect = await comparePasswords(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ status: false, message: "Password is not correct!" });
    }
    // Create token and send it to the client
    const token = createToken(user._id);
    res.status(200).json({ status: true, message: token });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if fields are not empty.
    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required.",
      });
    }
    // Check if user already exist with the same e-mail.
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(409).json({
        status: false,
        message: "This e-mail already in use.",
      });
    }
    // Check if e-mail is in correct form.
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: false,
        message: "Please enter a valid e-mail.",
      });
    }
    // Check if password at least 8 characters long.
    if (password.length < 8) {
      return res.status(400).json({
        status: false,
        message: "Password must be at least 8 characters long.",
      });
    }
    // Hash password and create new user
    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.status(201).json({ status: true, message: token });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
