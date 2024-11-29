import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import Login from "../components/Login";
const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? children : <Login />;
};

export default ProtectRoute;
