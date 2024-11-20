import { createContext, useContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const value = { products, currency, delivery_fee };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (context === undefined)
    throw new Error("ShopContext was used outside of the ShopContextProvider!");
  return context;
};

export default ShopContextProvider;
