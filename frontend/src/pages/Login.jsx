import React from "react";
import { useState } from "react";
import Title from "../components/Title";
const Login = () => {
  const [currentState, setCurrentState] = useState("signup");
  const onSubmitForm = (e) => {
    e.preventDefault();
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
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="E-mail"
          className="border border-black py-2 px-40 pl-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black py-2 px-40 pl-2"
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
        <button
          className="text-white bg-black py-2 px-8 uppercase w-fit mx-auto mt-4"
          type="submit"
        >
          {currentState === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
