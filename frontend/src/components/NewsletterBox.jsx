import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-gray-800 mb-2 font-semibold">
          Subscribe now & get 20% off
        </p>
        <p className="text-gray-600 text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full sm:flex-1 outline-none"
            required
          />
          <button
            type="submit"
            className="uppercase bg-black text-white text-xs px-10 py-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBox;
