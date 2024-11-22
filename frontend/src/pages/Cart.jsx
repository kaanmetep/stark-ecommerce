import React from "react";
import Title from "../components/Title";
import CartItem from "../components/CartItem";
import { useShopContext } from "../contexts/ShopContext";
const Cart = () => {
  const { currency, cartItems, calculateCartSubtotal } = useShopContext();
  const shippingFee = 10;
  const total = shippingFee + calculateCartSubtotal();
  return (
    <div className="border-t ">
      <div className="mt-10">
        <Title text1={"YOUR"} text2={"CART"} />
        <div>
          {cartItems?.map((item, index) => (
            <CartItem key={index} cartItemObj={item} />
          ))}
        </div>
        <div className=" flex">
          <div className="ml-auto mt-8">
            <Title text1={"CART"} text2={"TOTALS"} className="justify-end" />

            <div className="grid grid-cols-[10fr,1fr] items-center justify-center py-2">
              <p>Subtotal</p>
              <p>
                {currency}
                {calculateCartSubtotal()}
              </p>
            </div>
            <div className="grid grid-cols-[12fr,1fr] items-center justify-center border-t py-2">
              <p>Shipping Fee</p>
              <p>
                {currency}
                {shippingFee}
              </p>
            </div>
            <div className="grid grid-cols-[12fr,1fr] items-center justify-center border-t py-2">
              <p className="font-bold">Total</p>
              <p>
                {currency}
                {total}
              </p>
            </div>
            <button className=" mt-8 text-white bg-black py-3 px-8 uppercase active:bg-gray-800 hover:bg-gray-600 transition-all delay-[30ms] ml-auto block">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
