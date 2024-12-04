import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { getOrders } from "../services/adminService";
import { getProduct } from "../services/adminService";
function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat("en-EN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

const Orders = () => {
  const [orders, setOrders] = useState();
  const fetchOrders = async () => {
    const response = await getOrders();
    setOrders(response);
  };
  useEffect(() => {
    (async () => {
      await fetchOrders();
    })();
  }, []);
  console.log(orders);
  return orders ? (
    <div>
      {orders.map((order) => (
        <div key={order._id} className="border-b border-t p-4">
          <p className="mb-2 text-red-800 font-semibold">
            {formatDate(order.date)}
          </p>
          <div>
            {order.items.map((item) => (
              <div key={item._id} className="flex gap-8 mb-2">
                <p className="text-black font-bold">
                  Product Id:{" "}
                  <span className="text-gray-600 font-normal">
                    {item.productId}
                  </span>
                </p>
                <p className="font-bold">
                  Size:{" "}
                  <span className="font-normal">{item.size.toUpperCase()}</span>
                </p>
                <p>x {item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default Orders;
