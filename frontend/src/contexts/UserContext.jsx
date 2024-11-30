import { createContext, useContext, useState, useEffect } from "react";
import { login, register } from "../services/userService";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const loginUser = async (credentials) => {
    try {
      setIsLoginLoading(true);
      const token = await login(credentials);
      if (token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", token);
      }
    } catch (err) {
      return err.message;
    } finally {
      setIsLoginLoading(false);
    }
  };
  const registerUser = async (credentials) => {
    try {
      setIsLoginLoading(true);
      const token = await register(credentials);
      if (token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", token);
        return null;
      }
    } catch (err) {
      return err.message;
    } finally {
      setIsLoginLoading(false);
    }
  };
  const value = {
    isAuthenticated,
    loginUser,
    registerUser,
    isLoginLoading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User Context used outside of its scope.");
  }
  return context;
};

export default UserContextProvider;
