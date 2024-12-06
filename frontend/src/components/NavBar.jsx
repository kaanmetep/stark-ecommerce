import React from "react";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useShopContext } from "../contexts/ShopContext.jsx";
import { useUserContext } from "../contexts/UserContext.jsx";
import { toast } from "react-toastify";
const NavBar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, cartItems } = useShopContext();
  const { isAuthenticated, logout } = useUserContext();
  const location = useLocation();
  const onClickSearchIcon = () => {
    if (location.pathname !== "/collection") {
      navigate("/collection");
      setShowSearch(true);
    }
    if (location.pathname === "/collection" && showSearch) {
      setShowSearch(false);
    }
    if (location.pathname === "/collection" && !showSearch) {
      setShowSearch(true);
    }
  };
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
        <a
          href="https://stark-ecommerce-admin.vercel.app/"
          className="underline"
          target="_blank"
        >
          Admin Page
        </a>
      </div>
      <div className="flex place-items-center gap-4">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-4 cursor-pointer"
          onClick={onClickSearchIcon}
        />
        <Link to={isAuthenticated ? "/profile" : "/login"}>
          <div className="group z-10">
            <img
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-4 cursor-pointer"
            />
            {isAuthenticated && (
              <div className=" group-hover:block absolute hidden  right-0 pt-4 px-10 lg:px-20">
                <div className="flex flex-col gap-2 py-3 px-4 text-gray-800 w-36 bg-slate-100">
                  <Link to="/profile">
                    <p className="hover:underline">My Profile</p>
                  </Link>
                  <Link to="/orders">
                    <p className="hover:underline">Orders</p>
                  </Link>
                  <p
                    onClick={() => {
                      const success = logout();
                      if (success) {
                        toast.success("You logged out!");
                      }
                    }}
                    className="hover:underline"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        </Link>
        <NavLink to="/cart">
          <div className="relative cursor-pointer">
            <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
            <p className="absolute right-[-5px] bottom-[-8px] bg-black text-white rounded-full text-[8px] w-4 text-center leading-4 font-bold">
              {cartItems.length}
            </p>
          </div>
        </NavLink>
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
