import axios from "axios";
const URL = "http://localhost:4000";

export const createOrder = async (cartItems) => {
  try {
    const userToken = localStorage.getItem("token");
    console.log(userToken);
    if (!userToken) {
      return null;
    }
    const response = await axios.post(`${URL}/api/orders`, cartItems, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
    throw new Error();
  }
};