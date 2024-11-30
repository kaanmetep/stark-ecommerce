import React from "react";
import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../services/adminService";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
const List = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };
  const handleDeleteProduct = async (id) => {
    const response = await deleteProduct(id);
    if (response.status) {
      toast.success("Item is deleted successfully.");
      await fetchProducts();
      return;
    }
    toast.error("Item couldn't delete", response.message);
  };
  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);
  return (
    <div>
      {products ? (
        <div>
          <p className="mb-4">All Products List</p>
          <div className="grid grid-cols-[2fr,4fr,3fr,3fr,2fr] gap-4 mb-10 bg-gray-100 p-4 font-semibold border-2">
            <p>Image</p>
            <p>Name</p>
            <p className="justify-self-center">Category</p>
            <p>Price</p>
            <p>Action</p>
          </div>

          {products.map((product) => (
            <div
              className="grid grid-cols-[2fr,4fr,3fr,3fr,2fr]  items-center gap-x-6 bg-gray-50 mb-6 py-2 px-4 text-sm text-gray-800"
              key={product._id}
            >
              <img
                src={product.image[0]}
                alt="product_img"
                className="w-14"
              ></img>
              <p>{product.name}</p>
              <p className="justify-self-center">{product.category}</p>
              <p>$ {product.price}</p>
              <p
                className="cursor-pointer"
                onClick={() => handleDeleteProduct(product._id)}
              >
                X
              </p>
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
