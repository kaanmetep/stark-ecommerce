import React from "react";

const Title = ({ text1, text2, className = "" }) => {
  return (
    <div className={`flex gap-2 items-center mb-3 text-2xl ${className}`}>
      <p className="text-gray-600">
        {text1} <span className="text-gray-800 font-bold">{text2}</span>
      </p>
      <hr className="h-[3px] bg-gray-800 w-12" />
    </div>
  );
};

export default Title;
