import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { useShopContext } from "../contexts/ShopContext";
const SearchBar = () => {
  const { search, setSearch, setShowSearch } = useShopContext();
  const onClickCrossIcon = () => {
    setShowSearch(false);
  };
  return (
    <div className=" flex items-center justify-center bg-gray-100 p-6 relative gap-2">
      <div className="relative w-[80%] sm:w-[55%]">
        <input
          type="text"
          className="w-full rounded-full px-4 py-[5.5px] outline-none border-2 border-gray-400"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={assets.search_icon}
          alt="searh_icon"
          className=" w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3"
        />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross_icon"
        className="w-3 h-3 cursor-pointer "
        onClick={onClickCrossIcon}
      />
    </div>
  );
};

export default SearchBar;
