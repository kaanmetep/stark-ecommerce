import React from "react";
import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { adminLogin } from "../services/adminService";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);

  const saveLocalStorage = (token) => {
    localStorage.setItem("token", token);
  };
  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  const login = async (credentials) => {
    try {
      setLoginLoading(true);
      const token = await adminLogin(credentials);
      if (token) {
        setIsAuthenticated(true);
        saveLocalStorage(token);
      }
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    if (localStorage.getItem("token")) {
      removeLocalStorage("token");
    }
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    login,
    loginError,
    loginLoading,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext used outside of its scope.");
  return context;
};

export default AuthContextProvider;
