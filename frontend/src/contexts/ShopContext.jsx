import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const getItemById = (productId) => {
    const item = products.find((item) => item._id === productId);
    return item;
  }; // TODO: use this function for other places that you find item by its id..

  const calculateCartSubtotal = () => {
    const total = cartItems.reduce(
      (acc, curr) =>
        Number(getItemById(curr.productId).price) * Number(curr.quantity) + acc,
      0
    );
    return total;
  };
  const onChangeQuantity = (productId, size, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };
  const onAddCartItem = (productId, size) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.productId === productId && item.size === size
      );
      if (existingItem) {
        return prev.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, size, quantity: 1 }];
    });
  };
  const onDeleteCartItem = (productId, size) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== productId || item.size !== size)
    );
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    onAddCartItem,
    cartItems,
    onDeleteCartItem,
    calculateCartSubtotal,
    getItemById,
    onChangeQuantity,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined)
    throw new Error("ShopContext was used outside of the ShopContextProvider!");
  return context;
};

export default ShopContextProvider;
