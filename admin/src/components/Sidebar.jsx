import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[20%]  py-8 border-r min-h-screen">
      <div className=" flex flex-col gap-6 ">
        <NavLink
          className="flex gap-2 items-center px-4 py-2 border-2 rounded-lg"
          to="/add"
        >
          <img src={assets.add_icon} alt="add_icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex gap-2 items-center px-4 py-2 border-2 rounded-lg "
          to="/list"
        >
          <img src={assets.order_icon} alt="add_icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex gap-2 items-center px-4 py-2 border-2 rounded-lg"
          to="/orders"
        >
          <img src={assets.order_icon} alt="add_icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
