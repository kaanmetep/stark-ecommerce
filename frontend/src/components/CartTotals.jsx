import React from "react";

import { useShopContext } from "../contexts/ShopContext";
const CartTotals = () => {
  const { currency, calculateCartSubtotal, shippingFee } = useShopContext();
  const cartTotal = calculateCartSubtotal() + shippingFee;
  return (
    <div className=" flex">
      <div className="ml-auto ">
        <div className="grid grid-cols-[8fr,1fr] items-center justify-center py-2">
          <p>Subtotal</p>
          <p>
            {currency}
            {calculateCartSubtotal()}.00
          </p>
        </div>
        <div className="grid grid-cols-[8fr,1fr] items-center justify-center border-t py-2">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shippingFee}.00
          </p>
        </div>
        <div className="grid grid-cols-[8fr,1fr] items-center justify-center border-t py-2">
          <p className="font-bold">Total</p>
          <p>
            {currency}
            {cartTotal}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
