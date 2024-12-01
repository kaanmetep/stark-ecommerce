import React from "react";
import Title from "../components/Title";
import { useShopContext } from "../contexts/ShopContext";
import { useUserContext } from "../contexts/UserContext";
import { useEffect, useState } from "react";
function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

const Orders = () => {
  const { currency } = useShopContext();
  const { currentUser } = useUserContext();

  console.log(currentUser);
  return (
    <div className="border-t">
      <div className="mt-10">
        <Title text1={"MY"} text2={"ORDERS"} />
        <div>
          {currentUser &&
            currentUser?.orders?.map((item, index) => (
              <div className="border-t border-b p-2">
                <div>
                  <p>
                    {index + 1}. Order: {formatDate(item.date)}
                  </p>
                  {item?.items?.map((order) => (
                    <div>
                      <p>{order.productId}</p>
                      <p>{order.size}</p>
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
// <div className="border-t border-b flex justify-between items-center py-2">
//   <div className="flex gap-4">
//     <img src={item?.image[0]} alt="item_image" className="w-24" />
//     <div className="flex flex-col justify-center">
//       <p>{item?.name}</p>
//       <div className="flex gap-4">
//         <p>
//           {currency}
//           {item?.price * cartItems[index]?.quantity}
//         </p>
//         <p>Quantity: {cartItems[index]?.quantity}</p>
//         <p>Size: {cartItems[index]?.size}</p>
//       </div>
//     </div>
//   </div>
//   <div className="flex gap-4 items-center">
//     <p className="w-4 h-4 border-2 rounded-full bg-green-500 "></p>
//     <p>Ready To Ship</p>
//   </div>
//   <div>
//     <button className="border py-2 px-6">Track Order</button>
//   </div>
// </div>
