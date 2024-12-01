import React from "react";
import Title from "../components/Title";
import { useShopContext } from "../contexts/ShopContext";
import { useUserContext } from "../contexts/UserContext";
function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
const Orders = () => {
  const { currency, getItemById } = useShopContext();
  const { currentUser } = useUserContext();
  return (
    <div className="border-t">
      <div className="mt-10">
        <Title text1={"MY"} text2={"ORDERS"} />
        <div>
          {currentUser &&
            currentUser?.orders?.map((item, index) => (
              <div className="border-t border-b p-2">
                <div>
                  <p className="mb-2 font-bold text-lg">
                    {index + 1}. Order: {formatDate(item.date)}
                  </p>
                  {item?.items?.map((order) => (
                    <div className="grid grid-cols-[1fr,3fr,1fr,1fr,2fr,1fr] gap-4 items-center mb-4">
                      <img
                        src={getItemById(order.productId).image[0]}
                        alt="product_image"
                        className="w-16"
                      />
                      <p>{getItemById(order.productId).name}</p>
                      <p>{order.size.toUpperCase()}</p>
                      <p>x {order.quantity}</p>
                      <div className="flex gap-2 items-center mx-auto">
                        <p className="w-4 h-4 border-2 rounded-full bg-green-500 "></p>
                        <p>Ready To Ship</p>
                      </div>
                      <p className="font-semibold">
                        {currency}{" "}
                        {getItemById(order.productId).price * order.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Orders;
