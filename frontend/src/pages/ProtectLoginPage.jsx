import React from "react";
import Profile from "./Profile";
import { useUserContext } from "../contexts/UserContext";
const ProtectLoginPage = ({ children }) => {
  const { isAuthenticated } = useUserContext();
  return isAuthenticated ? <Profile /> : children;
};

export default ProtectLoginPage;
