import React from "react";
import { useEffect, useState } from "react";
import { useShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
const CartItem = ({ cartItemObj }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(cartItemObj.quantity || 1);
  const {
    currency,
    products,
    onDeleteCartItem,
    onChangeQuantity,
    getItemById,
  } = useShopContext();
  useEffect(() => {
    const item = getItemById(cartItemObj.productId);
    if (item) {
      setCurrentItem(item);
    }
  }, [products, cartItemObj.productId]);

  return (
    <div className=" sm:grid sm:grid-cols-[6fr,3fr,1fr] justify-between items-center border-t border-b">
      <div className="flex flex-col sm:flex-row gap-4 p-3">
        <img src={currentItem?.image[0]} alt="item_image" className="w-20" />
        <div>
          <p className="text-lg font-medium">{currentItem?.name}</p>
          <div className="flex gap-4 mt-2 items-center">
            <p>
              {currency} {currentItem?.price * cartItemObj.quantity}
            </p>
            <p className="bg-gray-100 font-medium py-1 px-3 text-center">
              {cartItemObj.size.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center sm:justify-between gap-4 pb-2 sm:pb-0 ml-2 sm:ml-0 ">
        <input
          type="number"
          min="1"
          max="50"
          step="1"
          value={quantity > 50 ? 50 : quantity}
          onChange={(e) => {
            const newQuantity = Number(e.target.value);
            setQuantity(newQuantity);
            onChangeQuantity(
              cartItemObj.productId,
              cartItemObj.size,
              newQuantity
            );
          }}
          onKeyDown={(e) => {
            // allow only up and down keys
            if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
              e.preventDefault();
            }
          }}
          className="border w-16 h-8 py-1 px-2 flex items-center "
        />
        <img
          src={assets.bin_icon}
          alt="bin_icon"
          className="w-5 h-5 cursor-pointer"
          onClick={() =>
            onDeleteCartItem(cartItemObj.productId, cartItemObj.size)
          }
        />
      </div>
    </div>
  );
};

export default CartItem;
