import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../services/adminService";
import LoadingSpinner from "../components/LoadingSpinner";
const List = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response);
    })();
  }, []);
  console.log(products);
  return (
    <div>
      {products ? (
        <div className="">
          <p className="mb-4">All Products List</p>
          <div className="grid grid-cols-[2fr,4fr,3fr,3fr,2fr] gap-4 mb-10 bg-gray-100 p-4 font-semibold border-2">
            <p>Image</p>
            <p>Name</p>
            <p className="justify-self-center">Category</p>
            <p>Price</p>
            <p>Action</p>
          </div>

          {products.map((product) => (
            <div className="grid grid-cols-[2fr,4fr,3fr,3fr,2fr]  items-center gap-x-6 bg-gray-50 mb-6 py-2 px-4 text-sm text-gray-800">
              <img
                src={product.image[0]}
                alt="product_img"
                className="w-14"
              ></img>
              <p>{product.name}</p>
              <p className="justify-self-center">{product.category}</p>
              <p>$ {product.price}</p>
              <p className="cursor-pointer">X</p>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default List;
