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

export const getProducts = async () => {
  try {
    const response = await axios.get(`${URL}/api/products`);
    return response.data.message;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${URL}/api/products/${id}`);
    return response.data.message;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URL}/api/products/${id}`, {
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

export const getOrders = async () => {
  try {
    const response = await axios.get(`${URL}/api/orders`);
    return response.data.message;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
