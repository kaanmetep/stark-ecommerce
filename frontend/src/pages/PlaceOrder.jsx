import React from "react";
import Title from "../components/Title";
import CartTotals from "../components/CartTotals";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const PlaceOrder = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="border-t">
      <div className="mt-10 ">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <div className="flex gap-8 flex-col md:flex-row ">
          <div className="flex-1 ">
            <form action="" className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border px-3 py-1 w-full  rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border px-3 py-1 w-full  rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="E-mail adress"
                className="border px-3 py-1  w-full rounded-md"
              />
              <input
                type="text"
                placeholder="Street"
                className="border px-3 py-1 w-full rounded-md"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="City"
                  className="border px-3 py-1 w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border px-3 py-1 w-full rounded-md"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="border px-3 py-1 w-full rounded-md"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="border px-3 py-1 w-full rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="border px-3 py-1 w-full rounded-md"
              />
            </form>
          </div>
          <div className="flex flex-col flex-1 justify-end ">
            <Title text1={"CART"} text2={"TOTALS"} className="lg:justify-end" />
            <CartTotals />
            <div className="mt-6 xl:ml-auto">
              <Title text1={"PAYMENT"} text2={"METHOD"} />
              <div className="flex flex-col xl:flex-row gap-4">
                <div
                  className="flex border p-4 items-center gap-4"
                  onClick={() => setSelectedPaymentType("stripe")}
                >
                  <p
                    className={`w-4 h-4 border-2 rounded-full cursor-pointer ${
                      selectedPaymentType === "stripe" ? "bg-green-500" : ""
                    }`}
                  ></p>
                  <img
                    src={assets.stripe_logo}
                    alt="stripe_logo"
                    className="w-12"
                  />
                </div>
                <div
                  className="flex border p-4 items-center gap-4"
                  onClick={() => setSelectedPaymentType("razorpay")}
                >
                  <p
                    className={`w-4 h-4 border-2 rounded-full cursor-pointer ${
                      selectedPaymentType === "razorpay" ? "bg-green-500" : ""
                    }`}
                  ></p>
                  <img
                    src={assets.razorpay_logo}
                    alt="stripe_logo"
                    className="w-12"
                  />
                </div>
                <div
                  className="flex border p-4 items-center gap-4"
                  onClick={() => setSelectedPaymentType("cash")}
                >
                  <p
                    className={`w-4 h-4 border-2 rounded-full cursor-pointer ${
                      selectedPaymentType === "cash" ? "bg-green-500" : ""
                    }`}
                  ></p>
                  <p className="uppercase">Cash on delivery</p>
                </div>
              </div>
            </div>
            <button
              className="ml-auto mt-8 text-white uppercase bg-black py-2 px-12"
              onClick={() => navigate("/orders")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
