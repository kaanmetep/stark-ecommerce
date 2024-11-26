import React from "react";
import Title from "../components/Title";
import { useShopContext } from "../contexts/ShopContext";
import { useEffect, useState } from "react";
// TODO: CHANGE ITEMS WITH REAL ORDERS/DATA LATER.
// THIS COMPONENT IS JUST FOR UI PURPOSES FOR NOW.
const Orders = () => {
  const { cartItems, getItemById, currency } = useShopContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(cartItems?.map((cartItem) => getItemById(cartItem.productId)));
  }, [cartItems]);
  return (
    <div className="border-t">
      <div className="mt-10">
        <Title text1={"MY"} text2={"ORDERS"} />
        <div>
          {items?.map((item, index) => (
            <div className="border-t border-b flex justify-between items-center py-2">
              <div className="flex gap-4">
                <img src={item.image[0]} alt="item_image" className="w-24" />
                <div className="flex flex-col justify-center">
                  <p>{item.name}</p>
                  <div className="flex gap-4">
                    <p>
                      {currency}
                      {item.price * cartItems[index]?.quantity}
                    </p>
                    <p>Quantity: {cartItems[index]?.quantity}</p>
                    <p>Size: {cartItems[index]?.size}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="w-4 h-4 border-2 rounded-full bg-green-500 "></p>
                <p>Ready To Ship</p>
              </div>
              <div>
                <button className="border py-2 px-6">Track Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
