import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import { useUserContext } from "../contexts/UserContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
const Login = () => {
  const { loginUser, registerUser, isLoginLoading } = useUserContext();
  const [currentState, setCurrentState] = useState("signup");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChangeCredentials = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitForm = async (e) => {
    let err = null;
    e.preventDefault();
    if (currentState === "login") {
      err = await loginUser(credentials);
      if (err) {
        return toast.error(err);
      }
      toast.success("You succesfully logged in!");
    }
    if (currentState === "signup") {
      err = await registerUser(credentials);
      if (err) {
        return toast.error(err);
      } else {
        toast.success("You succesfully registered!");
      }
    }
  };
  return (
    <div className="flex items-center justify-center mt-16 flex-col">
      {currentState === "signup" ? (
        <Title text1={"SIGN"} text2={"UP"} />
      ) : (
        <Title text1={"LOG"} text2={"IN"} />
      )}
      <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
        {currentState === "signup" ? (
          <input
            type="text"
            placeholder="Name"
            className="border border-black py-2 px-40 pl-2"
            name="name"
            value={credentials.name}
            onChange={handleChangeCredentials}
            required
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="E-mail"
          className="border border-black py-2 px-40 pl-2"
          name="email"
          value={credentials.email}
          onChange={handleChangeCredentials}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black py-2 px-40 pl-2"
          name="password"
          value={credentials.password}
          onChange={handleChangeCredentials}
          required
        />
        <div className="flex justify-between">
          <p className="cursor-pointer">Forgot your password? </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              if (currentState === "login") return setCurrentState("signup");
              setCurrentState("login");
            }}
          >
            {currentState === "signup" ? "Login Here" : "Sign Up"}
          </p>
        </div>
        {isLoginLoading ? (
          <LoadingSpinner />
        ) : (
          <button
            className="text-white bg-black py-2 px-8 uppercase w-fit mx-auto mt-4"
            type="submit"
          >
            {currentState === "signup" ? "Sign Up" : "Login"}
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
