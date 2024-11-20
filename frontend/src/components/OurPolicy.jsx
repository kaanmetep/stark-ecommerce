import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const OurPolicy = () => {
  return (
    <div className="mt-16">
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center justify-center">
          <img
            src={assets.exchange_icon}
            alt="exchange_icon"
            className="w-12 mb-2"
          />
          <p className="font-semibold text-gray-700">Easy Exchange Policy</p>
          <p className="text-gray-500">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={assets.quality_icon}
            alt="exchange_icon"
            className="w-12 mb-2"
          />
          <p className="font-semibold text-gray-700">7 Days Return Policy</p>
          <p className="text-gray-500">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={assets.support_img}
            alt="exchange_icon"
            className="w-12 mb-2"
          />
          <p className="font-semibold text-gray-700">Best customer support</p>
          <p className="text-gray-500">We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
