import React from "react";
import { useShopContext } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ productObj }) => {
  const { currency } = useShopContext();
  return (
    <Link to={`/product/${productObj?._id}`}>
      <div className="overflow-hidden">
        <img
          src={productObj.image[0]}
          alt="product_image"
          className="cursor-pointer hover:scale-110 transition-all delay-[30ms]"
        />
      </div>
      <p className="text-gray-600 text-sm mt-2">{productObj.name}</p>
      <p className="font-semibold text-gray-800 mt-1 text-sm">
        {currency} {productObj.price}
      </p>
    </Link>
  );
};

export default ProductItem;
