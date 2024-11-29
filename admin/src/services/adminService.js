import axios from "axios";
const URL = "http://localhost:4000";

export const adminLogin = async (credentials) => {
  try {
    const response = await axios.post(`${URL}/api/user/admin`, credentials);

    if (response.data.status) {
      return response.data.message;
    } else {
      throw new Error(response.data.message || "Admin Login Failed!");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${URL}/api/products`, productData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
