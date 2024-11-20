import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border gap-8 sm:gap-0 border-gray-500 ">
      {/* HERO RIGHT SIDE */}
      <div className=" flex-1 flex  items-center justify-center mt-6 sm:mt-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justfiy-center gap-1 mb-2">
            <hr className=" bg-gray-500 h-[3px] w-12" />
            <p className="text-xs text-gray-800 ">MAKE IT ELEGANT</p>
          </div>
          <p className="text-3xl text-gray-800 prata-regular">
            Latest Arrivals
          </p>
          <div className="flex items-center justfiy-center gap-1">
            <p className="text-xs text-gray-800 ">SHOP NOW</p>
            <hr className=" bg-gray-500 h-[3px] w-12" />
          </div>
        </div>
      </div>
      {/* HERO LEFT SIDE */}
      <div className="flex-1">
        <img src={assets.hero_img} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
