import React from "react";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
const Login = () => {
  const { login, loginError, loginLoading } = useAuthContext();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "kaan@stark.ecommerce",
    password: "adminpass",
  });
  const onChangeLoginCredentials = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    login(loginCredentials);
  };
  return (
    <div className=" w-full flex items-center justify-center bg-gray-100  ">
      <div className="p-6 px-20 shadow-lg bg-white rounded-md ">
        <p className="font-semibold mb-4 text-xl">Admin Panel</p>
        <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
          <div className="flex flex-col gap-1 sm:min-w-72">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="your@email.com"
              className="border px-2 py-1 outline-none rounded-md"
              name="email"
              value={loginCredentials.email}
              onChange={onChangeLoginCredentials}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border px-2 py-1 outline-none rounded-md"
              name="password"
              value={loginCredentials.password}
              onChange={onChangeLoginCredentials}
            />
          </div>
          {loginLoading ? (
            <LoadingSpinner />
          ) : (
            <button className="text-white bg-black py-2 rounded-md">
              Login
            </button>
          )}
        </form>
        <p className="text-center mt-2 text-red-500 font-semibold">
          {loginError}
        </p>
      </div>
    </div>
  );
};

export default Login;
