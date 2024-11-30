import React, { useState, useMemo } from "react";
import { useShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
const Collection = () => {
  const { products, showSearch, search } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState("relavent");
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);

  const applySort = (products) => {
    if (sortOption === "relavent") return products;
    else if (sortOption === "lowtohigh") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      return sortedProducts;
    } else if (sortOption === "hightolow") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      return sortedProducts;
    }
  };
  const onAddCategory = (value) => {
    if (!category.includes(value)) {
      setCategory((prev) => [...prev, value]);
    } else {
      setCategory((prev) => prev.filter((item) => item !== value));
    }
  };

  const onAddType = (value) => {
    if (!type.includes(value)) {
      setType((prev) => [...prev, value]);
    } else {
      setType((prev) => prev.filter((item) => item !== value));
    }
  };

  const applyFilters = (products) => {
    let filtered = products;
    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }
    if (type.length > 0) {
      filtered = filtered.filter((product) =>
        type.includes(product.subCategory)
      );
    }
    return filtered;
  };
  const filteredProducts = useMemo(() => {
    if (search === "") {
      return applyFilters(applySort(products));
    }
    // IF USER SEARCHED FOR AN ITEM, WE FILTER IT.
    return applyFilters(
      applySort(
        products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [products, category, type, sortOption, search]);

  return (
    <>
      {showSearch && <SearchBar />}

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-10 border-t">
        {/* FILTER OPTIONS --- LEFT SIDE OF COLLECTION PAGE */}
        <div>
          <div
            className="flex gap-2 items-center my-2 mb-4 cursor-pointer"
            onClick={() => setShowFilter((curr) => !curr)}
          >
            <p className="uppercase text-2xl ">Filters</p>
            <img
              src={assets.dropdown_icon}
              alt="dropdown_icon"
              className={`w-3 h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </div>
          <div className={` ${showFilter ? "block" : "hidden"} sm:block`}>
            <div className="border p-4 min-w-60">
              <p className="uppercase mb-2  font-semibold">Categories</p>
              <div className="flex flex-col gap-2 text-gray-500">
                <p>
                  <input
                    type="checkbox"
                    value={"men"}
                    className="mr-1"
                    onChange={(e) => onAddCategory(e.target.value)}
                  />
                  Men
                </p>
                <p>
                  <input
                    type="checkbox"
                    value={"women"}
                    className="mr-1"
                    onChange={(e) => onAddCategory(e.target.value)}
                  />
                  Women
                </p>
                <p>
                  <input
                    type="checkbox"
                    value={"kids"}
                    className="mr-1"
                    onChange={(e) => onAddCategory(e.target.value)}
                  />
                  Kids
                </p>
              </div>
            </div>
            <div className="border p-4 min-w-60 mt-8">
              <p className="uppercase mb-2  font-semibold">Type</p>
              <div className="flex flex-col gap-2 text-gray-500">
                <p>
                  <input
                    type="checkbox"
                    value={"topwear"}
                    className="mr-1"
                    onChange={(e) => onAddType(e.target.value)}
                  />
                  Topwear
                </p>
                <p>
                  <input
                    type="checkbox"
                    value={"bottomwear"}
                    className="mr-1"
                    onChange={(e) => onAddType(e.target.value)}
                  />
                  Bottomwear
                </p>
                <p>
                  <input
                    type="checkbox"
                    value={"winterwear"}
                    className="mr-1"
                    onChange={(e) => onAddType(e.target.value)}
                  />
                  Winterwear
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCTS --- RIGHT SIDE OF COLLECTION PAGE */}
        <div className=" flex-1">
          <div className="flex justify-between">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <select
              name=""
              id=""
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border p-1 border-gray-400"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="lowtohigh">Sort by: Low to High</option>
              <option value="hightolow">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {filteredProducts?.map((product) => (
              <ProductItem key={product._id} productObj={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
