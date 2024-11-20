import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm sm:items-center ">
        <div>
          <img src={assets.logo} alt="logo" className="w-24 ml-[-14px]" />
          <p className="text-gray-600 w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            eveniet fugiat. Obcaecati quas pariatur, perspiciatis veritatis
            impedit reiciendis excepturi ab et consequuntur repellat repudiandae
            doloremque officia ipsa. Amet et eaque, distinctio ipsum fugiat
            dolores reiciendis.
          </p>
        </div>
        <div>
          <p className="uppercase font-bold text-xl mb-4">Company</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="uppercase font-bold text-xl mb-4">Get in touch</p>
          <div className="flex flex-col gap-4">
            <p>+1-000-000-0000</p>
            <p>kaanpmete@gmail.com</p>
            <a href="https://github.com/kaanmetep" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full h-[3px] bg-gray-700" />
      <p className="text-center text-gray-600 text-sm my-4">Kaan Mete P.</p>
    </>
  );
};

export default Footer;
