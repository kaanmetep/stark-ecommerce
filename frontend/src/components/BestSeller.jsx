import React, { useState, useEffect } from "react";
import { useShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const { products } = useShopContext();
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);
    setBestSellers(bestProducts.slice(0, 5));
  }, [products]);
  return (
    <div>
      <div className="py-8">
        <Title text1={"BEST"} text2={"SELLERS"} className="justify-center" />
        <div className="flex justify-center">
          <p className="sm:w-3/4 text-center text-gray-500 sm:leading-6 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            sint! Aperiam aspernatur maxime hic ex!
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 mt-8">
          {bestSellers?.map((product) => (
            <ProductItem productObj={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
