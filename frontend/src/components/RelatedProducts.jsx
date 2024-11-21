import React, { useEffect, useState } from "react";
import { useShopContext } from "../contexts/ShopContext";
import ProductItem from "./ProductItem";
const RelatedProducts = ({ category, subCategory, id }) => {
  const { products } = useShopContext();
  const getRelatedProducts = () => {
    return products
      .filter(
        (product) =>
          product.category.toLowerCase() === category?.toLowerCase() &&
          product.subCategory.toLowerCase() === subCategory?.toLowerCase() &&
          product._id !== id
      )
      .slice(0, 5);
  };
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    setRelatedProducts(getRelatedProducts);
  }, [products, category, subCategory]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
      {relatedProducts?.map((related) => (
        <ProductItem productObj={related} key={related._id} />
      ))}
    </div>
  );
};

export default RelatedProducts;
