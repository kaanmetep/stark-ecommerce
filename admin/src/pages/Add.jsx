import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { addProduct } from "../services/adminService";
import { toast } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";
const Add = () => {
  const [itemAddLoading, setItemAddLoading] = useState(false);
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "men",
    subCategory: "topwear",
    price: "",
    sizes: ["S"],
    bestseller: false,
  });
  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    setImages((prev) => ({ ...prev, [name]: files[0] }));
  };
  const handleProductData = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelectedSizes = (s) => {
    setProductData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(s)
        ? prev.sizes.filter((size) => size !== s)
        : [...prev.sizes, s],
    }));
  };
  const resetForm = () => {
    setProductData({
      name: "",
      description: "",
      category: "men",
      subCategory: "topwear",
      price: "",
      sizes: ["S"],
      bestseller: false,
    });
    setImages({ image1: "", image2: "", image3: "", image4: "" });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let checkAtLeastOneImage = false;
    const formData = new FormData();

    try {
      setItemAddLoading(true);
      for (const key in productData) {
        if (key === "sizes") {
          formData.append(key, JSON.stringify(productData[key]));
        } else {
          formData.append(key, productData[key]);
        }
      }

      for (const key in images) {
        if (images[key]) {
          formData.append(key, images[key]);
          checkAtLeastOneImage = true;
        }
      }

      if (!checkAtLeastOneImage) {
        throw new Error("Please add at least 1 image for this product!");
      }

      await addProduct(formData);
      // if there in no error until this point, item added succesfully
      toast.success("Item added successfully!");
      resetForm();
    } catch (err) {
      const errorMessage =
        err.response?.data ||
        err?.message ||
        "Item couldn't be added. Please try again.";
      toast.error(errorMessage);
    } finally {
      setItemAddLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-2 w-fit ">
        <p>Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1" className="cursor-pointer">
            <img
              src={
                images.image1
                  ? URL.createObjectURL(images.image1)
                  : assets.upload_area
              }
              alt="upload_image"
              className="w-20"
            />
            <input
              type="file"
              id="image1"
              className="hidden"
              onChange={handleImageUpload}
              name="image1"
            />
          </label>
          <label htmlFor="image2" className="cursor-pointer">
            <img
              src={
                images.image2
                  ? URL.createObjectURL(images.image2)
                  : assets.upload_area
              }
              alt="upload_image"
              className="w-20"
            />
            <input
              type="file"
              id="image2"
              className="hidden"
              name="image2"
              onChange={handleImageUpload}
            />
          </label>
          <label htmlFor="image3" className="cursor-pointer">
            <img
              src={
                images.image3
                  ? URL.createObjectURL(images.image3)
                  : assets.upload_area
              }
              alt="upload_image"
              className="w-20"
            />
            <input
              type="file"
              id="image3"
              className="hidden "
              name="image3"
              onChange={handleImageUpload}
            />
          </label>
          <label htmlFor="image4" className="cursor-pointer">
            <img
              src={
                images.image4
                  ? URL.createObjectURL(images.image4)
                  : assets.upload_area
              }
              alt="upload_image"
              className="w-20"
            />
            <input
              type="file"
              id="image4"
              className="hidden "
              name="image4"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <label htmlFor="product_name">Product Name</label>
        <input
          type="text"
          className="border-2 outline-none px-2 py-1 rounded-md"
          placeholder="Type here"
          required
          name="name"
          onChange={handleProductData}
          value={productData.name}
        />
        <label htmlFor="product_description">Product Description</label>
        <input
          type="text"
          className="border-2 outline-none px-2 py-8 pt-2 rounded-md"
          placeholder="Write content here"
          required
          name="description"
          value={productData.description}
          onChange={handleProductData}
        />
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="product_category">Product Category</label>
            <select
              name="category"
              id="category"
              className="border-2 p-2 rounded-md"
              onChange={handleProductData}
              value={productData.category}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sub_category">Sub Category</label>
            <select
              name="subCategory"
              id="subCategory"
              className="border-2 p-2 rounded-md"
              onChange={handleProductData}
              value={productData.subCategory}
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="winterwear">Winterwear</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="product_price">Product Price</label>
            <input
              type="number"
              className="border-2 p-2 rounded-md"
              placeholder="Enter Price"
              name="price"
              onChange={handleProductData}
              value={productData.price}
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-2">
            <p
              className={`py-2 px-4 bg-gray-200 ${
                productData.sizes.includes("S") ? "border border-red-600" : ""
              }`}
              onClick={() => handleSelectedSizes("S")}
            >
              S
            </p>
            <p
              className={`py-2 px-4 bg-gray-200 ${
                productData.sizes.includes("M") ? "border border-red-600" : ""
              }`}
              onClick={() => handleSelectedSizes("M")}
            >
              M
            </p>
            <p
              className={`py-2 px-4 bg-gray-200 ${
                productData.sizes.includes("l") ? "border border-red-600" : ""
              }`}
              onClick={() => handleSelectedSizes("l")}
            >
              L
            </p>
            <p
              className={`py-2 px-4 bg-gray-200 ${
                productData.sizes.includes("XL") ? "border border-red-600" : ""
              }`}
              onClick={() => handleSelectedSizes("XL")}
            >
              XL
            </p>
            <p
              className={`py-2 px-4 bg-gray-200 ${
                productData.sizes.includes("XXL") ? "border border-red-600" : ""
              }`}
              onClick={() => handleSelectedSizes("XXL")}
            >
              XXL
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-4 items-center">
          <input
            type="checkbox"
            id="bestseller"
            name="bestseller"
            className="cursor-pointer"
            checked={productData.bestseller}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                bestseller: e.target.checked,
              }))
            }
          />
          <p>Add to Bestseller</p>
        </div>
      </div>
      {itemAddLoading ? (
        <LoadingSpinner />
      ) : (
        <button className="mt-4 text-white bg-black py-2 px-10 uppercase tracking-wide hover:text-black hover:bg-white transition-all delay-[50ms]">
          Add
        </button>
      )}
    </form>
  );
};

export default Add;
