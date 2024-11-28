import productModel from "../models/productModel.js";
import { v2 as cloudinary } from "cloudinary";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true",
      size: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    const product = await productModel.create(productData);
    res.status(201).json({ status: true, message: product });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({ status: true, message: products });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
export const removeProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ status: false, message: "No product found." });
    }
    res.status(200).json({ status: true, message: deletedProduct });
  } catch (err) {
    req.status(500).json({ status: false, message: err.message });
  }
};
export const getProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ status: false, message: "No product found." });
    }
    res.status(200).json({ status: true, message: product });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
