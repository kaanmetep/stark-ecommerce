import axios from "axios";
const URL = "http://localhost:4000";
export const getProducts = async () => {
  try {
    const response = await axios.get(`${URL}/api/products`);
    return response.data.message;
  } catch (err) {
    console.error(err.message);
    throw new Error();
  }
};
