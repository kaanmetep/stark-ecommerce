import React from "react";
import Title from "../components/Title";
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useShopContext } from "../contexts/ShopContext";
const Cart = () => {
  const { cartItems } = useShopContext();
  const navigate = useNavigate();
  return (
    <div className="border-t ">
      <div className="mt-10">
        <Title text1={"YOUR"} text2={"CART"} />
        <div>
          {cartItems?.map((item, index) => (
            <CartItem key={index} cartItemObj={item} />
          ))}
        </div>
        <div className="mt-8">
          <Title text1={"CART"} text2={"TOTALS"} className="justify-end" />
          <CartTotals />
          <button
            className=" mt-8 text-white bg-black py-3 px-8 uppercase active:bg-gray-800 hover:bg-gray-600 transition-all delay-[30ms] ml-auto block"
            onClick={() => {
              if (cartItems.length === 0) {
                return toast.error("You have no item in your cart!");
              }
              navigate("/place-order");
            }}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
