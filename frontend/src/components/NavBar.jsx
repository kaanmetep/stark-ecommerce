import React from "react";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between mt-2">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-32" />
      </Link>
      <div className="hidden sm:flex gap-6 items-center ">
        <NavLink className="flex flex-col items-center" to="/">
          <p className="text-gray-600">HOME</p>
          <hr className="bg-gray-900 w-1/2 h-[1.5px] hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center" to="/collection">
          <p className="text-gray-600">COLLECTION</p>
          <hr className="bg-gray-900 w-1/2 h-[1.5px] hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center" to="/about">
          <p className="text-gray-600">ABOUT</p>
          <hr className="bg-gray-900 w-1/2 h-[1.5px] hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center" to="/contact">
          <p className="text-gray-600">CONTACT</p>
          <hr className="bg-gray-900 w-1/2 h-[1.5px] hidden" />
        </NavLink>
      </div>
      <div className="flex place-items-center gap-4">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-4 cursor-pointer"
        />
        <div className="group">
          <img
            src={assets.profile_icon}
            alt="profile_icon"
            className="w-4 cursor-pointer"
          />
          <div className=" group-hover:block absolute hidden  right-0 pt-4 px-10">
            <div className="flex flex-col gap-2 py-3 px-4 text-gray-500 w-36 bg-slate-100">
              <a href="">My Profile</a>
              <a href="">Orders</a>
              <a href="">Logout</a>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer">
          <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
          <p className="absolute right-[-5px] bottom-[-8px] bg-black text-white rounded-full text-[8px] w-4 text-center leading-4 font-bold">
            10
          </p>
        </div>
        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-4 sm:hidden cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* MENU FOR MOBILE SCREENS */}
      {visible && (
        <div className="absolute top-0 bottom-0 right-0 left-0 w-full bg-white py-4 flex flex-col gap-2">
          <p
            className="text-gray-600 cursor-pointer mb-4 px-2"
            onClick={() => setVisible(false)}
          >
            &larr; Go Back
          </p>
          <NavLink
            className="text-gray-600 border-b px-2 py-1 block"
            to="/"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            className="text-gray-600 border-b px-2 py-1 block"
            to="/collection"
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="text-gray-600 border-b px-2 py-1 block"
            to="/about"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className="text-gray-600 border-b px-2 py-1 block"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
