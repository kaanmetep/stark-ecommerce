import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../contexts/ShopContext";
import { toast } from "react-toastify";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, onAddCartItem, getItemById } = useShopContext();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = () => {
    const item = getItemById(productId);
    if (item) {
      setProductData(item);
    }
  };
  const handleAddCard = (productId, size) => {
    if (!size) {
      return toast.error("Please select a size!");
    } else {
      const newCard = onAddCartItem(productId, size);
      toast.success("Item added to your cart!");
      localStorage.setItem("cart", JSON.stringify(newCard));
    }
  };
  useEffect(() => fetchProductData(), [productId, products]);
  useEffect(() => setImage(productData?.image[0]), [productData]);
  return (
    <>
      <div className="flex flex-col md:flex-row  border-t pt-10 gap-8 sm:gap-4">
        {/* LEFT SIDE OF PRODUCT PAGE (IMAGES) */}
        <div className="flex  justify-center gap-6 ">
          <div className="flex flex-col gap-4 ">
            {productData?.image?.map((image, index) => (
              <img
                src={image}
                alt="product_img"
                className=" cursor-pointer w-32"
                onClick={() => setImage(image)}
                key={index}
              ></img>
            ))}
          </div>
          <div>
            <img src={image} alt="product_img_main" className="md:w-[650px]" />
          </div>
        </div>
        {/* RIGHT SIDE OF PRODUCT PAGE (DESCRIPTION) */}
        <div className="flex flex-col gap-3 ">
          <p className="lg:text-2xl text-xl">{productData?.name}</p>
          <p className="font-semibold text-2xl">
            {currency} {productData?.price}
          </p>
          <p className="text-gray-700">{productData?.description}</p>
          <p className="mt-6">Select Size</p>
          <div className="flex gap-6">
            {productData?.sizes?.map((item, index) => (
              <p
                className={`bg-gray-200 font-semibold p-3 px-4 cursor-pointer border-2   ${
                  item === size ? "border-orange-400" : ""
                }`}
                key={index}
                onClick={() => setSize(item)}
              >
                {item.toUpperCase()}
              </p>
            ))}
          </div>
          <button
            className="mr-auto mt-8 text-white bg-black py-3 px-8 uppercase active:bg-gray-800 hover:bg-gray-600 transition-all delay-[30ms]"
            onClick={() => handleAddCard(productData._id, size)}
          >
            Add To Cart
          </button>
          <hr className="w-3/4 h-[2.5px] bg-gray-200 mt-8" />
          <div className="text-gray-400 flex flex-col gap-1 text-sm">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Title
          text1={"RELATED"}
          text2={"PRODUCTS"}
          className="justify-center"
        />
        <RelatedProducts
          category={productData?.category}
          subCategory={productData?.subCategory}
          id={productData?._id}
        />
      </div>
    </>
  );
};

export default Product;
