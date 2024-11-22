import { useState, useEffect } from "react";
import { useShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  const { products } = useShopContext();
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="mt-16">
      <div className="py-8">
        <Title
          text1={"LATEST"}
          text2={"COLLECTIONS"}
          className="justify-center"
        />
        <div className="flex justify-center">
          <p className="sm:w-3/4 text-center text-gray-500 sm:leading-6 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            maxime repellat quisquam aut neque ea tempora illum, fugit.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-rows-2 gap-4 gap-y-8 mt-8">
          {latestProducts?.map((product) => (
            <ProductItem productObj={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
