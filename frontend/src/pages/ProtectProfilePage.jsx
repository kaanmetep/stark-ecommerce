import React from "react";
import { useUserContext } from "../contexts/UserContext";
import Login from "./Login";
const ProtectProfilePage = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? children : <Login />;
};

export default ProtectProfilePage;
