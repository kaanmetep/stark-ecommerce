import { useEffect, useState } from "react";
import React from "react";
import { useShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
const CartItem = ({ cartItemObj }) => {
  // TODO: LATER CREATE A ROUTE TO GET A SINGLE PRODUCT
  const { currency, products, onDeleteCartItem, onChangeQuantity } =
    useShopContext();
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(cartItemObj.quantity || 1);
  useEffect(() => {
    const item = products.find((el) => el._id === cartItemObj.productId);
    if (item) {
      setCurrentItem(item);
    }
  }, [products, cartItemObj.productId]);

  return (
    <div className="grid grid-cols-[6fr,2fr,1fr] justify-between items-center border-t border-b">
      <div className="flex gap-4 p-3">
        <img src={currentItem?.image[0]} alt="item_image" className="w-20" />
        <div>
          <p className="text-lg font-medium">{currentItem?.name}</p>
          <div className="flex gap-4 mt-2 items-center">
            <p>
              {currency} {currentItem?.price * cartItemObj.quantity}
            </p>
            <p className="bg-gray-100 font-medium py-1 px-3 text-center">
              {cartItemObj.size}
            </p>
          </div>
        </div>
      </div>
      <input
        type="number"
        min="1"
        max="100"
        step="1"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          setQuantity(newQuantity);
          onChangeQuantity(
            cartItemObj.productId,
            cartItemObj.size,
            newQuantity
          );
        }}
        className="border w-16 h-8 py-1 px-2 flex items-center"
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
  );
};

export default CartItem;
