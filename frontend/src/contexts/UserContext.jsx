import { createContext, useContext, useState, useEffect } from "react";
import { login, register, getUser } from "../services/userService";
import { jwtDecode } from "jwt-decode";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getCurrentUser();
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }, []);
  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not logged in!");
      }
      const decodedToken = jwtDecode(token);
      const user = await getUser(decodedToken.id);
      setCurrentUser(user.message);
    } catch (err) {
      console.log(err.message);
    }
  };
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
  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      return true;
    }
  };

  const value = {
    isAuthenticated,
    loginUser,
    registerUser,
    isLoginLoading,
    logout,
    currentUser,
    getCurrentUser,
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
