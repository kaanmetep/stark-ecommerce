import React from "react";
import { assets } from "../assets/assets";
import { useAuthContext } from "../contexts/AuthContext";
const NavBar = () => {
  const { isAuthenticated, logout } = useAuthContext();
  return (
    <div className="flex justify-between items-center px-8">
      <img src={assets.logo} alt="stark_logo" className="w-32" />
      <p className="uppercase tracking-wide sm:text-lg text-sm">Admin panel</p>
      {isAuthenticated ? (
        <button
          className="text-white bg-black sm:px-8 px-2 py-2 uppercase text-sm rounded-md tracking-wide"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
