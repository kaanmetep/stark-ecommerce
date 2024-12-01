import axios from "axios";
const URL = "http://localhost:4000";
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${URL}/api/user/login`, credentials);
    if (response.data.status) {
      return response.data.message;
    } else {
      throw new Error(response.data.message || "Login Failed!");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};
export const register = async (credentials) => {
  try {
    const response = await axios.post(`${URL}/api/user/register`, credentials);
    if (response.data.status) {
      return response.data.message;
    } else {
      throw new Error(response.data.message || "Register Failed");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};
export const getUser = async (id) => {
  try {
    const user = await axios.get(`${URL}/api/user/${id}`);
    return user.data;
  } catch (err) {
    console.error(err.message);
    throw new Error("Couldnt fetch user data!");
  }
};
